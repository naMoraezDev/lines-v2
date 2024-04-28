import Link from "next/link";
import { LinesLogoProps } from "./types";

export const LinesLogoView = ({ mobile, notFound }: LinesLogoProps) => {
  return (
    <section>
      <Link href="/home" className="flex items-end" title="_lines">
        <span
          className={`
            ${mobile ? "text-3xl" : "text-3xl"} 
            ${notFound && "text-slate-50"}
            lines-text font-extrabold
          `}
        >
          --
          <span className={notFound ? "text-slate-50" : "text-green-500"}>
            LINES
          </span>
          --
        </span>
      </Link>
    </section>
  );
};
