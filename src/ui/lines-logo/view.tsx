import Link from "next/link";
import { DefaultProps } from "@/types/default-props";

export const LinesLogoView = ({ mobile }: DefaultProps) => {
  return (
    <section>
      <Link href="/" className="flex items-end" title="_lines">
        <span
          className={`
            ${mobile ? "text-3xl" : "text-3xl"} 
            lines-text font-extrabold
          `}
        >
          --<span className="text-green-500">LINES</span>--
        </span>
      </Link>
    </section>
  );
};
