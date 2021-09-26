import React from "react";
import styles from './styles.module.css';

const Menu = ({selected, setSelected})=>{
    const getMenu = () =>{
        const itemList = ['熱門報導','台灣','中國','全球','娛樂','商業','運動','科技'];
        return itemList.map((v,i)=><div key={v} className={`${styles.item} ${v===selected?styles.selected:''}`}
    onClick={(()=>setSelected(v))}>{v}</div>)
    }
return <div className={styles.menu}>{getMenu()}</div>
}
export default Menu;