const themeToggleButton = document.querySelector("button.theme-toggle-button");

function changeTheme() {
  // Selecting all the elements the their styles need to be changed
  document.body.classList.toggle("light");
  document.querySelector("nav").classList.toggle("light");
  document.querySelector(".nav-right a").classList.toggle("light");
  document
    .querySelector("button.theme-toggle-button")
    .classList.toggle("light");
  document.querySelector("svg").classList.toggle("light");
  document.querySelector("section.for-light-theme1").classList.toggle("light");
  document.querySelector("section.for-light-theme2").classList.toggle("light");
  document.querySelector("section.for-light-theme3").classList.toggle("light");
}

themeToggleButton.addEventListener("click", changeTheme);

/* Create clickability  for tribute projects*/
const tribute = document.querySelector("li.tribute");
function showDescriptionTribute() {
  document
    .querySelector("div.des-for-tribute")
    .classList.toggle("show-des-tribute");
}
tribute.addEventListener("click", showDescriptionTribute);

/* Create clickability  for responsive club projects*/
const club = document.querySelector("li.club");
function showDescriptionClub() {
  document.querySelector("div.des-for-club").classList.toggle("show-des-club");
}
club.addEventListener("click", showDescriptionClub);

/* Create clickability  for karbala project projects*/
const tour = document.querySelector("li.tour");
function showDescriptionTour() {
  document.querySelector("div.des-for-tour").classList.toggle("show-des-tour");
}
tour.addEventListener("click", showDescriptionTour);

/* Fix the hover button for the light theme for subject of projects */
