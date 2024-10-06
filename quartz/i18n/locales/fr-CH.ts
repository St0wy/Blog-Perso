import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Sans titre",
    description: "Aucune description fournie",
  },
  components: {
    callout: {
      note: "Note",
      abstract: "Résumé",
      info: "Info",
      todo: "À faire",
      tip: "Conseil",
      success: "Succès",
      question: "Question",
      warning: "Avertissement",
      failure: "Échec",
      danger: "Danger",
      bug: "Bug",
      example: "Exemple",
      quote: "Citation",
    },
    backlinks: {
      title: "Backlinks",
      noBacklinksFound: "Aucun backlink trouvé",
    },
    themeToggle: {
      lightMode: "Mode clair",
      darkMode: "Mode sombre",
    },
    explorer: {
      title: "Explorateur",
    },
    footer: {
      createdWith: "Créé avec",
    },
    graph: {
      title: "Vue Graphique",
    },
    recentNotes: {
      title: "Notes Récentes",
      seeRemainingMore: ({ remaining }) => `Voir ${remaining} de plus →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Transclusion de ${targetSlug}`,
      linkToOriginal: "Lien vers l'original",
    },
    search: {
      title: "Recherche",
      searchBarPlaceholder: "Rechercher quelque chose",
    },
    tableOfContents: {
      title: "Table des Matières",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `${minutes} min de lecture`,
    },
  },
  pages: {
    rss: {
      recentNotes: "Notes récentes",
      lastFewNotes: ({ count }) => `Les dernières ${count} notes`,
    },
    error: {
      title: "Introuvable",
      notFound: "Cette page est soit privée, soit elle n'existe pas.",
      home: "Retour à la page d'accueil",
    },
    folderContent: {
      folder: "Dossier",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 élément sous ce dossier." : `${count} éléments sous ce dossier.`,
    },
    tagContent: {
      tag: "Tag",
      tagIndex: "Index des tags",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 élément avec ce tag." : `${count} éléments avec ce tag.`,
      showingFirst: ({ count }) => `Affichage des ${count} premiers tags.`,
      totalTags: ({ count }) => `Trouvé ${count} tags au total.`,
    },
  },
} as const satisfies Translation
