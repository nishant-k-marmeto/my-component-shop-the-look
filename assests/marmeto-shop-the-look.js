document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(
    "button.marmeto-shop-the-look__media-hotspots"
  );
  const splide = document.querySelector(".splide.splide-component");
  buttons.forEach((button) =>
    button.addEventListener("click", function () {
      splide.splide.go(parseInt(this.dataset.i));
    })
  );
});
