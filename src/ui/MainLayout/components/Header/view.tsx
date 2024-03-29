import { LinesLogo } from "@/ui/LinesLogo";
import { Searchbox } from "./components/Searchbox";
import { ToggleThemeButton } from "@/ui/ToggleThemeButton";
import { NavigationMenu } from "./components/NavigationMenu";

export const HeaderView = () => {
  return (
    <header className="header w-full h-20 flex items-center justify-between">
      <LinesLogo />
      <NavigationMenu />
      <Searchbox />
      <ToggleThemeButton />
    </header>
  );
};
