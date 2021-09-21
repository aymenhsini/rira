//navbar functions
var navList = document.getElementById("nav-lists");
function Show() {
  navList.classList.add("_Menus-show");
  navList.style.transition = "ease-out 0.5s";
}

function Hide() {
  navList.classList.remove("_Menus-show");
  navList.style.transition = "ease-out 0.5s";
}
