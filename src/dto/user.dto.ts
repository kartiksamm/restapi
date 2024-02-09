export class UserDto {
  readonly name: string;
  readonly email: string;
}
// export class: This keyword combination exports the class CreateUserDto so that it can be imported and used in other parts of the application.

// CreateUserDto: This is the name of the class. In NestJS, DTOs (Data Transfer Objects) are used to define the structure of data that will be sent over the network, typically in HTTP requests and responses.readonly: This keyword is used to declare that the property name is read-only, meaning its value cannot be changed once it's initialized. It's a good practice to mark DTO properties as readonly to prevent accidental modification.

// name: string;: This line defines a property named name of type string. In this context, name likely represents the name of the user being created.
