// ---------------------------------------
//  Custom JS
// ---------------------------------------
$(document).ready(function () {
  var video = document.querySelector(".hero-banner video");
  var playVideo = $(".hero-banner .play__video");

  function videofunctions() {
    video.muted = !video.muted;
    console.log(video);
    let heroBanner = document.querySelector(".hero-banner .video-wrapper");
    let currentCursor = heroBanner.style.cursor;
    if (currentCursor.includes("play")) {
      heroBanner.style.cursor = "url('./images/icons/pause.svg'), auto";
    } else {
      heroBanner.style.cursor = "url('./images/icons/play.svg'), auto";
    }
  }

  if (video) {
    video.addEventListener("click", function (e) {
      videofunctions();
    });
  }

  if (playVideo) {
    playVideo.click(function () {
      $(this).toggleClass("show");
      videofunctions();
    });
  }
});
