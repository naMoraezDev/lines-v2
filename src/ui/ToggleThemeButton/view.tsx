"use client";

import { useTheme } from "@/hooks/theme";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export const ToggleThemeButtonView = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <section>
      <button
        type="button"
        onClick={toggleTheme}
        className="flex items-center relative"
      >
        <div
          className={`
            ${isDark ? "bg-green-500" : "bg-slate-300"}
            appearance-none duration-300 w-14 h-7 rounded-full 
          `}
        />
        <span
          className={`
            ${isDark ? "translate-x-7" : "translate-x-0"}
            w-6 h-6 right-[30px] absolute rounded-full transform transition-transform bg-white
          `}
        >
          {isDark ? (
            <MdDarkMode className="w-6 h-6 text-green-500" />
          ) : (
            <MdLightMode className="w-6 h-6 text-slate-300" />
          )}
        </span>
      </button>
    </section>
  );
};
