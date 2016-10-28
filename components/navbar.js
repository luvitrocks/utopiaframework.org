import css from 'next/css';
import React from 'react';

export default () => (
  <nav className={`navbar ${navbar}`}>
    <ul className={`list-reset clearfix ${navbarMenu}`}>
      <li className="left inline-block"><a href="/guide" className={navbarMenuBtn}>Guide</a></li>
      <li className="left inline-block"><a href="/docs" className={navbarMenuBtn}>Docs</a></li>
      <li className="left inline-block"><a className={navbarMenuBtn} href="https://github.com/luvitrocks/utopia">GitHub</a></li>
      <li className="left inline-block"><a className={navbarMenuBtn} href="https://medium.com/luvitrocks">Blog</a></li>
    </ul>
  </nav>
);

const navbar = css({
  height: 50,
  width: '100%',
  borderBottom: '1px solid rgba(255,255,255,.2)',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 2
});
const navbarMenu = css({
  margin: '12px auto 0',
  maxWidth: 300,
  width: '100%'
});
const navbarMenuBtn = css({
  color: 'rgba(255,255,255,.98)',
  fontWeight: 500,
  textDecoration: 'none',
  textTransform: 'uppercase',
  fontSize: 12,
  display: 'block',
  padding: '5px 15px',
  borderRadius: 50,
  letterSpacing: '.1em',
  ':hover': {
    backgroundColor: 'rgba(255,255,255,.2)'
  }
});
