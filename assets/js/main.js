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
        // {
        //   breakpoint: 1300,
        //   settings: {
        //     slidesToShow: 3,
        //     slidesToScroll: 1,
        //   },
        // },
        // {
        //   breakpoint: 991,
        //   settings: {
        //     slidesToShow: 3,
        //     slidesToScroll: 1,
        //   },
        // },
        // {
        //   breakpoint: 450,
        //   settings: {
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //   },
        // },
      ],
    });

    let first = document.querySelector(".slick-prev");
    first.disabled = true;
    first.style.opacity = 0.25;

    let max = "0px";
    let min_outline = "-48px";
    let med_outline = "-24px";
    let max_outline = "-0px";
    if (window.innerWidth < 1000) {
      min_outline = "-32px";
      med_outline = "-16px";
    }
    let centerElement = document.querySelector(`[data-slick-index="0"]`);
    let nextElement1 = document.querySelector(`[data-slick-index="1"]`);
    let nextElement2 = document.querySelector(`[data-slick-index="-1"]`);
    let lastElement1 = document.querySelector(`[data-slick-index="2"]`);
    let lastElement2 = document.querySelector(`[data-slick-index="-2"]`);
    let startElement = document.querySelector(`[data-slick-index="3"]`);
    let endElement = document.querySelector(`[data-slick-index="-3"]`);
    centerElement.style.padding = max;
    startElement.style.padding = "100px";
    endElement.style.padding = "100px";

    // In the case of Mobile
    if (window.innerWidth < 1000) {
      nextElement1.style.padding = "32px 16px 0px 16px";
      nextElement2.style.padding = "32px 16px 0px 16px";
      lastElement1.style.padding = "64px 64px 0px 0px";
      lastElement2.style.padding = "64px 0px 0px 64px";
    } else {
      nextElement1.style.padding = "48px 24px 0px 24px";
      nextElement2.style.padding = "48px 24px 0px 24px";
      lastElement1.style.padding = "96px 96px 0px 0px";
      lastElement2.style.padding = "96px 0px 0px 96px";
    }

    startElement.querySelector(".smooth-sizing").style.display = "none";
    endElement.querySelector(".smooth-sizing").style.display = "none";

    nextElement1.querySelector("h4").style.fontSize = "14px";
    nextElement2.querySelector("h4").style.fontSize = "14px";
    lastElement1.querySelector("h4").style.fontSize = "12px";
    lastElement2.querySelector("h4").style.fontSize = "12px";

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
