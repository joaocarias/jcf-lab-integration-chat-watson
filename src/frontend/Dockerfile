# Dev stage — hot reload via volume
FROM node:20-alpine AS dev
WORKDIR /app
COPY Jcf.Lab.Chat.Watson.Web/package*.json ./
RUN npm ci
COPY Jcf.Lab.Chat.Watson.Web/index.html ./
COPY Jcf.Lab.Chat.Watson.Web/vite.config.ts ./
COPY Jcf.Lab.Chat.Watson.Web/tsconfig*.json ./
EXPOSE 5173
CMD ["npm", "run", "dev"]

# Build stage
FROM node:20-alpine AS build
WORKDIR /app
COPY Jcf.Lab.Chat.Watson.Web/package*.json ./
RUN npm ci
COPY Jcf.Lab.Chat.Watson.Web/ .
RUN npm run build

# Production stage — nginx
FROM nginx:alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]