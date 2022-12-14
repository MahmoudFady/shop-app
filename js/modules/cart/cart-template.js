import { Product } from "../product/product.js";

export class CartTemplate {
  static async getCartTemplate() {
    const { products } = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : {};
    if (products.length == 0) {
      return `<h1 style="
    text-align: center;
    margin-top: 50px;
    font-size: 16px;
    color: var(--textColor);">your cart is empty</h1>`;
    }
    let _products = [];
    let cartTemplate = `
    <div id="cart-hook">
      <table class="cart">`;
    for (let i in products) {
      const product = await Product.getById(products[i].id);
      _products.push(product);
    }
    console.log("_products : " + _products);
    for (let i in _products) {
      cartTemplate += `
        <tr>
          <td>
            <img
              src=${_products[i].thumbnail}
              alt=""
            />
          </td>
          <td>${_products[i].brand}</td>
          <td>${_products[i].title}</td>
          <td><i class="fa-solid fa-xmark"></i> ${products[i].amount}</td>
          <td>${_products[i].price} <i class="fa-solid fa-dollar-sign"></i></td>
          <td>
            <button id=${_products[i].id} class=del-cart-btn><i class="fa-solid fa-trash"></i></button>
          </td>
        </tr>
      `;
    }
    cartTemplate += `</table>
      <button class="checkout-btn">
        <i class="fa-solid fa-credit-card"></i> checkout now
      </button>
    </div>`;
    return cartTemplate;
  }
}
