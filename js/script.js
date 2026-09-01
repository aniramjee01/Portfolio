// ==========================================
// DARK / LIGHT MODE
// ==========================================

function toggleTheme() {

    document.body.classList.toggle("light-mode");

    const button = document.getElementById("themeToggle");


    if (document.body.classList.contains("light-mode")) {

        button.textContent = "🌙 Dark Mode";

        localStorage.setItem("theme", "light");

    } else {

        button.textContent = "☀️ Light Mode";

        localStorage.setItem("theme", "dark");

    }
}


// ==========================================
// LOAD SAVED THEME
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const savedTheme = localStorage.getItem("theme");

    const button = document.getElementById("themeToggle");


    if (savedTheme === "light") {

        document.body.classList.add("light-mode");

        if (button) {
            button.textContent = "🌙 Dark Mode";
        }

    } else {

        if (button) {
            button.textContent = "☀️ Light Mode";
        }

    }

});