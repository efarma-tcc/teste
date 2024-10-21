# 1. Usar a imagem base do Node.js
FROM node:18-alpine

# 2. Definir o diretório de trabalho dentro do contêiner
WORKDIR /app

# 3. Copiar o arquivo package.json e package-lock.json
COPY ./package*.json ./

# 4. Instalar as dependências do projeto (incluindo Vite)
RUN npm install

# 5. Copiar o restante dos arquivos do projeto para o contêiner
COPY . .

# 6. Construir a aplicação
RUN npx vite build

# 7. Expor a porta 3000 (ou a porta que você estiver usando)
EXPOSE 3000

# 8. Comando para iniciar o servidor de produção
CMD ["npm", "run", "serve"]
