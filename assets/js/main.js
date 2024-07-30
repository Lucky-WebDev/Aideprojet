(function ($) {
  "use strict";

  // Mobile Nav toggle
  $(".menu-toggle > a").on("click", function (e) {
    e.preventDefault();
    $("#responsive-nav").toggleClass("active");
  });

  // Fix cart dropdown from closing
  $(".cart-dropdown").on("click", function (e) {
    e.stopPropagation();
  });

  /////////////////////////////////////////

  // Products Slick
  $(".products-slick").each(function () {
    var $this = $(this),
      $nav = $this.attr("data-nav");

    $this.slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: true,
      centerMode: true,
      centerPadding: "0px",
      focusOnChange: true,
      touchMove: false,
      variableWidth: true,
      arrows: true,
      appendArrows: $nav ? $nav : false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
    let min = "50px";
    let med = "30px";
    let max = "0px";
    let min_outline = "-50px";
    let med_outline = "-30px";
    let max_outline = "-0px";
    let centerElement = document.querySelector(`[data-slick-index="0"]`);
    let nextElement1 = document.querySelector(`[data-slick-index="1"]`);
    let nextElement2 = document.querySelector(`[data-slick-index="-1"]`);
    let lastElement1 = document.querySelector(`[data-slick-index="2"]`);
    let lastElement2 = document.querySelector(`[data-slick-index="-2"]`);
    centerElement.style.padding = max;
    nextElement1.style.padding = "60px 30px 0px 30px";
    nextElement2.style.padding = "60px 30px 0px 30px";
    lastElement1.style.padding = "100px 100px 0px 0px";
    lastElement2.style.padding = "100px 0px 0px 100px";
    centerElement.style.outlineOffset = max_outline;
    nextElement1.style.outlineOffset = med_outline;
    nextElement2.style.outlineOffset = med_outline;
    lastElement1.style.outlineOffset = min_outline;
    lastElement2.style.outlineOffset = min_outline;
    centerElement.style.outline = "none";
    nextElement1.style.outline = "none";
    nextElement2.style.outline = "none";
    lastElement1.style.outline = "none";
    lastElement2.style.outline = "none";
    centerElement.style.borderRadius = "20px";
    nextElement1.style.borderRadius = "20px";
    nextElement2.style.borderRadius = "20px";
    lastElement1.style.borderRadius = "20px";
    lastElement2.style.borderRadius = "20px";
  });

  $(".products-slick-two").each(function () {
    var $this = $(this),
      $nav = $this.attr("data-nav");

    $this.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      // centerMode: true,
      // variableWidth: true,
      arrows: true,
      appendArrows: $nav ? $nav : false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });

  // Product img zoom
  var zoomMainProduct = document.getElementById("product-main-img");
  if (zoomMainProduct) {
    $("#product-main-img .product-preview").zoom();
  }
})(jQuery);
