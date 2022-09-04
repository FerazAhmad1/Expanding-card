const panels = document.querySelectorAll(".panel");
console.log(panels);

panels.forEach(function (element, i, arr) {
  element.addEventListener("click", () => {
    removeActiveClasses();
    element.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach(function (panel) {
    panel.classList.remove("active");
  });
}
