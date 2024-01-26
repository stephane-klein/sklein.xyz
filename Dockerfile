FROM node:20.11.0

RUN npm install -g pnpm@8.14.3

WORKDIR /src/

COPY ./ /src/

ENV PUBLIC_GOATCOUNTER_URL https://stats.sklein.xyz
RUN pnpm install
RUN pnpm run build

FROM node:20.11.0
RUN npm install -g pnpm@8.14.3
COPY --from=0 /src/package.json /src/
COPY --from=0 /src/build/ /src/build/
EXPOSE 3000
WORKDIR /src/
CMD ["node", "build/index.js"]
