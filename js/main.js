/**
 * Beatrice Hair Salon - Main JavaScript
 * 100% Vanilla JS, autonomous and independent.
 */

// --- Translation Dictionary (Source Data from Original Site) ---
const translations = {
  it: {
    nav: {
      results: "Risultati",
      services: "Servizi",
      salon: "Il salone",
      contact: "Contatti"
    },
    hero: {
      eyebrow: "Hair artistry · Gardone Val Trompia",
      line1: "L'eccellenza",
      line2: "nei tuoi capelli",
      tags: [
        ["💕", "L'amore nel curare e trattare il tuo capello"],
        ["🎨", "Specializzati nella colorazione"],
        ["💇🏼‍♀️", "Donna"],
        ["💇🏻‍♂️", "Uomo"]
      ],
      copy: "Colore, luce e movimento creati su misura. Un salone dove tecnica, ascolto e creatività trasformano il tuo stile con eleganza.",
      book: "Prenota ora",
      discover: "Scopri i risultati",
      scroll: "Esplora"
    },
    gallery: {
      kicker: "Il nostro lavoro",
      title: "Risultati che parlano",
      copy: "Ogni nuance nasce dall'ascolto, dalla tecnica e da una visione precisa: valorizzare la tua bellezza, senza compromessi.",
      items: [
        "Balayage Blonde",
        "Biondo Luminoso",
        "Copper Glow",
        "Berry Color",
        "Glossy Brunette",
        "Soft Highlights",
        "Golden Waves",
        "Modern Fade",
        "Insight Ritual",
        "Anti-Frizz Care",
        "Riflessi Biondi",
        "Il Salone",
        "Borgundy profondo",
        "Biondo Cool"
      ]
    },
    services: {
      kicker: "Servizi",
      title: "Il menu atelier",
      copy: "Percorsi personalizzati per il colore, la forma e la salute dei tuoi capelli.",
      book: "Prenota",
      items: [
        {
          title: "Colore & Schiariture",
          copy: "Balayage, biondi luminosi, riflessi e colori creativi costruiti sulla tua carnagione e personalità."
        },
        {
          title: "Taglio & Styling",
          copy: "Tagli donna e uomo, pieghe e styling capaci di esprimere chi sei e restare belli ogni giorno."
        },
        {
          title: "Trattamenti",
          copy: "Rituali liscianti, disciplinanti e ricostruttivi per capelli lucidi, morbidi e visibilmente sani."
        },
        {
          title: "Sposa & Occasioni",
          copy: "Acconciature eleganti e personalizzate per accompagnarti nei momenti che contano."
        }
      ]
    },
    story: {
      kicker: "Atmosfera & team",
      title: "Competenza che ti accoglie",
      badge: "Fatto con cura",
      copy: "Da Beatrice Hair Salon ogni appuntamento comincia con l'ascolto. Le titolari uniscono preparazione, intuito e una sincera attenzione alla persona, in un'atmosfera rilassata e piacevole.",
      quote: "Non fai a tempo a spiegare come ti piacerebbe: loro lo hanno già capito.",
      video: [
        "Trattamento per capelli lisci e luminosi",
        "Trasformazione blonde con Wella"
      ]
    },
    reviews: {
      kicker: "Dicono di noi",
      items: [
        {
          quote: "Accoglienza sempre al top. Atmosfera piacevole, molto preparate, intuitive e molto simpatiche.",
          name: "Michela"
        },
        {
          quote: "Ottimo salone, personale molto preparato e gentile.",
          name: "Bruno Bonardi"
        }
      ]
    },
    contact: {
      kicker: "Prenota la tua luce",
      title: "Ti aspettiamo",
      copy: "Chiamaci o scrivici su WhatsApp: ti aiuteremo a scegliere il servizio giusto e il momento migliore.",
      directions: "Indicazioni",
      hours: "Orari",
      schedule: [
        ["Martedì", "08–12 · 13:30–18"],
        ["Mercoledì", "08–12 · 13:30–18"],
        ["Giovedì", "08–12 · 13:30–20"],
        ["Venerdì", "08–18"],
        ["Sabato", "07–16"],
        ["Dom / Lun", "Chiuso"]
      ]
    },
    quick: {
      call: "Chiama",
      book: "Prenota"
    },
    footer: {
      line: "L’arte della luce, creata per te."
    }
  },
  en: {
    nav: {
      results: "Results",
      services: "Services",
      salon: "The salon",
      contact: "Contact"
    },
    hero: {
      eyebrow: "Hair artistry · Gardone Val Trompia",
      line1: "Excellence",
      line2: "in your hair",
      tags: [
        ["💕", "Love in caring for and treating your hair"],
        ["🎨", "Specialists in colour"],
        ["💇🏼‍♀️", "Women"],
        ["💇🏻‍♂️", "Men"]
      ],
      copy: "Colour, light and movement made for you. A salon where technique, listening and creativity transform your style with elegance.",
      book: "Book now",
      discover: "View our work",
      scroll: "Explore"
    },
    gallery: {
      kicker: "Our work",
      title: "Results that speak",
      copy: "Every shade begins with listening, technique and a clear vision: enhancing your beauty without compromise.",
      items: [
        "Balayage Blonde",
        "Luminous Blonde",
        "Copper Glow",
        "Berry Color",
        "Glossy Brunette",
        "Soft Highlights",
        "Golden Waves",
        "Modern Fade",
        "Insight Ritual",
        "Anti-Frizz Care",
        "Blonde Highlights",
        "The Salon",
        "Deep Burgundy",
        "Cool Blonde"
      ]
    },
    services: {
      kicker: "Services",
      title: "The atelier menu",
      copy: "Bespoke journeys for the colour, shape and health of your hair.",
      book: "Book",
      items: [
        {
          title: "Colour & Highlights",
          copy: "Balayage, luminous blondes, reflections and creative colours tailored to your complexion and personality."
        },
        {
          title: "Cut & Styling",
          copy: "Women’s and men’s cuts, blow-dries and styling designed to express who you are and look beautiful every day."
        },
        {
          title: "Treatments",
          copy: "Smoothing, taming and reconstructive rituals for visibly healthy, soft and glossy hair."
        },
        {
          title: "Bridal & Occasions",
          copy: "Elegant, personal hairstyles created for the moments that matter."
        }
      ]
    },
    story: {
      kicker: "Atmosphere & team",
      title: "Expertise that welcomes you",
      badge: "Made with care",
      copy: "At Beatrice Hair Salon, every appointment starts with listening. The owners combine expertise, intuition and genuine care in a relaxed and friendly atmosphere.",
      quote: "Before you finish explaining what you would like, they have already understood.",
      video: [
        "Smooth and luminous hair treatment",
        "Wella blonde transformation"
      ]
    },
    reviews: {
      kicker: "What clients say",
      items: [
        {
          quote: "Always a warm welcome. A lovely atmosphere, highly skilled, intuitive and genuinely friendly.",
          name: "Michela"
        },
        {
          quote: "Excellent salon, very skilled and kind staff.",
          name: "Bruno Bonardi"
        }
      ]
    },
    contact: {
      kicker: "Book your light",
      title: "Come and see us",
      copy: "Call or message us on WhatsApp: we’ll help you choose the right service and the best time.",
      directions: "Directions",
      hours: "Opening hours",
      schedule: [
        ["Tuesday", "08–12 · 13:30–18"],
        ["Wednesday", "08–12 · 13:30–18"],
        ["Thursday", "08–12 · 13:30–20"],
        ["Friday", "08–18"],
        ["Saturday", "07–16"],
        ["Sun / Mon", "Closed"]
      ]
    },
    quick: {
      call: "Call",
      book: "Book"
    },
    footer: {
      line: "The art of light, created for you."
    }
  }
};

// --- State Management ---
let currentLang = localStorage.getItem("beatrice-lang") || "it";
let isDark = localStorage.getItem("beatrice-theme") === "dark";

// --- DOM Element Selectors ---
const langToggleBtn = document.getElementById("lang-toggle");
const themeToggleBtn = document.getElementById("theme-toggle");
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileNavDrawer = document.getElementById("mobile-nav-drawer");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
const heroVideo = document.getElementById("hero-video");

// SVG Icons for Theme Toggle & Menu Toggle
const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;

const menuIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`;
const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;

// --- Initialize Video Playback Speed ---
if (heroVideo) {
  heroVideo.playbackRate = 1.5;
}

// --- Theme Management ---
function applyTheme(dark) {
  isDark = dark;
  if (dark) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("beatrice-theme", "dark");
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = sunIcon;
      themeToggleBtn.setAttribute("aria-label", "Light mode");
    }
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("beatrice-theme", "light");
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = moonIcon;
      themeToggleBtn.setAttribute("aria-label", "Dark mode");
    }
  }
}

// --- Language Management ---
function updateTranslations(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem("beatrice-lang", lang);

  const t = translations[lang];

  // Update button label
  if (langToggleBtn) {
    langToggleBtn.textContent = lang === "it" ? "IT / EN" : "EN / IT";
  }

  // Header Nav Links
  document.querySelectorAll("[data-nav='results']").forEach(el => el.textContent = t.nav.results);
  document.querySelectorAll("[data-nav='services']").forEach(el => el.textContent = t.nav.services);
  document.querySelectorAll("[data-nav='salon']").forEach(el => el.textContent = t.nav.salon);
  document.querySelectorAll("[data-nav='contact']").forEach(el => el.textContent = t.nav.contact);

  // Hero Section
  const heroLine1 = document.getElementById("hero-line1");
  const heroLine2 = document.getElementById("hero-line2");
  const heroCopy = document.getElementById("hero-copy");
  const heroBookBtn = document.getElementById("hero-book-btn");
  const heroDiscoverBtn = document.getElementById("hero-discover-btn");
  const heroScrollText = document.getElementById("hero-scroll-text");
  const heroTagsList = document.getElementById("hero-tags-list");

  if (heroLine1) heroLine1.textContent = t.hero.line1;
  if (heroLine2) heroLine2.textContent = t.hero.line2;
  if (heroCopy) heroCopy.textContent = t.hero.copy;
  if (heroBookBtn) heroBookBtn.textContent = t.hero.book;
  if (heroDiscoverBtn) heroDiscoverBtn.textContent = t.hero.discover;
  if (heroScrollText) heroScrollText.textContent = t.hero.scroll;

  if (heroTagsList) {
    heroTagsList.innerHTML = t.hero.tags
      .map(([icon, text]) => `<li><span aria-hidden="true">${icon}</span> ${text}</li>`)
      .join("");
  }

  // Gallery Section
  const galleryKicker = document.getElementById("gallery-kicker");
  const galleryTitle = document.getElementById("gallery-title");
  const galleryCopy = document.getElementById("gallery-copy");
  if (galleryKicker) galleryKicker.textContent = `01 — ${t.gallery.kicker}`;
  if (galleryTitle) galleryTitle.textContent = t.gallery.title;
  if (galleryCopy) galleryCopy.textContent = t.gallery.copy;

  // Gallery Captions
  document.querySelectorAll(".gallery-caption").forEach((cap, idx) => {
    const itemText = t.gallery.items[idx] || "";
    const num = String(idx + 1).padStart(2, "0");
    cap.textContent = `${num} · ${itemText}`;
  });

  // Services Section
  const servicesKicker = document.getElementById("services-kicker");
  const servicesTitle = document.getElementById("services-title");
  const servicesCopy = document.getElementById("services-copy");
  if (servicesKicker) servicesKicker.textContent = `02 — ${t.services.kicker}`;
  if (servicesTitle) servicesTitle.textContent = t.services.title;
  if (servicesCopy) servicesCopy.textContent = t.services.copy;

  t.services.items.forEach((item, idx) => {
    const titleEl = document.getElementById(`service-title-${idx}`);
    const copyEl = document.getElementById(`service-copy-${idx}`);
    const linkEl = document.getElementById(`service-link-${idx}`);
    if (titleEl) titleEl.textContent = item.title;
    if (copyEl) copyEl.textContent = item.copy;
    if (linkEl) linkEl.setAttribute("aria-label", `${t.services.book} ${item.title}`);
  });

  // Salon Section
  const storyKicker = document.getElementById("story-kicker");
  const storyTitle = document.getElementById("story-title");
  const storyBadge = document.getElementById("story-badge");
  const storyCopy = document.getElementById("story-copy");
  const storyQuote = document.getElementById("story-quote");
  if (storyKicker) storyKicker.textContent = `03 — ${t.story.kicker}`;
  if (storyTitle) storyTitle.textContent = t.story.title;
  if (storyBadge) storyBadge.textContent = t.story.badge;
  if (storyCopy) storyCopy.textContent = t.story.copy;
  if (storyQuote) storyQuote.textContent = t.story.quote;

  const video1 = document.getElementById("story-video-1");
  const video2 = document.getElementById("story-video-2");
  if (video1) video1.setAttribute("aria-label", t.story.video[0]);
  if (video2) video2.setAttribute("aria-label", t.story.video[1]);

  // Reviews Section
  const reviewsKicker = document.getElementById("reviews-kicker");
  if (reviewsKicker) reviewsKicker.textContent = `04 — ${t.reviews.kicker}`;
  t.reviews.items.forEach((item, idx) => {
    const quoteEl = document.getElementById(`review-quote-${idx}`);
    const nameEl = document.getElementById(`review-name-${idx}`);
    if (quoteEl) quoteEl.textContent = `“${item.quote}”`;
    if (nameEl) nameEl.textContent = `— ${item.name}, Google`;
  });

  // Contact Section
  const contactKicker = document.getElementById("contact-kicker");
  const contactTitle = document.getElementById("contact-title");
  const contactCopy = document.getElementById("contact-copy");
  const contactDirectionsBtn = document.getElementById("contact-directions-btn");
  const contactHoursTitle = document.getElementById("contact-hours-title");
  const contactScheduleList = document.getElementById("contact-schedule-list");

  if (contactKicker) contactKicker.textContent = `05 — ${t.contact.kicker}`;
  if (contactTitle) contactTitle.textContent = t.contact.title;
  if (contactCopy) contactCopy.textContent = t.contact.copy;
  if (contactDirectionsBtn) {
    contactDirectionsBtn.lastChild.textContent = ` ${t.contact.directions}`;
  }
  if (contactHoursTitle) contactHoursTitle.textContent = t.contact.hours;

  if (contactScheduleList) {
    contactScheduleList.innerHTML = t.contact.schedule
      .map(([day, hours]) => `
        <div class="schedule-row">
          <span>${day}</span>
          <span class="schedule-time">${hours}</span>
        </div>
      `).join("");
  }

  // Quick Bar
  const quickCallText = document.getElementById("quick-call-text");
  const quickBookText = document.getElementById("quick-book-text");
  if (quickCallText) quickCallText.textContent = t.quick.call;
  if (quickBookText) quickBookText.textContent = t.quick.book;

  // Footer
  const footerTagline = document.getElementById("footer-tagline");
  if (footerTagline) footerTagline.textContent = t.footer.line;
}

// --- Event Listeners ---
if (langToggleBtn) {
  langToggleBtn.addEventListener("click", () => {
    updateTranslations(currentLang === "it" ? "en" : "it");
  });
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    applyTheme(!isDark);
  });
}

if (mobileMenuBtn && mobileNavDrawer) {
  mobileMenuBtn.addEventListener("click", () => {
    const isOpen = mobileNavDrawer.classList.toggle("open");
    mobileMenuBtn.innerHTML = isOpen ? closeIcon : menuIcon;
    mobileMenuBtn.setAttribute("aria-label", isOpen ? "Close menu" : "Menu");
  });

  mobileNavLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileNavDrawer.classList.remove("open");
      mobileMenuBtn.innerHTML = menuIcon;
      mobileMenuBtn.setAttribute("aria-label", "Menu");
    });
  });
}

// --- Initial Setup on Page Load ---
document.addEventListener("DOMContentLoaded", () => {
  applyTheme(isDark);
  updateTranslations(currentLang);
});
