import { Module } from '@nestjs/common';
import { UsersController } from '../../controllers/users.controller';
import { UsersService } from '../../services/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../../models/user.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
// @Module({ ... }): This is the @Module() decorator, which is used to define a NestJS module. It takes an object with configuration options as its argument.

// imports: [ MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]) ]: The imports property specifies the modules that this module relies on. In this case, it imports the MongooseModule and uses its forFeature() method to define a Mongoose model for the User entity. This allows the UsersModule to access the User model and interact with the MongoDB database.

// controllers: [UsersController]: The controllers property specifies the controllers that belong to this module. Here, it includes the UsersController, allowing the module to route HTTP requests related to users to the appropriate controller methods.

// providers: [UsersService]: The providers property specifies the providers (services) that belong to this module. Here, it includes the UsersService, making it available for dependency injection throughout the module. This allows other components, controllers, or services within the module to use the functionality provided by the UsersService.
