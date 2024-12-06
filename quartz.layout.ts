import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { QuartzPluginData } from "./quartz/plugins/vfile"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.RecentNotes({ filter: (f: QuartzPluginData) => f.filePath != "content/index.md" }),
    Component.Comments({
      provider: 'giscus',
      options: {
        // from data-repo
        repo: 'St0wy/Blog-Perso',
        // from data-repo-id
        repoId: 'R_kgDOM8X3qA',
        // from data-category
        category: 'Announcements',
        // from data-category-id
        categoryId: 'DIC_kwDOM8X3qM4CjN3I',
        inputPosition: 'top',
      }
    }),
  ],
  footer: Component.Footer({
    links: {
      Mastodon: "https://mastodon.gamedev.place/@stowy",
      Bluesky: "https://bsky.app/profile/stowy.ch",
      Twitter: "https://x.com/St0wy",
      GitHub: "https://github.com/St0wy",
      GitLab: "https://gitlab.com/Stowy",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    // Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    // Component.Backlinks(),
    
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
