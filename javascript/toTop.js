var scrollToTopBtn = document.querySelector("#scrollToTopBtn");
var rootElement = document.documentElement;

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.9) {
    // Show button
    scrollToTopBtn.classList.add("show123");
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("show123");
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);



import { inject } from '@vercel/analytics';
 
inject();