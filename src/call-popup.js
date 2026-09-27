/**
 * Assurances Echkili Marrakech - Module Pop-up "Besoin ? Appelez-nous"
 * Widget design interactif & formulaire de rappel express
 * Réception directe des demandes sur echkili.assurances@outlook.com
 * Support trilingue complet : Français, العربية (RTL), English
 */

(function () {
  'use strict';

  // Dictionnaire multilingue pour la pop-up et le bouton flottant
  const I18N = {
    fr: {
      trigger_text: "Besoin d'aide ? Appelez-nous",
      trigger_status: "En ligne",
      modal_badge: "Assistance Immédiate Agence AXA",
      modal_title: "Besoin d'un conseil ? Appelez-nous !",
      modal_subtitle: "Nos conseillers à Marrakech répondent à toutes vos questions en direct et vous accompagnent pour choisir la formule d'assurance au meilleur tarif.",
      call_fixed_title: "Ligne Fixe de l'Agence",
      call_fixed_num: "05 25 36 30 61",
      call_fixed_desc: "Accueil & Devis immédiat",
      call_fixed_btn: "Appeler le Bureau",
      call_mobile_title: "Mobile & Urgences 24/7",
      call_mobile_num: "06 67 76 21 24",
      call_mobile_desc: "Conseiller d'astreinte & Sinistres",
      call_mobile_btn: "Appeler le Mobile",
      wa_title: "WhatsApp Express",
      wa_num: "06 67 76 21 24",
      wa_desc: "Échange de devis & documents",
      wa_btn: "Discuter sur WhatsApp",
      form_title: "Ou demandez un rappel gratuit sous 5 minutes :",
      form_name_placeholder: "Votre nom complet *",
      form_phone_placeholder: "Votre numéro de téléphone *",
      form_type_default: "Choisir votre besoin d'assurance...",
      form_type_auto: "Assurance Automobile",
      form_type_habitation: "Assurance Habitation",
      form_type_sante: "Assurance Santé & Complémentaire",
      form_type_moto: "Assurance Moto / Deux-roues",
      form_type_pro: "Multirisque Professionnelle / Commerce",
      form_type_entreprise: "Flotte Auto & RC Entreprise",
      form_type_autre: "Autre besoin / Conseil général",
      form_submit_btn: "Être rappelé gratuitement",
      form_submitting: "Transmission de votre demande...",
      form_success_title: "Demande reçue avec succès !",
      form_success_msg: "Merci {name} ! Votre conseiller Assurances Echkili vous rappelle au {phone} dans quelques instants.",
      footer_address: "Imm Erraha N°8, Avenue Guemassa, M'hamid, Marrakech",
      footer_hours: "Lun - Ven : 08h30 - 18h30 | Sam : 09h00 - 12h30",
      dismiss_btn: "Fermer cette fenêtre",
      call_advisor_badge: "Conseiller dédié Marrakech"
    },
    ar: {
      trigger_text: "تحتاج مساعدة؟ اتصل بنا",
      trigger_status: "متصل الآن",
      modal_badge: "مساعدة واستشارة فورية من أكسا",
      modal_title: "هل تحتاج إلى استشارة؟ اتصل بنا الآن!",
      modal_subtitle: "مستشارونا بوكالة تأمينات شكيلـي بمراكش رهن إشارتكم للإجابة عن تساؤلاتكم ومساعدتكم في اختيار أفضل تأمين بأنسب سعر.",
      call_fixed_title: "الهاتف الثابت للوكالة",
      call_fixed_num: "05 25 36 30 61",
      call_fixed_desc: "استقبال ودراسة فورية للملفات",
      call_fixed_btn: "اتصل بالهاتف الثابت",
      call_mobile_title: "الهاتف النقال والطوارئ 24/7",
      call_mobile_num: "06 67 76 21 24",
      call_mobile_desc: "مستشار المداومة وحوادث السير",
      call_mobile_btn: "اتصل بالمحمول",
      wa_title: "واتساب السريع",
      wa_num: "06 67 76 21 24",
      wa_desc: "إرسال عروض الأسعار والوثائق",
      wa_btn: "محادثة عبر واتساب",
      form_title: "أو اطلب معاودة الاتصال بك مجاناً خلال دقائق :",
      form_name_placeholder: "الاسم الكامل *",
      form_phone_placeholder: "رقم الهاتف *",
      form_type_default: "اختر نوع التأمين المطلوب...",
      form_type_auto: "تأمين السيارات",
      form_type_habitation: "تأمين السكن",
      form_type_sante: "التأمين الصحي والتكميلي",
      form_type_moto: "تأمين الدراجات النارية",
      form_type_pro: "التأمين المهني الشامل",
      form_type_entreprise: "أسطول الشركات والمسؤولية المدنية",
      form_type_autre: "استشارة عامة / تأمين آخر",
      form_submit_btn: "اطلب معاودة الاتصال بي مجاناً",
      form_submitting: "جاري إرسال طلبكم...",
      form_success_title: "تم استلام طلبكم بنجاح!",
      form_success_msg: "شكراً {name}! سيتصل بكم مستشار تأمينات شكيلـي على الرقم {phone} خلال لحظات.",
      footer_address: "عمارة الراحة رقم 8، شارع كَمَاسة، المحاميد، مراكش",
      footer_hours: "الإثنين - الجمعة: 08:30 - 18:30 | السبت: 09:00 - 12:30",
      dismiss_btn: "إغلاق هذه النافذة",
      call_advisor_badge: "مستشار مخصص بمراكش"
    },
    en: {
      trigger_text: "Need help? Call us",
      trigger_status: "Online now",
      modal_badge: "Immediate AXA Support & Advice",
      modal_title: "Need advice? Call us now!",
      modal_subtitle: "Our Marrakech advisors are ready to answer your questions live and guide you toward the best insurance policy at the most competitive price.",
      call_fixed_title: "Agency Landline",
      call_fixed_num: "05 25 36 30 61",
      call_fixed_desc: "Reception & Immediate Quote",
      call_fixed_btn: "Call Landline",
      call_mobile_title: "Mobile & 24/7 Emergencies",
      call_mobile_num: "06 67 76 21 24",
      call_mobile_desc: "On-call Advisor & Claims",
      call_mobile_btn: "Call Mobile",
      wa_title: "Express WhatsApp",
      wa_num: "06 67 76 21 24",
      wa_desc: "Instant quote & document sharing",
      wa_btn: "Chat on WhatsApp",
      form_title: "Or request a free callback within 5 minutes:",
      form_name_placeholder: "Your full name *",
      form_phone_placeholder: "Your phone number *",
      form_type_default: "Select insurance type...",
      form_type_auto: "Car Insurance",
      form_type_habitation: "Home Insurance",
      form_type_sante: "Health & Supplementary",
      form_type_moto: "Motorcycle Insurance",
      form_type_pro: "Business Multi-Risk",
      form_type_entreprise: "Fleet & Liability",
      form_type_autre: "Other insurance / General advice",
      form_submit_btn: "Request Free Callback",
      form_submitting: "Submitting your request...",
      form_success_title: "Request Received Successfully!",
      form_success_msg: "Thank you {name}! Your Assurances Echkili advisor will call you at {phone} very shortly.",
      footer_address: "Imm Erraha No. 8, Avenue Guemassa, M'hamid, Marrakech",
      footer_hours: "Mon - Fri: 08:30 - 18:30 | Sat: 09:00 - 12:30",
      dismiss_btn: "Close window",
      call_advisor_badge: "Dedicated Advisor Marrakech"
    }
  };

  // Helper pour obtenir la langue active
  function getCurrentLang() {
    try {
      if (window.EchkiliI18n && typeof window.EchkiliI18n.getLanguage === 'function') {
        return window.EchkiliI18n.getLanguage() || 'fr';
      }
      return localStorage.getItem('echkili_lang') || 'fr';
    } catch (e) {
      return 'fr';
    }
  }

  // Injection du CSS
  function injectStyles() {
    if (document.getElementById('echkili-call-popup-styles')) return;

    const style = document.createElement('style');
    style.id = 'echkili-call-popup-styles';
    style.textContent = `
      /* --- Floating Call Trigger Badge --- */
      .echkili-call-trigger {
        position: fixed;
        bottom: 92px;
        left: 24px;
        z-index: 998;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        background: linear-gradient(135deg, #002868 0%, #001f58 100%);
        color: #ffffff;
        padding: 10px 18px 10px 14px;
        border-radius: 9999px;
        box-shadow: 0 8px 24px rgba(0, 40, 104, 0.35), 0 2px 8px rgba(0, 0, 0, 0.15);
        border: 1.5px solid rgba(212, 175, 55, 0.45);
        cursor: pointer;
        text-decoration: none;
        font-family: inherit;
        font-size: 0.92rem;
        font-weight: 700;
        letter-spacing: -0.01em;
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        user-select: none;
      }
      .echkili-call-trigger:hover {
        transform: translateY(-3px) scale(1.03);
        box-shadow: 0 12px 30px rgba(0, 40, 104, 0.45), 0 0 20px rgba(212, 175, 55, 0.4);
        background: linear-gradient(135deg, #003380 0%, #002868 100%);
        border-color: #d4af37;
        color: #ffffff;
      }
      .echkili-call-trigger-icon {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        background: #ffffff;
        color: #002868;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        box-shadow: 0 2px 6px rgba(0,0,0,0.15);
        animation: echkiliPhoneRinging 3.5s infinite;
      }
      .echkili-call-trigger-icon svg {
        width: 18px;
        height: 18px;
        fill: currentColor;
      }
      .echkili-call-trigger-text-wrap {
        display: flex;
        flex-direction: column;
        line-height: 1.15;
      }
      .echkili-call-trigger-label {
        font-size: 0.88rem;
        font-weight: 800;
        white-space: nowrap;
      }
      .echkili-call-trigger-status {
        font-size: 0.72rem;
        color: #86efac;
        display: inline-flex;
        align-items: center;
        gap: 5px;
        font-weight: 600;
        margin-top: 2px;
      }
      .echkili-call-trigger-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #22c55e;
        box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.35);
        animation: echkiliPulseDot 1.8s infinite;
      }

      /* RTL pour l'arabe */
      html[dir="rtl"] .echkili-call-trigger {
        left: auto;
        right: 24px;
      }

      @media (max-width: 768px) {
        .echkili-call-trigger {
          bottom: 84px;
          left: 14px;
          padding: 8px 14px 8px 10px;
          font-size: 0.82rem;
        }
        html[dir="rtl"] .echkili-call-trigger {
          left: auto;
          right: 14px;
        }
        .echkili-call-trigger-icon {
          width: 30px;
          height: 30px;
        }
        .echkili-call-trigger-icon svg {
          width: 16px;
          height: 16px;
        }
        .echkili-call-trigger-label {
          font-size: 0.8rem;
        }
      }

      /* --- Modal Backdrop & Container --- */
      .echkili-call-modal-overlay {
        position: fixed;
        inset: 0;
        z-index: 10000;
        background: rgba(10, 25, 47, 0.72);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .echkili-call-modal-overlay.open {
        opacity: 1;
        pointer-events: auto;
      }

      .echkili-call-modal-card {
        background: #ffffff;
        color: #1e293b;
        width: 100%;
        max-width: 560px;
        max-height: 92vh;
        overflow-y: auto;
        border-radius: 20px;
        box-shadow: 0 25px 60px -15px rgba(0, 40, 104, 0.4), 0 0 0 1px rgba(212, 175, 55, 0.3);
        transform: scale(0.92) translateY(20px);
        transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        position: relative;
        font-family: inherit;
      }
      .echkili-call-modal-overlay.open .echkili-call-modal-card {
        transform: scale(1) translateY(0);
      }

      /* Header de la pop-up */
      .echkili-call-modal-header {
        background: linear-gradient(135deg, #002868 0%, #001f58 100%);
        color: #ffffff;
        padding: 24px 26px 20px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        position: relative;
        overflow: hidden;
      }
      .echkili-call-modal-header::before {
        content: "";
        position: absolute;
        top: -60px;
        right: -60px;
        width: 160px;
        height: 160px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(212, 175, 55, 0.25) 0%, transparent 70%);
        pointer-events: none;
      }
      .echkili-call-topbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;
      }
      .echkili-call-badge-live {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: rgba(255, 255, 255, 0.12);
        backdrop-filter: blur(4px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding: 4px 12px;
        border-radius: 9999px;
        font-size: 0.75rem;
        font-weight: 700;
        color: #ffffff;
        letter-spacing: 0.02em;
        text-transform: uppercase;
      }
      .echkili-call-live-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #22c55e;
        box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.4);
        animation: echkiliPulseDot 1.5s infinite;
      }
      .echkili-call-close-btn {
        background: rgba(255, 255, 255, 0.15);
        border: none;
        color: #ffffff;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s ease;
        font-size: 1.1rem;
        line-height: 1;
      }
      .echkili-call-close-btn:hover {
        background: rgba(255, 255, 255, 0.3);
        transform: rotate(90deg);
      }
      .echkili-call-modal-title {
        font-size: 1.35rem;
        font-weight: 800;
        margin: 0 0 6px;
        color: #ffffff;
        line-height: 1.25;
      }
      .echkili-call-modal-subtitle {
        font-size: 0.86rem;
        color: #cbd5e1;
        margin: 0;
        line-height: 1.45;
      }

      /* Corps de la pop-up */
      .echkili-call-modal-body {
        padding: 22px 24px 24px;
      }

      /* Cartes d'appel direct */
      .echkili-call-actions-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        margin-bottom: 20px;
      }
      @media (max-width: 520px) {
        .echkili-call-actions-grid {
          grid-template-columns: 1fr;
        }
      }

      .echkili-call-card-action {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 14px;
        border-radius: 14px;
        text-decoration: none;
        border: 1.5px solid #e2e8f0;
        background: #f8fafc;
        transition: all 0.25s ease;
        color: inherit;
        position: relative;
        overflow: hidden;
      }
      .echkili-call-card-action:hover {
        border-color: #002868;
        background: #f0f7ff;
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(0, 40, 104, 0.08);
      }
      .echkili-call-card-action.card-mobile:hover {
        border-color: #0080ff;
        background: #f0f9ff;
      }
      .echkili-call-card-action.card-whatsapp {
        grid-column: 1 / -1;
        background: #f0fdf4;
        border-color: #bbf7d0;
      }
      .echkili-call-card-action.card-whatsapp:hover {
        background: #dcfce7;
        border-color: #22c55e;
        box-shadow: 0 6px 18px rgba(34, 197, 94, 0.15);
      }

      .echkili-call-action-icon {
        width: 42px;
        height: 42px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .card-fixed .echkili-call-action-icon {
        background: #e0f2fe;
        color: #002868;
      }
      .card-mobile .echkili-call-action-icon {
        background: #e0e7ff;
        color: #3730a3;
      }
      .card-whatsapp .echkili-call-action-icon {
        background: #25d366;
        color: #ffffff;
      }
      .echkili-call-action-icon svg {
        width: 22px;
        height: 22px;
        fill: currentColor;
      }

      .echkili-call-action-info {
        flex: 1;
        min-width: 0;
      }
      .echkili-call-action-title {
        font-size: 0.74rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.03em;
        color: #64748b;
        margin-bottom: 2px;
      }
      .echkili-call-action-num {
        font-size: 1.05rem;
        font-weight: 900;
        color: #002868;
        letter-spacing: -0.01em;
        line-height: 1.2;
      }
      .card-whatsapp .echkili-call-action-num {
        color: #15803d;
      }
      .echkili-call-action-sub {
        font-size: 0.72rem;
        color: #64748b;
        margin-top: 1px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      /* Séparateur élégant */
      .echkili-call-divider {
        position: relative;
        text-align: center;
        margin: 20px 0 16px;
      }
      .echkili-call-divider::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        height: 1px;
        background: #e2e8f0;
      }
      .echkili-call-divider-text {
        position: relative;
        display: inline-block;
        padding: 0 14px;
        background: #ffffff;
        font-size: 0.8rem;
        font-weight: 700;
        color: #475569;
      }

      /* Formulaire de rappel rapide */
      .echkili-call-form {
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 14px;
        padding: 16px;
      }
      .echkili-call-form-group {
        margin-bottom: 10px;
      }
      .echkili-call-input,
      .echkili-call-select {
        width: 100%;
        padding: 10px 14px;
        border: 1.5px solid #cbd5e1;
        border-radius: 10px;
        font-size: 0.88rem;
        font-family: inherit;
        background: #ffffff;
        color: #1e293b;
        transition: border-color 0.2s, box-shadow 0.2s;
        box-sizing: border-box;
      }
      .echkili-call-input:focus,
      .echkili-call-select:focus {
        outline: none;
        border-color: #002868;
        box-shadow: 0 0 0 3px rgba(0, 40, 104, 0.12);
      }
      .echkili-call-submit-btn {
        width: 100%;
        padding: 12px 18px;
        background: linear-gradient(135deg, #002868 0%, #001f58 100%);
        color: #ffffff;
        border: 1px solid #d4af37;
        border-radius: 10px;
        font-size: 0.94rem;
        font-weight: 800;
        font-family: inherit;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        transition: all 0.25s ease;
        box-shadow: 0 4px 14px rgba(0, 40, 104, 0.2);
        margin-top: 4px;
      }
      .echkili-call-submit-btn:hover {
        background: linear-gradient(135deg, #003380 0%, #002868 100%);
        box-shadow: 0 6px 18px rgba(0, 40, 104, 0.3), 0 0 12px rgba(212, 175, 55, 0.35);
        transform: translateY(-1px);
      }
      .echkili-call-submit-btn:disabled {
        opacity: 0.65;
        cursor: not-allowed;
      }

      /* Succès du rappel */
      .echkili-call-success-box {
        display: none;
        padding: 18px;
        background: #f0fdf4;
        border: 1.5px solid #86efac;
        border-radius: 12px;
        text-align: center;
        animation: echkiliFadeIn 0.3s ease;
      }
      .echkili-call-success-icon {
        width: 44px;
        height: 44px;
        margin: 0 auto 10px;
        border-radius: 50%;
        background: #22c55e;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .echkili-call-success-icon svg {
        width: 24px;
        height: 24px;
        fill: currentColor;
      }
      .echkili-call-success-title {
        font-size: 1.05rem;
        font-weight: 800;
        color: #166534;
        margin: 0 0 6px;
      }
      .echkili-call-success-msg {
        font-size: 0.85rem;
        color: #1e293b;
        margin: 0;
        line-height: 1.45;
      }

      /* Footer de la pop-up */
      .echkili-call-modal-footer {
        padding: 14px 24px;
        background: #f1f5f9;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 0.74rem;
        color: #64748b;
        border-top: 1px solid #e2e8f0;
      }
      .echkili-call-footer-info {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .echkili-call-dismiss-link {
        color: #64748b;
        text-decoration: underline;
        cursor: pointer;
        background: none;
        border: none;
        font-size: inherit;
        font-family: inherit;
        padding: 4px 6px;
      }
      .echkili-call-dismiss-link:hover {
        color: #002868;
      }

      /* Animations */
      @keyframes echkiliPhoneRinging {
        0%, 100% { transform: rotate(0deg); }
        10%, 30% { transform: rotate(-15deg); }
        20%, 40% { transform: rotate(15deg); }
        50% { transform: rotate(0deg); }
      }
      @keyframes echkiliPulseDot {
        0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.6); }
        70% { transform: scale(1.1); box-shadow: 0 0 0 6px rgba(34, 197, 94, 0); }
        100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
      }
      @keyframes echkiliFadeIn {
        from { opacity: 0; transform: translateY(6px); }
        to { opacity: 1; transform: translateY(0); }
      }

      /* Direction RTL */
      .echkili-call-modal-card[dir="rtl"] {
        text-align: right;
      }
      .echkili-call-modal-card[dir="rtl"] .echkili-call-action-icon {
        order: 2;
      }
      .echkili-call-modal-card[dir="rtl"] .echkili-call-action-info {
        order: 1;
        text-align: right;
      }
      .echkili-call-modal-card[dir="rtl"] .echkili-call-close-btn {
        margin-right: auto;
        margin-left: 0;
      }
    `;
    document.head.appendChild(style);
  }

  // Construction du DOM de la pop-up
  function createWidget() {
    if (document.getElementById('echkiliCallModal')) return;

    injectStyles();

    const lang = getCurrentLang();
    const t = I18N[lang] || I18N.fr;
    const isRtl = lang === 'ar';

    // 1. Bouton déclencheur flottant
    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.id = 'echkiliCallTriggerBtn';
    trigger.className = 'echkili-call-trigger';
    trigger.setAttribute('aria-label', t.trigger_text);
    trigger.innerHTML = `
      <div class="echkili-call-trigger-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/>
        </svg>
      </div>
      <div class="echkili-call-trigger-text-wrap">
        <span class="echkili-call-trigger-label" id="echkiliCallTriggerText">${t.trigger_text}</span>
        <span class="echkili-call-trigger-status">
          <span class="echkili-call-trigger-dot"></span>
          <span id="echkiliCallTriggerStatus">${t.trigger_status}</span>
        </span>
      </div>
    `;

    // 2. Modale complète
    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'echkiliCallModal';
    modalOverlay.className = 'echkili-call-modal-overlay';
    modalOverlay.setAttribute('role', 'dialog');
    modalOverlay.setAttribute('aria-modal', 'true');
    modalOverlay.setAttribute('aria-labelledby', 'echkiliCallModalTitle');

    modalOverlay.innerHTML = `
      <div class="echkili-call-modal-card" id="echkiliCallModalCard" dir="${isRtl ? 'rtl' : 'ltr'}">
        <!-- Header -->
        <div class="echkili-call-modal-header">
          <div class="echkili-call-topbar">
            <div class="echkili-call-badge-live">
              <span class="echkili-call-live-dot"></span>
              <span id="echkiliCallModalBadge">${t.modal_badge}</span>
            </div>
            <button type="button" class="echkili-call-close-btn" id="echkiliCallCloseBtn" aria-label="Fermer">✕</button>
          </div>
          <h3 class="echkili-call-modal-title" id="echkiliCallModalTitle">${t.modal_title}</h3>
          <p class="echkili-call-modal-subtitle" id="echkiliCallModalSubtitle">${t.modal_subtitle}</p>
        </div>

        <!-- Body -->
        <div class="echkili-call-modal-body">
          <!-- Grille d'actions rapides -->
          <div class="echkili-call-actions-grid">
            <!-- Fixe Bureau -->
            <a href="tel:+212525363061" class="echkili-call-card-action card-fixed" title="Appeler le fixe de l'agence">
              <div class="echkili-call-action-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.4-1.1-.6-2.3-.6-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/></svg>
              </div>
              <div class="echkili-call-action-info">
                <div class="echkili-call-action-title" id="echkiliCallFixedTitle">${t.call_fixed_title}</div>
                <div class="echkili-call-action-num">${t.call_fixed_num}</div>
                <div class="echkili-call-action-sub" id="echkiliCallFixedDesc">${t.call_fixed_desc}</div>
              </div>
            </a>

            <!-- Mobile & Urgences -->
            <a href="tel:+212667762124" class="echkili-call-card-action card-mobile" title="Appeler le mobile d'astreinte">
              <div class="echkili-call-action-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>
              </div>
              <div class="echkili-call-action-info">
                <div class="echkili-call-action-title" id="echkiliCallMobileTitle">${t.call_mobile_title}</div>
                <div class="echkili-call-action-num">${t.call_mobile_num}</div>
                <div class="echkili-call-action-sub" id="echkiliCallMobileDesc">${t.call_mobile_desc}</div>
              </div>
            </a>

            <!-- WhatsApp Direct -->
            <a href="https://wa.me/212667762124?text=Bonjour%20Assurances%20Echkili%2C%20j%27ai%20besoin%20d%27un%20conseil%20ou%20d%27un%20devis" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="echkili-call-card-action card-whatsapp" 
               title="Discuter directement sur WhatsApp">
              <div class="echkili-call-action-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.79 14.07c-.24.68-1.2 1.26-1.74 1.31-.49.05-1.12.08-3.62-.95-3.19-1.32-5.24-4.57-5.4-4.78-.16-.21-1.3-1.73-1.3-3.3 0-1.57.82-2.34 1.11-2.66.29-.32.64-.4.85-.4.21 0 .43 0 .61.01.2.01.46-.07.72.55.26.63.9 2.2.98 2.36.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.47.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.32.16.51.14.7-.08.2-.21.84-.98 1.07-1.32.22-.34.45-.29.75-.18.31.11 1.95.92 2.29 1.09.34.17.56.25.64.39.09.14.09.81-.15 1.49z"/></svg>
              </div>
              <div class="echkili-call-action-info">
                <div class="echkili-call-action-title" id="echkiliCallWaTitle">${t.wa_title}</div>
                <div class="echkili-call-action-num">${t.wa_num}</div>
                <div class="echkili-call-action-sub" id="echkiliCallWaDesc">${t.wa_desc}</div>
              </div>
            </a>
          </div>

          <!-- Séparateur -->
          <div class="echkili-call-divider">
            <span class="echkili-call-divider-text" id="echkiliCallDividerText">${t.form_title}</span>
          </div>

          <!-- Formulaire Rappel Express -->
          <form class="echkili-call-form" id="echkiliCallbackForm" action="https://formsubmit.co/echkili.assurances@outlook.com" method="POST">
            <!-- Paramètres FormSubmit pour réception garantie sur echkili.assurances@outlook.com -->
            <input type="hidden" name="_captcha" value="false">
            <input type="hidden" name="_template" value="table">
            <input type="hidden" name="_subject" value="URGENT RAPPEL - Demande reçue via Pop-up 'Besoin ? Appelez-nous' - Assurances Echkili">
            <input type="hidden" name="_autoresponse" value="Merci pour votre demande auprès d'Assurances Echkili Marrakech. Votre conseiller dédié étudie votre besoin et vous rappelle sous 5 à 15 minutes ouvrées.">
            
            <div class="echkili-call-form-group">
              <input type="text" name="nom_complet" id="echkiliCallName" class="echkili-call-input" placeholder="${t.form_name_placeholder}" required>
            </div>
            
            <div class="echkili-call-form-group">
              <input type="tel" name="telephone" id="echkiliCallPhone" class="echkili-call-input" placeholder="${t.form_phone_placeholder}" required>
            </div>
            
            <div class="echkili-call-form-group">
              <select name="type_assurance" id="echkiliCallType" class="echkili-call-select">
                <option value="Non spécifié" id="optDefault">${t.form_type_default}</option>
                <option value="Assurance Automobile" id="optAuto">${t.form_type_auto}</option>
                <option value="Assurance Habitation" id="optHabitation">${t.form_type_habitation}</option>
                <option value="Assurance Santé" id="optSante">${t.form_type_sante}</option>
                <option value="Assurance Moto" id="optMoto">${t.form_type_moto}</option>
                <option value="Multirisque Pro" id="optPro">${t.form_type_pro}</option>
                <option value="Flotte Entreprise" id="optEnt">${t.form_type_entreprise}</option>
                <option value="Autre demande" id="optAutre">${t.form_type_autre}</option>
              </select>
            </div>

            <button type="submit" class="echkili-call-submit-btn" id="echkiliCallSubmitBtn">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
              <span id="echkiliCallSubmitText">${t.form_submit_btn}</span>
            </button>
          </form>

          <!-- Boîte de succès après soumission -->
          <div class="echkili-call-success-box" id="echkiliCallSuccessBox">
            <div class="echkili-call-success-icon">
              <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            </div>
            <h4 class="echkili-call-success-title" id="echkiliCallSuccessTitle">${t.form_success_title}</h4>
            <p class="echkili-call-success-msg" id="echkiliCallSuccessMsg"></p>
          </div>
        </div>

        <!-- Footer -->
        <div class="echkili-call-modal-footer">
          <div class="echkili-call-footer-info">
            <span id="echkiliCallFooterAddr">📍 ${t.footer_address}</span>
            <span id="echkiliCallFooterHours">🕒 ${t.footer_hours}</span>
          </div>
          <button type="button" class="echkili-call-dismiss-link" id="echkiliCallDismissLink">${t.dismiss_btn}</button>
        </div>
      </div>
    `;

    document.body.appendChild(trigger);
    document.body.appendChild(modalOverlay);

    // Initialisation des événements
    setupEvents(trigger, modalOverlay);

    // Déclenchement automatique doux après 7 secondes si non dismissed
    initAutoPopup(modalOverlay);
  }

  // Événements d'ouverture/fermeture et soumission
  function setupEvents(trigger, modal) {
    const closeBtn = document.getElementById('echkiliCallCloseBtn');
    const dismissLink = document.getElementById('echkiliCallDismissLink');
    const form = document.getElementById('echkiliCallbackForm');

    function openModal() {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
      // Focus sur le champ nom
      setTimeout(() => {
        const nameInput = document.getElementById('echkiliCallName');
        if (nameInput) nameInput.focus();
      }, 100);
    }

    function closeModal() {
      modal.classList.remove('open');
      document.body.style.overflow = '';
      try {
        sessionStorage.setItem('echkili_call_popup_dismissed', '1');
      } catch (e) {}
    }

    // Clic trigger
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });

    // Clic close buttons
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (dismissLink) dismissLink.addEventListener('click', closeModal);

    // Clic en dehors de la carte (backdrop)
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    // Touche Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
      }
    });

    // Soumission du formulaire de rappel vers echkili.assurances@outlook.com
    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = document.getElementById('echkiliCallSubmitBtn');
        const submitText = document.getElementById('echkiliCallSubmitText');
        const successBox = document.getElementById('echkiliCallSuccessBox');
        const successMsg = document.getElementById('echkiliCallSuccessMsg');
        const lang = getCurrentLang();
        const t = I18N[lang] || I18N.fr;

        const name = (document.getElementById('echkiliCallName').value || '').trim();
        const phone = (document.getElementById('echkiliCallPhone').value || '').trim();
        const type = document.getElementById('echkiliCallType').value;

        if (!name || !phone) return;

        // Feedback de chargement
        submitBtn.disabled = true;
        const originalText = submitText.textContent;
        submitText.textContent = t.form_submitting;

        const payload = {
          "Source": "Pop-up 'Besoin ? Appelez-nous' - Assurances Echkili Marrakech",
          "Nom du client": name,
          "Téléphone": phone,
          "Besoin / Type d'assurance": type,
          "Page visitée": window.location.pathname + window.location.search,
          "Langue": lang,
          "Date et Heure": new Date().toLocaleString('fr-FR', { timeZone: 'Africa/Casablanca' }),
          "_subject": `URGENT - Rappel demandé par ${name} (${phone}) - Pop-up Echkili`,
          "_autoresponse": `Merci ${name} pour votre demande auprès d'Assurances Echkili Marrakech. Votre conseiller dédié vous rappelle très rapidement.`
        };

        try {
          const response = await fetch('https://formsubmit.co/ajax/echkili.assurances@outlook.com', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
          });

          // Succès
          form.style.display = 'none';
          successBox.style.display = 'block';
          successMsg.textContent = t.form_success_msg.replace('{name}', name).replace('{phone}', phone);

          // Fermeture automatique après 4.5 secondes
          setTimeout(() => {
            closeModal();
            // Réinitialisation douce du formulaire
            setTimeout(() => {
              form.reset();
              form.style.display = 'block';
              successBox.style.display = 'none';
              submitBtn.disabled = false;
              submitText.textContent = originalText;
            }, 600);
          }, 4500);

        } catch (err) {
          console.warn('Envoi ajax direct impossible, fallback soumission standard', err);
          // Si le fetch AJAX échoue (réseau/bloqueur), fallback sur soumission POST native standard
          form.submit();
        }
      });
    }

    // Expose open/close sur window pour déclenchement externe
    window.openEchkiliCallPopup = openModal;
    window.closeEchkiliCallPopup = closeModal;
  }

  // Auto-déclenchement intelligent après quelques secondes
  function initAutoPopup(modal) {
    try {
      const alreadyDismissed = sessionStorage.getItem('echkili_call_popup_dismissed');
      if (alreadyDismissed) return;
    } catch (e) {}

    // Déclenchement automatique après 7 secondes
    setTimeout(() => {
      try {
        const dismissed = sessionStorage.getItem('echkili_call_popup_dismissed');
        if (!dismissed && !modal.classList.contains('open')) {
          modal.classList.add('open');
          document.body.style.overflow = 'hidden';
        }
      } catch (e) {}
    }, 7000);
  }

  // Mise à jour de la langue
  function updateLanguage(lang) {
    const t = I18N[lang] || I18N.fr;
    const isRtl = lang === 'ar';

    const card = document.getElementById('echkiliCallModalCard');
    if (card) {
      card.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    }

    const triggerLabel = document.getElementById('echkiliCallTriggerText');
    if (triggerLabel) triggerLabel.textContent = t.trigger_text;

    const triggerStatus = document.getElementById('echkiliCallTriggerStatus');
    if (triggerStatus) triggerStatus.textContent = t.trigger_status;

    const badge = document.getElementById('echkiliCallModalBadge');
    if (badge) badge.textContent = t.modal_badge;

    const title = document.getElementById('echkiliCallModalTitle');
    if (title) title.textContent = t.modal_title;

    const subtitle = document.getElementById('echkiliCallModalSubtitle');
    if (subtitle) subtitle.textContent = t.modal_subtitle;

    const fixedTitle = document.getElementById('echkiliCallFixedTitle');
    if (fixedTitle) fixedTitle.textContent = t.call_fixed_title;

    const fixedDesc = document.getElementById('echkiliCallFixedDesc');
    if (fixedDesc) fixedDesc.textContent = t.call_fixed_desc;

    const mobileTitle = document.getElementById('echkiliCallMobileTitle');
    if (mobileTitle) mobileTitle.textContent = t.call_mobile_title;

    const mobileDesc = document.getElementById('echkiliCallMobileDesc');
    if (mobileDesc) mobileDesc.textContent = t.call_mobile_desc;

    const waTitle = document.getElementById('echkiliCallWaTitle');
    if (waTitle) waTitle.textContent = t.wa_title;

    const waDesc = document.getElementById('echkiliCallWaDesc');
    if (waDesc) waDesc.textContent = t.wa_desc;

    const divText = document.getElementById('echkiliCallDividerText');
    if (divText) divText.textContent = t.form_title;

    const nameInput = document.getElementById('echkiliCallName');
    if (nameInput) nameInput.placeholder = t.form_name_placeholder;

    const phoneInput = document.getElementById('echkiliCallPhone');
    if (phoneInput) phoneInput.placeholder = t.form_phone_placeholder;

    // Options select
    const optDefault = document.getElementById('optDefault');
    if (optDefault) optDefault.textContent = t.form_type_default;
    const optAuto = document.getElementById('optAuto');
    if (optAuto) optAuto.textContent = t.form_type_auto;
    const optHabitation = document.getElementById('optHabitation');
    if (optHabitation) optHabitation.textContent = t.form_type_habitation;
    const optSante = document.getElementById('optSante');
    if (optSante) optSante.textContent = t.form_type_sante;
    const optMoto = document.getElementById('optMoto');
    if (optMoto) optMoto.textContent = t.form_type_moto;
    const optPro = document.getElementById('optPro');
    if (optPro) optPro.textContent = t.form_type_pro;
    const optEnt = document.getElementById('optEnt');
    if (optEnt) optEnt.textContent = t.form_type_entreprise;
    const optAutre = document.getElementById('optAutre');
    if (optAutre) optAutre.textContent = t.form_type_autre;

    const submitText = document.getElementById('echkiliCallSubmitText');
    if (submitText) submitText.textContent = t.form_submit_btn;

    const successTitle = document.getElementById('echkiliCallSuccessTitle');
    if (successTitle) successTitle.textContent = t.form_success_title;

    const footerAddr = document.getElementById('echkiliCallFooterAddr');
    if (footerAddr) footerAddr.textContent = `📍 ${t.footer_address}`;

    const footerHours = document.getElementById('echkiliCallFooterHours');
    if (footerHours) footerHours.textContent = `🕒 ${t.footer_hours}`;

    const dismissLink = document.getElementById('echkiliCallDismissLink');
    if (dismissLink) dismissLink.textContent = t.dismiss_btn;
  }

  // Écoute de l'événement global de changement de langue
  window.addEventListener('echkiliLanguageChanged', (e) => {
    const newLang = (e.detail && (e.detail.lang || e.detail.language)) || getCurrentLang();
    if (newLang) {
      updateLanguage(newLang);
    }
  });

  // Initialisation au chargement du document
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createWidget);
  } else {
    createWidget();
  }
})();
