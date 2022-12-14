import { Product } from "./modules/product/product.js";
import { ProductTemplate } from "./modules/product/product-template.js";
import { navbarActions } from "./modules/navbar/navbar.js";
import { NavbarTemplate } from "./modules/navbar/navbar-template.js";
import { AuthTemplate } from "./modules/auth/auth-template.js";
import {
  asyncPasswordValidation,
  asyncPhoneNumValidation,
  isValidEmail,
  isValidPassword,
  isValidPhoneNum,
  isValidText,
  syncEmailValidation,
  syncTextValidation,
} from "./modules/auth/validation.js";
import { Auth } from "./modules/auth/auth.js";
import { Cart } from "./modules/cart/cart.js";
const productsHook = document.getElementById("products-hook");
const authHook = document.getElementById("auth-hook");
const fetchStatus = (status) => {
  productsHook.innerHTML = `<h3 style='text-align:center;width: 100%;color: var(--textColor)'>${status}</h3>`;
};
const render = (response) => {
  authHook.innerHTML = "";
  const { products } = response;
  if (products.length == 0) {
    fetchStatus("products not found");
    return;
  }
  productsHook.innerHTML = "";
  ProductTemplate.append(productsHook, products);
  const buyBtns = document.querySelectorAll("div.product button.add-btn");
  for (let i = 0; i < buyBtns.length; i++) {
    buyBtns[i].onclick = function () {
      const id = this.getAttribute("id");
      if (!Auth.isAuth()) {
        return alert("please signin");
      }
      Cart.addPorduct(id);
    };
  }
};
// display navbar
NavbarTemplate.display();
navbarActions();
const navbarLinks = document.querySelectorAll(
  "#navbar div.navbar-collapse ul li"
);
// when click navbar links
for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    fetchStatus("loading...");
    const category = this.getAttribute("data-target");
    if (category == "all") {
      Product.getAll().then((response) => {
        render(response);
      });
      return;
    }
    Product.getByCategory(category).then((response) => {
      render(response);
    });
  });
}
// search
const input = document.querySelector("#navbar form input");
input.onkeyup = async function () {
  const taregt = this.value;
  Product.getBySearch(taregt)
    .then((response) => {
      render(response);
    })
    .catch((err) => {
      fetchStatus("loading products faild !");
    });
};
// open site
fetchStatus("loading...");
Product.getAll()
  .then((response) => {
    render(response);
  })
  .catch((err) => {
    fetchStatus(err.message);
  });
const authNavs = document.querySelectorAll("#navbar ul.auth li");
for (let i = 0; i < authNavs.length; i++) {
  authNavs[i].onclick = async function () {
    const target = this.getAttribute("data-target");
    const template = await AuthTemplate.getAuthTemplate(target);
    productsHook.innerHTML = "";
    authHook.innerHTML = template;
    syncEmailValidation();
    syncTextValidation();
    asyncPhoneNumValidation();
    asyncPasswordValidation();
    if (target == "logout") {
      Auth.logout();
      location.reload();
    }
    if (target == "signin") {
      const signinForm = document.querySelector("div#signin form");
      signinForm.onsubmit = function (e) {
        e.preventDefault();
        const errorAlertEle = document.querySelector("div.error-alert");
        const email = this.email.value;
        const password = this.password.value;
        if (isValidEmail(email) && isValidPassword(password)) {
          const success = Auth.signin(email, password);
          if (!success) {
            errorAlertEle.innerHTML = "wrong email or password";
            errorAlertEle.classList.add("is-error");
          } else {
            errorAlertEle.classList.remove("is-error");
            location.reload();
          }
        } else {
          errorAlertEle.innerHTML = "please insert valid data";
          errorAlertEle.classList.add("is-error");
        }
      };
    }
    if (target == "signup") {
      const signupform = document.querySelector("div#signup form");
      signupform.onsubmit = function (e) {
        e.preventDefault();
        const errorAlertEle = document.querySelector("div.error-alert");
        const name = this.name.value;
        const email = this.email.value;
        const phone = this.phone.value;
        const password = this.password.value;
        if (
          isValidText(name) &&
          isValidPhoneNum(phone) &&
          isValidEmail(email) &&
          isValidPassword(password)
        ) {
          const success = Auth.signup(name, email, phone, password);
          if (!success) {
            errorAlertEle.innerHTML = "email already exist";
            errorAlertEle.classList.add("is-error");
          } else {
            errorAlertEle.classList.remove("is-error");
            location.reload();
          }
        } else {
          errorAlertEle.innerHTML = "please insert valid data";
          errorAlertEle.classList.add("is-error");
        }
      };
    }
    if (target == "cart") {
      console.log("cart");
      const delCartBtns = document.querySelectorAll(
        "#cart-hook button.del-cart-btn"
      );
      for (let i = 0; i < delCartBtns.length; i++) {
        delCartBtns[i].onclick = async function () {
          const conf = window.confirm("delete prodct form cart ");
          if (!conf) {
            return;
          }
          const id = this.getAttribute("id");
          Cart.deleteProduct(id);
          this.parentElement.parentElement.parentElement.style.display = "none";
        };
      }
    }
  };
}
// signin
