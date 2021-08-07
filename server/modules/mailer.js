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
    host: 'smtp.mailtrap.io', //process.env.MAILER_HOST,
    port: 2525, //process.env.MAILER_PORT,
    auth: {
      user: '8ec28e2743cdfe', //process.env.MAILER_USER,
      pass: '3bf3fda930c039' //process.env.MAILER_PASS
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