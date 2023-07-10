const fr = {
	translation: {
		// About component
		about_title: "A propos",
		about_who: "Qui suis-je ?",
		about_who_description: "Je suis votre développeur web personnel",
		about_who_background:
			"J'ai passé près de 10 ans à travailler en tant qu'ingénieur du son en région parisienne. Je suis revenu dans le sud de la France par la suite où j'ai obtenu un diplôme d'infirmier. J'ai exercé ce métier pendant 6 ans. J'ai toujours aimé tout ce qui à trait à l'informatique et aux technologies du web. En 2020, j'ai commencé à travailler sur un nouveau projet professionnel en développant un site web avec différentes technologies (HTML, CSS, VueJs & Drupal comme CMS). Je me suis rapidement rendu compte que la programmation me passionnait, c'est ainsi que j'ai décidé d'obtenir une certification de développeur web.",
		about_who_background_passion:
			"Depuis tout jeune, j'étais passionné par l'informatique, tant l'aspect hardware que software. L'envie d'apprendre ne m'a plus quitté dès le moment où j'ai commencé à programmer en HTML & CSS. J'ai rapidement commencé à travailler avec JavaScript pour pouvoir créer des sites web plus interactifs et après un certain temps, j'ai commencé à utiliser des outils tels que VueJs, ReactJs, NodeJs et MongoDb. Je suis dans l'apprentissage et l'amélioration de mes pratiques constamment afin de remplir chacune de mes missions du mieux que je peux.",
		about_projects: "Retrouvez ci-dessous mes projets et applications les plus récents.",
		// Contact component
		contact_title: "Contact",
		contact_subtitle: "Me contacter",
		contact_developer: "Développeur Full-Stack",
		contact_developer_description:
			"Je suis disponible en tant que freelance ou à temps plein. Contactez moi et commençons à travailler ensembles.",
		contact_connect: "Se connecter à mon réseau",
		contact_form_name: "Nom",
		contact_form_phone: "Numéro de téléphone",
		contact_form_email: "Email",
		contact_form_subject: "Sujet",
		contact_form_message: "Message",
		contact_form_message_button: "Envoyer votre message",
		// Main component
		main_pre_title: "Construisons ensemble votre site web ou application web",
		main_title_presentation: "Bonjour, je suis",
		main_title_subtitle: "Développeur web Full-Stack",
		main_title_description:
			"Je suis un développeur web full-stack spécialisé dans la création d'expériences digitales de qualité. Je construis pour vous des applications web adaptées à tous supports avec des frameworks et des librairies spécialisés.",
		// Navbar component
		navbar_home: "Accueil",
		navbar_about: "A propos",
		navbar_skills: "Compétences",
		navbar_projects: "Projets",
		navbar_mobile_title: "Construisons ensemble vos sites web et applications",
		navbar_mobile_connect: "Se connecter",
		// Project item component
		project_item_info: "Voir Plus",
		// Projects component & pages
		projects_title: "Projets",
		projects_subtitle: "Ce que j'ai développé",
		projects_overview: "Aperçu",
		projects_back: "Retour",
		projects_booki_title: "Réservation de vacances",
		projects_booki_description:
			"Ce site a été codé en utilisant HTML 5 & CSS 3 seulement. C'est une intégration issue d'un design qui était donné. Toute l'application est responsive, les designs s'adaptent en fonction du support (tablette, smartphone et desktop). Elle comporte trois sections: filtres, hôtels et activités. Les hôtels et les activités sont affichées sous la forme de cartes.",
		projects_ohmyfood_title: "Réservation de menus en ligne",
		projects_ohmyfood_description:
			"Ce site a été codé en utilisant HTML 5 & SASS pour la partie CSS. C'est une intégration issue d'un design proposé. Plusieurs types d'animations sont utilisées sur le site ainsi qu'un loader au chargement de la page. L'application est codée sur le principe du mobile-first et est totalement responsive. L'application comprend 4 pages à titre d'exemple et dispose de plusieurs fonctionnalités : vous pouvez accéder aux menus de différents restaurants, choisir de liker un menu, de le composer en fonction de vos goûts et de passer commande. Pour l'instant l'application ne dispose pas de partie backend.",
		projects_kanap_title: "App de vente de canapés",
		projects_kanap_description:
			"Ce site a été construit en utilisant principalement JavaScript pour lier de façon dynamique la partie frontend au backend. L'application est une application commerciale basique. Elle dispose de 3 pages principales, une qui permet d'afficher l'ensemble des produits disponibles dans le catalogue, une seconde qui permet d'afficher les détails concernant un produit et la dernière qui est une page panier qui récapitule l'ensemble des éléments ajoutés dans le panier. Vous pouvez ajouter le produit que vous avez sélectionné dans un panier qui est stocké dans le localStorage de votre navigateur, ce qui permet de ne pas en perdre le contenu lors de votre navigation. Vous pouvez ajouter et supprimer des produits du panier et quand la commande est passée, vous avez un numéro de commande unique qui vous est envoyé.",
		projects_hottakes_title: "App de partage de sauces",
		projects_hottakes_description: `Cette application a été codée en utilisation Node Js pour réaliser une application CRUD. L'application est sécurisée et respecte les standards de l'OWASP en terme de sécurité. Vous pouvez créer un compte en utilisant une adresse email unique et un mot de passe. Toutes les données stockées dans la base de données sont stockées de manière sécurisée. Un utilisateur peut créer, mettre à jour, et supprimer des sauces. Il est possible de "liker" ou "disliker" une sauce une fois par utilisateur par sauce.`,
		projects_groupomania_title: "Réseau social d'entreprise",
		projects_groupomania_description: `Cette application a été développée entièrement à partir de zéro. La partie backend utilise la technologie NodeJS, ExpressJs et MongoDB. Toutes les données sont stockées de façon sécurisée dans la base de données. L'application respecte les standards de l'OWASP. Il est possible de créer un compte en utilisant une adresse email et un mot de passe. Le reste de l'application est une application CRUD classique, chaque utilisateur enregistré peut créer, mettre à jour et supprimer des posts. Chaque utilisateur peut "liker" ou "disliker" n'importe quel post hormis ses propres posts, une fois par post. Le premier utilisateur à être créé sur la base de données aura un statut administrateur qui lui permettra de modérer le contenu du réseau social car il pourra modifier ou supprimer n'importe quel post existant.`,
		projects_crwn_title: "Site vitrine de vente en ligne de vêtements",
		projects_crwn_description: `Ce site vitrine a été développé à partir d'une formation poussée ReactJS. Entièrement personnalisable, il est possible de modifier les données affichées sur le site en modifiant la base de donnée Firebase. Il est possible de créer un compte en utilisant une adresse email et un mot de passe. Il est possible de se connecter avec un compte Google.`,
		// Skills component
		skills_title: "Compétences",
		skills_subtitle: "Les technologies que j'utilise",
		// Index page
		index_title: "Kevin MAS | Développeur web",
		index_name_content:
			"Je suis votre développeur web personnel, je crée des applications et des sites web personnalisés pour vous!",
	},
};

module.exports = fr;
