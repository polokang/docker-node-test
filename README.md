
# Ubuntu 环境下docker node api 环境搭建
1. 本地编写程序并上传到 hunterzhou 的 docker hub 网站
   - 本地构建镜像 `docker build -t IMAGE_NAME:TAG <PATH`
     - IMAGE_NAME 是你要构建的镜像的名称。
     - TAG 是你为该镜像设置的标签。
     - PATH 是 Dockerfile 所在的路径，用于构建镜像。
     - 示例：
       - `docker build -t hunterzhou/docker-node-test:v1 .`
    - 上传到 Docker hub 
       - `docker push hunterzhou/docker-node-test`

2. 进入Ubuntu 环境后，有时候需要在命令前添加 `sudo`, 依次执行下面的命令：
    `docker login`

3. 下载 image
    `sudo docker pull hunterzhou/docker-node-test`

4. 启动 image
    `sudo docker run -d -p 8080:8080 hunterzhou/docker-node-test`

## 修改 image 并上传
1. 本地重新构建镜像
    - `docker build -t hunterzhou/docker-node-test:latest .` 
2. 登录 
   - `docker login`
3. 给镜像打标签
   - `docker tag hunterzhou/docker-node-test:latest hunterzhou/docker-node-test:latest`
4. 上传镜像
   - `docker push hunterzhou/docker-node-test:latest`

## 添加 prisma
1. `npm i prisma`
2. `npx prisma init`
3. 修改 .env 文件中的
4. 修改 /prisma/schema.prisma 文件
5. `npx prisma generate`
6. `npm i cors dotenv jsonwebtoken lodash`

## 添加 mongoose
1. `npm i mongoose`

## docker 常用命令
`docker exec -it <contain-name> /bin/sh`
`docker rm <contain-name>`
`docker logs <contain-name>`