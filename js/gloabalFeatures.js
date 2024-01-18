//Get the button
let btnScrollToTop = document.getElementById("btn-back-to-top");
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnScrollToTop.style.display = "block";
  } else {
    btnScrollToTop.style.display = "none";
  }
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  // When the user clicks on the button, scroll to the top of the document
  window.addEventListener("scroll", scrollFunction);
  btnScrollToTop.addEventListener("click", backToTop);

  if (
    localStorage.getItem("color-mode") === "dark" ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches &&
      !localStorage.getItem("color-mode"))
  ) {
    document.documentElement.setAttribute("color-mode", "dark");
  }

  if (window.CSS && CSS.supports("color", "var(--primary)")) {
  let toggleColorMode = function toggleColorMode(e) {
    // Switch to Light Mode
    if (e.currentTarget.classList.contains("light--hidden")) {
      // Sets the custom html attribute
      document.documentElement.setAttribute("color-mode", "light"); // Sets the user's preference in local storage

      localStorage.setItem("color-mode", "light");
      return;
    }
    /* Switch to Dark Mode
    Sets the custom html attribute */
    document.documentElement.setAttribute("color-mode", "dark"); // Sets the user's preference in local storage

    localStorage.setItem("color-mode", "dark");
  }; // Get the buttons in the DOM

  let toggleColorButtons = document.querySelectorAll(".color-mode__btn"); // Set up event listeners

  toggleColorButtons.forEach(function(btn) {
    btn.addEventListener("click", toggleColorMode);
  });
} else {
  // If the feature isn't supported, then we hide the toggle buttons
  let btnContainer = document.querySelector(".color-mode__header");
  btnContainer.style.display = "none";
}
