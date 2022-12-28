import { useMemo } from "react";

interface pageType {
  totalElements: number;
  pageSize: number;
  nextToCurrentPage: number;
  currentPage: number;
}

const range = (start: number, end: number) => {
  const length = end - start + 1;

  return Array.from({ length }, (_, idx) => idx + start);
};

const usePagination = ({
  totalElements,
  pageSize,
  nextToCurrentPage,
  currentPage,
}: pageType) => {
  const paginationRange = useMemo(() => {
    const totalPages = Math.ceil(totalElements / pageSize);
    const pageNumbersDisplay = nextToCurrentPage + 5;
    const leftNextToCurrentPageIndex = Math.max(
      1,
      currentPage - nextToCurrentPage
    );

    const rightNextToCurrentPageIndex = Math.min(
      totalPages,
      currentPage + nextToCurrentPage
    );

    const shouldShowLeftDots = leftNextToCurrentPageIndex > 2;
    const shouldShowRightDots = rightNextToCurrentPageIndex < totalPages - 2;

    // If the number of pages is less than the page numbers we want to show
    if (totalPages <= pageNumbersDisplay) {
      return range(1, totalPages);
    }

    // No left dots to show, but rights dots to be shown
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItems = 3 + 2 * nextToCurrentPage;
      const leftRange = range(1, leftItems);

      return [...leftRange, "...", totalPages];
    }

    // No right dots to show, but left dots to be shown
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItems = 3 + 2 * nextToCurrentPage;
      const rightRange = range(totalPages - rightItems + 1, totalPages);

      return [1, "...", ...rightRange];
    }

    // Both left and right dots to be shown
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleItems = range(
        leftNextToCurrentPageIndex,
        rightNextToCurrentPageIndex
      );

      return [1, "...", ...middleItems, "...", totalPages];
    }
  }, [totalElements, pageSize, nextToCurrentPage, currentPage]);

  return paginationRange as (string | number)[];
};

export default usePagination;
