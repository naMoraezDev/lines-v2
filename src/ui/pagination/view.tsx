import { usePagination } from "./io";
import { PaginationProps } from "./types";
import { ArrowButton } from "./components/arrow-button";
import { PaginationItem } from "./components/pagination-item";

export const PaginationView = ({
  lines,
  mobile,
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
    <section className="flex gap-4 w-full justify-center items-center">
      {!mobile && (
        <>
          <span>{pageStart}</span> - <span>{pageEnd}</span> de{" "}
          <span>{lines.length}</span>
        </>
      )}
      {currentPage > 1 && (
        <ArrowButton {...{ currentPage, filter, variant: "previous" }} />
      )}
      {((!mobile && currentPage > 1 + siblingsCount) ||
        (mobile && currentPage > 1)) && (
        <>
          <PaginationItem {...{ filter, page: 1 }} />
          {((!mobile && currentPage > 2 + siblingsCount) ||
            (mobile && currentPage > 1)) && <span>...</span>}
        </>
      )}
      {previousPages.length > 0 &&
        (!mobile ? previousPages : previousPages.slice(0, 0)).map((page) => (
          <PaginationItem key={page} {...{ page, filter }} />
        ))}
      <PaginationItem active page={currentPage} {...{ filter }} />
      {nextPages.length > 0 &&
        (!mobile ? nextPages : nextPages.slice(0, 0)).map((page) => (
          <PaginationItem key={page} {...{ page, filter }} />
        ))}
      {((!mobile && currentPage + siblingsCount < lastPage) ||
        (mobile && currentPage < lastPage)) && (
        <>
          {((!mobile && currentPage + 1 + siblingsCount < lastPage) ||
            (mobile && currentPage + 1 < lastPage)) && <span>...</span>}
          <PaginationItem page={lastPage} {...{ filter }} />
        </>
      )}
      {currentPage < lastPage && (
        <ArrowButton {...{ filter, currentPage, variant: "next" }} />
      )}
    </section>
  );
};
