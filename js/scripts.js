WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]


document.addEventListener('DOMContentLoaded', function () {
	// Top banner
	if ($('.top_banner').length) {
		$('.top_banner .close_btn').click(function(e) {
			e.preventDefault()

			$('.top_banner').slideUp(300)
		})

		new Swiper('.top_banner .swiper', {
			spaceBetween: 0,
			speed: 50000,
			autoplay: {
				delay: 1,
				disableOnInteraction: true
			},
			loop: true,
			slidesPerView: 'auto',
			allowTouchMove: false
		})
	}


	// Mob. top banner
	if ($('.mob_top_banner').length) {
		$('.mob_top_banner .close_btn').click(function(e) {
			e.preventDefault()

			$('.mob_top_banner').addClass('hide').slideUp(300)
		})

		new Swiper('.mob_top_banner .swiper', {
			spaceBetween: 0,
			speed: 50000,
			autoplay: {
				delay: 1,
				disableOnInteraction: true
			},
			loop: true,
			slidesPerView: 'auto',
			allowTouchMove: false
		})
	}


	// Main slider
	let mainSlider = document.querySelector('.main_slider .swiper')

	if (mainSlider) {
		new Swiper('.main_slider .swiper', {
			loop: true,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			lazy: true
		})
	}


	// Products thumbs slider
	const productsThumbsSliders = [],
		productsThumbs = document.querySelectorAll('.product .thumbs .swiper')

	productsThumbs.forEach((el, i) => {
		el.classList.add('product_thumbs_s' + i)

		let options = {
			speed: 50,
			nested: true,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			breakpoints: {
				0: {
					loop: true,
					speed: 500,
					allowTouchMove: true
				},
				1280: {
					loop: false,
					speed: 50,
					effect: 'fade',
					fadeEffect: {
						crossFade: true
					},
					allowTouchMove: false
				}
			}
		}

		const slider = new Swiper('.product_thumbs_s' + i, options)
		productsThumbsSliders.push(slider)

		// Bullets
		const bullets = el.querySelectorAll('.swiper-pagination-bullet')

		bullets.forEach((bullet, index) => {
			bullet.addEventListener('mouseover', () => slider.slideTo(index, 50))

			bullet.addEventListener('click', (e) => {
				e.preventDefault()

				el.querySelector('.thumb').click()
			})
		})

		// Mouseleave
		el.addEventListener('mouseleave', () => slider.slideTo(0, 50))
	})


	// Products slider
	const productsSliders = [],
		products = document.querySelectorAll('.products .swiper.main')

	products.forEach((el, i) => {
		el.classList.add('products_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			// lazy: true,
			autoplay: {
				enabled: el.getAttribute('data-autoplay') ? true : false,
				delay: Number(el.getAttribute('data-autoplay')),
				disableOnInteraction: false
			},
			spaceBetween: 5,
			breakpoints: {
				0: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 'auto'
				},
				1024: {
					slidesPerView: 3
				},
				1280: {
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						setHeight(swiper.el.querySelectorAll('.product'))

						$(swiper.el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.el).find('.thumb').outerHeight() * 0.5
						)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						let items = swiper.el.querySelectorAll('.product')

						items.forEach(el => el.style.height = 'auto')

						setHeight(items)

						$(swiper.el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.el).find('.thumb').outerHeight() * 0.5
						)
					})
				}
			}
		}

		productsSliders.push(new Swiper('.products_s' + i, options))
	})


	// Sub categories slider
	const subCategoriesSliders = [],
		subCategories = document.querySelectorAll('.sub_categories .swiper')

	subCategories.forEach((el, i) => {
		el.classList.add('sub_categories_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			slidesPerView: 'auto',
			breakpoints: {
				0: {
					spaceBetween: 12
				},
				1280: {
					spaceBetween: 20
				}
			}
		}

		subCategoriesSliders.push(new Swiper('.sub_categories_s' + i, options))
	})


	// Product colors
	let productColors = document.querySelector('.product_info .colors .swiper')

	if (productColors) {
		new Swiper('.product_info .colors .swiper', {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: 16,
					slidesPerView: 3
				},
				480: {
					spaceBetween: 20,
					slidesPerView: 4
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 6
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 9
				},
				1280: {
					spaceBetween: 24,
					slidesPerView: 5
				},
				1900: {
					spaceBetween: 25,
					slidesPerView: 6
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						$(swiper.el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.el).find('.thumb').outerHeight() * 0.5
						)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						$(swiper.el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.el).find('.thumb').outerHeight() * 0.5
						)
					})
				}
			}
		})
	}


	// Product info
	if ($('.product_info .images').length) {
		const productThumbs = new Swiper('.product_info .thumbs .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			slidesPerView: 'auto',
			lazy: true,
			direction: 'vertical',
			breakpoints: {
				0: {
					spaceBetween: 24
				},
				1900: {
					spaceBetween: 30
				}
			}
		})

		new Swiper('.product_info .big .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 24,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			thumbs: {
				swiper: productThumbs
			}
		})
	}


	// // Zoom
	// if (window.outerWidth > 1279) {
	// 	$('.product_info .image.zoom').each(function (e) {
	// 		$(this).zoom({
	// 			url: $(this).data('data-zoom-image'),
	// 			target: $('.zoomed_image'),
	// 			magnify: 1,
	// 			duration: 120,
	// 			onZoomIn: function() {
	// 				$(this).closest('.big').find('.zoomed_image').addClass('show')
	// 			},
	// 			onZoomOut: function() {
	// 				$(this).closest('.big').find('.zoomed_image').removeClass('show')
	// 			}
	// 		})
	// 	})
	// }


	// Info block slider
	const infoBlockSliders = [],
		infoBlock = document.querySelectorAll('.info_block .swiper')

	infoBlock.forEach((el, i) => {
		el.classList.add('info_block_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			slidesPerView: 1,
			spaceBetween: 0
		}

		infoBlockSliders.push(new Swiper('.info_block_s' + i, options))
	})


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: 'Закрыть',
		NEXT: 'Следующий',
		PREV: 'Предыдущий',
		MODAL: 'Вы можете закрыть это модальное окно нажав клавишу ESC'
	}

	Fancybox.defaults.tpl = {
		closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg><use xlink:href="images/sprite.svg#ic_close2"></use></svg></button>',

		main: `<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">
			<div class="fancybox__backdrop"></div>
			<div class="fancybox__carousel"></div>
			<div class="fancybox__footer"></div>
		</div>`,
	}


	// Modals
	$('.modal_btn').click(function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: document.getElementById(e.target.getAttribute('data-modal')),
			type: 'inline'
		}])
	})


	// Zoom images
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false
		},
		Thumbs: {
			autoStart: false
		}
	})


	// Accordion
	$('body').on('click', '.accordion .accordion_item .head', function(e) {
		e.preventDefault()

		let item = $(this).closest('.accordion_item'),
			accordion = $(this).closest('.accordion')

		if (item.hasClass('active')) {
			item.removeClass('active').find('.data').slideUp(300)
		} else {
			accordion.find('.accordion_item').removeClass('active')
			accordion.find('.data').slideUp(300)

			item.addClass('active').find('.data').slideDown(300)
		}
	})


	// Change the quantity of goods
	$('body').on('click', '.amount .minus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			minimum = parseFloat($input.data('minimum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal > minimum) $input.val(inputVal - step + unit)
	})

	$('body').on('click', '.amount .plus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			maximum = parseFloat($input.data('maximum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal < maximum) $input.val(inputVal + step + unit)
	})

	$('.amount .input').keydown(function () {
		const _self = $(this),
			maximum = parseInt(_self.data('maximum'))

		setTimeout(() => {
			if (_self.val() == '' || _self.val() == 0) _self.val(parseInt(_self.data('minimum')))
			if (_self.val() > maximum) _self.val(maximum)
		})
	})


	// Mini popups
	$('.mini_modal_btn').click(function(e) {
		e.preventDefault()

		const modalId = $(this).data('modal-id')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			$('.mini_modal').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		} else {
			$('.mini_modal_btn').removeClass('active')
			$(this).addClass('active')

			$('.mini_modal').removeClass('active')
			$(modalId).addClass('active')

			if (is_touch_device()) $('body').css('cursor', 'pointer')
		}
	})

	// Close the popup when clicking outside of it
	$(document).click(e => {
		if ($(e.target).closest('.modal_cont').length === 0) {
			$('.mini_modal, .mini_modal_btn').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		}
	})

	// Close the popup when you click on the cross in the popup
	$('.mini_modal .close_btn').click(e => {
		e.preventDefault()

		$('.mini_modal, .mini_modal_btn').removeClass('active')

		if (is_touch_device()) $('body').css('cursor', 'default')
	})


	// Mob. menu
	$('header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('header .mob_menu_btn').toggleClass('active')
		$('body').toggleClass('lock')

		if (WW > 767) {
			$('header .menu').toggleClass('show')

			$('header .mob_menu_btn').hasClass('active')
				? $('.overlay').fadeIn(300)
				: $('.overlay').fadeOut(200)
		} else {
			$('.mob_menu').toggleClass('show')
		}
	})


	// Phone input mask
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} (000) 000-00-00',
				lazy: true
			})
		})
	}


	// Custom select - Nice select
	const selects = document.querySelectorAll('select')

	if (selects) {
		selects.forEach(el => {
			NiceSelect.bind(el, {
				placeholder: el.getAttribute('data-placeholder')
			})

			el.addEventListener('change', () => el.classList.add('selected'))
		})
	}


	// Order
	$('.lk_info .order .head').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
		$(this).next().slideToggle(300)
	})


	// Product to favorite
	$('.product .favorite_btn, .product_info .favorite_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
	})


	// Product to cart
	$('.product .buy_btn, .product_info .buy_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')

		$('.cart_added_success').hide()
		$('.cart_added_success').fadeIn(200)
	})

	$('.cart_added_success .close_btn').click(function(e) {
		e.preventDefault()

		$('.cart_added_success').fadeOut(200)
	})


	// Filter
	$('.products .head .filter_btn, .filter .close_btn, .filter_overlay').click(function(e) {
		e.preventDefault()

		$('.products .filter, .filter_overlay').toggleClass('show')
	})


	$('.filter .name').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
		$(this).next().slideToggle(300)
	})


	$priceRange = $('.filter #price_range').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 200000,
		from: 2000,
		to: 100000,
		step: 100,
		postfix: ' руб.',
		onChange: data => {
			$('.filter .price_range input.from').val(data.from.toLocaleString())
			$('.filter .price_range input.to').val(data.to.toLocaleString())
		},
		onUpdate: data => {
			$('.filter .price_range input.from').val(data.from.toLocaleString())
			$('.filter .price_range input.to').val(data.to.toLocaleString())
		}
	}).data('ionRangeSlider')

	$('.filter .price_range .input').keyup(function () {
		$priceRange.update({
			from: parseInt($('.filter .price_range input.from').val().replace(/\s/g, '')),
			to: parseInt($('.filter .price_range input.to').val().replace(/\s/g, ''))
		})
	})


	$('.filter .reset_btn').click(function() {
		if($priceRange) {
			$priceRange.reset()
		}

		$('.filter form').get(0).reset()
	})


	// LK
	$('.lk_info .section .title.spoler_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
		$(this).next().slideToggle(300)
	})


	// Checkout
	$('#delivery_method').change(function() {
		$('.checkout_info .delivery_method_info').hide()

		if ($(this).val() === '1') {
			$('.checkout_info .addresses').fadeIn(300)
		}
	})


	$('.checkout_info .addresses .methods .radio').click(function(e) {
		if(e.target.nodeName === 'LABEL') {
			$(this).hasClass('add_address_label')
				? $('.checkout_info .addresses .add_address').fadeIn(300)
				: $('.checkout_info .addresses .add_address').hide()
		}
	})


	$('.checkout_info .payment_methods .radio').click(function(e) {
		if(e.target.nodeName === 'LABEL') {
			$(this).hasClass('credit_label')
				? $('.checkout_info .payment_methods .credit_info').fadeIn(300)
				: $('.checkout_info .payment_methods .credit_info').hide()
		}
	})


	// Mob. footer
	$('footer .title').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active').next().slideToggle(300)
	})


	// Sticky mob. header
	if (WW < 480) {
		$('header.mob_absolute').stick_in_parent({
			offset_top: 0
		})
	}


	// Mob. menu
	$('.mob_menu .links > * > a').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active').next().slideToggle(300)
	})


	if (is_touch_device()) {
		const subMenus = document.querySelectorAll('header .menu .sub_menu')

		// Submenu on the touch screen
		$('header .menu > * > a.sub_link').addClass('touch_link')

		$('header .menu > * > a.sub_link').click(function (e) {
			const dropdown = $(this).next()

			if (dropdown.css('visibility') === 'hidden') {
				e.preventDefault()

				subMenus.forEach(el => el.classList.remove('show'))
				dropdown.addClass('show')

				BODY.style = 'cursor: pointer;'
			}
		})

		// Close the submenu when clicking outside it
		document.addEventListener('click', e => {
			if ($(e.target).closest('.menu').length === 0) {
				subMenus.forEach(el => el.classList.remove('show'))

				BODY.style = 'cursor: default;'
			}
		})
	}


	// Select currency
	$('header .currencies .mini_modal .btn').click(function(e) {
		e.preventDefault()

		const symbol = $(this).find('img').attr('src')

		$('header .currencies .mini_modal .btn').removeClass('active')
		$(this).addClass('active')

		$('header .currencies > .btn img').attr('src', symbol)

		$('.mini_modal, .mini_modal_btn').removeClass('active')

		if (is_touch_device()) $('body').css('cursor', 'default')
	})
})



window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || BODY.clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Overwrite window width
		WW = window.innerWidth || document.clientWidth || BODY.clientWidth


		// Mob. version
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})