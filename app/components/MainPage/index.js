import React from 'react';

import style from './style.css';

import MainForm from './forms/mainForm';

const MainPage = () => {
  return (
    <div className={style.page}>
      <MainForm />
    </div>
  );
};

export default MainPage;
