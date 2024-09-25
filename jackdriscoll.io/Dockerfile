# Build stage
FROM node:18 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create a volume for the logs 
RUN mkdir -p /var/log/nginx
VOLUME /var/log/nginx

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]