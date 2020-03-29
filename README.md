# Semana Omnistack  - 11ª edição - 23/03 - 27/03

Novos conceitos que serão explorados:
- Dessa vez vai ter relacionamentos! 1 - muitos, etc
- Deeplinking

## 23/03

### Checklist Primeiro dia
- Apresentar aplicação
- Configurar ambiente de desenvolvimento
	- Node.js & NPM
	- Visual Studio Code
- Entender sobre back-end e front-end
- Criar projeto com Node.js
- Endender sobre React & SPA
- Criar projeto com ReactJS
- Entender sobre React Native & Expo

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
	- Rotas e recursos
	- Métodos HTTP
	- Tipos de parâmetros
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

- Limpando estruturas
- Conceitos do React
	- Componentes
	- JSX
	- Propriedades
	- Estado
	- Imutabilidade
- Configurando rotas
- Cadastro de ONGs
- Listagem de casos
- Cadastro de um novo caso
- Conectando aplicação à API
- Enviar projeto ao Github

1. Primeiro arquivo que é aberto pelo React é o **/public/index.html**
	O React monta a estrutura da página via JavaScript

2. React-dom -> integração do React com o navegador (DOM)

3. Componentes no React podem ser escritos como Tags HTML
	Um componente no React é uma função que retorna HTML

4. Quando HTML está escrito dentro do Javascript temos JSX (Javascript XML)

5. **Propriedades**: São análogas ao atributos do HTML, porém são passadas aos **Componentes do React** ao invés de para um elemento HTML -> usar argumento "props" no componente
`
// App
function App() {
  return (
    <Header title="Semana OmniStack"/>
  );
}
// Header
 return(
        <header>
            <h1> {props.title} </h1>
        </header>
    );
` 
Ou
`
// App
	return(
	    <Header>
	      Semana Omnistack
	    </Header>
	);
// Header
	return(
        <header>
            <h1> {props.children} </h1>
        </header>
    );  
`

6. O React é uma importação essencial em todo lugar que for ser utilizado JSX

7. Injetar variáel, função, etc do JS dentro do HTML -> usar "{ }"

8. Dá pra usar desestruturação no argumento do componente (*props*)

9. No React não se pode colocar um elemento abaixo do outro sem um "container" - acho que é como se o componente só pode retornar UMA "tag" (o que tem dentro dela já é outra história...)

10. Toda vez que o **Estado** for alterado o componente é remontado (renderizado novamente) para atualizar a tela

11. Imutabilidade: Por questão de performance não é possível alterar diretamente o valor do estado -> necessário sobrepor o valor 

12. Cada página será um componente (uma pasta pra cada também)

13. Google Fonts: 27:20 / Ativar Emmet no VS Code : 31:20

14. Pacotes de Icones: Material Icons, Font Awesome, Feather icons

15. No React as classes no HTML (JSX) são indicadas por "className" pois "class" é uma palavra reservada do JS

16. Rotas na aplicação frontend: react-router-dom

17. Usar componente "Link" do react-router-dom no lugar do "a" do HTML -> comportamento SPA, não recarrega a página inteira

Continuar em 52:00

## 26/03

## 27/03