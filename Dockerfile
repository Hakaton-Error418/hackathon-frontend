# Маленький базовый образ
FROM node:23.6.0-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]