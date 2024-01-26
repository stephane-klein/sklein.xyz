FROM oven/bun:1.0-slim

WORKDIR /src/
COPY ./ /src/

ENV PUBLIC_GOATCOUNTER_URL https://stats.sklein.xyz
RUN bun install
RUN bun --bun run build

FROM oven/bun:1.0-slim
COPY --from=0 /src/package.json /src/
COPY --from=0 /src/build/ /src/build/
EXPOSE 3000
WORKDIR /src/
CMD ["bun", "build/index.js"]
