const toggle = document.querySelector(".nav__toggle");
const links = document.querySelector("#navLinks");

function closeMenu() {
  links?.classList.remove("is-open");
  toggle?.setAttribute("aria-expanded", "false");
}

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof Node)) return;
    if (toggle.contains(target) || links.contains(target)) return;
    closeMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  links.addEventListener("click", (e) => {
    const target = e.target;
    if (target instanceof HTMLAnchorElement && target.getAttribute("href")?.startsWith("#")) {
      closeMenu();
    }
  });
}

