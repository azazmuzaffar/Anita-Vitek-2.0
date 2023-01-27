// ---------------------------------------
//  Custom JS
// ---------------------------------------
$(document).ready(function () {
  var video = document.querySelector(".hero-banner video");
  var playVideo = $(".hero-banner .play__video");

  video.playbackRate = 0.75;

  window.addEventListener("resize", function () {});

  if (video) {
    video.addEventListener("click", function (e) {
      if ($(window).width() > 992) {
        video.muted = !video.muted;
        let heroBanner = document.querySelector(".hero-banner");
        let currentCursor = heroBanner.style.cursor;

        if (currentCursor.includes("play")) {
          heroBanner.style.cursor = "url('./images/icons/pause.svg'), auto";
        } else {
          heroBanner.style.cursor = "url('./images/icons/play.svg'), auto";
        }

        if (video.playbackRate == 0.75) {
          video.playbackRate = 1.0;
        } else {
          video.playbackRate = 0.75;
        }
      }
    });
  }

  if (playVideo) {
    playVideo.click(function () {
      $(this).toggleClass("show");
      video.muted = !video.muted;
      let heroBanner = document.querySelector(".hero-banner");
      let currentCursor = heroBanner.style.cursor;

      if (currentCursor.includes("play")) {
        heroBanner.style.cursor = "url('./images/icons/pause.svg'), auto";
      } else {
        heroBanner.style.cursor = "url('./images/icons/play.svg'), auto";
      }

      if (video.playbackRate == 0.75) {
        video.playbackRate = 1.0;
      } else {
        video.playbackRate = 0.75;
      }
    });
  }
});
