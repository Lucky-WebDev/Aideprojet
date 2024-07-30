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

  /////////////////////////////////////////

  // Input number
  $(".input-number").each(function () {
    var $this = $(this),
      $input = $this.find('input[type="number"]'),
      up = $this.find(".qty-up"),
      down = $this.find(".qty-down");

    down.on("click", function () {
      var value = parseInt($input.val()) - 1;
      value = value < 1 ? 1 : value;
      $input.val(value);
      $input.change();
      updatePriceSlider($this, value);
    });

    up.on("click", function () {
      var value = parseInt($input.val()) + 1;
      $input.val(value);
      $input.change();
      updatePriceSlider($this, value);
    });
  });

  var priceInputMax = document.getElementById("price-max"),
    priceInputMin = document.getElementById("price-min");

  priceInputMax.addEventListener("change", function () {
    updatePriceSlider($(this).parent(), this.value);
  });

  priceInputMin.addEventListener("change", function () {
    updatePriceSlider($(this).parent(), this.value);
  });

  function updatePriceSlider(elem, value) {
    if (elem.hasClass("price-min")) {
      console.log("min");
      priceSlider.noUiSlider.set([value, null]);
    } else if (elem.hasClass("price-max")) {
      console.log("max");
      priceSlider.noUiSlider.set([null, value]);
    }
  }

  // Price Slider
  var priceSlider = document.getElementById("price-slider");
  if (priceSlider) {
    noUiSlider.create(priceSlider, {
      start: [1, 999],
      connect: true,
      step: 1,
      range: {
        min: 1,
        max: 999,
      },
    });

    priceSlider.noUiSlider.on("update", function (values, handle) {
      var value = values[handle];
      handle ? (priceInputMax.value = value) : (priceInputMin.value = value);
    });
  }
})(jQuery);
