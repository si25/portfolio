
/**
	**
		Home/Cover: CTA arrow
	**
 **/ 


/** Hover colour change **/ 

$(".cta").hover(function(){
	// $("#home").find(".home-cta-p").addClass("hover-p");
	$("#home").find(".down-arrow").addClass("hover-arrow");

}, function(){
	// $("#home").find(".home-cta-p").removeClass("hover-p");
	$("#home").find(".down-arrow").removeClass("hover-arrow");
});


/** Bounce **/ 

// $(".down-arrow").ready(function() {
// 	bounce($(this), 1, '40px', 1000);
// });

// function bounce(element, times, distance, speed) {
// 	for(var i = 0; i < times; i++) {
// 		element.animate({marginTop: '-='+distance}, speed)
// 			.animate({marginTop: '+='+distance}, speed);
// 	}
// };

// $(document).ready(function(){
// 	$(".down-arrow").effect( "bounce", 
// 	{ times: 100 }, 500 );
	
// });




/** Scroll speed **/

$(".cta").click(function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 900);
});


/** Corrects nav bar highlight from home CTA **/
// $(".cta").click(function(){
// 	$("#navbarPrimary").find(".active").removeClass("active");
// 	$("#navbarPrimary .about-nav").parent().addClass("active");
// });









/**
	**
		Navigations: Nav bar
	**
 **/ 

 /** Deals with scroll speed once Nav bar link is clicked **/ 

$("#navbarPrimary .nav-item").click(function(event) {
	event.preventDefault();
	const id = $(this).find('a').attr("href"); 

	$('html, body').animate({
	 	scrollTop: $(id).offset().top
    }, 800);
});

/** Collapses navbar once a link is clicked **/ 

$(function(){ 
     var navMain = $(".navbar-collapse");
     navMain.on("click", ".nav-link", null, function () {
         navMain.collapse('hide');
     });
 });



/** Changes the highlighted 'active' section in burger nav bar **/ 

// $("#navbarPrimary .nav-link").on("click", function(){
// 		$("#navbarPrimary").find(".active").removeClass("active");
// 		$(this).parent().addClass("active");
// });




/**
	**
		Projects: Modal
	**
 **/


var modal = document.getElementById ('project-modal');
var btn = document.getElementById ('project-button');
var close = document.getElementsByClassName ('close')[0];

btn.onclick = function() {
	modal.style.display = "block";
}

close.onclick = function() {
	modal.style.display = "none";
}

window.onclick = function(e) {
	if (e.target == modal) {
		modal.style.display ="none";
	}
}

var modalTwo = document.getElementById ('project-modal-two');
var btnTwo = document.getElementById ('project-button-two');
var closeTwo = document.getElementsByClassName ('close-two')[0];

btnTwo.onclick = function() {
	modalTwo.style.display = "block";
}

closeTwo.onclick = function() {
	modalTwo.style.display = "none";
}

window.onclick = function(e) {
	if (e.target == modalTwo) {
		modalTwo.style.display ="none";
	}
}

var modalThree = document.getElementById ('project-modal-three');
var btnThree = document.getElementById ('project-button-three');
var closeThree = document.getElementsByClassName ('close-three')[0];

btnThree.onclick = function() {
	modalThree.style.display = "block";
}

closeThree.onclick = function() {
	modalThree.style.display = "none";
}

window.onclick = function(e) {
	if (e.target == modalThree) {
		modalTwo.style.display ="none";
	}
}


// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}






