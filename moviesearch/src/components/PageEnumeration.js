import React from "react";

const PageEnumeration = ({
  currentPage,
  totalPageCount,
  goToNext,
  goToPrevious,
  goToNumber,
}) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; // Number of pages to show around the current page

    if (totalPageCount <= maxPagesToShow) {
      for (let i = 1; i <= totalPageCount; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...", totalPageCount);
      } else if (currentPage > totalPageCount - 3) {
        pageNumbers.push(1, "...");
        for (let i = totalPageCount - 3; i <= totalPageCount; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1, "...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...", totalPageCount);
      }
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="text-white">
      <div className="flex justify-center items-center gap-2 mt-4">
        <button
          onClick={goToPrevious}
          disabled={currentPage === 1}
          className="bg-cyan-800 text-white font-bold p-2 rounded-lg shadow-sm disabled:opacity-50"
        >
          Previous
        </button>
        {pageNumbers.map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && goToNumber(page)}
            disabled={typeof page !== "number"}
            className={`bg-cyan-800 text-white font-bold p-2 rounded-lg shadow-sm ${
              currentPage === page ? "bg-cyan-600" : ""
            } ${typeof page !== "number" ? "cursor-default" : ""}`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={goToNext}
          disabled={currentPage === totalPageCount}
          className="bg-cyan-800 text-white font-bold p-2 rounded-lg shadow-sm disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PageEnumeration;
