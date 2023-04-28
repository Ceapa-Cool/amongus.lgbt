FROM nginx:alpine

COPY . /usr/share/nginx/html

RUN mkdir -p /data

VOLUME /data

COPY default.conf /etc/nginx/conf.d/
