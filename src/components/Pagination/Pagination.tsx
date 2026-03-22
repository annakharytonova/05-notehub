import css from "./Pagination.module.css";
// import ReactPaginate from "react-paginate";
import * as pkg from "react-paginate";
// @ts-expect-error - react-paginate has incorrect type definitions
const ReactPaginate = pkg.default.default;

interface PaginationParam {
  page: number;
  totalPages: number;
  handlePageChange: (selectedItem: { selected: number }) => void;
}

function Pagination({ page, totalPages, handlePageChange }: PaginationParam) {
  return (
    <ReactPaginate
      pageCount={totalPages}
      pageRangeDisplayed={4}
      marginPagesDisplayed={1}
      onPageChange={handlePageChange}
      forcePage={page - 1}
      containerClassName={css.pagination}
      activeClassName={css.active}
      nextLabel="→"
      previousLabel="←"
    />
  );
}

export default Pagination;
