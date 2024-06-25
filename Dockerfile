# 使用官方 Node.js 作為基底映像
FROM node:latest

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 yarn.lock 文件
COPY package.json yarn.lock ./

# 安裝依賴
RUN yarn install

# 複製所有源代碼到容器中
COPY . .

# 建構應用程序
RUN yarn build

# 使用 Nginx 來服務應用
FROM nginx:alpine

# 複製構建的應用程序文件到 Nginx 中
COPY --from=0 /app/build /usr/share/nginx/html

# 開放 80 端口
EXPOSE 80

# 啟動 Nginx 以保持容器運行
CMD ["nginx", "-g", "daemon off;"]
