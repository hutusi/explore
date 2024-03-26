export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "胡涂说 | 发现",
  description: "Explore useful resources.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Blog",
      href: "https://hutusi.com/",
    },
    {
      label: "About",
      href: "https://hutusi.com/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/hutusi",
    twitter: "https://twitter.com/hutusi",
    sponsor: "https://github.com/hutusi/explore",
  },
};
