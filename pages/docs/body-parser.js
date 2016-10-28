import 'glamor/reset';
import React from 'react';
import css from 'next/css';

import '../../components/inlineStyles';
import Code from '../../components/code';
import Contents from '../../components/contents';
import withContents from '../../containers/withContents';

export default withContents(props => (
  <Contents title="Utopia Framework - Body-parser documentation" {...props}>
    <h1 className="mt0 h3 caps semibolder">Body Parser</h1>
    <p>Parse incoming request bodies in a middleware before your handlers, available under the <code className="snippet">req.body</code> property.</p>
    <p>This does not handle multipart bodies, due to their complex and typically large nature.</p>
    <h2 id="install" className="h4 mt3 caps semibolder linker"><a href="#install">Install</a></h2>
    <Code lang="bash">{install}</Code>
    <h2 id="api" className="h4 mt3 caps semibolder linker"><a href="#api">API</a></h2>
    <Code lang="lua">{api}</Code>
    <p>The bodyParser table exposes various factories to create middlewares. All middlewares will populate the <code className="snippet">req.body</code> property with the parsed body or an empty table (<code className="snippet">{'{}'}</code>) if there was no body to parse (or an error was returned).</p>
    <h2 id="examples" className="h4 mt3 caps semibolder linker"><a href="#examples">Examples</a></h2>
    <p>This example demonstrates adding a generic JSON and URL-encoded parser as a top-level middleware, which will parse the bodies of all incoming requests. This is the simplest setup.</p>
    <Code lang="lua">{example}</Code>
    <p>All the parsers accept a type option which allows you to change the Content-Type that the middleware will parse.</p>
    <Code lang="lua">{parsers}</Code>
  </Contents>
));

const api = `local bodyParser = require('body-parser')`;
const install = 'lit install voronianski/body-parser';
const example = `local json = requrie('json')
local Utopia = require('utopia')
local bodyParser = require('body-parser')

local app = Utopia:new()

-- parse application/x-www-form-urlencoded
app:use(bodyParser.urlencoded())

-- parse application/json
app:use(bodyParser.json())

app:use(function (req, res)
  res:finish('you posted: '..json.stringify(req.body, {indent = 2}))
end)

app:listen(3000)`;
const parsers = `-- parse various different custom JSON types as JSON
app:use(bodyParser.json({type = 'application/*+json'}))

-- parse some custom thing into a Buffer
app:use(bodyParser.raw({type = 'application/vnd.custom-type'}))

-- parse an HTML body into a string
app:use(bodyParser.text({type = 'text/html'}))`;
