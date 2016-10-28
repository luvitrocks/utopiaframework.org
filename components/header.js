import css from 'next/css';
import React from 'react';

import Logo from './logo';
import Navbar from './navbar';
import Background from './background';

export default () => (
  <header className={`center white relative ${header}`}>
    <Navbar />
    <Logo />
    <Background />
  </header>
);

const header = css({
  backgroundImage: 'linear-gradient(90deg, #F65FA3 , #FED764)',
  height: 50
});
