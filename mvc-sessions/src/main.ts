// main.ts
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { renderFile } from 'ejs';

import * as Session from 'express-session';
import flash = require('connect-flash');
import { initialize, session } from 'passport';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.set('views', join(__dirname, 'views'));
  app.engine('html', renderFile);
  app.set('view engine', 'html');

  app.use(
    Session({
      secret: 'softpro',
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.use(initialize());
  app.use(session());
  app.use(flash());

  //app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  
  
  await app.listen(3000, () => {
    console.log('[Nest] : Servidor corriendo');
  });
}
bootstrap();
