# Usa imagem oficial do Node.js
FROM node:18

# Define diretório de trabalho dentro do container
WORKDIR /app

# Copia ficheiros de dependências
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do projeto
COPY . .

# Expõe a porta da API
EXPOSE 3000

# Comando para iniciar a API
CMD ["npm", "start"]
