Prerequisite:

```sh
$ ../scripts/build-docker-image.sh
```

```sh
$ docker compose up -d --wait
```

Go to http://127.0.0.1

To test virtualhost, add this lines in your `/etc/hosts`

```
127.0.0.1 sklein.xyz
127.0.0.1 stephane-klein.info
127.0.0.1 garden.stephane-klein.info
```

Test redirection:

```
$ curl http://garden.stephane-klein.info/003-ne-tonds-pas-de-yaks/ -i
HTTP/1.1 302 Moved Temporarily
Server: nginx/1.23.3
Date: Wed, 22 Mar 2023 10:34:01 GMT
Content-Type: text/html
Content-Length: 145
Connection: keep-alive
Location: https://sklein.xyz/fr/garden/003-ne-tonds-pas-de-yaks/

<html>
<head><title>302 Found</title></head>
<body>
<center><h1>302 Found</h1></center>
<hr><center>nginx/1.23.3</center>
</body>
</html>
```
