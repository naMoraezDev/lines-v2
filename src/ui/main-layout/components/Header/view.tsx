import { Menu } from "./components/menu";
import { LinesLogo } from "@/ui/LinesLogo";
import { Searchbox } from "./components/Searchbox";
import { DefaultProps } from "@/types/default-props";
import { ToggleThemeButton } from "@/ui/ToggleThemeButton";
import { NavigationMenu } from "./components/NavigationMenu";

export const HeaderView = ({ mobile }: DefaultProps) => {
  return (
    <header
      className="
        sticky top-0 w-full h-20 flex items-center gap-6 justify-between px-4 bg-slate-100 duration-300
        dark:bg-slate-800
      "
    >
      <Menu {...{ mobile }} />
      {!mobile && <LinesLogo />}
      {!mobile && <NavigationMenu />}
      <Searchbox {...{ mobile }} />
      <ToggleThemeButton />
    </header>
  );
};
