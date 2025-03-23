"use client";
import { Button } from "@heroui/button";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  return (
    <nav className="bg-primary">
      <div className="flex gap-2 py-3 px-3 md:px-6 items-center">
        <h2 className="font-semibold text-white text-xl me-auto">
          BERBAGi.com
        </h2>
        <ThemeSwitch />
        <Button size="sm" variant="shadow" color="warning">
          Login
        </Button>
      </div>
    </nav>
  );
};
