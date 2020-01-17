FROM node:alpine as build
WORKDIR /var/www/app

COPY . /var/www/app

RUN yarn install

# React needs this during build time. Optimally this would be set in the build pipeline but
# I haven't had time to set that up yet
RUN REACT_APP_API_URI=http://acoustic-api.challenge.noahkovacs.me \
    REACT_APP_WEBSITE_NAME="Acoustic Challenge" \
    yarn build

FROM nginx:alpine
WORKDIR /var/www/app

ADD conf/default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /var/www/app/build /var/www/app

CMD ["/bin/sh", "-c", "exec nginx -g 'daemon off;';"]
