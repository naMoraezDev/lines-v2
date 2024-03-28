import Link from "next/link";
import { IoIosBus } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";
import { ToggleThemeButton } from "@/ui/ToggleThemeButton";
import { NavigationMenu } from "./components/NavigationMenu";

export const HeaderView = () => {
  return (
    <header className="header w-full h-20 flex items-center justify-between">
      <section className="lines-logo flex gap-1 items-end">
        <span className="lines-text text-4xl font-bold text-green-500">
          _lines
        </span>
        <IoIosBus className="bus-icon w-12 h-12" />
      </section>

      <NavigationMenu />

      <section
        className="
          input-container w-80 flex items-center bg-slate-200 py-2 px-4 rounded-full transition-colors duration-500
          dark:bg-slate-700
        "
      >
        <input
          type="text"
          name="search"
          autoComplete="off"
          placeholder="Buscar uma linha"
          className="
            search-input w-full bg-transparent appearance-none 
            focus:outline-none
          "
        />

        <RiSearchLine className="w-5 h-5" />
      </section>

      <ToggleThemeButton />
    </header>
  );
};
