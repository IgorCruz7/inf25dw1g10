# inf25dw1g10

# Gestão de Horários Escolares

## Objetivo
Desenvolver uma API REST que permita gerir horários e aulas, com operações CRUD.

## Organização do Repositório
- **src/** → código da API
- **openapi.yaml** → documentação da API
- **docker-compose.yml** → configuração multi-container

## Tecnologias
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [Docker](https://www.docker.com/)
- [OpenAPI 3.0](https://swagger.io/specification/)

## Frameworks e Bibliotecas
- express
- mysql2
- dotenv
- cors
- nodemon


## Relatório
### Capítulo 1: Apresentação do projeto
Este projeto consiste numa **API REST** para gestão de horários escolares, permitindo operações CRUD sobre:
-Alunos
-Professores
-Salas
-Horários
-Aulas
### Justificação das Tecnologias
As tecnologias escolhidas forma:
- **Node.js** → Plataforma para executar JavaScript no servidor
- **Express** → Framework para criar rotas e gerir requisições HTTP
- **MySQL** → Base de dados relacional para armazenar informações
- **Docker** → Containerização para simplificar a execução e distribuição
- **OpenAPI 3.0** → Documentação clara e padronizada da API
### Capítulo 2: Recursos
 projeto está organizado de forma modular, com os seguintes ficheiros principais:

- **src/** → contém o código da API (rotas, conexão ao banco, lógica de negócio)
- **openapi.yaml** → documentação da API em formato OpenAPI 3.0
- **docker-compose.yml** → configuração multi-container (API + MySQL)
- **Dockerfile** → definição da imagem
### Capítulo 3: Produto
### Capítulo 3: Produto

O produto final consiste numa **API REST** desenvolvida em Node.js e Express, integrada com uma base de dados MySQL e containerizada com Docker. O sistema permite gerir horários escolares através de operações CRUD sobre os seguintes recursos:

- **Alunos** → criação, listagem, atualização e remoção de alunos
- **Professores** → gestão de professores e respetivas informações
- **Salas** → definição e organização das salas disponíveis
- **Horários** → associação de aulas a horários específicos
- **Aulas** → gestão das disciplinas e respetivos horários

#### Principais Implementações
- **API em Node.js/Express**  
  - Estrutura modular em `src/` com rotas separadas.  
  - Ficheiro `app.js` para configuração da aplicação e integração dos routers.  
  - Middleware para CORS e dotenv para variáveis de ambiente.

- **Integração com MySQL**  
  - Ficheiro `db.js` para conexão ao banco de dados.  
  - Scripts SQL (`schema.sql`) para criação das tabelas de alunos, professores, salas, horários e aulas.  
  - Dados de teste inseridos para validação dos endpoints.

- **Documentação com OpenAPI 3.0**  
  - Ficheiro `openapi.yaml` descrevendo todos os endpoints, parâmetros e respostas.  
  - Facilita a compreensão e utilização da API por terceiros.

- **Containerização com Docker**  
  - `Dockerfile` para criar a imagem da API.  
  - `docker-compose.yml` para orquestrar API + MySQL em containers separados.  
  - Simplificação da execução do projeto em qualquer ambiente.
### Capítulo 4: Apresentação

## Equipa
- Igor Carlos Santos Cruz (@inf25dw1g10) A043765
