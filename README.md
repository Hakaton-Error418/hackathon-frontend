
# Frontend - React App
глобально можете зайти за посиланням https://main.d1fab9txdwwfuw.amplifyapp.com
## Опис
Цей репозиторій містить фронтенд частину проєкту, написану з використанням React, Vite, Tailwind CSS, Apollo Client та інших технологій.

## Вимоги
- Node.js 20+ (для сумісності з React Router та іншими залежностями)
- Docker (якщо використовується контейнеризація)

## Установка

### 1. Клонуйте репозиторій:
```bash
git clone https://github.com/your-username/frontend-repository.git
cd frontend-repository
```

### 2. Встановіть залежності:
```bash
npm install
# або
yarn install
```

### 3. Запустіть локальний сервер для розробки:
```bash
npm run dev
# або
yarn dev
```
Сервер буде доступний за адресою `http://localhost:5173`.

## Docker

### 1. Зберіть Docker образ:
```bash
docker build -t hackathon-frontend .
```

### 2. Запустіть контейнер:
```bash
docker run -p 5173:5173 hackathon-frontend
```

Тепер додаток буде доступний за адресою `http://localhost:5173`.

### Backend частину ви можете знайти за посиланням https://github.com/Hakaton-Error418

