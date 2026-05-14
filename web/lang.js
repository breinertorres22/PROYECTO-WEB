const translations = {
  ca: {
    navHome: 'Inici',
    navGames: 'Jocs',
    navNews: 'Notícies',
    navFeatures: 'Característiques',
    navAbout: 'Sobre Nosaltres',
    navContact: 'Contacte',
    heroTitle: 'Descobreix el Millor dels Videojocs',
    heroSubtitle: 'Les últimes novetats, ofertes exclusives i jocs premium per a totes les plataformes',
    heroButton: 'Explorar Jocs',
    searchPlaceholder: 'Buscar jocs...',
    specialOffersTitle: 'Ofertes Especials de Nadal',
    specialOffersSubtitle: 'Descobreix els millors jocs amb descomptes exclusius',
    viewAllBtn: 'Veure Tots els Jocs',
    feature1Title: 'Multiplataforma',
    feature1Text: 'Juga als teus jocs preferits en PC, PlayStation, Xbox i molt més',
    feature2Title: 'Millors Preus',
    feature2Text: 'Ofertes exclusives i descomptes que no trobaràs enlloc més',
    feature3Title: 'Compres Segures',
    feature3Text: 'Protecció total en totes les teves compres i descàrregues',
    footerSection1Title: 'Enllaços Ràpids',
    footerSection2Title: 'Categories',
    footerSection3Title: 'Suport',
    footerLink1: 'Jocs en Oferta',
    footerLink2: 'Noves Llançaments',
    footerLink3: 'Jocs Gratis',
    footerLink4: 'Biblioteca',
    footerLink5: 'Centre d\'Ajuda',
    footerLink6: 'Contacte',
    footerLink7: 'Política de Privacitat',
    footerLink8: 'Termes i Condicions',
    footerLink9: 'Sobre Nosaltres',
    footerBadge1: '🔒 Compres Segures',
    footerBadge2: '🚚 Enviament Ràpid',
    footerBadge3: '💳 Tots els Pagaments',
    modalDescriptionTitle: 'Descripció',
    modalSpecificationsTitle: 'Especificacions',
    modalBuyButton: 'Comprar Ara'
  },
  es: {
    navHome: 'Inicio',
    navGames: 'Juegos',
    navNews: 'Noticias',
    navFeatures: 'Características',
    navAbout: 'Sobre Nosotros',
    navContact: 'Contacto',
    heroTitle: 'Descubre lo Mejor de los Videojuegos',
    heroSubtitle: 'Las últimas novedades, ofertas exclusivas y juegos premium para todas las plataformas',
    heroButton: 'Explorar Juegos',
    searchPlaceholder: 'Buscar juegos...',
    specialOffersTitle: 'Ofertas Especiales de Navidad',
    specialOffersSubtitle: 'Descubre los mejores juegos con descuentos exclusivos',
    viewAllBtn: 'Ver Todos los Juegos',
    feature1Title: 'Multiplataforma',
    feature1Text: 'Juega tus juegos favoritos en PC, PlayStation, Xbox y más',
    feature2Title: 'Mejores Precios',
    feature2Text: 'Ofertas exclusivas y descuentos que no encontrarás en otro lugar',
    feature3Title: 'Compras Seguras',
    feature3Text: 'Protección total en todas tus compras y descargas',
    footerSection1Title: 'Enlaces Rápidos',
    footerSection2Title: 'Categorías',
    footerSection3Title: 'Soporte',
    footerLink1: 'Juegos en Oferta',
    footerLink2: 'Nuevos Lanzamientos',
    footerLink3: 'Juegos Gratis',
    footerLink4: 'Biblioteca',
    footerLink5: 'Centro de Ayuda',
    footerLink6: 'Contacto',
    footerLink7: 'Política de Privacidad',
    footerLink8: 'Términos y Condiciones',
    footerLink9: 'Sobre Nosotros',
    footerBadge1: '🔒 Compras Seguras',
    footerBadge2: '🚚 Envío Rápido',
    footerBadge3: '💳 Todos los Pagos',
    modalDescriptionTitle: 'Descripción',
    modalSpecificationsTitle: 'Especificaciones',
    modalBuyButton: 'Comprar Ahora'
  },
  en: {
    navHome: 'Home',
    navGames: 'Games',
    navNews: 'News',
    navFeatures: 'Features',
    navAbout: 'About',
    navContact: 'Contact',
    heroTitle: 'Discover the Best Video Games',
    heroSubtitle: 'The latest releases, exclusive deals, and premium games for every platform',
    heroButton: 'Explore Games',
    searchPlaceholder: 'Search games...',
    specialOffersTitle: 'Holiday Special Offers',
    specialOffersSubtitle: 'Find the best games with exclusive discounts',
    viewAllBtn: 'View All Games',
    feature1Title: 'Multiplatform',
    feature1Text: 'Play your favorite games on PC, PlayStation, Xbox and more',
    feature2Title: 'Best Prices',
    feature2Text: 'Exclusive deals and discounts you won\'t find anywhere else',
    feature3Title: 'Secure Purchases',
    feature3Text: 'Full protection on all your purchases and downloads',
    footerSection1Title: 'Quick Links',
    footerSection2Title: 'Categories',
    footerSection3Title: 'Support',
    footerLink1: 'Deals',
    footerLink2: 'New Releases',
    footerLink3: 'Free Games',
    footerLink4: 'Library',
    footerLink5: 'Help Center',
    footerLink6: 'Contact',
    footerLink7: 'Privacy Policy',
    footerLink8: 'Terms & Conditions',
    footerLink9: 'About Us',
    footerBadge1: '🔒 Secure Purchases',
    footerBadge2: '🚚 Fast Delivery',
    footerBadge3: '💳 All Payments',
    modalDescriptionTitle: 'Description',
    modalSpecificationsTitle: 'Specifications',
    modalBuyButton: 'Buy Now'
  }
};

const placeholderKeys = ['searchPlaceholder'];

function translatePage(lang) {
  const elements = document.querySelectorAll('[data-key]');
  elements.forEach((element) => {
    const key = element.dataset.key;
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  const placeholders = document.querySelectorAll('[data-placeholder-key]');
  placeholders.forEach((input) => {
    const key = input.dataset.placeholderKey;
    if (translations[lang] && translations[lang][key]) {
      input.placeholder = translations[lang][key];
    }
  });

  document.documentElement.lang = lang;
  localStorage.setItem('selectedLanguage', lang);
}

function initLanguage() {
  const storedLang = localStorage.getItem('selectedLanguage');
  const defaultLang = storedLang || document.documentElement.lang || 'en';
  const languageSelect = document.getElementById('languageSelect');

  if (languageSelect) {
    languageSelect.value = defaultLang;
    languageSelect.addEventListener('change', (event) => {
      translatePage(event.target.value);
    });
  }

  translatePage(defaultLang);
}

document.addEventListener('DOMContentLoaded', initLanguage);
