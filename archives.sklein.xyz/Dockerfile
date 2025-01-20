# This Docker image come from https://github.com/stephane-klein/nginx-brotli-docker/blob/main/Dockerfile
FROM stephaneklein/nginx-brotli:1.23.4
COPY src/ /usr/share/nginx/html/
RUN chown nginx:nginx /usr/share/nginx/html/ -R
COPY nginx-config/default.conf /etc/nginx/conf.d/default.conf
