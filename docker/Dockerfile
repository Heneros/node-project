FROM node:16 as development

WORKDIR /usr/src/app

COPY ["package*.json",  "nodemon.json", "tsconfig.json" , "./"]

COPY ./src ./src 

RUN npm install && npm install nodemon

EXPOSE 3001

CMD ["npm", "run", "dev"]
