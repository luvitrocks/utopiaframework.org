import 'glamor/reset';
import React from 'react';
import css from 'next/css';
import Head from 'next/head';

import '../../components/inlineStyles';
import Logo from '../../components/Logo';
import Navbar from '../../components/navbar';
import Background from '../../components/background';

export default () => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <title>Utopia Framework - Guide</title>
      <link href="//unpkg.com/contrabass.css@1.0.4/dist/contrabass.min.css" rel="stylesheet" />
      <link href="//unpkg.com/griddy.css@1.0.1/dist/griddy.min.css" rel="stylesheet" />
      <link href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/styles/tomorrow.min.css" rel="stylesheet" />
      <link href="//fonts.googleapis.com/css?family=Montserrat:400,700|Roboto+Mono:400,500" rel="stylesheet" />
      <link rel="shortcut icon" type="image/png" href="/static/utopia-icon2.png" />
    </Head>

    <div>
      <header className={`center white relative ${header}`}>
        <Navbar />
        <Logo />
        <Background />
      </header>

      <div>
        Guide Utopia Framework!
        <a href="/guide" className="inline-block h5">Overview</a>
        <a href="/guide/installation" className="inline-block h5">Installation</a>
        <a href="/guide/community" className="inline-block h5">Community</a>
        <a href="/guide/getting-started" className="inline-block h5">Getting Started</a>
        <a href="/guide/middlewares" className="inline-block h5">Middlewares</a>
        <a href="/guide/routing" className="inline-block h5">Routing</a>
        <a href="/guide/deployment" className="inline-block h5">Deployment</a>
      </div>
    </div>
  </div>
);

const header = css({
  backgroundImage: 'linear-gradient(90deg, #F65FA3 , #FED764)',
  height: 50,
  bordeBottom: '1px solid rgba(0,0,0,.1)',
  boxShadow: '0 0 1px 1px rgba(0,0,0,.1)'
});
