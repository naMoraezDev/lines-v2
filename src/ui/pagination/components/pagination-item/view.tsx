import Link from "next/link";
import { PaginationItemProps } from "./types";

export const PaginationItemView = ({
  page,
  active,
  filter,
}: PaginationItemProps) => {
  return (
    <Link
      scroll={false}
      href={`/linhas?page=${page}${filter ? `&filter=${filter}` : ""}`}
      className={`
        ${
          active
            ? "bg-green-500 text-slate-50 hover:bg-green-600"
            : "hover:bg-slate-200 dark:hover:bg-slate-700"
        }
        flex justify-center items-center w-8 h-8 rounded-full duration-300
      `}
    >
      {page}
    </Link>
  );
};
