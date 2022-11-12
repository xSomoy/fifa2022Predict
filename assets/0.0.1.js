function sectionise() {
  'use strict';
  $('section.read-more').each(function(i, el) {
    // if more than the second section, collapse them by default, else show them in full
    if (i >= 1) {
      $(el).after('<div class="read-more-parent"><button class="read-more-toggle collapsed"><span></span>See more</button></div>');
      $(el).hide();
      $(el)
        .prevAll('section')
        .slice(0, 1)
        .hide();
    } else {
      $(el).after('<div class="read-more-parent"><button class="read-more-toggle"><span></span>See less</button></div>');
    }
  });

  $('button.read-more-toggle').click(function(ev) {
    var $target = $(ev.currentTarget);
    var $sections = $target
      .parent()
      .prevAll('section')
      .slice(0, 2);

    if ($target.hasClass('collapsed')) $target.removeClass('collapsed').html('<span></span>See less');
    else $target.addClass('collapsed').html('<span></span>See more');

    $sections.slideToggle();
  });
}

if ($()) {
  sectionise();
} else {
  $(document).ready(sectionise);
}
