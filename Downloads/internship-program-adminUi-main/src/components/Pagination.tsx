import usePagination from "hooks/usePagination";

interface Iprops {
  totalElements: number;
  nextToCurrentPage: number;
  currentPage: number;
  pageSize: number;
  onPageChange: Function;
}

const Pagination: React.FC<Iprops> = ({
  totalElements,
  nextToCurrentPage = 1,
  currentPage,
  pageSize = 10,
  onPageChange,
}) => {
  const paginationRange = usePagination({
    totalElements,
    pageSize,
    nextToCurrentPage,
    currentPage,
  });

  let lastPage = paginationRange[paginationRange.length - 1];

  // If there are less than 2 times in pagination range we won't render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    if (currentPage === lastPage) return;
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    if (currentPage === 1) return;
    onPageChange(currentPage - 1);
  };

  return (
    <div className="w-full mt-8 flex justify-center item-center ">
      <nav aria-label="Page navigation example ">
        <ul className="inline-flex items-center -space-x-px rounded-lg w-full ">
          <li
            onClick={onPrevious}
            className={
              currentPage === 1 ? "disabled-prev-btn " : "prev-page-btn "
            }
          >
            <span className="sr-only">Previous</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </li>
          {paginationRange.map((pageNumber, idx) => {
            // If the pageItem is a DOT, render the DOTS unicode character
            if (pageNumber === "...") {
              return (
                <li className="normal-pagination" key={idx}>
                  &#8230;
                </li>
              );
            }

            // Render our Page Pills
            return (
              <li
                onClick={() => onPageChange(pageNumber)}
                key={idx}
                className={
                  pageNumber === currentPage
                    ? "active-pagination"
                    : "normal-pagination"
                }
              >
                {pageNumber}
              </li>
            );
          })}
          <li></li>

          <li
            onClick={onNext}
            className={
              currentPage === lastPage ? "disabled-next-btn" : "next-page-btn"
            }
          >
            <span className="sr-only">Next</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
