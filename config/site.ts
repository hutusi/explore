import { Pagination } from "@nextui-org/react";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "胡涂说 | 发现",
  description: "Explore useful resources.",
  navItems: [
    {
      label: "All",
      href: "/",
      category: "all",
    },
    {
      label: "Articles",
      href: "/articles",
      category: "article",
    },
    {
      label: "Videos",
      href: "/videos",
      category: "video",
    },
    {
      label: "Podcasts",
      href: "/podcasts",
      category: "podcast",
    },
    {
      label: "About",
      href: "/about",
      category: "about",
    },
  ],
  navMenuItems: [
    {
      label: "All",
      href: "/",
      category: "all",
    },
    {
      label: "Articles",
      href: "/articles",
      category: "article",
    },
    {
      label: "Videos",
      href: "/videos",
      category: "video",
    },
    {
      label: "Podcasts",
      href: "/podcasts",
      category: "podcast",
    },
    {
      label: "About",
      href: "/about",
      category: "about",
    },
  ],
  links: {
    github: "https://github.com/hutusi",
    twitter: "https://twitter.com/hutusi",
    sponsor: "https://github.com/hutusi/explore",
  },
};
