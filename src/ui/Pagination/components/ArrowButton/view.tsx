import Link from "next/link";
import { ArrowButtonProps } from "./types";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

export const ArrowButtonView = ({ variant, currentPage }: ArrowButtonProps) => {
  if (variant === "previous") {
    return (
      <Link
        href={`/linhas?page=${currentPage - 1}`}
        className="flex justify-center items-center w-8 h-8 rounded-full bg-slate-400 text-slate-50 duration-300 hover:bg-slate-500"
      >
        <MdOutlineNavigateBefore className="text-3xl" />
      </Link>
    );
  }

  return (
    <Link
      href={`/linhas?page=${currentPage + 1}`}
      className="flex justify-center items-center w-8 h-8 rounded-full bg-slate-400 text-slate-50 duration-300 hover:bg-slate-500"
    >
      <MdOutlineNavigateNext className="text-3xl" />
    </Link>
  );
};
