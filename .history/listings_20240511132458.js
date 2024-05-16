import EmblaCarousel from 'embla-carousel'
import { addPrevNextBtnsClickHandlers } from './EmblaCarouselArrowButtons'
import { addDotBtnsAndClickHandlers } from './EmblaCarouselDotButton'
import '../css/base.css'
import '../css/sandbox.css'
import '../css/embla.css'
document.addEventListener('DOMContentLoaded', function () {
	const OPTIONS = { align: 'start', dragFree: true, loop: true }
	var emblaNode = document.querySelector('.embla')

	const emblaApi = EmblaCarousel(emblaNode, OPTIONS)
	const prevBtnNode = emblaNode.querySelector('.embla__button--prev')
	const nextBtnNode = emblaNode.querySelector('.embla__button--next')
	const dotsNode = emblaNode.querySelector('.embla__dots')

	// Update the preview image when the carousel selection changes
	embla.on('select', function () {
		var selectedIndex = embla.selectedScrollSnap()
		var selectedImage = embla.slideNodes()[selectedIndex].querySelector('img')
		var previewImage = document.getElementById('previewImage')
		previewImage.src = selectedImage.src
	})
})

//const viewportNode = emblaNode.querySelector('.embla__viewport')