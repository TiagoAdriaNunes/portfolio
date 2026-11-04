document.addEventListener("DOMContentLoaded", function () {
  // Reveal headings and cards as they scroll into view.
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = document.querySelectorAll(
    "section.level2 > h2, .section-lead, .about-text, .project-card, .skill-card, .timeline-card, .contact-card"
  );

  if (!reduceMotion && "IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach(function (el) {
      // Cards in the same grid appear one after another.
      const index = Array.prototype.indexOf.call(el.parentElement.children, el);
      el.style.animationDelay = (index % 3) * 80 + "ms";
      el.classList.add("fade-in");
      revealObserver.observe(el);
    });
  }

  // Highlight the navbar link of the section currently on screen.
  const links = Array.from(document.querySelectorAll("#quarto-header .nav-link")).filter(function (a) {
    return a.hash && document.getElementById(a.hash.slice(1));
  });

  if (links.length && "IntersectionObserver" in window) {
    const spyObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (a) {
            a.classList.toggle("active", a.hash === "#" + entry.target.id);
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    links.forEach(function (a) {
      spyObserver.observe(document.getElementById(a.hash.slice(1)));

      // Close the mobile menu after picking a section.
      a.addEventListener("click", function () {
        const menu = document.getElementById("navbarCollapse");
        if (menu && menu.classList.contains("show") && window.bootstrap) {
          window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
      });
    });
  }
});
