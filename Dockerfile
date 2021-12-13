FROM node:16 as ui-build

WORKDIR /usr/src/app

COPY . .

RUN cd ./ezPOS && npm install @angular/cli && npm install && npm run build

FROM node:16 AS server-build
WORKDIR /root/
COPY --from=ui-build /usr/src/app/ezPOS/dist ./dist
COPY package*.json ./
RUN npm install
COPY server.js .

EXPOSE 8000

CMD ["node","server.js"]