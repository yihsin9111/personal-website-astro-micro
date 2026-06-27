import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Yi-Hsin's Website",
  DESCRIPTION: "Welcome to my website :)",
  EMAIL: "yihsinchang13@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const RESEARCH: Metadata = {
  TITLE: "Research",
  DESCRIPTION:
    "A collection of my research papers and publications.",
};

export const SOCIALS: Socials = [
  {
    NAME: "Linkedln",
    HREF: "https://twitter.com/boogerbuttcheek",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/trevortylerlee",
  },
  {
    NAME: "Website",
    HREF: "https://trevortylerlee.com",
  },
];
