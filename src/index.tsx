import React from 'react';
import ReactDOM from 'react-dom';
import News from '@/containers/News';
import './styles.css';

const App = () => (
  <>
    <News />
  </>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
