import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontPoppins } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { HomeIcon } from "@heroicons/react/24/solid";
import Tabbar from "@/components/tabbar";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-poppins antialiased",
          fontPoppins.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-dvh">
            <Navbar />
            <div className="flex flex-1 flex-col-reverse md:flex-row overflow-hidden">
              <div>
                <div className="bg-default-100 hidden md:block h-full p-4 w-72 overflow-y-auto">
                  Side Bar
                </div>
                <Tabbar />
              </div>
              <div className="bgred-400 flex-1 flex flex-col overflow-y-auto">
                <main className="flex-grow">{children}</main>
                <footer className="w-full hidden md:flex items-center justify-center py-3">
                  <Link
                    isExternal
                    className="flex items-center gap-1 text-current"
                    href="https://heroui.com?utm_source=next-app-template"
                    title="heroui.com homepage"
                  >
                    <span className="text-default-600">Created By</span>
                    <p className="text-primary">Mirfanz</p>
                  </Link>
                </footer>
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
