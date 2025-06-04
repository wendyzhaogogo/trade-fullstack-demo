import { Module } from '@nestjs/common';
import { UserStatsService } from '../services/user-stats.service';
import { UserStatsResolver } from '../resolvers/user-stats.resolver';
import { MockModule } from './mock.module';

@Module({
  imports: [MockModule],
  providers: [UserStatsService, UserStatsResolver],
  exports: [UserStatsService],
})
export class UserStatsModule {}
