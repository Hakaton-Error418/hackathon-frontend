# Базовый образ
FROM node:23.6.0
# Устанавливаем папку в якій будуть виконуватися всі команди
WORKDIR /app
# Копіюємо файли проекту у цю папку
COPY . .
# Всатновлюємо залежності
RUN npm install
# Указываем команду запуска
CMD ["npm", "run", "dev"]