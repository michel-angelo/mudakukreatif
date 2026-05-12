const pages = ["home", "events", "gallery", "profile"];

function go(name) {
  // 1. Sembunyikan semua page, tampilkan yang dipilih
  pages.forEach((p) => {
    document.getElementById("page-" + p).classList.remove("active");
  });
  document.getElementById("page-" + name).classList.add("active");

  // 2. Hapus class 'active' dari semua link
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => link.classList.remove("active"));

  // 3. Tambahkan class 'active' HANYA ke link yang di-klik
  // (Menggunakan trik mencari teks pada atribut onclick)
  navLinks.forEach((link) => {
    if (link.getAttribute("onclick").includes(`'${name}'`)) {
      link.classList.add("active");
    }
  });

  // 4. Scroll ke atas dan tutup menu mobile
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
