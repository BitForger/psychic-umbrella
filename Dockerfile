FROM node:alpine as build
WORKDIR /var/www/app

COPY . /var/www/app

RUN yarn install

RUN yarn build

FROM nginx:alpine
WORKDIR /var/www/app

ADD conf/default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /var/www/app/build /var/www/app

CMD ["/bin/sh", "-c", "exec nginx -g 'daemon off;';"]
