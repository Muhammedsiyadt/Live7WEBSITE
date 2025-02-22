/**  Main JS File  **/
(function ($) {
  "use strict";

  /*----------------------------- Site Loader & Popup --------------------*/
  $(window).on("load", function () {
    $("#gi-overlay").fadeOut("slow");
  });

  /*----------------------------- Scroll animation -------------------------------- */
  new WOW().init();

  /*--------------------- Mobile menu sidebar JS -------------------------------- */
  $('.gi-site-menu-icon').on("click", function () {
    $('.gi-mobile-menu-overlay').fadeIn();
    $('.gi-mobile-menu').addClass("gi-menu-open");
  });

  $('.gi-mobile-menu-overlay, .gi-close-menu').on("click", function () {
    $('.gi-mobile-menu-overlay').fadeOut();
    $('.gi-mobile-menu').removeClass("gi-menu-open");
  });

  function ResponsiveMobilemsMenu() {
    var $msNav = $(".gi-menu-content, .overlay-menu"),
      $msNavSubMenu = $msNav.find(".sub-menu");
    $msNavSubMenu.parent().prepend('<span class="menu-toggle"></span>');

    $msNav.on("click", "li a, .menu-toggle", function (e) {
      var $this = $(this);
      if ($this.attr("href") === "#" || $this.hasClass("menu-toggle")) {
        e.preventDefault();
        if ($this.siblings("ul:visible").length) {
          $this.parent("li").removeClass("active");
          $this.siblings("ul").slideUp();
          $this.parent("li").find("li").removeClass("active");
          $this.parent("li").find("ul:visible").slideUp();
        } else {
          $this.parent("li").addClass("active");
          $this.closest("li").siblings("li").removeClass("active").find("li").removeClass("active");
          $this.closest("li").siblings("li").find("ul:visible").slideUp();
          $this.siblings("ul").slideDown();
        }
      }
    });
  }

  ResponsiveMobilemsMenu();

  /*----------------------------- Category Sidebar js | Toggle Icon OnClick Open sidebar  -----------------------------------*/
  $(".gi-category-toggle").on("click", function () {
    $(".gi-side-cat-overlay").fadeIn();
    $(".gi-category-sidebar").addClass("gi-open-cat");
  });

  $(".gi-close").on("click", function () {
    $(".gi-category-sidebar").removeClass("gi-open-cat");
    $(".gi-side-cat-overlay").fadeOut();
  });

  $(".gi-side-cat-overlay").on("click", function () {
    $(".gi-category-sidebar").removeClass("gi-open-cat");
    $(".gi-side-cat-overlay").fadeOut();
  });

  /*----------------------------- Product & shop page category Toggle -------------------------------- */
  $(document).ready(function () {
    $(".gi-sidebar-block.drop .gi-sb-block-content ul li ul").addClass("gi-cat-sub-dropdown");

    $(".gi-sidebar-block.drop .gi-sidebar-block-item").on("click", function () {
      var $this = $(this).closest('.gi-sb-block-content').find('.gi-cat-sub-dropdown');
      $this.slideToggle('slow');
      $('.gi-cat-sub-dropdown').not($this).slideUp('slow');
    });
  });

  /*--------------------- Cart sidebar JS -------------------------------- */
  $('.gi-cart-toggle').on("click", function (e) {
    e.preventDefault();
    $(".gi-side-cart-overlay").fadeIn();
    $('.gi-side-cart').addClass("gi-open-cart");
  });
  $('.gi-side-cart-overlay, .gi-cart-close').on("click", function (e) {
    e.preventDefault();
    $(".gi-side-cart-overlay").fadeOut();
    $('.gi-side-cart').removeClass("gi-open-cart");
  });

  /*----------------------------- Qty Plus Minus Button  ------------------------------ */
  var QtyPlusMinus = $(".qty-plus-minus");
  QtyPlusMinus.prepend('<div class="dec gi-qtybtn">-</div>');
  QtyPlusMinus.append('<div class="inc gi-qtybtn">+</div>');

  $("body").on("click", ".gi-qtybtn", function () {

    var $qtybutton = $(this);
    var QtyoldValue = $qtybutton.parent().find("input").val();
    if ($qtybutton.text() === "+") {
      var QtynewVal = parseFloat(QtyoldValue) + 1;
    } else {

      if (QtyoldValue > 1) {
        var QtynewVal = parseFloat(QtyoldValue) - 1;
      } else {
        QtynewVal = 1;
      }
    }
    $qtybutton.parent().find("input").val(QtynewVal);
  });

  /*--------------------- Team (About Page) ---------------------- */
  $('.gi-team').owlCarousel({
    margin: 30,
    loop: true,
    dots: false,
    nav: false,
    smartSpeed: 1000,
    autoplay: true,
    items: 3,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      420: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 5
      },
      1400: {
        items: 5
      }
    }
  });

  /*--------------------- New product section Slider ---------------------- */
  $('.new-product-carousel').owlCarousel({
    loop: true,
    dots: false,
    nav: false,
    smartSpeed: 1000,
    autoplay: false,
    items: 3,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      421: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      },
      1367: {
        items: 5
      }
    }
  });

  /*--------------------- Category slider section (Home Page) ---------------------- */
  $('.gi-category-block').owlCarousel({
    margin: 24,
    loop: true,
    dots: false,
    nav: false,
    smartSpeed: 1500,
    autoplay: false,
    items: 3,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      420: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 5
      },
      1400: {
        items: 6
      }
    }
  });

  /*--------------------- Add More Product slider section (Single Product Page) ---------------------- */
  $('.gi-add-more-slider').owlCarousel({
    margin: 24,
    loop: true,
    dots: false,
    nav: false,
    smartSpeed: 1500,
    autoplay: false,
    items: 3,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      575: {
        items: 2
      },
      768: {
        items: 2
      },
      992: {
        items: 2
      },
      1200: {
        items: 3
      },
      1400: {
        items: 3
      }
    }
  });

  /*--------------------- Testimonial Slider ---------------------- */
  $('#gi-testimonial-slider').owlCarousel({
    margin: 0,
    loop: true,
    dots: true,
    nav: false,
    animateOut: 'fadeOut',
    smartSpeed: 1000,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      1367: {
        items: 1
      }
    }
  });

  /*----------------------------- Filter Icon OnClick Open filter Sidebar on shop page -----------------------------------*/
  $(".filter-toggle-icon").on("click", function () {
    $(".filter-sidebar-overlay").fadeIn();
    $(".gi-filter-sidebar").addClass("filter-sidebar-open");
  });

  $(".filter-close, .filter-sidebar-overlay").on("click", function () {
    $(".gi-filter-sidebar").removeClass("filter-sidebar-open");
    $(".filter-sidebar-overlay").fadeOut();
  });

  /*--------------------- Footer Toggle -------------------------------- */
  $(document).ready(function () {
    $(".gi-footer-links").addClass("gi-footer-dropdown");

    $('.gi-footer-heading').append("<div class='gi-heading-res'><i class='fi-rr-angle-small-down' aria-hidden='true'></i></div>");

    $(".gi-footer-heading .gi-heading-res").on("click", function () {
      var $this = $(this).closest('.footer-top .col-sm-12').find('.gi-footer-dropdown');
      $this.slideToggle('slow');
      $('.gi-footer-dropdown').not($this).slideUp('slow');
    });
  });

  /*--------------------- Wishlist notify js ---------------------- */
  $('.wishlist').on("click", function () {
    $('.gi-wish-notify').remove();
    $('.gi-compare-notify').remove();
    $('.gi-cart-notify').remove();

    var isWishlist = $(this).hasClass("active");
    if (isWishlist) {
      $(this).removeClass("active");
      $('footer').after('<div class="gi-wish-notify"><p class="wish-note">Remove product on <a href="wishlist.html"> Wishlist</a> Successfully!</p></div>');
    } else {
      $(this).addClass("active");
      $('footer').after('<div class="gi-wish-notify"><p class="wish-note">Add product in <a href="wishlist.html"> Wishlist</a> Successfully!</p></div>');
    }

    setTimeout(function () {
      $('.gi-wish-notify').fadeOut();
    }, 2000);
  });

  /*--------------------- Compare notify js ---------------------- */
  $('.compare').on("click", function () {
    $('.gi-wish-notify').remove();
    $('.gi-compare-notify').remove();
    $('.gi-cart-notify').remove();

    var isCompare = $(this).hasClass("active");
    if (isCompare) {
      $(this).removeClass("active");
      $('footer').after('<div class="gi-compare-notify"><p class="compare-note">Remove product on <a href="compare.html"> Compare list</a> Successfully!</p></div>');
    } else {
      $(this).addClass("active");
      $('footer').after('<div class="gi-compare-notify"><p class="compare-note">Add product in <a href="compare.html"> Compare list</a> Successfully!</p></div>');
    }

    setTimeout(function () {
      $('.gi-compare-notify').fadeOut();
    }, 2000);
  });

  /*--------------------- Add to cart button notify js ---------------------- */
  $('.add-to-cart').on("click", function () {
    $('.gi-wish-notify').remove();
    $('.gi-compare-notify').remove();
    $('.gi-cart-notify').remove();
    $('footer').after('<div class="gi-cart-notify"><p class="compare-note">Add product in <a href="cart.html"> Cart</a> Successfully!</p></div>');
    setTimeout(function () {
      $('.gi-cart-notify').fadeOut();
    }, 2000);
  });

  /*----------------------------- Cart page Shipping Toggle -------------------------------- */
  $(document).ready(function () {
    $(".gi-sb-block-content .gi-ship-title").on("click", function () {
      $('.gi-sb-block-content .gi-cart-form').slideToggle('slow');
    });
  });

  /*----------------------------- Cart page Apply Coupan Toggle -------------------------------- */
  $(document).ready(function () {
    $(".gi-cart-coupan").on("click", function () {
      $('.gi-cart-coupan-content').slideToggle('slow');
    });
    $(".gi-checkout-coupan").on("click", function () {
      $('.gi-checkout-coupan-content').slideToggle('slow');
    });
  });

  /*----------------------------- Cart Page Qty Plus Minus Button  ------------------------------ */
  var CartQtyPlusMinus = $(".cart-qty-plus-minus");
  CartQtyPlusMinus.append('<div class="ms_cart_qtybtn"><div class="inc ms_qtybtn">+</div><div class="dec ms_qtybtn">-</div></div>');
  $(".cart-qty-plus-minus .ms_cart_qtybtn .ms_qtybtn").on("click", function () {
    var $cartqtybutton = $(this);
    var CartQtyoldValue = $cartqtybutton.parent().parent().find("input").val();
    if ($cartqtybutton.text() === "+") {
      var CartQtynewVal = parseFloat(CartQtyoldValue) + 1;
    } else {

      if (CartQtyoldValue > 1) {
        var CartQtynewVal = parseFloat(CartQtyoldValue) - 1;
      } else {
        CartQtynewVal = 1;
      }
    }
    $cartqtybutton.parent().parent().find("input").val(CartQtynewVal);
  });

  /*----------------------------- Sidebar Block Toggle (Checkout & Cart page) -------------------------------- */
  $(document).ready(function () {
    $(".gi-shop-sidebar .gi-sidebar-block .gi-sb-block-content,.gi-shop-sidebar-2 .gi-sidebar-block .gi-sb-block-content, .gi-blogs-leftside .gi-sidebar-block .gi-sb-block-content, .gi-cart-rightside .gi-sidebar-block .gi-sb-block-content, .gi-checkout-rightside .gi-sidebar-block .gi-sb-block-content").addClass("gi-sidebar-dropdown");

    $('.gi-sidebar-title').append("<div class='gi-sidebar-res'><i class='gicon gi-angle-down'></i></div>");

    $(".gi-sidebar-title .gi-sidebar-res").on("click", function () {
      // alert();
      var $this = $(this).closest('.gi-shop-sidebar .gi-sidebar-block, .gi-shop-sidebar-2 .gi-sidebar-block, .gi-blogs-leftside .gi-sidebar-block, .gi-cart-rightside .gi-sidebar-block, .gi-checkout-rightside .gi-sidebar-wrap').find('.gi-sidebar-dropdown, .gi-sb-block-content');
      $this.slideToggle('slow');
    });
  });

  /*----------------------------- Remove Product (Compare page) -------------------------------- */
  $('.remove-compare-product').on("click", function () {
    $(this).parent().fadeOut();
  });

  /*----------------------------- Accordians toggle (faq page) -------------------------------- */
  $('.gi-accordion-header').on("click", function () {
    $(this).parent().siblings().children(".gi-accordion-body").slideUp();
    $(this).parent().find(".gi-accordion-body").slideToggle();
  });

  /*----------------------------- List Grid View -------------------------------- */
  $('.gi-gl-btn').on('click', 'button', function () {
    var $this = $(this);
    $this.addClass('active').siblings().removeClass('active');
  });

  // for 100% width list view
  function showList(e) {
    var $gridCont = $('.shop-pro-inner');
    var $listView = $('.pro-gl-content');
    e.preventDefault();
    $gridCont.addClass('list-view');
    $listView.addClass('width-100');
  }

  function gridList(e) {
    var $gridCont = $('.shop-pro-inner');
    var $gridView = $('.pro-gl-content');
    e.preventDefault();
    $gridCont.removeClass('list-view');
    $gridView.removeClass('width-100');
  }

  $(document).on('click', '.btn-grid', gridList);
  $(document).on('click', '.btn-list', showList);

  // for 50% width list view
  function showList50(e) {
    var $gridCont = $('.shop-pro-inner');
    var $listView = $('.pro-gl-content');
    e.preventDefault();
    $gridCont.addClass('list-view-50');
    $listView.addClass('width-50');
  }

  function gridList50(e) {
    var $gridCont = $('.shop-pro-inner');
    var $gridView = $('.pro-gl-content');
    e.preventDefault();
    $gridCont.removeClass('list-view-50');
    $gridView.removeClass('width-50');
  }

  $(document).on('click', '.btn-grid-50', gridList50);
  $(document).on('click', '.btn-list-50', showList50);



  /*----------------------------- Product Image Zoom --------------------------------*/
  $('.zoom-image-hover').zoom();

  /*----------------------------- single product Slider  ------------------------------ */
  $('.single-product-cover').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.single-nav-thumb',
  });

  $('.single-nav-thumb').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.single-product-cover',
    dots: false,
    arrows: true,
    focusOnSelect: true
  });

  /*----------------------------- Single Product Color and Size Click to Active -------------------------------- */
  $(document).ready(function () {
    $(".gi-pro-variation-content ul li").on("click", function () {
      $(this).addClass('active').siblings().removeClass('active');
    });
  });

  /*----------------------------- Back to top button  ------------------------------ */
  var btn = $('.gi-back-to-top');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });


  // scroll notification in top position
  window.addEventListener('scroll', function () {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPosition = window.scrollY;
    const scrollPercentage = (scrollPosition / scrollHeight) * 100;

    // Update the width of the scroll indicator
    scrollIndicator.style.width = scrollPercentage + '%';

    // Interpolate between the two colors based on scroll percentage
    const color = interpolateColor('#106d60', '#ead32e', scrollPercentage / 100);
    scrollIndicator.style.backgroundColor = color;
  });

  // Function to interpolate between two colors
  function interpolateColor(color1, color2, factor) {
    const hexToRgb = (hex) => {
      const bigint = parseInt(hex.slice(1), 16);
      return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255,
      };
    };

    const rgbToHex = (r, g, b) => {
      return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    };

    const c1 = hexToRgb(color1);
    const c2 = hexToRgb(color2);

    const r = Math.round(c1.r + factor * (c2.r - c1.r));
    const g = Math.round(c1.g + factor * (c2.g - c1.g));
    const b = Math.round(c1.b + factor * (c2.b - c1.b));

    return rgbToHex(r, g, b);
  }




})(jQuery);
