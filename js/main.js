$(document).ready(function() {
  
  var scrollLink = $('.scroll');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top - 80
    }, 1000, "easeInOutExpo");
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.scroll').click(function() {
    $('.navbar-collapse').collapse('hide');
  });
  
  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 20,
  });

  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    
    scrollLink.each(function() {
      
      var sectionOffset = $(this.hash).offset().top - 90;
      
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })
    
  })
  
})

$(document).ready(function(){

        //Check to see if the window is top if not then display button
        $(window).scroll(function(){
            if ($(this).scrollTop() > 300) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });

        //Click event to scroll to top
        $('.scrollToTop').click(function(){
            $('html, body').animate({scrollTop : 0},1000);
            return false;
        });

    });

