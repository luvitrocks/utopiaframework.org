import { insertRule } from 'next/css';

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
  .pinky { color: #F65FA3 !important }
  .bg-pinky { background-color: #F65FA3 !important }
`);
insertRule(`.semibold { font-weight: 500 !important }`);
