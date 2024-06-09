document
  .querySelector(".section6_image")
  .addEventListener("mouseover", function () {
    document.querySelector(".section6_image1").classList.add("hover");
    document.querySelector(".section6_image2").classList.add("hover");
    document.querySelector(".section6_image3").classList.add("hover");
    document.querySelector(".content1").classList.add("active1");
    var content1 = document.getElementById("content1");
    content1.style.transition = "0.4s ";
  });

document
  .querySelector(".section6_image")
  .addEventListener("mouseout", function () {
    document.querySelector(".section6_image1").classList.remove("hover");
    document.querySelector(".section6_image2").classList.remove("hover");
    document.querySelector(".section6_image3").classList.remove("hover");
    document.querySelector(".content1").classList.remove("active1");
  });
//
document
  .querySelector(".section6_image1")
  .addEventListener("mouseover", function () {
    document.querySelector(".section6_image").classList.add("hover");
    document.querySelector(".section6_image2").classList.add("hover");
    document.querySelector(".section6_image3").classList.add("hover");
    document.querySelector(".content2").classList.add("active2");
  });

document
  .querySelector(".section6_image1")
  .addEventListener("mouseout", function () {
    document.querySelector(".section6_image").classList.remove("hover");
    document.querySelector(".section6_image2").classList.remove("hover");
    document.querySelector(".section6_image3").classList.remove("hover");
    document.querySelector(".content2").classList.remove("active2");
  });
//
document
  .querySelector(".section6_image2")
  .addEventListener("mouseover", function () {
    document.querySelector(".section6_image").classList.add("hover");
    document.querySelector(".section6_image1").classList.add("hover");
    document.querySelector(".section6_image3").classList.add("hover");
    document.querySelector(".content3").classList.add("active3");
  });

document
  .querySelector(".section6_image2")
  .addEventListener("mouseout", function () {
    document.querySelector(".section6_image").classList.remove("hover");
    document.querySelector(".section6_image1").classList.remove("hover");
    document.querySelector(".section6_image3").classList.remove("hover");
    document.querySelector(".content3").classList.remove("active3");
  });
//
//
document
  .querySelector(".section6_image3")
  .addEventListener("mouseover", function () {
    document.querySelector(".section6_image").classList.add("hover");
    document.querySelector(".section6_image1").classList.add("hover");
    document.querySelector(".section6_image2").classList.add("hover");
    document.querySelector(".content4").classList.add("active4");
  });

document
  .querySelector(".section6_image3")
  .addEventListener("mouseout", function () {
    document.querySelector(".section6_image").classList.remove("hover");
    document.querySelector(".section6_image1").classList.remove("hover");
    document.querySelector(".section6_image2").classList.remove("hover");
    document.querySelector(".content4").classList.remove("active4");
  });
//

/* navbar dropdown start */
function myfunction3() {
  var drop3 = document.getElementById("drop3");
  var drop4 = document.getElementById("drop4");
  drop3.classList.remove("show");
  drop4.classList.remove("show");
}
function myfunction4() {
  var drop3 = document.getElementById("drop3");
  var drop4 = document.getElementById("drop4");
  drop3.classList.add("show");
  drop4.classList.add("show");
}

/* second animation */
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 5) {
    document.getElementById("background").style.opacity = "1";
    document.getElementById("background").style.transition = "0.4s";
    document.getElementById("background").style.width = "89%";
    document.getElementById("background").style.height = "90%";
    document.getElementById("background").style.backdropFilter = "blur(40px)";
    document.getElementById("background").style.background = "var(--backdrop)";
    document.getElementById("background").style.borderRadius = "20px";
    document.getElementById("background").style.position = "absolute";
    document.getElementById("background").style.top = "10px";
    document.getElementById("background").style.zIndex = "-1";
    document.getElementById("background").style.border =
      "1px solid var(--border1)";
  } else {
    document.getElementById("background").style.opacity = "0";
  }
}
/* second animation */

/* navbar dropdown end */
