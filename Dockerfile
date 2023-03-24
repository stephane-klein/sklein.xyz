FROM node:16.15.1

RUN npm install -g pnpm@7.29.1

WORKDIR /src/

COPY ./ /src/

RUN pnpm install
RUN pnpm run build

FROM nginx:1.23.3

COPY --from=0 /src/build/ /usr/share/nginx/html/
COPY nginx-config/default.conf /etc/nginx/conf.d/default.conf
