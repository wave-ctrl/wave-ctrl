jQuery(document).ready(function ($) {
  $(".ourteam-carousel").owlCarousel({
    margin: 3,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
    animateOut: "fadeOut",
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    loop: true,
  });
});

var a = 0;
$(window).scroll(function () {
  var oTop = $("#about").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".counter-value").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 2000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          },
        }
      );
    });
    a = 1;
  }
});

if (matchMedia) {
  const mq = window.matchMedia("(max-width:768px)"); //sets the width you want
  mq.addListener(WidthChange);
  WidthChange(mq);
}

function WidthChange(mq) {
  if (mq.matches) {
    //if window width is less than or equal to 768px;
    $("#navbar_toggle").removeClass("dis-none"); //makes toggler visible
    $("#navbar_collapse").addClass("dis-none"); //makes the menu not visible initially
    //so you can only see the menu items when you click the toggler

    $("#navbar_toggle").on("click", function (e) {
      $("#navbar_collapse").slideToggle();
      $("#navbar_collapse").css({ display: "block" });
    });
  } else {
    //for larger screens
    $("#navbar_toggle").addClass("dis-none");
    $("#navbar_collapse").removeClass("dis-none");
  }
}
