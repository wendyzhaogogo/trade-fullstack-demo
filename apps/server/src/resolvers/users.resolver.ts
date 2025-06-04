import { Resolver, Query, Args } from '@nestjs/graphql';
import { UsersService } from '../services/users.service';
import { User } from '../models/user.model';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User])
  async users(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Query(() => User, { nullable: true })
  async user(@Args('id') id: string): Promise<User | undefined> {
    return this.usersService.findOne(id);
  }
}
