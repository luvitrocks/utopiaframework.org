import css from 'next/css';
import React from 'react';

export default ({ href = '/' }) => (
  <a href={href} className={`h5 caps white bold block ${logo}`}>Utopia Framework</a>
);

const logo = css({
  position: 'absolute',
  top: 16,
  left: 30,
  zIndex: 2
});
