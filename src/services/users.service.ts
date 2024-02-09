import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../models/user.model';
import { UserDto } from '../dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async create(createUserDto: UserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }
}
// @Injectable(): This decorator marks the UsersService class as an injectable service. It allows the class to be managed by the NestJS dependency injection container.constructor(...) {}: This is the constructor method of the UsersService class. It is called when an instance of the service is created.

// @InjectModel(User.name): This decorator injects the Mongoose model for the User class into the userModel property of the service. The User.name expression retrieves the name of the Mongoose model, which is used as a key to retrieve the model from the Mongoose module.

// private readonly userModel: Model<User>: This line defines a private property named userModel of type Model<User>. The Model<User> interface represents a Mongoose model for the User class.async findAll(): Promise<User[]> { ... }: This method asynchronously retrieves all users from the MongoDB collection. It returns a Promise that resolves to an array of User objects.

// return this.userModel.find().exec();: This line uses the find() method of the Mongoose model (userModel) to query the MongoDB collection for all documents. The exec() method executes the query and returns a Promise. When the Promise resolves, it returns an array of User objects representing the retrieved users.async create(createUserDto: CreateUserDto): Promise<User> { ... }: This method asynchronously creates a new user in the MongoDB collection. It takes a CreateUserDto object as an argument and returns a Promise that resolves to a User object representing the newly created user.

// const createdUser = new this.userModel(createUserDto);: This line creates a new instance of the User model (userModel) using the data provided in the createUserDto object. It initializes the createdUser variable with the new user object.

// return createdUser.save();: This line saves the newly created user to the MongoDB collection using the save() method of the Mongoose model. It returns a Promise that resolves to the saved User object.
