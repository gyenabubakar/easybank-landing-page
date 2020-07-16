"use strict";
// listen for when document loads
window.addEventListener("DOMContentLoaded", function (e) {
    // hamburger menu
    var openMenu = document.querySelector("img.open-menu");
    // times icon
    var closeMenu = document.querySelector("img.close-menu");
    // mobile menu
    var mobileMenu = document.querySelector("div.mobile-nav");
    // listen for when hamburger menu is clicked
    openMenu === null || openMenu === void 0 ? void 0 : openMenu.addEventListener("click", function (e) {
        // show menu
        showMenu();
        // listen for when close button is clicked
        closeMenu.addEventListener("click", hideMenu);
        // what if a blank space is clicked, instead of the UL element?
        document.addEventListener("click", function (e) {
            // check if the target is the DIV with the "mobile-nav" class
            if (e.target.classList.contains("mobile-nav")) {
                // if true, close the menu
                hideMenu();
            }
        });
    });
    //   function for showing the menu
    var showMenu = function () {
        // slide mobile menu into display
        mobileMenu.style.top = "60px";
        // remove "shown" class from hamburger element
        openMenu.classList.remove("shown");
        // add "shown" to the time icon
        closeMenu.classList.add("shown");
    };
    var hideMenu = function () {
        // slide mobile menu out of display
        mobileMenu.style.top = "-100vh";
        // remove "shown" class from close-menu element
        closeMenu.classList.remove("shown");
        // add "shown" to the hamburger icon
        openMenu.classList.add("shown");
    };
});
