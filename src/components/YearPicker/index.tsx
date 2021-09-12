import React, { FC } from 'react';
import styles from './styles.module.css';

interface Props {
  year: number;
  tempYear: number;
  handleCalendarClick: (date: Date) => void;
}

const YearPicker: FC<Props> = ({ year, tempYear, handleCalendarClick }) => {
  const isDisabled = (y: string) => {
    return y.slice(0, 3) !== String(tempYear).slice(0, 3);
  };
  const getYearList = () => {
    const from = Math.floor(tempYear / 10) * 10,
      to = from + 9;
    const list = [];
    for (let i = from - 1; i <= to + 1; i++) {
      list.push(
        <button
          disabled={isDisabled(String(i))}
          key={i}
          className={`${isDisabled(String(i)) ? 'disabled' : ''}
            ${i === year ? 'selected' : ''} `}
          onClick={() => handleCalendarClick(new Date(String(i)))}
        >
          {i}
        </button>
      );
    }
    return list;
  };
  return <div className={styles.container}>{getYearList()}</div>;
};

export default YearPicker;
