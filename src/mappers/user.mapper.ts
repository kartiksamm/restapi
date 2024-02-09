import { User } from '../interfaces/user.interface';
import { UserDto } from '../dto/user.dto';

export class UserMapper {
  static toDto(entity: User): UserDto {
    return {
      name: entity.name,
      email: entity.email,
    };
  }

  static toEntity(dto: UserDto): User {
    return {
      name: dto.name,
      email: dto.email,
    };
  }
}
// static toDto(entity: User): UserDto { ... }: This line defines a static method named toDto within the UserMapper class. Static methods are methods that are called on the class itself rather than on instances of the class. The toDto method takes a parameter entity of type User, representing a user object, and returns a UserDto object. Inside the method, it creates a new UserDto object with properties name and email mapped from the entity parameter.static toEntity(dto: UserDto): User { ... }: This line defines another static method named toEntity within the UserMapper class. Similar to the toDto method, the toEntity method takes a parameter dto of type UserDto, representing a DTO object, and returns a User object. Inside the method, it creates a new User object with properties name and email mapped from the dto parameter.
// In summary, the UserMapper class provides methods for mapping between User objects and UserDto objects. The toDto method converts a User object to a UserDto object, while the toEntity method converts a UserDto object to a User object. These mapping methods are useful for transferring and transforming data between different parts of the application, such as between controllers, services, and repositories.
// The `UserMapper` class and its methods, `toDto` and `toEntity`, are examples of the Mapper pattern, which is commonly used in software development, especially in scenarios where data needs to be transformed between different formats or representations.

// Here's why we use a Mapper class like `UserMapper`:

// 1. **Separation of Concerns**: The Mapper pattern separates the concerns of data transformation from other parts of the application logic. It encapsulates the logic for mapping between different data structures (in this case, between `User` and `UserDto`), making the codebase more modular and maintainable.

// 2. **Reusability**: By encapsulating the mapping logic in a separate class, such as `UserMapper`, we can reuse it across multiple parts of the application. For example, if there are other components or services that need to perform the same mapping, they can simply use the `UserMapper` class rather than duplicating the mapping logic.

// 3. **Testability**: The Mapper class can be easily unit tested to ensure that it correctly transforms data between different formats. This improves the overall testability of the application and makes it easier to verify the correctness of the mapping logic.

// 4. **Flexibility**: If the mapping logic needs to change in the future (for example, due to changes in the data structures or business requirements), we can make the necessary modifications in a single place (i.e., the `UserMapper` class) without affecting other parts of the application.

// While it's technically possible to define mapping logic without using a dedicated Mapper class, doing so can lead to several drawbacks, including:

// - **Code Duplication**: Without a Mapper class, the mapping logic would need to be duplicated across multiple parts of the application, leading to code redundancy and increased maintenance overhead.

// - **Reduced Modularity**: Mixing mapping logic with other application logic can reduce the modularity of the codebase, making it harder to understand and maintain.

// - **Difficulty in Testing**: Without a dedicated Mapper class, testing the mapping logic in isolation can be challenging, as it may be tightly coupled with other parts of the application.

// Overall, using a dedicated Mapper class like `UserMapper` offers several advantages in terms of code organization, reusability, testability, and flexibility, making it a common practice in software development, especially in applications with complex data transformation requirements.
// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

// @Schema()
// export class Product extends Document {
//   @Prop()
//   name: string;

//   @Prop()
//   price: number;
// }

// export const ProductSchema = SchemaFactory.createForClass(Product);
// export class ProductDto {
//   name: string;
// }
// import { Product } from '../schemas/product.schema';
// import { ProductDto } from '../dto/product.dto';

// export class ProductMapper {
//   static toDto(entity: Product): ProductDto {
//     return {
//       name: entity.name,
//     };
//   }
// }
// In this example, the ProductMapper class is responsible for converting a Product entity to a ProductDto object. It extracts the name property from the Product entity and creates a new ProductDto object with only the name property.

// Example 2: Mapping from External API Response to DTOs
// Suppose we need to consume data from an external API and transform it into DTOs that our application understands.

// External API Response Schema (external-api.schema.ts):interface ExternalApiResponse {
//   id: string;
//   title: string;
//   description: string;
// }
// export class ProductDto {
//   id: string;
//   title: string;
// }
// import { ExternalApiResponse } from '../schemas/external-api.schema';
// import { ProductDto } from '../dto/product.dto';

// export class ExternalApiMapper {
//   static toProductDto(response: ExternalApiResponse): ProductDto {
//     return {
//       id: response.id,
//       title: response.title,
//     };
//   }
// }
// In this example, the ExternalApiMapper class transforms the response from the external API into a ProductDto object that our application can consume. It extracts the id and title properties from the API response and creates a new ProductDto object with those properties.

// These examples demonstrate how the Mapper pattern can be used in conjunction with schemas in a NestJS application to transform data between different formats or representations. The Mapper pattern helps keep the codebase clean, modular, and maintainable by separating concerns related to data transformation.
