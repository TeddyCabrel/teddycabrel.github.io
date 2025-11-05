// js/i18n.js
const TRANSLATIONS = {
    en: {
      "title": "TEDDY CABREL EKEU MBOUATCHI",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.project": "Project",
      "nav.contact": "Contact Me",
      "loading.label": "Loading...",
      "radio.summer2025": "Summer 2025",
      "radio.winter2025": "Winter 2025",
      "radio.autumn2024": "Autumn 2024",
      "radio.winter2024": "Winter 2024",
      "footer.designed": "Designed and Developed by Teddy Ekeu",
      "footer.copy": "Copyright © 2024 Teddy Ekeu. All rights reserved.",
      "name": "TEDDY CABREL",
      "student-line": "Student in software engineering at ÉTS",
      "start": "Start",
      "about.quote1": "\"I am a backend and frontend web developer specialized in creating interactive and intuitive experiences.\"",
      "about.intro": "\"Hi, my name is Teddy Cabrel<br/>Ekeu Mbouatchi.\"",
      "tabs.webdev": "Web Development",
      "tabs.languages": "Programming Language",
      "tabs.tools": "Frameworks & Tools",
      "cards.webdevTitle": "Web development",
      "card.javascript": "JAVASCRIPT",
      "card.html": "HTML",
      "card.css": "CSS",
      "cards.progTitle": "Programming Language",
      "cards.toolsTitle": "Framework & Tool",
      "description.project1":"Website Displaying Bread for Sale",
      "description.project2":"Using Webflow to design a responsive and attractive user interface.",
      "description.project3":"Creation of a web application allowing users to donate to various organizations based on their specific interests.",
      "description.project4":"It is an interconnected application system designed to facilitate student life and the student/teacher relationship.",
      "description.project5":"Photo gallery website",
      "description.project6":"Website Showcasing a Store Grillz Collection"
    },
  
    fr: {
      "title": "TEDDY CABREL EKEU MBOUATCHI",
      "nav.about": "À propos",
      "nav.skills": "Compétences",
      "nav.project": "Projets",
      "nav.contact": "Contactez-moi",
      "loading.label": "Chargement...",
      "radio.summer2025": "Été 2025",
      "radio.winter2025": "Hiver 2025",
      "radio.autumn2024": "Automne 2024",
      "radio.winter2024": "Hiver 2024",
      "footer.designed": "Conçu et développé par Teddy Ekeu",
      "footer.copy": "Copyright © 2024 Teddy Ekeu. Tous droits réservés.",
      "name": "TEDDY CABREL",
      "student-line": "Étudiant en génie logiciel à l’ÉTS",
      "start": "Démarrer",
      "about.quote1": "\"Je suis un développeur web back-end et front-end spécialisé dans la création d'expériences interactives et intuitives.\"",
      "about.intro": "\"Bonjour, je m'appelle Teddy Cabrel<br/>Ekeu Mbouatchi.\"",
      "tabs.webdev": "Développement Web",
      "tabs.languages": "Langages de programmation",
      "tabs.tools": "Frameworks & Outils",
      "cards.webdevTitle": "Développement web",
      "card.javascript": "JAVASCRIPT",
      "card.html": "HTML",
      "card.css": "CSS",
      "cards.progTitle": "Langages de programmation",
      "cards.toolsTitle": "Framework & Outils",
      "description.project1":"Site affichant du pain à vendre",
      "description.project2":"Utilisation de Webflow pour concevoir une interface utilisateur responsive et attractive.",
      "description.project3":"Création d'une application web permettant aux utilisateurs de faire des dons à diverses organisations selon leurs intérêts.",
      "description.project4":"Un système d'applications interconnectées pour faciliter la vie étudiante et la relation étudiant/enseignant.",
      "description.project5":"Site galerie photo",
      "description.project6":"Site présentant une collection de Grillz"
      
  
    }
  };
  

  function setHtmlLang(lang) {
    const html = document.getElementById('htmlRoot') || document.documentElement;
    html.lang = (lang === 'fr') ? 'fr' : 'en';
  }
  
  // apply translations to elements with data-i18n
  function applySimpleTranslations(lang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = dict[key];
      if (val === undefined) return;

      const htmlAccepting = el.dataset && el.dataset.html !== undefined;
      if (/<\/?[a-z][\s\S]*>/i.test(val) || htmlAccepting) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });
  }

  
  // master apply
  export function applyTranslations(lang) {
    setHtmlLang(lang);
    applySimpleTranslations(lang);
    // update buttons aria-pressed
    document.getElementById('btn-en').setAttribute('aria-pressed', (lang === 'en').toString());
    document.getElementById('btn-fr').setAttribute('aria-pressed', (lang === 'fr').toString());
    // persist
    localStorage.setItem('site-lang', lang);
  }
  
  // initialization: read saved or navigator language
  function initI18n() {
    const saved = localStorage.getItem('site-lang');
    let lang = saved || (navigator.language && navigator.language.startsWith('fr') ? 'fr' : 'en');
    applyTranslations(lang);
  
    // hook buttons
    document.getElementById('btn-en').addEventListener('click', () => applyTranslations('en'));
    document.getElementById('btn-fr').addEventListener('click', () => applyTranslations('fr'));
  }
  
  // run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
  } else {
    initI18n();
  }
  