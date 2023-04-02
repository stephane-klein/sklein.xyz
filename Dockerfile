FROM node:16.15.1

RUN npm install -g pnpm@7.29.1

WORKDIR /src/

COPY ./ /src/

RUN pnpm install
RUN pnpm run build

FROM stephaneklein/nginx-brotli:1.23.4

COPY --from=0 /src/build/ /usr/share/nginx/html/
COPY reports /usr/share/nginx/html/reports/
COPY nginx-config/default.conf /etc/nginx/conf.d/default.conf
