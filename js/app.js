//header burger

const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');

	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');

		navLinks.forEach((link, index) => {
			if(link.style.animation) {
				link.style.animation = '';
			}else{
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
			}
		});

		burger.classList.toggle('toggle');
	});

}

navSlide();

const popup = document.querySelector('.popup');
const closebtn = document.querySelector('.close-btn');

window.onload = function(){
	setTimeout(function(){
		popup.style.display = "block";
	}, 2000)
}

closebtn.addEventListener('click', () => {
	popup.style.display = "none";
})

//haederScroll
/*
var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollPos > currentScrollPos) {
		document.getElementById("nav-content").style.top = "0";
	}else{
		document.getElementById("nav-content").style.top = "-60px";
	}

	prevScrollPos = currentScrollPos;
}
var lastScrollTop = 0;
	navbar = document.getElementById("nav-content");
window.addEventListener("scroll",function(){
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if (scrollTop > lastScrollTop) {
		navbar.style.top = "-60px";
	} else {
		navbar.style.top = "0";
	}
	lastScrollTop = scrollTop;
})*/

$(document).ready(function(){
	//slider
	var mySwiper = new Swiper('.swiper-container', {
	  // Optional parameters
	  loop: true,
	  effect: 'fade',
	  speed: 1500,

	  // If we need pagination
	  pagination: {
	    el: '.swiper-pagination',
	    clickable: true,
	  },

	  // Navigation arrows
	  navigation: {
	    nextEl: '.button-next',
	    prevEl: '.button-prev',
	  },

	})
	mySwiper.on('slideChangeTransitionStart', function() {
		anime({
		  targets: '.swiper-slide-active .slider-left img',
		  scale: [1.2,1],
		  easing: 'easeInOutQuart'
		});
		anime({
		  targets: '.swiper-slide-active .slider-right .element',
		  translateY: [50,0],
		  opacity: [0,1],
		  delay: anime.stagger(150,{start:100}),
		  easing: 'easeInOutQuart'
		});
	});
	//LOGO
	anime({
	  targets: '.logo',
	  translateX: [-400,0],
	  opacity: [0,1],
	  easing: 'easeInOutQuart'
	});
	//nav
	var x = window.matchMedia("(max-width: 768px)")
	myFunction(x) // 執行時呼叫的監聽函式
	x.addListener(myFunction) // 狀態改變時新增監聽器

	function myFunction(x) {
	    if (x.matches) { // 媒體查詢
	        anime({
			  
			});
	    } else {
	        anime({
			  targets: '.nav-links li',
			  translateY: [50,0],
			  opacity: [0,1],
			  delay: anime.stagger(100,{start:300}),
			  easing: 'easeInOutQuart'
			});
	    }
	}
	 
	//slider

	anime({
	  targets: '.slider-left img',
	  scale: [1.2,1],
	  opacity: [0,1],
	  delay: anime.stagger(200,{start:300, from:'last'}),
	  easing: 'easeInOutQuart'
	});
	anime({
	  targets: '.swiper-slide-active .slider-right .element',
	  translateY: [50,0],
	  opacity: [0,1],
	  delay: anime.stagger(250,{start:250}),
	  easing: 'easeInOutQuart'
	});
	anime({
	  targets: '.button-prev',
	  translateY: [150,0],
	  delay:200,
	  easing: 'easeInOutQuart'
	});
	anime({
	  targets: '.button-next',
	  translateY: [150,0],
	  delay:200,
	  easing: 'easeInOutQuart'
	});
	//home-card
	anime({
	  targets: '.card-container',
	  translateY: [50,0],
	  opacity: [0,1],
	  easing: 'easeInOutQuart'
	});

	//home-slidercard
	$('.box-container').owlCarousel({
		items:4,
		navigation:true,
		nav:true,
		loop:true,
		navigationText:["",""],
		pagination:false,
		autoPlay:true
	});

	$('.our-history-carousel').owlCarousel({
		items:3,
		itemsDesktop:[1080,3],
		itemsDesktopSmall:[992,2],
		itemsTablet:[768,2],
		itemsMobile:[575,1],
		pagination:true,
		autoPlay:true
	});
	


	
});



