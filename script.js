const main = document.querySelector("main");
const sobre = document.querySelector(".sobre");
const sobreDiv = document.querySelector(".sobre-div");
const skills = document.querySelector(".skills");
const skillsDiv = document.querySelector(".skills-div");
const projetos = document.querySelector(".projetos");
const projetosDiv = document.querySelector(".projetos-div");
const contato = document.querySelector(".contato");
const contatoDiv = document.querySelector(".contato-div");

let typeInstance = null;

function limparTypewriter() {
	if (typeInstance) {
		typeInstance.destroy();
		typeInstance = null;
	}
}

function marcarNavAtiva(navClicada) {
	const navLinks = document.querySelectorAll(".menu li");
	navLinks.forEach((nav) => nav.classList.remove("nav-ativa"));
	navClicada.classList.add("nav-ativa");
}

main.addEventListener("click", (event) => {
	if (!sobreDiv.contains(event.target) && !skillsDiv.contains(event.target) && !projetosDiv.contains(event.target) && !contatoDiv.contains(event.target)) {
		sobreDiv.style.display = "none";
		skillsDiv.style.display = "none";
		projetosDiv.style.display = "none";
		contatoDiv.style.display = "none";

		document.querySelectorAll(".menu li").forEach((nav) => nav.classList.remove("nav-ativa"));
	}
});

sobre.addEventListener("click", () => {
	marcarNavAtiva(sobre);
	const isVisible = sobreDiv.style.display === "block";
	if (isVisible) {
		sobreDiv.style.display = "none";
		sobreDiv.classList.remove("aparecer");
	} else {
		sobreDiv.style.display = "block";
		sobreDiv.classList.add("aparecer");
	}

	skillsDiv.style.display = "none";
	projetosDiv.style.display = "none";
	contatoDiv.style.display = "none";

	if (!isVisible) {
		limparTypewriter();
		const texto1 = document.querySelector(".texto-1");
		texto1.innerHTML = "";
		typeInstance = new TypeIt(".texto-1", {
			strings: 'Aqui falo um pouco <span style="color: var(--font-3)">sobre</span> mim e meus objetivos',
			speed: 50,
			loop: false,
			waitUntilVisible: true,
		}).go();
	}
});

skills.addEventListener("click", () => {
	marcarNavAtiva(skills);
	const isVisible = skillsDiv.style.display === "block";
	if (isVisible) {
		skillsDiv.style.display = "none";
		skillsDiv.classList.remove("aparecer");
	} else {
		skillsDiv.style.display = "block";
		skillsDiv.classList.add("aparecer");
	}

	sobreDiv.style.display = "none";
	projetosDiv.style.display = "none";
	contatoDiv.style.display = "none";

	if (!isVisible) {
		limparTypewriter();
		const texto2 = document.querySelector(".texto-2");
		texto2.innerHTML = "";
		typeInstance = new TypeIt(".texto-2", {
			strings: 'Aqui estão minhas <span style="color: var(--font-3)">skills</span>, com foco nas tecnologias que domino',
			speed: 50,
			loop: false,
			waitUntilVisible: true,
		}).go();
	}
});

projetos.addEventListener("click", () => {
	marcarNavAtiva(projetos);
	const isVisible = projetosDiv.style.display === "block";
	if (isVisible) {
		projetosDiv.style.display = "none";
		projetosDiv.classList.remove("aparecer");
	} else {
		projetosDiv.style.display = "block";
		projetosDiv.classList.add("aparecer");
	}

	sobreDiv.style.display = "none";
	skillsDiv.style.display = "none";
	contatoDiv.style.display = "none";

	if (!isVisible) {
		limparTypewriter();
		const texto3 = document.querySelector(".texto-3");
		texto3.innerHTML = "";
		typeInstance = new TypeIt(".texto-3", {
			strings: '<span style="color: var(--font-3)">Projetos</span> nos quais trabalhei',
			speed: 50,
			loop: false,
			waitUntilVisible: true,
		}).go();
	}
});

contato.addEventListener("click", () => {
	marcarNavAtiva(contato);
	const isVisible = contatoDiv.style.display === "block";
	if (isVisible) {
		contatoDiv.style.display = "none";
		contatoDiv.classList.remove("aparecer");
	} else {
		contatoDiv.style.display = "block";
		contatoDiv.classList.add("aparecer");
	}

	sobreDiv.style.display = "none";
	skillsDiv.style.display = "none";
	projetosDiv.style.display = "none";

	if (!isVisible) {
		limparTypewriter();
		const texto4 = document.querySelector(".texto-4");
		texto4.innerHTML = "";
		typeInstance = new TypeIt(".texto-4", {
			strings: 'Meus <span style="color: var(--font-3)">contatos</span>',
			speed: 50,
			loop: false,
			waitUntilVisible: true,
		}).go();
	}
});

document.querySelectorAll(".sobre-div, .skills-div, .projetos-div, .contato-div").forEach((div) => div.classList.remove("aparecer"));

const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const btnLight = document.querySelector(".img1");
const btnDark = document.querySelector(".img2");
const root = document.documentElement;

btnLight.addEventListener("click", () => {
	root.classList.add("modo-claro");
	root.classList.remove("modo-escuro");
	img1.src = "img/light_mode-claro.svg";
	img2.src = "img/dark-mode-claro.svg";
});

btnDark.addEventListener("click", () => {
	root.classList.add("modo-escuro");
	root.classList.remove("modo-claro");
	img1.src = "img/light_mode.svg";
	img2.src = "img/dark-mode.svg";
});

const temaLight = document.querySelector(".tema-light");
const temaDark = document.querySelector(".tema-dark");

temaLight.addEventListener("click", () => {
	root.classList.add("modo-claro");
	root.classList.remove("modo-escuro");
	img1.src = "img/light_mode-claro.svg";
	img2.src = "img/dark-mode-claro.svg";
});

temaDark.addEventListener("click", () => {
	root.classList.add("modo-escuro");
	root.classList.remove("modo-claro");
	img1.src = "img/light_mode.svg";
	img2.src = "img/dark-mode.svg";
});

const dropdownImg = document.querySelector(".dropdown-img");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdown = document.querySelector(".dropdown");

dropdownImg.addEventListener("click", (e) => {
	e.stopPropagation();
	const isOpen = dropdownMenu.style.display === "block";
	dropdownMenu.style.display = isOpen ? "none" : "block";

	if (isOpen) {
		dropdownImg.classList.remove("aberto");
	} else {
		dropdownImg.classList.add("aberto");
	}
});

document.addEventListener("click", (e) => {
	if (!dropdown.contains(e.target)) {
		dropdownMenu.style.display = "none";
		dropdownImg.classList.remove("aberto");
	}
});

const dropdownItems = document.querySelectorAll(".dropdown-menu li");

dropdownItems.forEach((item) => {
	item.addEventListener("click", () => {
		dropdownMenu.style.display = "none";
		dropdownImg.classList.remove("aberto");
	});
});
