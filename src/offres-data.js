// Catalogue et gestion des offres pour la page offres.html et produit.html
const OFFERS_DATA = {
  auto: {
    category: "Particuliers • Mobilité",
    badge: "Assistance 0 km 24/7 & Garage Agréé",
    title: "Assurance Automobile AXA Maroc",
    subtitle: "La solution de référence pour rouler l'esprit tranquille à Marrakech.",
    desc: "Couverture complète combinant assistance 24/7 dépannage 0 km, bris de glace sans franchise, véhicule de remplacement et constats amiables rapides.",
    features: [
      { title: "Assistance 24/7 Dépannage 0 km", desc: "Prise en charge immédiate au pied de votre domicile ou sur route à Marrakech." },
      { title: "Bris de Glace Sans Franchise", desc: "Remplacement rapide de pare-brise sans impact sur votre bonus." },
      { title: "Véhicule de Remplacement", desc: "Prêt d'un véhicule durant la durée des réparations en garage agréé." },
      { title: "Tarif Préférentiel Fonctionnaires", desc: "Avantages exclusifs pour agents publics, corps enseignants et grandes conventions." }
    ],
    advantages: [
      "Gestion directe des sinistres au sein de l'agence Avenue Guemassa (M'hamid)",
      "Large réseau de carrossiers et garages agréés à Marrakech",
      "Attestation d'assurance délivrée immédiatement en agence"
    ],
    requiredDocs: [
      "Carte grise originale du véhicule",
      "Copie de la Carte Nationale d'Identité (CIN)",
      "Permis de conduire valide",
      "Relevé d'information de l'ancien assureur (pour reprise du bonus)"
    ],
    faq: [
      {
        q: "Comment fonctionne l'assistance 0 km en cas de panne à Marrakech ?",
        a: "En cas de panne, même devant chez vous à Marrakech ou sur les routes du Royaume, un remorqueur agréé AXA intervient 24h/24 et 7j/7 sur simple appel au 05 25 36 30 61."
      },
      {
        q: "Le bris de glace sans franchise impacte-t-il mon bonus ?",
        a: "Non, chez AXA le remplacement de pare-brise ou de vitres latérales pris en charge au titre du bris de glace ne pénalise pas votre coefficient de bonus."
      },
      {
        q: "Puis-je bénéficier de la convention fonctionnaires ou enseignants ?",
        a: "Oui, notre agence applique immédiatement les réductions tarifaires conventionnées pour les fonctionnaires, ministères, fondations et corps enseignants sur présentation de votre attestation de travail."
      }
    ],
    quotePlaceholder: "Marque, modèle, puissance fiscale (ex: 6 CV diesel), date de première mise en circulation...",
    action: "Demander mon Devis Auto",
    telLabel: "Conseiller Auto : 05 25 36 30 61"
  },
  habitation: {
    category: "Particuliers • Patrimoine",
    badge: "Formule HABITASSUR Tous Risques",
    title: "Habitation HABITASSUR AXA",
    subtitle: "Protégez votre villa, appartement ou riad à Marrakech.",
    desc: "Sécurisez vos biens immobiliers et votre mobilier contre les incendies, dégâts des eaux, vols, bris de glaces et catastrophes naturelles.",
    features: [
      { title: "Incendie & Événements Climatiques", desc: "Indemnisation complète pour reconstruction et rééquipement." },
      { title: "Dégâts des Eaux & Infiltrations", desc: "Réparation des fuites et prise en charge des dommages matériels." },
      { title: "Vol & Actes de Vandalisme", desc: "Remboursement des meubles, appareils électroniques et objets précieux." },
      { title: "RC Chef de Famille Incluse", desc: "Couverture des dommages causés aux tiers par les membres du foyer." }
    ],
    advantages: [
      "Formule HABITASSUR spécifique aux résidences principales et secondaires",
      "Assistance plomberie, serrurerie et électricité d'urgence 24h/24",
      "Évaluation simplifiée des capitaux mobiliers sans formalités lourdes"
    ],
    requiredDocs: [
      "Titre foncier ou contrat de bail / quittance",
      "Copie de la CIN de l'assuré",
      "Estimation approximative du mobilier et des objets de valeur"
    ],
    faq: [
      {
        q: "Le contrat couvre-t-il les riads et résidences secondaires à Marrakech ?",
        a: "Oui, la formule HABITASSUR protège aussi bien les villas de l'Hivernage ou de la Palmeraie, les appartements à Guéliz que les riads dans la Médina de Marrakech."
      },
      {
        q: "Que faire en cas d'inondation ou dégât des eaux causé par un voisin ?",
        a: "Votre contrat inclut le recours contre les tiers et la garantie Dégâts des Eaux. Nous dépêchons un artisan en urgence et instruisons le constat amiable directement en agence."
      },
      {
        q: "Les bijoux et objets précieux sont-ils couverts contre le vol ?",
        a: "Oui, des options spécifiques permettent de couvrir les bijoux, tableaux et objets d'art selon un capital déclaré avec des plafonds adaptés."
      }
    ],
    quotePlaceholder: "Type de bien (villa, appartement, riad), surface approximative (m²), valeur estimée du mobilier...",
    action: "Demander mon Devis Habitation",
    telLabel: "Conseiller Habitation : 05 25 36 30 61"
  },
  sante: {
    category: "Particuliers • Santé & Famille",
    badge: "Sehassur & Sehassur Plus International",
    title: "Santé Sehassur & Sehassur Plus International AXA",
    subtitle: "L'accès aux meilleurs soins de santé Sehassur et Sehassur plus international pour vous accompagner vous et votre famille.",
    desc: "L'accès aux meilleurs soins de santé Sehassur et Sehassur plus international pour vous accompagner vous et votre famille : prise en charge complète de vos soins médicaux, consultations, hospitalisations et chirurgie au Maroc comme à l'étranger.",
    features: [
      { title: "Formule Sehassur (Maroc)", desc: "Prise en charge directe sans avance de frais (tiers-payant) auprès des cliniques conventionnées du Royaume, consultations et pharmacie." },
      { title: "Formule Sehassur Plus International", desc: "Couverture médicale étendue à l'étranger pour hospitalisations, chirurgie programmée et évacuation sanitaire." },
      { title: "Analyses & Imagerie Médicale", desc: "Prise en charge rapide des examens biologiques, radiographies, scanners et IRM." },
      { title: "Maladies Redoutées & Soins Lourds", desc: "Capital garanti et prise en charge renforcée en cas de pathologie grave ou ALD." }
    ],
    advantages: [
      "Convention tiers-payant avec le réseau des meilleures cliniques de Marrakech et du Maroc",
      "Couverture médicale internationale au choix avec Sehassur Plus International",
      "Application mobile et guichet agence pour suivre vos remboursements en direct",
      "Tarifs dégressifs pour les familles avec enfants"
    ],
    requiredDocs: [
      "Copie de la CIN du souscripteur",
      "Fiche de composition familiale (conjoint, enfants)",
      "Relevé d'Identité Bancaire (RIB) pour virements automatiques"
    ],
    faq: [
      {
        q: "Quelle est la différence entre Sehassur et Sehassur Plus International ?",
        a: "Sehassur assure une couverture médicale complète au Maroc avec tiers-payant dans les cliniques partenaires. Sehassur Plus International étend cette protection aux soins hospitaliers et interventions chirurgicales à l'étranger avec évacuation sanitaire d'urgence."
      },
      {
        q: "Dans quelles cliniques de Marrakech le tiers-payant est-il accepté ?",
        a: "Le tiers-payant AXA Sehassur est accepté directement dans les principales cliniques privées de Marrakech. Vous n'avez aucune avance de frais à effectuer pour une hospitalisation ou chirurgie."
      },
      {
        q: "Quel est le délai de remboursement pour les consultations et pharmacie ?",
        a: "Vos feuilles de soins déposées à l'agence ou numérisées sont traitées sous 48h ouvrées par virement bancaire direct sur votre compte."
      }
    ],
    quotePlaceholder: "Composition familiale (âge des conjoints et nombre d'enfants à charge), niveau de couverture souhaité...",
    action: "Étudier ma Santé Sehassur",
    telLabel: "Conseiller Santé : 05 25 36 30 61"
  },
  prevoyance: {
    category: "Particuliers • Sécurité Famille",
    badge: "Capital Garanti Famille & Accidents",
    title: "Prévoyance Accident AXA",
    subtitle: "Garantissez la sécurité financière de votre foyer en toutes circonstances.",
    desc: "Versement d'un capital garanti et de rentes éducation pour préserver le niveau de vie de votre famille en cas d'accident de la vie.",
    features: [
      { title: "Capital Décès Toutes Causes", desc: "Versement rapide du capital aux bénéficiaires désignés, net d'impôt." },
      { title: "Rente Éducation Enfants", desc: "Rente trimestrielle jusqu'au terme des études supérieures." },
      { title: "Invalidité Permanente", desc: "Indemnités proportionnelles adaptées pour financer l'aménagement du cadre de vie." },
      { title: "Rapatriement de Corps", desc: "Assistance globale et prise en charge des démarches administratives." }
    ],
    advantages: [
      "Adhésion rapide sans examen médical lourd",
      "Choix libre du montant du capital souscrit",
      "Accompagnement humain et bienveillant de votre agent"
    ],
    requiredDocs: [
      "Copie de la CIN de l'assuré",
      "Désignation des bénéficiaires",
      "Questionnaire de santé simplifié"
    ],
    faq: [
      {
        q: "Qui peut être désigné bénéficiaire du capital ?",
        a: "Vous choisissez librement les bénéficiaires de votre choix (conjoint, enfants, parents) avec la possibilité de modifier cette clause à tout moment."
      },
      {
        q: "Le capital versé est-il imposable au Maroc ?",
        a: "Non, le capital décès versé aux bénéficiaires désignés est totalement exonéré de droits de succession et de l'impôt sur le revenu au Maroc."
      },
      {
        q: "Comment fonctionne la rente éducation pour les enfants ?",
        a: "En cas de disparition ou d'invalidité de l'assuré, une rente trimestrielle est directement versée pour financer la scolarité et les études supérieures des enfants jusqu'à 25 ans."
      }
    ],
    quotePlaceholder: "Montant du capital souhaité (ex: 200 000 DH, 500 000 DH), âge de l'assuré...",
    action: "Consulter un Conseiller Prévoyance",
    telLabel: "Conseiller Prévoyance : 05 25 36 30 61"
  },
  epargne: {
    category: "Particuliers • Avenir & Épargne",
    badge: "Déduction Fiscale IR & Taux Garanti",
    title: "Épargne & Retraite Futuris II",
    subtitle: "Préparez votre retraite et constituez un capital à forte valeur ajoutée.",
    desc: "Bénéficiez d'une déductibilité fiscale avantageuse sur l'impôt sur le revenu (IR) tout en garantissant la valorisation de votre épargne.",
    features: [
      { title: "Rendement Garanti & Participation aux Bénéfices", desc: "Taux d'intérêt technique garanti chaque année par AXA Assurance Maroc." },
      { title: "Avantage Fiscal Significatif", desc: "Déduction intégrale des versements de votre revenu net imposable." },
      { title: "Versements Libres ou Programmés", desc: "Alimentez votre contrat selon vos rentrées d'argent, sans pénalité." },
      { title: "Sortie Souple au Choix", desc: "Percevez votre capital constitué en un versement unique ou en rente viagère." }
    ],
    advantages: [
      "Simulation d'optimisation fiscale sur-mesure en agence",
      "Disponibilité partielle des fonds en cas de besoin urgent",
      "Transmission de patrimoine sécurisée"
    ],
    requiredDocs: [
      "Copie de la CIN",
      "RIB bancaire",
      "Dernier bulletin de paie ou avis d'imposition (pour calcul d'optimisation fiscale)"
    ],
    faq: [
      {
        q: "Quel avantage fiscal procure le contrat Futuris II ?",
        a: "Vos cotisations sont déductibles de votre revenu net imposable au titre de l'Impôt sur le Revenu (IR), générant une économie d'impôt immédiate très significative pouvant atteindre 38% de votre épargne versée."
      },
      {
        q: "Puis-je retirer une partie de mon argent avant la retraite ?",
        a: "Oui, des avances et des rachats partiels sont possibles en cas de besoin imprévu ou de projet immobilier."
      },
      {
        q: "Les rendements sont-ils garantis ?",
        a: "Le contrat combine un taux d'intérêt technique garanti par AXA Assurance Maroc et une participation aux bénéfices financiers de la compagnie distribuée chaque année."
      }
    ],
    quotePlaceholder: "Capacité d'épargne mensuelle souhaitée (ex: 1 000 DH/mois) ou versement initial...",
    action: "Simuler mon Épargne Futuris",
    telLabel: "Conseiller Épargne : 05 25 36 30 61"
  },
  voyage: {
    category: "Particuliers • Mobilité Internationale",
    badge: "Conforme Ambassades & Visa 30.000€",
    title: "Assurance Voyage & Visa Schengen",
    subtitle: "Voyagez en toute sérénité avec votre attestation certifiée.",
    desc: "Formule conforme aux exigences de l'ensemble des consulats de l'espace Schengen et monde entier pour vos séjours d'affaires ou de tourisme.",
    features: [
      { title: "Conformité Visa Schengen Immédiate", desc: "Plafond médical de 30 000 € garanti conforme aux exigences consulaires." },
      { title: "Frais Médicaux d'Urgence à l'Étranger", desc: "Prise en charge sans avance de frais lors de déplacements hors du Maroc." },
      { title: "Rapatriement Médicalisé 24/7", desc: "Évacuation sanitaire encadrée par une équipe médicale d'urgence." }
    ],
    advantages: [
      "Délivrance de l'attestation en 5 minutes à l'agence ou par WhatsApp/Email",
      "Plateforme d'assistance internationale joignable 24h/24",
      "Formules individuelles, couple et famille"
    ],
    requiredDocs: [
      "Copie du passeport valide",
      "Dates de départ et de retour",
      "Destination (Espace Schengen ou Monde)"
    ],
    faq: [
      {
        q: "Cette attestation est-elle acceptée par TLScontact / BLS pour le visa Schengen ?",
        a: "Oui, à 100%. Notre contrat délivre immédiatement l'attestation officielle exigée par tous les consulats européens (couverture médicale minimale de 30 000 € avec rapatriement sanitaire)."
      },
      {
        q: "En combien de temps puis-je obtenir mon attestation certifiée ?",
        a: "En moins de 10 minutes ! Nous vous l'éditons sur place à l'agence Avenue Guemassa (M'hamid) ou vous l'envoyons par WhatsApp / Email au format PDF officiel avec cachet sécurisé."
      },
      {
        q: "Que faire en cas d'urgence médicale à l'étranger ?",
        a: "La plateforme d'assistance AXA est joignable 24h/24 au numéro international figurant sur votre carte d'assurance pour une prise en charge directe à l'hôpital sans avance de frais."
      }
    ],
    quotePlaceholder: "Pays de destination, dates exactes de séjour, nombre de voyageurs...",
    action: "Obtenir mon Attestation Voyage",
    telLabel: "Conseiller Voyage : 05 25 36 30 61"
  },
  multirisque_pro: {
    category: "Professionnels • Locaux & Activité",
    badge: "Commerce, Restauration & PME",
    title: "Multirisque Professionnelle AXA",
    subtitle: "La solution globale pour commerces, riads, hôtels, bureaux et artisans.",
    desc: "Un contrat complet pour protéger vos locaux, machines, stocks et maintenir vos revenus en cas d'interruption temporaire d'activité.",
    features: [
      { title: "Incendie, Dégât des Eaux & Explosion", desc: "Reconstruction des locaux et remplacement de votre agencement commercial." },
      { title: "Garantie Perte d'Exploitation", desc: "Maintien de vos charges fixes et de votre marge brute après sinistre." },
      { title: "Vol de Marchandises & Caisse", desc: "Couverture du stock, des recettes commerciales et du mobilier de bureau." },
      { title: "Bris de Glace de Vitrine", desc: "Remplacement prioritaire des enseignes et vitrines commerciales." }
    ],
    advantages: [
      "Contrat modulable selon votre secteur (commerces, restauration, riads, cabinets)",
      "Conformité avec les normes ACAPS catastrophes naturelles",
      "Audit gratuit de vos risques sur site à Marrakech par M. Ibourk"
    ],
    requiredDocs: [
      "Registre de Commerce (RC)",
      "Modèle J",
      "Contrat de bail ou titre de propriété des locaux",
      "Copie de la CIN du gérant"
    ],
    faq: [
      {
        q: "Quels types d'activités sont éligibles à Marrakech ?",
        a: "Nous couvrons les commerces de détail, restaurants, riads d'hôtes, ateliers d'artisanat, cliniques, cabinets médicaux et bureaux professionnels du Grand Marrakech."
      },
      {
        q: "Comment fonctionne la garantie Perte d'Exploitation ?",
        a: "En cas d'incendie ou dégât majeur immobilisant votre commerce, AXA prend en charge vos charges fixes (salaires, loyers, mensualités de crédit) et compense votre marge brute pour préserver la viabilité de votre entreprise."
      },
      {
        q: "Le stock de marchandises et les équipements sont-ils protégés ?",
        a: "Oui, vos machines, marchandises en réserve, équipements informatiques et vitrines sont couverts en valeur de remplacement."
      }
    ],
    quotePlaceholder: "Activité exercée, adresse des locaux, surface (m²), valeur estimée du stock et des agencements...",
    action: "Demander mon Devis Multirisque Pro",
    telLabel: "Pôle Pro : 05 25 36 30 61"
  },
  at_mp: {
    category: "Professionnels • Obligation Légale",
    badge: "Loi 18-12 Obligation Légale",
    title: "Accidents du Travail (Loi 18-12)",
    subtitle: "Sécurisez vos salariés et mettez votre entreprise en règle.",
    desc: "Obligation légale au Maroc : couverture des accidents survenus au travail ou pendant le trajet pour tous vos employés déclarés.",
    features: [
      { title: "Frais Médicaux & Hospitaliers", desc: "Prise en charge intégrale sans avance de frais en clinique ou hôpital." },
      { title: "Indemnités Journalières d'Incapacité", desc: "Versement de compensations de salaire durant la période d'arrêt." },
      { title: "Rentes d'Incapacité Permanente", desc: "Constitution des rentes conformes au barème officiel de la loi 18-12." },
      { title: "Rentes aux Ayants Droit", desc: "Protection du conjoint et des enfants en cas de sinistre grave." }
    ],
    advantages: [
      "Attestation de conformité immédiate pour l'Inspection du Travail",
      "Réseau conventionné de traumatologie et cliniques à Marrakech",
      "Barème optimisé selon la masse salariale et l'activité"
    ],
    requiredDocs: [
      "Bordereau CNSS récent ou liste du personnel avec masse salariale",
      "Registre de Commerce (RC)",
      "Copie de la CIN du représentant légal"
    ],
    faq: [
      {
        q: "L'assurance AT/MP est-elle obligatoire au Maroc ?",
        a: "Oui, selon la loi 18-12, tout employeur au Maroc a l'obligation légale de souscrire une assurance Accidents du Travail et Maladies Professionnelles pour l'ensemble de son personnel (CDI, CDD, intérim, apprentis)."
      },
      {
        q: "Le trajet domicile-travail est-il couvert ?",
        a: "Oui, les accidents survenus entre le domicile du salarié et son lieu de travail sont intégralement couverts au même titre que les accidents en atelier ou sur chantier."
      },
      {
        q: "Quel est le délai de déclaration d'un accident du travail ?",
        a: "La loi 18-12 impose une déclaration sous 48 heures ouvrées. Notre agence à l'agence (Avenue Guemassa, M'hamid) dispose d'un guichet dédié pour vous accompagner immédiatement dans ces démarches."
      }
    ],
    quotePlaceholder: "Nombre de salariés déclarés, masse salariale annuelle globale, secteur d'activité...",
    action: "Mettre en conformité mon Entreprise",
    telLabel: "Pôle Entreprise : 05 25 36 30 61"
  },
  rc_pro: {
    category: "Professionnels • Responsabilité",
    badge: "Protection Juridique & Erreurs Pro",
    title: "Responsabilité Civile Pro & Décennale",
    subtitle: "Pérennisez votre activité face aux litiges et réclamations de tiers.",
    desc: "Couverture des conséquences financières des préjudices corporels, matériels ou immatériels causés dans le cadre de vos prestations.",
    features: [
      { title: "RC Exploitation Quotidienne", desc: "Dommages causés à des tiers ou des clients dans vos locaux commerciaux." },
      { title: "RC Professionnelle Conseil & Prestation", desc: "Erreurs de conception, omissions professionnelles ou retards imputables." },
      { title: "Garantie Décennale BTP", desc: "Couverture obligatoire 10 ans pour les constructeurs et maîtres d'ouvrage." },
      { title: "Défense Juridique & Recours", desc: "Honoraires d'avocats et frais d'expertise judiciaire entièrement pris en charge." }
    ],
    advantages: [
      "Plafonds élevés exigés par les appels d'offres publics et privés",
      "Certificats d'assurance délivrés sous 24h",
      "Étude contractuelle personnalisée par Assurances Echkili"
    ],
    requiredDocs: [
      "Registre de Commerce (RC) ou carte professionnelle",
      "Statuts de la société",
      "Chiffre d'affaires annuel prévisionnel ou réalisé"
    ],
    faq: [
      {
        q: "Pourquoi souscrire une RC Professionnelle ?",
        a: "La RC Pro protège votre entreprise si un client, un fournisseur ou un tiers subit un préjudice financier, corporel ou matériel suite à une faute, erreur ou négligence dans l'exercice de votre métier."
      },
      {
        q: "La défense juridique et les frais d'avocat sont-ils pris en charge ?",
        a: "Oui, le contrat inclut la protection juridique avec prise en charge intégrale des frais d'expertise, de procédure et d'avocat devant les tribunaux du Royaume."
      }
    ],
    quotePlaceholder: "Métier / secteur d'activité, chiffre d'affaires annuel approximatif, plafonds souhaités...",
    action: "Demander une Étude RC Pro",
    telLabel: "Pôle Entreprise : 05 25 36 30 61"
  },
  flotte: {
    category: "Professionnels • Flottes & Véhicules",
    badge: "Dès 3 Véhicules • Gestion Centralisée",
    title: "Assurance Flotte Automobile Entreprise",
    subtitle: "Gérez efficacement le parc roulant de votre société à Marrakech.",
    desc: "Dès 3 véhicules d'entreprise : regroupez vos utilitaires, camionnettes, berlines de direction et engins sous une seule police.",
    features: [
      { title: "Contrat Flotte Unique", desc: "Gestion administrative centralisée avec avenants et vignettes simplifiés." },
      { title: "Assistance Panne Flotte 24/7", desc: "Remorquage express et véhicules de courtoisie pour maintenir vos livraisons." },
      { title: "Garanties Modulables par Véhicule", desc: "Tous risques ou tiers selon l'âge et l'usage de chaque véhicule du parc." },
      { title: "Conducteur Non Désigné", desc: "Flexibilité totale pour l'ensemble de vos collaborateurs autorisés." }
    ],
    advantages: [
      "Tarifs très compétitifs avec dégressivité selon le nombre d'unités",
      "Couverture des équipements et matériels transportés",
      "Interlocuteur dédié joignable directement par WhatsApp"
    ],
    requiredDocs: [
      "Cartes grises de l'ensemble des véhicules du parc",
      "Statuts et RC de la société",
      "Relevé de sinistralité des 3 dernières années"
    ],
    faq: [
      {
        q: "À partir de combien de véhicules peut-on ouvrir une police Flotte ?",
        a: "Dès 3 véhicules immatriculés au nom de votre entreprise, vous bénéficiez du tarif avantageux Flotte Automobile avec contrat unique et interlocuteur dédié."
      },
      {
        q: "Les conducteurs doivent-ils être nominativement déclarés ?",
        a: "Non, vos collaborateurs habilités peuvent conduire n'importe quel véhicule du parc grâce à la clause de conducteur non désigné."
      },
      {
        q: "Comment s'effectue le dépannage des utilitaires en panne ?",
        a: "L'assistance flotte AXA intervient 24/7 pour remorquer le véhicule vers un garage agréé et mettre à disposition un véhicule de remplacement pour assurer vos livraisons."
      }
    ],
    quotePlaceholder: "Nombre de véhicules (légers, utilitaires, poids lourds), usage principal...",
    action: "Demander un Audit Flotte",
    telLabel: "Pôle Flottes : 05 25 36 30 61"
  },
  trc: {
    category: "Professionnels • BTP & Chantier",
    badge: "BTP & Chantier • Homologué Banques",
    title: "Tous Risques Chantier (TRC) AXA",
    subtitle: "Sécurisez vos projets de construction et rénovation à Marrakech.",
    desc: "Garantie intégrale des ouvrages en cours contre effondrements, incendies, séismes, erreurs de montage et vols de matériaux.",
    features: [
      { title: "Dommages aux Ouvrages en Construction", desc: "Indemnisation des gros œuvres et aménagements suite à aléas climatiques ou séismes." },
      { title: "Erreurs de Montage & Conception", desc: "Réparation des désordres survenus pendant la phase d'édification." },
      { title: "Vol de Matériaux & Outillages", desc: "Protection des câbles cuivre, engins et matériels stockés sur site." },
      { title: "Période de Maintenance", desc: "Prolongation de couverture après achèvement provisoire des travaux." }
    ],
    advantages: [
      "Contrat requis et validé par l'ensemble des établissements bancaires",
      "Couverture de l'ensemble des sous-traitants et intervenants",
      "Expertise technique sur le terrain à Marrakech"
    ],
    requiredDocs: [
      "Marché de travaux ou contrat de construction",
      "Descriptif technique des travaux et planning de réalisation",
      "Montant total prévisionnel du chantier (gros œuvre + finitions)"
    ],
    faq: [
      {
        q: "La TRC est-elle obligatoire pour l'obtention d'un crédit bancaire promoteur ?",
        a: "Oui, la majorité des banques et organismes de crédit au Maroc exigent la souscription d'une police Tous Risques Chantier avant tout déblocage de fonds pour un projet immobilier."
      },
      {
        q: "Les sous-traitants sont-ils automatiquement couverts ?",
        a: "Oui, la police TRC AXA protège le maître d'ouvrage, les entreprises générales et l'ensemble des sous-traitants intervenant sur le chantier."
      },
      {
        q: "Que couvre la période de maintenance après réception ?",
        a: "Elle couvre les dommages causés aux ouvrages pendant la levée des réserves ou les interventions post-livraison par les constructeurs."
      }
    ],
    quotePlaceholder: "Localisation du chantier à Marrakech, nature des travaux (construction, réhabilitation, riad), budget prévisionnel...",
    action: "Demander une Étude TRC Chantier",
    telLabel: "Pôle BTP : 05 25 36 30 61"
  },
  sante_groupe: {
    category: "Professionnels • Ressources Humaines",
    badge: "Avantage RH & Déductible IS",
    title: "Santé & Prévoyance Collective Entreprise",
    subtitle: "Valorisez vos collaborateurs avec la meilleure couverture médicale.",
    desc: "Fidélisez votre personnel grâce à une assurance santé de groupe avantageuse avec tiers payant en clinique et déductibilité fiscale.",
    features: [
      { title: "Tiers-Payant Élargi en Cliniques", desc: "Prise en charge directe pour hospitalisations et actes chirurgicaux." },
      { title: "Soins Courants, Analyses & Pharmacie", desc: "Remboursements rapides sous 48h de vos consultations et feuilles de soins." },
      { title: "Prévoyance Décès & Invalidité", desc: "Sécurisation financière des proches du collaborateur en cas de drame." },
      { title: "Espace Gestion Dématérialisé", desc: "Suivi en ligne des dossiers et feuilles de soins pour les salariés." }
    ],
    advantages: [
      "Cotisations 100% déductibles de l'impôt sur les sociétés (IS)",
      "Exonération fiscale avantageuse pour les salariés",
      "Accompagnement de proximité de vos équipes RH à Marrakech"
    ],
    requiredDocs: [
      "Liste des effectifs à assurer avec dates de naissance et situation familiale",
      "Statuts et RC de l'entreprise",
      "Niveau de couverture souhaité (80%, 85%, 90% ou 100%)"
    ],
    faq: [
      {
        q: "Quel est l'impact fiscal des cotisations pour l'entreprise ?",
        a: "Les cotisations payées par l'employeur sont 100% déductibles du résultat fiscal soumis à l'Impôt sur les Sociétés (IS) et ne sont pas considérées comme un avantage en nature pour le salarié."
      },
      {
        q: "Comment les salariés suivent-ils leurs remboursements ?",
        a: "Chaque collaborateur dispose d'un accès à l'application mobile AXA Maroc pour photographier ses feuilles de soins et suivre ses virements de remboursement en temps réel."
      },
      {
        q: "La couverture s'applique-t-elle aux conjoints et aux enfants ?",
        a: "Oui, les contrats de groupe prévoient des formules individuelles, couple ou famille complète avec prise en charge directe en clinique."
      }
    ],
    quotePlaceholder: "Effectif de salariés concernés, tranche d'âge moyenne, niveau de couverture souhaité...",
    action: "Demander une Proposition Santé Groupe",
    telLabel: "Pôle RH : 05 25 36 30 61"
  }
};

const OFFERS_I18N = {
  ar: {
    auto: {
      category: "الأفراد • حركية وتنقل",
      badge: "نجدة 24/7 وقطر 0 كلم مجاناً",
      title: "تأمين السيارات والدراجات النارية أكسا",
      subtitle: "الحل المرجعي لقيادة آمنة وراحة بال مطلقة بمراكش والمغرب.",
      desc: "تغطية شاملة لجميع الأخطار مع مساعدة 24/7 والقطر من 0 كلم، إصلاح الزجاج بدون اقتطاع، سيارة بديلة ومعاينة فورية.",
      features: [
        { title: "مساعدة وقطر 24/7 من 0 كلم", desc: "تدخل فوري أمام منزلك أو على جميع طرقات المغرب ومراكش." },
        { title: "تكسر الزجاج بدون اقتطاع", desc: "استبدال فوري لزجاج السيارة دون التأثير على تخفيض السعر (البونيس)." },
        { title: "سيارة بديلة مجانية", desc: "توفير سيارة بديلة طيلة فترة الإصلاح في ورشة معتمدة." },
        { title: "تخفيضات خاصة بالموظفين", desc: "تخفيضات مميزة لموظفي الدولة ورجال التعليم والمؤسسات الكبرى." }
      ],
      advantages: [
        "معالجة مباشرة للتعويضات داخل وكالتنا بشارع كَمَاسة (المحاميد)",
        "شبكة واسعة من كراجات وميكانيكيي الإصلاح المعتمدين بمراكش",
        "تسليم فوري لشهادة التأمين بالوكالة"
      ],
      action: "طلب تسعيرة سيارة",
      telLabel: "مستشار السيارات : 05 25 36 30 61"
    },
    habitation: {
      category: "الأفراد • السكن والعقار",
      badge: "عرض هابيتاسور الشامل",
      title: "تأمين السكن والرياض هابيتاسور أكسا",
      subtitle: "حماية فيلتكم أو شقتكم أو رياضكم في مراكش.",
      desc: "حماية عقاراتكم وأثاثكم ضد الحريق، أضرار المياه، السرقة، تكسر الزجاج والكوارث الطبيعية.",
      features: [
        { title: "الحريق والأخطار المناخية", desc: "تعويض شامل لإعادة البناء وتجديد التجهيزات المنزلية." },
        { title: "أضرار المياه والتسربات", desc: "إصلاح التسربات وتغطية الأضرار المادية في الحال." },
        { title: "السرقة وأعمال التخريب", desc: "تعويض الأثاث والأجهزة الإلكترونية والممتلكات الثمينة." },
        { title: "المسؤولية المدنية لرب الأسرة", desc: "تغطية الأضرار المسببة للغير من قبل أفراد العائلة." }
      ],
      advantages: [
        "عرض هابيتاسور مخصص للإقامات الرئيسية والثانوية والرياض",
        "خدمة إصلاح السباكة والكهرباء والأقفال المستعجلة 24/7",
        "تقييم ميسر للأثاث دون إجراءات معقدة"
      ],
      action: "طلب تسعيرة سكن",
      telLabel: "مستشار السكن : 05 25 36 30 61"
    },
    sante: {
      category: "الأفراد • الصحة والأسرة",
      badge: "صحتي وسيحاتي بلس دولي",
      title: "التأمين الصحي صحتي وسيحاتي بلس دولي",
      subtitle: "أفضل تغطية علاجية واستشفائية لحمايتكم وحماية أسرتكم.",
      desc: "تغطية شاملة للمصاريف الطبية، الاستشارات، الفحوصات والعمليات الجراحية بالمغرب وبالخارج مع نظام الدفع المباشر دون تسبيق المصاريف.",
      features: [
        { title: "صيغة صحتي بالمغرب", desc: "تحمل مباشر دون تسبيق مصاريف في المصحات المتعاقدة بالمملكة." },
        { title: "صيغة صحتي بلس دولي", desc: "تغطية صحية متقدمة خارج المغرب للعمليات الجراحية والإخلاء الطبي." },
        { title: "التحاليل والفحص بالأشعة", desc: "تكفل سريع بالتحاليل المخبرية والراديو والسكانير والرنين المغناطيسي." },
        { title: "الأمراض المزمنة والدقيقة", desc: "رأسمال مضمون وتغطية معززة للأمراض طويلة الأمد." }
      ],
      advantages: [
        "تعاقد مع كبرى المصحات الخاصة بمراكش وعموم المغرب",
        "تغطية صحية دولية اختيارية مع الإسعاف الجوي",
        "تطبيق رقمي وتتبع مباشر لملفات التعويض بالوكالة",
        "تسعيرة تفضيلية للعائلات والأطفال"
      ],
      action: "طلب تسعيرة تأمين صحي",
      telLabel: "المستشار الصحي : 05 25 36 30 61"
    },
    prevoyance: {
      category: "الأفراد • الحماية المالية",
      badge: "أمان مالي وحماية العائلة",
      title: "التأمين ضد الحوادث وحماية الأسرة",
      subtitle: "ضمان مستقبل عائلتكم في مواجهة تقلبات الحياة.",
      desc: "صرف رأسمال مضمون وتعويضات تعليمية للحفاظ على المستوى المعيشي لذويكم عند وقوع أي طارئ صحي أو حادث مفاجئ.",
      action: "طلب دراسة ادخار وحماية",
      telLabel: "قسم الحماية : 05 25 36 30 61"
    },
    epargne: {
      category: "الأفراد • التقاعد والاستثمار",
      badge: "خصم ضريبي من الضريبة على الدخل",
      title: "الادخار والتقاعد التكميلي فوتوريس 2",
      subtitle: "تكوين رأسمال متنامٍ مع عائد مضمون من أكسا.",
      desc: "استثمروا مدخراتكم بثقة واستفيدوا من عائدات مؤمنة وخصم ضريبي مباشر من الضريبة على الدخل (IR).",
      action: "طلب دراسة تقاعد",
      telLabel: "مستشار الادخار : 05 25 36 30 61"
    },
    voyage: {
      category: "الأفراد • السفر الدولي",
      badge: "معتمد لتأشيرة شينغن",
      title: "تأمين السفر وتأشيرة شينغن",
      subtitle: "شهادة تأمين فورية مقبولة لدى كافة القنسليات الأوروبية.",
      desc: "تغطية طبية دولية، مصاريف الاستشفاء الطارئة، وإعادة الترحيل الصحي 24/7 مطابقة تماماً لشروط فيزا شينغن.",
      action: "إصدار شهادة السفر",
      telLabel: "مكتب التأشيرات : 05 25 36 30 61"
    },
    multirisque_pro: {
      category: "المهنيون • حماية النشاط والمقرات",
      badge: "تغطية شاملة للمحلات والمكاتب",
      title: "التأمين الشامل للمهنيين والمحلات أكسا",
      subtitle: "حماية مقرات العمل، التجهيزات، السلع ومسؤولية نشاطكم التجاري.",
      desc: "تأمين مخصص للتجار، الحرفيين، المكاتب والعيادات ضد الحريق، أضرار المياه، السرقة والمسؤولية المدنية المهنية.",
      action: "طلب دراسة مهنية",
      telLabel: "مستشار المهنيين : 05 25 36 30 61"
    },
    rc_pro: {
      category: "المهنيون • المسؤولية القانونية",
      badge: "حماية قانونية ومالية شاملة",
      title: "المسؤولية المدنية المهنية والاستغلال",
      subtitle: "حماية مقاولتكم من المطالبات بالتعويض الناتجة عن الأخطاء المهنية.",
      desc: "تغطية الأضرار المادية، الجسدية والمعنوية التي قد تلحق بالزبناء أو الأغيار أثناء ممارسة نشاطكم المهني.",
      action: "طلب تسعيرة مسؤولية مدنية",
      telLabel: "قسم العقود : 05 25 36 30 61"
    },
    at_mp: {
      category: "المقاولات • الالتزام القانوني",
      badge: "مطابق للقانون المغربي 18-12",
      title: "تأمين حوادث الشغل والأمراض المهنية",
      subtitle: "حماية إلزامية وشاملة لعمالكم ومستخدميكم بمراكش.",
      desc: "تحمل فوري لمصاريف العلاج والاستشفاء وصرف الإيرادات اليومية والتعويضات الدائمة عند حوادث الشغل والمسار.",
      action: "طلب تسعيرة حوادث الشغل",
      telLabel: "مستشار المقاولات : 05 25 36 30 61"
    },
    flotte: {
      category: "المقاولات • وسائل النقل اللوجستي",
      badge: "إدارة مركزية لأسطول المركبات",
      title: "تأمين أسطول سيارات وشاحنات المقاولة",
      subtitle: "حلول مرنة وموحدة لإدارة وتأمين كافة مركبات شركتكم.",
      desc: "عقد موحد لسيارات الخدمة، الشاحنات والآليات مع شروط تفضيلية، مساعدة 24/7 وخدمة التدبير السريع للحوادث.",
      action: "طلب تسعيرة أسطول",
      telLabel: "إدارة الأساطيل : 05 25 36 30 61"
    },
    trc: {
      category: "المقاولات • البناء والأشغال الكبرى",
      badge: "حماية مشاريع البناء والأوراش",
      title: "تأمين جميع أخطار الورش (TRC BTP)",
      subtitle: "تأمين المشاريع الإنشائية والتوسعات العقارية بمراكش ضد الحوادث.",
      desc: "تغطية المنشآت قيد الإنجاز، الآليات، والمواد ومسؤولية الورش ضد الأضرار المادية ومطالبات الجيران والأغيار.",
      action: "طلب تسعيرة الورش",
      telLabel: "مهندس التأمين : 05 25 36 30 61"
    },
    sante_groupe: {
      category: "المقاولات • الموارد البشرية والمزايا",
      badge: "مزايا ضريبية واستقطاب الكفاءات",
      title: "التأمين الصحي الجماعي والتقاعد للشركات",
      subtitle: "تعزيز ولاء وتحفيز أجرائكم بتغطية صحية متقدمة.",
      desc: "تغطية طبية تكميلية شاملة للموظفين وعائلاتهم مع خصم ضريبي 100% من الضريبة على الشركات (IS) وتطبيق هاتفي مخصص.",
      action: "طلب دراسة صحة جماعية",
      telLabel: "قطاع الشركات : 05 25 36 30 61"
    }
  },
  en: {
    auto: {
      category: "Personal • Mobility",
      badge: "24/7 Assistance & 0-km Towing",
      title: "AXA Car & Motorcycle Insurance",
      subtitle: "The benchmark policy for total peace of mind on the road in Marrakech.",
      desc: "Comprehensive all-risks cover combining 24/7 assistance, 0-km towing, zero-deductible glass breakage, and courtesy car replacement.",
      action: "Request Car Quote",
      telLabel: "Car Advisor: 05 25 36 30 61"
    },
    habitation: {
      category: "Personal • Property",
      badge: "HABITASSUR All-Risks Plan",
      title: "HABITASSUR AXA Home Insurance",
      subtitle: "Protect your villa, apartment, or traditional riad in Marrakech.",
      desc: "Comprehensive coverage for real estate and furnishings against fire, water leaks, theft, glass breakage, and natural catastrophes.",
      action: "Request Home Quote",
      telLabel: "Home Advisor: 05 25 36 30 61"
    },
    sante: {
      category: "Personal • Health & Family",
      badge: "Sehassur & International Care",
      title: "Sehassur Health & Global Coverage",
      subtitle: "Access to top medical care and direct clinic billing for you and your family.",
      desc: "Complete medical coverage, consultations, hospitalization and surgery across Morocco and abroad with third-party payment system.",
      action: "Request Health Quote",
      telLabel: "Health Advisor: 05 25 36 30 61"
    },
    prevoyance: {
      category: "Personal • Financial Security",
      badge: "Guaranteed Family Security",
      title: "Accident & Family Protection",
      subtitle: "Securing your family's future against unforeseen hardships.",
      desc: "Guaranteed lump-sum capital and education annuities to preserve your loved ones' living standards in case of serious accidents.",
      action: "Request Protection Plan",
      telLabel: "Protection Dept: 05 25 36 30 61"
    },
    epargne: {
      category: "Personal • Retirement & Savings",
      badge: "Income Tax Deductible",
      title: "Futuris II Savings & Retirement",
      subtitle: "Build your capital safely with AXA's guaranteed performance.",
      desc: "Build guaranteed long-term capital while reducing your annual income tax liability through official tax deduction brackets.",
      action: "Request Savings Plan",
      telLabel: "Savings Advisor: 05 25 36 30 61"
    },
    voyage: {
      category: "Personal • International Travel",
      badge: "Schengen Visa Approved",
      title: "Schengen Visa Travel Insurance",
      subtitle: "Instant certificate fully compliant with European consular requirements.",
      desc: "International emergency medical expenses, urgent hospitalization, and 24/7 medical repatriation accepted across all Schengen embassies.",
      action: "Issue Travel Certificate",
      telLabel: "Visa Desk: 05 25 36 30 61"
    },
    multirisque_pro: {
      category: "Commercial • Business Protection",
      badge: "All-in-One Commercial Cover",
      title: "Commercial Multi-Peril Insurance",
      subtitle: "Protect your premises, merchandise, equipment, and business continuity in Marrakech.",
      desc: "Custom coverage for shops, offices, clinics, and workshops against fire, water damage, theft, and third-party liabilities.",
      action: "Request Commercial Quote",
      telLabel: "Commercial Advisor: 05 25 36 30 61"
    },
    rc_pro: {
      category: "Commercial • Legal Liability",
      badge: "Comprehensive Legal Protection",
      title: "Commercial General Liability (RC Pro)",
      subtitle: "Protecting your enterprise against financial claims resulting from operational errors.",
      desc: "Full compensation for bodily injury, property damage, and consequential loss caused to third parties during business operations.",
      action: "Request Liability Quote",
      telLabel: "Legal Dept: 05 25 36 30 61"
    },
    at_mp: {
      category: "Corporate • Legal Compliance",
      badge: "Moroccan Law 18-12 Compliant",
      title: "Workplace Accidents Insurance (Law 18-12)",
      subtitle: "Mandatory, full-scale protection for employees and staff in Marrakech.",
      desc: "Immediate coverage for medical expenses, hospital bills, daily allowances, and permanent disability pensions under Moroccan Labor Law.",
      action: "Request Corporate Quote",
      telLabel: "Corporate Advisor: 05 25 36 30 61"
    },
    flotte: {
      category: "Corporate • Fleet & Logistics",
      badge: "Centralized Fleet Management",
      title: "Commercial Fleet Insurance",
      subtitle: "Streamlined management and unified coverage for company vehicles and utility vans.",
      desc: "Single contract covering delivery fleets, service cars, and transport trucks with negotiated rates, 24/7 towing, and fast claims processing.",
      action: "Request Fleet Proposal",
      telLabel: "Fleet Manager: 05 25 36 30 61"
    },
    trc: {
      category: "Corporate • Construction & Engineering",
      badge: "Construction Site All Risks",
      title: "Contractors All Risks (CAR BTP)",
      subtitle: "Securing construction projects and real estate developments against perils in Marrakech.",
      desc: "Comprehensive policy for works under construction, heavy equipment, building materials, and third-party liabilities during civil works.",
      action: "Request CAR Quote",
      telLabel: "Risk Engineer: 05 25 36 30 61"
    },
    sante_groupe: {
      category: "Corporate • HR & Employee Benefits",
      badge: "100% Corporate Tax Deductible",
      title: "Corporate Group Health & Benefits",
      subtitle: "Attract and retain top talent with comprehensive private medical coverage.",
      desc: "Tailored health plans for employees and dependents, direct clinic billing, 100% corporate tax deductibility, and mobile claims tracking.",
      action: "Request Group Proposal",
      telLabel: "HR Division: 05 25 36 30 61"
    }
  }
};

function getCurrentLang() {
  return (window.EchkiliI18n ? window.EchkiliI18n.getLanguage() : 'fr');
}

function getLocalizedOffer(type, lang) {
  if (!lang) lang = getCurrentLang();
  const base = OFFERS_DATA[type] || OFFERS_DATA.auto;
  const loc = (OFFERS_I18N[lang] && OFFERS_I18N[lang][type]) ? OFFERS_I18N[lang][type] : null;
  if (!loc) return base;
  return { ...base, ...loc };
}

// Fonctions de navigation et modal
function switchPageTab(type) {
  const btnParticuliers = document.getElementById('tabParticuliersBtn');
  const btnPros = document.getElementById('tabProsBtn');
  const btnAll = document.getElementById('tabAllBtn');
  const gridParticuliers = document.getElementById('gridParticuliers');
  const gridPros = document.getElementById('gridPros');

  if (btnParticuliers) btnParticuliers.classList.remove('active');
  if (btnPros) btnPros.classList.remove('active');
  if (btnAll) btnAll.classList.remove('active');

  if (type === 'particuliers') {
    if (btnParticuliers) btnParticuliers.classList.add('active');
    if (gridParticuliers) gridParticuliers.style.display = 'grid';
    if (gridPros) gridPros.style.display = 'none';
  } else if (type === 'pros') {
    if (btnPros) btnPros.classList.add('active');
    if (gridParticuliers) gridParticuliers.style.display = 'none';
    if (gridPros) gridPros.style.display = 'grid';
  } else {
    if (btnAll) btnAll.classList.add('active');
    if (gridParticuliers) gridParticuliers.style.display = 'grid';
    if (gridPros) gridPros.style.display = 'grid';
  }
}

function openOfferModal(type) {
  const offer = getLocalizedOffer(type);
  const modal = document.getElementById('productModal');
  const prodTag = document.getElementById('prodModalTag');
  const prodTitle = document.getElementById('prodModalTitle');
  const prodSub = document.getElementById('prodModalSubtitle');
  const prodContent = document.getElementById('prodModalContent');

  if (prodTag) prodTag.textContent = offer.category;
  if (prodTitle) prodTitle.textContent = offer.title;
  if (prodSub) prodSub.textContent = offer.subtitle;

  if (prodContent) {
    prodContent.innerHTML = `
      <p style="font-size: 1rem; color: #334155; line-height: 1.65; margin-bottom: 1.5rem;">
        ${offer.desc}
      </p>

      <h3 style="font-size: 1.15rem; font-weight: 800; color: #00186b; margin: 1.5rem 0 0.75rem 0; display: flex; align-items: center; gap: 0.5rem;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e11d48" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        Garanties et Prestations Clés
      </h3>

      <div class="product-details-grid">
        ${offer.features.map(f => `
          <div class="product-feature-box">
            <h4>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00186b" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              ${f.title}
            </h4>
            <p>${f.desc}</p>
          </div>
        `).join('')}
      </div>

      <h3 style="font-size: 1.15rem; font-weight: 800; color: #00186b; margin: 1.75rem 0 0.75rem 0;">
        Les Avantages du Réseau AXA Maroc &amp; Assurances Echkili
      </h3>

      <ul class="product-advantages-list">
        ${offer.advantages.map(adv => `
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00186b" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span>${adv}</span>
          </li>
        `).join('')}
      </ul>

      <div class="product-modal-footer-cta">
        <div class="cta-text">
          <h4>Besoin d'une étude personnalisée immédiate ?</h4>
          <p>Votre Agent Général AXA à Marrakech vous répond sous 24h ouvrées.</p>
        </div>
        <div class="cta-buttons">
          <a href="produit.html?id=${type}" class="btn" style="display: inline-flex; align-items: center; gap: 0.45rem; background: #002868; color: #ffffff; text-decoration: none; font-weight: 700; border-radius: 6px; padding: 0.65rem 1.15rem;">
            <span>Voir la Page Dédiée</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </a>
          <a href="https://wa.me/212667762124?text=Bonjour%20ECHKILI%20ASSURANCES,%20je%20souhaite%20un%20devis%20pour%20${encodeURIComponent(offer.title)}" target="_blank" rel="noopener noreferrer" class="btn btn-accent" style="display: inline-flex; align-items: center; gap: 0.5rem; background: #22c55e; border-color: #22c55e;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.79 14.07c-.24.68-1.2 1.26-1.74 1.31-.49.05-1.12.08-3.62-.95-3.19-1.32-5.24-4.57-5.4-4.78-.16-.21-1.3-1.73-1.3-3.3 0-1.57.82-2.34 1.11-2.66.29-.32.64-.4.85-.4.21 0 .43 0 .61.01.2.01.46-.07.72.55.26.63.9 2.2.98 2.36.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.47.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.32.16.51.14.7-.08.2-.21.84-.98 1.07-1.32.22-.34.45-.29.75-.18.31.11 1.95.92 2.29 1.09.34.17.56.25.64.39.09.14.09.81-.15 1.49z"/></svg>
            Devis Express WhatsApp
          </a>
          <a href="tel:+212525363061" class="btn btn-outline" style="display: inline-flex; align-items: center; gap: 0.45rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            ${offer.telLabel}
          </a>
        </div>
      </div>
    `;
  }

  if (modal) modal.classList.add('open');
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  if (modal) modal.classList.remove('open');
}

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const type = params.get('type');

  if (type === 'pros' || type === 'entreprises' || type === 'pro') {
    switchPageTab('pros');
  } else if (type === 'particuliers' || type === 'particulier') {
    switchPageTab('particuliers');
  } else {
    switchPageTab('all');
  }

  // Floating Back to Top Button Controller
  (function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    const banner = document.querySelector('.page-intro-banner') || document.querySelector('.top-brand-header');
    if (!backToTopBtn) return;

    function getThreshold() {
      if (banner) {
        const rect = banner.getBoundingClientRect();
        return Math.max(rect.height - 40, 250);
      }
      return 300;
    }

    let threshold = getThreshold();
    window.addEventListener('resize', () => {
      threshold = getThreshold();
    }, { passive: true });

    let isVisible = false;
    function checkScroll() {
      const scrolled = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (scrolled > threshold) {
        if (!isVisible) {
          backToTopBtn.classList.add('visible');
          isVisible = true;
        }
      } else {
        if (isVisible) {
          backToTopBtn.classList.remove('visible');
          isVisible = false;
        }
      }
    }

    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();

    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  })();
});

if (typeof window !== 'undefined') {
  window.OFFERS_DATA = OFFERS_DATA;
  window.OFFERS_I18N = OFFERS_I18N;
  window.getLocalizedOffer = getLocalizedOffer;
  window.switchPageTab = switchPageTab;
  window.openOfferModal = openOfferModal;
  window.closeProductModal = closeProductModal;
}
