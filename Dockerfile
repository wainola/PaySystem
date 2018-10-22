FROM node:8.12.0
RUN mkdir /src
WORKDIR /src
COPY ./package.json /src/package.json
COPY ./package-lock.json /src/package-lock.json

RUN npm install --silent

COPY . /src

EXPOSE 9998