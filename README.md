# NodeExpressApp

### Description

A simple repo about the initial path in Nodejs

---

##### Docker configuration  
```bash
#building the container form image
docker build . -t nodeexpressapp 

#creating a network
docker network create net1

#running mysql container 
docker run -d \
--name dbcontapp \
--network net1 --network-alias mysqlnet \
-e MYSQL_ROOT_PASSWORD=secret \
-e MYSQL_DATABASE=db1 \
mysql:5.7

#running app container 
docker run -dp 3000:3000 --network net1 --name nodeexpressapp localhost/nodeexpressapp

```
##### Docker compose
```bash 
docker-compose up 
```

check *http://127.0.0.1:3000/*

```bash
#stop container 
docker kill nodeexpressapp 
dcoker kill dbcontapp

```

