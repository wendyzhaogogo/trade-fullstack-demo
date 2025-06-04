export interface TableTrade {
  id: string;
  uid: string;
  amount: number;
  fee: number;
  timestamp: Date;
}

export interface TableUserRelation {
  uid: string;
  inviter_uid: string;
}

export interface TableUser {
  id: string;
  username: string;
}

export const users: TableUser[] = [
  {
    id: '1',
    username: 'user1',
  },
  {
    id: '2',
    username: 'user2',
  },
];

export const trades: TableTrade[] = [
  {
    id: '1',
    uid: '1',
    amount: 10000,
    fee: 100,
    timestamp: new Date('2024-03-01T10:00:00Z'),
  },
  {
    id: '2',
    uid: '1',
    amount: 5000,
    fee: 50,
    timestamp: new Date('2024-03-02T11:00:00Z'),
  },
  {
    id: '3',
    uid: '2',
    amount: 20000,
    fee: 200,
    timestamp: new Date('2024-03-03T12:00:00Z'),
  },
  {
    id: '4',
    uid: '3',
    amount: 15000,
    fee: 150,
    timestamp: new Date('2024-03-04T13:00:00Z'),
  },
];

export const userRelations: TableUserRelation[] = [
  {
    uid: '2',
    inviter_uid: '1',
  },
  {
    uid: '3',
    inviter_uid: '1',
  },
  {
    uid: '4',
    inviter_uid: '2',
  },
];
