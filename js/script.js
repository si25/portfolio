





/****
HOME PAGE SCRIPT
****/ 

/** Arrow click - scroll speed and target **/
$(".arrow").click(function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 900);
});





/****
	NAVBAR FUNCTIONS
****/ 

  /** Scroll speed from Navbar **/ 
  $("#navbarPrimary .nav-item").click(function(event) {
  	event.preventDefault();
  	const id = $(this).find('a').attr("href"); 

  	$('html, body').animate({
  	 	scrollTop: $(id).offset().top
      }, 800);
  });

  /** Mobile: collapses navbar **/ 
  $(function(){ 
       var navMain = $(".navbar-collapse");
       navMain.on("click", ".nav-link", null, function () {
           navMain.collapse('hide');
       });
  });






/****
 SHOW ON SCROLL ANIMATION 
****/

  /** Creates skills box animation (also supports animation on home page) (ACTION: if in viewport, then animate) **/

  // Detects if an element is in the viewport (Helper function from: http://stackoverflow.com/a/7557433/274826)
  function isElementInViewport(el) {
    
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }

    const rect = el.getBoundingClientRect();

    return ((rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
    console.log(el); 
  } 

  // Detect request animation frame
  var scroll = window.requestAnimationFrame
  var elementToAnimate = document.querySelectorAll('.show-on-scroll'); 

  function loop() {

    Array.prototype.forEach.call(elementToAnimate, function(element){
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




/****
	PROJECTS SCRIPT
****/


  /** Creates modal open/close functionality **/                                  // Improve this with queryAllSelectors and for loop //
  var modal = document.getElementById ('project-modal');
  var btn = document.getElementById ('project-button');
  var close = document.getElementsByClassName ('close')[0];

  btn.onclick = function() {
  	modal.style.display = "block";
  }

  close.onclick = function() {
  	modal.style.display = "none";
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

  var modalThree = document.getElementById ('project-modal-three');
  var btnThree = document.getElementById ('project-button-three');
  var closeThree = document.getElementsByClassName ('close-three')[0];

  btnThree.onclick = function() {
  	modalThree.style.display = "block";
  }

  closeThree.onclick = function() {
  	modalThree.style.display = "none";
  }










