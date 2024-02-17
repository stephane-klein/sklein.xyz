# sklein.xyz

https://sklein.xyz source code.

## Foreword / warning

I wouldn't recommend taking inspiration from the architecture of this project. Why not?
I'm modifying this project occasionally, without any real direction. I'm implementing a series of ["quick wins"](https://old.reddit.com/r/ProductManagement/comments/11iz7mk/do_quick_wins_really_exist/) that make the project incoherent.  
Little by little, I'm trying to refactor the project, to make it less " weird ".

As a result, this project should not be used as an example!

## Avertissement (french)

Je vous déconseille de vous inspirer de l'architecture de ce projet. Pourquoi ?
Je modifie ce projet ponctuellement, sans vraiment de direction, j'implémente des séries de ["quick wins"](https://old.reddit.com/r/ProductManagement/comments/11iz7mk/do_quick_wins_really_exist/) qui rendent le projet non cohérent.  
J'essaie petit à petit de refactorer le projet, pour le rendre moins "tordu".

Par conséquent, ce projet ne doit pas vous servir d'exemple !

## Domain name

`sklein.xyz` domain name registrar: [Gandi](https://gandi.net) ([I would like transfer it](https://github.com/stephane-klein/sklein.xyz/issues/102))  
`sklein.xyz` DNS server: Gandi, managed manually.

## Local development

```sh
$ rtx install
$ bun install
```

```sh
$ docker compose up -d --wait
```

```
$ ./init-or-upgrade-db.js
$ ./load-contents-to-db.js
```

```sh
$ bun --bun run dev
```

Go to http://127.0.0.1:5173/

## Generate lighthouse report

Prerequisite: install Chrome

```sh
$ bun run lighthouse
```

## Build Docker image

```sh
$ ./scripts/build-docker-image.sh
```

Next see [`docker-playground/`](docker-playground/).

## Deployment

```sh
$ ./scripts/deploy.sh
```

## Guideline

I wish to follow as much as possible the https://brutalist-web.design/ recommandations.

## Web analytics

https://sklein.xyz is analyzed by https://www.goatcounter.com/ at https://gc.sklein.xyz

## How can I filter and ignore visits to my own website?

Install [HTTP Header Mangler](https://addons.mozilla.org/fr/firefox/addon/http-header-mangler/) on my Firefox Desktop
and Android devices and setup this configuration:

```
sklein.xyz
User-Agent = stephane-klein
```
