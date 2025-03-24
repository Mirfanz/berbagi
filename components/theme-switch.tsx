"use client";

import { FC } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { SwitchProps, useSwitch } from "@heroui/switch";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import clsx from "clsx";

import { Button } from "@heroui/button";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export const ThemeSwitch: FC = () => {
  const { theme, setTheme } = useTheme();

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Button
      isIconOnly
      size="sm"
      onPress={onChange}
      variant="light"
      radius="full"
      className="text-white"
      color="default"
    >
      {theme == "dark" ? (
        <SunIcon className="w-5 h-5" />
      ) : (
        <MoonIcon className="w-5 h-5" />
      )}
    </Button>
  );
};
