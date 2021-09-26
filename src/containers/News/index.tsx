
import React, { FC, useState } from 'react';
import Header from '@/mixerbox/Header';
import styles from './styles.module.css';
import Footer from '@/mixerbox/Footer';
import Menu from '@/mixerbox/Menu';
import Content from '@/mixerbox/Content';
const News:FC = ()=>{
    const [selected, setSelected] = useState('熱門報導');
    return <div>
                <div className = {styles.wrapper}>
                    <Header />
                    <div className={styles.content}>
                        <Menu selected={selected} setSelected={setSelected}/>
                        <Content selected={selected}/>
                    </div>
                </div>
                <div className={styles.footer}>
                <Footer />
                </div>
            </div>
}
export default News;