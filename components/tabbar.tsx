"use client";

import {
  HandRaisedIcon,
  HeartIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Tabbar = () => {
  const path = usePathname();
  const menuItems = [
    {
      active: path == "/",
      label: "Home",
      href: "/",
      icon: <HomeIcon className="h-6 w-6" />,
    },
    {
      active: path == "/infaq",
      label: "Infaq",
      href: "/infaq",
      icon: <HeartIcon className="h-6 w-6" />,
    },
    {
      active: path == "/donation",
      label: "Donasi",
      href: "/donation",
      icon: <HandRaisedIcon className="h-6 w-6" />,
    },
    {
      active: path == "/user",
      label: "User",
      href: "/user",
      icon: <UserIcon className="h-6 w-6" />,
    },
  ];

  return (
    <div className="md:hidden bg-default-100 py-2 rounded-t-xl">
      <div className="flex justify-evenly">
        {menuItems.map((item) => (
          <Link
            href={item.href}
            className={clsx(
              "flex flex-col mb-1s w-2/12 items-center justify-center",
              item.active ? "text-primary" : "text-default-400"
            )}
            key={item.label}
          >
            {item.icon}
            <small className="text-xs">{item.label}</small>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tabbar;
