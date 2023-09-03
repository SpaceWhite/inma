FROM node:16 as build

RUN mkdir /app

COPY . /app/

WORKDIR /app

RUN npm i

RUN npm run build

FROM nginx:latest

COPY --from=build /app/dist/ /usr/share/nginx/html
