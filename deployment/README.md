# Deployment to sklein.xyz on perier server

```sh
$ cp .envrc.skel .envrc
```

Configure `.envrc`.

```
$ direnv allow
```

```sh
$ ../scripts/build-docker-image.sh
$ docker push stephaneklein/sklein.xyz:latest
$ ./scripts/deploy_sklein_xyz.sh
```

Open ssh tunnel to access to remote PostgreSQL port:

```sh
$ ./scripts/open_ssh_tunnel.sh
```

In another terminal, execute this command to update database schema:

```
$ ../init-or-upgrade-db.js
```

Load [`../contents/`](../contents/) to remote PostgreSQL database:

```
$ ../load-contents-to-db.js
```

## Urls

[GoatCounter](https://www.goatcounter.com/) url : https://gc.sklein.xyz/

## How to deplay nginx proxy

```sh
$ ssh root@perier.servers.stephane-klein.info 'bash -s' < deploy-nginx-proxy.sh
```
