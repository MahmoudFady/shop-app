import { Auth } from "../auth/auth.js";
export class NavbarTemplate {
  static #navbarTemplate = `
    <div class="container">
        <div class="navbar-brand">
          <a href="#">Souq</a>
        </div>        
        <button id="navbar-toggler-btn"><i class="fa fa-bars"></i></button>
        <div class="navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item active" data-target="all">
              <a class="nav-link" href="#"><i class="fa-solid fa-house"></i> home</a>
            </li>
            <li class="nav-item" data-target="smartphones">
              <a class="nav-link" href="#"><i class="fa-solid fa-mobile"></i> phones</a>
            </li>
            <li class="nav-item" data-target="laptops">
              <a class="nav-link" href="#"><i class="fa-solid fa-laptop"></i> laptops</a>
            </li>
          </ul>
        </div>
        <ul class="auth">
          <li class="signin" data-target=signin>
            <a><i class="fa-solid fa-arrow-right-to-bracket"></i> sign in</a>
          </li>
          <li class="signup" data-target=signup>
            <a><i class="fa-solid fa-user-plus"></i> sign up</a>
          </li>
           <li class="cart" data-target=cart>
            <a><i class="fa-solid fa-cart-shopping"></i> cart</a>
          </li>
          <li class="logout" data-target=logout>
            <a><i class="fa-solid fa-arrow-right-to-bracket"></i> logout</a>
          </li>
        </ul>

        <form>
          <i class="fa-solid fa-search"></i>
          <input type="text" placeholder="search..." />
        </form>
      </div>
    `;
  static display() {
    const navbarHook = document.getElementById("navbar");
    navbarHook.innerHTML = "";
    navbarHook.insertAdjacentHTML("afterbegin", this.#navbarTemplate);
    const signupNav = document.querySelector("ul.auth li.signup");
    const signinNav = document.querySelector("ul.auth li.signin");
    const cartNav = document.querySelector("ul.auth li.cart");
    const logoutNav = document.querySelector("ul.auth li.logout");

    if (Auth.isAuth()) {
      signupNav.style.display = "none";
      signinNav.style.display = "none";
      cartNav.style.display = "inline-block";
      logoutNav.style.display = "inline-block";
    } else {
      signupNav.style.display = "inline-block";
      signinNav.style.display = "inline-block";
      cartNav.style.display = "none";
      logoutNav.style.display = "none";
    }
  }
}
