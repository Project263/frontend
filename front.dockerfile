FROM node:18-alpine AS builder
WORKDIR /app

# Устанавливаем зависимости
COPY package.json package-lock.json ./
RUN npm ci

# Копируем исходники и билдим приложение
COPY . .
RUN npm run build

# Запускаем продакшен контейнер
FROM node:18-alpine AS runner
WORKDIR /app

# Копируем только необходимые файлы
COPY --from=builder /app/package.json /app/package-lock.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./

EXPOSE 3000
CMD ["npm", "run", "start"]
