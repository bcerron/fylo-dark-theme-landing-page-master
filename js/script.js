const darkThemeIconElement = document.getElementById("theme");
const otherDarkElement = document.getElementsByClassName("bgcolor2");

darkThemeIconElement.addEventListener("click", () => {
  console.log("click");
  document.body.classList.toggle("dark");
  otherDarkElement.classList.toggle("dark");
});
