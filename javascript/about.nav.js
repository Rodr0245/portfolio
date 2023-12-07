document.addEventListener('DOMContentLoaded', function () {
	const beyondTheScreenSection = document.querySelector('.beyond');
	const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

	if (beyondTheScreenSection) {
			window.addEventListener('scroll', function () {
					const scrollPosition = window.scrollY;
					const beyondTheScreenOffset = beyondTheScreenSection.offsetTop;

					if (scrollPosition >= beyondTheScreenOffset) {
							navLinks.forEach(link => link.classList.add('txt-dark'));
					} else {
							navLinks.forEach(link => link.classList.remove('txt-dark'));
					}
			});
	}
});
