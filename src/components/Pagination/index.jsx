import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

function Pagination({ onClickPage }) {
  return (
    <ReactPaginate
      className={styles.pagination}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => onClickPage(e.selected + 1)}
      pageRangeDisplayed={5}
      pageCount={2}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
