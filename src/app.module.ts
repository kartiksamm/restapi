import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: process.env.MONGODB_URI,
      }),
    }),
    UsersModule,
  ],
})
export class AppModule {}
// @Module({ ... }): This is the @Module() decorator, which is used to define a NestJS module. It takes an object with configuration options as its argument.

// imports: [ ... ]: The imports property specifies the modules that this module relies on. In this case, it imports the ConfigModule, MongooseModule, and UsersModule. This allows the AppModule to use functionality provided by these modules, such as configuration management, database connection setup, and user-related functionality.

// MongooseModule.forRootAsync({ ... }): This line configures the Mongoose module using the forRootAsync() method. The useFactory option allows for asynchronous configuration of the Mongoose module. Here, it defines a factory function that asynchronously returns an object with the MongoDB connection URI (uri) obtained from the MONGODB_URI environment variable.

// UsersModule: This line includes the UsersModule in the imports array, allowing the AppModule to access the functionality provided by the UsersModule. This likely includes user-related components, controllers, and services.
