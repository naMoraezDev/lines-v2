import { Menu } from "./components/menu";
import { LinesLogo } from "@/ui/lines-logo";
import { Searchbox } from "./components/searchbox";
import { DefaultProps } from "@/types/default-props";
import { ToggleThemeButton } from "@/ui/toggle-theme-button";
import { NavigationMenu } from "./components/navigation-menu";

export const HeaderView = ({ mobile }: DefaultProps) => {
  return (
    <header
      className="
        sticky top-0 w-full h-20 flex items-center gap-6 justify-between px-4 bg-slate-100 duration-300 z-50
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