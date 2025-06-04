import { Injectable } from '@nestjs/common';
import {
  TableTrade,
  TableUserRelation,
  TableUser,
  trades,
  userRelations,
  users,
} from '../mock/data';

@Injectable()
export class MockService {
  private async delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async getUsers(): Promise<TableUser[]> {
    await this.delay(100);
    return users;
  }

  async getUserById(id: string): Promise<TableUser | undefined> {
    await this.delay(100);
    return users.find((user) => user.id === id);
  }

  async getTrades(): Promise<TableTrade[]> {
    await this.delay(100);
    return trades;
  }

  async getTradesByUser(uid: string): Promise<TableTrade[]> {
    await this.delay(100);
    return trades.filter((trade) => trade.uid === uid);
  }

  async getUserRelations(): Promise<TableUserRelation[]> {
    await this.delay(100);
    return userRelations;
  }

  async getInviter(uid: string): Promise<string | null> {
    await this.delay(100);
    const relation = userRelations.find((rel) => rel.uid === uid);
    return relation ? relation.inviter_uid : null;
  }

  async getReferrals(uid: string): Promise<string[]> {
    await this.delay(100);
    return userRelations
      .filter((rel) => rel.inviter_uid === uid)
      .map((rel) => rel.uid);
  }

  async calculateUserStats(uid: string) {
    await this.delay(100);
    const userTrades = await this.getTradesByUser(uid);
    return {
      totalTradingVolume: userTrades.reduce(
        (sum, trade) => sum + trade.amount,
        0,
      ),
      totalFees: userTrades.reduce((sum, trade) => sum + trade.fee, 0),
    };
  }
}
