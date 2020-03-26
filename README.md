# Semana Omnistack  - 11ª edição - 23/03 - 27/03

Novos conceitos que serão explorados:
- Dessa vez vai ter relacionamentos! 1 - muitos, etc
- Deeplinking

## 23/03

### Checklist Primeiro dia
	Apresentar aplicação
	Configurar ambiente de desenvolvimento
		Node.js & NPM
		Visual Studio Code
	Entender sobre back-end e front-end
	Criar projeto com Node.js
	Endender sobre React & SPA
	Criar projeto com ReactJS
	Entender sobre React Native & Expo

### Minhas anotações
1. npm init cria o package.json
2. frameworks: bibliotecas, ou conjunto de funcionalidades que todo projeto tem (abstração, inversão de controle em outras linguagens)
+ Rotas: express (micro-framework, poucas funcionalidades)
3. package-lock.json -> informações de cache

4. "Cannot GET /" -> não existe rota na aplicação
5. response.send() -> retorna um texto (html) ; response.json() -> retorna um objeto json

6. Abordagem tradicional -> Backend tem um template engine que devolve uma resposta em HTML já pronta, lindando com a parte de apresentação - o servidor retorna **todo o conteúdo da página**
7. Abordagem SPA -> React/Angular/Vue 

8. npx -> instalado junto com o npm e executa um pacote sem instalar localmente

9. React Native -> implementa o javascript-core (framework para entendimento da linguagem)

## 24/03

- Node.js & Express
	Rotas e recursos
	Métodos HTTP
	Tipos de parâmetros
- Utilizando o Insomnia
- Configurando Nodemon
- Diferenças entre bancos de dados
- Configurando o banco de dados
- Pensando nas entidades e funcionalidades
- Construção do back-end
- Adicionando módulos CORS (segurança)
- Enviando back-end ao Github

### Entidades:
- ONG
- Caso (incident)

### Funcionalidades:
- Login de ONG
- Logout de ONG
- Cadastro de ONG
- Cadastrar novos casos
- Deletar casos
- Listar casos específicos de uma ONG
- Listar todos os casos
- Entrar em contato com a ONG

1. Ao "caminho" ou "url" chamamos "recurso" (url tem recurso no acrônimo); geralmente associado a uma tabela da base

2. A "rota" é o caminho completo

3. Tipos de parâmetros:

>	Query Params: enviados dentro da url - parâmetros nomeados enviados na rota após "?" (filtros, paginação,etc) - & encadeia parâmetros
	recurso -> /users?name=Leonardo
	acesso: request.query

>	Route Params: parâmetros utilizados para identificar 
	recurso -> /users/:id
	acess: request.params

>	Request Body: Corpo da requisição utilizado para criar ou alterar recursos
	recurso com corpo via POST
	acesso: request.body
	app.use(express.json()); 
	// Antes de todas as requisições converter o corpo da requisição para json
	// importante estar antes das rotas


+ o request guarda todas as informações recebidas na requisição, o reponse tem as informações enviadas

4. Nodemon
instalar com argumento "-D" -> dependência instalada como dependência de desenvolvimento

criar script no package.json -> "start": "nodemon index.js"

5. Bancos SQL permitem ter maior controle da estrutura do projeto -> mais usado no mercado
+ Banco SQLite é armazenado na própria aplicação como um arquivo .sqlite
+ Driver (SELECT * FROM users) vs QueryBuilder (table('users').select('\*').where())
+ KNEX migrations -> funciona como um controle de versão do banco de dados
+ "npx knex" retorna todos os comandos possíveis; acho que esse comando evita ter que instalar o knex CLI

6. Back-end
+ informação de qual empresa ou usuário está logado vem do cabeçalho da requisição -> request.headers;
+ É possível desestruturar objetos e arrays - lembrando que objetos no javascript são estruturas com pares chave-valor (json)
+ Rota de login só verifica se a ONG existe ou não -> nome usual SessionController

## 25/03

## 26/03

## 27/03