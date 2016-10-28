import React from 'react';

import Head from './head';
import Header from './header';
import Container from './container';
import Menu from './guideMenu';

export default ({ path, links, linksTitle, title, children }) => (
  <div>
    <Head title={title} />

    <div>
      <Header />

      <Container>
        <div className="griddy">
          <div className="griddy-col griddy-col-3">
            <Menu active={path} links={links} linksTitle={linksTitle} />
          </div>

          <div className="griddy-col griddy-col-9 border-left">
            <div className="doc-content pl3">
              {children}
            </div>
          </div>
        </div>
      </Container>
    </div>
  </div>
);
