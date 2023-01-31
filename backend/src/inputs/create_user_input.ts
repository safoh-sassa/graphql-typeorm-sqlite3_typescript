import { InputType, Field } from 'type-graphql';
import { IsEmail } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field()
  nickname: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  password: string;
}
