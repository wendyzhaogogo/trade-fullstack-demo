import { Injectable } from '@nestjs/common';
import { User } from '../models/user.model';
import { MockService } from './mock.service';

@Injectable()
export class UsersService {
  constructor(private readonly mockService: MockService) {}

  async findAll(): Promise<User[]> {
    const users = await this.mockService.getUsers();
    return users.map((user) => ({
      ...user,
      referrals: [],
    }));
  }

  async findOne(id: string): Promise<User | undefined> {
    const user = await this.mockService.getUserById(id);
    if (!user) return undefined;
    return {
      ...user,
    };
  }
}
