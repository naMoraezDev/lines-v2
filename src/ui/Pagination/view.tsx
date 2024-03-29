import { usePagination } from "./io";
import { PaginationProps } from "./types";
import { ArrowButton } from "./components/ArrowButton";
import { PaginationItem } from "./components/PaginationItem";

export const PaginationView = ({
  lines,
  filter,
  currentPage,
}: PaginationProps) => {
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
        <ArrowButton {...{ currentPage, filter, variant: "previous" }} />
      )}
      {currentPage > 1 + siblingsCount && (
        <>
          <PaginationItem {...{ filter, page: 1 }} />
          {currentPage > 2 + siblingsCount && <span>...</span>}
        </>
      )}
      {previousPages.length > 0 &&
        previousPages.map((page) => (
          <PaginationItem key={page} {...{ page, filter }} />
        ))}
      <PaginationItem active page={currentPage} {...{ filter }} />
      {nextPages.length > 0 &&
        nextPages.map((page) => (
          <PaginationItem key={page} {...{ page, filter }} />
        ))}
      {currentPage + siblingsCount < lastPage && (
        <>
          {currentPage + 1 + siblingsCount < lastPage && <span>...</span>}
          <PaginationItem page={lastPage} {...{ filter }} />
        </>
      )}
      {currentPage < lastPage && (
        <ArrowButton {...{ filter, currentPage, variant: "next" }} />
      )}
    </section>
  );
};
