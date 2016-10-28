import React from 'react';

const guides = [
  {url: '/guides', title: 'Overview'},
  {url: '/guides/installation', title: 'Installation'},
  {url: '/guides/getting-started', title: 'Getting Started'},
  {url: '/guides/middlewares', title: 'Middlewares'},
  {url: '/guides/routing', title: 'Routing'},
  {url: '/guides/deployment', title: 'Deployment'},
  {url: '/guides/community', title: 'Community'}
];

const docs = [
  {url: '/docs', title: 'Core'},
  {url: '/docs/favicon', title: 'Favicon'},
  {url: '/docs/logger', title: 'Logger'},
  {url: '/docs/request-query', title: 'Request Query'},
  {url: '/docs/body-parser', title: 'Body Parser'},
  {url: '/docs/cookie-parser', title: 'Cookie Parser'},
  {url: '/docs/route', title: 'Route'},
  {url: '/docs/cors', title: 'CORS'},
  {url: '/docs/json-response', title: 'JSON Response'},
  {url: '/docs/response-methods', title: 'Response Methods'},
  {url: '/docs/static', title: 'Static'},
  {url: '/docs/directory', title: 'Directory'},
  {url: '/docs/method-override', title: 'Method Override'},
  {url: '/docs/timeout', title: 'Timeout'},
  {url: '/docs/response-time', title: 'Response Time'}
];

export default function withContents (WrappedComponent) {
  class WithContents extends React.Component {
    static async getInitialProps ({ req }) {
      return req
        ? { path: req.url }
        : { path: window.location.pathname }
    }

    render() {
      const isGuides = this.props.path.indexOf('/guides') !== -1;

      return (
        <WrappedComponent
          {...this.props}
          linksTitle={isGuides ? 'Guides' : 'Docs'}
          links={isGuides ? guides : docs}
        />
      );
    }
  }

  return WithContents;
}

