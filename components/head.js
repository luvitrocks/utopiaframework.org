import React from 'react';
import Head from 'next/head';

export default ({ title = 'Utopia Framework' }) => (
  <Head>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <link href="//unpkg.com/contrabass.css@1.0.4/dist/contrabass.min.css" rel="stylesheet" />
    <link href="//unpkg.com/griddy.css@1.0.1/dist/griddy.min.css" rel="stylesheet" />
    <link href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/styles/tomorrow.min.css" rel="stylesheet" />
    <link href="//fonts.googleapis.com/css?family=Montserrat:400,700|Roboto+Mono:400,500" rel="stylesheet" />
    <link href="/static/utopia-icon2.png" rel="shortcut icon" type="image/png" />
  </Head>
);
