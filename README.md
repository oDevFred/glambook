# GlamBook

SaaS de agendamento online para profissionais da beleza.

## Pré-requisitos
- Node.js >= 18.x
- npm >= 9.x
- Docker >= 24.x
- Docker Compose >= 2.x

## Instalação
1. Clone o repositório: `git clone <URL>`
2. Instale as dependências: `npm install`
3. Crie um arquivo `.env` com base no exemplo fornecido
4. Compile o projeto: `npm run build`
5. Inicie o servidor: `npm start`

## Desenvolvimento
- Use `npm run dev` para compilar automaticamente e reiniciar o servidor.

## Testes
Execute os testes com: `npm test`

## Docker
1. Construa a imagem Docker: `docker build -t glambook:latest .`
2. Execute o container: `docker run -p 3000:3000 --env-file .env glambook:latest`
3. Acesse `http://localhost:3000/health` para verificar o servidor.