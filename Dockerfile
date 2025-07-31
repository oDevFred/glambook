# Usar a imagem oficial do Node.js (versão 22.x para compatibilidade com package.json)
FROM node:22-alpine

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar package.json e package-lock.json para instalar dependências
COPY package.json package-lock.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código-fonte
COPY . .

# Compilar o código TypeScript para JavaScript
RUN npm run build

# Expor a porta do servidor (definida no .env)
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "start"]