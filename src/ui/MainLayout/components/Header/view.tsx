import { LinesLogo } from "@/ui/LinesLogo";
import { Searchbox } from "./components/Searchbox";
import { DefaultProps } from "@/types/default-props";
import { ToggleThemeButton } from "@/ui/ToggleThemeButton";
import { NavigationMenu } from "./components/NavigationMenu";

export const HeaderView = ({ mobile }: DefaultProps) => {
  return (
    <header className="header w-full h-20 flex items-center gap-6 justify-between px-4">
      {!mobile && <LinesLogo />}
      {!mobile && <NavigationMenu />}
      <Searchbox {...{ mobile }} />
      <ToggleThemeButton />
    </header>
  );
};
