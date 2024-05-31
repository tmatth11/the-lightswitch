const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobile-nav");

burger.addEventListener("click", () => {
    mobileNav.classList.toggle("hidden");
});