import { PaginationProps } from "./types";

export const usePagination = ({ lines, currentPage }: PaginationProps) => {
  const siblingsCount = 1;

  const generatePagesArray = (from: number, to: number) => {
    return [...new Array(to - from)]
      .map((_, index) => from + index + 1)
      .filter((page) => page > 0);
  };

  const totalCountOfPages = lines.length;

  const lastPage = Number((totalCountOfPages / 10).toFixed());

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  const pageStart = (Number(currentPage) - 1) * Number(10);

  const pageEnd =
    totalCountOfPages < 10
      ? totalCountOfPages
      : currentPage === lastPage
      ? totalCountOfPages
      : pageStart + Number(10);

  return {
    pageEnd,
    lastPage,
    nextPages,
    pageStart,
    currentPage,
    previousPages,
    siblingsCount,
  };
};
