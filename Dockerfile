FROM node:12.18.2 as build

WORKDIR /app

COPY ./ /app

RUN npm install && npm run build


FROM nginx:1.18

COPY --from=build /app/public /usr/share/nginx/html