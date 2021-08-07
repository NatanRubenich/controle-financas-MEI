import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import dotenv from 'dotenv';
import path from 'path';

  // ENV
  const dotenvResultado = dotenv.config();
  if (dotenvResultado.error) {
    throw dotenvResultado.error;
  }

  const transport = nodemailer.createTransport({
    host: process.env.MAILER_HOST,
    port: process.env.MAILER_PORT,
    auth: {
      user: process.env.MAILER_USER,
      pass: process.env.MAILER_PASS
    }
  });

  transport.use('compile', hbs({
    viewEngine: {
      defaultLayout: undefined,
      partialsDir: path.resolve('./modules/resources')
    },
    viewPath: path.resolve('./modules/resources'),
    extName: '.html',
  }));

export default transport;