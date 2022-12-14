export class Cart {
  static #cart = JSON.parse(localStorage.getItem("cart"));
  static #carts = localStorage.getItem("carts")
    ? JSON.parse(localStorage.getItem("carts"))
    : [];
  static addPorduct(id) {
    const index = this.#cart.products.findIndex((p) => p.id == id);
    if (index == -1) {
      this.#cart.products.push({ id, amount: 1 });
    } else {
      this.#cart.products[index].amount += 1;
    }
    const cartIndex = this.#carts.findIndex((c) => c.id == this.#cart.id);
    this.#carts.splice(cartIndex, 1);
    this.#carts.push(this.#cart);
    console.log(this.#carts);
    localStorage.setItem("cart", JSON.stringify(this.#cart));
    localStorage.setItem("carts", JSON.stringify(this.#carts));
  }
  static getSavedCart() {
    return JSON.parse(this.#cart);
  }
  static getCartById(id) {
    const index = this.#carts.findIndex((c) => c.id == id);
    return index != -1 ? this.#carts[index] : null;
  }
  static createEmptyCart(id) {
    const cart = { id, products: [] };
    this.#carts.push(cart);
    localStorage.setItem("carts", JSON.stringify(this.#carts));
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  static deleteProduct(id) {
    const index = this.#cart.products.findIndex((p) => p.id == id);
    this.#cart.products.splice(index, 1);
    const cartIndex = this.#carts.findIndex((c) => c.id == this.#cart.id);
    this.#carts.splice(cartIndex, 1);
    this.#carts.push(this.#cart);
    localStorage.setItem("cart", JSON.stringify(this.#cart));
    localStorage.setItem("carts", JSON.stringify(this.#carts));
    if (this.#cart.products.length == 0) {
      document.querySelector("#cart-hook button.checkout-btn").style.display =
        "none";
    }
  }
}
