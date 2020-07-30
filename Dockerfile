FROM node:12.18.2 AS builder
WORKDIR /app
COPY ./ /app
ENV HUSKY_SKIP_INSTALL=1
RUN npm install && npm run build

FROM nginx:1.19
COPY --from=builder /app/public /usr/share/nginx/html
COPY ./docker/nginx/default.conf.template /etc/nginx/templates/default.conf.template