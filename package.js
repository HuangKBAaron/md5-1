/*
License

(The MIT License)

Copyright (c) 2014 iReal

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the 'Software'), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Package.describe({
  name: 'raix:md5',
  summary: 'FastMD5 by @iReal based on Joseph Myers`s high-performance md5. (wrapped for meteor)',
  version: '1.0.2', // theres only one RC1 sha aa796d899aabd141693b96959cb737c3b6c4df07
  git: 'https://github.com/iReal/FastMD5.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.export('MD5');
  api.addFiles('md5.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('raix:md5');
  api.addFiles('md5-tests.js');
});
