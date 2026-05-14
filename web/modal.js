// DOM elements
const gameCarousel = document.getElementById('gameCarousel');
const modal = document.getElementById('gameModal');
const closeBtn = document.querySelector('.close');

// Modal content elements
const modalTitle = document.getElementById('modalGameTitle');
const modalEdition = document.getElementById('modalGameEdition');
const modalImage = document.getElementById('modalGameImage');
const modalDescription = document.getElementById('modalGameDescription');
const modalPlatform = document.getElementById('modalGamePlatform');
const modalGenre = document.getElementById('modalGameGenre');
const modalReleaseDate = document.getElementById('modalGameReleaseDate');
const modalPrice = document.getElementById('modalGamePrice');

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

    slide.addEventListener('click', (event) => {
      if (event.target.closest('.game-preview-link')) {
        return;
      }
      openModal(game);
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

// Open modal with game data
function openModal(game) {
  if (!modal || !modalTitle || !modalEdition || !modalImage || !modalDescription || !modalPlatform || !modalGenre || !modalReleaseDate || !modalPrice) {
    return;
  }

  modalTitle.textContent = game.title;
  modalEdition.textContent = game.edition;
  modalDescription.textContent = game.description;
  modalPlatform.textContent = game.platform;
  modalGenre.textContent = game.genre;
  modalReleaseDate.textContent = game.releaseDate;
  modalPrice.textContent = game.finalPrice;

  modalImage.className = 'modal-img ' + game.imageClass;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function initModalEvents() {
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  generateCarousel();
  initModalEvents();
});
