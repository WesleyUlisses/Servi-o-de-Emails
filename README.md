# Serviço-de-Emails

## Visão Geral

O Email-Service é uma solução robusta para o envio de e-mails em aplicações web. Utilizando a infraestrutura confiável e escalável da Amazon SES, o serviço oferece uma maneira simples e segura de enviar e-mails em grande escala. A API do Email-Service permite que outras aplicações integrem facilmente o envio de e-mails em seus fluxos de trabalho, sem se preocupar com os detalhes de configuração do servidor de e-mails.

## Funcionalidades Principais

Envio de e-mails utilizando o Amazon SES.
Integração fácil com outras aplicações através de uma API RESTful.
Suporte para personalização de conteúdo e template de e-mails.
Controle de limite de envio de e-mails por conta para evitar abuso.

## Pré-requisitos

- Node.js
- Docker
- Redis
- Postgres | MySQL | SqlLite

## Configuração

Instruções sobre como configurar e instalar a solução.

## Uso

Instruções sobre como usar a solução e exemplos de casos de uso.

## Arquitetura

O Email-Service é construído com Node.js e Express.js, proporcionando uma arquitetura leve e eficiente para lidar com solicitações de envio de e-mails. A integração com o Amazon SES é feita de forma transparente, garantindo alta confiabilidade e escalabilidade.

A solução é baseada em uma arquitetura de microserviços, dividindo a aplicação em três serviços principais: `auth-service`, `api-key-service` e `email-service`. Cada `microserviço` segue a arquitetura em camadas (`layered architecture`) para garantir uma organização clara e modular do código.

## Casos de Uso
![Diagrama de Caso de Uso - Serviço de emails vpd](https://github.com/WesleyUlisses/Servi-o-de-Emails/assets/90068576/8fdca770-2497-4297-a02c-6d8d66d61155)

## Tecnologias Utilizadas
<ol>
  <li>
    Node.js
  </li>
  <li>
    Express.js
  </li>
<li>
  TypeScript
</li>
<li>
  Amazon SES
</li>
<li>
  Docker
</li>
<li>
  Redis
</li>
<li>
  PostgreSQL
</li>
<li>
  Sequelize ORM
</li>
<li>
  Google Cloud
</li>
<li>
  Swagger
</li>
</ol>


## Problemas Conhecidos

1. Suporte apenas ao domínio de e-mails do próprio serviço.
2. Documentação implantada apenas com Swagger.

## Contribuindo

Se você deseja contribuir com o Email-Service, siga estas etapas:

1. Faça um fork do repositório
2. Crie uma branch para sua nova feature (git checkout -b feature/nova-feature)
3. Faça commit das suas alterações (git commit -am 'Adiciona nova feature')
4. Faça push para a branch (git push origin feature/nova-feature)
5. Crie um novo Pull Request

## Licença

Este projeto está licenciado sob a MIT License.

### Autor

Wesley Ulisses
<wesleyulisses0@gmail.com>
