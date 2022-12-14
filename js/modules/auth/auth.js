import { Cart } from "../cart/cart.js";
export class Auth {
  static #users = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  static #authUser = localStorage.getItem("savedUser")
    ? JSON.parse(localStorage.getItem("savedUser"))
    : null;
  static signin(email, password) {
    if (this.#users.length == 0) return false;
    const index = this.#users.findIndex(
      (u) => u.email == email && u.password == password
    );
    if (index == -1) return false;
    this.#authUser = this.#users[index];
    const cart = Cart.getCartById(this.#authUser["id"]);
    localStorage.setItem("savedUser", JSON.stringify(this.#authUser));
    localStorage.setItem("cart", JSON.stringify(cart));
    return true;
  }
  static signup(name, email, phone, password) {
    console.log(this.#users);
    const isUserExist =
      this.#users.findIndex((u) => u.email == email) != -1 ? true : false;
    if (isUserExist) return false;
    const id = Math.random();
    this.#users.push({ id, name, email, phone, password });
    this.#authUser = { id, name, email, phone, password };
    localStorage.setItem("users", JSON.stringify(this.#users));
    localStorage.setItem("savedUser", JSON.stringify(this.#authUser));
    Cart.createEmptyCart(id);
    return true;
  }
  static isAuth() {
    return this.#authUser;
  }
  static logout() {
    this.Auth = null;
    localStorage.removeItem("cart");
    localStorage.removeItem("savedUser");
  }
}
