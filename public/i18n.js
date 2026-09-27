// Système multilingue complet (Français, العربية, English) pour Assurances Echkili
(function () {
  'use strict';

  const TRANSLATIONS = {
    fr: {
      site_title: "Assurances Echkili | Agent Général AXA Marrakech",
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

      top_office: "Notre bureau",
      top_office_desc: "Rdc magasin 2, Imm Erraha N°8<br>Av. Guemassa, M'hamid, Marrakech",
      top_write: "Écrivez-nous",
      top_call: "Appelez-nous",
      top_fixe: "Fixe : 05 25 36 30 61",
      top_gsm: "GSM : 06 67 76 21 24",

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

      mv_title: "Missions &amp; valeurs",
      mv_lead: "La mission d'AXA Maroc est d'aider ses clients à vivre avec plus de confiance en les protégeant face aux imprévus du quotidien et aux risques de demain. <strong>Ses valeurs reposent notamment sur :</strong>",
      mv_val_1: "La proximité et l’écoute des clients",
      mv_val_2: "L’innovation au service de l’utilisateur",
      mv_val_3: "La transparence et la confiance",
      mv_val_4: "L’excellence opérationnelle",
      mv_val_5: "L’engagement humain et sociétal",
      mv_outro: "À travers ses solutions et ses services, AXA Maroc cherche à offrir <strong>une protection durable, adaptée aux nouveaux modes de vie et aux enjeux contemporains.</strong>",

      sim_kicker: "ECHKILI ASSURANCES",
      sim_title: "Est une agence générale d’assurance au Maroc .",
      sim_desc: "Mérite d’être votre interlocuteur privilégié pour vos assurances ou celles de l'entreprise ou de l'institution dont vous avez la responsabilité.",
      sim_accident_title: "En cas d'accident",
      sim_accident_more: "En savoir plus",
      sim_accident_lead: "<strong>ECHKILI ASSURANCES</strong> vous accompagne tout au long de vos démarches",
      sim_accident_body: "En cas de sinistre ou d'accident, notre agence générale AXA à Marrakech met à votre disposition son assistance 24/7, la prise en charge immédiate de votre déclaration de constat, ainsi que son réseau d'experts et de garages agréés.",
      sim_accident_tel: "Assistance Sinistre : 05 25 36 30 61",

      sol_title_1: "Nos Solutions Particuliers",
      sol_title_2: "Professionnels",
      tab_particuliers: "Assurance Particuliers (6)",
      tab_pros: "Professionnels & Entreprises (6)",
      tab_all: "Toutes les Solutions (12)",
      card_btn_decouvrir: "DÉCOUVRIR L'OFFRE",

      faq_tag: "Foire Aux Questions",
      faq_title: "Questions Fréquemment Posées",
      faq_sub: "Retrouvez les réponses aux interrogations les plus courantes de nos assurés.",
      faq_q1: "Comment souscrire ou transférer mon assurance chez Assurances Echkili ?",
      faq_a1: "La démarche est simple et immédiate. Rendez-vous à notre agence à l'Avenue Guemassa (M'hamid, Marrakech) muni de vos pièces justificatives. Notre équipe s'occupe de l'ensemble des formalités de résiliation auprès de votre ancien assureur et active vos garanties le jour même.",
      faq_q2: "Que faire immédiatement en cas d'accident de voiture à Marrakech ?",
      faq_a2: "1. Mettez-vous en sécurité. 2. Remplissez le constat amiable avec l'autre conducteur ou faites appel au constat rapide. 3. Contactez notre assistance 24/7 au 05 25 36 30 61 pour l'envoi d'une dépanneuse 0 km. 4. Déposez votre constat sous 5 jours à l'agence pour la prise en charge directe des réparations en garage agréé AXA.",
      faq_q3: "Proposez-vous des tarifs préférentiels pour les fonctionnaires et conventions ?",
      faq_a3: "Oui ! En tant qu'Agent Général AXA, nous appliquons l'ensemble des conventions nationales officielles (Fondation Mohammed VI éducation, ministères, fonction publique, banques et grands groupes). Présentez votre attestation d'affiliation pour bénéficier de réductions immédiates pouvant aller jusqu'à 30%.",
      faq_q4: "Quels sont les délais d'indemnisation pour un sinistre habitation ou professionnel ?",
      faq_a4: "Grâce à notre mandat d'agence générale et au réseau d'experts AXA à Marrakech, les dossiers de sinistre habitation ou bris de glace sont traités avec la plus grande célérité. Dès réception du rapport d'expertise, le règlement ou l'ordre de réparation est émis directement par l'agence.",
      faq_q5: "Comment obtenir un devis personnalisé sans me déplacer ?",
      faq_a5: "Vous pouvez remplir le formulaire de devis ci-dessous ou nous envoyer vos documents par WhatsApp au 06 67 76 21 24. M. Achraf Echkili et son équipe vous transmettront une étude détaillée et chiffrée sous 2 heures ouvrées.",

      contact_tag: "Agence Marrakech",
      contact_agency_name: "Assurances Echkili",
      contact_agency_sub: "Agent Général AXA Assurance Maroc. Venez nous rencontrer à l'agence pour un accueil chaleureux et des conseils personnalisés.",
      contact_address_title: "Adresse de l'Agence",
      contact_address_desc: "Rdc magasin 2 imm erraha n°8 av guemassa mhamid Marrakech",
      contact_hours_title: "Horaires d'Ouverture",
      contact_hours_week: "Du Lundi au Vendredi : 08h30 - 18h30",
      contact_hours_sat: "Samedi : 09h00 - 13h00",
      contact_socials_title: "Réseaux Sociaux Officiels",

      cf_tag: "Réponse Sous 2H",
      cf_title: "Demande de devis &amp; Contact",
      cf_sub: "Remplissez ce formulaire pour recevoir votre étude chiffrée gratuite ou solliciter un rendez-vous avec M. Achraf Echkili.",
      cf_name_label: "Nom &amp; Prénom",
      cf_phone_label: "Téléphone Mobile (WhatsApp)",
      cf_email_label: "Adresse Email",
      cf_subject_label: "Sujet de votre demande",
      cf_subject_opt1: "Demande de Devis Auto / Véhicule",
      cf_subject_opt2: "Demande de Devis Habitation (HABITASSUR)",
      cf_subject_opt3: "Demande de Devis Santé Sehassur",
      cf_subject_opt4: "Demande de Devis Entreprise / Pro",
      cf_subject_opt5: "Autre question / Prise de Rendez-vous",
      cf_message_label: "Votre Message / Précisions",
      cf_message_placeholder: "Précisez votre véhicule (puissance, usage), votre logement (surface, pièces) ou toute information utile pour votre devis...",
      cf_privacy: "Vos données personnelles sont traitées en toute confidentialité par notre agence et ne sont jamais communiquées à des tiers.",
      cf_submit_btn: "Envoyer ma Demande Gratuite",

      footer_tagline: "Agence Générale AXA Assurance Maroc Marrakech",
      footer_desc: "Société d'Intermédiation d'Assurance régie par la loi 17-99 portant Code des Assurances. Votre partenaire de confiance à Marrakech pour la protection des particuliers et des entreprises.",
      footer_follow: "Suivez-nous :",
      footer_rights: "Tous droits réservés. Agréé ACAPS & Réseau Officiel AXA Assurance Maroc.",

      // Mobile taskbar
      mb_home: "Accueil",
      mb_offers: "Offres",
      mb_call: "Appeler",
      mb_wa: "WhatsApp",
      mb_urgency: "Urgence",

      // Offres catalogue & Produit
      catalog_title: "Catalogue des Offres AXA",
      catalog_sub: "Toutes les solutions de protection pour Particuliers, Professionnels et Entreprises à Marrakech.",
      catalog_filter_all: "Toutes les offres",
      catalog_filter_particuliers: "Particuliers",
      catalog_filter_pros: "Professionnels & Entreprises",
      catalog_search_placeholder: "Rechercher une assurance (auto, habitation, santé, pro...)...",
      prod_breadcrumb_home: "Accueil",
      prod_breadcrumb_offers: "Offres",
      prod_quote_btn: "Demander mon Devis Express",
      prod_wa_btn: "Échanger sur WhatsApp",
      prod_call_btn: "05 25 36 30 61",
      prod_presentation_title: "Présentation de votre contrat",
      prod_guarantees_title: "Garanties & Prestations Incluses",
      prod_advantages_title: "Les Avantages Assurances Echkili",
      prod_documents_title: "Documents Requis pour la Souscription",
      prod_faq_title: "Questions Fréquentes sur cette Offre"
    },

    ar: {
      site_title: "تأمينات شكيلـي | وكيل عام أكسا مراكش",
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

      top_office: "مكتبنا بالوكالة",
      top_office_desc: "طابق أرضي محل 2، عمارة الراحة رقم 8<br>شارع كَمَاسة، المحاميد، مراكش",
      top_write: "راسلونا عبر البريد",
      top_call: "اتصلوا بنا مباشرة",
      top_fixe: "الثابت : 05 25 36 30 61",
      top_gsm: "المحمول / واتساب : 06 67 76 21 24",

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

      mv_title: "المهام والقيم",
      mv_lead: "تتمثل مهمة أكسا المغرب في تمكين زبنائها من العيش بثقة وطمأنينة عبر حمايتهم من تقلبات الحياة اليومية وتحديات المستقبل. <strong>وترتكز قيمها الأساسية على:</strong>",
      mv_val_1: "القرب والإنصات المستمر للزبناء",
      mv_val_2: "الابتكار الرقمي في خدمة المؤمن له",
      mv_val_3: "الشفافية الكاملة وبناء الثقة",
      mv_val_4: "التميز التشغيلي وجودة التعويض",
      mv_val_5: "الالتزام الإنساني والمسؤولية المجتمعية",
      mv_outro: "من خلال باقاتها وخدماتها المتميزة، تسعى أكسا المغرب إلى تقديم <strong>حماية مستدامة تتكيف مع أساليب الحياة الحديثة وتلبي متطلبات اليوم والمستقبل.</strong>",

      sim_kicker: "تأمينات شكيلـي",
      sim_title: "وكالة عامة رائدة للتأمين في المغرب .",
      sim_desc: "شريككم الاستراتيجي والأمثل لإدارة كافة عقود التأمين الخاصة بكم أو بمقاولتكم ومؤسستكم في مدينة مراكش.",
      sim_accident_title: "في حالة وقوع حادث",
      sim_accident_more: "المزيد من التفاصيل",
      sim_accident_lead: "<strong>تأمينات شكيلـي</strong> ترافقكم خطوة بخطوة في جميع الإجراءات وتصريح الحوادث",
      sim_accident_body: "في حالة حادث سير أو مطالبة بتعويض، تضع وكالتنا العامة أكسا بمراكش رهن إشارتكم المساعدة 24/7، والتسجيل الفوري للمعاينة، وشبكتنا الواسعة من الخبراء وورشات الإصلاح المعتمدة.",
      sim_accident_tel: "مصلحة الحوادث والنجدة : 05 25 36 30 61",

      sol_title_1: "حلول التأمين للأفراد",
      sol_title_2: "والمقاولات",
      tab_particuliers: "تأمين الأفراد (6)",
      tab_pros: "المقاولات والمهنيون (6)",
      tab_all: "جميع الحلول (12)",
      card_btn_decouvrir: "اكتشف العرض",

      faq_tag: "الأسئلة الشائعة",
      faq_title: "الأسئلة الأكثر تداولاً",
      faq_sub: "إليكم إجابات دقيقة وشاملة على استفساراتكم المتعلقة بمختلف عقود التأمين.",
      faq_q1: "كيف يمكنني الاكتتاب أو تحويل تأميني إلى وكالة تأمينات شكيلـي ؟",
      faq_a1: "الإجراءات بسيطة وفورية. تفضلوا بزيارة مقر وكالتنا بشارع كَمَاسة (المحاميد، مراكش) مع وثائقكم الثبوتية. يتكفل فريقنا بكافة إجراءات فسخ العقد القديم وتفعيل تغطيتكم في نفس اليوم.",
      faq_q2: "ما هي الخطوات الفورية الواجب اتخاذها عند وقوع حادث سير بمراكش ؟",
      faq_a2: "1. تأمين سلامتكم ومكان الحادث. 2. ملء المعاينة الودية بدقة أو طلب المعاينة السريعة. 3. الاتصال فوراً بخدمة النجدة 24/7 على 05 25 36 30 61 لإرسال شاحنة القطر 0 كلم. 4. إيداع المعاينة بالوكالة في غضون 5 أيام لبدء الإصلاح في ورشة معتمدة.",
      faq_q3: "هل توفر الوكالة تخفيضات خاصة بموظفي الدولة والاتفاقيات ؟",
      faq_a3: "نعم بالتأكيد! بصفتنا وكيلاً عاماً لأكسا المغرب، نطبق جميع الاتفاقيات الوطنية الرسمية (مؤسسة محمد السادس للتعليم، الوزارات، الوظيفة العمومية، والأبناك). أدلوا ببطاقتكم المهنية للاستفادة من تخفيضات فورية تصل إلى 30%.",
      faq_q4: "ما هي آجال التعويض في حوادث السكن أو الأنشطة المهنية ؟",
      faq_a4: "بفضل تفويض وكالتنا وشبكة خبراء أكسا بمراكش، تتم معالجة ملفات السكن وتكسر الزجاج بأعلى سرعة ممكنة. بمجرد التوصل بتقرير الخبرة، يصدر التعويض أو إذن الإصلاح مباشرة من وكالتنا.",
      faq_q5: "كيف أحصل على دراسة تسعيرية دون الحضور إلى الوكالة ؟",
      faq_a5: "يمكنكم تعبئة نموذج التسعيرة أسفله أو إرسال الوثائق عبر الواتساب على 06 67 76 21 24. وسيقوم السيد أشرف شكيلـي وفريقه بإرسال دراسة مفصلة ومجانية في أقل من ساعتي عمل.",

      contact_tag: "وكالة مراكش",
      contact_agency_name: "تأمينات شكيلـي",
      contact_agency_sub: "وكيل عام معتمد لأكسا المغرب. يسعدنا استقبالكم في مقر وكالتنا بمراكش لتقديم أفضل النصائح والعروض المناسبة.",
      contact_address_title: "عنوان الوكالة",
      contact_address_desc: "طابق أرضي محل 2، عمارة الراحة رقم 8، شارع كَمَاسة، المحاميد، مراكش",
      contact_hours_title: "مواقيت العمل",
      contact_hours_week: "من الإثنين إلى الجمعة : 08h30 - 18h30",
      contact_hours_sat: "السبت : 09h00 - 13h00",
      contact_socials_title: "صفحاتنا الرسمية",

      cf_tag: "إجابة خلال ساعتين",
      cf_title: "طلب تسعيرة واستشارة مجانية",
      cf_sub: "يرجى تعبئة النموذج أسفله لتلقي دراسة تسعيرية مجانية أو لحجز استشارة مع السيد أشرف شكيلـي.",
      cf_name_label: "الاسم الكامل",
      cf_phone_label: "رقم الهاتف المحمول (واتساب)",
      cf_email_label: "البريد الإلكتروني",
      cf_subject_label: "موضوع الطلب",
      cf_subject_opt1: "طلب تسعيرة تأمين سيارة / دراجة",
      cf_subject_opt2: "طلب تسعيرة تأمين سكن (هابيتاسور)",
      cf_subject_opt3: "طلب تسعيرة تأمين صحي",
      cf_subject_opt4: "طلب تسعيرة مقاولة / نشاط مهني",
      cf_subject_opt5: "استفسار آخر / حجز موعد",
      cf_message_label: "تفاصيل الطلب",
      cf_message_placeholder: "وضحوا نوع المركبة، أو مواصفات السكن، أو أي تفاصيل تفيد في إعداد دراسة التسعيرة...",
      cf_privacy: "بياناتكم الشخصية محمية ومحفوظة بسرية تامة لدى وكالتنا ولا يتم الإدلاء بها لأي أطراف أخرى.",
      cf_submit_btn: "إرسال طلبي الآن",

      footer_tagline: "وكيل عام معتمد لأكسا المغرب بمراكش",
      footer_desc: "شركة وساطة في التأمين خاضعة للقانون رقم 17-99 بمثابة مدونة التأمينات. شريككم الموثوق لحماية الأفراد والمقاولات في مراكش.",
      footer_follow: "تابعونا على :",
      footer_rights: "جميع الحقوق محفوظة. معتمد من هيئة مراقبة التأمينات ACAPS والشبكة الرسمية لأكسا المغرب.",

      mb_home: "الرئيسية",
      mb_offers: "العروض",
      mb_call: "اتصال",
      mb_wa: "واتساب",
      mb_urgency: "طوارئ",

      catalog_title: "دليل عروض تأمينات أكسا",
      catalog_sub: "جميع حلول الحماية والتغطية التأمينية للأفراد والمهنيين والمقاولات بمدينة مراكش.",
      catalog_filter_all: "جميع العروض",
      catalog_filter_particuliers: "الأفراد",
      catalog_filter_pros: "المقاولات والمهنيون",
      catalog_search_placeholder: "ابحث عن تأمين (سيارة، سكن، صحة، مقاولة...)...",
      prod_breadcrumb_home: "الرئيسية",
      prod_breadcrumb_offers: "العروض",
      prod_quote_btn: "طلب تسعيرة فورية",
      prod_wa_btn: "تواصل عبر واتساب",
      prod_call_btn: "05 25 36 30 61",
      prod_presentation_title: "تقديم العقد والضمانات",
      prod_guarantees_title: "الضمانات والخدمات المشمولة",
      prod_advantages_title: "امتيازات وكالة تأمينات شكيلـي",
      prod_documents_title: "الوثائق المطلوبة للاكتتاب",
      prod_faq_title: "أسئلة شائعة حول هذا العرض"
    },

    en: {
      site_title: "Assurances Echkili | AXA General Agent Marrakech",
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

      top_office: "Our Office",
      top_office_desc: "Ground Floor Shop 2, Imm Erraha N°8<br>Guemassa Ave, M'hamid, Marrakech",
      top_write: "Email Us",
      top_call: "Call Us",
      top_fixe: "Office: 05 25 36 30 61",
      top_gsm: "Mobile / WA: 06 67 76 21 24",

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

      mv_title: "Missions &amp; Values",
      mv_lead: "AXA Morocco's mission is to empower clients to live with confidence by protecting them against everyday unforeseen events and tomorrow's risks. <strong>Its core values rely on:</strong>",
      mv_val_1: "Customer proximity and active listening",
      mv_val_2: "Innovation serving user convenience",
      mv_val_3: "Complete transparency and trust",
      mv_val_4: "Operational excellence and fast claims",
      mv_val_5: "Human and societal commitment",
      mv_outro: "Through its solutions and services, AXA Morocco delivers <strong>sustainable protection tailored to contemporary lifestyles and emerging challenges.</strong>",

      sim_kicker: "ECHKILI ASSURANCES",
      sim_title: "A leading general insurance agency in Morocco .",
      sim_desc: "Your privileged and trusted insurance advisor for your personal policies or protecting the enterprise or institution you manage in Marrakech.",
      sim_accident_title: "In Case of an Accident",
      sim_accident_more: "Learn More",
      sim_accident_lead: "<strong>ECHKILI ASSURANCES</strong> guides and supports you through every step of your claim",
      sim_accident_body: "In the event of an accident or loss, our AXA general agency in Marrakech provides 24/7 assistance, instant claim declaration processing, and access to approved repair shops.",
      sim_accident_tel: "Claims Assistance: 05 25 36 30 61",

      sol_title_1: "Insurance Solutions for Individuals",
      sol_title_2: "&amp; Businesses",
      tab_particuliers: "Personal Insurance (6)",
      tab_pros: "Commercial &amp; Business (6)",
      tab_all: "All Solutions (12)",
      card_btn_decouvrir: "DISCOVER PLAN",

      faq_tag: "FAQ",
      faq_title: "Frequently Asked Questions",
      faq_sub: "Find clear answers to the most common questions about our insurance policies.",
      faq_q1: "How can I purchase or transfer my policy to Assurances Echkili?",
      faq_a1: "The process is fast and seamless. Visit our agency on Avenue Guemassa (M'hamid, Marrakech) with your identity documents. Our team handles cancellation paperwork with your prior insurer and activates your coverage the very same day.",
      faq_q2: "What should I do immediately after a car accident in Marrakech?",
      faq_a2: "1. Stay calm and secure the scene. 2. Fill out the joint accident report or call rapid assistance. 3. Call our 24/7 hotline at 05 25 36 30 61 for immediate 0-km towing. 4. Submit your claim within 5 days at our agency for direct repair approval with certified garages.",
      faq_q3: "Do you offer corporate or government employee group discounts?",
      faq_a3: "Yes! As an authorized AXA General Agent, we apply all official national conventions (Mohammed VI Education Foundation, ministries, public servants, banking staff, and major corporations). Show your employee badge for immediate savings of up to 30%.",
      faq_q4: "How long does it take to settle property or business claims?",
      faq_a4: "With our general agency authority and AXA's verified expert network in Marrakech, property and glass claims are resolved swiftly. Once the survey is completed, payment or direct repair orders are issued on site.",
      faq_q5: "Can I receive a tailored quote without visiting the office?",
      faq_a5: "Yes, simply submit the online quote form below or message our team via WhatsApp at 06 67 76 21 24. Mr. Achraf Echkili and his advisors will send your custom proposal within 2 business hours.",

      contact_tag: "Marrakech Agency",
      contact_agency_name: "Assurances Echkili",
      contact_agency_sub: "General Agent for AXA Morocco. Visit our agency in Marrakech for personalized advice and warm customer service.",
      contact_address_title: "Agency Location",
      contact_address_desc: "Ground Floor Shop 2, Imm Erraha N°8, Guemassa Ave, M'hamid, Marrakech",
      contact_hours_title: "Opening Hours",
      contact_hours_week: "Monday to Friday: 08:30 AM - 06:30 PM",
      contact_hours_sat: "Saturday: 09:00 AM - 01:00 PM",
      contact_socials_title: "Official Social Channels",

      cf_tag: "Response within 2 hours",
      cf_title: "Free Quote &amp; Inquiries",
      cf_sub: "Fill out this form to receive a free tailored quote or request a private consultation with Mr. Achraf Echkili.",
      cf_name_label: "Full Name",
      cf_phone_label: "Mobile Phone (WhatsApp)",
      cf_email_label: "Email Address",
      cf_subject_label: "Subject of Request",
      cf_subject_opt1: "Car / Vehicle Quote Request",
      cf_subject_opt2: "Home Insurance Quote (HABITASSUR)",
      cf_subject_opt3: "Health Insurance Quote (Sehassur)",
      cf_subject_opt4: "Business / Commercial Plan Quote",
      cf_subject_opt5: "General Inquiry / Appointment",
      cf_message_label: "Your Message &amp; Details",
      cf_message_placeholder: "Describe your vehicle (horsepower, model), your property (area, rooms) or any details helpful for your quote...",
      cf_privacy: "Your personal data is strictly protected by our agency and will never be shared with third parties.",
      cf_submit_btn: "Send My Request Now",

      footer_tagline: "AXA Assurance Morocco General Agent Marrakech",
      footer_desc: "Insurance Brokerage Firm governed by Moroccan Insurance Code Law 17-99. Your trusted local partner for individual and business insurance.",
      footer_follow: "Follow Us:",
      footer_rights: "All rights reserved. ACAPS Licensed & Official AXA Morocco Network.",

      mb_home: "Home",
      mb_offers: "Offers",
      mb_call: "Call",
      mb_wa: "WhatsApp",
      mb_urgency: "Emergency",

      catalog_title: "AXA Insurance Catalog",
      catalog_sub: "Complete range of insurance solutions for individuals, professionals, and enterprises in Marrakech.",
      catalog_filter_all: "All Offers",
      catalog_filter_particuliers: "Personal",
      catalog_filter_pros: "Commercial & Business",
      catalog_search_placeholder: "Search an insurance (car, home, health, commercial...)...",
      prod_breadcrumb_home: "Home",
      prod_breadcrumb_offers: "Offers",
      prod_quote_btn: "Request a Fast Quote",
      prod_wa_btn: "Chat on WhatsApp",
      prod_call_btn: "05 25 36 30 61",
      prod_presentation_title: "Policy Overview",
      prod_guarantees_title: "Included Guarantees & Coverages",
      prod_advantages_title: "Assurances Echkili Key Advantages",
      prod_documents_title: "Required Documents for Policy Enrollment",
      prod_faq_title: "Frequently Asked Questions"
    }
  };

  function getStoredLang() {
    try {
      const saved = localStorage.getItem('echkili_site_lang');
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
    } catch (e) {}

    const htmlEl = document.documentElement;
    htmlEl.lang = lang;
    htmlEl.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.body.classList.remove('lang-fr', 'lang-ar', 'lang-en');
    document.body.classList.add('lang-' + lang);

    const dict = TRANSLATIONS[lang];

    // Set document title if applicable
    if (dict.site_title && !document.querySelector('.product-hero-lite')) {
      document.title = dict.site_title;
    }

    // Update all elements with data-i18n (textContent)
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Update all elements with data-i18n-html (innerHTML)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Update all elements with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Update active class on all language buttons
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

    // Intelligent Selector Mapping for any elements that might not have data-i18n
    applySelectorTranslations(dict, lang);

    // If hero slide is active on index.html, update current slide text
    const headlineEl = document.getElementById('heroSlideHeadline');
    const descEl = document.getElementById('heroSlideDesc');
    const btnEl = document.getElementById('heroSlideBtn');
    if (headlineEl && descEl && btnEl) {
      const currentActiveSlide = document.querySelector('.hero-slide-item.active');
      let slideIdx = 0;
      if (currentActiveSlide) {
        slideIdx = parseInt(currentActiveSlide.getAttribute('data-slide-index') || '0', 10);
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

    // Trigger custom event for other components (e.g. offers-data or map)
    window.dispatchEvent(new CustomEvent('echkiliLanguageChanged', { detail: { lang, dict } }));
  }

  function applySelectorTranslations(dict, lang) {
    // Top contact items
    const officeHeader = document.querySelector('.header-contact-item:nth-child(1) .header-contact-title');
    if (officeHeader) officeHeader.textContent = dict.top_office;
    const officeSub = document.querySelector('.header-contact-item:nth-child(1) .header-contact-sub');
    if (officeSub) officeSub.innerHTML = dict.top_office_desc;

    const emailHeader = document.querySelector('.header-contact-item:nth-child(2) .header-contact-title');
    if (emailHeader) emailHeader.textContent = dict.top_write;

    const callHeader = document.querySelector('.header-contact-item:nth-child(3) .header-contact-title');
    if (callHeader) callHeader.textContent = dict.top_call;

    // Main navigation top items
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

    // Dropdown items for Echkili
    const echkiliLinks = document.querySelectorAll('#navDropdownEchkili .nav-dropdown-link span');
    if (echkiliLinks.length >= 3) {
      if (echkiliLinks[0]) echkiliLinks[0].textContent = dict.nav_missions;
      if (echkiliLinks[1]) echkiliLinks[1].textContent = dict.nav_agency;
      if (echkiliLinks[2]) echkiliLinks[2].textContent = dict.nav_contact;
    }
    const echkiliSinistre = document.querySelector('#navDropdownEchkili .nav-dropdown-link-danger span');
    if (echkiliSinistre) echkiliSinistre.textContent = dict.nav_sinistres;

    // Dropdown items for Particuliers
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

    // Dropdown items for Pros
    const proLinks = document.querySelectorAll('#navDropdownPros .nav-dropdown-link span');
    if (proLinks.length >= 4) {
      if (proLinks[0]) proLinks[0].textContent = dict.nav_multirisque_pro;
      if (proLinks[1]) proLinks[1].textContent = dict.nav_rc_pro;
      if (proLinks[2]) proLinks[2].textContent = dict.nav_at_mp;
      if (proLinks[3]) proLinks[3].textContent = dict.nav_flotte;
    }
    const proMore = document.querySelector('#navDropdownPros .nav-dropdown-link-more span');
    if (proMore) proMore.textContent = dict.nav_all_pros;

    // Dropdown items for Entreprises
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

    // Missions & Valeurs section
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

    // Similair / Agency Block
    const simKicker = document.querySelector('.similair-kicker');
    if (simKicker) simKicker.textContent = dict.sim_kicker;

    const simTitle = document.querySelector('.similair-title');
    if (simTitle) simTitle.textContent = dict.sim_title;

    const simDesc = document.querySelector('.similair-desc');
    if (simDesc) simDesc.textContent = dict.sim_desc;

    const simAccidentTitle = document.querySelector('.similair-accident-title');
    if (simAccidentTitle) simAccidentTitle.textContent = dict.sim_accident_title;

    const simAccidentLead = document.querySelector('.similair-accident-lead');
    if (simAccidentLead) simAccidentLead.innerHTML = dict.sim_accident_lead;

    const simAccidentBody = document.querySelector('.similair-accident-body');
    if (simAccidentBody) simAccidentBody.textContent = dict.sim_accident_body;

    const simAccidentTel = document.querySelector('.similair-accident-tel span');
    if (simAccidentTel) simAccidentTel.textContent = dict.sim_accident_tel;

    // Solutions Tabs
    const tabPart = document.querySelector('.tab-btn[data-tab="particuliers"]');
    if (tabPart) tabPart.textContent = dict.tab_particuliers;
    const tabPros = document.querySelector('.tab-btn[data-tab="pros"]');
    if (tabPros) tabPros.textContent = dict.tab_pros;
    const tabAll = document.querySelector('.tab-btn[data-tab="all"]');
    if (tabAll) tabAll.textContent = dict.tab_all;

    // Card CTA buttons
    document.querySelectorAll('.card-link-decouvrir span, .card-link-quote span').forEach(el => {
      el.textContent = dict.card_btn_decouvrir;
    });

    // FAQ Section
    const faqTag = document.querySelector('.faq-tag');
    if (faqTag) faqTag.textContent = dict.faq_tag;
    const faqTitle = document.querySelector('.faq-header .section-title');
    if (faqTitle) faqTitle.textContent = dict.faq_title;
    const faqSub = document.querySelector('.faq-subtitle');
    if (faqSub) faqSub.textContent = dict.faq_sub;

    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length >= 5) {
      const q1 = faqItems[0].querySelector('.faq-question-btn span');
      const a1 = faqItems[0].querySelector('.faq-answer p');
      if (q1) q1.textContent = dict.faq_q1;
      if (a1) a1.textContent = dict.faq_a1;

      const q2 = faqItems[1].querySelector('.faq-question-btn span');
      const a2 = faqItems[1].querySelector('.faq-answer p');
      if (q2) q2.textContent = dict.faq_q2;
      if (a2) a2.textContent = dict.faq_a2;

      const q3 = faqItems[2].querySelector('.faq-question-btn span');
      const a3 = faqItems[2].querySelector('.faq-answer p');
      if (q3) q3.textContent = dict.faq_q3;
      if (a3) a3.textContent = dict.faq_a3;

      const q4 = faqItems[3].querySelector('.faq-question-btn span');
      const a4 = faqItems[3].querySelector('.faq-answer p');
      if (q4) q4.textContent = dict.faq_q4;
      if (a4) a4.textContent = dict.faq_a4;

      const q5 = faqItems[4].querySelector('.faq-question-btn span');
      const a5 = faqItems[4].querySelector('.faq-answer p');
      if (q5) q5.textContent = dict.faq_q5;
      if (a5) a5.textContent = dict.faq_a5;
    }

    // Agency & Contact Details
    const contactTag = document.querySelector('.contact-tag');
    if (contactTag) contactTag.textContent = dict.contact_tag;
    const agencyName = document.querySelector('.agency-name');
    if (agencyName) agencyName.textContent = dict.contact_agency_name;
    const agencySub = document.querySelector('.agency-sub');
    if (agencySub) agencySub.textContent = dict.contact_agency_sub;
    const contactTitles = document.querySelectorAll('.contact-item-title');
    if (contactTitles.length >= 3) {
      if (contactTitles[0]) contactTitles[0].textContent = dict.contact_address_title;
      if (contactTitles[1]) contactTitles[1].textContent = dict.contact_hours_title;
      if (contactTitles[2]) contactTitles[2].textContent = dict.contact_socials_title;
    }

    // Contact / Devis Form
    const cfTag = document.querySelector('.contact-form-card .cf-tag');
    if (cfTag) cfTag.textContent = dict.cf_tag;
    const cfTitle = document.querySelector('.contact-form-title');
    if (cfTitle) cfTitle.innerHTML = dict.cf_title;
    const cfSub = document.querySelector('.contact-form-sub');
    if (cfSub) cfSub.textContent = dict.cf_sub;
    const cfSubmitBtn = document.querySelector('.cf-submit-btn span');
    if (cfSubmitBtn) cfSubmitBtn.textContent = dict.cf_submit_btn;
    const cfPrivacy = document.querySelector('.cf-privacy-note');
    if (cfPrivacy) cfPrivacy.textContent = dict.cf_privacy;
    const cfMsg = document.getElementById('cfMessage');
    if (cfMsg) cfMsg.setAttribute('placeholder', dict.cf_message_placeholder);

    // Subject dropdown options
    const cfSubject = document.getElementById('cfSubject');
    if (cfSubject && cfSubject.options && cfSubject.options.length >= 5) {
      cfSubject.options[0].text = dict.cf_subject_opt1;
      cfSubject.options[1].text = dict.cf_subject_opt2;
      cfSubject.options[2].text = dict.cf_subject_opt3;
      cfSubject.options[3].text = dict.cf_subject_opt4;
      cfSubject.options[4].text = dict.cf_subject_opt5;
    }

    // Footer
    const footerTagline = document.querySelector('.footer-col:first-child h4');
    if (footerTagline) footerTagline.textContent = dict.footer_tagline;
    const footerDesc = document.querySelector('.footer-col:first-child p');
    if (footerDesc) footerDesc.textContent = dict.footer_desc;
    const footerFollow = document.querySelector('.footer-social-row span');
    if (footerFollow) footerFollow.textContent = dict.footer_follow;
    const footerRights = document.querySelector('.footer-bottom-copy');
    if (footerRights) footerRights.textContent = `© ${new Date().getFullYear()} Assurances Echkili. ${dict.footer_rights}`;

    // Mobile taskbar items
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

    // Catalogue & Produit page items
    const breadcrumbHome = document.querySelector('#breadcrumbTrail li:first-child a');
    if (breadcrumbHome) breadcrumbHome.textContent = dict.prod_breadcrumb_home;
    const breadcrumbCat = document.getElementById('breadcrumbCategoryLink');
    if (breadcrumbCat) breadcrumbCat.textContent = dict.prod_breadcrumb_offers;

    const prodHeroActionsPrimary = document.querySelector('.product-hero-actions .btn-hero-primary');
    if (prodHeroActionsPrimary) {
      const svg = prodHeroActionsPrimary.querySelector('svg');
      prodHeroActionsPrimary.innerHTML = '';
      if (svg) prodHeroActionsPrimary.appendChild(svg);
      prodHeroActionsPrimary.append(` ${dict.prod_quote_btn}`);
    }

    const prodHeroWa = document.getElementById('prodHeroWhatsappLink');
    if (prodHeroWa) {
      const svg = prodHeroWa.querySelector('svg');
      prodHeroWa.innerHTML = '';
      if (svg) prodHeroWa.appendChild(svg);
      prodHeroWa.append(` ${dict.prod_wa_btn}`);
    }

    // Section headings on produit.html
    const blockHeading = document.querySelector('.product-block-heading');
    if (blockHeading) {
      const svg = blockHeading.querySelector('svg');
      blockHeading.innerHTML = '';
      if (svg) blockHeading.appendChild(svg);
      blockHeading.append(` ${dict.prod_presentation_title}`);
    }

    // Catalogue page (offres.html) banner & breadcrumb
    const catalogBreadcrumb = document.querySelector('.page-breadcrumb strong');
    if (catalogBreadcrumb) {
      catalogBreadcrumb.textContent = lang === 'ar' ? 'دليل حلول وعروض التأمين' : (lang === 'en' ? 'Insurance Solutions Catalog' : "Catalogue des Solutions d'Assurance");
    }
    const catalogHeroTitle = document.querySelector('.page-intro-banner h1');
    if (catalogHeroTitle) {
      catalogHeroTitle.textContent = lang === 'ar' ? "جميع حلول وعروض التأمين" : (lang === 'en' ? "All Our Insurance Solutions" : "Toutes nos Solutions d'Assurance");
    }
    const catalogHeroLead = document.querySelector('.page-intro-banner p:not(.page-banner-sub)');
    if (catalogHeroLead) {
      catalogHeroLead.textContent = lang === 'ar'
        ? "استفيدوا من المرافقة المخصصة لوكالتكم العامة أكسا بمراكش (شارع كَمَاسة، المحاميد) مع حلول مصممة لحماية حياتكم اليومية واستثماراتكم."
        : (lang === 'en'
          ? "Benefit from dedicated advisory from your AXA General Agency in Marrakech (Guemassa Ave, M'hamid) tailored to your personal and business needs."
          : "Bénéficiez de l'accompagnement personnalisé de votre Agent Général AXA à Marrakech (Avenue Guemassa, M'hamid) avec des solutions sur-mesure adaptées à chaque étape de votre vie et de votre activité.");
    }

    // Catalogue Header in offres.html (Exact charter)
    const offresTag = document.querySelector('.page-header .section-tag, header.page-header span.section-tag');
    if (offresTag) {
      offresTag.textContent = lang === 'ar' ? 'دليل أكسا المغرب' : (lang === 'en' ? 'AXA Morocco Catalog' : 'Catalogue AXA Maroc');
    }
    const offresH1 = document.querySelector('header.page-header h1');
    if (offresH1) {
      offresH1.innerHTML = lang === 'ar'
        ? 'حلول الأفراد <span style="font-style: italic; font-weight: 400; color: #ff5252;">و</span> المهنيين'
        : (lang === 'en'
          ? 'Personal <span style="font-style: italic; font-weight: 400; color: #ff5252;">&amp;</span> Commercial Solutions'
          : 'Nos Solutions Particuliers <span style="font-style: italic; font-weight: 400; color: #ff5252;">&amp;</span> Professionnels');
    }
    const offresLead = document.querySelector('header.page-header p');
    if (offresLead) {
      offresLead.textContent = lang === 'ar'
        ? 'مجموع عقود تأمين أكسا المغرب المصممة لحماية حياتكم اليومية، وتأمين ممتلكاتكم وضمان استمرارية أنشطتكم بمراكش.'
        : (lang === 'en'
          ? 'All AXA Assurance Morocco contracts designed to protect your daily life, secure your assets, and sustain your business in Marrakech.'
          : "L'ensemble des contrats AXA Assurance Maroc conçus pour protéger votre quotidien, sécuriser votre patrimoine et pérenniser votre activité à Marrakech.");
    }

    // Catalogue filter buttons
    const btnPart = document.getElementById('tabParticuliersBtn');
    if (btnPart) {
      btnPart.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline-block; vertical-align: middle; margin-right: 6px;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> ${dict.tab_particuliers}`;
    }
    const btnPros = document.getElementById('tabProsBtn');
    if (btnPros) {
      btnPros.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline-block; vertical-align: middle; margin-right: 6px;"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> ${dict.tab_pros}`;
    }
    const btnAll = document.getElementById('tabAllBtn');
    if (btnAll) {
      btnAll.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline-block; vertical-align: middle; margin-right: 6px;"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> ${dict.tab_all}`;
    }

    // Dynamic Solution Cards Translation Helper (Full badges, titles, descriptions & buttons)
    function updateCardContent(card, key) {
      if (!card || !key) return;
      const offer = (typeof getLocalizedOffer === 'function')
        ? getLocalizedOffer(key, lang)
        : ((typeof OFFERS_DATA !== 'undefined' && OFFERS_DATA[key]) ? OFFERS_DATA[key] : null);
      if (!offer) return;

      const h3 = card.querySelector('h3');
      if (h3) h3.textContent = offer.title;

      const p = card.querySelector('p');
      if (p) p.textContent = offer.desc;

      const badge = card.querySelector('.catalog-pill-badge, .card-badge-pill');
      if (badge) {
        const svg = badge.querySelector('svg');
        badge.innerHTML = '';
        if (svg) badge.appendChild(svg);
        badge.append(` ${offer.badge || offer.category}`);
      }

      const btn = card.querySelector('.card-link-decouvrir, .card-link-quote');
      if (btn) {
        const btnText = dict.card_btn_decouvrir || (lang === 'ar' ? 'اكتشف العرض' : (lang === 'en' ? 'DISCOVER PLAN' : "DÉCOUVRIR L'OFFRE"));
        const svg = btn.querySelector('svg');
        const chevron = btn.querySelector('span');
        btn.innerHTML = '';
        btn.append(`${btnText} `);
        if (svg) btn.appendChild(svg);
        else if (chevron) btn.appendChild(chevron);
        else btn.insertAdjacentHTML('beforeend', '<span style="font-size: 1.1rem;">›</span>');
      }
    }

    const partKeys = ['auto', 'habitation', 'sante', 'prevoyance', 'epargne', 'voyage'];
    const proKeys = ['multirisque_pro', 'at_mp', 'rc_pro', 'flotte', 'trc', 'sante_groupe'];

    // Update cards on index.html and offres.html
    const partCards = document.querySelectorAll('#gridParticuliers .solution-card');
    partCards.forEach((c, idx) => {
      if (partKeys[idx]) updateCardContent(c, partKeys[idx]);
    });

    const proCards = document.querySelectorAll('#gridPros .solution-card, #gridProfessionnels .solution-card');
    proCards.forEach((c, idx) => {
      if (proKeys[idx]) updateCardContent(c, proKeys[idx]);
    });

    // Comparison Table on offres.html
    const compareBadge = document.querySelector('.compare-section .catalog-pill-badge');
    if (compareBadge) {
      compareBadge.textContent = lang === 'ar' ? 'دليل مستويات التغطية' : (lang === 'en' ? 'Coverage Levels Guide' : 'Guide des Niveaux de Couverture');
    }
    const compareTitle = document.querySelector('.compare-section h2');
    if (compareTitle) {
      compareTitle.textContent = lang === 'ar' ? 'مقارنة صيغ وباقات أكسا' : (lang === 'en' ? 'Comparison of AXA Formulas' : 'Comparatif des Formules AXA');
    }

    const compareThs = document.querySelectorAll('.compare-table thead th');
    if (compareThs.length >= 4) {
      compareThs[0].textContent = lang === 'ar' ? 'الضمانات والخدمات' : (lang === 'en' ? 'Guarantees & Benefits' : 'Garanties & Prestations');
      compareThs[1].textContent = lang === 'ar' ? 'الصيغة الأساسية' : (lang === 'en' ? 'Essential Formula' : 'Formule Essentielle');
      compareThs[2].textContent = lang === 'ar' ? 'صيغة الراحة' : (lang === 'en' ? 'Comfort Formula' : 'Formule Confort');
      compareThs[3].textContent = lang === 'ar' ? 'صيغة الطمأنينة بلس' : (lang === 'en' ? 'Serenity Plus Formula' : 'Formule Sérénité Plus');
    }

    const compareRows = document.querySelectorAll('.compare-table tbody tr');
    if (compareRows.length >= 6) {
      const r1 = compareRows[0].querySelectorAll('td');
      if (r1.length >= 4) {
        r1[0].innerHTML = `<strong>${lang === 'ar' ? 'المسؤولية المدنية والدفاع' : (lang === 'en' ? 'Civil Liability & Defense' : 'Responsabilité Civile & Défense')}</strong>`;
        r1[1].textContent = lang === 'ar' ? 'مشمول (إجباري)' : (lang === 'en' ? 'Included (Legal)' : 'Inclus (Légal)');
        r1[2].textContent = lang === 'ar' ? 'مشمول (سقف مرتفع)' : (lang === 'en' ? 'Included (High Cap)' : 'Inclus (Plafond Élevé)');
        r1[3].textContent = lang === 'ar' ? 'مشمول (سقف مثالي)' : (lang === 'en' ? 'Included (Optimal Cap)' : 'Inclus (Plafond Optimal)');
      }
      const r2 = compareRows[1].querySelectorAll('td');
      if (r2.length >= 4) {
        r2[0].innerHTML = `<strong>${lang === 'ar' ? 'المساعدة والنجدة 24/7' : (lang === 'en' ? '24/7 Roadside Assistance' : 'Assistance Dépannage 24/7')}</strong>`;
        r2[1].textContent = lang === 'ar' ? 'ابتداء من 50 كلم' : (lang === 'en' ? 'From 50 km' : 'Dès 50 km');
        r2[2].textContent = lang === 'ar' ? '0 كلم عند السكن' : (lang === 'en' ? '0 km at home' : '0 km au domicile');
        r2[3].textContent = lang === 'ar' ? '0 كلم VIP + سيارة أجرة' : (lang === 'en' ? '0 km VIP + Taxi' : '0 km VIP + Taxi de liaison');
      }
      const r3 = compareRows[2].querySelectorAll('td');
      if (r3.length >= 4) {
        r3[0].innerHTML = `<strong>${lang === 'ar' ? 'كسر الزجاج والمصابيح' : (lang === 'en' ? 'Glass & Optics Breakage' : 'Bris de Glaces & Optiques')}</strong>`;
        r3[1].textContent = lang === 'ar' ? 'اختياري' : (lang === 'en' ? 'Optional' : 'Optionnel');
        r3[2].textContent = lang === 'ar' ? 'مشمول بدون اقتطاع' : (lang === 'en' ? 'Included without deductible' : 'Inclus sans franchise');
        r3[3].textContent = lang === 'ar' ? 'مشمول بقيمة الجديد' : (lang === 'en' ? 'Included new value' : 'Inclus valeur à neuf');
      }
      const r4 = compareRows[3].querySelectorAll('td');
      if (r4.length >= 4) {
        r4[0].innerHTML = `<strong>${lang === 'ar' ? 'سيارة بديلة مؤقتة' : (lang === 'en' ? 'Replacement Vehicle' : 'Véhicule de Remplacement')}</strong>`;
        r4[1].textContent = '—';
        r4[2].textContent = lang === 'ar' ? 'حتى 7 أيام' : (lang === 'en' ? 'Up to 7 days' : "Jusqu'à 7 jours");
        r4[3].textContent = lang === 'ar' ? 'حتى 15 يوماً من الإعارة' : (lang === 'en' ? 'Up to 15 days loan' : "Jusqu'à 15 jours de prêt");
      }
      const r5 = compareRows[4].querySelectorAll('td');
      if (r5.length >= 4) {
        r5[0].innerHTML = `<strong>${lang === 'ar' ? 'السرقة، الحريق والكوارث الطبيعية' : (lang === 'en' ? 'Theft, Fire & Natural Hazards' : 'Vol, Incendie & Catastrophes Naturelles')}</strong>`;
        r5[1].textContent = '—';
        r5[2].textContent = lang === 'ar' ? 'مشمول مع اقتطاع' : (lang === 'en' ? 'Included with deductible' : 'Inclus avec franchise');
        r5[3].textContent = lang === 'ar' ? 'جميع الأخطار بدون تقادم' : (lang === 'en' ? 'All risks without depreciation' : 'Tous risques sans vétusté');
      }
      const r6 = compareRows[5].querySelectorAll('td');
      if (r6.length >= 4) {
        r6[0].innerHTML = `<strong>${lang === 'ar' ? 'مستشار مخصص من تأمينات شكيلـي' : (lang === 'en' ? 'Dedicated Assurances Echkili Advisor' : 'Conseiller Dédié Assurances Echkili')}</strong>`;
        r6[1].textContent = lang === 'ar' ? 'نعم' : (lang === 'en' ? 'Yes' : 'Oui');
        r6[2].textContent = lang === 'ar' ? 'نعم' : (lang === 'en' ? 'Yes' : 'Oui');
        r6[3].textContent = lang === 'ar' ? 'نعم (خط واتساب مباشر)' : (lang === 'en' ? 'Yes (Direct WhatsApp line)' : 'Oui (Ligne directe WhatsApp)');
      }
    }

    // CTA Banner on offres.html
    const ctaBannerHeading = document.querySelector('section[style*="002868"] h2, section[style*="001f58"] h2');
    if (ctaBannerHeading) {
      ctaBannerHeading.textContent = lang === 'ar' ? 'هل تحتارون بين عدة صيغ وعروض؟' : (lang === 'en' ? 'Hesitating Between Several Formulas?' : 'Vous hésitez entre plusieurs formules ?');
    }
    const ctaBannerLead = document.querySelector('section[style*="002868"] p, section[style*="001f58"] p');
    if (ctaBannerLead) {
      ctaBannerLead.textContent = lang === 'ar'
        ? 'تفضلوا بزيارة مستشارينا بوكالة تأمينات شكيلـي (عمارة الراحة رقم 8، شارع كَمَاسة، المحاميد) للحصول على مقارنة مجانية ومخصصة في أقل من 15 دقيقة.'
        : (lang === 'en'
          ? "Visit our advisors at Assurances Echkili agency (Imm Erraha No. 8, Avenue Guemassa, M'hamid) for a free and personalized comparison in under 15 minutes."
          : "Venez rencontrer nos conseillers à l'agence ECHKILI ASSURANCES (Imm Erraha N°8, Avenue Guemassa, M'hamid) pour un comparatif gratuit et personnalisé sous 15 minutes.");
    }
    const ctaWaBtn = document.querySelector('section[style*="002868"] a.btn-accent, section[style*="001f58"] a.btn-accent');
    if (ctaWaBtn) {
      const svg = ctaWaBtn.querySelector('svg');
      const text = lang === 'ar' ? 'إجراء استشارة عبر واتساب (06 67 76 21 24)' : (lang === 'en' ? 'Chat on WhatsApp (06 67 76 21 24)' : 'Échanger par WhatsApp (06 67 76 21 24)');
      ctaWaBtn.innerHTML = '';
      if (svg) ctaWaBtn.appendChild(svg);
      ctaWaBtn.append(` ${text}`);
    }
    const ctaCallBtn = document.querySelector('section[style*="002868"] a.btn-outline, section[style*="001f58"] a.btn-outline');
    if (ctaCallBtn) {
      ctaCallBtn.textContent = lang === 'ar' ? 'اتصل بالوكالة' : (lang === 'en' ? 'Call Agency' : "Appeler l'Agence");
    }

    // Footers on offres.html and produit.html
    const fPartTitle = document.querySelector('.site-footer .footer-col:nth-child(2) h4');
    if (fPartTitle) fPartTitle.textContent = dict.nav_particuliers;
    const fProsTitle = document.querySelector('.site-footer .footer-col:nth-child(3) h4');
    if (fProsTitle) fProsTitle.textContent = dict.nav_pros;
    const fUrgTitle = document.querySelector('.site-footer .footer-col:nth-child(4) h4');
    if (fUrgTitle) fUrgTitle.textContent = lang === 'ar' ? 'الطوارئ والمواعيد' : (lang === 'en' ? 'Emergencies & Hours' : 'Urgences & Horaires');
  }

  // Global click delegator for any language button anywhere on the page
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.lang-btn');
    if (btn) {
      e.preventDefault();
      const lang = btn.getAttribute('data-lang');
      if (lang && (lang === 'fr' || lang === 'ar' || lang === 'en')) {
        applyLanguage(lang);
      }
    }
  });

  window.EchkiliI18n = {
    translations: TRANSLATIONS,
    getLanguage: getStoredLang,
    setLanguage: applyLanguage,
    t: function (key) {
      const lang = getStoredLang();
      return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || TRANSLATIONS.fr[key] || '';
    },
    init: function () {
      const initialLang = getStoredLang();
      applyLanguage(initialLang);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.EchkiliI18n.init);
  } else {
    window.EchkiliI18n.init();
  }
})();
