$(function () {
	var aboutOperationSlider = new Swiper('.js-about-operation-slider', {
		pagination: {
			el: '.about-operation__slider-pagination',
			type: 'fraction',
		},
		navigation: {
			nextEl: '.about-operation__slider-btn-next',
			prevEl: '.about-operation__slider-btn-prev',
		},
	});

	$('.js-phone').inputmask({
		mask: '+7 (999) 999 99 99',
		clearIncomplete: true,
	});
});
