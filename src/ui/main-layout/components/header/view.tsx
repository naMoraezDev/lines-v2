import { HeaderProps } from "./types";
import { Menu } from "./components/menu";
import { LinesLogo } from "@/ui/lines-logo";
import { Searchbox } from "./components/searchbox";
import { ToggleThemeButton } from "@/ui/toggle-theme-button";
import { NavigationMenu } from "./components/navigation-menu";

export const HeaderView = ({ mobile, notFound }: HeaderProps) => {
  if (notFound)
    return (
      <header className="sticky top-0 w-full h-20 flex items-center justify-center px-4 bg-green-500 duration-300 z-50">
        <LinesLogo {...{ notFound }} />
      </header>
    );

  return (
    <header
      className="
        max-w-[1270px] mx-auto sticky top-0 w-full h-20 flex items-center gap-6 justify-between px-4 bg-slate-100 duration-300 z-50
        dark:bg-slate-800
      "
    >
      <div className="flex gap-6 items-center">
        <Menu {...{ mobile }} />
        {!mobile && <LinesLogo />}
      </div>
      {!mobile && <NavigationMenu />}
      <Searchbox {...{ mobile }} />
      <ToggleThemeButton />
    </header>
  );
};
