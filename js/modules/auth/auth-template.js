export class AuthTemplate {
  static #getSigninTemplate() {
    const template = `<div id="signin">
      <div class="container">
        <form>
          <div><h3>sign in</h3></div>
          <div class=error-alert>wrong email or password</div>
          <div>
            <i class="fa-solid fa-envelope"></i>
            <input type="email" placeholder="email" name=email />
          </div>
          <div>
            <i class="fa-solid fa-lock"></i>
            <input type="password" placeholder="password..." name=password />
          </div>
          <div>
            <button type="submit">
              <i class="fa-solid fa-arrow-right-to-bracket"></i> sign in
            </button>
          </div>
        </form>
      </div>`;
    return template;
  }
  static #getSignupTemplate() {
    const template = `<div id="signup">
      <div class="container">
        <form>
          <div><h3>sign up</h3></div>
          <div class=error-alert>wrong email or password</div>
          <div>
            <i class="fa-solid fa-user"></i>
            <input type="text" placeholder="name" name="name"/>
          </div>
          <div>
            <i class="fa-solid fa-envelope"></i>
            <input type="email" placeholder="email" name=email />
          </div>
          <div>
            <i class="fa-solid fa-phone"></i>
            <input type="tel" placeholder="phone..." name=phone />
          </div>
          <div>
            <i class="fa-solid fa-lock"></i>
            <input type="password" placeholder="password..." name=password />
          </div>
          <div>
            <button type="submit">
              <i class="fa-solid fa-arrow-right-to-bracket"></i> sign up
            </button>
          </div>
        </form>
      </div>
    </div>`;
    return template;
  }
  static getAuthTemplate(template) {
    if (template == "signin") return this.#getSigninTemplate();
    else if (template == "signup") return this.#getSignupTemplate();
  }
}
