import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';

import style from './style.scss';

const Header = () => {
  return (
    <div className={style.header}>
      <AppBar title="Test" className="appBar" />
    </div>
  );
};

export default Header;
