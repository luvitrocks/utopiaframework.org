import { insertRule } from 'next/css';

insertRule(`
  *, *:before, *:after { box-sizing: border-box }
`);
insertRule(`
  ::-moz-selection { background: #F65FA3; color: #fff }
  ::selection { background: #F65FA3; color: #fff }
`);
insertRule(`body, h1, h2, h3, h4, h5 {
  font-family: 'Avenir Next', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
}`);
insertRule(`a {
  color: #F65FA3;
  text-decoration: none;
}`);
insertRule(`
  .pinky { color: #F65FA3 !important }
  .bg-pinky { background-color: #F65FA3 !important }
`);
insertRule(`
  .semibold { font-weight: 500 !important }
`);
insertRule(`
  .semibolder { font-weight: 600 !important }
`);
insertRule(`.snippet {
  background-color: rgba(0,0,0,.038) !important;
  border-radius: 3px;
  font-size: 13px;
  font-family: Roboto Mono, Source Code Pro, Consolas, monospace;
  padding: 1px 6px;
}`);
insertRule(`.doc-content p {
  color: #666;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
}`);
insertRule(`
  .linker a { color: #333 }
`);
