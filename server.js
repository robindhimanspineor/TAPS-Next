const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;
    if (pathname === 'validatephonenumber') {
      return res.json({
        success: true,
        data: {
          is_valid: true,
          line_type: 'Landline' || 'FixedVOIP' || 'Mobile',
          message: 'Phone Validation Bypassed for QA and Dev environments',
        },
      });
    }
    handle(req, res, parsedUrl);

    return false;
  }).listen(4000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:4000');
  });
});
