document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);
            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
        });
    });
});

// tabs
function openTab(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("content-tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " is-active";
}

var countDownDate = new Date("Nov 10,2024 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate -now;
    var days = Math.floor(distance / ( 1000 * 60 * 60 * 24 ));
    var hours = Math.floor(distance % ( 1000 * 60 * 60 * 24 ) / ( 1000 * 60 * 60));
    var minutes = Math.floor(distance % ( 1000 * 60 * 60 ) / ( 1000 * 60));
    var seconds = Math.floor(distance % ( 1000 * 60 ) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    if(distance < 0 ){
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    } 

},1000);
function myFunction() {
  var element = document.getElementById("hidden");
  element.classList.toggle("show");
}
function myFunction1() {
  var element = document.getElementById("hidden1");
  element.classList.toggle("show");
}
function myFunction2() {
  var element = document.getElementById("hidden2");
  element.classList.toggle("show");
}
function myFunction3() {
  var element = document.getElementById("hidden3");
  element.classList.toggle("show");
}
function myFunction4() {
  var element = document.getElementById("hidden4");
  element.classList.toggle("show");
}
function myFunction5() {
  var element = document.getElementById("hidden5");
  element.classList.toggle("show");
}
function myFunction6() {
  var element = document.getElementById("hidden6");
  element.classList.toggle("show");
}
window.scrollTo ({
  top: 0,
  behavior: 'smooth',
});
  const navbar = document.querySelector('.navbar.is-triggered-on-scroll')
  
  function tirggerScrollNavbar() {
    navbar.classList.add('is-triggered')
  }
  
  function removeScrollNavbar() {
    navbar.classList.remove('is-triggered')
  }
  addEventListener('scroll', function () {
// 70
if (document.documentElement.scrollTop >= 70) {
  tirggerScrollNavbar()
} else {
  removeScrollNavbar()
}
});
//FAQ
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// Roadmap Page
(function(){
  // Vertical Timeline - by CodyHouse.co
	function VerticalTimeline( element ) {
		this.element = element;
		this.blocks = this.element.getElementsByClassName("cd-timeline__block");
		this.images = this.element.getElementsByClassName("cd-timeline__img");
		this.contents = this.element.getElementsByClassName("cd-timeline__content");
		this.offset = 0.8;
		this.hideBlocks();
	};

	VerticalTimeline.prototype.hideBlocks = function() {
		if ( !"classList" in document.documentElement ) {
			return; // no animation on older browsers
		}
		//hide timeline blocks which are outside the viewport
		var self = this;
		for( var i = 0; i < this.blocks.length; i++) {
			(function(i){
				if( self.blocks[i].getBoundingClientRect().top > window.innerHeight*self.offset ) {
					self.images[i].classList.add("cd-timeline__img--hidden"); 
					self.contents[i].classList.add("cd-timeline__content--hidden"); 
				}
			})(i);
		}
	};

	VerticalTimeline.prototype.showBlocks = function() {
		if ( ! "classList" in document.documentElement ) {
			return;
		}
		var self = this;
		for( var i = 0; i < this.blocks.length; i++) {
			(function(i){
				if( self.contents[i].classList.contains("cd-timeline__content--hidden") && self.blocks[i].getBoundingClientRect().top <= window.innerHeight*self.offset ) {
					// add bounce-in animation
					self.images[i].classList.add("cd-timeline__img--bounce-in");
					self.contents[i].classList.add("cd-timeline__content--bounce-in");
					self.images[i].classList.remove("cd-timeline__img--hidden");
					self.contents[i].classList.remove("cd-timeline__content--hidden");
				}
			})(i);
		}
	};

	var verticalTimelines = document.getElementsByClassName("js-cd-timeline"),
		verticalTimelinesArray = [],
		scrolling = false;
	if( verticalTimelines.length > 0 ) {
		for( var i = 0; i < verticalTimelines.length; i++) {
			(function(i){
				verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
			})(i);
		}

		//show timeline blocks on scrolling
		window.addEventListener("scroll", function(event) {
			if( !scrolling ) {
				scrolling = true;
				(!window.requestAnimationFrame) ? setTimeout(checkTimelineScroll, 250) : window.requestAnimationFrame(checkTimelineScroll);
			}
		});
	}

	function checkTimelineScroll() {
		verticalTimelinesArray.forEach(function(timeline){
			timeline.showBlocks();
		});
		scrolling = false;
	};
})();
// go to top


let calcScrollValue = () => {
  let scrollProgress = document.getElementById("goToTop");
  // let progressValue = document.getElementById("inner");
  let pos = document.documentElement.scrollTop;
  // console.log(pos);
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  // console.log(calcHeight);
  let scrollValue = Math.round((pos * 100) / calcHeight);
  // console.log(scrollValue);
  if (pos > 100) {
      scrollProgress.style.display = "flex"
  } else {
      scrollProgress.style.display = "none"
  }
  scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#5600fe ${scrollValue}%,white ${scrollValue}%)`
}
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
		