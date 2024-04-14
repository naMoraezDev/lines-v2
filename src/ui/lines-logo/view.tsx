import Link from "next/link";
import { IoIosBus } from "react-icons/io";
import { DefaultProps } from "@/types/default-props";

export const LinesLogoView = ({ mobile }: DefaultProps) => {
  return (
    <section>
      <Link href="/" className="flex gap-1 items-end" title="_lines">
        <span
          className={`
            ${mobile ? "text-3xl" : "text-4xl"} 
            lines-text font-bold text-green-500
          `}
        >
          _lines
        </span>
        <IoIosBus className={mobile ? "w-9 h-9" : "w-10 h-10"} />
      </Link>
    </section>
  );
};
