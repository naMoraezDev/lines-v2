import Link from "next/link";
import { IoIosBus } from "react-icons/io";

export const LinesLogoView = () => {
  return (
    <section>
      <Link href="/" className="lines-logo flex gap-1 items-end" title="_lines">
        <span className="lines-text text-4xl font-bold text-green-500">
          _lines
        </span>
        <IoIosBus className="bus-icon w-12 h-12" />
      </Link>
    </section>
  );
};
