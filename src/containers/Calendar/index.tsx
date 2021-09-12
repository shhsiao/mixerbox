import CalendarHeader from '@/components/CalendarHeader';
import React, { useState } from 'react';
import styles from './styles.module.css';
import { TViewMode, TBtnClick } from './model';
import { TMonth } from '@/libs/dict';

const Calendar = () => {
  const [viewMode, setViewMode] = useState<TViewMode>('date');
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [month, setMonth] = useState<TMonth>(new Date().getMonth() as TMonth);
  const [date, setDate] = useState<number>(new Date().getDate());
  const [tempYear, setTempYear] = useState<number>(year);
  const [tempMonth, setTempMonth] = useState<TMonth>(month);
  const handleViewMode = () => {
    if (viewMode === 'year') {
      return;
    }
    const newMode = viewMode === 'date' ? 'month' : 'year';
    setViewMode(newMode);
  };
  const handleBtnClick: TBtnClick = (action) => {
    switch (viewMode) {
      case 'date':
        const date = new Date(tempYear, tempMonth);
        const newDate = new Date(
          date.setMonth(
            action === 'previous' ? date.getMonth() - 1 : date.getMonth() + 1
          )
        );
        setTempYear(newDate.getFullYear());
        setTempMonth(newDate.getMonth() as TMonth);
        break;
      case 'month':
        if (action === 'previous' && tempYear - 1 >= 1970) {
          setTempYear((v) => v - 1);
        } else if (action === 'next') {
          setTempYear((v) => v + 1);
        }
        break;
      case 'year':
        if (action === 'previous' && tempYear - 10 >= 1970) {
          setTempYear((v) => v - 10);
        } else if (action === 'next') {
          setTempYear((v) => v + 10);
        }
        break;
    }
  };

  return (
    <div className={styles.container}>
      <CalendarHeader
        viewMode={viewMode}
        handleViewMode={handleViewMode}
        handleBtnClick={handleBtnClick}
        year={year}
        month={month}
        date={date}
        tempYear={tempYear}
        tempMonth={tempMonth}
      />
    </div>
  );
};

export default Calendar;