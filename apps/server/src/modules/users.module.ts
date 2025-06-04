import { Module } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UsersResolver } from '../resolvers/users.resolver';
import { MockModule } from './mock.module';
import { UserStatsModule } from './user-stats.module';

@Module({
  imports: [MockModule, UserStatsModule],
  providers: [UsersService, UsersResolver],
  exports: [UsersService],
})
export class UsersModule {}
