// src/pages/projects/feed.xml.ts
import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import type { Project } from "../../lib/types";
import { db } from "../../lib/database";

export async function GET(context: APIContext) {
  if (!context.site) {
    throw new Error(
      "context.site is not defined. Please set the 'site' property in your astro.config.mjs file.",
    );
  }

  return rss({
    title: `${db.name} ${db.surname}'s' Projects`,
    description:
      "A feed of Tedy Gabriel Moisa's latest development projects, showcasing web and software engineering skills.",
    site: context.site,
    items: db.projects.map((project: Project) => ({
      title: project.name,
      description: project.description,
      link: project.host,
      pubDate: new Date(),
    })),
    stylesheet: "/rss/pretty-feed-v2.xsl",
  });
}
