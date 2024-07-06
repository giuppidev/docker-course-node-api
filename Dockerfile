FROM node:latest

WORKDIR /app

COPY package*.json .

RUN npm install -g nodemon

RUN npm install

COPY ./src ./src

CMD node ./src/index.js