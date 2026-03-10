# API de Gerenciamento de Pedidos

API REST para gerenciamento de pedidos construída com Node.js, Express e MongoDB, seguindo arquitetura em camadas e boas práticas de separação de responsabilidades.

---

# Tecnologias utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- Joi (validação)
- Winston (logger)
- Dotenv
- Cors

---

# Funcionalidades

A API permite:

- Criar pedidos
- Buscar pedido por ID
- Listar todos os pedidos
- Atualizar pedido
- Deletar pedido

---

# Endpoints

### Criar pedido
POST /order

Exemplo de body:

```json
{
  "customerName": "João",
  "numeroPedido": 1001,
  "valorTotal": 200,
  "dataCriacao": "2026-03-09",
  "items": [
    {
      "idItem": 1,
      "quantidadeItem": 2,
      "valorItem": 100
    }
  ]
}
```

---

### Buscar pedido por ID
GET /order/:id

Exemplo:

```
GET /order/1001
```

---

### Listar pedidos
GET /order/list

---

### Atualizar pedido
PUT /order/:id

Exemplo:

```
PUT /order/1001
```

Body:

```json
{
  "value": 250
}
```

---

### Deletar pedido
DELETE /order/:id

Exemplo:

```
DELETE /order/1001
```

---

# Arquitetura do Projeto

A aplicação segue **arquitetura em camadas**, separando responsabilidades para facilitar manutenção, testes e escalabilidade.

Estrutura utilizada:

```
Estrutura principal do projeto:

src/
  config/
    database.js
  controllers/
    orderControllers.js
  docs/
    swegger.js
  middleware/
    errorMiddleware.js
  models/
    Order.js
  routes/
    orderRoutes.js
  services/
    orderServices.js
  utils/
    logger.js
  validators/
    orderValidator.js
  app.js
  server.js
```

---

# Responsabilidades das Camadas

### Controllers
Responsáveis por receber as requisições HTTP e retornar as respostas.

### Services
Camada responsável pela lógica de negócio da aplicação.

### Models
Define a estrutura dos dados no MongoDB utilizando Mongoose.

### Routes
Define os endpoints da API.

### Validators
Responsável pela validação dos dados recebidos nas requisições.

### Middlewares
Tratamento centralizado de erros.

### Logger
Registro de logs da aplicação para monitoramento e debugging.

---

# Como executar o projeto

### 1 Clonar o repositório

```
git clone <url-do-repositorio>
```

### 2 Instalar dependências

```
npm install
```

### 3 Configurar variáveis de ambiente

Criar um arquivo `.env` na raiz do projeto:

```
PORT=3000
MONGO_URI=sua_string_de_conexao
```
### 4 Database mongodb-memory-server
O projeto utiliza MongoDB em memória para facilitar execução do teste técnico.
Nenhuma instalação de banco é necessária.

### Instalar bibliotéca

npm install mongodb-memory-server

### 5 Executar o servidor

```
npm install
npm start
```

Servidor rodará em:

```
http://localhost:3000
```
### Após iniciar o projeto, acesse:

http://localhost:3000/api-docs

A documentação interativa da API foi implementada utilizando Swagger.
---

# Exemplo de resposta da API

```json
{
  "orderId": "1001",
  "value": 200,
  "creationDate": "2024-06-01T00:00:00.000Z",
  "items": [
    {
      "productId": 1,
      "quantity": 2,
      "price": 100
    }
  ]
}
```

---

# Boas práticas aplicadas

- Arquitetura em camadas
- Separação de responsabilidades
- Validação de dados
- Middleware global de erros
- Logger estruturado
- Uso de variáveis de ambiente
- Estrutura escalável para novas funcionalidades

---

# Autor de desenvolvimento

Laécio Almeida de Souza.