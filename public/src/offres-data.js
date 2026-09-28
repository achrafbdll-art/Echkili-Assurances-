// Catalogue et gestion des offres pour la page offres.html et produit.html
// Support trilingue complet : Français (FR), العربية (AR), English (EN)

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
  moto: {
    category: "Particuliers • Deux-Roues & Mobilité",
    badge: "Protection Pilote & Dépannage 24/7",
    title: "Assurance Deux-Roues & Moto AXA",
    subtitle: "La solution sur-mesure pour motos, scooters et grosses cylindrées à Marrakech.",
    desc: "Couverture dédiée motards et conducteurs de deux-roues : responsabilité civile, protection du pilote et casque, vol, incendie et assistance dépannage 24/7 immédiate.",
    features: [
      { title: "Protection Individuelle Conducteur", desc: "Prise en charge des frais médicaux et prévoyance corporelle du motard." },
      { title: "Assistance Dépannage Moto 24/7", desc: "Remorquage spécialisé deux-roues 0 km à Marrakech et région." },
      { title: "Garantie Casque & Équipement", desc: "Indemnisation de votre équipement de sécurité en cas de sinistre." },
      { title: "Défense & Recours Juridique", desc: "Assistance juridique complète en cas de litige suite à un accident." }
    ],
    advantages: [
      "Tarifs compétitifs adaptés à la cylindrée et à l'usage",
      "Édition immédiate de la carte verte à l'agence Avenue Guemassa",
      "Réseau de garages et réparateurs motos conventionnés"
    ],
    requiredDocs: [
      "Carte grise ou récépissé d'achat du deux-roues",
      "Permis de conduire correspondant à la cylindrée",
      "Copie de la CIN"
    ],
    faq: [
      {
        q: "L'équipement de protection et le casque sont-ils couverts ?",
        a: "Oui, nos formules moto incluent une garantie dédiée pour l'indemnisation de votre casque et équipement vestimentaire de protection."
      },
      {
        q: "Comment fonctionne le remorquage en cas de crevaison ou panne moto ?",
        a: "Un appel à notre assistance 24/7 (05 25 36 30 61) déclenche l'intervention d'une dépanneuse adaptée au transport sécurisé de votre moto."
      },
      {
        q: "Puis-je assurer un scooter 50cc ou une grosse moto ?",
        a: "Absolument, nous assurons l'ensemble des cylindrées, du scooter urbain aux motos routières et sportives."
      }
    ],
    quotePlaceholder: "Modèle et cylindrée moto, date de mise en circulation, usage personnel ou pro...",
    action: "Demander mon Devis Moto",
    telLabel: "Conseiller Moto : 05 25 36 30 61"
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
    title: "Prévoyance Accident & Famille AXA",
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
      { title: "Rapatriement Médicalisé 24/7", desc: "Évacuation sanitaire encadrée par une équipe médicale d'urgence." },    
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
      "Audit gratuit de vos risques sur site à Marrakech par notre équipe"
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
      },
      {
        q: "Ce contrat est-il conforme aux appels d'offres publics ?",
        a: "Absolument. Nous émettons des attestations avec les plafonds de garantie et les mentions spécifiques exigées par les cahiers des charges."
      }
    ],
    quotePlaceholder: "Métier / secteur d'activité, chiffre d'affaires annuel approximatif, plafonds souhaités...",
    action: "Demander une Étude RC Pro",
    telLabel: "Pôle Entreprise : 05 25 36 30 61"
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
        a: "La loi 18-12 impose une déclaration sous 48 heures ouvrées. Notre agence dispose d'un guichet dédié pour vous accompagner immédiatement dans ces démarches."
      }
    ],
    quotePlaceholder: "Nombre de salariés déclarés, masse salariale annuelle globale, secteur d'activité...",
    action: "Mettre en conformité mon Entreprise",
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
      { title: "Optique & Dentaire Renforcés", desc: "Forfaits généreux pour lunettes, soins et prothèses dentaires." }
    ],
    advantages: [
      "Cotisations 100% déductibles du résultat fiscal (Impôt sur les Sociétés - IS)",
      "Application mobile pour le dépôt et le suivi digital des dossiers médicaux",
      "Interlocuteur dédié pour la gestion des affiliations et radiations"
    ],
    requiredDocs: [
      "Liste des salariés avec dates de naissance et situation de famille",
      "Statuts de l'entreprise et Registre de Commerce",
      "Relevé de sinistralité si contrat groupe existant"
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
      requiredDocs: [
        "البطاقة الرمادية الأصلية للمركبة",
        "نسخة من بطاقة التعريف الوطنية (CIN)",
        "رخصة سياقة سارية المفعول",
        "بيان معلومات من شركة التأمين السابقة (لاسترجاع نسبة التخفيض)"
      ],
      faq: [
        {
          q: "كيف تعمل خدمة النجدة والمساعدة من 0 كلم في حالة عطل بمراكش؟",
          a: "في حالة وقوع أي عطل، سواء أمام باب منزلك بمراكش أو على أي طريق بالمملكة، تتدخل شاحنة قطر معتمدة من أكسا على مدار الساعة بمجرد الاتصال على 05 25 36 30 61."
        },
        {
          q: "هل يؤثر تعويض تكسر الزجاج على نسبة البونيس الخاصة بي؟",
          a: "لا، لدى أكسا تعويض واستبدال الزجاج الأمامي أو النوافذ الجانبية لا يؤثر أبداً على معامل التخفيض (Bonus)."
        },
        {
          q: "هل أستفيد من تخفيضات اتفاقيات رجال التعليم والموظفين؟",
          a: "نعم، تطبق وكالتنا فوراً التخفيضات والاتفاقيات الرسمية المعتمدة لنساء ورجال التعليم وموظفي الإدارات والمؤسسات العمومية بمجرد الإدلاء بشهادة العمل."
        }
      ],
      quotePlaceholder: "نوع السيارة، الطراز، القوة الجبائية (مثال: 6 خيل ديزل)، تاريخ أول تسجيل...",
      action: "طلب تسعيرة سيارة",
      telLabel: "مستشار السيارات : 05 25 36 30 61"
    },
    moto: {
      category: "الأفراد • الدراجات النارية والتنقل",
      badge: "حماية السائق ومساعدة 24/7",
      title: "تأمين الدراجات النارية والسكوتر أكسا",
      subtitle: "الحل المتخصص للدراجات النارية والسكوتر بمراكش والمغرب.",
      desc: "تغطية شاملة ومصممة خصيصاً لسائقي الدراجات النارية: المسؤولية المدنية، حماية السائق والخوذة، السرقة، الحريق والمساعدة في القطر 24/7 على الفور بمراكش ونواحيها.",
      features: [
        { title: "حماية السائق الجسدية", desc: "تغطية المصاريف الطبية والتعويض البدني للسائق." },
        { title: "مساعدة وقطر 24/7", desc: "قطر متخصص للدراجات النارية 0 كم بمراكش والمغرب." },
        { title: "ضمان الخوذة ومعدات الحماية", desc: "تعويض الخوذة والمعدات في حالة وقوع حادث." },
        { title: "الدفاع القانوني والمطالبة بالحقوق", desc: "مرافقة قانونية شاملة عند النزاعات الناتجة عن الحوادث." }
      ],
      advantages: [
        "أسعار تنافسية مناسبة لسعة المحرك وطبيعة الاستعمال",
        "تسليم فوري لشهادة وبطاقة التأمين بالوكالة بشارع كَمَاسة",
        "شبكة ورشات ومرائب معتمدة متخصصة بمراكش"
      ],
      requiredDocs: [
        "البطاقة الرمادية أو وصل شراء الدراجة",
        "رخصة السياقة المناسبة لسعة الدراجة",
        "نسخة من بطاقة التعريف الوطنية (CIN)"
      ],
      faq: [
        {
          q: "هل يشمل التأمين الخوذة والمعدات الواقية؟",
          a: "نعم، تتضمن صيغنا ضماناً خاصاً لتعويض الخوذة وتجهيزات الأمان الخاصة بالسائق."
        },
        {
          q: "كيف تتم المساعدة عند وقوع عطب أو ثقب عجلة؟",
          a: "عبر اتصال واحد برقم المساعدة 24/7 (05 25 36 30 61)، يتم إرسال شاحنة قطر مجهزة لنقل دراجتكم بكل أمان."
        },
        {
          q: "هل يمكن تأمين السكوتر 50cc والدراجات الكبيرة؟",
          a: "نعم بالتأكيد، نؤمن جميع فئات الدراجات من السكوتر الصغير إلى الدراجات النارية الكبيرة والسياحية."
        }
      ],
      quotePlaceholder: "نوع وسعة المحرك، تاريخ أول شروع في الاستخدام، الاستعمال شخصي أو مهني...",
      action: "طلب تسعيرة تأمين الدراجة النارية",
      telLabel: "مستشار الدراجات النارية : 05 25 36 30 61"
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
      requiredDocs: [
        "شهادة الملكية أو عقد الإيجار أو وصل الكراء",
        "نسخة من بطاقة التعريف الوطنية للمؤمن له",
        "تقدير تقريبي لقيمة الأثاث والتجهيزات الثمينة"
      ],
      faq: [
        {
          q: "هل يشمل العقد الرياضات والإقامات الثانوية في مراكش؟",
          a: "نعم، يحمي عقد هابيتاسور الفيلات والشقق والرياضات التقليدية بالمدينة العتيقة أو النخيل أو كيليز بكل مرونة."
        },
        {
          q: "ماذا أفعل في حالة تسرب مائي من شقة الجار؟",
          a: "يتضمن عقدكم ضمان أضرار المياه وحق الرجوع ضد الأغيار، حيث نرسل خبيراً وفنياً معتمداً ونتولى المعاينة الودية فوراً."
        },
        {
          q: "هل المجوهرات والمقتنيات الثمينة مغطاة ضد السرقة؟",
          a: "نعم، تتيح باقات هابيتاسور تغطية المجوهرات والتحف الفنية وفق سقف مالي مصرح به وبشروط تفضيلية."
        }
      ],
      quotePlaceholder: "نوع السكن (فيلا، شقة، رياض)، المساحة التقريبية (م²)، القيمة التقديرية للأثاث...",
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
      requiredDocs: [
        "نسخة من بطاقة التعريف الوطنية للمكتتب",
        "كشف الحالة العائلية (الزوج/الزوجة والأبناء في الكفالة)",
        "شهادة التعريف البنكي (RIB) لصرف التعويضات بالتحويل الفوري"
      ],
      faq: [
        {
          q: "ما هو الفرق بين صيغة صحتي وصيغة صحتي بلس دولي؟",
          a: "صيغة صحتي توفر تغطية طبية شاملة داخل المغرب بنظام الدفع المباشر، بينما تمدد صيغة صحتي بلس دولي الحماية إلى أرقى المستشفيات خارج المغرب مع الإخلاء الصحي الدولي."
        },
        {
          q: "ما هي مصحات مراكش المعتمدة في نظام الأداء المباشر (Tiers Payant)؟",
          a: "نظام الدفع المباشر من أكسا معتمد في كبرى المصحات الخاصة المرموقة بمراكش؛ حيث لا يطلب منك أي تسبيق مالي للاستشفاء أو الجراحة."
        },
        {
          q: "كم تستغرق مدة تعويض ملفات العلاج والأدوية؟",
          a: "تتم معالجة أوراق العلاج المودعة بوكالتنا أو عبر التطبيق الرقمي خلال 48 ساعة عمل ويحول المبلغ مباشرة إلى حسابكم البنكي."
        }
      ],
      quotePlaceholder: "التركيبة العائلية (أعمار الزوجين وعدد الأبناء)، مستوى التغطية الصحية المطلوب...",
      action: "طلب تسعيرة تأمين صحي",
      telLabel: "المستشار الصحي : 05 25 36 30 61"
    },
    prevoyance: {
      category: "الأفراد • الحماية المالية",
      badge: "أمان مالي وحماية العائلة",
      title: "التأمين ضد الحوادث وحماية الأسرة",
      subtitle: "ضمان مستقبل عائلتكم في مواجهة تقلبات الحياة.",
      desc: "صرف رأسمال مضمون وتعويضات تعليمية للحفاظ على المستوى المعيشي لذويكم عند وقوع أي طارئ صحي أو حادث مفاجئ.",
      features: [
        { title: "رأسمال مضمون عند الوفاة", desc: "صرف فوري للرأسمال للمستفيدين المحددين معفى تماماً من الضرائب." },
        { title: "منحة دراسية للأبناء", desc: "راتب تعليمي دوري يضمن مواصلة الأبناء لدراستهم العليا." },
        { title: "العجز البدني المستمر", desc: "تعويضات مالية تتناسب مع نسبة العجز لتأهيل الظروف الحياتية." },
        { title: "إعادة الجثمان ونقل المريض", desc: "تكفل لوجستي وإداري شامل في الحالات الطارئة." }
      ],
      advantages: [
        "اكتتاب سريع ومبسط دون فحوصات طبية معقدة",
        "حرية تامة في تحديد مقدار الرأسمال والمستفيدين",
        "مرافقة إنسانية ومهنية من فريق وكالتنا بمراكش"
      ],
      requiredDocs: [
        "نسخة من بطاقة التعريف الوطنية للمؤمن له",
        "تحديد أسماء وبيانات المستفيدين",
        "استمارة صحية مبسطة"
      ],
      faq: [
        {
          q: "من يمكن تحديده كمستفيد من الرأسمال؟",
          a: "لكم كامل الحرية في تعيين المستفيدين (الزوجة، الأبناء، الوالدين) مع إمكانية تعديل هذا البند في أي وقت تشاؤون."
        },
        {
          q: "هل يخضع الرأسمال المصروف للضريبة في المغرب؟",
          a: "لا، الرأسمال المدفوع للمستفيدين معفى كلياً من رسوم التركات ومن الضريبة على الدخل بالمغرب."
        },
        {
          q: "كيف تصرف المنحة الدراسية للأبناء؟",
          a: "تصرف المنحة التعليمية بصفة فصلية منتظمة لتمويل تكاليف الدراسة والجامعة حتى بلوغ سن 25 سنة."
        }
      ],
      quotePlaceholder: "مقدار الرأسمال المرغوب (مثال: 200 ألف درهم، 500 ألف درهم)، عمر المؤمن له...",
      action: "طلب دراسة حماية الأسرة",
      telLabel: "قسم الحماية : 05 25 36 30 61"
    },
    epargne: {
      category: "الأفراد • التقاعد والاستثمار",
      badge: "خصم ضريبي من الضريبة على الدخل",
      title: "الادخار والتقاعد التكميلي فوتوريس 2",
      subtitle: "تكوين رأسمال متنامٍ مع عائد مضمون من أكسا.",
      desc: "استثمروا مدخراتكم بثقة واستفيدوا من عائدات مؤمنة وخصم ضريبي مباشر من الضريبة على الدخل (IR).",
      features: [
        { title: "عائد مضمون ومشاركة في الأرباح", desc: "نسبة فائدة تقنية مضمونة سنوياً من أكسا مع حصة من الأرباح المالية." },
        { title: "امتياز ضريبي هام", desc: "خصم كامل للمساهمات من الدخل الصافي الخاضع للضريبة." },
        { title: "دفعات حرة أو دورية", desc: "تغذية حسابكم وفق إمكانياتكم المادية دون قيود أو غرامات." },
        { title: "خيارات استرجاع مرنة", desc: "استلام المدخرات على شكل رأسمال إجمالي أو راتب تقاعدي مدى الحياة." }
      ],
      advantages: [
        "محاكاة مجانية للتحسين الضريبي بوكالتنا بمراكش",
        "إمكانية سحب جزئي للمبالغ عند الحاجة الملحة",
        "توريث آمن ومحمي للرأسمال لذوي الحقوق"
      ],
      requiredDocs: [
        "نسخة من بطاقة التعريف الوطنية",
        "شهادة الحساب البنكي (RIB)",
        "بيان الراتب أو الإقرار الضريبي لحساب نسبة التوفير الضريبي"
      ],
      faq: [
        {
          q: "ما هو الامتياز الضريبي الذي يمنحه عقد فوتوريس 2؟",
          a: "تخصم مساهماتكم مباشرة من الدخل الخاضع للضريبة على الدخل (IR)، مما يحقق لكم استرجاعاً وتوفيراً ضريبياً مباشراً يصل إلى 38% من قيمة الادخار."
        },
        {
          q: "هل يمكنني سحب جزء من أموالي قبل سن التقاعد؟",
          a: "نعم، يتيح العقد إمكانية الحصول على تسبيقات مالية أو استرداد جزئي عند وجود حاجة مالية أو تمويل مشروع عقاري."
        },
        {
          q: "هل الأرباح السنوية مضمونة؟",
          a: "يجمع العقد بين سعر فائدة تقني مضمون رسمياً من شركة أكسا وتوزيع سنوي للأرباح الاستثمارية."
        }
      ],
      quotePlaceholder: "مبلغ الادخار الشهري المفضل (مثال: 1000 درهم شهرياً) أو الدفعة المبدئية...",
      action: "طلب دراسة تقاعد",
      telLabel: "مستشار الادخار : 05 25 36 30 61"
    },
    voyage: {
      category: "الأفراد • السفر الدولي",
      badge: "معتمد لتأشيرة شينغن 30.000€",
      title: "تأمين السفر وتأشيرة شينغن أكسا",
      subtitle: "شهادة تأمين فورية مقبولة لدى كافة القنسليات الأوروبية.",
      desc: "تغطية طبية دولية، مصاريف الاستشفاء الطارئة، وإعادة الترحيل الصحي 24/7 مطابقة تماماً لشروط فيزا شينغن.",
      features: [
        { title: "مطابقة فورية لشروط فيزا شينغن", desc: "سقف تغطية طبية مضمون بقيمة 30.000 يورو معتمد من القنصليات." },
        { title: "مصاريف العلاج والاستشفاء بالخارج", desc: "تكفل مباشر دون تسبيق مصاريف عند حدوث أي طارئ صحي." },
        { title: "الترحيل والإسعاف الطبي 24/7", desc: "إشراف طاقم طبي دولي متخصص على نقل المريض وإعادته للمغرب." },
        { title: "مساعدة وضياع الأمتعة", desc: "تعويض مالي فوري عند تأخر أو ضياع الأمتعة في رحلات الطيران." }
      ],
      advantages: [
        "تسليم الشهادة في 5 دقائق بالوكالة أو إرسالها عبر واتساب والبريد",
        "مركز مساعدة دولي متوفر 24 ساعة على مدار الأسبوع",
        "صيغ فردية، للزوجين وللعائلات بأسعار مناسبة"
      ],
      requiredDocs: [
        "نسخة من جواز السفر ساري المفعول",
        "تاريخ السفر وتاريخ العودة",
        "وجهة السفر (دول فضاء شينغن أو كافة دول العالم)"
      ],
      faq: [
        {
          q: "هل هذه الشهادة مقبولة لدى مراكز TLScontact و BLS لطلب التأشيرة؟",
          a: "نعم، مقبولة بنسبة 100% لدى كافة القنصليات الأوروبية ومراكز التأشيرات بمراكش والمغرب (تغطية 30.000 يورو مطابقة للمواصفات)."
        },
        {
          q: "كم يستغرق استخراج شهادة التأمين بالوكالة؟",
          a: "أقل من 5 دقائق! نقوم بطباعتها فوراً بالوكالة أو إرسالها إليكم بصيغة PDF رسمية ومختومة عبر الواتساب."
        },
        {
          q: "ماذا أفعل في حالة طارئ صحي أثناء السفر في أوروبا؟",
          a: "يكفي الاتصال بالرقم الدولي المخصص للمساعدة والمطبوع على شهادتكم؛ حيث تتكفل أكسا بالمصاريف مباشرة مع المستشفى المعالج."
        }
      ],
      quotePlaceholder: "الدولة المقصودة، تواريخ السفر بدقة، عدد المسافرين...",
      action: "إصدار شهادة السفر",
      telLabel: "مكتب التأشيرات : 05 25 36 30 61"
    },
    multirisque_pro: {
      category: "المهنيون • حماية النشاط والمقرات",
      badge: "تغطية شاملة للمحلات والمكاتب",
      title: "التأمين الشامل للمهنيين والمحلات أكسا",
      subtitle: "حماية مقرات العمل، التجهيزات، السلع ومسؤولية نشاطكم التجاري.",
      desc: "تأمين مخصص للتجار، الحرفيين، المكاتب والعيادات ضد الحريق، أضرار المياه، السرقة والمسؤولية المدنية المهنية.",
      features: [
        { title: "الحريق، الانفجار وأضرار المياه", desc: "إعادة بناء المقرات وتعويض كامل لتهيئة وتجهيز المحل التجاري." },
        { title: "ضمان توقف النشاط التجاري", desc: "صرف مصاريف التسيير الثابتة وأرباح الهامش التجاري أثناء فترة التوقف." },
        { title: "سرقة السلع والأموال بالخزينة", desc: "تغطية البضائع، التجهيزات ومداخيل الصندوق ضد السطو والسرقة." },
        { title: "تكسر الواجهات واللوحات الإعلانية", desc: "استبدال فوري للزجاج التجاري والواجهات واللوحات المضيئة." }
      ],
      advantages: [
        "عقد مفصل وفق طبيعة كل قطاع (مطاعم، تجارة، رياض، عيادات، ورشات)",
        "مطابقة كاملة لمعايير هيئة مراقبة التأمينات (ACAPS)",
        "معاينة مجانية للمقر التجاري من قبل خبرائنا بمراكش"
      ],
      requiredDocs: [
        "السجل التجاري (RC)",
        "النموذج J (Modèle J)",
        "عقد كراء أو ملكية المحل التجاري",
        "نسخة من بطاقة التعريف الوطنية للمسير"
      ],
      faq: [
        {
          q: "ما هي الأنشطة التجارية والمهنية المشمولة بمراكش؟",
          a: "نوفر الحماية للمحلات، المطاعم، دور الضيافة والرياض، العيادات والمكاتب والورشات الإنتاجية بمدينة مراكش ونواحيها."
        },
        {
          q: "كيف يعمل ضمان التعويض عن توقف النشاط (Perte d'Exploitation)؟",
          a: "في حالة حادث جسيم يوقف عمل المحل، تتكفل أكسا بأداء الأجور والإيجارات وأقساط القروض لضمان استمرارية مقاولتكم."
        },
        {
          q: "هل السلع المخزنة والمعدات مشمولة بالتأمين؟",
          a: "نعم، كافة الآلات والمعدات والسلع في المخازن مغطاة بقيمتها الحقيقية للاستبدال."
        }
      ],
      quotePlaceholder: "طبيعة النشاط، عنوان المحل، المساحة (م²)، القيمة التقريبية للسلع والتجهيزات...",
      action: "طلب تسعيرة التأمين الشامل",
      telLabel: "مستشار المهنيين : 05 25 36 30 61"
    },
    rc_pro: {
      category: "المهنيون • المسؤولية القانونية",
      badge: "حماية قانونية ومالية شاملة",
      title: "المسؤولية المدنية المهنية والاستغلال",
      subtitle: "حماية مقاولتكم من المطالبات بالتعويض الناتجة عن الأخطاء المهنية.",
      desc: "تغطية الأضرار المادية، الجسدية والمعنوية التي قد تلحق بالزبناء أو الأغيار أثناء ممارسة نشاطكم المهني.",
      features: [
        { title: "المسؤولية المدنية للاستغلال", desc: "الأضرار التي قد تلحق بالزبناء أو الأغيار داخل مقر عملكم أو أثناء النشاط." },
        { title: "المسؤولية المدنية المهنية والاستشارية", desc: "تغطية الأخطاء المهنية والسهو غير المقصود أثناء إنجاز الخدمات." },
        { title: "المسؤولية العشرية للبناء (Décennale)", desc: "تأمين إلزامي لمدة 10 سنوات للمقاولين والمهندسين وأرباب الورش." },
        { title: "الدفاع القضائي والمطالبة بالحقوق", desc: "تحمل كامل لأتعاب المحامين ومصاريف الخبرة القضائية في النزاعات." }
      ],
      advantages: [
        "سقوف تعويضية مرتفعة مطابقة لدفاتر تحملات الصفقات العمومية والخاصة",
        "تسليم شهادات التأمين خلال 24 ساعة",
        "دراسة قانونية متخصصة ومجانية لعقودكم"
      ],
      requiredDocs: [
        "السجل التجاري أو بطاقة الممارس المهني",
        "القانون الأساسي للشركة (Statuts)",
        "رقم المعاملات السنوي المحقق أو التقديري"
      ],
      faq: [
        {
          q: "لماذا يعد تأمين المسؤولية المدنية المهنية ضرورياً؟",
          a: "يحمي هذا العقد ذمتكم المالية ومقاولتكم من التعويضات الباهظة إذا تسبب خطأ أو سهو مهني في إلحاق ضرر بأحد الزبناء أو الشركاء."
        },
        {
          q: "هل يتكفل العقد بمصاريف المحامي والتقاضي؟",
          a: "نعم، يشمل العقد ضمان الحماية القانونية الذي يغطي كافة مصاريف الدفاع وأتعاب المحامين والخبراء القضائيين."
        },
        {
          q: "هل العقد مطابق لطلبات العروض والصفقات العمومية؟",
          a: "نعم تماماً، نصدر شهادات رسمية تتضمن السقوف والبنود الدقيقة المطلوبة في دفاتر التحملات الحكومية والخاصة."
        }
      ],
      quotePlaceholder: "مجال العمل / المهنة، رقم المعاملات السنوي التقريبي، سقف التغطية المطلوب...",
      action: "طلب تسعيرة مسؤولية مدنية",
      telLabel: "قسم العقود : 05 25 36 30 61"
    },
    at_mp: {
      category: "المقاولات • الالتزام القانوني",
      badge: "مطابق للقانون المغربي 18-12",
      title: "تأمين حوادث الشغل والأمراض المهنية",
      subtitle: "حماية إلزامية وشاملة لعمالكم ومستخدميكم بمراكش.",
      desc: "تحمل فوري لمصاريف العلاج والاستشفاء وصرف الإيرادات اليومية والتعويضات الدائمة عند حوادث الشغل والمسار.",
      features: [
        { title: "المصاريف الطبية والاستشفائية", desc: "تكفل مباشر دون تسبيق مصاريف في المصحات والمستشفيات المعتمدة." },
        { title: "التعويضات اليومية عن التوقف", desc: "صرف التعويضات اليومية عن الأجر خلال مدة العجز المؤقت." },
        { title: "إيرادات العجز الدائم", desc: "تأسيس الإيرادات العمرية وفق الجدول الرسمي للقانون 18-12." },
        { title: "إيرادات ذوي الحقوق", desc: "حماية الزوجة والأبناء في حالة الحوادث المميتة لا قدر الله." }
      ],
      advantages: [
        "شهادة مطابقة فورية لتقديمها لمفتشية الشغل ومصالح المراقبة",
        "شبكة واسعة من مصحات جراحة العظام والترويض بمراكش",
        "تسعيرة مدروسة ومحسوبة حسب طبيعة النشاط وكتلة الأجور"
      ],
      requiredDocs: [
        "جدول التصريح بالصندوق الوطني للضمان الاجتماعي (CNSS) أو لائحة العمال",
        "السجل التجاري (RC)",
        "نسخة من بطاقة التعريف الوطنية للممثل القانوني"
      ],
      faq: [
        {
          q: "هل تأمين حوادث الشغل إجباري في القانون المغربي؟",
          a: "نعم، يفرض القانون 18-12 على كل مشغل بالمغرب اكتتاب تأمين حوادث الشغل لفائدة كافة المستخدمين والعمال وأجراء التدريب."
        },
        {
          q: "هل يشمل التأمين الحوادث التي تقع في طريق العمل؟",
          a: "نعم، الحوادث الواقعة في مسار الذهاب أو الإياب بين سكن المستخدم ومقر عمله مغطاة بالكامل مثل حوادث الورش."
        },
        {
          q: "ما هو الأجل القانوني للتصريح بالحادثة؟",
          a: "يحدد القانون 18-12 أجل 48 ساعة للتصريح بالحادث، ولدى وكالتنا شباك خاص لمرافقتكم الفورية في إعداد الملف."
        }
      ],
      quotePlaceholder: "عدد العمال والمستخدمين، كتلة الأجور السنوية التقريبية، قطاع النشاط...",
      action: "تسوية وضعية مقاولتي",
      telLabel: "مستشار المقاولات : 05 25 36 30 61"
    },
    flotte: {
      category: "المقاولات • وسائل النقل واللوجستيك",
      badge: "ابتداءً من 3 مركبات • تدبير موحد",
      title: "تأمين أسطول سيارات وشاحنات المقاولة",
      subtitle: "حلول مرنة وموحدة لإدارة وتأمين كافة مركبات شركتكم بمراكش.",
      desc: "عقد موحد لسيارات الخدمة، الشاحنات والآليات مع شروط تفضيلية، مساعدة 24/7 وخدمة التدبير السريع للحوادث.",
      features: [
        { title: "عقد أسطول مركزي وموحد", desc: "إدارة إدارية سهلة مع تجديد موحد لجميع شهادات التأمين." },
        { title: "نجدة ومساعدة الأساطيل 24/7", desc: "قطر سريع وتوفير مركبات بديلة لضمان استمرار عمليات التوصيل." },
        { title: "ضمانات مخصصة لكل مركبة", desc: "إمكانية اختيار تغطية شاملة أو عادية حسب عمر وحالة كل سيارة." },
        { title: "بند السائق غير المعين", desc: "مرونة كاملة تتيح لكافة مستخدميكم المعتمدين قيادة سيارات الأسطول." }
      ],
      advantages: [
        "أسعار تفضيلية وتخفيضات تصاعدية حسب عدد المركبات",
        "تغطية المعدات والسلع المنقولة داخل الشاحنات",
        "مخاطب خاص ومباشر عبر واتساب لتسريع الإجراءات"
      ],
      requiredDocs: [
        "البطاقات الرمادية لكافة مركبات الأسطول",
        "السجل التجاري والقانون الأساسي للشركة",
        "بيان الحوادث للسنوات الثلاث الأخيرة إن وجد"
      ],
      faq: [
        {
          q: "ما هو الحد الأدنى لعدد المركبات لفتح عقد أسطول؟",
          a: "ابتداءً من 3 مركبات مسجلة باسم شركتكم، تستفيدون من مزايا عقد الأسطول والتعريفة الموحدة."
        },
        {
          q: "هل يجب التصريح بأسماء السائقين مسبقاً؟",
          a: "لا، بفضل بند السائق غير المعين، يمكن لأي مستخدم مرخص من قبلكم قيادة أي مركبة في الأسطول."
        },
        {
          q: "كيف تتم مساعدة مركبات الشحن في حالة عطل على الطريق؟",
          a: "تتدخل خدمة النجدة 24/7 لقطر الشاحنة إلى أقرب ورشة معتمدة وتوفير حلول لوجستية بديلة."
        }
      ],
      quotePlaceholder: "عدد المركبات (سياحية، نفعية، شاحنات)، طبيعة الاستعمال...",
      action: "طلب تدقيق أسطول المركبات",
      telLabel: "إدارة الأساطيل : 05 25 36 30 61"
    },
    trc: {
      category: "المقاولات • البناء والأشغال الكبرى",
      badge: "حماية مشاريع البناء • معتمد لدى الأبناك",
      title: "تأمين جميع أخطار الورش (TRC BTP) أكسا",
      subtitle: "تأمين المشاريع الإنشائية والتوسعات العقارية بمراكش ضد الحوادث.",
      desc: "تغطية المنشآت قيد الإنجاز، الآليات، والمواد ومسؤولية الورش ضد الأضرار المادية ومطالبات الجيران والأغيار.",
      features: [
        { title: "أضرار المنشآت قيد البناء", desc: "تعويض أشغال البناء والهياكل عند وقوع كوارث طبيعية، حرائق أو انهيارات." },
        { title: "أخطاء التركيب والتنفيذ", desc: "إصلاح الأضرار الناتجة عن أخطاء التركيب أثناء مرحلة التشييد." },
        { title: "سرقة مواد البناء والمعدات", desc: "حماية الكابلات والآليات والمواد المخزنة بساحة الورش." },
        { title: "فترة الصيانة بعد التسليم", desc: "تمديد التغطية لمرحلة ما بعد التسليم المؤقت للأشغال." }
      ],
      advantages: [
        "عقد إلزامي ومعتمد لدى كافة المؤسسات البنكية لتمويل المشاريع",
        "تغطية تشمل المقاول الرئيسي والمقاولين من الباطن",
        "خبرة تقنية ميدانية في متابعة مشاريع مراكش"
      ],
      requiredDocs: [
        "صفقة الأشغال أو عقد البناء",
        "الملف التقني والبرمجة الزمنية للمشروع",
        "الميزانية الإجمالية التقديرية للورش (الهيكل + التشطيبات)"
      ],
      faq: [
        {
          q: "هل تأمين TRC إلزامي للحصول على تمويل بنكي عقاري؟",
          a: "نعم، تشترط كافة الأبناك المغربية الإدلاء بوثيقة تأمين جميع أخطار الورش قبل صرف أقساط القروض العقارية."
        },
        {
          q: "هل المقاولون من الباطن (Sous-traitants) مشمولون بالتأمين؟",
          a: "نعم، يحمي العقد صاحب المشروع والمقاولات العامة وكافة المقاولين الفرعيين العاملين في الورش."
        },
        {
          q: "ماذا تشمل فترة الصيانة بعد انتهاء الأشغال؟",
          a: "تغطي الأضرار التي قد تلحق بالبناية أثناء رفع التحفظات أو التدخلات التكميلية لفرق الصيانة."
        }
      ],
      quotePlaceholder: "موقع الورش بمراكش، نوعية الأشغال (بناء، ترميم رياض، عمارة)، الميزانية التقديرية...",
      action: "طلب دراسة أخطار الورش",
      telLabel: "مهندس التأمين : 05 25 36 30 61"
    },
    sante_groupe: {
      category: "المقاولات • الموارد البشرية والمزايا",
      badge: "مزايا ضريبية واستقطاب الكفاءات",
      title: "التأمين الصحي الجماعي والتقاعد للشركات",
      subtitle: "تعزيز ولاء وتحفيز أجرائكم بتغطية صحية متقدمة بمراكش.",
      desc: "تغطية طبية تكميلية شاملة للموظفين وعائلاتهم مع خصم ضريبي 100% من الضريبة على الشركات (IS) وتطبيق هاتفي مخصص.",
      features: [
        { title: "دفع مباشر موسع بالمصحات", desc: "تكفل فوري بالاستشفاء والعمليات الجراحية دون تسبيق مصاريف." },
        { title: "العلاجات العادية والأدوية", desc: "تعويض سريع خلال 48 ساعة لملفات الفحص الطبي والتحاليل والأدوية." },
        { title: "الحماية ضد الوفاة والعجز", desc: "تأمين مالي يحمي أسرة الموظف عند وقوع أي مكروه." },
        { title: "تغطية معززة للأسنان والبصريات", desc: "مساهمة متميزة في تكاليف النظارات وعلاج وتقويم الأسنان." }
      ],
      advantages: [
        "المساهمات مخصومة 100% من الضريبة على الشركات (IS)",
        "تطبيق رقمي متطور للموظفين لإيداع وتتبع ملفات العلاج عن بعد",
        "مخاطب خاص داخل الوكالة لإدارة الانخراطات والتسجيلات"
      ],
      requiredDocs: [
        "لائحة الأجراء مع تواريخ الازدياد والوضع العائلي",
        "السجل التجاري والقانون الأساسي للشركة",
        "كشف ملفات التأمين السابقة إن وجد"
      ],
      faq: [
        {
          q: "ما هو الأثر الضريبي لمساهمات التأمين الصحي الجماعي للشركة؟",
          a: "المساهمات التي يؤديها المشغل مخصومة بالكامل (100%) من النتيجة الخاضعة للضريبة على الشركات (IS) ولا تعتبر امتيازاً عينياً للأجير."
        },
        {
          q: "كيف يتتبع الموظفون ملفات تعويضاتهم؟",
          a: "يتوفر كل موظف على حساب بتطبيق أكسا المغرب للهواتف الذكية لتصوير أوراق العلاج ومتابعة التحويلات المالية فورياً."
        },
        {
          q: "هل تشمل التغطية أزواج وأبناء الموظفين؟",
          a: "نعم، تشمل الاتفاقيات تغطية الزوج(ة) والأبناء مع نظام الدفع المباشر في كبرى المصحات."
        }
      ],
      quotePlaceholder: "عدد الأجراء المستهدفين، متوسط الأعمار، مستوى التغطية المرغوب...",
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
      features: [
        { title: "24/7 Assistance & 0-km Towing", desc: "Instant emergency dispatch at your home doorstep or across Moroccan highways." },
        { title: "Zero-Deductible Glass Breakage", desc: "Rapid windshield and window replacement without affecting your bonus rate." },
        { title: "Courtesy Replacement Vehicle", desc: "Loaner car provided throughout the repair period in an AXA-approved garage." },
        { title: "Public Sector & Teacher Discount", desc: "Exclusive discounted rates for civil servants, teachers, and partner institutions." }
      ],
      advantages: [
        "Direct local claims handling inside our Guemassa Ave branch in M'hamid",
        "Extensive network of approved body shops and mechanics in Marrakech",
        "Instant policy certificate issued immediately on-site or digitally"
      ],
      requiredDocs: [
        "Original vehicle registration certificate (Carte Grise)",
        "Copy of National Identity Card (CIN) or Passport / Residency Card",
        "Valid driving license",
        "Previous insurer statement of claims (for bonus rate transfer)"
      ],
      faq: [
        {
          q: "How does 0-km emergency roadside assistance work in Marrakech?",
          a: "In the event of a breakdown, flat tire, or dead battery right outside your residence or anywhere in Morocco, an AXA-certified tow truck arrives 24/7 by calling 05 25 36 30 61."
        },
        {
          q: "Does glass breakage claim affect my bonus coefficient?",
          a: "No, under AXA Morocco policies, windshield or window replacements under glass coverage never reduce your accumulated bonus coefficient."
        },
        {
          q: "Can expatriates and foreign residents subscribe with an international license?",
          a: "Yes, our agency welcomes international residents in Marrakech and accepts valid driving licenses accompanied by residency registration or passport."
        }
      ],
      quotePlaceholder: "Make, model, fiscal horsepower (e.g. 6 HP diesel), year of manufacture...",
      action: "Request Car Quote",
      telLabel: "Car Advisor: 05 25 36 30 61"
    },
    moto: {
      category: "Personal • Motorcycle & Mobility",
      badge: "Rider Protection & 24/7 Roadside Assistance",
      title: "AXA Motorcycle & Scooter Insurance",
      subtitle: "The tailored protection for scooters, motorbikes, and superbikes in Marrakech.",
      desc: "Comprehensive motorcycle coverage: third-party liability, rider and helmet protection, theft, fire, and immediate 24/7 roadside towing across Marrakech.",
      features: [
        { title: "Individual Rider Protection", desc: "Coverage for medical expenses and personal bodily injury protection." },
        { title: "24/7 Roadside Assistance & Towing", desc: "Specialized two-wheeler flatbed towing 0 km in Marrakech." },
        { title: "Helmet & Gear Guarantee", desc: "Compensation for your protective riding gear and certified helmet." },
        { title: "Legal Defense & Recourse", desc: "Full legal support in disputes and claims handling after an accident." }
      ],
      advantages: [
        "Competitive rates tailored to engine displacement and usage",
        "Immediate green card issuance at our Avenue Guemassa agency",
        "Network of approved motorcycle workshops in Marrakech"
      ],
      requiredDocs: [
        "Original vehicle registration document (carte grise)",
        "Valid motorcycle driving license",
        "Copy of National Identity Card (CIN) / Passport"
      ],
      faq: [
        {
          q: "Are protective gear and helmet covered?",
          a: "Yes, our motorcycle insurance plans include dedicated compensation for your helmet and safety gear in case of an accident."
        },
        {
          q: "How does 24/7 roadside assistance work for a breakdown or flat tire?",
          a: "One call to our 24/7 hotline (05 25 36 30 61) dispatches an appropriate flatbed tow truck to safely transport your bike to an approved workshop."
        },
        {
          q: "Can I insure both 50cc scooters and high-displacement motorbikes?",
          a: "Yes, we insure the entire range, from commuter scooters to heavy touring bikes and cruisers."
        }
      ],
      quotePlaceholder: "Make, model, engine size, year of registration, usage...",
      action: "Request Motorcycle Quote",
      telLabel: "Motorcycle Advisor: 05 25 36 30 61"
    },
    habitation: {
      category: "Personal • Property",
      badge: "HABITASSUR All-Risks Plan",
      title: "HABITASSUR AXA Home Insurance",
      subtitle: "Protect your villa, apartment, or traditional riad in Marrakech.",
      desc: "Comprehensive coverage for real estate and furnishings against fire, water leaks, theft, glass breakage, and natural catastrophes.",
      features: [
        { title: "Fire, Storm & Natural Perils", desc: "Full compensation for structural rebuilding and household furniture re-equipment." },
        { title: "Water Leaks & Infiltration", desc: "Immediate pipe repair coverage and full reimbursement for water damage." },
        { title: "Theft & Home Vandalism", desc: "Full compensation for furniture, appliances, electronics, and valuable art." },
        { title: "Head of Household Liability Included", desc: "Protection against bodily or property damages caused to third parties and neighbors." }
      ],
      advantages: [
        "HABITASSUR tailored formulas for primary residences, holiday villas, and riads",
        "24/7 emergency locksmith, plumbing, and electrical assistance",
        "Simplified furniture and valuables estimation without tedious inventories"
      ],
      requiredDocs: [
        "Property title deed or lease agreement",
        "Copy of ID card or passport",
        "Approximate estimate of furniture and valuable contents"
      ],
      faq: [
        {
          q: "Does the policy cover riads in the Medina and holiday homes in Marrakech?",
          a: "Yes, HABITASSUR covers historic riads in the Medina, modern apartments in Guéliz, and private villas in the Palmeraie and Hivernage."
        },
        {
          q: "What should I do in case of a water leak from an upstairs neighbor?",
          a: "Your policy includes third-party recourse and water damage coverage. We dispatch a technician immediately and settle the claim directly at our agency."
        },
        {
          q: "Are jewelry and fine arts covered against theft?",
          a: "Yes, tailored riders enable customized protection for jewelry, paintings, and art collections with declared value limits."
        }
      ],
      quotePlaceholder: "Property type (villa, apartment, riad), approximate floor area (sqm), estimated furniture value...",
      action: "Request Home Quote",
      telLabel: "Home Advisor: 05 25 36 30 61"
    },
    sante: {
      category: "Personal • Health & Family",
      badge: "Sehassur & International Care",
      title: "Sehassur Health & Global Coverage AXA",
      subtitle: "Access to top medical care and direct clinic billing for you and your family.",
      desc: "Complete medical coverage, consultations, hospitalization and surgery across Morocco and abroad with third-party payment system.",
      features: [
        { title: "Sehassur Plan (Morocco)", desc: "Direct third-party billing with no upfront costs across leading accredited clinics." },
        { title: "Sehassur Plus International", desc: "Extended worldwide medical care for scheduled surgery and international medical evacuation." },
        { title: "Lab Tests & Medical Imaging", desc: "Prompt coverage for blood tests, X-rays, CT scans, and MRI scans." },
        { title: "Critical Illness & Chronic Conditions", desc: "Enhanced lump-sum capital and comprehensive ongoing care for severe illnesses." }
      ],
      advantages: [
        "Direct billing partnerships with premier private clinics in Marrakech and Morocco",
        "Optional worldwide international healthcare with air ambulance evacuation",
        "Dedicated mobile app and agency desk to track your claims within 48h",
        "Family discounts for couples and dependent children"
      ],
      requiredDocs: [
        "Copy of subscriber's ID or passport",
        "Family record book or composition sheet (spouse, children)",
        "Bank details (RIB) for automated direct reimbursement deposits"
      ],
      faq: [
        {
          q: "What is the difference between Sehassur and Sehassur Plus International?",
          a: "Sehassur provides comprehensive healthcare in Morocco with direct clinic billing. Sehassur Plus International extends this coverage abroad for specialized surgery and emergency medical evacuation."
        },
        {
          q: "Which clinics in Marrakech accept direct AXA billing?",
          a: "AXA direct billing is honored in Marrakech's leading private clinics, eliminating out-of-pocket deposits for inpatient hospitalizations and surgery."
        },
        {
          q: "How fast are routine doctor visits and prescription receipts reimbursed?",
          a: "Treatment claim sheets submitted at the agency or uploaded via the mobile app are processed within 48 business hours via direct bank wire."
        }
      ],
      quotePlaceholder: "Family composition (ages of spouses and number of children), desired coverage tier...",
      action: "Request Health Quote",
      telLabel: "Health Advisor: 05 25 36 30 61"
    },
    prevoyance: {
      category: "Personal • Financial Security",
      badge: "Guaranteed Family Security",
      title: "Accident & Family Protection AXA",
      subtitle: "Securing your family's future against unforeseen hardships.",
      desc: "Guaranteed lump-sum capital and education annuities to preserve your loved ones' living standards in case of serious accidents.",
      features: [
        { title: "Guaranteed Death Capital", desc: "Prompt tax-free capital disbursement to your designated beneficiaries." },
        { title: "Children's Education Annuity", desc: "Regular quarterly educational stipends paid until completion of university studies." },
        { title: "Permanent Disability Compensation", desc: "Proportional lump-sum payouts to finance home adaptation and medical recovery." },
        { title: "Repatriation Assistance", desc: "Comprehensive logistical and administrative support in emergency situations." }
      ],
      advantages: [
        "Quick enrollment without cumbersome medical examinations",
        "Total freedom to choose capital amounts and designated beneficiaries",
        "Compassionate, human guidance from your local Marrakech agent"
      ],
      requiredDocs: [
        "Copy of insured's ID card or passport",
        "Designation of chosen beneficiaries",
        "Simplified health questionnaire"
      ],
      faq: [
        {
          q: "Who can be designated as a beneficiary?",
          a: "You may freely name any beneficiaries of your choice (spouse, children, parents, siblings) and update the clause at any time."
        },
        {
          q: "Is the death benefit taxable in Morocco?",
          a: "No, the capital paid out to designated beneficiaries is entirely exempt from Moroccan inheritance taxes and income tax."
        },
        {
          q: "How does the education annuity work for children?",
          a: "In the event of an unfortunate hardship, quarterly stipends are paid directly to support school tuition and university costs up to age 25."
        }
      ],
      quotePlaceholder: "Desired lump-sum capital (e.g., 200,000 MAD, 500,000 MAD), insured person's age...",
      action: "Request Protection Plan",
      telLabel: "Protection Dept: 05 25 36 30 61"
    },
    epargne: {
      category: "Personal • Retirement & Savings",
      badge: "Income Tax Deductible",
      title: "Futuris II Savings & Retirement",
      subtitle: "Build your capital safely with AXA's guaranteed performance.",
      desc: "Build guaranteed long-term capital while reducing your annual income tax liability through official tax deduction brackets.",
      features: [
        { title: "Guaranteed Return & Profit Sharing", desc: "Technical minimum interest rate guaranteed by AXA plus annual profit participation." },
        { title: "Substantial Income Tax Savings", desc: "100% tax deduction of contributions from your taxable net income (IR)." },
        { title: "Flexible or Scheduled Deposits", desc: "Contribute at your own pace without penalties or rigid constraints." },
        { title: "Flexible Capital Disbursement", desc: "Withdraw your accumulated savings as a single lump sum or as a lifetime pension." }
      ],
      advantages: [
        "Customized tax optimization simulations conducted in our agency",
        "Partial withdrawals and loans available for urgent capital requirements",
        "Safe and secure wealth transfer to heirs"
      ],
      requiredDocs: [
        "Copy of National Identity Card or Passport",
        "Bank details (RIB)",
        "Recent payslip or tax notice (to calculate exact tax savings)"
      ],
      faq: [
        {
          q: "What tax advantage does Futuris II provide?",
          a: "Contributions are fully deductible from your taxable income under Moroccan Income Tax (IR), generating immediate tax savings of up to 38%."
        },
        {
          q: "Can I withdraw part of my money before retirement?",
          a: "Yes, partial surrenders and low-interest advances are available for personal projects or real estate purchases."
        },
        {
          q: "Are investment returns guaranteed?",
          a: "The policy pairs an official technical interest rate guaranteed by AXA Morocco with annual financial profit sharing."
        }
      ],
      quotePlaceholder: "Target monthly savings (e.g. 1,000 MAD/month) or initial lump-sum deposit...",
      action: "Request Savings Plan",
      telLabel: "Savings Advisor: 05 25 36 30 61"
    },
    voyage: {
      category: "Personal • International Travel",
      badge: "Schengen Visa Approved €30,000",
      title: "Schengen Visa Travel Insurance AXA",
      subtitle: "Instant certificate fully compliant with European consular requirements.",
      desc: "International emergency medical expenses, urgent hospitalization, and 24/7 medical repatriation accepted across all Schengen embassies.",
      features: [
        { title: "Instant Schengen Visa Compliance", desc: "Guaranteed minimum €30,000 medical emergency ceiling mandated by consulates." },
        { title: "Emergency Medical Expenses Abroad", desc: "Direct coverage with zero upfront expense for overseas emergency care." },
        { title: "24/7 Medical Repatriation", desc: "Doctor-supervised air ambulance evacuation back to Morocco if medically required." },
        { title: "Baggage Delay & Loss Assistance", desc: "Lump-sum compensation in the event of airline baggage delay or loss." }
      ],
      advantages: [
        "Official certificate issued within 5 minutes in-branch or via WhatsApp/Email",
        "Multilingual international assistance hotline accessible 24/7 worldwide",
        "Flexible individual, couple, and family coverage options"
      ],
      requiredDocs: [
        "Copy of valid passport",
        "Departure and return dates",
        "Travel destination (Schengen Zone or Worldwide)"
      ],
      faq: [
        {
          q: "Is this certificate accepted by TLScontact and BLS for Schengen visa files?",
          a: "Yes, 100%. Our AXA policy immediately issues the official consular-approved certificate meeting all Schengen requirements."
        },
        {
          q: "How fast can I obtain my certified travel insurance certificate?",
          a: "In under 5 minutes! We print it instantly at our Guemassa branch or send you an official secured PDF via WhatsApp."
        },
        {
          q: "What should I do if a medical emergency happens while traveling abroad?",
          a: "Simply call the 24/7 international assistance hotline printed on your policy card; AXA arranges hospital admission directly."
        }
      ],
      quotePlaceholder: "Destination countries, exact departure/return dates, number of travelers...",
      action: "Issue Travel Certificate",
      telLabel: "Visa Desk: 05 25 36 30 61"
    },
    multirisque_pro: {
      category: "Commercial • Business Protection",
      badge: "Commercial All-Risks Cover",
      title: "Commercial Multi-Peril Insurance AXA",
      subtitle: "Protect your premises, merchandise, equipment, and business continuity in Marrakech.",
      desc: "Custom coverage for shops, offices, clinics, and workshops against fire, water damage, theft, and third-party liabilities.",
      features: [
        { title: "Fire, Explosion & Water Damage", desc: "Structural reconstruction of commercial premises and equipment replacement." },
        { title: "Business Interruption Indemnity", desc: "Covers overhead expenses and lost gross profits while rebuilding after a disaster." },
        { title: "Merchandise & Cash Theft", desc: "Full compensation for stolen warehouse stock, office assets, and cash registers." },
        { title: "Shopfront Glass & Signage", desc: "Priority repair and replacement of display windows and commercial signs." }
      ],
      advantages: [
        "Tailored policies for retail, restaurants, guest riads, clinics, and artisan shops",
        "Full compliance with Moroccan ACAPS natural catastrophe regulations",
        "Complimentary risk audit at your Marrakech business location"
      ],
      requiredDocs: [
        "Commercial Register (RC)",
        "Modèle J document",
        "Premises lease contract or ownership deed",
        "Copy of manager's identity card or passport"
      ],
      faq: [
        {
          q: "Which types of businesses are eligible in Marrakech?",
          a: "We insure retail stores, restaurants, boutique riads, medical clinics, offices, and craft workshops across Greater Marrakech."
        },
        {
          q: "How does the Business Interruption guarantee operate?",
          a: "If a major fire or flood halts operations, AXA pays fixed overhead costs (payroll, rent, loan installments) and compensates lost gross profits."
        },
        {
          q: "Are inventory and machinery covered at replacement value?",
          a: "Yes, all machinery, IT equipment, tools, and inventory are insured at modern replacement cost."
        }
      ],
      quotePlaceholder: "Business sector, premises address, floor area (sqm), approximate inventory and equipment value...",
      action: "Request Commercial Quote",
      telLabel: "Commercial Advisor: 05 25 36 30 61"
    },
    rc_pro: {
      category: "Commercial • Legal Liability",
      badge: "Comprehensive Legal Protection",
      title: "Commercial General Liability (RC Pro)",
      subtitle: "Protecting your enterprise against financial claims resulting from operational errors.",
      desc: "Full compensation for bodily injury, property damage, and consequential loss caused to third parties during business operations.",
      features: [
        { title: "Operational Third-Party Liability", desc: "Damages caused to customers or third parties inside your business premises." },
        { title: "Professional Indemnity & Advisory", desc: "Covers design flaws, professional omissions, or contractual defaults." },
        { title: "Decennial Liability (BTP)", desc: "Mandatory 10-year structural guarantee for construction contractors and developers." },
        { title: "Legal Defense & Expert Fees", desc: "Complete coverage of attorney retainers, court fees, and judicial expertise costs." }
      ],
      advantages: [
        "High indemnity limits meeting Moroccan public tender standards",
        "Official certificates issued within 24 hours",
        "Comprehensive contractual review by Assurances Echkili specialists"
      ],
      requiredDocs: [
        "Commercial Register (RC) or professional practice card",
        "Corporate Bylaws (Statuts)",
        "Annual revenue statement (projected or actual)"
      ],
      faq: [
        {
          q: "Why is Professional Liability Insurance crucial for businesses?",
          a: "It safeguards your enterprise against devastating financial claims if a client, vendor, or third party suffers harm from professional errors or omissions."
        },
        {
          q: "Are court defense costs and attorney retainers covered?",
          a: "Yes, legal defense protection covers judicial costs, expert appraisals, and court attorney representation across Moroccan jurisdictions."
        },
        {
          q: "Is this policy compliant with public procurement bids?",
          a: "Yes, we provide official certificates with the exact warranty limits and stipulations required by government and corporate tenders."
        }
      ],
      quotePlaceholder: "Profession / sector, approximate annual turnover, requested indemnity ceiling...",
      action: "Request Liability Quote",
      telLabel: "Legal Dept: 05 25 36 30 61"
    },
    at_mp: {
      category: "Corporate • Legal Compliance",
      badge: "Moroccan Law 18-12 Compliant",
      title: "Workplace Accidents Insurance (Law 18-12)",
      subtitle: "Mandatory, full-scale protection for employees and staff in Marrakech.",
      desc: "Immediate coverage for medical expenses, hospital bills, daily allowances, and permanent disability pensions under Moroccan Labor Law.",
      features: [
        { title: "Medical & Inpatient Hospital Bills", desc: "Direct payment with zero upfront deposit in affiliated clinics and hospitals." },
        { title: "Daily Temporary Disability Allowance", desc: "Wage replacement compensations paid during medical work stoppage periods." },
        { title: "Permanent Disability Annuities", desc: "Official lifelong disability pension calculation governed by Law 18-12." },
        { title: "Survivor Pensions for Dependents", desc: "Financial protection for spouses and orphan children in fatal accidents." }
      ],
      advantages: [
        "Instant certificate of compliance for Moroccan Labor Inspection authorities",
        "Established network of traumatology clinics and specialists in Marrakech",
        "Optimized premium scales calculated on payroll and activity risk"
      ],
      requiredDocs: [
        "Recent CNSS payroll statement or complete staff list with payroll amounts",
        "Commercial Register (RC)",
        "Copy of legal representative's ID or passport"
      ],
      faq: [
        {
          q: "Is workplace accident insurance mandatory under Moroccan law?",
          a: "Yes, under Law 18-12, every Moroccan employer is legally obligated to hold an insurance policy for all permanent, temporary, and apprentice workers."
        },
        {
          q: "Are accidents occurring during the daily commute covered?",
          a: "Yes, traffic accidents between an employee's residence and the workplace are fully covered on the same basis as on-site workshop accidents."
        },
        {
          q: "What is the legal deadline for reporting an accident?",
          a: "Law 18-12 requires notice within 48 business hours. Our branch provides a dedicated desk to handle filings promptly."
        }
      ],
      quotePlaceholder: "Number of declared employees, total annual payroll, industry sector...",
      action: "Get Business Compliant",
      telLabel: "Corporate Advisor: 05 25 36 30 61"
    },
    flotte: {
      category: "Corporate • Fleet & Logistics",
      badge: "Centralized Fleet Management",
      title: "Commercial Fleet Insurance AXA",
      subtitle: "Streamlined management and unified coverage for company vehicles and utility vans in Marrakech.",
      desc: "Single contract covering delivery fleets, service cars, and transport trucks with negotiated rates, 24/7 towing, and fast claims processing.",
      features: [
        { title: "Single Unified Fleet Policy", desc: "Streamlined administration with unified renewals, endorsements, and vehicle stickers." },
        { title: "24/7 Fleet Roadside Assistance", desc: "Priority towing and replacement vehicles to keep deliveries on schedule." },
        { title: "Custom Coverage per Vehicle", desc: "All-risks or third-party plans tailored to vehicle age, model, and utility role." },
        { title: "Open Authorized Driver Clause", desc: "Complete operational flexibility allowing any authorized employee to operate fleet vehicles." }
      ],
      advantages: [
        "Highly competitive premium scaling with volume discounts",
        "Coverage for on-board cargo, commercial merchandise, and tools",
        "Dedicated fleet account manager accessible directly via WhatsApp"
      ],
      requiredDocs: [
        "Vehicle registration cards for all fleet units",
        "Company Commercial Register (RC) and Bylaws",
        "Claims history statement for the past 3 years if available"
      ],
      faq: [
        {
          q: "What is the minimum vehicle count required to qualify for a Fleet policy?",
          a: "Starting from just 3 vehicles registered under your corporate name, you qualify for discounted commercial fleet terms."
        },
        {
          q: "Do individual drivers have to be explicitly named on the policy?",
          a: "No, our open driver clause permits any licensed, authorized employee to drive any vehicle in your fleet."
        },
        {
          q: "How does roadside breakdown assistance work for utility vans?",
          a: "AXA Fleet Assistance responds 24/7 to tow disabled vans to an approved repair center and supply replacement units."
        }
      ],
      quotePlaceholder: "Number of vehicles (sedans, vans, utility trucks), primary commercial usage...",
      action: "Request Fleet Proposal",
      telLabel: "Fleet Manager: 05 25 36 30 61"
    },
    trc: {
      category: "Corporate • Construction & Engineering",
      badge: "Construction Site All Risks",
      title: "Contractors All Risks (CAR BTP) AXA",
      subtitle: "Securing construction projects and real estate developments against perils in Marrakech.",
      desc: "Comprehensive policy for works under construction, heavy equipment, building materials, and third-party liabilities during civil works.",
      features: [
        { title: "Structural Works Damage", desc: "Compensation for masonry, concrete, and finishes damaged by storms, collapse, or earthquakes." },
        { title: "Assembly & Design Perils", desc: "Coverage for structural defects occurring during erection and construction stages." },
        { title: "Materials & Machinery Theft", desc: "Protection for copper wiring, heavy equipment, and stored building supplies on site." },
        { title: "Extended Maintenance Period", desc: "Continued protection during snagging periods following provisional handover." }
      ],
      advantages: [
        "Mandatory policy required and approved by all Moroccan commercial banks",
        "Unified protection covering project owners, general contractors, and all subcontractors",
        "On-site technical engineering assessments in Marrakech"
      ],
      requiredDocs: [
        "Construction works contract or tender specification",
        "Technical works description and execution schedule",
        "Total estimated construction budget (civil works and finishes)"
      ],
      faq: [
        {
          q: "Is CAR BTP insurance compulsory for commercial development bank loans?",
          a: "Yes, major Moroccan banks require an active Contractors All Risks insurance binder before releasing construction loan disbursements."
        },
        {
          q: "Are all subcontractors automatically protected on site?",
          a: "Yes, the AXA CAR policy covers the property developer, head contractor, and all registered subcontractors on site."
        },
        {
          q: "What is covered during the maintenance period post-handover?",
          a: "It covers physical damage caused to the structure while remedying snagging items or conducting post-delivery maintenance."
        }
      ],
      quotePlaceholder: "Project location in Marrakech, works description (new build, riad renovation, hotel), estimated budget...",
      action: "Request CAR Quote",
      telLabel: "Risk Engineer: 05 25 36 30 61"
    },
    sante_groupe: {
      category: "Corporate • HR & Employee Benefits",
      badge: "100% Corporate Tax Deductible",
      title: "Corporate Group Health & Benefits AXA",
      subtitle: "Attract and retain top talent with comprehensive private medical coverage in Marrakech.",
      desc: "Tailored health plans for employees and dependents, direct clinic billing, 100% corporate tax deductibility, and mobile claims tracking.",
      features: [
        { title: "Expanded Direct Clinic Billing", desc: "Immediate coverage for hospital admissions and surgery with zero out-of-pocket deposits." },
        { title: "Routine Outpatient & Pharmacy Care", desc: "Rapid claims reimbursement within 48 hours for medical visits and prescriptions." },
        { title: "Life & Disability Protection", desc: "Lump-sum death benefits and disability security protecting employee households." },
        { title: "Enhanced Dental & Optical Packages", desc: "Generous allowances for eyewear, dental prosthetics, and orthodontic treatments." }
      ],
      advantages: [
        "100% deductible from company taxable profits under Moroccan Corporate Tax (IS)",
        "Modern mobile app for employees to submit and track medical claims digitally",
        "Dedicated corporate manager for seamless onboarding and policy administration"
      ],
      requiredDocs: [
        "Employee census list with birthdates and dependent status",
        "Commercial Register (RC) and corporate bylaws",
        "Past claims history statement if switching from an existing group insurer"
      ],
      faq: [
        {
          q: "What is the tax impact of group health premiums for the company?",
          a: "Employer-paid premiums are 100% deductible from corporate taxable profit (IS) and are not considered taxable benefit-in-kind for staff."
        },
        {
          q: "How do employees monitor their medical claim reimbursements?",
          a: "Each team member accesses the AXA Morocco mobile app to take photos of receipts and monitor real-time reimbursement wires."
        },
        {
          q: "Does coverage extend to spouses and dependent children?",
          a: "Yes, group plans offer flexible single, couple, or family tiers with direct billing in top medical clinics."
        }
      ],
      quotePlaceholder: "Target employee headcount, average staff age, desired coverage level...",
      action: "Request Group Proposal",
      telLabel: "HR Division: 05 25 36 30 61"
    }
  }
};

function getCurrentLang() {
  if (typeof window !== 'undefined' && window.EchkiliI18n && typeof window.EchkiliI18n.getLanguage === 'function') {
    return window.EchkiliI18n.getLanguage();
  }
  return 'fr';
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
  const lang = getCurrentLang();
  const offer = getLocalizedOffer(type, lang);
  const modal = document.getElementById('productModal');
  const prodTag = document.getElementById('prodModalTag');
  const prodTitle = document.getElementById('prodModalTitle');
  const prodSub = document.getElementById('prodModalSubtitle');
  const prodContent = document.getElementById('prodModalContent');

  if (prodTag) prodTag.textContent = offer.badge || offer.category;
  if (prodTitle) prodTitle.textContent = offer.title;
  if (prodSub) prodSub.textContent = offer.subtitle;

  const tFeatures = lang === 'ar' ? 'الضمانات والخدمات الأساسية' : (lang === 'en' ? 'Key Guarantees & Covered Benefits' : 'Garanties et Prestations Clés');
  const tAdvantages = lang === 'ar' ? 'مزايا شبكة أكسا وتأمينات شكيلـي بمراكش' : (lang === 'en' ? 'Advantages of AXA & Assurances Echkili' : 'Les Avantages du Réseau AXA Maroc & Assurances Echkili');
  const tCtaTitle = lang === 'ar' ? 'هل ترغبون في دراسة مخصصة وتسعيرة فورية؟' : (lang === 'en' ? 'Need an Immediate Custom Quote?' : "Besoin d'une étude personnalisée immédiate ?");
  const tCtaSub = lang === 'ar' ? 'وكيلكم العام أكسا بمراكش يجيبكم في أقل من ساعتي عمل.' : (lang === 'en' ? 'Your AXA General Agent in Marrakech responds within 2 business hours.' : 'Votre Agent Général AXA à Marrakech vous répond sous 2h ouvrées.');
  const tPageBtn = lang === 'ar' ? 'عرض الصفحة المخصصة' : (lang === 'en' ? 'View Dedicated Page' : 'Voir la Page Dédiée');
  const tWaBtn = lang === 'ar' ? 'تسعيرة عبر واتساب' : (lang === 'en' ? 'WhatsApp Express Quote' : 'Devis Express WhatsApp');
  const waHello = lang === 'ar' ? `السلام عليكم تأمينات شكيلـي، أرغب في تسعيرة حول ${offer.title}` : (lang === 'en' ? `Hello Assurances Echkili, I would like a quote for ${offer.title}` : `Bonjour ECHKILI ASSURANCES, je souhaite un devis pour ${offer.title}`);

  if (prodContent) {
    prodContent.innerHTML = `
      <p style="font-size: 1rem; color: #334155; line-height: 1.65; margin-bottom: 1.5rem;">
        ${offer.desc}
      </p>

      <h3 style="font-size: 1.15rem; font-weight: 800; color: #00186b; margin: 1.5rem 0 0.75rem 0; display: flex; align-items: center; gap: 0.5rem;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e11d48" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        ${tFeatures}
      </h3>

      <div class="product-details-grid">
        ${(offer.features || []).map(f => `
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
        ${tAdvantages}
      </h3>

      <ul class="product-advantages-list">
        ${(offer.advantages || []).map(adv => `
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00186b" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span>${adv}</span>
          </li>
        `).join('')}
      </ul>

      <div class="product-modal-footer-cta">
        <div class="cta-text">
          <h4>${tCtaTitle}</h4>
          <p>${tCtaSub}</p>
        </div>
        <div class="cta-buttons">
          <a href="produit.html?id=${type}" class="btn" style="display: inline-flex; align-items: center; gap: 0.45rem; background: #002868; color: #ffffff; text-decoration: none; font-weight: 700; border-radius: 6px; padding: 0.65rem 1.15rem;">
            <span>${tPageBtn}</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </a>
          <a href="https://wa.me/212667762124?text=${encodeURIComponent(waHello)}" target="_blank" rel="noopener noreferrer" class="btn btn-accent" style="display: inline-flex; align-items: center; gap: 0.5rem; background: #22c55e; border-color: #22c55e; color: #ffffff; text-decoration: none; font-weight: 700; border-radius: 6px; padding: 0.65rem 1.15rem;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.79 14.07c-.24.68-1.2 1.26-1.74 1.31-.49.05-1.12.08-3.62-.95-3.19-1.32-5.24-4.57-5.4-4.78-.16-.21-1.3-1.73-1.3-3.3 0-1.57.82-2.34 1.11-2.66.29-.32.64-.4.85-.4.21 0 .43 0 .61.01.2.01.46-.07.72.55.26.63.9 2.2.98 2.36.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.47.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.32.16.51.14.7-.08.2-.21.84-.98 1.07-1.32.22-.34.45-.29.75-.18.31.11 1.95.92 2.29 1.09.34.17.56.25.64.39.09.14.09.81-.15 1.49z"/></svg>
            ${tWaBtn}
          </a>
          <a href="tel:+212525363061" class="btn btn-outline" style="display: inline-flex; align-items: center; gap: 0.45rem; padding: 0.65rem 1.15rem; text-decoration: none;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            ${offer.telLabel}
          </a>
        </div>
      </div>
    `;
  }

  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('data-active-id', type);
  }
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  if (modal) modal.classList.remove('open');
}

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const typeParam = params.get('type');
  if (typeParam === 'particuliers' || typeParam === 'pros') {
    switchPageTab(typeParam);
  }

  // Clavier pour fermer modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProductModal();
  });

  // Clic backdrop
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeProductModal();
    });
  }

  // Initialisation du Menu Mobile (Hamburger) & Accordéons
  const menuToggle = document.getElementById('menuToggle');
  const navMenuList = document.getElementById('navMenuList');

  if (menuToggle && navMenuList) {
    menuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      const isOpen = navMenuList.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Fermeture lors du clic sur un lien normal
    navMenuList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        const isDropdownParent = link.parentElement && link.parentElement.classList.contains('dropdown-item-container');
        if (isDropdownParent && window.innerWidth <= 860) {
          return;
        }
        navMenuList.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Accordéons sous-menus sur mobile / tactile
    document.querySelectorAll('.dropdown-item-container').forEach(container => {
      const navLink = container.querySelector('.nav-menu-link');
      if (navLink) {
        navLink.addEventListener('click', (e) => {
          if (window.innerWidth <= 1024 || ('ontouchstart' in window)) {
            const wasActive = container.classList.contains('mobile-expanded');
            document.querySelectorAll('.dropdown-item-container').forEach(c => c.classList.remove('mobile-expanded'));
            if (!wasActive) {
              e.preventDefault();
              container.classList.add('mobile-expanded');
            }
          }
        });
      }
    });

    // Clic en dehors pour fermer le tiroir mobile
    document.addEventListener('click', (e) => {
      if (!navMenuList.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenuList.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Écouteur de changement de langue
  window.addEventListener('echkiliLanguageChanged', () => {
    // Si la modal est ouverte, réactualiser son contenu
    const m = document.getElementById('productModal');
    if (m && m.classList.contains('open')) {
      const activeId = m.getAttribute('data-active-id');
      if (activeId) openOfferModal(activeId);
    }
  });
});

if (typeof window !== 'undefined') {
  window.OFFERS_DATA = OFFERS_DATA;
  window.OFFERS_I18N = OFFERS_I18N;
  window.getLocalizedOffer = getLocalizedOffer;
  window.switchPageTab = switchPageTab;
  window.openOfferModal = openOfferModal;
  window.closeProductModal = closeProductModal;
}
