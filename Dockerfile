FROM node:16-alpine 
WORKDIR /usr/src
COPY package-lock.json package-lock.json
COPY package.json package.json
RUN npm ci
COPY . .
RUN mkdir -p storage
RUN npm run build
CMD npm run start
