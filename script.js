function hideNavBar() {
  const outerGrid = document.querySelector("body");
  outerGrid.classList.toggle("navbarexpanded");
  const hideNavBar = document.querySelector(".sidenavbar");
  hideNavBar.classList.toggle("hide");
}
