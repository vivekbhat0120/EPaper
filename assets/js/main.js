// Removed unnecessary comments and redundant code to clean up the file
(function ($) {
  skel.breakpoints({
    xlarge: "(max-width: 1680px)",
    large: "(max-width: 1280px)",
    medium: "(max-width: 980px)",
    small: "(max-width: 736px)",
    xsmall: "(max-width: 480px)",
  });

  $(function () {
    var $window = $(window),
      $body = $("body");

    $body.addClass("is-loading");

    $window.on("load", function () {
      window.setTimeout(function () {
        $body.removeClass("is-loading");
      }, 100);
    });

    $("form").placeholder();

    var $banner = $("#banner");

    if ($banner.length > 0) {
      if (skel.vars.IEVersion < 12) {
        $window.on("resize", function () {
          var wh = $window.height() * 0.6,
            bh = $banner.height();

          $banner.css("height", "auto");

          window.setTimeout(function () {
            if (bh < wh) $banner.css("height", wh + "px");
          }, 0);
        });

        $window.on("load", function () {
          $window.triggerHandler("resize");
        });
      }

      $banner.find(".more").addClass("scrolly");
    }

    $(".scrolly").scrolly();

    $window.on("load", function () {
      $window.trigger("scroll");
    });
  });
})(jQuery);
