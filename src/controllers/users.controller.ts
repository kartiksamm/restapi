import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UserDto } from '../dto/user.dto';
import { User } from '../interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
  // @Get(): This is a decorator from NestJS used to define an HTTP endpoint that handles GET requests. It //specifies that the findAll() method will be invoked when a GET request is made to the endpoint associated with this controller method.

  // async findAll(): Promise<User[]>: This is a method declaration. It defines an asynchronous function named findAll that returns a Promise. The Promise resolves to an array of User objects (User[]).

  // return this.usersService.findAll();: This line calls the findAll method of the usersService instance. The usersService is injected into the controller and is responsible for handling business logic related to users. The findAll method likely retrieves all users from the database and returns them.
  @Post()
  async create(@Body() createUserDto: UserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }
}
// @Post(): Similar to @Get(), this is a decorator used to define an HTTP endpoint that handles POST requests.

// async create(@Body() createUserDto: CreateUserDto): Promise<User>: This is another method declaration. It defines an asynchronous function named create that accepts a parameter createUserDto of type CreateUserDto. The @Body() decorator tells NestJS to extract the request body and bind it to the createUserDto parameter. This method also returns a Promise that resolves to a User object.

// return this.usersService.create(createUserDto);: This line calls the create method of the usersService instance and passes the createUserDto object as an argument. The create method likely creates a new user in the database using the provided data and returns the newly created user.
