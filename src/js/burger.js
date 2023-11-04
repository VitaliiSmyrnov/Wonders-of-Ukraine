const refs = {
  mobileMenu: document.querySelector("[data-menu]"),
  mobileMenuButton: document.querySelector("[data-menu-button]"),
  mobileMenuCloseButton: document.querySelector("[data-menu-close]"),
};

refs.mobileMenuButton.addEventListener("click", burgerMobile);

refs.mobileMenuCloseButton.addEventListener("click", burgerMobile);

refs.mobileMenu.addEventListener("click", burgerLinks);

function burgerMobile() {
  refs.mobileMenu.classList.toggle("-translate-y-full");
  refs.mobileMenu.classList.toggle("backdrop-hidden");
}

function burgerLinks(event) {
  if (event.target.nodeName !== "A") {
    return;
  }

  burgerMobile();
}
