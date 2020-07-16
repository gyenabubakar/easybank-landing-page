// listen for when document loads
(window as Window).addEventListener("DOMContentLoaded", (e: Event) => {
  // hamburger menu
  const openMenu = document.querySelector("img.open-menu") as HTMLImageElement;
  // times icon
  const closeMenu = document.querySelector(
    "img.close-menu"
  ) as HTMLImageElement;

  // mobile menu
  const mobileMenu = document.querySelector("div.mobile-nav") as HTMLDivElement;

  // listen for when hamburger menu is clicked
  openMenu?.addEventListener("click", (e: Event) => {
    // show menu
    showMenu();

    // listen for when close button is clicked
    closeMenu.addEventListener("click", hideMenu);

    // what if a blank space is clicked, instead of the UL element?
    document.addEventListener("click", (e: Event) => {
      // check if the target is the DIV with the "mobile-nav" class
      if ((e.target as HTMLElement).classList.contains("mobile-nav")) {
        // if true, close the menu
        hideMenu()
      }
    });
  });

  //   function for showing the menu
  const showMenu = () => {
    // slide mobile menu into display
    mobileMenu.style.top = "60px";

    // remove "shown" class from hamburger element
    openMenu.classList.remove("shown");

    // add "shown" to the time icon
    closeMenu.classList.add("shown");
  };

  const hideMenu = () => {
    // slide mobile menu out of display
    mobileMenu.style.top = "-100vh";

    // remove "shown" class from close-menu element
    closeMenu.classList.remove("shown");

    // add "shown" to the hamburger icon
    openMenu.classList.add("shown");
  };
});
