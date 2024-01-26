# sklein.xyz

https://sklein.xyz source code.

## Local development

```sh
$ rtx install
$ bun install
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
