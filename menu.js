// Mobile menu: toggle, close on Escape or link click, return focus to the button.
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#primary-nav");
const mobile = window.matchMedia("(max-width: 47.99em)");

function setOpen(open, { restoreFocus = false } = {}) {
  toggle.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("is-open", open);
  if (restoreFocus) toggle.focus();
}

toggle.addEventListener("click", () => {
  setOpen(toggle.getAttribute("aria-expanded") !== "true");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav.classList.contains("is-open")) {
    setOpen(false, { restoreFocus: true });
  }
});

mobile.addEventListener("change", (event) => {
  if (!event.matches) setOpen(false);
});
