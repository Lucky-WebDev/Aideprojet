(function ($) {
  "use strict";

  // Mobile Nav toggle
  $(".menu-toggle > a").on("click", function (e) {
    e.preventDefault();
    $("#responsive-nav").toggleClass("active");
  });

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
      // fade: true,
      appendArrows: $nav ? $nav : false,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        // {
        //   breakpoint: 991,
        //   settings: {
        //     slidesToShow: 3,
        //     slidesToScroll: 1,
        //   },
        // },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    let first = document.querySelector(".slick-prev");
    first.disabled = true;
    first.style.opacity = 0.25;

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
    nextElement1.style.padding = "48px 24px 0px 24px";
    nextElement2.style.padding = "48px 24px 0px 24px";
    lastElement1.style.padding = "97px 97px 0px 0px";
    lastElement2.style.padding = "97px 0px 0px 97px";
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
      arrows: true,
      appendArrows: $nav ? $nav : false,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });
})(jQuery);
