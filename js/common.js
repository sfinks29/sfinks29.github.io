$(function(){

/*	function vysota(){
	return $(window).height();
	}
 $(window).resize(function(){
 	vysota();
}); */

/* owl-carousel slider и управляем dots начало*/
$(document).ready(function() {
				$("#owl-demo").owlCarousel({
	      navigation : false, // Show next and prev buttons
	      slideSpeed : 300,
	      paginationSpeed : 400,
	      singleItem: true,
	      pagination: true,
	      autoHeight: true,  
     		/* autoPlay: 10000*/
	      // "singleItem:true" is a shortcut for:
	      // items : 1, 
	      // itemsDesktop : false,
	      // itemsDesktopSmall : false,
	      // itemsTablet: false,
	      // itemsMobile : false
    	});

				
				function shirina(){
					var s = $(window).width();
						if (s<=600){
						$(".owl-pagination").css("display","none");
					}else{	$(".owl-pagination").css("display","block");}
					}			
				$(window).resize(function(){
					shirina();
				})		
		});
/* owl-carousel slider и управляем dots конец*/
/* кнопка sandwich начало */
$(".sandwich").click(function() {
  $(".sandwich").toggleClass("active");
});
$(".sandwich").on("click", function(){
	if($(".top-mnu").is(":visible")){
		$(".top-mnu").fadeOut(600);
	}else{$(".top-mnu").fadeIn(600);}
});
/* кнопка sandwich конец */

//magnific popup gallery + animation loader
	$('.mfp-gallery').magnificPopup({
	mainClass: 'mfp-zoom-in',
	type: 'image',
	tLoading: '',
	gallery:{
		enabled:true,
	},
	removalDelay: 300,
	callbacks: {
		beforeChange: function() {
			this.items[0].src = this.items[0].src + '?=' + Math.random(); 
		},
		open: function() {
			$.magnificPopup.instance.next = function() {
				var self = this;
				self.wrap.removeClass('mfp-image-loaded');
				setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
			}
			$.magnificPopup.instance.prev = function() {
				var self = this;
				self.wrap.removeClass('mfp-image-loaded');
				setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
			}
		},
		imageLoadComplete: function() { 
			var self = this;
			setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
		}
	}
});



$('.mfp-work').magnificPopup({
	mainClass: 'mfp-zoom-in',
	type: 'image',
	tLoading: '',
	gallery:{
		enabled:true,
	},
	removalDelay: 300,
	callbacks: {
		beforeChange: function() {
			this.items[0].src = this.items[0].src + '?=' + Math.random(); 
		},
		open: function() {
			$.magnificPopup.instance.next = function() {
				var self = this;
				self.wrap.removeClass('mfp-image-loaded');
				setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
			}
			$.magnificPopup.instance.prev = function() {
				var self = this;
				self.wrap.removeClass('mfp-image-loaded');
				setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
			}
		},
		imageLoadComplete: function() { 
			var self = this;
			setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
		}
	}
});



//magnific popup video
$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});



	$(".owl-team").owlCarousel({
	      navigation : true, // Show next and prev buttons
	      slideSpeed : 300,
	      paginationSpeed : 400,
	      singleItem: false,
	      pagination: false,
	      autoHeight: false,
	      items : 4,  
     		/* autoPlay: 10000*/
	      // "singleItem:true" is a shortcut for:
	      // items : 1, 
	      // itemsDesktop : false,
	      // itemsDesktopSmall : false,
	      // itemsTablet: false,
	      // itemsMobile : false
    	});

$(".owl-work").owlCarousel({
	      navigation : true, // Show next and prev buttons
	      slideSpeed : 300,
	      paginationSpeed : 400,
	      singleItem: false,
	      pagination: false,
	      autoHeight: false,
	      items : 6,  
    	});


$(document).ready(function() {
	   $('a[href*=#]').bind("click", function(e){
	var anchor = $(this);
	$('html, body').stop().animate({
	scrollTop: $(anchor.attr('href')).offset().top-60
	}, 1200);
	e.preventDefault();
	});
 });

$(".top-mnu li>a").on("click", function(){
	 $(".sandwich").toggleClass("active");
		$(".top-mnu").slideUp(600);
})

});



