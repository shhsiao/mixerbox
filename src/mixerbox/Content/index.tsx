import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { getDiffTime } from '@/libs/utils';
const Content = ({ selected }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchContent = () => {
      return fetch(
        'https://newsapi.org/v2/top-headlines?country=tw&apiKey=c14ac1132c5b4fabac7ee0bb1818ea79'
      )
        .then((d) => d.json())
        .then((v) => {
          console.log(v);
          setData(v.articles);
        });
    };
    fetchContent();
  }, []);
  return (
    <div className="overflow">
      <div>{selected}</div>
      <div className={`${styles.grid} grid`}>
        {data.map((v, i) => {
          return (
            <div key={v.content + i} className={styles.border}>
              <img src={v.urlToImage} width="100%" />
              <div className={styles.title}>{v.title}</div>
              <div className={styles.info}>
                <div className={styles.author}>{v.author}</div>
                <div className={styles.time}>
                  ・{getDiffTime(v.publishedAt)} 分鐘
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Content;
