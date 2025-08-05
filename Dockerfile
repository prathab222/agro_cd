FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY src/ .

ENV NODE_ENV=production
ENV APP_VERSION=1.0.0

EXPOSE 3000
CMD ["npm", "start"]