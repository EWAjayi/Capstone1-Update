//Get the scroll to top button
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


  //dark mode/light mode button
  document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggleBtn');
    const body = document.body;

    if (!toggleBtn || !body) {
        console.error("Error: Toggle button or body element not found.");
        return;
    }

    toggleBtn.addEventListener('click', function () {
        if (!body.classList) {
            console.error("Error: classList not supported on body element.");
            return;
        }

        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');

        // Update button text based on the current mode
        const currentMode = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
        toggleBtn.textContent = `Toggle to ${currentMode}`;
    });
});
