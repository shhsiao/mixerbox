import React from 'react';
import styles from './styles.module.css';
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <img
          src="https://1000logos.net/wp-content/uploads/2017/12/Bing-logo.png"
          height="50"
          width="150"
        />
        <div className={styles.search}>
          <input type="text" className={styles.input} />
          <div className={styles.icon}>
            <SearchIcon color="primary" />
          </div>
        </div>
      </div>
      <div className={styles.line} />
    </>
  );
};
export default Header;
