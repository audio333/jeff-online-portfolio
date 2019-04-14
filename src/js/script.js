
window.sr = ScrollReveal();
sr.reveal('.navbar', {
    duration: 1200,
    origin: 'bottom'
});
sr.reveal('.main-left', {
    duration: 1200,
    origin: 'top',
    distance: '300px'
});
sr.reveal('.main-right', {
    duration: 1200,
    origin: 'right',
    distance: '300px'
});
sr.reveal('.btn-primary', {
    duration: 1200,
    delay: 800,
    origin: 'bottom'
});
sr.reveal('.skill-left', {
    duration: 1200,
    origin: 'left',
    distance: '300px'
});
sr.reveal('.skill-right', {
    duration: 1200,
    origin: 'right',
    distance: '300px'
});
sr.reveal('.projects', {
    duration: 1200,
    origin: 'bottom',
    distance: '200px'
});
sr.reveal('.projects', {
    duration: 1200,
    origin: 'bottom',
    distance: '200px',
});
sr.reveal('.education-info', {
    duration: 1200,
    origin: 'bottom',
    viewFactor: .3
});



// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#modal-journal"]')
  .not('[href="#modal-report"]')
  .not('[href="#modal-ojt"]')
  .not('[href="#carousel-id"]')
  .not('[href="#carousel-journal"]')
  .not('[href="#carousel-report"]')
  .not('[href="#carousel-ojt"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
