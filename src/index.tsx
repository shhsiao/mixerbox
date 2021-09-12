import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from '@/containers/Calendar';
import './styles.css';

const App = () => (
  <>
    <Calendar />
  </>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
