const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(cookieParser(['MY_SECRET_1'])); // use cookieParser

    server.all('*', (req, res) => handle(req, res));

    server.listen(8080, (err) => {
      if (err) throw err;
      // eslint-disable-next-line no-console
      console.log(`> Ready on http://localhost:8080 [${process.env.NODE_ENV}]`);
    });
  })
  .catch((ex) => {
    // eslint-disable-next-line no-console
    console.error('ERROR - app prepare()', ex.stack);
    // process.exit(1);
  });
