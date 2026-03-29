FROM node:22-slim

WORKDIR /usr/src/app

ADD . .

RUN npm ci

CMD ["npx", "tsx", "src/main.ts"]
