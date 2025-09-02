🚔 API do Departamento de Polícia
📌 Visão Geral

Este projeto é uma API RESTful desenvolvida em Node.js e Express para gerenciar agentes policiais e casos criminais.
O backend foi construído com arquitetura modular (rotas → controladores → repositórios) e armazena os dados em memória.

A API possui documentação Swagger seguindo o padrão OAS (OpenAPI Specification) disponível em /docs
.
Também será criado um front-end para consumir a API e facilitar a gestão.

🔧 Tecnologias

⚡ Node.js

⚡ Express.js

⚡ Swagger (swagger-jsdoc & swagger-ui-express)

⚡ JavaScript (ES6)

🚀 Como Iniciar

Clone o repositório e instale as dependências:

git clone <repo-url>
cd police-department-api
npm install
npm start


🌐 Servidor:

http://localhost:3000


📑 Documentação da API:

http://localhost:3000/docs

📂 Estrutura do Projeto
📦 police-department-api
│── server.js
│── routes/
│   ├── agentesRoutes.js
│   └── casosRoutes.js
│── controllers/
│   ├── agentesController.js
│   └── casosController.js
│── repositories/
│   ├── agentesRepository.js
│   └── casosRepository.js
│── docs/
│   └── swagger.js
│── utils/
│   └── errorHandler.js


⚡ Back-end finalizado. O próximo passo é construir o front-end para integrar e visualizar todas as funcionalidades.

🚔 Police Department API
📌 Overview

This project is a RESTful API built with Node.js and Express, designed to manage police agents and criminal cases.
The backend follows a modular architecture (routes → controllers → repositories) and stores data in-memory.

The API includes Swagger documentation following OAS (OpenAPI Specification), available at /docs
.
A front-end will also be developed to consume this API and provide visualization.

🔧 Technologies

⚡ Node.js

⚡ Express.js

⚡ Swagger (swagger-jsdoc & swagger-ui-express)

⚡ JavaScript (ES6)

🚀 Getting Started

Clone the repository and install dependencies:

git clone <repo-url>
cd police-department-api
npm install
npm start


🌐 Server:

http://localhost:3000


📑 API Docs:

http://localhost:3000/docs

📂 Project Structure
📦 police-department-api
│── server.js
│── routes/
│   ├── agentesRoutes.js
│   └── casosRoutes.js
│── controllers/
│   ├── agentesController.js
│   └── casosController.js
│── repositories/
│   ├── agentesRepository.js
│   └── casosRepository.js
│── docs/
│   └── swagger.js
│── utils/
│   └── errorHandler.js


⚡ Back-end completed. Next step: build the front-end to integrate and display all features.

