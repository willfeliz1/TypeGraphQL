<h1 align="center">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgGCag8yiGIV9THYE9QDOyjhPEfiKtDB4SKw&usqp=CAU">
</h1>

## 📕 About

Projeto voltado a estudo da biblioteca TypeGraphQL fazendo consulta e criação de categorias e videos

## 💻 Installation & play

### Conexão com MongoDB

* Cria conta no site e um cluster no [mongo]
* Na Sandbox do Cluster vai em *Connect -> Connect your application -> Copia código uri exibida na tela*
* No arquivo *connection.ts* coloque o código como string alterando os parametros com <b>usuario</b>, <b>senha</b> e <b>nome do banco</b> conforme foi criado no site.</br>
<b>obs</b>: Você pode usar nome de banco *test* por padrão caso não houver um criado.

```sh
moongose.connect('mongodb+srv://<usuario>:<senha_usuario>@cluster0.btnxp.mongodb.net/test?retryWrites=true&w=majority',...);
```

### Instala dependencias & run

```sh
$ npm install
$ npm dev
```

### No painel do GraphQL na porta 4100

* Query - Busca de categorias ou videos

```sh
query {
  categories {
    name,
    description,
    _id
  }
}

query {
  videos {
    name,
    description,
    category
  }
}
```

* Mutation - Adicionar categorias ou videos

```sh
mutation {
  createCategory(categoryInput: {
    name: "Drama",
    description: "Categoria de Drama"
  }) {
    _id
  }
}

mutation {
  createVideos(videoInput: {
    name: "Filme de drama",
    description: "descricao de drama",
    category: <id_da_categoria_criada>
  }) {
    _id
  }
}
```

## ⚡ Techs

* Node
* GraphQL
* TypeGraphQL
* ApolloServer
* mongoose

[mongo]: <https://cloud.mongodb.com/>
