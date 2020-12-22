var core = core || {};

(function() {
  /* CONTROL UI **********************************************/
  core.ui = core.ui || {};
  core.ui.loadJs = () => {
    //All ids of titles should be written here to animation work
    var animatedHeaders = animateHeaders({
      "#hello_header": "90%",
      "#resume_header": "70%",
      "#portfolio_header": "70%",
      "#testimonials_header": "70%",
      "#blog_header": "70%",
      "#contacts_header": "70%",
      "#other_posts": "70%",
    });

    //Animate progress-bar
    $(".js-progress-list").waypoint({
      handler: function() {
        $(".progress-bar").each(function() {
          $(this).animate(
            {
              width: $(this).attr("aria-valuenow") + "%",
            },
            200
          );
        });
        this.destroy();
      },
      offset: "50%",
    });

    $(".carousel").carousel({
      pause: "hover",
      interval: 5000,
    });
  };

  core.ui.filter = (event) => {
    event.preventDefault();
    if (previousClickedMenuLink) {
        previousClickedMenuLink.removeClass('portfolio-menu__link--active');
    }
    var link = $(event.target);
    link.addClass('portfolio-menu__link--active');
    previousClickedMenuLink = link;

    var targetTag = $(event.target).data('portfolio-target-tag');
    var portfolioItems = $('.portfolio-cards').children();

    if (targetTag === 'all') {
        portfolioItems.fadeIn({duration: 500});
    } else {
        portfolioItems.hide();
    }

    portfolioItems.each(function(index, value){
        var item = $(value);
        if (item.data('portfolio-tag') === targetTag) {
            item.fadeIn({duration: 500});
        }
    });
  }
})();
