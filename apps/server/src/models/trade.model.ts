import { ObjectType, Field, ID, Float } from '@nestjs/graphql';

@ObjectType()
export class Trade {
  @Field(() => ID)
  id: string;

  @Field(() => ID)
  userId: string;

  @Field(() => Float)
  amount: number;

  @Field(() => Float)
  fee: number;

  @Field()
  timestamp: Date;
}
