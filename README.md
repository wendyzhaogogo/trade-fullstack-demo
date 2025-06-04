# Trade Fullstack Demo

这是一个全栈交易系统演示项目，包含前端 Web 应用和后端服务。

## 项目结构

```
trade-fullstack-demo/
├── apps/
│   ├── web/          # React 前端应用
│   └── server/       # Node.js 后端服务
└── packages/         # 共享包
```

## 技术栈

- 前端：React + TypeScript + Tailwind CSS + Redux Toolkit + Apollo Client
- 后端：Node.js + TypeScript + Express + GraphQL + Prisma

## 开发环境要求

- Node.js 18+
- pnpm 8+

## 快速开始

1. 安装依赖：

```bash
pnpm install
```

2. 配置环境变量：

复制 `.env.example` 文件到 `.env` 并填写必要的配置：

```bash
cp .env.example .env
```

3. 启动开发服务器：

```bash
# 启动所有服务
pnpm dev

# 或者分别启动
pnpm dev:web     # 启动前端
pnpm dev:server  # 启动后端
```

4. 访问应用：

- 前端：http://localhost:5173
- 后端 GraphQL：http://localhost:4000/graphql