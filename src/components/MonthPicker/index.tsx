import React, { FC } from 'react';
import { Months, TMonth } from '@/libs/dict';
import styles from './styles.module.css';

interface Props {
  year: number;
  month: TMonth;
  tempYear: number;
  tempMonth: TMonth;
  handleCalendarClick: (m: Date) => void;
}
const MonthPicker: FC<Props> = ({ year, month, tempYear, handleCalendarClick }) => {
  const getMonthList = () => {
    const list = Object.keys(Months).map((v) => +v) as TMonth[];
    return list
      .map((v) => new Date(tempYear, v))
      .map((v) => (
        <button
          className={`${
            v.getFullYear() === year && v.getMonth() === month ? 'selected' : ''
          }`}
          key={Months[v.getMonth() as TMonth]}
          onClick={() =>
            handleCalendarClick(new Date(tempYear, v.getMonth() as TMonth))
          }
        >
          {Months[v.getMonth() as TMonth]}
        </button>
      ));
  };
  return <div className={styles.container}>{getMonthList()}</div>;
};

export default MonthPicker;
