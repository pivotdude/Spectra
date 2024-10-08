import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ConfirmRegisterCodeInput {
  @Field()
  code: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  name: string;

  @Field()
  login: string;
}
