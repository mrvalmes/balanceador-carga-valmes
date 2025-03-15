# Usar imagen base de Node.js
FROM node:18

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos necesarios
COPY package*.json ./
RUN npm install
COPY . .

# Exponer el puerto 3000
EXPOSE 3000

# Comando de inicio
CMD ["npm", "run", "start"]
