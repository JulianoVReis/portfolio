function scrollSuave() {
	let linksInt = document.querySelectorAll('.scrolling a[href^="#"]')

	function smoothScrolling(event) {
		event.preventDefault()
		let href = event.currentTarget.getAttribute('href')
		let section = document.querySelector(href)
		section.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	}

	linksInt.forEach(link => {
		link.addEventListener('click', smoothScrolling)
	})
}
scrollSuave()