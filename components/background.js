import css from 'next/css';
import React from 'react';

export default () => (
  <div className={heroBackground} />
);

const heroBackground = css({
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  zIndex: 1,
  opacity: .05,
  backgroundImage: 'url(/static/bg-pattern.png)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center'
});
