export const etapesCours = [
  {
    id: 1,
    titre: "Découvrir l’ordinateur",
    introduction: {
      titre: "👋 Bienvenue dans ton premier cours",
      texte: "Dans ce cours, tu vas apprendre ce qu’est un ordinateur et comment il est utilisé au quotidien. Pas besoin d’avoir des connaissances avant."
    },
    definition: {
      titre: "C’est quoi un ordinateur ?",
      texte: "Un ordinateur est une machine électronique qui permet de travailler, apprendre, communiquer et se divertir. Il sert à écrire des documents, naviguer sur Internet, regarder des vidéos ou faire des calculs."
    },
    typesOrdinateurs: [
      {
        nom: "Ordinateur portable",
        emoji: "💻",
        description: "C’est un ordinateur que l’on peut transporter facilement. Il fonctionne avec une batterie et est utilisé à la maison, à l’école ou en déplacement.",
        modal: "OrdiPortable"
      },
      {
        nom: "Ordinateur fixe",
        emoji: "🖥️",
        description: "C’est un ordinateur posé sur un bureau. Il est plus puissant et composé de plusieurs éléments : écran, unité centrale, clavier et souris.",
        modal: "OrdiFixe"
      }
    ],
    partiesPrincipales: [
      { nom: "L’écran", description: "affiche les informations" },
      { nom: "Le clavier", description: "permet d’écrire" },
      { nom: "La souris", description: "permet de cliquer et déplacer" },
      { nom: "L’unité centrale", description: "le cerveau de l’ordinateur" }
    ],
    utilite: [
      "Écrire des documents (Word)",
      "Faire des calculs (Excel)",
      "Créer des présentations (PowerPoint)",
      "Envoyer des emails",
      "Apprendre en ligne"
    ]
  },
  // tu pourras ajouter d’autres étapes ici facilement
];
