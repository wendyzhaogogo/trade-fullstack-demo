import { Injectable } from '@nestjs/common';
import { MockService } from './mock.service';
import { UserStats } from '../models/user-stats.model';

@Injectable()
export class UserStatsService {
  constructor(private readonly mockService: MockService) {}

  async calculateUserStats(userId: string): Promise<UserStats> {
    const stats = await this.mockService.calculateUserStats(userId);
    const referrals = await this.mockService.getReferrals(userId);

    const referralCommissions = await Promise.all(
      referrals.map(async (referralId) => {
        const referralStats =
          await this.mockService.calculateUserStats(referralId);
        return referralStats.totalFees * 0.2;
      }),
    );

    const totalCommission = referralCommissions.reduce(
      (sum, commission) => sum + commission,
      0,
    );

    return {
      totalTradingVolume: stats.totalTradingVolume,
      totalFees: stats.totalFees,
      totalCommission,
    };
  }
}
