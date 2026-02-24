<p align="right">
  <a href="#english">English</a> | <a href="#简体中文">简体中文</a>
</p>

# 鸢尾花终端 / Iris Terminal

Local-first multi-model AI terminal with project-based conversations, long-term memory summaries, and document retrieval.

---

## English

### Overview

Iris Terminal is a local deployment chat system for long-term use:

- Multi-model chat (OpenAI, DeepSeek, Gemini, Claude, Grok, GPTSAPI gateway)
- Project workspaces with project-level instructions
- Automatic summary memory for long/complex conversations
- File upload + retrieval (RAG) pipeline
- Markdown + LaTeX rendering in chat messages

### Tech Stack

- Frontend: Next.js 14, React, TypeScript, Tailwind, Radix UI
- Backend: Next.js Route Handlers (`app/api`)
- Database: PostgreSQL + Prisma
- Embeddings: OpenAI or local embeddings
- Storage: local filesystem (`storage/`)

### Quick Start (Windows)

1. One-click startup:

```bat
start-manor.bat
```

2. Or run manually:

```bash
npm install
npx prisma generate
npm run db-migrate
npm run dev
```

3. Open:

```text
http://localhost:3000
```

### Environment

Copy `.env.local.example` to `.env.local`, then configure at least:

- `DATABASE_URL`
- one model API key (`DEEPSEEK_API_KEY` or `GPTSAPI_API_KEY`, etc.)

### Key Customization Entry Points

- Unified system prompt: `lib/unified-system-prompt.ts`
- Profile memory context: `lib/project-config.ts`
- Prompt assembly pipeline: `lib/build-prompt.ts`
- Model APIs: `app/api/chat/*/route.ts`
- GPTSAPI model discovery: `app/api/models/gptsapi/route.ts`
- File upload/processing: `app/api/local/files/route.ts`
- Summary generation: `app/api/summaries/generate/route.ts`

### Security Notes

Before publishing to GitHub:

- never commit `.env` or `.env.local`
- never commit real API keys / DB passwords
- avoid uploading user data under `storage/`
- rotate keys immediately if leaked

---

## 简体中文

### 项目简介

鸢尾花终端是一个面向本地部署、长期使用的多模型 AI 对话系统：

- 多模型聊天（OpenAI、DeepSeek、Gemini、Claude、Grok、GPTSAPI）
- 项目化工作区与项目级提示词
- 长/复杂对话自动总结与记忆复用
- 文件上传与检索增强（RAG）
- 聊天消息支持 Markdown + LaTeX 渲染

### 技术栈

- 前端：Next.js 14、React、TypeScript、Tailwind、Radix UI
- 后端：Next.js Route Handlers（`app/api`）
- 数据库：PostgreSQL + Prisma
- 向量：OpenAI 向量或本地向量
- 存储：本地文件系统（`storage/`）

### 快速启动（Windows）

1. 一键启动（推荐）：

```bat
start-manor.bat
```

2. 手动启动：

```bash
npm install
npx prisma generate
npm run db-migrate
npm run dev
```

3. 访问地址：

```text
http://localhost:3000
```

### 环境变量

复制 `.env.local.example` 为 `.env.local`，至少配置：

- `DATABASE_URL`
- 任一可用模型密钥（如 `DEEPSEEK_API_KEY` 或 `GPTSAPI_API_KEY`）

### 常用二次开发入口

- 统一系统提示词：`lib/unified-system-prompt.ts`
- 个人长期记忆上下文：`lib/project-config.ts`
- 提示词拼接链路：`lib/build-prompt.ts`
- 模型 API 路由：`app/api/chat/*/route.ts`
- GPTSAPI 模型发现：`app/api/models/gptsapi/route.ts`
- 文件上传与处理：`app/api/local/files/route.ts`
- 总结生成逻辑：`app/api/summaries/generate/route.ts`

### 安全注意事项

发布到 GitHub 前务必确认：

- 不提交 `.env` / `.env.local`
- 不提交任何真实 API Key 或数据库密码
- 不提交 `storage/` 下的用户数据
- 一旦泄露，立即轮换密钥
