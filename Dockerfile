FROM node:16
WORKDIR /app/admin
COPY admin/package*.json ./
RUN npm install
COPY admin/ .
EXPOSE 3000
# Cambiado a npm run dev
CMD ["npm", "run", "dev"]