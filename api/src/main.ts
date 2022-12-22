import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication> (
    AppModule,
  );
  const hbs = require('hbs');
  // const exhbs = require('express-handlebars');
  app.useStaticAssets(join(__dirname, '..' , 'public'));
  app.useStaticAssets(join(__dirname, '..' , 'views'));
  app.setViewEngine('hbs');
  hbs.registerPartials(join(__dirname, '..', '/views/partials'));
  app.enableCors({
    origin: 'https://chessvote-frontend.vercel.app',
    credentials: true,
  })
  app.useStaticAssets(join(__dirname, '..' , '/public/images'));
  // app.engine('handlebars', exhbs({defaultLayout: 'master'}))
  await app.listen(3000);
}
bootstrap();
