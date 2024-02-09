import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  name: string;

  @Prop()
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
// export const UserSchema = SchemaFactory.createForClass(User);: This line creates a Mongoose schema (UserSchema) for the User class using the SchemaFactory.createForClass() method. This method takes the class User as an argument and generates a Mongoose schema based on the properties defined with @Prop() decorators within the class.
