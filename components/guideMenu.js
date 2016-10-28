import css from 'next/css';
import React from 'react';

export default ({ active, links, linksTitle }) => (
  <div className="menu">
    <h4 className={heading}>{linksTitle}</h4>
    <ul className="list-reset m0">
      {links.map(link => {
        return (
          <li key={link.url}>
            <a href={link.url} className={`${menuItem} ${active === link.url ? menuItemActive : ''}`}>
              {link.title}
            </a>
          </li>
        );
      })}
    </ul>
  </div>
);

const heading = css({
  marginTop: '5px',
  fontWeight: 600,
  textTransform: 'uppercase',
  fontSize: '11px',
  marginBottom: '10px',
  color: '#bbb',
  letterSpacing: '.1em'
});
const menuItem = css({
  padding: '3px 0',
  display: 'block',
  color: '#666',
  position: 'relative',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontSize: '15px'
});
const menuItemActive = css({
  fontWeight: 600,
  color: '#7f8c8d'
});
