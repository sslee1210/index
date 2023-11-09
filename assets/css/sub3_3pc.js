// Select the p elements
const prevText = document.getElementById("changingTextB");
const nextText = document.getElementById("changingTextF");

// Function to update the text based on window width
function updateButtonText() {
  if (window.innerWidth >= 1200) {
    prevText.textContent = "우수작 보러가기";
    nextText.textContent = "최우수작 보러가기";
  } else {
    prevText.textContent = "이전";
    nextText.textContent = "다음";
  }
}

// Initial call to set the text based on window width
updateButtonText();

// Add an event listener to update the text on window resize
window.addEventListener("resize", updateButtonText);
