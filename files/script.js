document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (prefersDarkMode) {
        body.classList.add("dark-mode");
    }else{
        body.classList.add("light-mode");
    }

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("light-mode-toggle");
    const body = document.body;

    const prefersLightMode = window.matchMedia("(prefers-color-scheme: light)").matches;

    if (prefersLightMode) {
        body.classList.add("light-mode");
    }

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("light-mode");
    });
});
