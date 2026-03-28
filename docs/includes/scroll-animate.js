document.addEventListener("DOMContentLoaded", function () {
  const targets = document.querySelectorAll(".project-card, .skills-group, h2");

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  targets.forEach(function (el) {
    el.classList.add("fade-in");
    observer.observe(el);
  });
});
