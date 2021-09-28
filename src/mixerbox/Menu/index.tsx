import React from 'react';
import styles from './styles.module.css';
import HomeIcon from '@material-ui/icons/Home';
import TableChartIcon from '@material-ui/icons/TableChart';
import LanguageIcon from '@material-ui/icons/Language';
import YouTubeIcon from '@material-ui/icons/YouTube';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';

const Menu = ({ selected, setSelected }) => {
  const getMenu = () => {
    const itemList = [
      { icon: <HomeIcon />, text: '熱門報導' },
      { icon: <TableChartIcon />, text: '台灣' },
      { icon: <TableChartIcon />, text: '中國' },
      { icon: <LanguageIcon />, text: '全球' },
      { icon: <YouTubeIcon />, text: '娛樂' },
      { icon: <CreditCardIcon />, text: '商業' },
      { icon: <FitnessCenterIcon />, text: '運動' },
      { icon: <LocalPhoneIcon />, text: '科技' },
    ];
    return itemList.map((v, i) => (
      <div
        key={v.text}
        className={`${styles.item} ${
          v.text === selected ? styles.selected : ''
        }`}
        onClick={() => setSelected(v.text)}
      >
        {v.icon}
        <span className={'hidden'}>{v.text}</span>
      </div>
    ));
  };
  return <div className={`overflow ${styles.menu}`}>{getMenu()}</div>;
};
export default Menu;
