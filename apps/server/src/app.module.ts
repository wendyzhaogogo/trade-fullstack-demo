import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users.module';
import { UserStatsModule } from './modules/user-stats.module';
import { MockModule } from './modules/mock.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: true,
    }),
    UsersModule,
    UserStatsModule,
    MockModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
