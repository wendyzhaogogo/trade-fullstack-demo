import { Resolver, Query, Args } from '@nestjs/graphql';
import { UserStats } from '../models/user-stats.model';
import { UserStatsService } from '../services/user-stats.service';

@Resolver(() => UserStats)
export class UserStatsResolver {
  constructor(private readonly userStatsService: UserStatsService) {}

  @Query(() => UserStats)
  async userStats(@Args('userId') userId: string): Promise<UserStats> {
    return this.userStatsService.calculateUserStats(userId);
  }
}
