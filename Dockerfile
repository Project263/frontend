# Используем Node.js LTS
FROM node:18-alpine AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json для кеширования зависимостей
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем код проекта
COPY . .

# Собираем Next.js в продакшен-режиме
RUN npm run build

# Используем минимальный образ для продакшена
FROM node:18-alpine

WORKDIR /app

# Копируем собранные файлы из builder-слоя
COPY --from=builder /app ./

# Устанавливаем переменную окружения
ENV NODE_ENV=production

# Открываем порт
EXPOSE 3000

# Запускаем Next.js
CMD ["npm", "start"]