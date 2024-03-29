import { IoIosBus } from "react-icons/io";
import { Searchbox } from "./components/Searchbox";
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
      <Searchbox />
      <ToggleThemeButton />
    </header>
  );
};
