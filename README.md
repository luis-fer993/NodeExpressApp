# NodeExpressApp

### Description

A simple repo about the initial path in Nodejs

---

##### Docker configuration  
```bash
docker build . -t nodeexpressapp 

docker run -p 3000:3000 -d --name nodeexpressapp localhost/nodeexpressapp

```

check *http://127.0.0.1:3000/*

```bash
#stop container 
docker kill nodeexpressapp 

```

