//slider
    (function($){
        $(window).on("load",function(){
            $(".content").mCustomScrollbar();
        });
    })(jQuery);


   /* Owl Carousel
    -----------------------------------------------*/
  $(document).ready(function() {
    $("#owl-work").owlCarousel({
      autoPlay: 3000,
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
    });
 /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
  });

  $(document).ready(function(){
/*Active links
 -----------------------------------------------*/
    $('.list-navbar li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    

/*click on button to scroll
 -----------------------------------------------*/
 var scrollButton=$("#scroll-top")
 $(window).scroll(function(){
    console.log($(this).scrollTop());
  if ($(this).scrollTop() >=250) {
    scrollButton.show();
  }
  else{
   scrollButton.hide();
  }

   });
    scrollButton.click(function(){
      $("html, body").animate({ scrollTop : 0},1000);
    });
  });

 
