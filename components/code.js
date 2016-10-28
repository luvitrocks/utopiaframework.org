import css from 'next/css';
import React from 'react';
import Highlight from 'react-highlight';

export default ({ lang, children }) => (
  <Highlight className={`${lang} ${code}`}>
    {children}
  </Highlight>
);

const code = css({
  backgroundColor: 'rgba(0,0,0,.03) !important',
  borderRadius: '4px',
  fontSize: '14px',
  fontFamily: 'Roboto Mono, Source Code Pro, Consolas, monospace',
  padding: '1.5em !important',
});
