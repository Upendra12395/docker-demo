FROM node:alpine
RUN yarn global add express-gateway@$EG_VERSION && yarn cache clean
COPY . /app
WORKDIR /app
CMD app.js