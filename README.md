# textile-engine

[Textile](http://en.wikipedia.org/wiki/Textile_(markup_language)) rendering,
powered by [textile-js](https://github.com/borgar/textile-js).

## Installation

    $ npm install textile-engine

## Usage

textile-engine is an [Express](http://expressjs.com/)-compatible template engine
for rendering Textile.  It also has a `render` function for integration with
other frameworks.

Register `textile-engine` as the template engine for files ending with a
".textile" extension.

    app.engine('textile', require('textile-engine').renderFile);

Render a response using Textile.

    res.render('hello.textile');

## Tests

    $ npm install --dev
    $ make test

[![Build Status](https://secure.travis-ci.org/jaredhanson/textile-engine.png)](http://travis-ci.org/jaredhanson/textile-engine)

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

(The MIT License)

Copyright (c) 2012 Jared Hanson

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
