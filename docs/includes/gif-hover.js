// Show the first frame of each project GIF, and play the GIF while the card is hovered.
// Touch screens have no hover, so they keep the animated GIF.
document.addEventListener("DOMContentLoaded", function () {
  if (window.matchMedia("(hover: none)").matches) return;

  const gifImgs = document.querySelectorAll(".project-card img[src$='.gif']");

  gifImgs.forEach(function (img) {
    const gifSrc = img.src;
    const loader = new Image();

    loader.onload = function () {
      const canvas = document.createElement("canvas");
      canvas.width = loader.naturalWidth;
      canvas.height = loader.naturalHeight;
      canvas.getContext("2d").drawImage(loader, 0, 0);

      let snapshot;
      try {
        snapshot = canvas.toDataURL("image/png");
      } catch (e) {
        return; // Canvas is blocked (e.g. opened from file://): keep the animated GIF.
      }

      img.src = snapshot;
      img.classList.add("gif-preview");

      const media = img.closest(".project-media");
      if (media) media.classList.add("has-gif");

      const card = img.closest(".project-card") || img;
      card.addEventListener("mouseenter", function () {
        img.src = gifSrc;
      });
      card.addEventListener("mouseleave", function () {
        img.src = snapshot;
      });
    };

    loader.src = gifSrc;
  });
});
