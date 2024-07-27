FROM node:alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./
COPY jest.config.js .
COPY babel.config.cjs .
COPY app.js .

RUN npm install

COPY . .

CMD ["npm", "run", "start"]
