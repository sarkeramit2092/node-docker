FROM node:12
WORKDIR /user/scr/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [“node”, “server.js”]