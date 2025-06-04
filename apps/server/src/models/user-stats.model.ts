import { ObjectType, Field, Float } from '@nestjs/graphql';

@ObjectType()
export class UserStats {
  @Field(() => Float)
  totalTradingVolume: number;

  @Field(() => Float)
  totalFees: number;

  @Field(() => Float)
  totalCommission: number;
}
