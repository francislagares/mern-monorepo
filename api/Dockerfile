FROM node:alpine

RUN apk update && apk add --no-cache nodejs && corepack enable
RUN addgroup backend && adduser -S -G backend francis

USER francis

WORKDIR /api

COPY package.json tsconfig.json ./

USER root

RUN chown -R francis:backend .

USER francis

RUN pnpm install

COPY . .

EXPOSE 4000

CMD ["pnpm", "start:dev"]