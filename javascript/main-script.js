document.addEventListener('DOMContentLoaded', function() {
  const portfolioSection = document.getElementById('banner-height');
    
  if (portfolioSection) {
    let isAnimating = false;
    let currentColor = getComputedStyle(portfolioSection).backgroundColor;

    window.addEventListener('scroll', () => {
      if (!isAnimating) {
        requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          const scrollThreshold = 300;

          if (scrollPosition > scrollThreshold) {
            if (currentColor !== 'black') {
              isAnimating = true;
              currentColor = 'black';
              portfolioSection.style.transition = 'background-color 0.5s ease'; // I can control the duration with this
              portfolioSection.style.backgroundColor = '#141414';
              portfolioSection.style.color = 'white';
            }
          } else {
            if (currentColor !== 'transparent') {
              isAnimating = true;
              currentColor = 'transparent';
              portfolioSection.style.transition = 'background-color 0.5s ease'; 
              portfolioSection.style.backgroundColor = 'transparent';
            }
          }
          isAnimating = false;
        });
      }
    });
  }
});

