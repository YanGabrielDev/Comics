<h1>Teste Desenvolvedor Mobile Mobilus</h1>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=react js&message=lib&color=00BEF5&style=for-the-badge&logo=REACT"/>
    <img src="https://img.shields.io/static/v1?label=NODEJS&message=Runtime%20Built&color=339933&style=for-the-badge&logo=Node.js"/>
    <img src="https://img.shields.io/static/v1?label=Vite&message=Runtime%20Built&color=9467FE&style=for-the-badge&logo=vite"/>
  <img src="https://img.shields.io/static/v1?label=JAVASCRIPT&message=Language&color=F7DF1E&style=for-the-badge&logo=javascript"/>
  <img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge"/>
  <img src="http://img.shields.io/static/v1?label=License&message=MIT&color=green&style=for-the-badge"/>
</p>

> Status do Projeto: :heavy_check_mark:

### Tópicos

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Pré-requisitos](#pré-requisitos)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)

## Descrição do projeto

<p align="justify">
  Teste para a vaga de desenvolvedor mobile.
</p>

## Funcionalidades

:heavy_check_mark: Elabore um micro serviço, que em seu Back End busco em endpoints documentados
em https://documenter.getpostman.com/view/10808728/SzS8rjbc, que retorne todos os casos
de COVID-19, do Brasil dos últimos 6 meses.

:heavy_check_mark: Elabore uma aplicação (Web ou Mobile de acordo com a tecnologia solicitada) que
leia o serviço solicitado na Questão 1 e calcule a média móvel de mortes por COVID-19, no Brasil,
das duas últimas semanas, de acordo com a fórmula de média móvel, disponível em
https://agenciabrasil.ebc.com.br/saude/noticia/2020-08/agencia-brasil-explica-media-movel-de-casos-de-covid-19.

:heavy_check_mark: Elabore, na aplicação solicitada na Questão 2, uma tela (página) comparando e
apresentando as médias solicitadas e faça uma listagem dos dados utilizados para o cálculo.

:heavy_check_mark: Ainda utilizando o serviço elaborado na Questão 1 e a aplicação solicitada na Questão
2, elabore um serviço que, coloque os dados do último mês do Brasil em um array. Percorra o
array e selecione os itens que tem os maiores pontos no número de casos e o maior número de
mortes por COVID-19. Ao final, os pontos achados deverão ser gravados (de acordo o
mecanismo de persistência de dados solicitado), juntamente com a localização do usuário e a
data e o horário da consulta.

## Pré-requisitos

:warning: [Node](https://nodejs.org/en/download/)
:warning: [React Native CLI](https://reactnative.dev/docs/environment-setup)

## Como rodar a aplicação :arrow_forward:

No terminal, clone o projeto:

```
git clone https://github.com/gusbdev/teste-mobilus
```

### APP

Pelo terminal navegue para a pasta app e execute o comando:

```
yarn install
ou
npm install
```

Isso irá instalar as dependências da aplicação para execução no ambiente de desenvolvimento

Depois, basta executar o comando:

```
npx react-native run-android
```

### API

Antes de executar a API, precisa ter um banco de dados MySQL. Pode-se usar o [arquivo SQL](https://github.com/gusbdev/teste-mobilus/blob/main/teste-mobilus.sql) para importar o banco. Também é possível somente criar um banco com o nome de "_teste-mobilus_" e executar a API. Após isso, a criação da tabela e das colunas será criada de forma automática, graças ao ORM Sequelize.

No terminal, navegue para a basta **api** e execute o comando:

```
yarn install
ou
npm install
```

Isso irá instalar as dependências da aplicação para execução no ambiente de desenvolvimento

Depois, execute o comando:

```
yarn start
ou
npm start
```

Isso irá rodar a aplicação em https://localhost:8080

**Algumas considerações**

**_APP_**

No arquivo [api.js](https://github.com/gusbdev/teste-mobilus/blob/main/app/src/services/api.js), precisa alterar o endereço do IP local.

**_API_**

No arquivo [database.js](https://github.com/gusbdev/teste-mobilus/blob/main/api/src/database/database.js), estão as configurações de conexão do banco:

```
const Sequelize = require("sequelize");

const connection = new Sequelize("nome-do-banco", "usuario-do-banco", "senha-do-banco", {
  host: "localhost",
  dialect: "mysql",
  timezone: "-03:00",
});

module.exports = connection;
```

## Linguagens, dependencias e libs utilizadas :books:

Para o APP

- [@react-native-community/geolocation](https://github.com/react-native-geolocation/react-native-geolocation) - para pegar a localização do usuário
- [React Navigation](https://reactnavigation.org/) - responsável por gerir a navegação (Abas)
- [Axios](https://axios-http.com/docs/intro) - realiza requisições HTTP
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) - lib para ícones

Para a API

- [Express](https://expressjs.com/) - framework que lida com requisições HTTP entre outras coisas
- [Sequelize](http://sequelize.org/) - ORM usado para mapeamento de dados

## Desenvolvedores/Contribuintes :octocat:

[<img src="https://avatars2.githubusercontent.com/u/44094756?s=460&u=a2a2631e8eb8f5f5cdff75121eb422188a64bb85&v=4" width=115><br><sub>Gustavo Barbosa</sub>](https://github.com/gusbdev)

## Licença

The [MIT License]() (MIT)
