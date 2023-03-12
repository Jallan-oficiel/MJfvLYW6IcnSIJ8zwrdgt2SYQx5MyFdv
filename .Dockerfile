# Utilisez l'image Node.js version 14
FROM node:14

# Créez un dossier pour votre application
WORKDIR /app

# Copiez les fichiers package.json et package-lock.json dans le dossier de travail
COPY package*.json ./

# Copiez le fichier .env dans le dossier de travail
COPY .env ./

# Installez les dépendances de votre application
RUN npm install

# Copiez tous les fichiers de votre application dans le dossier de travail
COPY . .

# Exposez le port 3000 sur le conteneur Docker
EXPOSE 3000

# Définissez les variables d'environnement pour dotenv
ENV NODE_ENV=production
ENV PORT=3000

# Lancez votre application
CMD ["npm", "start"]
