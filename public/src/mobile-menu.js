/**
 * Assurances Echkili - Module Menu Tactile Mobile 100% Opérationnel
 * Gestion complète du tiroir de navigation, accordéons, backdrop et support multilingue (FR, AR, EN)
 */
(function () {
  'use strict';

  const LABELS = {
    fr: {
      menu: 'MENU',
      close: 'FERMER',
      call_agency: 'Urgence Sinistre : 05 25 36 30 61',
      whatsapp: 'WhatsApp Direct (06 67 76 21 24)',
      quote: 'Demander un Devis Express',
      agency_title: 'Assurances Echkili Marrakech',
      agency_address: 'Imm Erraha N°8, Av. Guemassa, M\'hamid'
    },
    ar: {
      menu: 'القائمة',
      close: 'إغلاق',
      call_agency: 'طوارئ الحوادث: 05 25 36 30 61',
      whatsapp: 'واتساب مباشر (06 67 76 21 24)',
      quote: 'طلب مقايسة سريعة (Devis)',
      agency_title: 'تأمينات شكيلـي مراكش',
      agency_address: 'عمارة الراحة رقم 8، شارع كَمَاسة، المحاميد'
    },
    en: {
      menu: 'MENU',
      close: 'CLOSE',
      call_agency: 'Claim Emergency: 05 25 36 30 61',
      whatsapp: 'Direct WhatsApp (06 67 76 21 24)',
      quote: 'Request Instant Quote',
      agency_title: 'Assurances Echkili Marrakech',
      agency_address: 'Imm Erraha No. 8, Av. Guemassa, M\'hamid'
    }
  };

  function getCurrentLang() {
    try {
      const htmlLang = document.documentElement.getAttribute('lang');
      if (htmlLang && (htmlLang === 'fr' || htmlLang === 'ar' || htmlLang === 'en')) {
        return htmlLang;
      }
      const stored = localStorage.getItem('echkili_lang');
      if (stored && (stored === 'fr' || stored === 'ar' || stored === 'en')) {
        return stored;
      }
    } catch (e) {}
    return 'fr';
  }

  function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenuList = document.getElementById('navMenuList') || document.querySelector('.nav-menu-list');

    if (!menuToggle || !navMenuList) {
      return;
    }

    // 1. Create or get backdrop element
    let backdrop = document.getElementById('mobileNavBackdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.id = 'mobileNavBackdrop';
      backdrop.className = 'mobile-nav-backdrop';
      backdrop.setAttribute('aria-hidden', 'true');
      document.body.appendChild(backdrop);
    }

    // 2. Ensure Menu Toggle Button has standard inner HTML with dual icons
    menuToggle.innerHTML = `
      <svg class="toggle-icon-hamburger" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
      <svg class="toggle-icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="display:none;">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
      <span class="menu-label-text">MENU</span>
    `;

    // 3. Inject quick contact buttons at the bottom of the drawer if missing
    let drawerFooter = navMenuList.querySelector('.mobile-menu-footer');
    if (!drawerFooter) {
      drawerFooter = document.createElement('li');
      drawerFooter.className = 'nav-menu-item mobile-menu-footer';
      drawerFooter.innerHTML = `
        <div class="mobile-drawer-contact-wrap">
          <div class="drawer-contact-title" id="drawerAgencyTitle">Assurances Echkili Marrakech</div>
          <div class="drawer-contact-sub" id="drawerAgencyAddress">Imm Erraha N°8, Av. Guemassa, M'hamid</div>
          <div class="drawer-contact-actions">
            <a href="https://wa.me/212667762124?text=Bonjour%20Assurances%20Echkili" target="_blank" rel="noopener noreferrer" class="mobile-menu-contact-pill pill-wa" id="drawerWaBtn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.79 14.07c-.24.68-1.2 1.26-1.74 1.31-.49.05-1.12.08-3.62-.95-3.19-1.32-5.24-4.57-5.4-4.78-.16-.21-1.3-1.73-1.3-3.3 0-1.57.82-2.34 1.11-2.66.29-.32.64-.4.85-.4.21 0 .43 0 .61.01.2.01.46-.07.72.55.26.63.9 2.2.98 2.36.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.47.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.32.16.51.14.7-.08.2-.21.84-.98 1.07-1.32.22-.34.45-.29.75-.18.31.11 1.95.92 2.29 1.09.34.17.56.25.64.39.09.14.09.81-.15 1.49z"/></svg>
              <span id="drawerWaText">WhatsApp Direct (06 67 76 21 24)</span>
            </a>
            <a href="tel:+212525363061" class="mobile-menu-contact-pill pill-urgence" id="drawerCallBtn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span id="drawerCallText">Urgence Sinistre : 05 25 36 30 61</span>
            </a>
            <a href="index.html#contact" class="mobile-menu-contact-pill pill-quote" id="drawerQuoteBtn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              <span id="drawerQuoteText">Demander un Devis Express</span>
            </a>
          </div>
        </div>
      `;
      navMenuList.appendChild(drawerFooter);
    }

    const labelSpan = menuToggle.querySelector('.menu-label-text');
    const iconBurger = menuToggle.querySelector('.toggle-icon-hamburger');
    const iconClose = menuToggle.querySelector('.toggle-icon-close');

    function updateMenuLabels(isOpen) {
      const lang = getCurrentLang();
      const dict = LABELS[lang] || LABELS.fr;

      if (labelSpan) {
        labelSpan.textContent = isOpen ? dict.close : dict.menu;
      }
      if (iconBurger && iconClose) {
        if (isOpen) {
          iconBurger.style.display = 'none';
          iconClose.style.display = 'inline-block';
        } else {
          iconBurger.style.display = 'inline-block';
          iconClose.style.display = 'none';
        }
      }

      // Update drawer footer text
      const drawerAgencyTitle = document.getElementById('drawerAgencyTitle');
      if (drawerAgencyTitle) drawerAgencyTitle.textContent = dict.agency_title;

      const drawerAgencyAddress = document.getElementById('drawerAgencyAddress');
      if (drawerAgencyAddress) drawerAgencyAddress.textContent = dict.agency_address;

      const drawerWaText = document.getElementById('drawerWaText');
      if (drawerWaText) drawerWaText.textContent = dict.whatsapp;

      const drawerCallText = document.getElementById('drawerCallText');
      if (drawerCallText) drawerCallText.textContent = dict.call_agency;

      const drawerQuoteText = document.getElementById('drawerQuoteText');
      if (drawerQuoteText) drawerQuoteText.textContent = dict.quote;
    }

    function openMenu() {
      navMenuList.classList.add('open');
      menuToggle.classList.add('menu-active');
      menuToggle.setAttribute('aria-expanded', 'true');
      backdrop.classList.add('active');
      document.body.classList.add('mobile-menu-active');
      updateMenuLabels(true);
    }

    function closeMenu() {
      navMenuList.classList.remove('open');
      menuToggle.classList.remove('menu-active');
      menuToggle.setAttribute('aria-expanded', 'false');
      backdrop.classList.remove('active');
      document.body.classList.remove('mobile-menu-active');
      updateMenuLabels(false);

      // Close open accordion submenus
      navMenuList.querySelectorAll('.dropdown-item-container').forEach(c => {
        c.classList.remove('mobile-expanded');
        c.classList.remove('dropdown-active');
        const link = c.querySelector('.nav-menu-link');
        if (link) link.setAttribute('aria-expanded', 'false');
      });
    }

    function toggleMenu() {
      if (navMenuList.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    }

    // Toggle button click listener
    menuToggle.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      toggleMenu();
    });

    // Close when tapping backdrop
    backdrop.addEventListener('click', function (e) {
      e.preventDefault();
      closeMenu();
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navMenuList.classList.contains('open')) {
        closeMenu();
      }
    });

    // Close if screen resized to desktop width (> 860px)
    window.addEventListener('resize', function () {
      if (window.innerWidth > 860 && navMenuList.classList.contains('open')) {
        closeMenu();
      }
    }, { passive: true });

    // Handle accordion submenus inside the mobile drawer
    const dropdownContainers = navMenuList.querySelectorAll('.dropdown-item-container');
    dropdownContainers.forEach(container => {
      const navLink = container.querySelector('.nav-menu-link');
      if (!navLink) return;

      navLink.addEventListener('click', function (e) {
        if (window.innerWidth <= 860 || ('ontouchstart' in window)) {
          e.preventDefault();
          e.stopPropagation();

          const isAlreadyExpanded = container.classList.contains('mobile-expanded') || container.classList.contains('dropdown-active');

          // Close other submenus to keep drawer clear
          dropdownContainers.forEach(other => {
            if (other !== container) {
              other.classList.remove('mobile-expanded');
              other.classList.remove('dropdown-active');
              const oLink = other.querySelector('.nav-menu-link');
              if (oLink) oLink.setAttribute('aria-expanded', 'false');
            }
          });

          if (isAlreadyExpanded) {
            container.classList.remove('mobile-expanded');
            container.classList.remove('dropdown-active');
            navLink.setAttribute('aria-expanded', 'false');
          } else {
            container.classList.add('mobile-expanded');
            container.classList.add('dropdown-active');
            navLink.setAttribute('aria-expanded', 'true');
          }
        }
      });
    });

    // Close menu when clicking on regular terminal links (inside or outside accordions)
    navMenuList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function (e) {
        const isDropdownParent = link.parentElement && link.parentElement.classList.contains('dropdown-item-container');
        if (isDropdownParent && window.innerWidth <= 860) {
          // Accordion parent toggle is handled above
          return;
        }
        // Terminal links: close the mobile drawer so user sees destination
        setTimeout(closeMenu, 150);
      });
    });

    // Initial label sync
    updateMenuLabels(false);

    // Sync when language is changed
    window.addEventListener('echkiliLanguageChanged', function () {
      const isOpen = navMenuList.classList.contains('open');
      updateMenuLabels(isOpen);
    });

    // Observe lang attribute change on <html>
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.type === 'attributes' && (mutation.attributeName === 'lang' || mutation.attributeName === 'dir')) {
          const isOpen = navMenuList.classList.contains('open');
          updateMenuLabels(isOpen);
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang', 'dir'] });

    // Expose control globally
    window.EchkiliMobileMenu = {
      open: openMenu,
      close: closeMenu,
      toggle: toggleMenu,
      updateLabels: updateMenuLabels
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileMenu);
  } else {
    initMobileMenu();
  }
})();
