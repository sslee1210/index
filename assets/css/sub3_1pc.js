// 이벤트 핸들러 함수
function updateButtonText() {
  const windowWidth = window.innerWidth;
  const button = document.getElementById("changingText");

  if (windowWidth >= 1200) {
    button.textContent = "우수작 보러가기";
  } else {
    button.textContent = "다음";
  }
}

// 윈도우 크기 변경 이벤트 리스너 등록
window.addEventListener("resize", updateButtonText);

// 초기 페이지 로딩시 한 번 호출
updateButtonText();

$(document).ready(function () {
  $(".story_menu_down").hover(
    function () {
      $(this).next(".sub_menu").stop().animate({ top: "40px" }, 500);
    },
    function () {
      $(this).next(".sub_menu").stop().animate({ top: "-100px" }, 500);
    }
  );
});
