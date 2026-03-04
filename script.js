const pages = ["home", "events", "gallery", "profile"];
function go(name) {
  pages.forEach((p) =>
    document.getElementById("page-" + p).classList.remove("active"),
  );
  document.getElementById("page-" + name).classList.add("active");
  document
    .querySelectorAll(".nav-links a")
    .forEach((a, i) => a.classList.toggle("active", pages[i] === name));
  window.scrollTo({ top: 0, behavior: "smooth" });
  document.getElementById("navLinks").classList.remove("open");
}
function toggleNav() {
  document.getElementById("navLinks").classList.toggle("open");
}
window.addEventListener("scroll", () => {
  document
    .getElementById("nav")
    .classList.toggle("scrolled", window.scrollY > 20);
});
