
# Ubuntu 环境下docker node api 环境搭建
1. 本地编写程序并上传到 hunterzhou 的 docker hub 网站
   `docker tag docker-node-test hunterzhou/docker-node-test`
   `docker push hunterzhou/docker-node-test`

2. 进入Ubuntu 环境后，有时候需要在命令前添加 `sudo`, 依次执行下面的命令：
    `docker login`

3. 下载 image
    `sudo docker pull hunterzhou/docker-node-test`

4. 启动 image
    `sudo docker run -d -p 8080:8080 hunterzhou/docker-node-test`


