const projetsInitiaux = [
    {
        id: 0,
        titre: "Jeu Morpion Tic Tac Toe",
        sousTitre: "Un mini-jeu interactif et amusant",
        fonctionnalites: [
            "Mode 2 joueurs",
            "Détection automatique du gagnant",
            "Gestion du match nul",
            "Réinitialisation de la partie",
            "Réinitialisation complète"
        ],
        galerie: ["/capture-morpion1.png", "/capture-morpion2.png"],
        demo: "https://jeumorpion.com",
        description:
            "Un jeu interactif qui permet de jouer au Morpion en ligne avec une interface simple et intuitive. Le projet met en avant la gestion d'état avec React, les animations CSS et une logique de jeu claire. Il est idéal pour s'amuser rapidement et montre mes compétences en développement de petites applications interactives.",
        technologies: ["React", "CSS"],
        image: "/capture-morpion1.png",
        linkGithub: "https://github.com/moncompte/morpion"
    },
    {
        id: 1,
        titre: "Panier E-commerce",
        sousTitre: "Un système de panier dynamique",
        fonctionnalites: [
            "Ajout d'articles au panier",
            "Mise à jour de la quantité par produit",
            "Suppression d'articles",
            "Calcul automatique du total",
        ],
        galerie: ["/capture-panierecommerce1.png", "/capture-panierecommerce2.png"],
        demo: "https://monpanierligne.com",
        description:
            "Un site de panier d’achats interactif permettant de gérer facilement ses produits. Le projet démontre la gestion dynamique de données avec React, l’utilisation du LocalStorage pour la persistance, et la mise en place de règles métiers comme les réductions automatiques.",
        technologies: ["React", "JavaScript", "CSS"],
        image: "/capture-panierecommerce1.png",
        linkGithub: "https://github.com/moncompte/panier-ecommerce"
    },
    {
        id: 2,
        titre: "Blog Technique",
        sousTitre: "Un espace de partage de connaissances",
        fonctionnalites: [
            "Création et affichage d’articles",
            "Mise en forme en Markdown",
            "Catégorisation des articles",
        ],
        galerie: ["/capture-blog1.png", "/capture-blog2.png"],
        demo: "https://monblogtechnique.com",
        description:
            "Un blog conçu pour partager des articles techniques et des tutoriels. Ce projet illustre la génération de contenu dynamique avec Next.js, la gestion du format Markdown pour les articles, et la mise en place d’une interface claire et responsive.",
        technologies: ["Next.js", "Markdown", "CSS"],
        image: "/capture-blog1.png",
        linkGithub: "https://github.com/moncompte/blog-technique"
    }
];
export default projetsInitiaux
