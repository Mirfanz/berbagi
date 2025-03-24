"use client";

import { siteConfig } from "@/config/site";
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

  return (
    <div className="md:hidden bg-default-100 py-2 rounded-t-xl">
      <div className="flex justify-evenly">
        {siteConfig.menuItems.map((item) => (
          <Link
            href={item.href}
            className={clsx(
              "flex flex-col mb-1s w-2/12 items-center justify-center",
              item.active.test(path) ? "text-primary" : "text-default-400"
            )}
            key={item.label}
          >
            <item.icon className="w-6 h-6" />
            <small className="text-xs">{item.label}</small>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tabbar;
