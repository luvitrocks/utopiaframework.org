import 'glamor/reset';
import React from 'react';
import css from 'next/css';

import '../../components/inlineStyles';
import Head from '../../components/head';
import Header from '../../components/header';

export default () => (
  <div>
    <Head title="Utopia Framework - Overview" />

    <div>
      <Header />

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
