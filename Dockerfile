FROM node:lts-alpine

WORKDIR /usr/src/app

COPY ./dist/ ./

ENV NODE_ENV=production

EXPOSE 3000

CMD [ "node", "app.js" ]