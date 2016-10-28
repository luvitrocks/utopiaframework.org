import css from 'next/css';
import React from 'react';

export default ({ children }) => (
  <div className={`mx-auto px2 mt3 mb4 ${container}`}>
    {children}
  </div>
);

const container = css({
  width: '100%',
  maxWidth: 960
});
