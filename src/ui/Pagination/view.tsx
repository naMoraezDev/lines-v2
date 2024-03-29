import Link from "next/link";
import { usePagination } from "./io";
import { PaginationProps } from "./types";
import { ArrowButton } from "./components/ArrowButton";
import { PaginationItem } from "./components/PaginationItem";

export const PaginationView = ({ lines, currentPage }: PaginationProps) => {
  const {
    pageEnd,
    lastPage,
    nextPages,
    pageStart,
    previousPages,
    siblingsCount,
  } = usePagination({
    lines,
    currentPage,
  });

  return (
    <section className="flex gap-4 w-full justify-center items-center pb-24 pt-10">
      <span>{pageStart}</span> - <span>{pageEnd}</span> de{" "}
      <span>{lines.length}</span>
      {currentPage > 1 && (
        <ArrowButton {...{ currentPage, variant: "previous" }} />
      )}
      {currentPage > 1 + siblingsCount && (
        <>
          <PaginationItem page={1} />
          {currentPage > 2 + siblingsCount && <span>...</span>}
        </>
      )}
      {previousPages.length > 0 &&
        previousPages.map((page) => (
          <PaginationItem key={page} {...{ page }} />
        ))}
      <PaginationItem active page={currentPage} />
      {nextPages.length > 0 &&
        nextPages.map((page) => <PaginationItem key={page} {...{ page }} />)}
      {currentPage + siblingsCount < lastPage && (
        <>
          {currentPage + 1 + siblingsCount < lastPage && <span>...</span>}
          <PaginationItem page={lastPage} />
        </>
      )}
      {currentPage < lastPage && (
        <ArrowButton {...{ currentPage, variant: "next" }} />
      )}
    </section>
  );
};
