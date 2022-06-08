import React from "react";
import { LightBulb } from "../LightBulb/LightBulb";
import { Moon } from "../Moon/Moon";

type Props = {
  // FIXME: Avoid prop drilling w/ hook Fix
  theme: string | null;
  themeToggler: () => void;
};

export const ThemeSwitcher = ({ theme, themeToggler }: Props) => {
  return (
    <>
      {theme === "light" ? (
        <Moon clicked={() => themeToggler()} />
      ) : (
        <LightBulb clicked={() => themeToggler()} />
      )}
    </>
  );
};
