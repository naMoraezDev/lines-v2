"use client";

import { useToggleThemeButton } from "./io";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export const ToggleThemeButtonView = () => {
  const { checked, toggle } = useToggleThemeButton();

  return (
    <section>
      <button
        type="button"
        onClick={toggle}
        className="flex items-center relative"
      >
        <div
          className={`
            ${checked ? "bg-green-500" : "bg-slate-300"}
            appearance-none transition-colors w-14 h-7 rounded-full 
          `}
        />
        <span
          className={`
            ${checked ? "translate-x-7" : "translate-x-0"}
            w-6 h-6 right-[30px] absolute rounded-full transform transition-transform bg-white
          `}
        >
          {checked ? (
            <MdDarkMode className="w-6 h-6 text-green-500" />
          ) : (
            <MdLightMode className="w-6 h-6 text-slate-300" />
          )}
        </span>
      </button>
    </section>
  );
};
