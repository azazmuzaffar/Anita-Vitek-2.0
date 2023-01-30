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
//  Contact Banner
// ---------------------------------------

AOS.init({
  once: true,
});

var tl = gsap.timeline({
  defaults: {
    duration: 1.0,
    ease: "expo.inOut",
  },
});

tl.to(".contact-banner img", { width: 100 + "%", scale: 1 });

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

/* Onload 1st Slide Icon Triangle Animation */
var triangle = document.getElementById("triangle1");
var triangle2 = document.getElementById("triangle2");
var length = triangle.getTotalLength();
var length2 = triangle2.getTotalLength();
triangle.style.strokeDasharray = length;
triangle2.style.strokeDasharray = length2;
triangle.style.strokeDashoffset = length;
triangle2.style.strokeDashoffset = length2;
function incNbrRec(i, endNbr, elt) {
  if (i >= endNbr) {
    triangle.style.strokeDashoffset = i;
    triangle2.style.strokeDashoffset = i;
    setTimeout(function () {
      incNbrRec(i - 1, endNbr, elt);
    }, 5);
  }
}

incNbrRec(262, 0, triangle);
incNbrRec(262, 0, triangle2);

/* Slide # 1: Icon draw/undraw animation */
scroller.on("scroll", ({ limit, scroll }) => {
  if (scroll.y > 797) {
    var triangle = document.getElementById("triangle1");
    var triangle2 = document.getElementById("triangle2");
    var length = triangle.getTotalLength();
    var length2 = triangle2.getTotalLength();
    triangle.style.strokeDasharray = length;
    triangle2.style.strokeDasharray = length2;
    triangle.style.strokeDashoffset = length;
    triangle2.style.strokeDashoffset = length2;
    var draw = (length * scroll.y) / 800;
    triangle.style.strokeDashoffset = length + draw;
    triangle2.style.strokeDashoffset = length + draw;
  }

  /* Slide # 2: Icon draw/undraw animation */
  if (scroll.y > 800) {
    var triangle = document.getElementById("rectangle1");
    var triangle2 = document.getElementById("rectangle2");
    var length = triangle.getTotalLength();
    var length2 = triangle2.getTotalLength();
    triangle.style.strokeDasharray = length;
    triangle2.style.strokeDasharray = length2;
    triangle.style.strokeDashoffset = length;
    triangle2.style.strokeDashoffset = length2;
    var draw = (length * scroll.y) / 1200;
    triangle.style.strokeDashoffset = length + draw;
    triangle2.style.strokeDashoffset = length - draw;
  }

  /* Slide # 3: Icon draw/undraw animation */
  if (scroll.y > 1600) {
    var triangle = document.getElementById("triangle4");
    var triangle2 = document.getElementById("triangle5");
    var triangle3 = document.getElementById("triangle6");
    var triangle4 = document.getElementById("triangle7");
    var length = triangle.getTotalLength();
    var length2 = triangle2.getTotalLength();
    var length3 = triangle3.getTotalLength();
    var length4 = triangle4.getTotalLength();
    triangle.style.strokeDasharray = length;
    triangle2.style.strokeDasharray = length2;
    triangle3.style.strokeDasharray = length3;
    triangle4.style.strokeDasharray = length4;
    triangle.style.strokeDashoffset = length;
    triangle2.style.strokeDashoffset = length2;
    triangle3.style.strokeDashoffset = length3;
    triangle4.style.strokeDashoffset = length4;
    var draw = (length * scroll.y) / 900;
    triangle.style.strokeDashoffset = length + draw + draw + 55;
    triangle2.style.strokeDashoffset = length - draw + 950;
    triangle3.style.strokeDashoffset = length + draw + draw + 28;
    triangle4.style.strokeDashoffset = length - draw + length + 108;
  }
});
