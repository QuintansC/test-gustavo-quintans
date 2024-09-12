#exec normal da imagem
FROM node:lts-alpine

WORKDIR /usr/app

COPY package.json ./
COPY pnpm-lock.yaml ./
COPY public ./

RUN npm install --global pnpm

RUN apk update && apk add --no-cache bash
RUN pnpm install && pnpm store prune

EXPOSE 3000

COPY . .

CMD [ "pnpm", "dev" ]