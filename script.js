
// ============================
// DARK / LIGHT MODE
// ============================

const themeToggle = document.getElementById("themeToggle");

// Ambil tema yang tersimpan
const savedTheme = localStorage.getItem("portfolioTheme");

// Terapkan tema saat website dibuka
if (savedTheme === "light") {
    document.body.classList.add("light");
    themeToggle.textContent = "☾";
} else {
    document.body.classList.remove("light");
    themeToggle.textContent = "☀";
}

// Klik tombol tema
themeToggle.addEventListener("click", function() {

    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    themeToggle.textContent = isLight ? "☾" : "☀";

    localStorage.setItem(
        "portfolioTheme",
        isLight ? "light" : "dark"
    );

});


// ============================
// MOBILE NAVIGATION
// ============================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// Buka dan tutup menu
menuToggle.addEventListener("click", function() {
    navMenu.classList.toggle("show");

    const isOpen = navMenu.classList.contains("show");
    menuToggle.textContent = isOpen ? "✕" : "☰";

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Tutup menu" : "Buka menu"
    );

});

// Tutup menu setelah memilih halaman
document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", function() {

        navMenu.classList.remove("show");
        menuToggle.textContent = "☰";

    });

});
