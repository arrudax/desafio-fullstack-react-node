# desafio-fullstack-react-node

Você deverá criar um cadastro de clientes que poderá conter muitos contatos associados. Depois deste processo deverá ter um relatório em tela, ou PDF que mostre os clientes e os contatos vinculados a este cliente. Nesse desafio utilize Javascript e Typescript

# Como configurar seu ambiente
Para configurar seu ambiente backend. No diretorio backend, em sua raiz tem o arquivo '.env.example' renomei seu arquivo para .env removendo o .example de seu nome. Agora dentro do seu arquivo defina seu 'POSTGRES_HOST' como 'db' e o 'PORT' como '8080' os outros campos são 'POSTGRES_USER' = usuario postgres, 'POSTGRES_PASSWORD' senha postgres, 'POSTGRES_DB' = nome do database postgres,
'SECRET_KEY' = utilizado na criação dos tokens com JWT '.


# Como utilizar o projeto
Rode o comanado  docker compose up --build  , assim que concluido, rode o comando  docker exec backend_api yarn typeorm migration:generate src/migrations/createTable -d src/data-source.ts  para gerar as migrações e para estabelecer ela no banco de dados, rode o comando  docker exec backend_api yarn typeorm migration:run -d src/data-source.ts

Confira as rotas do nosso backend em nossa documentação
