"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const path_1 = require("path");
const app_module_1 = require("./app.module");
const ejs_1 = require("ejs");
const Session = require("express-session");
const flash = require("connect-flash");
const passport_1 = require("passport");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.set('views', path_1.join(__dirname, 'views'));
    app.engine('html', ejs_1.renderFile);
    app.set('view engine', 'html');
    app.use(Session({
        secret: 'softpro',
        resave: false,
        saveUninitialized: false,
    }));
    app.use(passport_1.initialize());
    app.use(passport_1.session());
    app.use(flash());
    app.setBaseViewsDir(path_1.join(__dirname, '..', 'views'));
    await app.listen(3000, () => {
        console.log('[Nest] : Servidor corriendo');
    });
}
bootstrap();
//# sourceMappingURL=main.js.map