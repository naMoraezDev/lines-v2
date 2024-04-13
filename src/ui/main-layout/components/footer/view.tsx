import { LinesLogo } from "@/ui/lines-logo";
import { DefaultProps } from "@/types/default-props";

export const FooterView = ({ mobile }: DefaultProps) => {
  return (
    <footer
      className="
        h-16 flex items-center bg-slate-200 duration-300
        dark:bg-gray-900
      "
    >
      <div
        className={`
          ${mobile ? "px-4 flex-row-reverse gap-4" : "justify-between"}
          w-full max-w-[1270px] mx-auto flex items-center
        `}
      >
        <p>© 2022 _Lines. Todos os direitos reservados.</p>
        <LinesLogo />
      </div>
    </footer>
  );
};
