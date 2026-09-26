// Système Internationalisation (i18n) Multilingue : Français (FR), Arabe (AR), Anglais (EN)
// Assurances Echkili - Agence Générale AXA Marrakech

export type SupportedLanguage = 'fr' | 'ar' | 'en';

export const translations: Record<SupportedLanguage, Record<string, string>> = {
  fr: {
    // Top Bar
    "top_office_title": "Notre bureau",
    "top_office_desc": "Rdc magasin 2, Imm Erraha N°8<br>Av. Guemassa, M'hamid, Marrakech",
    "top_write_title": "Écrivez nous",
    "top_call_title": "Appelez nous",
    "top_phone_fixe": "Fixe : 05 25 36 30 61",
    "top_phone_gsm": "GSM : 06 67 76 21 24",

    // Navigation
    "nav_home": "Accueil",
    "nav_agency": "Assurances Echkili",
    "nav_missions": "Missions & Valeurs",
    "nav_agency_sub": "L'Agence Echkili",
    "nav_agency_contact": "Notre Agence & Contact",
    "nav_coordinates": "Coordonnées & Contact",
    "nav_appointment": "Prendre Rendez-vous",
    "nav_sinistre": "En cas de sinistre (Urgence 24/7)",
    "nav_individuals": "Particuliers",
    "nav_auto": "Assurance Automobile & Moto",
    "nav_habitation": "Habitation & Riad (HABITASSUR)",
    "nav_sante": "Santé Sehassur & International",
    "nav_epargne": "Épargne & Retraite (Futuris II)",
    "nav_pros": "Professionnels",
    "nav_multirisque_pro": "Multirisque Professionnelle",
    "nav_rc_pro": "Responsabilité Civile Pro (RC Pro)",
    "nav_at_mp": "Accidents du Travail (Loi 18-12)",
    "nav_flotte": "Flottes & Utilitaires Pro",
    "nav_all_pros": "Toutes les offres Professionnels",
    "nav_enterprises": "Entreprises",
    "nav_multi_indus": "Multirisque Industrielle & Dommages",
    "nav_flotte_ent": "Flotte Automobile Entreprise",
    "nav_sante_grp": "Santé Collective & Prévoyance Groupe",
    "nav_trc": "Tous Risques Chantier (TRC BTP)",
    "nav_contact": "Contact & Accès",

    // Hero Slides
    "hero_slide0_headline": "Votre Agence AXA à Marrakech",
    "hero_slide0_desc": "Une équipe d'experts à votre écoute à l'agence ECHKILI ASSURANCES,<br>Imm Erraha N°8, Av. Guemassa, M'hamid. Conseils personnalisés et réactivité immédiate.",
    "hero_slide0_btn": "Prendre Rendez-vous",

    "hero_slide1_headline": "Vous êtes une entreprise&nbsp;?",
    "hero_slide1_desc": "Vous avez besoin d'assurer votre investissement,<br>vos collaborateurs ou votre responsabilité !<br>Voici des formules qui vous serons adaptées",
    "hero_slide1_btn": "Découvrez L'offre",

    "hero_slide2_headline": "Assurance Automobile & Moto",
    "hero_slide2_desc": "Bénéficiez d'une protection tous risques complète,<br>assistance dépannage 24/7 et remorquage 0 km immédiat à Marrakech.",
    "hero_slide2_btn": "Demander un Devis Auto",

    "hero_slide3_headline": "Protection Habitation HABITASSUR",
    "hero_slide3_desc": "Votre foyer et votre famille à l'abri des imprévus :<br>dégâts des eaux, vol, incendie et responsabilité civile chef de famille.",
    "hero_slide3_btn": "Protéger mon Logement",

    // Trust Grid
    "trust_agent_title": "Agent Général AXA Agréé",
    "trust_agent_desc": "Intermédiaire assermenté ACAPS à Marrakech",
    "trust_assistance_title": "Assistance Sinistre 24/7",
    "trust_assistance_desc": "Intervention immédiate constat & remorquage",
    "trust_expertise_title": "Expertise Pro & PME",
    "trust_expertise_desc": "Accidents travail, flottes & multirisque",
    "trust_advice_title": "Conseil Personnalisé",
    "trust_advice_desc": "Étude gratuite et devis sur mesure sous 2h",

    // Missions & Valeurs
    "mv_title": "Missions & valeurs",
    "mv_lead": "La mission d'AXA Maroc est d'aider ses clients à vivre avec plus de confiance en les protégeant face aux imprévus du quotidien et aux risques de demain. <strong>Ses valeurs reposent notamment sur :</strong>",
    "mv_card1_title": "Professionnalisme",
    "mv_card1_desc": "Être compétent et rigoureux dans l'exercice de notre métier au quotidien.",
    "mv_card2_title": "Attention au client",
    "mv_card2_desc": "Être disponible, à l'écoute et bienveillant pour répondre aux attentes réelles.",
    "mv_card3_title": "Intégrité",
    "mv_card3_desc": "Respecter nos engagements et agir avec transparence, loyauté et éthique.",
    "mv_card4_title": "Esprit d'équipe",
    "mv_card4_desc": "Collaborer activement et partager nos compétences pour la réussite collective.",

    // Agence Echkili (Section 4)
    "echkili_kicker": "ECHKILI ASSURANCES",
    "echkili_title": "Est une agence générale d’assurance au Maroc .",
    "echkili_desc": "Mérite d’être votre interlocuteur privilégié pour vos assurances ou celles de l'entreprise ou de l'institution dont vous avez la responsabilité.",
    "echkili_accident_title": "En cas d'accident",
    "echkili_accident_more": "En savoir plus",
    "echkili_accident_lead": "<strong>ECHKILI ASSURANCES</strong> vous accompagne tout au long de vos démarches",
    "echkili_accident_details": "En cas de sinistre ou d'accident, notre agence générale AXA à Marrakech met à votre disposition son assistance 24/7, la prise en charge immédiate de votre déclaration de constat, ainsi que son réseau d'experts et de garages agréés.",
    "echkili_accident_call": "Assistance Sinistre : 05 25 36 30 61",

    // Catalogue Solutions
    "solutions_title": "Solutions Particuliers & Professionnels",
    "solutions_sub": "Découvrez notre gamme complète de contrats d'assurance AXA Maroc adaptés à chaque étape de votre vie et de votre activité professionnelle.",
    "tab_particuliers": "Particuliers",
    "tab_pros": "Professionnels",
    "tab_entreprises": "Entreprises",

    // Simulateur Express
    "sim_title": "Simulateur de Devis Express",
    "sim_sub": "Estimez rapidement votre tarif pour vos assurances à Marrakech",
    "sim_type_label": "Type d'assurance souhaitée",
    "sim_opt_auto": "Assurance Automobile",
    "sim_opt_habitation": "Assurance Habitation / Riad",
    "sim_opt_sante": "Assurance Santé / Complémentaire",
    "sim_opt_pro": "Multirisque Professionnelle",
    "sim_opt_at": "Accidents du Travail (AT/MP)",
    "sim_name_label": "Votre Nom Complet",
    "sim_phone_label": "Téléphone Mobile / WhatsApp",
    "sim_calc_btn": "Calculer mon Devis Gratuit",

    // FAQ
    "faq_title": "Questions Fréquemment Posées",
    "faq_sub": "Tout ce que vous devez savoir sur la souscription et les garanties chez Assurances Echkili",

    // Contact
    "contact_tag": "Agence Marrakech",
    "contact_agency_name": "Assurances Echkili",
    "contact_lead": "Agent Général AXA Assurance Maroc. Venez nous rencontrer à l'agence pour un accueil chaleureux et des conseils personnalisés.",
    "contact_addr_title": "Adresse de l'Agence",
    "contact_addr_val": "Rdc magasin 2 imm erraha n°8 av guemassa mhamid Marrakech",
    "contact_tel_title": "Téléphone & GSM",
    "contact_email_title": "Email de Contact",
    "contact_hours_title": "Horaires d'Ouverture",
    "contact_hours_val": "Lundi au Vendredi : 08h30 - 19h00<br>Samedi : 09h00 - 13h00",
    "contact_form_title": "Envoyez-nous un Message",
    "contact_form_sub": "Un conseiller dédié traite votre demande sous 2h ouvrées.",
    "contact_form_name": "Votre Nom Complet *",
    "contact_form_phone": "Téléphone / WhatsApp *",
    "contact_form_email": "Votre Adresse Email *",
    "contact_form_subject": "Sujet de votre demande *",
    "contact_form_msg": "Votre Message / Précisions *",
    "contact_form_btn": "Envoyer ma Demande",

    // Social Media
    "social_title": "Retrouvez-nous sur les réseaux sociaux",
    "social_follow": "Suivez notre actualité et contactez nos conseillers en direct :",

    // Footer
    "footer_col1_desc": "Agence Générale d'Assurance AXA Maroc à Marrakech (M'hamid). Protection des familles, professionnels, artisans et entreprises.",
    "footer_emergencies_title": "Urgences & Horaires",
    "footer_rights": "© 2026 Assurances Echkili. Tous droits réservés. Agent Général AXA Assurance Maroc.",
    "footer_acaps": "Agrément Intermédiaire d'Assurance délivré par l'ACAPS conformément au Code des Assurances (Loi 17-99).",

    // Mobile Taskbar
    "taskbar_home": "Accueil",
    "taskbar_offers": "Offres",
    "taskbar_call": "Appeler",
    "taskbar_whatsapp": "WhatsApp",
    "taskbar_urgency": "Urgence"
  },

  ar: {
    // Top Bar
    "top_office_title": "مكتبنا",
    "top_office_desc": "الطابق الأرضي محل 2، عمارة الراحة رقم 8<br>شارع كمّاسة، المحاميد، مراكش",
    "top_write_title": "راسلنا",
    "top_call_title": "اتصل بنا",
    "top_phone_fixe": "الهاتف الثابت: 05 25 36 30 61",
    "top_phone_gsm": "المحمول: 06 67 76 21 24",

    // Navigation
    "nav_home": "الرئيسية",
    "nav_agency": "إشكال للتأمينات",
    "nav_missions": "المهام والقيم",
    "nav_agency_sub": "وكالة إشكال",
    "nav_agency_contact": "وكالتنا والاتصال",
    "nav_coordinates": "معلومات الاتصال",
    "nav_appointment": "حجز موعد",
    "nav_sinistre": "في حالة وقوع حادث (طوارئ 24/7)",
    "nav_individuals": "الأفراد",
    "nav_auto": "تأمين السيارات والدراجات",
    "nav_habitation": "السكن والرياض (حبيطاسور)",
    "nav_sante": "التأمين الصحي والدولي",
    "nav_epargne": "الادخار والتقاعد (فوتوريس 2)",
    "nav_pros": "المهنيون",
    "nav_multirisque_pro": "متعدد المخاطر المهنية",
    "nav_rc_pro": "المسؤولية المدنية المهنية",
    "nav_at_mp": "حوادث الشغل (قانون 18-12)",
    "nav_flotte": "أسطول المركبات المهنية",
    "nav_all_pros": "جميع عروض المهنيين",
    "nav_enterprises": "الشركات",
    "nav_multi_indus": "متعدد المخاطر الصناعية والأضرار",
    "nav_flotte_ent": "أسطول سيارات الشركات",
    "nav_sante_grp": "الصحة التكميلية الجماعية",
    "nav_trc": "جميع مخاطر ورش البناء (TRC)",
    "nav_contact": "الاتصال والوصول",

    // Hero Slides
    "hero_slide0_headline": "وكالتكم أكسا في مراكش",
    "hero_slide0_desc": "فريق من الخبراء في خدمتكم بوكالة إشكال للتأمينات،<br>عمارة الراحة رقم 8، شارع كمّاسة، المحاميد. استشارات مخصصة واستجابة فورية.",
    "hero_slide0_btn": "حجز موعد مع مستشار",

    "hero_slide1_headline": "هل أنتم شركة أو مقاولة؟",
    "hero_slide1_desc": "تحتاجون لتأمين استثماراتكم،<br>أطركم ومستخدميكم أو مسؤوليتكم المدنية!<br>إليكم صيغ تأمين ملائمة تماماً لاحتياجاتكم",
    "hero_slide1_btn": "اكتشف العروض",

    "hero_slide2_headline": "تأمين السيارات والدراجات النارية",
    "hero_slide2_desc": "استفيدوا من حماية شاملة ضد جميع المخاطر،<br>مساعدة عند الأعطال 24/7 وقطر 0 كلم فوري في مراكش.",
    "hero_slide2_btn": "طلب عرض أسعار سيارة",

    "hero_slide3_headline": "حماية السكن حبيطاسور",
    "hero_slide3_desc": "منزلكم وعائلتكم بأمان في مواجهة غير المتوقع:<br>أضرار المياه، السرقة، الحريق والمسؤولية المدنية لرب الأسرة.",
    "hero_slide3_btn": "حماية منزلي",

    // Trust Grid
    "trust_agent_title": "وكيل عام معتمد لأكسا",
    "trust_agent_desc": "وسيط تأمين محلف من هيئة ACAPS بمراكش",
    "trust_assistance_title": "مساعدة الحوادث 24/7",
    "trust_assistance_desc": "تدخل فوري للمعاينة والقطر وإصلاح الأعطال",
    "trust_expertise_title": "خبرة الشركات والمهنيين",
    "trust_expertise_desc": "حوادث الشغل، الأساطيل والتأمين الشامل",
    "trust_advice_title": "استشارة مخصصة ومجانية",
    "trust_advice_desc": "دراسة دقيقة وعرض أسعار مخصص خلال ساعتين",

    // Missions & Valeurs
    "mv_title": "المهام والقيم",
    "mv_lead": "تتمثل مهمة أكسا المغرب في مساعدة زبنائها على العيش بثقة وأمان أكبر عبر حمايتهم من طوارئ الحياة اليومية ومخاطر الغد. <strong>وتستند قيمها بالأساس على:</strong>",
    "mv_card1_title": "الاحترافية",
    "mv_card1_desc": "الكفاءة والدقة المتناهية في ممارسة مهنتنا بشكل يومي ومستمر.",
    "mv_card2_title": "الاهتمام بالزبون",
    "mv_card2_desc": "التواجد الدائم وحسن الاستماع لتلبية احتياجاتكم وتطلعاتكم الحقيقية.",
    "mv_card3_title": "النزاهة والشفافية",
    "mv_card3_desc": "الوفاء التام بالتزاماتنا والتصرف بأعلى درجات الصدق والأمانة والأخلاق.",
    "mv_card4_title": "روح الفريق",
    "mv_card4_desc": "التعاون الفعال وتبادل الخبرات لتحقيق النجاح الجماعي ورضا الزبناء.",

    // Agence Echkili (Section 4)
    "echkili_kicker": "إشكال للتأمينات",
    "echkili_title": "وكالة عامة للتأمين في المغرب.",
    "echkili_desc": "تستحق أن تكون مخاطبكم المعتمد والمفضل لجميع تأميناتكم الشخصية أو تأمينات المقاولة والمؤسسة التي تتحملون مسؤوليتها.",
    "echkili_accident_title": "في حالة وقوع حادث",
    "echkili_accident_more": "معرفة المزيد",
    "echkili_accident_lead": "<strong>إشكال للتأمينات</strong> ترافقكم خطوة بخطوة في جميع الإجراءات",
    "echkili_accident_details": "في حالة وقوع حادث أو ضرر، تضع وكالتنا العامة أكسا بمراكش رهن إشارتكم المساعدة على مدار الساعة 24/7، والتكفل الفوري بتصريح المعاينة، إضافة إلى شبكة واسعة من الخبراء وورشات الإصلاح المعتمدة.",
    "echkili_accident_call": "المساعدة عند الحوادث: 05 25 36 30 61",

    // Catalogue Solutions
    "solutions_title": "حلول التأمين للأفراد والمهنيين",
    "solutions_sub": "اكتشفوا باقتنا المتكاملة من عقود تأمين أكسا المغرب المصممة خصيصاً لكل مرحلة من مراحل حياتكم ومسيرتكم المهنية.",
    "tab_particuliers": "الأفراد",
    "tab_pros": "المهنيون",
    "tab_entreprises": "الشركات",

    // Simulateur Express
    "sim_title": "محاكي عروض الأسعار السريع",
    "sim_sub": "احسبوا تسعيرتكم التقديرية لتأميناتكم بمراكش في ثوانٍ معدودة",
    "sim_type_label": "نوع التأمين المطلوب",
    "sim_opt_auto": "تأمين السيارات",
    "sim_opt_habitation": "تأمين السكن والرياض",
    "sim_opt_sante": "التأمين الصحي التكميلي",
    "sim_opt_pro": "متعدد المخاطر المهنية",
    "sim_opt_at": "حوادث الشغل (AT/MP)",
    "sim_name_label": "الاسم الكامل",
    "sim_phone_label": "رقم الهاتف / واتساب",
    "sim_calc_btn": "حساب عرض السعر المجاني",

    // FAQ
    "faq_title": "الأسئلة الشائعة",
    "faq_sub": "كل ما تودون معرفته حول الاكتتاب والضمانات لدى إشكال للتأمينات بمراكش",

    // Contact
    "contact_tag": "وكالة مراكش",
    "contact_agency_name": "إشكال للتأمينات",
    "contact_lead": "وكيل عام لأكسا للتأمين بالمغرب. يسعدنا استقبالكم في وكالتنا لحسن الاستقبال والاستفادة من استشارة شخصية.",
    "contact_addr_title": "عنوان الوكالة",
    "contact_addr_val": "الطابق الأرضي محل 2، عمارة الراحة رقم 8، شارع كمّاسة، المحاميد، مراكش",
    "contact_tel_title": "الهاتف والمحمول",
    "contact_email_title": "البريد الإلكتروني للاتصال",
    "contact_hours_title": "أوقات العمل الرسمية",
    "contact_hours_val": "من الإثنين إلى الجمعة: 08:30 - 19:00<br>السبت: 09:00 - 13:00",
    "contact_form_title": "أرسلوا لنا رسالة",
    "contact_form_sub": "يقوم مستشار مخصص بمعالجة طلبكم والرد خلال ساعتي عمل.",
    "contact_form_name": "الاسم الكامل *",
    "contact_form_phone": "الهاتف / واتساب *",
    "contact_form_email": "البريد الإلكتروني *",
    "contact_form_subject": "موضوع الطلب *",
    "contact_form_msg": "رسالتكم والتفاصيل *",
    "contact_form_btn": "إرسال طلبي الآن",

    // Social Media
    "social_title": "تواصلوا معنا عبر شبكات التواصل الاجتماعي",
    "social_follow": "تابعوا مستجداتنا وتواصلوا مع مستشارينا مباشرة عبر الصفحات الرسمية:",

    // Footer
    "footer_col1_desc": "وكالة عامة لأكسا للتأمين بالمغرب بمراكش (المحاميد). حماية العائلات، المهنيين، الحرفيين والشركات.",
    "footer_emergencies_title": "الطوارئ وأوقات العمل",
    "footer_rights": "© 2026 إشكال للتأمينات. جميع الحقوق محفوظة. وكيل عام أكسا للتأمين المغرب.",
    "footer_acaps": "اعتماد وسيط تأمين صادر عن هيئة مراقبة التأمينات والاحتياط الاجتماعي (ACAPS) وفقاً لمدونة التأمينات (القانون 17-99).",

    // Mobile Taskbar
    "taskbar_home": "الرئيسية",
    "taskbar_offers": "العروض",
    "taskbar_call": "اتصل",
    "taskbar_whatsapp": "واتساب",
    "taskbar_urgency": "طوارئ"
  },

  en: {
    // Top Bar
    "top_office_title": "Our Office",
    "top_office_desc": "Gr. Fl. Shop 2, Imm Erraha N°8<br>Av. Guemassa, M'hamid, Marrakech",
    "top_write_title": "Email Us",
    "top_call_title": "Call Us",
    "top_phone_fixe": "Landline: 05 25 36 30 61",
    "top_phone_gsm": "Mobile: 06 67 76 21 24",

    // Navigation
    "nav_home": "Home",
    "nav_agency": "Echkili Insurance",
    "nav_missions": "Missions & Values",
    "nav_agency_sub": "Echkili Agency",
    "nav_agency_contact": "Our Agency & Contact",
    "nav_coordinates": "Contact & Info",
    "nav_appointment": "Book Appointment",
    "nav_sinistre": "In Case of Accident (Emergency 24/7)",
    "nav_individuals": "Individuals",
    "nav_auto": "Car & Motorcycle Insurance",
    "nav_habitation": "Home & Riad (HABITASSUR)",
    "nav_sante": "Health & International Cover",
    "nav_epargne": "Savings & Retirement (Futuris II)",
    "nav_pros": "Professionals",
    "nav_multirisque_pro": "Professional Multi-Risk",
    "nav_rc_pro": "Professional Civil Liability",
    "nav_at_mp": "Work Accidents (Law 18-12)",
    "nav_flotte": "Fleet & Commercial Vehicles",
    "nav_all_pros": "All Professional Plans",
    "nav_enterprises": "Corporate",
    "nav_multi_indus": "Industrial Multi-Risk & Property",
    "nav_flotte_ent": "Corporate Fleet Insurance",
    "nav_sante_grp": "Group Health & Life Insurance",
    "nav_trc": "Contractor's All Risks (CAR)",
    "nav_contact": "Contact & Access",

    // Hero Slides
    "hero_slide0_headline": "Your AXA Agency in Marrakech",
    "hero_slide0_desc": "A team of dedicated experts at ECHKILI ASSURANCES agency,<br>Imm Erraha N°8, Av. Guemassa, M'hamid. Tailored advice and immediate response.",
    "hero_slide0_btn": "Book an Appointment",

    "hero_slide1_headline": "Are You a Business or Company?",
    "hero_slide1_desc": "Protect your capital investment,<br>your employees, or your legal liability with insurance solutions engineered for you.",
    "hero_slide1_btn": "Discover Corporate Plans",

    "hero_slide2_headline": "Car & Motorcycle Insurance",
    "hero_slide2_desc": "Benefit from complete all-risks coverage,<br>24/7 roadside assistance, and instant 0 km towing in Marrakech.",
    "hero_slide2_btn": "Request Car Quote",

    "hero_slide3_headline": "Home Protection HABITASSUR",
    "hero_slide3_desc": "Protect your home, riad, and family from unexpected events:<br>water damage, burglary, fire, and household civil liability.",
    "hero_slide3_btn": "Protect My Home",

    // Trust Grid
    "trust_agent_title": "Certified AXA General Agent",
    "trust_agent_desc": "ACAPS licensed insurance broker in Marrakech",
    "trust_assistance_title": "24/7 Accident Assistance",
    "trust_assistance_desc": "Immediate accident report support & towing",
    "trust_expertise_title": "Pro & Corporate Expertise",
    "trust_expertise_desc": "Workplace injury, fleets & commercial multi-risk",
    "trust_advice_title": "Personalized Consultation",
    "trust_advice_desc": "Free policy audit and tailored quote within 2h",

    // Missions & Valeurs
    "mv_title": "Missions & Values",
    "mv_lead": "AXA Morocco's mission is to empower clients to live with more confidence by protecting them against everyday risks and future uncertainties. <strong>Core values include:</strong>",
    "mv_card1_title": "Professionalism",
    "mv_card1_desc": "Exercising our craft with high competence, discipline, and daily commitment.",
    "mv_card2_title": "Customer Care",
    "mv_card2_desc": "Being readily available, attentive, and caring to meet your genuine needs.",
    "mv_card3_title": "Integrity",
    "mv_card3_desc": "Honoring our commitments and operating with total transparency and ethics.",
    "mv_card4_title": "Team Spirit",
    "mv_card4_desc": "Collaborating actively and sharing expertise for mutual success and satisfaction.",

    // Agence Echkili (Section 4)
    "echkili_kicker": "ECHKILI ASSURANCES",
    "echkili_title": "General Insurance Agency in Morocco.",
    "echkili_desc": "Deserves to be your privileged primary partner for your personal insurance or that of the enterprise or institution under your leadership.",
    "echkili_accident_title": "In Case of Accident",
    "echkili_accident_more": "Learn more",
    "echkili_accident_lead": "<strong>ECHKILI ASSURANCES</strong> guides and supports you through every step",
    "echkili_accident_details": "In the event of an accident or claim, our AXA general agency in Marrakech provides 24/7 emergency assistance, immediate processing of your accident report, and direct access to certified experts and repair centers.",
    "echkili_accident_call": "Emergency Claim Hotline: 05 25 36 30 61",

    // Catalogue Solutions
    "solutions_title": "Individual & Business Insurance Plans",
    "solutions_sub": "Explore our comprehensive portfolio of AXA Morocco insurance solutions tailored for every chapter of your personal and professional journey.",
    "tab_particuliers": "Individuals",
    "tab_pros": "Professionals",
    "tab_entreprises": "Corporate",

    // Simulateur Express
    "sim_title": "Instant Online Quote Simulator",
    "sim_sub": "Quickly estimate your premium for insurance solutions in Marrakech",
    "sim_type_label": "Select Insurance Type",
    "sim_opt_auto": "Car Insurance",
    "sim_opt_habitation": "Home / Riad Insurance",
    "sim_opt_sante": "Health & Supplementary",
    "sim_opt_pro": "Professional Multi-Risk",
    "sim_opt_at": "Workplace Injury (AT/MP)",
    "sim_name_label": "Your Full Name",
    "sim_phone_label": "Mobile Phone / WhatsApp",
    "sim_calc_btn": "Calculate Free Quote",

    // FAQ
    "faq_title": "Frequently Asked Questions",
    "faq_sub": "Everything you need to know about subscribing and policies at Assurances Echkili Marrakech",

    // Contact
    "contact_tag": "Marrakech Agency",
    "contact_agency_name": "Assurances Echkili",
    "contact_lead": "Official AXA Assurance Morocco General Agent. Visit our office for a warm welcome and personalized advisory.",
    "contact_addr_title": "Agency Address",
    "contact_addr_val": "Ground floor shop 2, Imm Erraha N°8, Av. Guemassa, M'hamid, Marrakech",
    "contact_tel_title": "Phone & Mobile",
    "contact_email_title": "Contact Email",
    "contact_hours_title": "Opening Hours",
    "contact_hours_val": "Monday to Friday: 08:30 AM - 07:00 PM<br>Saturday: 09:00 AM - 01:00 PM",
    "contact_form_title": "Send Us a Message",
    "contact_form_sub": "A dedicated advisor will process your message within 2 business hours.",
    "contact_form_name": "Your Full Name *",
    "contact_form_phone": "Phone / WhatsApp *",
    "contact_form_email": "Your Email Address *",
    "contact_form_subject": "Subject of Inquiry *",
    "contact_form_msg": "Your Message / Details *",
    "contact_form_btn": "Send My Inquiry",

    // Social Media
    "social_title": "Connect With Us on Social Media",
    "social_follow": "Follow our latest updates and chat directly with our advisors:",

    // Footer
    "footer_col1_desc": "Official AXA Morocco General Insurance Agency in Marrakech (M'hamid). Protecting families, professionals, artisans, and enterprises.",
    "footer_emergencies_title": "Emergencies & Hours",
    "footer_rights": "© 2026 Assurances Echkili. All rights reserved. AXA Assurance Morocco General Agent.",
    "footer_acaps": "Insurance Intermediary License granted by ACAPS under Moroccan Insurance Code (Law 17-99).",

    // Mobile Taskbar
    "taskbar_home": "Home",
    "taskbar_offers": "Offers",
    "taskbar_call": "Call",
    "taskbar_whatsapp": "WhatsApp",
    "taskbar_urgency": "Urgency"
  }
};

let currentLang: SupportedLanguage = 'fr';

export function getLanguage(): SupportedLanguage {
  try {
    const saved = localStorage.getItem('echkili_lang') as SupportedLanguage;
    if (saved && (saved === 'fr' || saved === 'ar' || saved === 'en')) {
      return saved;
    }
  } catch (e) {}
  return 'fr';
}

export function setLanguage(lang: SupportedLanguage) {
  if (lang !== 'fr' && lang !== 'ar' && lang !== 'en') {
    lang = 'fr';
  }
  currentLang = lang;

  try {
    localStorage.setItem('echkili_lang', lang);
  } catch (e) {}

  // Mise à jour de l'attribut racine html
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  // Mise à jour des boutons de langue actifs
  document.querySelectorAll('.lang-btn, .mobile-menu-lang-btn').forEach((btn) => {
    const btnLang = btn.getAttribute('data-lang');
    if (btnLang === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const dict = translations[lang] || translations.fr;

  // Traduction des éléments data-i18n
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key && dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // Traduction des éléments data-i18n-html
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (key && dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Traduction des placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key && dict[key] !== undefined) {
      (el as HTMLInputElement | HTMLTextAreaElement).placeholder = dict[key];
    }
  });

  // Mise à jour spécifique du hero slider si présent
  updateHeroSliderContent(lang);

  // Émission d'un événement global
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

function updateHeroSliderContent(lang: SupportedLanguage) {
  const dict = translations[lang] || translations.fr;
  const headlineEl = document.getElementById('heroSlideHeadline');
  const descEl = document.getElementById('heroSlideDesc');
  const btnEl = document.getElementById('heroSlideBtn');

  // Déterminer la slide active
  const activeSlide = document.querySelector('.hero-slide-item.active');
  const index = activeSlide ? parseInt(activeSlide.getAttribute('data-slide-index') || '0', 10) : 0;

  if (headlineEl && dict[`hero_slide${index}_headline`]) {
    headlineEl.innerHTML = dict[`hero_slide${index}_headline`];
  }
  if (descEl && dict[`hero_slide${index}_desc`]) {
    descEl.innerHTML = dict[`hero_slide${index}_desc`];
  }
  if (btnEl && dict[`hero_slide${index}_btn`]) {
    btnEl.textContent = dict[`hero_slide${index}_btn`];
  }
}

// Initialisation automatique dès le chargement du DOM
export function initI18n() {
  const initialLang = getLanguage();
  setLanguage(initialLang);

  // Ecouteurs sur les boutons de sélection de langue
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const btn = target.closest('.lang-btn, .mobile-menu-lang-btn') as HTMLElement;
    if (btn) {
      const selectedLang = btn.getAttribute('data-lang') as SupportedLanguage;
      if (selectedLang) {
        setLanguage(selectedLang);
      }
    }
  });
}

// Rendre disponible globalement sur window pour un usage direct dans le HTML
declare global {
  interface Window {
    setSiteLanguage: (lang: SupportedLanguage) => void;
    getCurrentLanguage: () => SupportedLanguage;
    getI18nText: (key: string) => string;
  }
}

if (typeof window !== 'undefined') {
  window.setSiteLanguage = setLanguage;
  window.getCurrentLanguage = () => currentLang;
  window.getI18nText = (key: string) => {
    const dict = translations[currentLang] || translations.fr;
    return dict[key] || key;
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
  } else {
    initI18n();
  }
}
