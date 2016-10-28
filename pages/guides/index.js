import 'glamor/reset';
import React from 'react';
import css from 'next/css';

import '../../components/inlineStyles';
import Contents from '../../components/contents';
import withContents from '../../containers/withContents';

export default withContents(props => (
  <Contents title="Utopia Framework - Overview" {...props}>
    <h1 className="mt0 h3 caps semibolder">Overview</h1>
    <p>Utopia is a web development framework and related tools written in <a href="https://www.lua.org">Lua</a> lang and powered by <a href="https://luvit.io">Luvit I/O</a> which aims to be a smaller, more expressive, and more robust foundation for web applications and APIs. Utopia does not bundle any middleware within core, and provides an elegant suite of methods that make writing servers fast and enjoyable.</p>
  </Contents>
));
