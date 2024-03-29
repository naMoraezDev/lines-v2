import Link from "next/link";
import { PaginationItemProps } from "./types";

export const PaginationItemView = ({ page, active }: PaginationItemProps) => {
  return (
    <Link
      href={`/linhas?page=${page}`}
      className={`
        ${
          active
            ? "bg-green-500 text-slate-50 rounded-xl hover:bg-green-600"
            : "rounded-full hover:bg-slate-300"
        }
        flex justify-center items-center w-8 h-8  duration-300
      `}
    >
      {page}
    </Link>
  );
};
