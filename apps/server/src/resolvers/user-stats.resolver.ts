/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Resolver, Query } from '@nestjs/graphql';
import { UserStats } from '../models/user-stats.model';
import { UserStatsService } from '../services/user-stats.service';
import { CurrentUser } from '../decorators/current-user.decorator';

@Resolver(() => UserStats)
export class UserStatsResolver {
  constructor(private readonly userStatsService: UserStatsService) {}

  @Query(() => UserStats)
  async userStats(@CurrentUser() userId: string): Promise<UserStats> {
    try {
      return await this.userStatsService.calculateUserStats(userId);
    } catch (error: unknown) {
      throw new Error(
        `Failed to calculate user stats: ${(error as Error).message}`,
      );
    }
  }
}
