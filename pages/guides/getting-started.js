import 'glamor/reset';
import React from 'react';
import css from 'next/css';

import '../../components/inlineStyles';
import Contents from '../../components/contents';
import withContents from '../../containers/withContents';

export default withContents(props => (
  <Contents title="Utopia Framework - Getting Started" {...props}>
    <h1 className="mt0 h3 caps semibolder">Getting Started</h1>
  </Contents>
));
