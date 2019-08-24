FROM node:4.6

mkdir /sampledockerapp

WORKDIR /sampledockerapp

ADD ./sampledockerapp

RUN npm install

EXPOSE 3000

CMD npm start