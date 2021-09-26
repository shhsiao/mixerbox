import React from "react";
import styles from './styles.module.css';

const Footer = ()=>{
    const getFooter = () =>{
        const itemList = ['隱私權和Cookie','法律聲明','廣告','關於我們的廣告','說明','意見反應','@ 2021 Microsoft'];
        return itemList.map((v,i)=><div key={v}
        className={`${styles.item} ${i===itemList.length-1?styles.last:''}`}>{v}</div>)
    }
return <div className={styles.footer}>{getFooter()}</div>
}
export default Footer;