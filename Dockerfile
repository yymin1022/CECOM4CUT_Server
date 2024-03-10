FROM node:18.14.0

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV FILE_DIR /Data
ENV TZ Asia/Seoul

EXPOSE 8080

CMD ["node", "/app/src/index.js"]