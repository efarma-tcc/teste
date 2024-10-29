# Usar uma imagem Node.js como base
FROM node:latest

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos de pacotes
COPY package.json package-lock.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .

# Construa o projeto
RUN npm run build

# Instale um servidor para servir o build (como serve)
RUN npm install -g serve

# Exponha a porta que o servidor irá usar
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["serve", "-s", "dist"]
