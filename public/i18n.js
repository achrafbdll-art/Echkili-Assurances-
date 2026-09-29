// Système multilingue complet (Français, العربية, English) pour Assurances Echkili Marrakech
// 100% Traduction de tout le site web (index.html, offres.html, produit.html)
(function () {
  'use strict';

  const TRANSLATIONS = {
    fr: {
      site_title: "Assurances Echkili | Agent Général AXA Marrakech",
      
      // Topbar
      top_office: "Notre bureau",
      top_office_desc: "Rdc magasin 2, Imm Erraha N°8<br>Av. Guemassa, M'hamid, Marrakech",
      top_write: "Écrivez-nous",
      top_call: "Appelez-nous",
      top_fixe: "Fixe : 05 25 36 30 61",
      top_gsm: "GSM : 06 67 76 21 24",

      // Navigation
      nav_home: "Accueil",
      nav_echkili: "Assurances Echkili",
      nav_missions: "Missions & Valeurs",
      nav_agency: "L'Agence Echkili",
      nav_agency_alt: "Notre Agence",
      nav_contact: "Notre Agence & Contact",
      nav_contact_alt: "Coordonnées & Contact",
      nav_book: "Prendre Rendez-vous",
      nav_sinistres: "En cas de sinistre (Urgence 24/7)",
      nav_particuliers: "Particuliers",
      nav_pros: "Professionnels",
      nav_entreprises: "Entreprises",
      nav_auto: "Assurance Automobile & Moto",
      nav_habitation: "Habitation & Riad (HABITASSUR)",
      nav_sante: "Santé Sehassur & International",
      nav_epargne: "Épargne & Retraite (Futuris II)",
      nav_prevoyance: "Prévoyance Accident & Famille",
      nav_voyage: "Assurance Voyage & Visa Schengen",
      nav_all_particuliers: "Toutes les offres Particuliers",
      nav_multirisque_pro: "Multirisque Professionnelle",
      nav_rc_pro: "Responsabilité Civile Pro (RC Pro)",
      nav_at_mp: "Accidents du Travail (Loi 18-12)",
      nav_flotte: "Flottes & Utilitaires Pro",
      nav_all_pros: "Toutes les offres Professionnels",
      nav_multirisque_indus: "Multirisque Industrielle & Dommages",
      nav_flotte_ent: "Flotte Automobile Entreprise",
      nav_sante_groupe: "Santé Collective & Prévoyance Groupe",
      nav_trc: "Tous Risques Chantier (TRC BTP)",
      nav_at_trajet: "Accidents du Travail & Trajet (18-12)",
      nav_rc_decennale: "RC Décennale & Responsabilité Dirigeants",
      nav_all_ent: "Solutions Grandes Entreprises",
      nav_devis: "Devis Express",
      nav_access: "Contact & Accès",
      nav_quick_call: "Appeler",
      nav_menu_btn: "MENU",

      // Hero Slider (index.html)
      hero_slide_0_title: "Votre Agence AXA à Marrakech",
      hero_slide_0_desc: "Une équipe d'experts à votre écoute à l'agence ECHKILI ASSURANCES,<br>Imm Erraha N°8, Av. Guemassa, M'hamid. Conseils personnalisés et réactivité immédiate.",
      hero_slide_0_btn: "Prendre Rendez-vous",

      hero_slide_1_title: "Vous êtes une entreprise&nbsp;?",
      hero_slide_1_desc: "Vous avez besoin d'assurer votre investissement,<br>vos collaborateurs ou votre responsabilité !<br>Voici des formules qui vous seront adaptées",
      hero_slide_1_btn: "Découvrez L'offre",

      hero_slide_2_title: "Assurance Automobile & Moto",
      hero_slide_2_desc: "Bénéficiez d'une protection tous risques complète,<br>assistance dépannage 24/7 et remorquage 0 km immédiat à Marrakech.",
      hero_slide_2_btn: "Demander un Devis Auto",

      hero_slide_3_title: "Protection Habitation HABITASSUR",
      hero_slide_3_desc: "Votre foyer et votre famille à l'abri des imprévus :<br>dégâts des eaux, vol, incendie et responsabilité civile chef de famille.",
      hero_slide_3_btn: "Protéger mon Logement",

      // Missions & Valeurs
      mv_title: "Missions <span class=\"mv-ampersand\">&amp;</span> valeurs",
      mv_lead: "La mission d'AXA Maroc est d'aider ses clients à vivre avec plus de confiance en les protégeant face aux imprévus du quotidien et aux risques de demain. <strong>Ses valeurs reposent notamment sur :</strong>",
      mv_val_1: "La proximité et l’écoute des clients",
      mv_val_2: "L’innovation au service de l’utilisateur",
      mv_val_3: "La transparence et la confiance",
      mv_val_4: "L’excellence opérationnelle",
      mv_val_5: "L’engagement humain et sociétal",
      mv_outro: "À travers ses solutions et ses services, AXA Maroc cherche à offrir <strong>une protection durable, adaptée aux nouveaux modes de vie et aux enjeux contemporains.</strong>",

      // Rubrique Présentation Agence Echkili (index.html)
      sim_kicker: "ECHKILI ASSURANCES",
      sim_title: "Est une agence générale d’assurance au Maroc .",
      sim_desc: "Mérite d’être votre interlocuteur privilégié pour vos assurances ou celles de l'entreprise ou de l'institution dont vous avez la responsabilité.",
      sim_accident_title: "En cas d'accident",
      sim_accident_more: "En savoir plus",
      sim_accident_read_more: "Lire la suite...",
      sim_accident_reduce: "Réduire",
      sim_accident_lead: "<strong>ECHKILI ASSURANCES</strong> vous accompagne tout au long de vos démarches",
      sim_accident_body: "En cas de sinistre ou d'accident, notre agence générale AXA à Marrakech met à votre disposition son assistance 24/7, la prise en charge immédiate de votre déclaration de constat, ainsi que son réseau d'experts et de garages agréés.",
      sim_accident_tel: "Assistance Sinistre : 05 25 36 30 61",

      // Solutions Section (index.html & offres.html)
      sol_title_1: "Nos Solutions Particuliers",
      sol_title_2: "Professionnels",
      tab_particuliers: "Assurance Particuliers (6)",
      tab_pros: "Professionnels & Entreprises (6)",
      tab_all: "Toutes les Solutions (12)",
      card_btn_decouvrir: "DÉCOUVRIR L'OFFRE",

      // FAQ Section (index.html)
      faq_tag: "Foire Aux Questions",
      faq_title: "Questions Fréquemment Posées",
      faq_sub: "Retrouvez les réponses aux interrogations les plus courantes de nos assurés.",
      faq_q1: "Quels sont les documents indispensables pour assurer un véhicule ?",
      faq_a1: "Pour souscrire une assurance auto ou moto, vous devez présenter la carte grise originale (ou récépissé de mutation), le permis de conduire du conducteur principal, la CIN (Carte d'Identité Nationale) et l'ancien certificat d'assurance si vous bénéficiez d'un bonus de non-sinistre.",
      faq_q2: "Comment fonctionne l'assistance 24/7 en cas de panne à Marrakech ou sur route ?",
      faq_a2: "En composant le numéro d'assistance figurant sur votre vignette verte (05 25 36 30 61 ou 06 67 76 21 24), une dépanneuse est immédiatement dépêchée sur place. Selon votre contrat, vous profitez du dépannage sur place, du remorquage vers le garage conventionné le plus proche, du rapatriement et d'un véhicule de prêt.",
      faq_q3: "L'assurance Accident du Travail (AT) est-elle obligatoire pour mon entreprise ?",
      faq_a3: "Oui, au Maroc la souscription d'une police d'assurance couvrant les accidents du travail et maladies professionnelles est une obligation légale stricte pour tout employeur, quel que soit le nombre de salariés déclarés (Code des Assurances et loi 18-12).",
      faq_q4: "Quels sont les délais habituels de remboursement santé ?",
      faq_a4: "Dès dépôt de votre dossier de soins complet à notre agence Assurances Echkili (feuille de maladie, ordonnance cachetée, vignettes médicamenteuses et quittances), le traitement et le virement bancaire sont généralement effectués sous 7 à 10 jours ouvrés.",
      faq_q5: "Comment obtenir un devis personnalisé ou souscrire sans me déplacer ?",
      faq_a5: "Vous pouvez remplir le formulaire de devis ci-dessous, nous joindre au 05 25 36 30 61 ou nous envoyer vos documents par WhatsApp au 06 67 76 21 24. Un conseiller vous répond sous 2 heures ouvrées avec une étude personnalisée et adaptée.",

      // Contact & Coordonnées (index.html)
      contact_tag: "Agence Marrakech",
      contact_agency_name: "Assurances Echkili",
      contact_agency_sub: "Agent Général AXA Assurance Maroc. Venez nous rencontrer à l'agence pour un accueil chaleureux et des conseils personnalisés.",
      contact_address_title: "Adresse de l'Agence",
      contact_address_desc: "Rdc magasin 2 imm erraha n°8 av guemassa mhamid Marrakech",
      contact_tel_title: "Téléphone & GSM",
      contact_tel_fixe_label: "Tél Fixe :",
      contact_tel_gsm_label: "GSM / WhatsApp :",
      contact_email_title: "Email de Contact",
      contact_hours_title: "Horaires d'Ouverture",
      contact_hours_week: "Lundi au Vendredi : 08h30 - 19h00",
      contact_hours_sat: "Samedi : 09h00 - 13h00",
      contact_socials_title: "Réseaux Sociaux Officiels",

      // Formulaire Devis & Contact (index.html)
      form_badge: "Conseil & Devis Personnalisé",
      form_title: "Envoyez un Message à l'Agence",
      form_subtitle: "Votre demande est transmise directement à notre boîte email <strong>echkili.assurances@outlook.com</strong>. Un conseiller prend en charge votre dossier sous 2h ouvrées.",
      form_nom_label: "Nom & Prénom",
      form_required: "* Obligatoire",
      form_nom_placeholder: "Ex: Yassine Benali",
      form_phone_label: "Numéro de Téléphone",
      form_phone_placeholder: "06 12 34 56 78",
      form_email_label: "Adresse Email",
      form_email_opt: "(Optionnel pour devis)",
      form_email_placeholder: "nom@exemple.ma",
      form_subject_label: "Objet de votre Demande",
      form_opt_auto: "🚗 Devis Assurance Automobile",
      form_opt_hab: "🏡 Devis Assurance Habitation",
      form_opt_sante: "🩺 Assurance Santé Sehassur & International",
      form_opt_ent: "🏢 Solutions Professionnels & Entreprises",
      form_opt_epargne: "📈 Épargne & Prévoyance AXA",
      form_opt_sinistre: "⚠️ Déclaration / Suivi de Sinistre",
      form_opt_autre: "💬 Autre Renseignement / Rendez-vous",
      form_message_label: "Votre Message ou Précision",
      form_message_placeholder: "Indiquez vos besoins (type de véhicule, garanties souhaitées, questions pour l'agence)...",
      form_privacy: "<strong>Protection des données :</strong> Vos informations sont exclusivement réservées à l'Agence Echkili à Marrakech pour traiter votre demande conformément à la loi 09-08.",
      form_submit_btn: "Transmettre ma Demande à l'Agence",

      // Feedback / Modal après soumission
      feedback_title: "Demande Transmise à l'Agence Echkili",
      feedback_thanks: "Merci {nom} !",
      feedback_sent_to: "Votre demande a bien été transmise à notre boîte email <strong>echkili.assurances@outlook.com</strong>.",
      feedback_recipient: "Email destinataire :",
      feedback_subject: "Objet de la demande :",
      feedback_callback: "Téléphone de rappel :",
      feedback_your_email: "Votre email de contact :",
      feedback_delay: "⏱ <strong>Délai de traitement :</strong> Un conseiller dédié d'Assurances Echkili traite votre message reçu sur <strong>echkili.assurances@outlook.com</strong> et vous recontactera sous <strong>2 heures ouvrées</strong>.",
      feedback_btn_wa: "Notifier sur WhatsApp",
      feedback_btn_email: "Ouvrir dans Outlook / Email",
      feedback_urgent_note: "Besoin urgent ? Contactez directement l'agence :",
      feedback_btn_close: "Compris & Fermer",

      // Localisation / Carte Google Maps (index.html)
      map_badge: "Plan d'Accès & Localisation",
      map_title: "Venir à notre Agence à Marrakech",
      map_subtitle: "Rdc magasin 2 imm erraha n°8 av guemassa mhamid Marrakech — Stationnement réservé aux clients",
      map_btn_directions: "Calculer l'Itinéraire ↗",
      map_loading: "Chargement du plan d'accès...",
      map_pill_access: "Accès direct via l'Avenue Guemassa (M'hamid)",
      map_pill_parking: "Stationnement gratuit devant l'agence",
      map_pill_hours: "Accueil physique Lun-Ven 08h30-19h00 / Sam 09h00-13h00",
      map_pill_assistance: "Assistance : 05 25 36 30 61 / 06 67 76 21 24",

      // Footer
      footer_desc: "Assurances Echkili est une agence générale d'assurance représentant AXA Assurance Maroc à Marrakech.",
      footer_address: "Rdc magasin 2 imm erraha n°8 av guemassa mhamid Marrakech",
      footer_agency_link: "Notre Agence & Contact",
      footer_missions_link: "Missions & Valeurs",
      footer_acaps_badge: "Agréé ACAPS",
      footer_axa_badge: "Réseau AXA Maroc",
      footer_follow: "Suivez-nous :",
      footer_particuliers_title: "Particuliers",
      footer_pros_title: "Professionnels",
      footer_urgences_title: "Urgences & Horaires",
      footer_assistance_label: "Assistance Panne / Accident :",
      footer_email_label: "Email Direct Agence :",
      footer_hours_label: "Horaires d'ouverture :",
      footer_hours_week: "Lun - Ven : 08h30 - 19h00",
      footer_hours_sat: "Samedi : 09h00 - 13h00",
      footer_rights: "© 2026 Assurances Echkili. Tous droits réservés. Agent Général AXA Assurance Maroc.",
      footer_acaps: "Agrément Intermédiaire d'Assurance délivré par l'ACAPS conformément au Code des Assurances (Loi 17-99).",

      // Mobile Bottom Taskbar
      mb_home: "Accueil",
      mb_offers: "Offres",
      mb_call: "Appeler",
      mb_wa: "WhatsApp",
      mb_urgency: "Urgence",
      back_to_top: "Retour en haut de page",

      // Product Modal (Modal Fiche Produit)
      modal_tag: "Garantie AXA Maroc",
      modal_features_title: "Garanties et Prestations Clés",
      modal_advantages_title: "Les Avantages du Réseau AXA Maroc & Assurances Echkili",
      modal_cta_title: "Besoin d'une étude personnalisée immédiate ?",
      modal_cta_sub: "Votre Agent Général AXA à Marrakech vous répond sous 2h ouvrées.",
      modal_btn_page: "Voir la Page Dédiée",
      modal_btn_quote: "Demander mon Devis",
      modal_btn_wa: "Devis Express WhatsApp",

      // Catalogue Offres (offres.html)
      catalog_title: "Offres Particuliers & Professionnels | Assurances Echkili Marrakech - Agent Général AXA",
      catalog_tag: "Catalogue AXA Maroc",
      catalog_h1: "Nos Solutions Particuliers <span style=\"font-style: italic; font-weight: 400; color: #ff5252;\">&amp;</span> Professionnels",
      catalog_lead: "L'ensemble des contrats AXA Assurance Maroc conçus pour protéger votre quotidien, sécuriser votre patrimoine et pérenniser votre activité à Marrakech.",
      catalog_breadcrumb_home: "Accueil",
      catalog_breadcrumb_title: "Catalogue des Solutions d'Assurance",
      
      // Tableau Comparatif (offres.html)
      compare_badge: "Guide des Niveaux de Couverture",
      compare_title: "Comparatif des Formules AXA",
      compare_th_guarantees: "Garanties & Prestations",
      compare_th_essential: "Formule Essentielle",
      compare_th_comfort: "Formule Confort",
      compare_th_serenity: "Formule Sérénité Plus",
      compare_r1_name: "Responsabilité Civile & Défense",
      compare_r1_v1: "Inclus (Légal)",
      compare_r1_v2: "Inclus (Plafond Élevé)",
      compare_r1_v3: "Inclus (Plafond Optimal)",
      compare_r2_name: "Assistance Dépannage 24/7",
      compare_r2_v1: "Dès 50 km",
      compare_r2_v2: "0 km au domicile",
      compare_r2_v3: "0 km VIP + Taxi de liaison",
      compare_r3_name: "Bris de Glaces & Optiques",
      compare_r3_v1: "Optionnel",
      compare_r3_v2: "Inclus sans franchise",
      compare_r3_v3: "Inclus valeur à neuf",
      compare_r4_name: "Véhicule de Remplacement",
      compare_r4_v1: "—",
      compare_r4_v2: "Jusqu'à 7 jours",
      compare_r4_v3: "Jusqu'à 15 jours de prêt",
      compare_r5_name: "Vol, Incendie & Catastrophes Naturelles",
      compare_r5_v1: "—",
      compare_r5_v2: "Inclus avec franchise",
      compare_r5_v3: "Tous risques sans vétusté",
      compare_r6_name: "Conseiller Dédié Assurances Echkili",
      compare_r6_v1: "Oui",
      compare_r6_v2: "Oui",
      compare_r6_v3: "Oui (Ligne directe WhatsApp)",

      // Bannière CTA (offres.html)
      cta_banner_title: "Vous hésitez entre plusieurs formules ?",
      cta_banner_lead: "Venez rencontrer nos conseillers à l'agence ECHKILI ASSURANCES (Imm Erraha N°8, Avenue Guemassa, M'hamid) pour un comparatif gratuit et personnalisé sous 15 minutes.",
      cta_banner_wa: "Échanger par WhatsApp (06 67 76 21 24)",
      cta_banner_call: "Appeler l'Agence",

      // Page Produit (produit.html)
      prod_breadcrumb_home: "Accueil",
      prod_breadcrumb_offers: "Offres",
      prod_quote_btn: "Demander mon Devis Express",
      prod_wa_btn: "Échanger sur WhatsApp",
      prod_call_btn: "05 25 36 30 61",
      prod_presentation_title: "Présentation de votre contrat",
      prod_guarantees_title: "Garanties & Prestations Incluses",
      prod_why_heading: "Pourquoi souscrire auprès d'Assurances Echkili à Marrakech ?",
      prod_why_desc: "En tant qu'Agent Général AXA Assurance Maroc à Marrakech (Imm Erraha N°8, Avenue Guemassa, M'hamid), notre agence vous garantit une relation directe, sans plateforme intermédiaire délocalisée.",
      prod_faq_title: "Questions fréquentes sur ce contrat",
      prod_quote_box_title: "Devis Express Gratuit",
      prod_quote_box_sub: "Votre demande est transmise directement à <strong>echkili.assurances@outlook.com</strong>.",
      prod_quote_name_label: "Votre Nom Complet *",
      prod_quote_name_placeholder: "Ex: Mohamed Alami",
      prod_quote_tel_label: "Téléphone Mobile (WhatsApp) *",
      prod_quote_tel_placeholder: "Ex: 06 12 34 56 78",
      prod_quote_email_label: "Adresse Email",
      prod_quote_email_placeholder: "Ex: nom@domaine.ma",
      prod_quote_details_label: "Précision sur votre besoin",
      prod_quote_details_placeholder: "Précisez votre demande...",
      prod_quote_submit: "Recevoir mon Devis",
      prod_quote_success_title: "Demande transmise à l'agence !",
      prod_quote_success_text: "Votre devis a été envoyé à <strong>echkili.assurances@outlook.com</strong>. Un conseiller vous recontacte sous 2h ouvrées. Vous pouvez également confirmer instantanément par WhatsApp :",
      prod_quote_wa_confirm: "Confirmer sur WhatsApp"
    },

    ar: {
      site_title: "تأمينات شكيلـي | وكيل عام أكسا مراكش",
      
      // Topbar
      top_office: "مكتبنا بالوكالة",
      top_office_desc: "طابق أرضي محل 2، عمارة الراحة رقم 8<br>شارع كَمَاسة، المحاميد، مراكش",
      top_write: "راسلونا عبر البريد",
      top_call: "اتصلوا بنا مباشرة",
      top_fixe: "الثابت : 05 25 36 30 61",
      top_gsm: "المحمول / واتساب : 06 67 76 21 24",

      // Navigation
      nav_home: "الرئيسية",
      nav_echkili: "تأمينات شكيلـي",
      nav_missions: "المهام والقيم",
      nav_agency: "وكالتنا بمراكش",
      nav_agency_alt: "وكالتنا",
      nav_contact: "وكالتنا والاتصال",
      nav_contact_alt: "العنوان والاتصال",
      nav_book: "حجز موعد بالوكالة",
      nav_sinistres: "في حالة حادث (طوارئ 24/7)",
      nav_particuliers: "الأفراد",
      nav_pros: "المقاولات والمهنيون",
      nav_entreprises: "الشركات الكبرى",
      nav_auto: "تأمين السيارات والدراجات النارية",
      nav_habitation: "تأمين السكن والرياض (هابيتاسور)",
      nav_sante: "تأمين صحتي وسيحاتي بلس دولي",
      nav_epargne: "الادخار والتقاعد (فوتوريس 2)",
      nav_prevoyance: "التأمين ضد الحوادث وحماية الأسرة",
      nav_voyage: "تأمين السفر وتأشيرة شينغن",
      nav_all_particuliers: "جميع عروض الأفراد",
      nav_multirisque_pro: "التأمين الشامل للمهنيين والمحلات",
      nav_rc_pro: "المسؤولية المدنية المهنية (RC Pro)",
      nav_at_mp: "حوادث الشغل (القانون 18-12)",
      nav_flotte: "أساطيل ومركبات الأنشطة المهنية",
      nav_all_pros: "جميع عروض المهنيين",
      nav_multirisque_indus: "التأمين الصناعي الشامل والأضرار",
      nav_flotte_ent: "تأمين أسطول سيارات المقاولة",
      nav_sante_groupe: "التأمين الصحي الجماعي للأجراء",
      nav_trc: "تأمين جميع أخطار الورش (TRC)",
      nav_at_trajet: "حوادث الشغل وحوادث المسار (18-12)",
      nav_rc_decennale: "المسؤولية العشرية ومسؤولية المسيرين",
      nav_all_ent: "حلول الشركات والمؤسسات الكبرى",
      nav_devis: "تسعيرة سريعة",
      nav_access: "الموقع والاتصال",
      nav_quick_call: "اتصال",
      nav_menu_btn: "القائمة",

      // Hero Slider (index.html)
      hero_slide_0_title: "وكالتكم العامة أكسا بمراكش",
      hero_slide_0_desc: "فريق من الخبراء رهن إشارتكم بوكالة تأمينات شكيلـي، عمارة الراحة رقم 8، شارع كَمَاسة، المحاميد بمراكش. استشارة مخصصة واستجابة فورية.",
      hero_slide_0_btn: "حجز موعد بالوكالة",

      hero_slide_1_title: "هل أنتم مقاولة أو مهني؟",
      hero_slide_1_desc: "لحماية استثماراتكم، موظفيكم ومسؤوليتكم القانونية، نوفر لكم باقات تأمينية شاملة ومصممة خصيصاً لمقاولاتكم بمراكش.",
      hero_slide_1_btn: "اكتشف عروض المقاولات",

      hero_slide_2_title: "تأمين السيارات والدراجات النارية",
      hero_slide_2_desc: "استفيدوا من تغطية شاملة لجميع الأخطار مع المساعدة 24/7 وخدمة القطر من 0 كلم فوراً بمراكش وكافة جهات المملكة.",
      hero_slide_2_btn: "طلب تسعيرة سيارة",

      hero_slide_3_title: "حماية السكن مع عرض هابيتاسور",
      hero_slide_3_desc: "حماية مسكنكم وعائلتكم ضد تقلبات الحياة: أضرار المياه، السرقة، الحريق والكوارث الطبيعية مع تأمين أكسا المعتمد.",
      hero_slide_3_btn: "تأمين منزلي أو مسكني",

      // Missions & Valeurs
      mv_title: "المهام <span class=\"mv-ampersand\">&amp;</span> القيم",
      mv_lead: "تتمثل مهمة أكسا المغرب في تمكين زبنائها من العيش بثقة وطمأنينة عبر حمايتهم من تقلبات الحياة اليومية وتحديات المستقبل. <strong>وترتكز قيمها الأساسية على:</strong>",
      mv_val_1: "القرب والإنصات المستمر للزبناء",
      mv_val_2: "الابتكار الرقمي في خدمة المؤمن له",
      mv_val_3: "الشفافية الكاملة وبناء الثقة",
      mv_val_4: "التميز التشغيلي وجودة التعويض",
      mv_val_5: "الالتزام الإنساني والمسؤولية المجتمعية",
      mv_outro: "من خلال باقاتها وخدماتها المتميزة، تسعى أكسا المغرب إلى تقديم <strong>حماية مستدامة تتكيف مع أساليب الحياة الحديثة وتلبي متطلبات اليوم والمستقبل.</strong>",

      // Rubrique Présentation Agence Echkili (index.html)
      sim_kicker: "تأمينات شكيلـي",
      sim_title: "وكالة عامة رائدة للتأمين في المغرب .",
      sim_desc: "شريككم الاستراتيجي والأمثل لإدارة كافة عقود التأمين الخاصة بكم أو بمقاولتكم ومؤسستكم في مدينة مراكش.",
      sim_accident_title: "في حالة وقوع حادث",
      sim_accident_more: "المزيد من التفاصيل",
      sim_accident_read_more: "قراءة المزيد...",
      sim_accident_reduce: "تصغير",
      sim_accident_lead: "<strong>تأمينات شكيلـي</strong> ترافقكم خطوة بخطوة في جميع الإجراءات وتصريح الحوادث",
      sim_accident_body: "في حالة حادث سير أو مطالبة بتعويض، تضع وكالتنا العامة أكسا بمراكش رهن إشارتكم المساعدة 24/7، والتسجيل الفوري للمعاينة، وشبكتنا الواسعة من الخبراء وورشات الإصلاح المعتمدة.",
      sim_accident_tel: "مصلحة الحوادث والنجدة : 05 25 36 30 61",

      // Solutions Section (index.html & offres.html)
      sol_title_1: "حلول التأمين للأفراد",
      sol_title_2: "والمقاولات",
      tab_particuliers: "تأمين الأفراد (6)",
      tab_pros: "المقاولات والمهنيون (6)",
      tab_all: "جميع الحلول (12)",
      card_btn_decouvrir: "اكتشف العرض",

      // FAQ Section (index.html)
      faq_tag: "الأسئلة الشائعة",
      faq_title: "الأسئلة الأكثر تداولاً",
      faq_sub: "إليكم إجابات دقيقة وشاملة على استفساراتكم المتعلقة بمختلف عقود التأمين بمراكش.",
      faq_q1: "ما هي الوثائق الأساسية والضرورية لتأمين سيارة أو دراجة نارية ؟",
      faq_a1: "للاكتتاب في تأمين سيارة أو دراجة نارية، يجب الإدلاء بالبطاقة الرمادية الأصلية (أو توصيل التغيير)، رخصة السياقة للسائق الرئيسي، بطاقة التعريف الوطنية (CIN) وشهادة التأمين السابقة للاستفادة من تخفيض البونيس.",
      faq_q2: "كيف تعمل خدمة النجدة والمساعدة 24/7 عند وقوع عطل بمراكش أو على الطريق ؟",
      faq_a2: "بمجرد الاتصال برقم النجدة المذكور في شهادة التأمين (05 25 36 30 61 أو 06 67 76 21 24)، يتم توجيه شاحنة القطر فوراً إلى مكان تواجدكم. وحسب عقدكم، تستفيدون من الإصلاح الفوري، القطر إلى أقرب ورشة معتمدة، والإرجاع وتوفير سيارة بديلة.",
      faq_q3: "هل تأمين حوادث الشغل (AT) إجباري قانوناً للمقاولات والأنشطة المهنية ؟",
      faq_a3: "نعم، في المغرب يعد الاكتتاب في تأمين حوادث الشغل والأمراض المهنية التزاماً قانونياً صارماً على كل مشغل ومقاولة، مهما كان عدد الأجراء المصرح بهم (وفقاً لمدونة التأمينات والقانون 18-12).",
      faq_q4: "ما هي الآجال المعتادة لصرف تعويضات ملفات العلاج والتأمين الصحي ؟",
      faq_a4: "بمجرد إيداع ملف العلاج كاملاً لدى وكالتنا تأمينات شكيلـي (ورقة العلاج، الوصفة الطبية المختومة، لواصق الأدوية والتوصيلات)، تتم معالجة الملف والتحويل البنكي عادة في غضون 7 إلى 10 أيام عمل.",
      faq_q5: "كيف أحصل على تسعيرة مخصصة أو الاكتتاب عن بُعد دون الحضور إلى الوكالة ؟",
      faq_a5: "يمكنكم تعبئة نموذج التسعيرة أسفل الصفحة، الاتصال بنا هاتفياً على 05 25 36 30 61 أو إرسال وثائقكم عبر الواتساب على 06 67 76 21 24. سيتواصل معكم مستشارنا في أقل من ساعتي عمل لتقديم دراسة تسعيرية مفصلة.",

      // Contact & Coordonnées (index.html)
      contact_tag: "وكالة مراكش",
      contact_agency_name: "تأمينات شكيلـي",
      contact_agency_sub: "وكيل عام معتمد لأكسا المغرب. يسعدنا استقبالكم في مقر وكالتنا بمراكش لتقديم أفضل النصائح والعروض المناسبة.",
      contact_address_title: "عنوان الوكالة",
      contact_address_desc: "طابق أرضي محل 2، عمارة الراحة رقم 8، شارع كَمَاسة، المحاميد، مراكش",
      contact_tel_title: "الهاتف والمحمول",
      contact_tel_fixe_label: "الهاتف الثابت :",
      contact_tel_gsm_label: "المحمول / واتساب :",
      contact_email_title: "البريد الإلكتروني للاتصال",
      contact_hours_title: "مواقيت العمل",
      contact_hours_week: "من الإثنين إلى الجمعة : 08:30 - 19:00",
      contact_hours_sat: "السبت : 09:00 - 13:00",
      contact_socials_title: "صفحاتنا الرسمية",

      // Formulaire Devis & Contact (index.html)
      form_badge: "استشارة وتسعيرة مخصصة",
      form_title: "أرسلوا رسالة إلى الوكالة",
      form_subtitle: "يتم إرسال طلبكم مباشرة إلى بريدنا الإلكتروني <strong>echkili.assurances@outlook.com</strong>. يتكفل مستشار مخصص بمعالجة طلبكم والرد خلال ساعتي عمل.",
      form_nom_label: "الاسم الكامل",
      form_required: "* إجباري",
      form_nom_placeholder: "مثال: ياسين بنعلي",
      form_phone_label: "رقم الهاتف المحمول",
      form_phone_placeholder: "06 12 34 56 78",
      form_email_label: "البريد الإلكتروني",
      form_email_opt: "(اختياري للتسعيرة)",
      form_email_placeholder: "nom@exemple.ma",
      form_subject_label: "موضوع الطلب",
      form_opt_auto: "🚗 تسعيرة تأمين السيارات والدراجات",
      form_opt_hab: "🏡 تسعيرة تأمين السكن والرياض (هابيتاسور)",
      form_opt_sante: "🩺 التأمين الصحي صحتي والتكميلي دولي",
      form_opt_ent: "🏢 حلول المقاولات والمهنيين",
      form_opt_epargne: "📈 الادخار والتقاعد أكسا",
      form_opt_sinistre: "⚠️ تصريح أو متابعة حادث",
      form_opt_autre: "💬 استفسار آخر / حجز موعد",
      form_message_label: "رسالتكم أو تفاصيل الطلب",
      form_message_placeholder: "وضحوا احتياجاتكم (نوع المركبة، التغطيات المطلوبة، تفاصيل الاستفسار للوكالة)...",
      form_privacy: "<strong>حماية المعطيات :</strong> معلوماتكم مخصصة حصرياً لوكالة شكيلـي بمراكش لمعالجة طلبكم في سرية تامة وفقاً للقانون 09-08.",
      form_submit_btn: "إرسال طلبي إلى الوكالة",

      // Feedback / Modal après soumission
      feedback_title: "تم إرسال طلبكم بنجاح إلى الوكالة",
      feedback_thanks: "شكراً {nom} !",
      feedback_sent_to: "تم إرسال طلبكم بنجاح إلى بريدنا الإلكتروني <strong>echkili.assurances@outlook.com</strong>.",
      feedback_recipient: "البريد المستقبل :",
      feedback_subject: "موضوع الطلب :",
      feedback_callback: "رقم الهاتف للمعاودة :",
      feedback_your_email: "بريدكم الإلكتروني :",
      feedback_delay: "⏱ <strong>أجل المعالجة :</strong> يتولى مستشار مخصص بوكالة تأمينات شكيلـي دراسة طلبكم وإعادة الاتصال بكم خلال <strong>ساعتي عمل</strong>.",
      feedback_btn_wa: "تأكيد عبر واتساب",
      feedback_btn_email: "فتح في البريد الإلكتروني",
      feedback_urgent_note: "حاجة عاجلة؟ اتصلوا مباشرة بالوكالة :",
      feedback_btn_close: "تم، إغلاق",

      // Localisation / Carte Google Maps (index.html)
      map_badge: "موقع الوكالة والوصول",
      map_title: "زيارة مقر وكالتنا بمراكش",
      map_subtitle: "طابق أرضي محل 2، عمارة الراحة رقم 8، شارع كَمَاسة، المحاميد، مراكش — موقف سيارات مخصص للزبناء",
      map_btn_directions: "تحديد المسار على الخريطة ↗",
      map_loading: "جارٍ تحميل الخريطة التفاعلية...",
      map_pill_access: "ولوج مباشر عبر شارع كَمَاسة (المحاميد)",
      map_pill_parking: "موقف سيارات مجاني أمام الوكالة",
      map_pill_hours: "استقبال المرتفقين: الإثنين-الجمعة 08:30-19:00 / السبت 09:00-13:00",
      map_pill_assistance: "المساعدة: 05 25 36 30 61 / 06 67 76 21 24",

      // Footer
      footer_desc: "تأمينات شكيلـي وكالة عامة تمثل رسمياً شركة أكسا للتأمين المغرب بمدينة مراكش (المحاميد). حماية شاملة للأفراد والمقاولات.",
      footer_address: "طابق أرضي محل 2، عمارة الراحة رقم 8، شارع كَمَاسة، المحاميد، مراكش",
      footer_agency_link: "وكالتنا والاتصال",
      footer_missions_link: "المهام والقيم",
      footer_acaps_badge: "معتمد من ACAPS",
      footer_axa_badge: "شبكة أكسا المغرب",
      footer_follow: "تابعونا على :",
      footer_particuliers_title: "الأفراد",
      footer_pros_title: "المهنيون والمقاولات",
      footer_urgences_title: "الطوارئ وأوقات العمل",
      footer_assistance_label: "نجدة الأعطال والحوادث :",
      footer_email_label: "البريد المباشر للوكالة :",
      footer_hours_label: "مواقيت العمل بالوكالة :",
      footer_hours_week: "الإثنين - الجمعة : 08:30 - 19:00",
      footer_hours_sat: "السبت : 09:00 - 13:00",
      footer_rights: "© 2026 تأمينات شكيلـي. جميع الحقوق محفوظة. وكيل عام أكسا للتأمين المغرب.",
      footer_acaps: "اعتماد وسيط تأمين صادر عن هيئة مراقبة التأمينات والاحتياط الاجتماعي ACAPS بمقتضى مدونة التأمينات (القانون 17-99).",

      // Mobile Bottom Taskbar
      mb_home: "الرئيسية",
      mb_offers: "العروض",
      mb_call: "اتصال",
      mb_wa: "واتساب",
      mb_urgency: "طوارئ",
      back_to_top: "العودة إلى الأعلى",

      // Product Modal (Modal Fiche Produit)
      modal_tag: "ضمانة أكسا المغرب",
      modal_features_title: "الضمانات والخدمات الأساسية",
      modal_advantages_title: "مزايا شبكة أكسا وتأمينات شكيلـي بمراكش",
      modal_cta_title: "هل ترغبون في دراسة مخصصة وتسعيرة فورية؟",
      modal_cta_sub: "وكيلكم العام أكسا بمراكش يجيبكم في أقل من ساعتي عمل.",
      modal_btn_page: "عرض الصفحة المخصصة",
      modal_btn_quote: "طلب تسعيرة سريعة",
      modal_btn_wa: "تسعيرة عبر واتساب",

      // Catalogue Offres (offres.html)
      catalog_title: "دليل عروض الأفراد والمهنيين | تأمينات شكيلـي مراكش - وكيل عام أكسا",
      catalog_tag: "دليل أكسا المغرب",
      catalog_h1: "حلول الأفراد <span style=\"font-style: italic; font-weight: 400; color: #ff5252;\">و</span> المهنيين",
      catalog_lead: "مجموع عقود تأمين أكسا المغرب المصممة لحماية حياتكم اليومية، وتأمين ممتلكاتكم وضمان استمرارية أنشطتكم بمراكش.",
      catalog_breadcrumb_home: "الرئيسية",
      catalog_breadcrumb_title: "دليل حلول وعروض التأمين",

      // Tableau Comparatif (offres.html)
      compare_badge: "دليل مستويات التغطية",
      compare_title: "مقارنة صيغ وباقات أكسا",
      compare_th_guarantees: "الضمانات والخدمات",
      compare_th_essential: "الصيغة الأساسية",
      compare_th_comfort: "صيغة الراحة",
      compare_th_serenity: "صيغة الطمأنينة بلس",
      compare_r1_name: "المسؤولية المدنية والدفاع",
      compare_r1_v1: "مشمول (إجباري)",
      compare_r1_v2: "مشمول (سقف مرتفع)",
      compare_r1_v3: "مشمول (سقف مثالي)",
      compare_r2_name: "المساعدة والنجدة 24/7",
      compare_r2_v1: "ابتداء من 50 كلم",
      compare_r2_v2: "0 كلم عند السكن",
      compare_r2_v3: "0 كلم VIP + سيارة أجرة",
      compare_r3_name: "كسر الزجاج والمصابيح",
      compare_r3_v1: "اختياري",
      compare_r3_v2: "مشمول بدون اقتطاع",
      compare_r3_v3: "مشمول بقيمة الجديد",
      compare_r4_name: "سيارة بديلة مؤقتة",
      compare_r4_v1: "—",
      compare_r4_v2: "حتى 7 أيام",
      compare_r4_v3: "حتى 15 يوماً من الإعارة",
      compare_r5_name: "السرقة، الحريق والكوارث الطبيعية",
      compare_r5_v1: "—",
      compare_r5_v2: "مشمول مع اقتطاع",
      compare_r5_v3: "جميع الأخطار بدون تقادم",
      compare_r6_name: "مستشار مخصص من تأمينات شكيلـي",
      compare_r6_v1: "نعم",
      compare_r6_v2: "نعم",
      compare_r6_v3: "نعم (خط واتساب مباشر)",

      // Bannière CTA (offres.html)
      cta_banner_title: "هل تحتارون بين عدة صيغ وعروض؟",
      cta_banner_lead: "تفضلوا بزيارة مستشارينا بوكالة تأمينات شكيلـي (عمارة الراحة رقم 8، شارع كَمَاسة، المحاميد) للحصول على مقارنة مجانية ومخصصة في أقل من 15 دقيقة.",
      cta_banner_wa: "إجراء استشارة عبر واتساب (06 67 76 21 24)",
      cta_banner_call: "اتصل بالوكالة",

      // Page Produit (produit.html)
      prod_breadcrumb_home: "الرئيسية",
      prod_breadcrumb_offers: "العروض",
      prod_quote_btn: "طلب تسعيرة فورية",
      prod_wa_btn: "تواصل عبر واتساب",
      prod_call_btn: "05 25 36 30 61",
      prod_presentation_title: "تقديم العقد والضمانات",
      prod_guarantees_title: "الضمانات والخدمات المشمولة في العقد",
      prod_why_heading: "لماذا تختارون الاكتتاب لدى تأمينات شكيلـي بمراكش؟",
      prod_why_desc: "بصفتنا وكيلاً عاماً معتمداً لأكسا المغرب بمراكش (عمارة الراحة رقم 8، شارع كَمَاسة، المحاميد)، تضمن لكم وكالتنا تواصلاً مباشراً ومعالجة فورية للملفات دون وسطاء.",
      prod_faq_title: "الأسئلة الشائعة حول هذا العقد",
      prod_quote_box_title: "تسعيرة سريعة ومجانية",
      prod_quote_box_sub: "يتم إرسال طلبكم مباشرة إلى <strong>echkili.assurances@outlook.com</strong>.",
      prod_quote_name_label: "الاسم الكامل *",
      prod_quote_name_placeholder: "مثال: محمد العلمي",
      prod_quote_tel_label: "رقم الهاتف المحمول (واتساب) *",
      prod_quote_tel_placeholder: "06 12 34 56 78",
      prod_quote_email_label: "البريد الإلكتروني",
      prod_quote_email_placeholder: "nom@exemple.ma",
      prod_quote_details_label: "تفاصيل حول طلبكم",
      prod_quote_details_placeholder: "حدد متطلباتك بالتفصيل...",
      prod_quote_submit: "طلب التسعيرة المجانية",
      prod_quote_success_title: "تم إرسال طلبكم بنجاح إلى الوكالة!",
      prod_quote_success_text: "تم إرسال طلبكم مباشرة إلى <strong>echkili.assurances@outlook.com</strong>. سيتواصل معكم مستشار الوكالة في غضون ساعتي عمل. كما يمكنكم التأكيد الفوري عبر واتساب:",
      prod_quote_wa_confirm: "تأكيد عبر واتساب"
    },

    en: {
      site_title: "Assurances Echkili | AXA General Agent Marrakech",
      
      // Topbar
      top_office: "Our Office",
      top_office_desc: "Ground Floor Shop 2, Imm Erraha N°8<br>Guemassa Ave, M'hamid, Marrakech",
      top_write: "Email Us",
      top_call: "Call Us",
      top_fixe: "Office: 05 25 36 30 61",
      top_gsm: "Mobile / WA: 06 67 76 21 24",

      // Navigation
      nav_home: "Home",
      nav_echkili: "Assurances Echkili",
      nav_missions: "Missions & Values",
      nav_agency: "Echkili Agency",
      nav_agency_alt: "Our Agency",
      nav_contact: "Agency & Contact",
      nav_contact_alt: "Location & Contact",
      nav_book: "Book an Appointment",
      nav_sinistres: "Claims Assistance (24/7)",
      nav_particuliers: "Personal",
      nav_pros: "Commercial & Pro",
      nav_entreprises: "Enterprises",
      nav_auto: "Car & Motorcycle Insurance",
      nav_habitation: "Home & Riad (HABITASSUR)",
      nav_sante: "Sehassur Health & Global",
      nav_epargne: "Savings & Retirement (Futuris II)",
      nav_prevoyance: "Accident & Family Protection",
      nav_voyage: "Travel Insurance & Schengen Visa",
      nav_all_particuliers: "All Personal Policies",
      nav_multirisque_pro: "Business Multi-Peril",
      nav_rc_pro: "Commercial General Liability (RC Pro)",
      nav_at_mp: "Workplace Accidents (Law 18-12)",
      nav_flotte: "Commercial Fleet Insurance",
      nav_all_pros: "All Commercial Policies",
      nav_multirisque_indus: "Industrial All Risks & Property Damage",
      nav_flotte_ent: "Corporate Fleet Insurance",
      nav_sante_groupe: "Group Health & Employee Benefits",
      nav_trc: "Contractors All Risks (CAR BTP)",
      nav_at_trajet: "Workplace & Commute Accidents (18-12)",
      nav_rc_decennale: "Decennial Liability & D&O Insurance",
      nav_all_ent: "Corporate & Large Risks Solutions",
      nav_devis: "Quick Quote",
      nav_access: "Contact & Location",
      nav_quick_call: "Call",
      nav_menu_btn: "MENU",

      // Hero Slider (index.html)
      hero_slide_0_title: "Your AXA Agency in Marrakech",
      hero_slide_0_desc: "A dedicated team of experts at your service at ECHKILI ASSURANCES, Imm Erraha N°8, Guemassa Ave, M'hamid, Marrakech. Personalized advice and immediate response.",
      hero_slide_0_btn: "Book an Appointment",

      hero_slide_1_title: "Are you a business or professional?",
      hero_slide_1_desc: "Protect your investments, team, and liabilities with comprehensive packages tailored to your commercial needs in Marrakech.",
      hero_slide_1_btn: "Discover Business Plans",

      hero_slide_2_title: "Car & Motorcycle Insurance",
      hero_slide_2_desc: "Comprehensive all-risks cover, 24/7 roadside assistance and 0-km immediate towing across Marrakech and Morocco.",
      hero_slide_2_btn: "Request a Car Quote",

      hero_slide_3_title: "Home Insurance HABITASSUR",
      hero_slide_3_desc: "Keep your home, apartment, villa or riad protected against water damage, theft, fire, and natural disasters.",
      hero_slide_3_btn: "Protect My Home",

      // Missions & Valeurs
      mv_title: "Missions <span class=\"mv-ampersand\">&amp;</span> Values",
      mv_lead: "AXA Morocco's mission is to empower clients to live with confidence by protecting them against everyday unforeseen events and tomorrow's risks. <strong>Its core values rely on:</strong>",
      mv_val_1: "Customer proximity and active listening",
      mv_val_2: "Innovation serving user convenience",
      mv_val_3: "Complete transparency and trust",
      mv_val_4: "Operational excellence and fast claims",
      mv_val_5: "Human and societal commitment",
      mv_outro: "Through its solutions and services, AXA Morocco delivers <strong>sustainable protection tailored to contemporary lifestyles and emerging challenges.</strong>",

      // Rubrique Présentation Agence Echkili (index.html)
      sim_kicker: "ECHKILI ASSURANCES",
      sim_title: "A leading general insurance agency in Morocco .",
      sim_desc: "Your privileged and trusted insurance advisor for your personal policies or protecting the enterprise or institution you manage in Marrakech.",
      sim_accident_title: "In Case of an Accident",
      sim_accident_more: "Learn More",
      sim_accident_read_more: "Read more...",
      sim_accident_reduce: "Collapse",
      sim_accident_lead: "<strong>ECHKILI ASSURANCES</strong> guides and supports you through every step of your claim",
      sim_accident_body: "In the event of an accident or loss, our AXA general agency in Marrakech provides 24/7 assistance, instant claim declaration processing, and access to approved repair shops.",
      sim_accident_tel: "Claims Assistance: 05 25 36 30 61",

      // Solutions Section (index.html & offres.html)
      sol_title_1: "Insurance Solutions for Individuals",
      sol_title_2: "&amp; Businesses",
      tab_particuliers: "Personal Insurance (6)",
      tab_pros: "Commercial &amp; Business (6)",
      tab_all: "All Solutions (12)",
      card_btn_decouvrir: "DISCOVER PLAN",

      // FAQ Section (index.html)
      faq_tag: "FAQ",
      faq_title: "Frequently Asked Questions",
      faq_sub: "Find clear answers to the most common questions about our insurance policies in Marrakech.",
      faq_q1: "What documents are required to insure a car or motorcycle in Morocco?",
      faq_a1: "To purchase auto or motorcycle insurance, you need your original vehicle registration document (carte grise), the primary driver's valid driving license, Moroccan National ID card (CIN), and your previous insurance certificate if eligible for a no-claims bonus.",
      faq_q2: "How does 24/7 breakdown assistance operate in Marrakech and nationwide?",
      faq_a2: "By calling our emergency hotline printed on your policy (05 25 36 30 61 or 06 67 76 21 24), a certified tow truck is dispatched immediately. Depending on your cover, you enjoy on-site repair, 0-km towing to the nearest AXA garage, and a courtesy loan vehicle.",
      faq_q3: "Is Workplace Accident (AT) insurance mandatory for companies in Morocco?",
      faq_a3: "Yes, in Morocco, taking out insurance covering occupational accidents and work-related diseases is a strict legal obligation for every employer, regardless of headcount (Moroccan Insurance Code and Law 18-12).",
      faq_q4: "What are the standard processing times for health claim reimbursements?",
      faq_a4: "Once your complete medical file is submitted to our Assurances Echkili agency (treatment claim form, stamped prescription, drug barcodes, and receipts), direct bank reimbursement is typically issued within 7 to 10 business days.",
      faq_q5: "How can I obtain a personalized quote or sign up without visiting the branch?",
      faq_a5: "You can submit the quote form below, reach us by phone at 05 25 36 30 61, or send your documents via WhatsApp to 06 67 76 21 24. An advisor will get back to you within 2 business hours with a clear, tailored proposal.",

      // Contact & Coordonnées (index.html)
      contact_tag: "Marrakech Agency",
      contact_agency_name: "Assurances Echkili",
      contact_agency_sub: "General Agent for AXA Morocco. Visit our agency in Marrakech for personalized advice and warm customer service.",
      contact_address_title: "Agency Location",
      contact_address_desc: "Ground Floor Shop 2, Imm Erraha N°8, Guemassa Ave, M'hamid, Marrakech",
      contact_tel_title: "Phone & Mobile",
      contact_tel_fixe_label: "Landline:",
      contact_tel_gsm_label: "Mobile / WA:",
      contact_email_title: "Contact Email",
      contact_hours_title: "Opening Hours",
      contact_hours_week: "Monday to Friday: 08:30 AM - 07:00 PM",
      contact_hours_sat: "Saturday: 09:00 AM - 01:00 PM",
      contact_socials_title: "Official Social Channels",

      // Formulaire Devis & Contact (index.html)
      form_badge: "Advisory & Custom Quote",
      form_title: "Send a Message to the Agency",
      form_subtitle: "Your request is sent directly to our email <strong>echkili.assurances@outlook.com</strong>. A dedicated advisor will handle your inquiry within 2 business hours.",
      form_nom_label: "Full Name",
      form_required: "* Required",
      form_nom_placeholder: "E.g. John Doe",
      form_phone_label: "Phone Number",
      form_phone_placeholder: "06 12 34 56 78",
      form_email_label: "Email Address",
      form_email_opt: "(Optional for quote)",
      form_email_placeholder: "name@example.com",
      form_subject_label: "Subject of Request",
      form_opt_auto: "🚗 Car & Motorcycle Insurance Quote",
      form_opt_hab: "🏡 Home Insurance Quote (HABITASSUR)",
      form_opt_sante: "🩺 Health Insurance Sehassur & Global",
      form_opt_ent: "🏢 Commercial & Corporate Solutions",
      form_opt_epargne: "📈 AXA Savings & Retirement",
      form_opt_sinistre: "⚠️ Claims Declaration / Follow-up",
      form_opt_autre: "💬 Other Inquiry / Appointment",
      form_message_label: "Your Message or Details",
      form_message_placeholder: "Specify your needs (vehicle type, desired coverage, questions for the agency)...",
      form_privacy: "<strong>Data protection:</strong> Your information is strictly reserved for Echkili Agency Marrakech to process your request in accordance with Law 09-08.",
      form_submit_btn: "Submit My Request to the Agency",

      // Feedback / Modal après soumission
      feedback_title: "Request Transmitted to Echkili Agency",
      feedback_thanks: "Thank you {nom}!",
      feedback_sent_to: "Your request has been successfully transmitted to our email <strong>echkili.assurances@outlook.com</strong>.",
      feedback_recipient: "Recipient Email:",
      feedback_subject: "Request Subject:",
      feedback_callback: "Callback Phone:",
      feedback_your_email: "Your Contact Email:",
      feedback_delay: "⏱ <strong>Processing Time:</strong> A dedicated Echkili advisor processes your request and will contact you within <strong>2 business hours</strong>.",
      feedback_btn_wa: "Notify on WhatsApp",
      feedback_btn_email: "Open in Outlook / Email",
      feedback_urgent_note: "Urgent need? Contact the agency directly:",
      feedback_btn_close: "Understood & Close",

      // Localisation / Carte Google Maps (index.html)
      map_badge: "Location & Access Map",
      map_title: "Visit Our Agency in Marrakech",
      map_subtitle: "Ground floor shop 2, Imm Erraha No. 8, Guemassa Ave, M'hamid, Marrakech — Reserved parking for clients",
      map_btn_directions: "Get Directions ↗",
      map_loading: "Loading interactive map...",
      map_pill_access: "Direct access via Guemassa Avenue (M'hamid)",
      map_pill_parking: "Free parking in front of agency",
      map_pill_hours: "Walk-in Hours: Mon-Fri 08:30-19:00 / Sat 09:00-13:00",
      map_pill_assistance: "Assistance: 05 25 36 30 61 / 06 67 76 21 24",

      // Footer
      footer_desc: "Assurances Echkili is an official General Insurance Agency representing AXA Assurance Morocco in Marrakech (M'hamid). Complete protection for families and businesses.",
      footer_address: "Ground Floor Shop 2, Imm Erraha No. 8, Guemassa Ave, M'hamid, Marrakech",
      footer_agency_link: "Our Agency & Contact",
      footer_missions_link: "Missions & Values",
      footer_acaps_badge: "ACAPS Licensed",
      footer_axa_badge: "AXA Morocco Network",
      footer_follow: "Follow Us:",
      footer_particuliers_title: "Personal",
      footer_pros_title: "Commercial & Business",
      footer_urgences_title: "Emergencies & Hours",
      footer_assistance_label: "Breakdown / Accident Assistance:",
      footer_email_label: "Direct Agency Email:",
      footer_hours_label: "Agency Opening Hours:",
      footer_hours_week: "Mon - Fri: 08:30 AM - 07:00 PM",
      footer_hours_sat: "Saturday: 09:00 AM - 01:00 PM",
      footer_rights: "© 2026 Assurances Echkili. All rights reserved. AXA Assurance Morocco General Agent.",
      footer_acaps: "Insurance Intermediary License granted by ACAPS under Moroccan Insurance Code (Law 17-99).",

      // Mobile Bottom Taskbar
      mb_home: "Home",
      mb_offers: "Offers",
      mb_call: "Call",
      mb_wa: "WhatsApp",
      mb_urgency: "Urgency",
      back_to_top: "Back to top",

      // Product Modal (Modal Fiche Produit)
      modal_tag: "AXA Morocco Guarantee",
      modal_features_title: "Key Guarantees & Covered Benefits",
      modal_advantages_title: "Advantages of AXA Morocco & Assurances Echkili",
      modal_cta_title: "Need an Immediate Custom Quote?",
      modal_cta_sub: "Your AXA General Agent in Marrakech responds within 2 business hours.",
      modal_btn_page: "View Dedicated Page",
      modal_btn_quote: "Quick Quote Request",
      modal_btn_wa: "WhatsApp Express Quote",

      // Catalogue Offres (offres.html)
      catalog_title: "Personal & Commercial Insurance Offers | Assurances Echkili Marrakech - AXA General Agent",
      catalog_tag: "AXA Morocco Catalog",
      catalog_h1: "Personal <span style=\"font-style: italic; font-weight: 400; color: #ff5252;\">&amp;</span> Commercial Solutions",
      catalog_lead: "Complete portfolio of AXA Assurance Morocco contracts engineered to protect your daily life, secure your assets, and sustain your enterprise in Marrakech.",
      catalog_breadcrumb_home: "Home",
      catalog_breadcrumb_title: "Insurance Solutions Catalog",

      // Tableau Comparatif (offres.html)
      compare_badge: "Coverage Levels Guide",
      compare_title: "Comparison of AXA Formulas",
      compare_th_guarantees: "Guarantees & Benefits",
      compare_th_essential: "Essential Formula",
      compare_th_comfort: "Comfort Formula",
      compare_th_serenity: "Serenity Plus Formula",
      compare_r1_name: "Civil Liability & Legal Defense",
      compare_r1_v1: "Included (Legal)",
      compare_r1_v2: "Included (High Cap)",
      compare_r1_v3: "Included (Optimal Cap)",
      compare_r2_name: "24/7 Roadside Assistance",
      compare_r2_v1: "From 50 km",
      compare_r2_v2: "0 km at home",
      compare_r2_v3: "0 km VIP + Taxi link",
      compare_r3_name: "Glass & Optics Breakage",
      compare_r3_v1: "Optional",
      compare_r3_v2: "Included without deductible",
      compare_r3_v3: "Included new replacement value",
      compare_r4_name: "Replacement Vehicle",
      compare_r4_v1: "—",
      compare_r4_v2: "Up to 7 days",
      compare_r4_v3: "Up to 15 days loan",
      compare_r5_name: "Theft, Fire & Natural Hazards",
      compare_r5_v1: "—",
      compare_r5_v2: "Included with deductible",
      compare_r5_v3: "All risks without depreciation",
      compare_r6_name: "Dedicated Assurances Echkili Advisor",
      compare_r6_v1: "Yes",
      compare_r6_v2: "Yes",
      compare_r6_v3: "Yes (Direct WhatsApp line)",

      // Bannière CTA (offres.html)
      cta_banner_title: "Hesitating Between Several Formulas?",
      cta_banner_lead: "Visit our advisors at Assurances Echkili agency (Imm Erraha No. 8, Avenue Guemassa, M'hamid) for a free and personalized comparison in under 15 minutes.",
      cta_banner_wa: "Chat on WhatsApp (06 67 76 21 24)",
      cta_banner_call: "Call Agency",

      // Page Produit (produit.html)
      prod_breadcrumb_home: "Home",
      prod_breadcrumb_offers: "Offers",
      prod_quote_btn: "Request Express Quote",
      prod_wa_btn: "Chat on WhatsApp",
      prod_call_btn: "05 25 36 30 61",
      prod_presentation_title: "Contract & Coverage Overview",
      prod_guarantees_title: "Key Guarantees & Covered Benefits",
      prod_why_heading: "Why Choose Assurances Echkili in Marrakech?",
      prod_why_desc: "As an authorized AXA Morocco General Agent in Marrakech (Imm Erraha No. 8, Avenue Guemassa, M'hamid), our agency guarantees direct, personalized service without call-center intermediaries.",
      prod_faq_title: "Frequently Asked Questions on This Policy",
      prod_quote_box_title: "Free Express Quote",
      prod_quote_box_sub: "Your request is sent directly to <strong>echkili.assurances@outlook.com</strong>.",
      prod_quote_name_label: "Your Full Name *",
      prod_quote_name_placeholder: "E.g. John Smith",
      prod_quote_tel_label: "Mobile Phone (WhatsApp) *",
      prod_quote_tel_placeholder: "E.g. 06 12 34 56 78",
      prod_quote_email_label: "Email Address",
      prod_quote_email_placeholder: "E.g. name@example.com",
      prod_quote_details_label: "Details on your requirements",
      prod_quote_details_placeholder: "Specify your request...",
      prod_quote_submit: "Get My Free Quote",
      prod_quote_success_title: "Request Transmitted to Agency!",
      prod_quote_success_text: "Your quote has been sent to <strong>echkili.assurances@outlook.com</strong>. An advisor will contact you within 2 business hours. You can also confirm instantly via WhatsApp:",
      prod_quote_wa_confirm: "Confirm on WhatsApp"
    }
  };

  function getStoredLang() {
    try {
      const saved = localStorage.getItem('echkili_site_lang') || localStorage.getItem('echkili_lang');
      if (saved && (saved === 'fr' || saved === 'ar' || saved === 'en')) {
        return saved;
      }
    } catch (e) {}
    return 'fr';
  }

  function applyLanguage(lang) {
    if (!TRANSLATIONS[lang]) lang = 'fr';
    try {
      localStorage.setItem('echkili_site_lang', lang);
      localStorage.setItem('echkili_lang', lang);
    } catch (e) {}

    const htmlEl = document.documentElement;
    htmlEl.lang = lang;
    htmlEl.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    document.body.classList.remove('lang-fr', 'lang-ar', 'lang-en');
    document.body.classList.add('lang-' + lang);

    const dict = TRANSLATIONS[lang];

    // Document title (if not a specific product page)
    if (!document.querySelector('.product-hero-lite') && dict.site_title) {
      if (window.location.pathname.includes('offres.html')) {
        document.title = dict.catalog_title || dict.site_title;
      } else {
        document.title = dict.site_title;
      }
    }

    // 1. Mise à jour de tous les éléments balisés data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // 2. Mise à jour de tous les éléments balisés data-i18n-html
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // 3. Mise à jour des placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // 4. Mise à jour des titres (attribut title)
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (dict[key] !== undefined) {
        el.setAttribute('title', dict[key]);
      }
    });

    // 5. Boutons de choix de langue (active state & aria)
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === lang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    // 6. Application intelligente sur tous les sélecteurs de toutes les pages
    applyFullSiteSelectors(dict, lang);

    // 7. Émission de l'événement global
    window.dispatchEvent(new CustomEvent('echkiliLanguageChanged', { detail: { lang, dict } }));
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }

  function applyFullSiteSelectors(dict, lang) {
    // --- TOPBAR BRAND HEADER ---
    const officeHeader = document.querySelector('.header-contact-item:nth-child(1) .header-contact-title');
    if (officeHeader) officeHeader.textContent = dict.top_office;
    const officeSub = document.querySelector('.header-contact-item:nth-child(1) .header-contact-sub');
    if (officeSub) officeSub.innerHTML = dict.top_office_desc;

    const emailHeader = document.querySelector('.header-contact-item:nth-child(2) .header-contact-title');
    if (emailHeader) emailHeader.textContent = dict.top_write;

    const callHeader = document.querySelector('.header-contact-item:nth-child(3) .header-contact-title');
    if (callHeader) callHeader.textContent = dict.top_call;

    const callSub = document.querySelector('.header-contact-item:nth-child(3) .header-contact-sub');
    if (callSub) {
      callSub.innerHTML = `<a href="tel:+212525363061" title="Appeler le fixe">${dict.top_fixe}</a><br><a href="tel:+212667762124" title="Appeler le GSM / WhatsApp">${dict.top_gsm}</a>`;
    }

    // --- NAVIGATION BAR ---
    const navLinkHome = document.querySelector('#navMenuList > .nav-menu-item:first-child > a');
    if (navLinkHome) navLinkHome.textContent = dict.nav_home;

    const navLinkEchkili = document.getElementById('navLinkEchkili');
    if (navLinkEchkili) {
      navLinkEchkili.innerHTML = `${dict.nav_echkili} <span class="nav-plus">+</span>`;
    }

    const navLinkParticuliers = document.getElementById('navLinkParticuliers');
    if (navLinkParticuliers) {
      navLinkParticuliers.innerHTML = `${dict.nav_particuliers} <span class="nav-plus">+</span>`;
    }

    const navLinkPros = document.getElementById('navLinkPros');
    if (navLinkPros) {
      navLinkPros.innerHTML = `${dict.nav_pros} <span class="nav-plus">+</span>`;
    }

    const navLinkEntreprises = document.getElementById('navLinkEntreprises');
    if (navLinkEntreprises) {
      navLinkEntreprises.innerHTML = `${dict.nav_entreprises} <span class="nav-plus">+</span>`;
    }

    // Dropdown Echkili
    const echkiliLinks = document.querySelectorAll('#navDropdownEchkili .nav-dropdown-link span');
    if (echkiliLinks.length >= 3) {
      if (echkiliLinks[0]) echkiliLinks[0].textContent = dict.nav_missions;
      if (echkiliLinks[1]) echkiliLinks[1].textContent = dict.nav_agency;
      if (echkiliLinks[2]) echkiliLinks[2].textContent = dict.nav_contact;
    }
    const echkiliSinistre = document.querySelector('#navDropdownEchkili .nav-dropdown-link-danger span');
    if (echkiliSinistre) echkiliSinistre.textContent = dict.nav_sinistres;

    // Dropdown Particuliers
    const partLinks = document.querySelectorAll('#navDropdownParticuliers .nav-dropdown-link span');
    if (partLinks.length >= 6) {
      if (partLinks[0]) partLinks[0].textContent = dict.nav_auto;
      if (partLinks[1]) partLinks[1].textContent = dict.nav_habitation;
      if (partLinks[2]) partLinks[2].textContent = dict.nav_sante;
      if (partLinks[3]) partLinks[3].textContent = dict.nav_epargne;
      if (partLinks[4]) partLinks[4].textContent = dict.nav_prevoyance;
      if (partLinks[5]) partLinks[5].textContent = dict.nav_voyage;
    }
    const partMore = document.querySelector('#navDropdownParticuliers .nav-dropdown-link-more span');
    if (partMore) partMore.textContent = dict.nav_all_particuliers;

    // Dropdown Pros
    const proLinks = document.querySelectorAll('#navDropdownPros .nav-dropdown-link span');
    if (proLinks.length >= 4) {
      if (proLinks[0]) proLinks[0].textContent = dict.nav_multirisque_pro;
      if (proLinks[1]) proLinks[1].textContent = dict.nav_rc_pro;
      if (proLinks[2]) proLinks[2].textContent = dict.nav_at_mp;
      if (proLinks[3]) proLinks[3].textContent = dict.nav_flotte;
    }
    const proMore = document.querySelector('#navDropdownPros .nav-dropdown-link-more span');
    if (proMore) proMore.textContent = dict.nav_all_pros;

    // Dropdown Entreprises
    const entLinks = document.querySelectorAll('#navDropdownEntreprises .nav-dropdown-link span');
    if (entLinks.length >= 6) {
      if (entLinks[0]) entLinks[0].textContent = dict.nav_multirisque_indus;
      if (entLinks[1]) entLinks[1].textContent = dict.nav_flotte_ent;
      if (entLinks[2]) entLinks[2].textContent = dict.nav_sante_groupe;
      if (entLinks[3]) entLinks[3].textContent = dict.nav_trc;
      if (entLinks[4]) entLinks[4].textContent = dict.nav_at_trajet;
      if (entLinks[5]) entLinks[5].textContent = dict.nav_rc_decennale;
    }
    const entMore = document.querySelector('#navDropdownEntreprises .nav-dropdown-link-more span');
    if (entMore) entMore.textContent = dict.nav_all_ent;

    // Contact link in nav
    const lastNavLink = document.querySelector('#navMenuList > .nav-menu-item:last-child > a');
    if (lastNavLink) lastNavLink.textContent = dict.nav_access;

    // Mobile quick actions
    const mobileQuickCallSpan = document.querySelector('.mobile-nav-quick-call span');
    if (mobileQuickCallSpan) mobileQuickCallSpan.textContent = dict.nav_quick_call;

    const mobileMenuToggleSpan = document.querySelector('.mobile-nav-toggle span');
    if (mobileMenuToggleSpan) mobileMenuToggleSpan.textContent = dict.nav_menu_btn;

    // --- HERO BANNER (index.html) ---
    const headlineEl = document.getElementById('heroSlideHeadline');
    const descEl = document.getElementById('heroSlideDesc');
    const btnEl = document.getElementById('heroSlideBtn');
    if (headlineEl && descEl && btnEl) {
      const activeSlide = document.querySelector('.hero-slide-item.active');
      let slideIdx = 0;
      if (activeSlide) {
        slideIdx = parseInt(activeSlide.getAttribute('data-slide-index') || '0', 10);
      }
      if (dict[`hero_slide_${slideIdx}_title`]) {
        headlineEl.innerHTML = dict[`hero_slide_${slideIdx}_title`];
      }
      if (dict[`hero_slide_${slideIdx}_desc`]) {
        descEl.innerHTML = dict[`hero_slide_${slideIdx}_desc`];
      }
      if (dict[`hero_slide_${slideIdx}_btn`]) {
        btnEl.textContent = dict[`hero_slide_${slideIdx}_btn`];
      }
    }

    // --- MISSIONS & VALEURS ---
    const mvMainTitle = document.querySelector('.mv-main-title');
    if (mvMainTitle) mvMainTitle.innerHTML = dict.mv_title;

    const mvLeadText = document.querySelector('.mv-lead-text');
    if (mvLeadText) mvLeadText.innerHTML = dict.mv_lead;

    const mvCardTitles = document.querySelectorAll('.mv-card .mv-card-title');
    if (mvCardTitles.length >= 5) {
      if (mvCardTitles[0]) mvCardTitles[0].textContent = dict.mv_val_1;
      if (mvCardTitles[1]) mvCardTitles[1].textContent = dict.mv_val_2;
      if (mvCardTitles[2]) mvCardTitles[2].textContent = dict.mv_val_3;
      if (mvCardTitles[3]) mvCardTitles[3].textContent = dict.mv_val_4;
      if (mvCardTitles[4]) mvCardTitles[4].textContent = dict.mv_val_5;
    }

    const mvFooterText = document.querySelector('.mv-footer-text');
    if (mvFooterText) mvFooterText.innerHTML = dict.mv_outro;

    // --- RUBRIQUE AGENCE ECHKILI (index.html) ---
    const simKicker = document.querySelector('.similair-kicker');
    if (simKicker) simKicker.textContent = dict.sim_kicker;

    const simTitle = document.querySelector('.similair-title');
    if (simTitle) simTitle.textContent = dict.sim_title;

    const simDesc = document.querySelector('.similair-desc');
    if (simDesc) simDesc.textContent = dict.sim_desc;

    const simAccidentTitle = document.querySelector('.accident-card-title-wrap span, .similair-accident-title');
    if (simAccidentTitle) simAccidentTitle.textContent = dict.sim_accident_title;

    const simAccidentMore = document.querySelector('.accident-card-more-label, .similair-accident-more');
    if (simAccidentMore) simAccidentMore.textContent = dict.sim_accident_more;

    const simAccidentLead = document.querySelector('.accident-card-lead, .similair-accident-lead');
    if (simAccidentLead) simAccidentLead.innerHTML = dict.sim_accident_lead;

    const simAccidentBody = document.querySelector('#accidentDropdownDetails p, .similair-accident-body');
    if (simAccidentBody) simAccidentBody.textContent = dict.sim_accident_body;

    const simAccidentTel = document.querySelector('#accidentDropdownDetails a, .similair-accident-tel span');
    if (simAccidentTel) {
      const svg = simAccidentTel.querySelector('svg');
      simAccidentTel.innerHTML = '';
      if (svg) simAccidentTel.appendChild(svg);
      simAccidentTel.append(` ${dict.sim_accident_tel}`);
    }

    // --- SOLUTIONS & OFFRES SECTION ---
    const solTitle = document.querySelector('.solutions-hero-title');
    if (solTitle) {
      solTitle.innerHTML = `${dict.sol_title_1} <span class="solutions-hero-ampersand">&amp;</span><br>${dict.sol_title_2}`;
    }

    // Tabs
    const tabPart = document.getElementById('tabParticuliersBtn');
    if (tabPart) {
      tabPart.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline-block; vertical-align: middle; margin-right: 6px;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> ${dict.tab_particuliers}`;
    }
    const tabPros = document.getElementById('tabProsBtn');
    if (tabPros) {
      tabPros.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline-block; vertical-align: middle; margin-right: 6px;"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> ${dict.tab_pros}`;
    }
    const tabAll = document.getElementById('tabAllBtn');
    if (tabAll) {
      tabAll.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline-block; vertical-align: middle; margin-right: 6px;"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> ${dict.tab_all}`;
    }

    // Dynamic Solution Cards Translation
    function updateSingleCard(card, offerKey) {
      if (!card || !offerKey) return;
      const offer = (typeof window.getLocalizedOffer === 'function')
        ? window.getLocalizedOffer(offerKey, lang)
        : ((window.OFFERS_DATA && window.OFFERS_DATA[offerKey]) ? window.OFFERS_DATA[offerKey] : null);
      if (!offer) return;

      const h3 = card.querySelector('h3');
      if (h3) h3.textContent = offer.title;

      const p = card.querySelector('p');
      if (p) p.textContent = offer.desc;

      const badge = card.querySelector('.card-badge-pill, .catalog-pill-badge');
      if (badge) {
        const svg = badge.querySelector('svg');
        badge.innerHTML = '';
        if (svg) badge.appendChild(svg);
        badge.append(` ${offer.badge || offer.category}`);
      }

      const btn = card.querySelector('.card-link-decouvrir, .card-link-quote');
      if (btn) {
        const btnText = dict.card_btn_decouvrir;
        const svg = btn.querySelector('svg');
        const chevron = btn.querySelector('span');
        btn.innerHTML = '';
        btn.append(`${btnText} `);
        if (svg) btn.appendChild(svg);
        else if (chevron) btn.appendChild(chevron);
        else btn.insertAdjacentHTML('beforeend', '<span style="font-size: 1.1rem;">›</span>');
      }
    }

    // Detect offerKey from onclick or data-offer-key
    document.querySelectorAll('.solution-card').forEach(card => {
      let key = card.getAttribute('data-offer-key');
      if (!key) {
        const onclickAttr = card.getAttribute('onclick') || '';
        const match = onclickAttr.match(/openOfferModal\(['"]([a-z_]+)['"]\)/);
        if (match && match[1]) {
          key = match[1];
          if (key === 'moto') key = 'auto'; // Fallback
          card.setAttribute('data-offer-key', key);
        }
      }
      if (key) {
        updateSingleCard(card, key);
      }
    });

    // --- FAQ SECTION (index.html) ---
    const faqTag = document.querySelector('#faq .section-tag, .faq-tag, [data-i18n="faq_tag"]');
    if (faqTag) faqTag.textContent = dict.faq_tag;

    const faqTitle = document.querySelector('#faq .section-title, .faq-header .section-title, [data-i18n="faq_title"]');
    if (faqTitle) faqTitle.textContent = dict.faq_title;

    const faqSubtitle = document.querySelector('#faq .section-subtitle, .faq-subtitle, [data-i18n="faq_sub"]');
    if (faqSubtitle) faqSubtitle.textContent = dict.faq_sub;

    const faqItems = document.querySelectorAll('#faq .faq-list .faq-item, #faq .faq-item, .faq-list .faq-item');
    faqItems.forEach((item, index) => {
      const qIdx = index + 1;
      const qBtn = item.querySelector('.faq-question span, .faq-question-btn span, span[data-i18n^="faq_q"]');
      const aTxt = item.querySelector('.faq-answer, .faq-answer p, [data-i18n^="faq_a"]');
      if (qBtn && dict[`faq_q${qIdx}`]) {
        qBtn.textContent = dict[`faq_q${qIdx}`];
      }
      if (aTxt && dict[`faq_a${qIdx}`]) {
        aTxt.textContent = dict[`faq_a${qIdx}`];
      }
    });

    // --- CONTACT & COORDONNÉES SECTION (index.html) ---
    const contactTag = document.querySelector('#contact .section-tag');
    if (contactTag) contactTag.textContent = dict.contact_tag;

    const contactName = document.querySelector('#contact .contact-info-card h3');
    if (contactName) contactName.textContent = dict.contact_agency_name;

    const contactSub = document.querySelector('#contact .contact-info-card p');
    if (contactSub) contactSub.textContent = dict.contact_agency_sub;

    const contactItems = document.querySelectorAll('#contact .contact-item');
    if (contactItems.length >= 5) {
      // Item 0: Adresse
      const h0 = contactItems[0].querySelector('h4');
      const p0 = contactItems[0].querySelector('p');
      if (h0) h0.textContent = dict.contact_address_title;
      if (p0) p0.textContent = dict.contact_address_desc;

      // Item 1: Téléphone & GSM
      const h1 = contactItems[1].querySelector('h4');
      if (h1) h1.textContent = dict.contact_tel_title;
      const p1 = contactItems[1].querySelectorAll('p');
      if (p1[0]) p1[0].innerHTML = `${dict.contact_tel_fixe_label} <a href="tel:+212525363061">05 25 36 30 61</a>`;
      if (p1[1]) p1[1].innerHTML = `${dict.contact_tel_gsm_label} <a href="tel:+212667762124">06 67 76 21 24</a>`;

      // Item 2: Email
      const h2 = contactItems[2].querySelector('h4');
      if (h2) h2.textContent = dict.contact_email_title;

      // Item 3: Horaires
      const h3 = contactItems[3].querySelector('h4');
      if (h3) h3.textContent = dict.contact_hours_title;
      const p3 = contactItems[3].querySelectorAll('p');
      if (p3[0]) p3[0].textContent = dict.contact_hours_week;
      if (p3[1]) p3[1].textContent = dict.contact_hours_sat;

      // Item 4: Réseaux Sociaux
      const h4 = contactItems[4].querySelector('h4');
      if (h4) h4.textContent = dict.contact_socials_title;
    }

    // --- FORMULAIRE DE CONTACT & DEVIS (index.html) ---
    const formBadge = document.querySelector('.contact-form-badge span');
    if (formBadge) formBadge.textContent = dict.form_badge;

    const formTitle = document.querySelector('.contact-form-title');
    if (formTitle) formTitle.textContent = dict.form_title;

    const formSubtitle = document.querySelector('.contact-form-subtitle');
    if (formSubtitle) formSubtitle.innerHTML = dict.form_subtitle;

    // Nom
    const nomLabel = document.querySelector('label[for="contactNom"] span:first-child');
    if (nomLabel) nomLabel.textContent = dict.form_nom_label;
    const nomReq = document.querySelector('label[for="contactNom"] .cf-label-required');
    if (nomReq) nomReq.textContent = dict.form_required;
    const nomInput = document.getElementById('contactNom');
    if (nomInput) nomInput.placeholder = dict.form_nom_placeholder;

    // Téléphone
    const phoneLabel = document.querySelector('label[for="contactPhone"] span:first-child');
    if (phoneLabel) phoneLabel.textContent = dict.form_phone_label;
    const phoneReq = document.querySelector('label[for="contactPhone"] .cf-label-required');
    if (phoneReq) phoneReq.textContent = dict.form_required;
    const phoneInput = document.getElementById('contactPhone');
    if (phoneInput) phoneInput.placeholder = dict.form_phone_placeholder;

    // Email
    const emailLabel = document.querySelector('label[for="contactEmail"] span:first-child');
    if (emailLabel) emailLabel.textContent = dict.form_email_label;
    const emailOpt = document.querySelector('label[for="contactEmail"] span:nth-child(2)');
    if (emailOpt) emailOpt.textContent = dict.form_email_opt;
    const emailInput = document.getElementById('contactEmail');
    if (emailInput) emailInput.placeholder = dict.form_email_placeholder;

    // Sujet
    const sujetLabel = document.querySelector('label[for="contactSujet"] span');
    if (sujetLabel) sujetLabel.textContent = dict.form_subject_label;
    const sujetSelect = document.getElementById('contactSujet');
    if (sujetSelect && sujetSelect.options && sujetSelect.options.length >= 7) {
      sujetSelect.options[0].text = dict.form_opt_auto;
      sujetSelect.options[1].text = dict.form_opt_hab;
      sujetSelect.options[2].text = dict.form_opt_sante;
      sujetSelect.options[3].text = dict.form_opt_ent;
      sujetSelect.options[4].text = dict.form_opt_epargne;
      sujetSelect.options[5].text = dict.form_opt_sinistre;
      sujetSelect.options[6].text = dict.form_opt_autre;
    }

    // Message
    const msgLabel = document.querySelector('label[for="contactMessage"] span:first-child');
    if (msgLabel) msgLabel.textContent = dict.form_message_label;
    const msgReq = document.querySelector('label[for="contactMessage"] .cf-label-required');
    if (msgReq) msgReq.textContent = dict.form_required;
    const msgInput = document.getElementById('contactMessage');
    if (msgInput) msgInput.placeholder = dict.form_message_placeholder;

    // Privacy note
    const privacySpan = document.querySelector('.cf-privacy-note span');
    if (privacySpan) privacySpan.innerHTML = dict.form_privacy;

    // Submit button
    const submitBtnSpan = document.querySelector('#btnContactSubmit span');
    if (submitBtnSpan) submitBtnSpan.textContent = dict.form_submit_btn;

    // --- LOCALISATION / GOOGLE MAP SECTION (index.html) ---
    const mapBadge = document.querySelector('.agency-map-badge');
    if (mapBadge) {
      const svg = mapBadge.querySelector('svg');
      mapBadge.innerHTML = '';
      if (svg) mapBadge.appendChild(svg);
      mapBadge.append(` ${dict.map_badge}`);
    }

    const mapTitle = document.querySelector('.agency-map-title');
    if (mapTitle) mapTitle.textContent = dict.map_title;

    const mapSubtitle = document.querySelector('.agency-map-subtitle');
    if (mapSubtitle) mapSubtitle.textContent = dict.map_subtitle;

    const btnItineraire = document.getElementById('btnItineraireMap');
    if (btnItineraire) {
      const svg = btnItineraire.querySelector('svg');
      btnItineraire.innerHTML = '';
      if (svg) btnItineraire.appendChild(svg);
      btnItineraire.append(` ${dict.map_btn_directions}`);
    }

    const mapLoading = document.querySelector('#mapLoadingState span');
    if (mapLoading) mapLoading.textContent = dict.map_loading;

    const accessPills = document.querySelectorAll('.agency-access-bar .access-pill span');
    if (accessPills.length >= 4) {
      accessPills[0].textContent = dict.map_pill_access;
      accessPills[1].textContent = dict.map_pill_parking;
      accessPills[2].textContent = dict.map_pill_hours;
      accessPills[3].textContent = dict.map_pill_assistance;
    }

    // --- FOOTER TOUTES PAGES ---
    const footerDesc = document.querySelector('.site-footer .footer-col:first-child p:not([style*="display: flex"])');
    if (footerDesc) footerDesc.textContent = dict.footer_desc;

    const footerAddr = document.querySelector('.site-footer .footer-col:first-child p[style*="display: flex"] span');
    if (footerAddr) footerAddr.textContent = dict.footer_address;

    const footerLinks0 = document.querySelectorAll('.site-footer .footer-col:first-child a[style*="font-size: 0.84rem"]');
    if (footerLinks0.length >= 2) {
      footerLinks0[0].textContent = dict.footer_agency_link;
      footerLinks0[1].textContent = dict.footer_missions_link;
    }

    const footerBadges = document.querySelectorAll('.site-footer .footer-col:first-child div[style*="gap: 0.5rem"] span');
    if (footerBadges.length >= 2) {
      footerBadges[0].textContent = dict.footer_acaps_badge;
      footerBadges[1].textContent = dict.footer_axa_badge;
    }

    const footerFollow = document.querySelector('.site-footer .footer-col:first-child div[style*="margin-top: 1.25rem"] span');
    if (footerFollow) footerFollow.textContent = dict.footer_follow;

    const footerCols = document.querySelectorAll('.site-footer .footer-col');
    if (footerCols.length >= 4) {
      const hPart = footerCols[1].querySelector('h4, .footer-heading');
      if (hPart) hPart.textContent = dict.footer_particuliers_title;

      const hPros = footerCols[2].querySelector('h4, .footer-heading');
      if (hPros) hPros.textContent = dict.footer_pros_title;

      const hUrg = footerCols[3].querySelector('h4, .footer-heading');
      if (hUrg) hUrg.textContent = dict.footer_urgences_title;

      // Update specific assistance & email title labels if present
      const urgAssistanceTitle = footerCols[3].querySelector('.footer-urg-assistance-title');
      if (urgAssistanceTitle) {
        urgAssistanceTitle.textContent = dict.footer_assistance_label;
      }

      const urgEmailTitle = footerCols[3].querySelector('.footer-urg-email-title');
      if (urgEmailTitle) {
        urgEmailTitle.textContent = dict.footer_email_label;
      }

      // Safe fallback if specific labels are not present
      if (!urgAssistanceTitle || !urgEmailTitle) {
        const urgTexts = footerCols[3].querySelectorAll('p');
        urgTexts.forEach(p => {
          if (p && p.childNodes && p.childNodes.length > 0 && p.childNodes[0]) {
            const txt = p.childNodes[0].textContent || '';
            if (p.querySelector('a[href^="tel:"]') || txt.includes('Assistance') || txt.includes('نجدة') || txt.includes('Help')) {
              p.childNodes[0].textContent = `${dict.footer_assistance_label}\n`;
            } else if (p.querySelector('a[href^="mailto:"]') || txt.includes('Email') || txt.includes('البريد')) {
              p.childNodes[0].textContent = `${dict.footer_email_label}\n`;
            }
          }
        });
      }

      const hoursBox = footerCols[3].querySelector('.footer-hours-box, .footer-hours-card');
      if (hoursBox) {
        const titleH = hoursBox.querySelector('div:first-child');
        if (titleH) titleH.textContent = dict.footer_hours_label;
        const line1 = hoursBox.querySelector('div:nth-child(2)');
        if (line1) line1.textContent = dict.footer_hours_week;
        const line2 = hoursBox.querySelector('div:nth-child(3)');
        if (line2) line2.textContent = dict.footer_hours_sat;
      }
    }

    const footerBottom = document.querySelector('.site-footer .footer-bottom, .site-footer .footer-bottom-bar');
    if (footerBottom) {
      const copyDiv = footerBottom.querySelector('div:first-child, .footer-copyright');
      if (copyDiv) copyDiv.textContent = dict.footer_rights;
      const acapsDiv = footerBottom.querySelector('div:last-child');
      if (acapsDiv && acapsDiv !== copyDiv) acapsDiv.textContent = dict.footer_acaps;
    }

    // --- MOBILE TASKBAR TOUTES PAGES ---
    const tbHome = document.querySelector('#taskbarHome span');
    if (tbHome) tbHome.textContent = dict.mb_home;
    const tbOffers = document.querySelector('#taskbarOffers span');
    if (tbOffers) tbOffers.textContent = dict.mb_offers;
    const tbCall = document.querySelector('.m-taskbar-call span');
    if (tbCall) tbCall.textContent = dict.mb_call;
    const tbWa = document.querySelector('.m-taskbar-wa span');
    if (tbWa) tbWa.textContent = dict.mb_wa;
    const tbUrgence = document.querySelector('#taskbarUrgence span');
    if (tbUrgence) tbUrgence.textContent = dict.mb_urgency;

    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
      backToTopBtn.setAttribute('title', dict.back_to_top);
      backToTopBtn.setAttribute('aria-label', dict.back_to_top);
    }

    // --- CATALOGUE OFFRES (offres.html) SPÉCIFIQUE ---
    const catalogBreadcrumbHome = document.querySelector('.page-breadcrumb a');
    if (catalogBreadcrumbHome) catalogBreadcrumbHome.textContent = dict.catalog_breadcrumb_home;

    const catalogBreadcrumbStrong = document.querySelector('.page-breadcrumb strong');
    if (catalogBreadcrumbStrong) catalogBreadcrumbStrong.textContent = dict.catalog_breadcrumb_title;

    const catalogTag = document.querySelector('.page-intro-banner .section-tag');
    if (catalogTag) catalogTag.textContent = dict.catalog_tag;

    const catalogH1 = document.querySelector('.page-intro-banner h1');
    if (catalogH1) catalogH1.innerHTML = dict.catalog_h1;

    const catalogLead = document.querySelector('.page-intro-banner p');
    if (catalogLead) catalogLead.textContent = dict.catalog_lead;

    // Tableau comparatif (offres.html)
    const compBadge = document.querySelector('.compare-section .catalog-pill-badge');
    if (compBadge) compBadge.textContent = dict.compare_badge;

    const compTitle = document.querySelector('.compare-section h2');
    if (compTitle) compTitle.textContent = dict.compare_title;

    const compThs = document.querySelectorAll('.compare-table thead th');
    if (compThs.length >= 4) {
      if (compThs[0]) compThs[0].textContent = dict.compare_th_guarantees;
      if (compThs[1]) compThs[1].textContent = dict.compare_th_essential;
      if (compThs[2]) compThs[2].textContent = dict.compare_th_comfort;
      if (compThs[3]) compThs[3].textContent = dict.compare_th_serenity;
    }

    const compRows = document.querySelectorAll('.compare-table tbody tr');
    if (compRows.length >= 6) {
      const rData = [
        [dict.compare_r1_name, dict.compare_r1_v1, dict.compare_r1_v2, dict.compare_r1_v3],
        [dict.compare_r2_name, dict.compare_r2_v1, dict.compare_r2_v2, dict.compare_r2_v3],
        [dict.compare_r3_name, dict.compare_r3_v1, dict.compare_r3_v2, dict.compare_r3_v3],
        [dict.compare_r4_name, dict.compare_r4_v1, dict.compare_r4_v2, dict.compare_r4_v3],
        [dict.compare_r5_name, dict.compare_r5_v1, dict.compare_r5_v2, dict.compare_r5_v3],
        [dict.compare_r6_name, dict.compare_r6_v1, dict.compare_r6_v2, dict.compare_r6_v3]
      ];
      compRows.forEach((tr, i) => {
        const tds = tr.querySelectorAll('td');
        if (tds.length >= 4 && rData[i]) {
          if (tds[0]) tds[0].innerHTML = `<strong>${rData[i][0]}</strong>`;
          if (tds[1]) tds[1].textContent = rData[i][1];
          if (tds[2]) tds[2].textContent = rData[i][2];
          if (tds[3]) tds[3].textContent = rData[i][3];
        }
      });
    }

    // CTA Banner (offres.html)
    const ctaBanner = document.querySelector('section[style*="002868"] h2, section[style*="001f58"] h2');
    if (ctaBanner) ctaBanner.textContent = dict.cta_banner_title;

    const ctaLead = document.querySelector('section[style*="002868"] p, section[style*="001f58"] p');
    if (ctaLead) ctaLead.textContent = dict.cta_banner_lead;

    const ctaWa = document.querySelector('section[style*="002868"] a.btn-accent, section[style*="001f58"] a.btn-accent');
    if (ctaWa) {
      const svg = ctaWa.querySelector('svg');
      ctaWa.innerHTML = '';
      if (svg) ctaWa.appendChild(svg);
      ctaWa.append(` ${dict.cta_banner_wa}`);
    }

    const ctaCall = document.querySelector('section[style*="002868"] a.btn-outline, section[style*="001f58"] a.btn-outline');
    if (ctaCall) ctaCall.textContent = dict.cta_banner_call;

    // --- PAGE PRODUIT (produit.html) SPÉCIFIQUE ---
    const prodBreadHome = document.querySelector('#breadcrumbTrail li:first-child a');
    if (prodBreadHome) prodBreadHome.textContent = dict.prod_breadcrumb_home;

    const prodWhyH = document.querySelector('#prodWhyHeading span');
    if (prodWhyH) prodWhyH.textContent = dict.prod_why_heading;

    const prodWhyD = document.getElementById('prodWhyDesc');
    if (prodWhyD) prodWhyD.textContent = dict.prod_why_desc;

    const prodFaqH = document.querySelector('#prodFaqHeading span');
    if (prodFaqH) prodFaqH.textContent = dict.prod_faq_title;

    const quoteTitle = document.querySelector('#quoteBoxTitle span');
    if (quoteTitle) quoteTitle.textContent = dict.prod_quote_box_title;

    const quoteSub = document.getElementById('quoteBoxSubtitle');
    if (quoteSub) quoteSub.innerHTML = dict.prod_quote_box_sub;

    const qNomL = document.getElementById('quoteNomLabel');
    if (qNomL) qNomL.textContent = dict.prod_quote_name_label;
    const qNomI = document.getElementById('quoteNom');
    if (qNomI) qNomI.placeholder = dict.prod_quote_name_placeholder;

    const qTelL = document.getElementById('quoteTelLabel');
    if (qTelL) qTelL.textContent = dict.prod_quote_tel_label;
    const qTelI = document.getElementById('quoteTel');
    if (qTelI) qTelI.placeholder = dict.prod_quote_tel_placeholder;

    const qEmailL = document.getElementById('quoteEmailLabel');
    if (qEmailL) qEmailL.textContent = dict.prod_quote_email_label;
    const qEmailI = document.getElementById('quoteEmail');
    if (qEmailI) qEmailI.placeholder = dict.prod_quote_email_placeholder;

    const qDetailsL = document.getElementById('quoteDetailsLabel');
    if (qDetailsL) qDetailsL.textContent = dict.prod_quote_details_label;
    const qDetailsI = document.getElementById('quoteDetails');
    if (qDetailsI && !qDetailsI.value) qDetailsI.placeholder = dict.prod_quote_details_placeholder;

    const qSubmitBtnText = document.getElementById('quoteSubmitBtnText');
    if (qSubmitBtnText && !qSubmitBtnText.getAttribute('data-submitted')) {
      qSubmitBtnText.textContent = dict.prod_quote_submit;
    }

    const qSuccessTitle = document.getElementById('quoteSuccessTitle');
    if (qSuccessTitle) qSuccessTitle.textContent = dict.prod_quote_success_title;

    const qSuccessText = document.getElementById('quoteSuccessText');
    if (qSuccessText) qSuccessText.innerHTML = dict.prod_quote_success_text;

    const qWaConfirm = document.getElementById('directWhatsappSubmitBtnText');
    if (qWaConfirm) qWaConfirm.textContent = dict.prod_quote_wa_confirm;
  }

  // Initialisation des écouteurs globaux
  function initI18n() {
    const currentLang = getStoredLang();
    applyLanguage(currentLang);

    // Écouteur global sur tous les boutons de sélection de langue
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.lang-btn, .mobile-menu-lang-btn, [data-lang]');
      if (btn) {
        const selectedLang = btn.getAttribute('data-lang');
        if (selectedLang && (selectedLang === 'fr' || selectedLang === 'ar' || selectedLang === 'en')) {
          e.preventDefault();
          applyLanguage(selectedLang);
        }
      }
    });
  }

  // Exposition globale sur window
  window.EchkiliI18n = {
    translations: TRANSLATIONS,
    getLanguage: getStoredLang,
    setLanguage: applyLanguage,
    t: function (key) {
      const l = getStoredLang();
      return (TRANSLATIONS[l] && TRANSLATIONS[l][key]) || TRANSLATIONS.fr[key] || '';
    },
    init: initI18n
  };

  // Aliases pour compatibilité
  window.setSiteLanguage = applyLanguage;
  window.getCurrentLanguage = getStoredLang;
  window.getI18nText = function (key) {
    return window.EchkiliI18n.t(key);
  };

  // Démarrage dès que le DOM est prêt
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
  } else {
    initI18n();
  }
})();
