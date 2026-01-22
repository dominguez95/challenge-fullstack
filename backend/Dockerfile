FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

# Definir variable de puerto
ARG PORT=9000
ENV PORT=${PORT}

EXPOSE ${PORT}

CMD [ "npm", "start" ]
