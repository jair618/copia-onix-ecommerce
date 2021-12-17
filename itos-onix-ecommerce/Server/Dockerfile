FROM node:12-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm i nodemon -g && npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 9000
CMD ["npm", "start"]
