import React from "react";
import styles from './styles.module.css';

const Header = ()=>{
    return (
        <>
        <div className={styles.wrapper} >
            <img src="https://1000logos.net/wp-content/uploads/2017/12/Bing-logo.png" height="50" width="150"/>
            <input type="string" className={styles.search}/>
        </div>
        <div className={styles.line} />
        </>
    )
}
export default Header