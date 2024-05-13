import React, { useContext, useRef } from 'react';

import styles from './Search.module.scss';
import Context from '../../context';

function Search() {
  const { searchValue, setSearchValue } = useContext(Context);
  const inputRef = useRef();

  const onClickClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  return (
    <div className={styles.search}>
      <input
        ref={inputRef}
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.field}
        id="search"
        type="text"
        placeholder="Поиск"></input>
      <label htmlFor="search" className={styles.label}>
        Поиск...
      </label>
      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 18 18"
        fill="#f2f2f2">
        <path d="m17.7 16.06-3.48-3.48a7.63 7.63 0 0 0 1.53-4.7c0-4.4-3.48-7.88-7.88-7.88A7.81 7.81 0 0 0 0 7.88c0 4.4 3.48 7.87 7.88 7.87 1.73 0 3.37-.61 4.7-1.53l3.48 3.47c.2.2.4.31.82.31.6 0 1.12-.51 1.12-1.13 0-.2-.1-.5-.3-.81ZM2.24 7.88a5.67 5.67 0 0 1 5.63-5.63 5.67 5.67 0 0 1 5.62 5.63 5.67 5.67 0 0 1-5.63 5.62 5.67 5.67 0 0 1-5.62-5.63Z" />
      </svg>
      {searchValue && (
        <svg
          onClick={onClickClear}
          className={styles.clear}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
          <path d="M5.3,18.7C5.5,18.9,5.7,19,6,19s0.5-0.1,0.7-0.3l5.3-5.3l5.3,5.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3   c0.4-0.4,0.4-1,0-1.4L13.4,12l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L12,10.6L6.7,5.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4   l5.3,5.3l-5.3,5.3C4.9,17.7,4.9,18.3,5.3,18.7z" />
        </svg>
      )}
    </div>
  );
}

export default Search;
