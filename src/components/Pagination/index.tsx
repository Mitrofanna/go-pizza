import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

type TPaginationProps = {
  currentPage: number;
  onClickPage: any;
};

const Pagination: React.FC<TPaginationProps> = ({ currentPage, onClickPage }) => {
  return (
    <ReactPaginate
      className={styles.pagination}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => onClickPage(e.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
      previousLabel="<"
    />
  );
};

export default Pagination;
