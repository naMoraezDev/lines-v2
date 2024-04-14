import { LinesLogo } from "@/ui/lines-logo";
import { DefaultProps } from "@/types/default-props";

export const FooterView = ({ mobile }: DefaultProps) => {
  return (
    <footer
      className="
        flex items-center bg-slate-200 duration-300 py-3
        dark:bg-gray-900
      "
    >
      <div
        className={`
          ${
            mobile
              ? "px-4 flex-col-reverse gap-4 justify-center"
              : "justify-between"
          }
          w-full max-w-[1270px] mx-auto flex items-center
        `}
      >
        <p>© 2022 _lines. Todos os direitos reservados.</p>
        <LinesLogo {...{ mobile }} />
      </div>
    </footer>
  );
};
