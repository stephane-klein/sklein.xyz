FROM node:20-slim AS base
RUN npm install -g pnpm@9.8.0

WORKDIR /src/
COPY ./ /src/

RUN pnpm install -P --frozen-lockfile
RUN pnpm run build

FROM node:20-slim
RUN apt update -y; apt install -y curl
RUN npm install -g pnpm@9.8.0

COPY --from=0 /src/package.json /src/
COPY --from=0 /src/build/ /src/build/
COPY --from=0 /src/contents/ /src/contents/

EXPOSE 3000
WORKDIR /src/

CMD ["node", "./index.js"]
HEALTHCHECK --interval=30s --timeout=10s --retries=3 CMD curl --fail http://localhost:3000 || exit 1
