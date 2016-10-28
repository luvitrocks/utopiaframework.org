import css from 'next/css';
import React from 'react';

import Logo from './Logo';
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
  height: 50,
  bordeBottom: '1px solid rgba(0,0,0,.1)',
  boxShadow: '0 0 1px 1px rgba(0,0,0,.1)'
});
