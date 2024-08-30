FROM node:20-slim AS base
RUN npm install -g pnpm@9.9

WORKDIR /src/
COPY ./ /src/

RUN pnpm install -P --frozen-lockfile
RUN pnpm run build

FROM node:20-slim
RUN apt update -y; apt install -y curl
RUN npm install -g pnpm@9.9

WORKDIR /src/

COPY --from=base /src/package.json ./
COPY --from=base /src/pnpm-lock.yaml ./

RUN pnpm install -P --frozen-lockfile

COPY --from=0 /src/build/ /src/build/
COPY --from=0 /src/contents/ /src/contents/

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=10s --retries=3 CMD curl --fail http://localhost:3000 || exit 1

CMD ["node", "build/index.js"]
