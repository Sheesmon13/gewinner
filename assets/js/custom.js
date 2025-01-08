$(document).ready(function(){
  AOS.init();
$('.brand-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout: 2500,
    autoplaySpeed: 2500,
    smartSpeed: 2500,
    autoplayHoverPause: true,
    slideTransition: 'linear',
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:5
      }
    }
  })

/* footer-form */

$("#email").focus(function(){
	$("#cuboid form").addClass("ready");
})

$("#email").blur(function(){
	if($(this).val() == "")
		$("#cuboid form").removeClass("ready");
})

$("#email").keyup(function(){

	$(".submit-icon").toggleClass("active", $(this).val().length > 0);
})


$("#cuboid form").submit(function(){
	$(this).removeClass("ready").addClass("loading");

	setTimeout(complete, 3000);

	return false;
})
function complete()
{
	$("#cuboid form").removeClass("loading").addClass("complete");
}

$(".reset-icon").click(function(){
	$("#cuboid form").removeClass("complete");
})


  $('.carousel slide').owlCarousel({
  loop:true,
  margin:10,
  autoplay:true,
  autoplayTimeout: 2500,
  autoplaySpeed: 2500,
  smartSpeed: 2500,
  autoplayHoverPause: true,
  slideTransition: 'linear',
  responsive:{
    0:{
      items:1
    },
    600:{
      items:3
    },
    1000:{
      items:5
    }
  }
}) 

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 50) {
      $(".navbar-main").removeClass("transparent-navbar").addClass("solid-navbar");
    } else {
      $(".navbar-main").removeClass("solid-navbar").addClass("transparent-navbar");
    }
  });

})


/* counter value */

$(window).scroll(function() {
  var a = 0;
  var oTop = $('#counter').offset().top - window.innerHeight;
  console.log($('#counter').offset().top);
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 1000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});

/* slider */

$(document).ready(function(){
  $(".slider").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      nav: true,
      dots: true,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
  });
});

//toggle

const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileNav = document.getElementById("mobile-nav");
const closeBtn = document.getElementById("res-cross");

hamburgerBtn.addEventListener("click", () => {
    mobileNav.style.display = mobileNav.style.display === "none" ? "flex" : "none";
});

closeBtn.addEventListener("click", () => {
    mobileNav.style.display = "none";
});



	//Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {
			
			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');
			
			if($(this).hasClass('active')!==true){
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
			}
			
			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);	
			}
		});	
	}


 

