export class Product {
  static #api = "https://dummyjson.com/products/";
  static #categories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ];
  static async getAll() {
    const response = await fetch(
      this.#api +
        "?select=id,title,description,price,thumbnail,discountPercentage,rating"
    );
    return response.json();
  }
  static async getById(id) {
    const response = await fetch(this.#api + id);
    return await response.json();
  }
  static async getByCategory(category) {
    if (!this.#categories.includes(category))
      return alert(category + " un known category");
    const response = await fetch(this.#api + "category/" + category);
    return response.json();
  }
  static async getBySearch(target) {
    const response = await fetch(this.#api + "search?q=" + target);
    return response.json();
  }
  static getAllCategories() {
    return this.#categories;
  }
}
