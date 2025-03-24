export type SiteConfig = typeof siteConfig;
import {
  HandRaisedIcon,
  HeartIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

export const siteConfig = {
  name: "Berbagi.com",
  description: "Berikan senyuman yang paling indah untuk saudara kita.",
  menuItems: [
    {
      active: /^\/$/,
      label: "Home",
      href: "/",
      icon: HomeIcon,
    },
    {
      active: /^\/donation$/,
      label: "Donasi",
      href: "/donation",
      icon: HandRaisedIcon,
    },
    {
      active: /^\/infaq$/,
      label: "Infaq",
      href: "/infaq",
      icon: HeartIcon,
    },
    {
      active: /^\/user.*$/,
      label: "User",
      href: "/user",
      icon: UserIcon,
    },
  ],
  links: {
    github: "https://github.com/mirfanz",
    instagram: "https://www.instagram.com/mirfanz_",
  },
};
