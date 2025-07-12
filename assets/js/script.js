var swiper = new Swiper(".swiper-topic", {
  slidesPerView: 3,
  spaceBetween: 8,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  breakpoints: {
		320: {
			slidesPerView: 1,
		},	
    425: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
	},
});
