FROM node:16 as development

WORKDIR /usr/src/app

COPY ["package*.json" , "./"]

COPY ./src-nginx ./src-nginx 

RUN npm install 

EXPOSE 3000

CMD ["npm", "run", "dev"]
