# Trade Server

这是交易系统的后端服务，使用 Node.js 和 GraphQL 构建。

## 技术栈

使用gql+nestjs搭建的server

## 项目结构

```
server/
├── src/
│   ├── config/         # 配置文件
│   ├── graphql/        # GraphQL schema 和 resolvers
│   ├── models/         # 数据模型
│   ├── services/       # 业务逻辑
│   ├── utils/          # 工具函数
│   └── index.ts        # 入口文件
├── prisma/            # Prisma schema 和迁移
├── tests/             # 测试文件
└── package.json
```

## 开发设置

1. 安装依赖：

```bash
pnpm install
```


2. 启动开发服务器：

```bash
pnpm dev
```

## API 文档

### GraphQL 端点

- 开发环境: http://localhost:4000/graphql
- 生产环境: https://api.example.com/graphql

### 主要查询

```graphql
# 获取用户统计信息
query GetUserStats($userId: String!) {
  userStats(userId: $userId) {
    totalTradingVolume
    totalFees
    totalCommission
  }
}
```


## 部署

1. 构建项目：

```bash
pnpm build
```

2. 运行生产服务器：

```bash
pnpm start
```