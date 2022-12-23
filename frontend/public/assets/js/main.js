/*price range*/

 $('#sl2').slider();

	var RGBChange = function() {
	  $('#RGB').css('background', 'rgb('+r.getValue()+','+g.getValue()+','+b.getValue()+')')
	};	
		
/*scroll to top*/

$(document).ready(function(){
	$(function () {
		$.scrollUp({
	        scrollName: 'scrollUp', // Element ID
	        scrollDistance: 300, // Distance from top/bottom before showing element (px)
	        scrollFrom: 'top', // 'top' or 'bottom'
	        scrollSpeed: 300, // Speed back to top (ms)
	        easingType: 'linear', // Scroll to top easing (see http://easings.net/)
	        animation: 'fade', // Fade, slide, none
	        animationSpeed: 200, // Animation in speed (ms)
	        scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
					//scrollTarget: false, // Set a custom target element for scrolling to the top
	        scrollText: '<i class="fa fa-angle-up"></i>', // Text for element, can contain HTML
	        scrollTitle: false, // Set a custom <a> title if required.
	        scrollImg: false, // Set true to use image
	        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	        zIndex: 2147483647 // Z-Index for the overlay
		});
	});
});

var rightJS = {
	init: function(){
	  rightJS.Tags = document.querySelectorAll('.rightJS');
	  for(var i = 0; i < rightJS.Tags.length; i++){
		rightJS.Tags[i].style.overflow = 'hidden';
	  }
	  rightJS.Tags = document.querySelectorAll('.rightJS div');
	  for(var i = 0; i < rightJS.Tags.length; i++){
		rightJS.Tags[i].style.position = 'relative';
		rightJS.Tags[i].style.right = '-'+rightJS.Tags[i].parentElement.offsetWidth+'px';
	  }
	  rightJS.loop();
	},
	loop: function(){
	  for(var i = 0; i < rightJS.Tags.length; i++){
		var x = parseFloat(rightJS.Tags[i].style.right);
		x ++;
		var W = rightJS.Tags[i].parentElement.offsetWidth;
		var w = rightJS.Tags[i].offsetWidth;
		if((x/100) * W  > w) x = -W;
		if (rightJS.Tags[i].parentElement.parentElement.querySelector(':hover') !== rightJS.Tags[i].parentElement) rightJS.Tags[i].style.right = x + 'px';
	  } 
	  requestAnimationFrame(this.loop.bind(this));
	}
  };
  window.addEventListener('load',rightJS.init);
  
  /* JQUERY */
  
  $(function(){
	var rightJQ = {
	  init: function(){
		$('.rightJQ').css({
		  overflow: 'hidden'
		});
		$('.rightJQ').on('mouseover',function(){
		  $('div', this).stop();
		});
		$('.rightJQ').on('mouseout',function(){
		  $('div', this).animate({
			right: '100%'
		  }, 16000, 'linear' );
		});
		rightJQ.loop();
	  },
	  loop: function(){
		$('.rightJQ div').css({
		  position: 'relative',
		  right: '-100%'
		}).animate({
		  right: '100%'
		}, 16000, 'linear', rightJQ.loop);
	  }
	};
	rightJQ.init();
  });
  
  $(function() {
	$("menu-custom btn").click(function() {
	  $("menu-custom btn").removeClass("active");
	  $("menu-custom btn").addClass("active");
	});
	});
