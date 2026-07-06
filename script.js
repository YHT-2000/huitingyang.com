const root = document.body;
const languageButtons = document.querySelectorAll("[data-set-lang]");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

function setLanguage(lang) {
  root.classList.toggle("lang-en", lang === "en");
  document.documentElement.lang = lang === "en" ? "en" : "zh-CN";

  languageButtons.forEach((button) => {
    const active = button.dataset.setLang === lang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  window.localStorage.setItem("preferredLanguage", lang);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.setLang));
});

navToggle.addEventListener("click", () => {
  const open = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(open));
});

siteNav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

setLanguage(window.localStorage.getItem("preferredLanguage") || "zh");
