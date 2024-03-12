# Auth Service

Este é o serviço de autenticação para o projeto de Email Server. Ele fornece funcionalidades de autenticação e gerenciamento de usuários.

## Funcionalidades

- Registro de novos usuários
- Autenticação de usuários existentes
- Atualização de informações do usuário
- Remoção de usuários

## Instalação e Uso com Docker

1. Certifique-se de ter o Docker instalado em sua máquina. Você pode baixá-lo [aqui](https://www.docker.com/products/docker-desktop).

2. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/auth-service.git
```

3. Navegue até o diretório do projeto:
```bash
cd auth-service
```
4. Crie um arquivo .env na raiz do projeto e defina as variáveis de ambiente necessárias, como o endereço do banco de dados, as chaves de segurança, etc.
```.env
  DATABASE_URL:''
  
```
6. Execute o seguinte comando para construir a imagem Docker:
```bash
docker build -t auth-service .
```
7. Em seguida, execute o contêiner Docker:
```bash
docker run -p 3000:3000 auth-service
```

Agora você pode acessar o serviço de autenticação em http://localhost:3000.

## Uso

### Registro de Usuários

Endpoint: `POST /api/users/create`

Payload da requisição:

```json
{
  "username": "example",
  "password": "example123",
  "email": "example@example.com"
}
```
### Autenticação de Usuários

Endpoint: `POST /api/users/login`

Payload da requisição:

```json
{
  "username": "example",
  "password": "example123"
}
```
### Atualização de Informações do Usuário

Endpoint: `PUT /api/users/:userId`

Payload da requisição:

```json
{
  "username": "newusername",
  "password": "newpassword",
  "email": "newemail@example.com"
}
```

### Remoção de Usuários

Endpoint: `DELETE /api/users/:userId`

Payload da requisição:

### Contribuindo
Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas ou enviar solicitações pull.

### Licença
Este projeto está licenciado sob a Licença MIT.


Este README em formato Markdown inclui todas as instruções sobre como usar o Docker para construir e executar o serviço de autenticação. Certifique-se de ter o Docker instalado e em funcionamento antes de seguir as instruções acima.
