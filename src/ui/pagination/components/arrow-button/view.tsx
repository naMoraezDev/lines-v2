import Link from "next/link";
import { ArrowButtonProps } from "./types";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

export const ArrowButtonView = ({
  filter,
  variant,
  currentPage,
}: ArrowButtonProps) => {
  if (variant === "previous") {
    return (
      <Link
        scroll={false}
        href={`/linhas?page=${currentPage - 1}${
          filter ? `&filter=${filter}` : ""
        }`}
        className="flex justify-center items-center w-8 h-8 rounded-full duration-300 hover:bg-slate-200 dark:hover:bg-slate-700"
      >
        <MdOutlineNavigateBefore className="text-3xl" />
      </Link>
    );
  }

  return (
    <Link
      scroll={false}
      href={`/linhas?page=${currentPage + 1}${
        filter ? `&filter=${filter}` : ""
      }`}
      className="flex justify-center items-center w-8 h-8 rounded-full duration-300 hover:bg-slate-200 dark:hover:bg-slate-700"
    >
      <MdOutlineNavigateNext className="text-3xl" />
    </Link>
  );
};
