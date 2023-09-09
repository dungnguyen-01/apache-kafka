FROM node:18.10.0
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i -f
RUN npm install dotenv --force
COPY . .
RUN npm run build
CMD [ "node", "dist/main.js" ]


