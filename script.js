function scrollSuave() {
	let linksInt = document.querySelectorAll('.scrolling a[href^="#"]');

	function smoothScrolling(event) {
		event.preventDefault();
		let href = event.currentTarget.getAttribute("href");
		let section = document.querySelector(href);
		section.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	}

	linksInt.forEach((link) => {
		link.addEventListener("click", smoothScrolling);
	});
}
scrollSuave();

function typeWriter() {
	new TypeIt("#texto01", {
		strings: 'Esta é a seção <span class="span-verde">Home.</span>',
		speed: 50,
		loop: false,
		waitUntilVisible: true,
	}).go();

	new TypeIt("#texto02", {
		strings: 'Esta é a seção <span class="span-verde">Sobre</span>, onde falo um pouco sobre mim e meus objetivos.',
		speed: 50,
		loop: false,
		waitUntilVisible: true,
	}).go();

	new TypeIt("#texto03", {
		strings: 'Esta é a seção de <span class="span-verde">Skills</span>, que contém meus conhecimentos técnicos.',
		speed: 50,
		loop: false,
		waitUntilVisible: true,
	}).go();

	new TypeIt("#texto04", {
		strings: 'Esta é a seção dos <span class="span-verde">Projetos</span> nos quais trabalhei.',
		speed: 50,
		loop: false,
		waitUntilVisible: true,
	}).go();
}
typeWriter();