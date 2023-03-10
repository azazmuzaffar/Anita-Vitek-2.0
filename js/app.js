// ---------------------------------------
//  Video Play Back
// ---------------------------------------

$(document).ready(function () {
  var video = document.querySelector(".hero-banner video");
  var playVideo = $(".hero-banner .play__video");

  if (video) {
    video.playbackRate = 0.75;
  }

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

// ---------------------------------------
//  Horizental/Smooth Scroll
// ---------------------------------------

gsap.registerPlugin(ScrollTrigger);
const pageContainer = document.querySelector(".design-concept__inner");

/* Smooth Scroll */
const scroller = new LocomotiveScroll({
  el: pageContainer,
  smooth: true,
});

scroller.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(pageContainer, {
  scrollTop(value) {
    return arguments.length ? scroller.scrollTo(value, 0, 0) : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: pageContainer.style.transform ? "transform" : "fixed",
});

/* GSAP Horizental scroll */
window.addEventListener("load", function () {
  let pinBoxes = document.querySelectorAll(".concept .concept__each");
  let pinWrap = document.querySelector(".concept");
  let pinWrapWidth = pinWrap.offsetWidth;
  let horizontalScrollLength = pinWrapWidth - window.innerWidth;

  gsap.to(".concept", {
    scrollTrigger: {
      scroller: pageContainer,
      scrub: true,
      trigger: ".design-concept__inner--scroll",
      pin: true,
      // anticipatePin: 1,
      start: "top top",
      end: pinWrapWidth,
    },
    x: -horizontalScrollLength,
    ease: "none",
  });

  ScrollTrigger.addEventListener("refresh", () => scroller.update());
  ScrollTrigger.refresh();
});

/* Icon draw/undraw animation */
$(".concept__each--1 img").addClass("scale");
scroller.on("scroll", ({ limit, scroll }) => {
  console.log(limit, scroll.y);

  let each = limit / 3;
  var triangle = document.getElementById("triangle1");
  var triangle2 = document.getElementById("triangle2");
  var rectangle = document.getElementById("rectangle1");
  var rectangle2 = document.getElementById("rectangle2");

  if (scroll.y > 0) {
    $(".concept__each--1 .icon-wrapper").addClass("animate");
  }
  if (scroll.y > each + each / 4) {
    $(".concept__each--2 img").addClass("scale");
    $(".concept__each--2 .icon-wrapper").addClass("animate");
  }
  if (scroll.y > limit - each / 3) {
    $(".concept__each--3 img").addClass("scale");
    $(".concept__each--3 .icon-wrapper").addClass("animate");
  }
});
