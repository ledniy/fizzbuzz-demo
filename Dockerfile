FROM node:14.15.1

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

FROM node:14.15.1-alpine

COPY --from=0 /app .
COPY ./src .

CMD [ "node", "boot.js" ]
