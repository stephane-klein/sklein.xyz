const saved_theme = localStorage.getItem("theme");
if (saved_theme) {
    document.documentElement.setAttribute("data-theme", saved_theme);
} else {
    const prefers_light = window.matchMedia(
        "(prefers-color-scheme: light)"
    ).matches;
    const theme = prefers_light ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}
