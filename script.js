// script.js
document.addEventListener("DOMContentLoaded", () => {
  const contentSections = document.querySelectorAll(".content-section");

  const fadeInOnIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const childElements = entry.target.querySelectorAll("*");
        childElements.forEach((element, index) => {
          setTimeout(() => {
            element.classList.add("visible");
          }, 400 * index);
        });
      } else {
        const childElements = entry.target.querySelectorAll("*");
        childElements.forEach((element) => {
          element.classList.remove("visible");
        });
      }
    });
  };

  const observer = new IntersectionObserver(fadeInOnIntersection, {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
  });

  contentSections.forEach((section) => {
    observer.observe(section);
  });
});
