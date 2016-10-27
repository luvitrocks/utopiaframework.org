import 'glamor/reset';
import hljs from 'highlight.js';
import css, { insertRule } from 'next/css';
import React from 'react';
import Head from 'next/head';

const utopiaCodeExample = `-- require dependencies
local Utopia = require('utopia')
local logger = require('logger')
local cors = require('cors')
local _ = require('utopia-route')

-- create app instance
local app = Utopia:new()

-- add necessary middlewares
app:use(logger('short'))
app:use(cors())
app:use(_.get('/hello/:name', function (req, res)
  res:finish('Hello, '..req.params.name..'!')
end))
app:use(function (req, res)
  res:finish('Hello, stranger!')
end)

-- start server
app:listen(3000)
print('Ready on http://localhost:3000')
`;

export default class IndexPage extends React.Component {
  componentDidMount() {
    hljs.initHighlighting();
  }

  render() {
    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <title>Utopia Framework</title>
          <link href="//unpkg.com/contrabass.css@1.0.4/dist/contrabass.min.css" rel="stylesheet" />
          <link href="//unpkg.com/griddy.css@1.0.1/dist/griddy.min.css" rel="stylesheet" />
          <link href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/styles/tomorrow.min.css" rel="stylesheet" />
          <link href="//fonts.googleapis.com/css?family=Montserrat:400,700|Roboto+Mono:400,500" rel="stylesheet" />
          <link rel="shortcut icon" type="image/png" href="/static/utopia-icon2.png" />
        </Head>
        <div>
          <header className={`center px3 py4 white mb4 relative ${hero}`}>
            <nav className={`navbar ${navbar}`}>
              <ul className={`list-reset clearfix ${navbarMenu}`}>
                <li className="left inline-block"><a className={navbarMenuBtn} href="/guide">Guide</a></li>
                <li className="left inline-block"><a className={navbarMenuBtn} href="/docs">Docs</a></li>
                <li className="left inline-block"><a className={navbarMenuBtn} href="https://github.com/luvitrocks/utopia">GitHub</a></li>
                <li className="left inline-block"><a className={navbarMenuBtn} href="https://medium.com/luvitrocks">Blog</a></li>
              </ul>
            </nav>
            <div className="relative z2">
              <h1 className="h1 caps mt4 mb0">Utopia Framework</h1>
              <p className="h3 mt1 mb2">Extensible HTTP server toolkit for Luvit I/O</p>
              <div className="mb4 mt3 mx-auto full-width">
                <a href="https://github.com/luvitrocks/utopia/#install" className="inline-block h5 button button-outline button-big white mr3 px3 b2 ultra-rounded">View on GitHub</a>
                <a href="#Examples" className="inline-block h5 button button-big bg-white px3 ultra-rounded" style={{color: '#FED764'}}>Check Examples</a>
              </div>
            </div>
            <div className={heroBackground} />
          </header>

          <div className={`mx-auto mb4 ${container}`}>
            <div className="griddy">
              <div className="griddy-col griddy-col-4">
                <div className={`p2`}>
                  <h2 className="h3 caps regular semibold">Microservices</h2>
                  <p className={featureText}>Utopia is a minimal and extendable web framework for <a href="https://luvit.io">Luvit I/O</a> that provides a robust set of tools and features for creating small and easy-to-support web applications.</p>
                </div>
              </div>
              <div className="griddy-col griddy-col-4">
                <div className={`p2`}>
                  <h2 className="h3 caps regular semibold">APIs</h2>
                  <p className={featureText}>Luvit I/O implements the same <a href="https://luvit.io/api">APIs</a> as <a href="https://nodejs.org">Node.js</a> while Utopia includes variety of HTTP utilities and middlewares. Creating stable and robust web services with them is quick and easy.</p>
                </div>
              </div>
              <div className="griddy-col griddy-col-4">
                <div className={`p2`}>
                  <h2 className="h3 caps regular semibold">Performance</h2>
                  <p className={featureText}>Utopia is benefiting from <a href="https://www.lua.org">Lua</a> lang and one of the fastest VMs in the wild, <a href="http://luajit.org/performance.html">LuaJIT</a>. The average Utopia server consumes only ~3Mb of RAM – perfect for machines with low characteristics.</p>
                </div>
              </div>
            </div>
          </div>

          <hr className={hr} />

          <div className={`mx-auto mt2 mb4 ${container}`}>
            <div className="p1 mt4">
              <h2 id="Examples" className="center mt0 mb2 caps">
                <a href="#Examples" className={exampleTitle}>Minimal Example</a>
              </h2>
              <p className={`center mx-auto mt2 mb4 pt1 ${featureText} ${exampleText}`}>Utopia application is a table containing an array of middleware functions which are composed and executed in a stack-like manner upon request. It is similar to many other middleware systems that you may have encountered such as Ruby's <a href="https://rack.github.io">Rack</a> or Node.js' <a href="https://github.com/senchalabs/connect">Connect</a>.</p>
              <pre><code className={`lua ${code}`}>{utopiaCodeExample}</code></pre>
            </div>
            <div className="center mb4 mt3 mx-auto full-width">
              <a href="https://github.com/luvitrocks/utopia/#install" className="inline-block h5 button button-outline button-big pinky mr3 px3 b2 ultra-rounded">Installation Guide</a>
              <a href="/docs" className="inline-block h5 button button-big bg-pinky white px3 ultra-rounded">Check Middlewares</a>
            </div>
          </div>

          <hr className={hr} />

          <div className={`center mx-auto mt2 mb4 ${container}`}>
          </div>
        </div>
      </div>
    );
  }
}

insertRule(`
  ::-moz-selection { background: #F65FA3; color: #fff }
  ::selection { background: #F65FA3; color: #fff }
`);
insertRule(`body, h1, h2, h3, h4, h5 {
  font-family: 'Avenir Next', 'Montserrat', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
}`);
insertRule(`a {
  color: #F65FA3;
  text-decoration: none;
}`);
insertRule(`
  .pinky { color: #F65FA3 }
  .bg-pinky { background-color: #F65FA3 }
`);
insertRule(`.semibold { font-weight: 500 }`);

const container = css({
  maxWidth: 960,
  width: '100%',
});
const hero = css({
  backgroundImage: 'linear-gradient(180deg, #F65FA3, #FED764)',
  paddingTop: 110,
  paddingBottom: 95
});
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
const navbar = css({
  height: 50,
  width: '100%',
  borderBottom: '1px solid rgba(255,255,255,.2)',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 2
});
const navbarMenu = css({
  margin: '12px auto 0',
  maxWidth: 300,
  width: '100%'
});
const navbarMenuBtn = css({
  color: 'rgba(255,255,255,.98)',
  fontWeight: 500,
  textDecoration: 'none',
  textTransform: 'uppercase',
  fontSize: 12,
  display: 'block',
  padding: '5px 15px',
  borderRadius: 50,
  letterSpacing: '.1em',
  ':hover': {
    backgroundColor: 'rgba(255,255,255,.2)'
  }
});
const featureText = css({
  color: '#666',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '28px'
});
const hr = css({
  border: 0,
  borderBottom: '1px solid #eee'
});
const code = css({
  backgroundColor: 'rgba(0,0,0,.03)',
  borderRadius: '4px',
  fontSize: '14px',
  fontFamily: 'Roboto Mono, Source Code Pro, Consolas, monospace',
  padding: '1.5em',
});
const exampleTitle = css({
  color: '#333',
  fontWeight: 600,
  textDecoration: 'none'
});
const exampleText = css({
  width: '100%',
  maxWidth: 700
});
