# 使用 Node.js 18 镜像
FROM node:18
# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json（如果存在）
COPY package*.json ./

# 安装应用程序依赖
RUN npm install

# 复制整个应用程序代码（包括 prisma 目录）
COPY . .

# 生成 Prisma 代码
RUN npx prisma generate

# 编译 TypeScript 代码
RUN npx tsc

# 设置入口点
CMD ["node", "dist/app.js"]