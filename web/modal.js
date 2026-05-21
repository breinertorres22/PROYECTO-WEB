// DOM elements
const gameCarousel = document.getElementById('gameCarousel');

// Generate carousel slides from games array
function generateCarousel() {
  if (!gameCarousel) return;

  gameCarousel.innerHTML = '';

  games.forEach((game) => {
    const gameUrl = getGamePageUrl(game.title);

    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.innerHTML = `
      <div class="imatge_joc ${game.imageClass}"></div>
      <div class="oferta_joc">
        <div class="info_joc_oferta">
          <div class="titol_jocs">${game.title}</div>
          <div class="Edition">${game.edition}</div>
          <div class="price-label">Preu:</div>
          <div class="preus">
            <div class="descompte">${game.discount}</div>
            <div class="preu_tatxat">${game.originalPrice}</div>
            <div class="preu_actual">${game.finalPrice}</div>
          </div>
        </div>
        <div class="game-hover-preview">
          <div class="game-preview-title">${game.title}</div>
          <div class="game-preview-desc">${game.description.substring(0, 100)}...</div>
          <a href="${gameUrl}" class="game-preview-link" aria-label="Veure detalls de ${game.title}">View Details →</a>
        </div>
      </div>
    `;

    // Navigate to game page when clicking slide
    slide.addEventListener('click', () => {
      window.location.href = gameUrl;
    });

    gameCarousel.appendChild(slide);
  });
}

// Function to get game page URL based on title
function getGamePageUrl(title) {
  const urlMap = {
    'Fortnite': 'fortnite.html',
    'Grand Theft Auto V': 'gtav.html',
    'Call Of Duty': 'cod.html',
    'Schedule I': 'schedule.html',
    'Farcry 6': 'farcry6.html',
    'FIFA 26': 'fifa26.html'
  };

  return urlMap[title] || '#';
}

document.addEventListener('DOMContentLoaded', () => {
  generateCarousel();
});
