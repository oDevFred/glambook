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
1. Inicie os serviços Docker em modo detached: `docker-compose up -d`
2. Compile o projeto: `npm run build`
3. Execute os testes com: `npm test`
4. Pare os serviços: `docker-compose down`
- **Nota:** Os testes de conexão com o PostgreSQL usam `localhost` como fallback para `POSTGRES_HOST=db` quando executados localmente.

## Estrutura de Testes
- Os testes estão localizados em `tests/unit/` e usam Jest com TypeScript.
- O teste `app.test.ts` verifica a API Express.js.
- O teste `db.test.ts` valida a conexão com o PostgreSQL.

## Docker
1. Construa a imagem Docker: `docker build -t glambook:latest .`
2. Execute o container: `docker run -p 3000:3000 --env-file .env glambook:latest`
3. Acesse `http://localhost:3000/health` para verificar o servidor.

## Docker Compose
1. Inicie os serviços: `docker-compose up --build`
2. Acesse `http://localhost:3000/health` para verificar o servidor.
3. Execute os testes: `npm test` (certifique-se de que o Docker Compose está rodando).
4. Pare os serviços: `docker-compose down`