FROM node:20.11.0

RUN npm install -g pnpm@8.14.3

WORKDIR /src/

COPY ./ /src/

ENV PUBLIC_GOATCOUNTER_URL https://stats.sklein.xyz
RUN pnpm install
RUN pnpm run build

# This Docker image come from https://github.com/stephane-klein/nginx-brotli-docker/blob/main/Dockerfile
FROM stephaneklein/nginx-brotli:1.23.4

COPY --from=0 /src/build/ /usr/share/nginx/html/
COPY reports /usr/share/nginx/html/reports/
COPY nginx-config/default.conf /etc/nginx/conf.d/default.conf
