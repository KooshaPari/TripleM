import { addThumbBtnsClickHandlers, addToggleThumbBtnsActive } from './EmblaCarouselThumbsButton.js'
import { addPrevNextBtnsClickHandlers } from './EmblaCarouselArrowButtons.js'
import { addDotBtnsAndClickHandlers } from './EmblaCarouselDotButton.js'
document.addEventListener('DOMContentLoaded', function () {
	// Update the preview image when the carousel selection changes

	const OPTIONS = { align: 'start', watchDrag: true, loop: false }
	const OPTIONS_THUMBS = {
		containScroll: 'keepSnaps',
		dragFree: true,
		align: 'start',
	}

	const viewportNodeMainCarousel = document.querySelector('.embla__viewport')
	const viewportNodeThumbCarousel = document.querySelector('.embla-thumbs__viewport')

	const emblaApiMain = EmblaCarousel(viewportNodeMainCarousel, OPTIONS)
	const emblaApiThumb = EmblaCarousel(viewportNodeThumbCarousel, OPTIONS_THUMBS)

	const prevBtnNode = document.querySelector('.embla__button--prev')
	const nextBtnNode = document.querySelector('.embla__button--next')
	const dotsNode = document.querySelector('.embla__dots')

	const syncCarousels = (primaryApi, secondaryApi) => {
		secondaryApi.scrollTo(primaryApi.selectedScrollSnap())
	}
	const removeThumbBtnsClickHandlers = addThumbBtnsClickHandlers(emblaApiMain, emblaApiThumb)

	const removeToggleThumbBtnsActive = addToggleThumbBtnsActive(emblaApiMain, emblaApiThumb)

	const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
		emblaApiMain,
		emblaApiThumb,
		prevBtnNode,
		nextBtnNode,
		syncCarousels
	)

	const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
		emblaApiMain,
		emblaApiThumb,
		dotsNode,
		syncCarousels
	)

	emblaApiMain
		.on('destroy', removeThumbBtnsClickHandlers)
		.on('destroy', removeToggleThumbBtnsActive)
		.on('destroy', removePrevNextBtnsClickHandlers)
		.on('destroy', removeDotBtnsAndClickHandlers)

	emblaApiThumb
		.on('destroy', removeThumbBtnsClickHandlers)
		.on('destroy', removeToggleThumbBtnsActive)
		.on('destroy', removePrevNextBtnsClickHandlers)
		.on('destroy', removeDotBtnsAndClickHandlers)
})
