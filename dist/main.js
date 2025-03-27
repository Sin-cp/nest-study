"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const http_exception_filter_1 = require("./filters/http-exception.filter");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const logger = new common_1.Logger();
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
    });
    app.setGlobalPrefix('api');
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter(logger));
    await app.listen(process.env.PORT ?? 3000);
    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}
bootstrap();
//# sourceMappingURL=main.js.map