export const navbarActions = () => {
  let hideNavbarCollapse = true;
  const navbarCollaspeTogglerBtn =
    document.getElementById("navbar-toggler-btn");
  const navbarCollapse = document.querySelector("div.navbar-collapse");
  document.body.onresize = function (e) {
    const width = e.target.innerWidth;
    hideNavbarCollapse = true;
    if (width > 720) {
      navbarCollapse.style.display = "block";
    } else {
      navbarCollapse.style.display = "none";
    }
  };
  navbarCollaspeTogglerBtn.onclick = () => {
    const styleMode = hideNavbarCollapse ? "block" : "none";
    hideNavbarCollapse = !hideNavbarCollapse;
    navbarCollapse.style.display = styleMode;
  };
  const navbarLinks = document.querySelectorAll(
    "#navbar div.navbar-collapse ul li"
  );
  for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener("click", function () {
      for (let i = 0; i < navbarLinks.length; i++) {
        navbarLinks[i].classList.remove("active");
      }
      this.classList.add("active");
    });
  }
};
export const searchInput = document.querySelector("#navbar form input");
