document.addEventListener("DOMContentLoaded", function () {
  const gifImgs = document.querySelectorAll(".project-card img[src$='.gif']");

  gifImgs.forEach(function (img) {
    const gifSrc = img.src;

    // Capture first frame via canvas
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const loader = new Image();
    loader.crossOrigin = "anonymous";
    loader.src = gifSrc;

    loader.onload = function () {
      canvas.width = loader.naturalWidth;
      canvas.height = loader.naturalHeight;
      ctx.drawImage(loader, 0, 0);
      const snapshot = canvas.toDataURL("image/png");

      img.src = snapshot;
      img.setAttribute("data-gif", gifSrc);
      img.classList.add("gif-preview");

      img.addEventListener("mouseenter", function () {
        img.src = img.getAttribute("data-gif");
      });
      img.addEventListener("mouseleave", function () {
        img.src = snapshot;
      });
    };
  });
});
