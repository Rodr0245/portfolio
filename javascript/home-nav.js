document.addEventListener('DOMContentLoaded', function() {
	const portfolioSection = document.getElementById('banner-height');
	const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

	window.addEventListener('scroll', function() {
		const scrollPosition = window.scrollY;
		const portfolioSectionOffset = portfolioSection.offsetTop;
		const portfolioSectionHeight = portfolioSection.offsetHeight;

		if (scrollPosition >= portfolioSectionOffset && scrollPosition < portfolioSectionOffset + portfolioSectionHeight) {
			navLinks.forEach(link => link.classList.add('text-white'));
		} else {
			navLinks.forEach(link => link.classList.remove('text-white'));
		}
	});
});

