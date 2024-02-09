import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('PORT') || 3000;
  await app.listen(port);
}
bootstrap();
// async function bootstrap() { ... }: This line defines an asynchronous function named bootstrap. The bootstrap function is the entry point of the application and is responsible for initializing and starting the NestJS application.const app = await NestFactory.create(AppModule);: This line creates a new Nest application instance by calling the create() method of the NestFactory class. It passes the AppModule as an argument, indicating that the application should be created based on the configuration defined in the AppModule.const configService = app.get(ConfigService);: This line retrieves an instance of the ConfigService from the Nest application instance (app). It uses the get() method to obtain an instance of the ConfigService, allowing the application to access configuration settings.
// typescript
// const port = configService.get('PORT') || 3000;: This line retrieves the value of the PORT configuration setting using the get() method of the ConfigService. If the PORT configuration setting is not defined, it defaults to port 3000.
