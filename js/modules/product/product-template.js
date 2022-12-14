export class ProductTemplate {
  static #single(product) {
    const { id, title, price, thumbnail, description, rating } = product;
    const template = `<div class="product">
            <div class="header">
            <span class=rating>${rating} <i class="fa-solid fa-star"></i></span>
            <img src="${thumbnail}" alt="" />
            </div>
            <div class="info">
              <h3 class="title">${title}</h3>
              <span class=price ><strong>${price} <i class="fa-solid fa-dollar-sign"></i></strong></span>
              <p class=description>${description}</p>
            </div>
            <button id=${id} price=${price} class="add-btn">
              <i class="fa-sharp fa-solid fa-cart-plus"></i>
            </button>
            <button class="info-btn">
              <i class="fa-solid fa-circle-info">
            </i></button>
        </div>`;
    return template;
  }
  static #multi(products) {
    let template = ``;
    for (let product of products) {
      template += this.#single(product);
    }
    return template;
  }
  static append(hook, products) {
    const html = this.#multi(products);
    hook.insertAdjacentHTML("afterbegin", html);
  }
}
