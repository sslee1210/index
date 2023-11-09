function updateButtonText() {
  const windowWidth = window.innerWidth;
  const buttonB = document.getElementById("changingTextB");
  const buttonF = document.getElementById("changingTextF");

  if (windowWidth >= 1200) {
    buttonB.textContent = "최우수작 보러가기";
    buttonF.textContent = "장려작 보러가기";
  } else {
    buttonB.textContent = "이전";
    buttonF.textContent = "다음";
  }
}

window.addEventListener("resize", updateButtonText);

updateButtonText();
