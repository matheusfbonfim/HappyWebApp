/**Com o express é possivel inicializar um servidor, por isso é feito um "import"
 * com require da biblioteca express e depois inicializado o servidor
 * 
 * Instalamos tambem o nodemon para ficar atualizando sozinho o codigo e
 * não precisar encerrar o processamento do server (Reload automatico)
 */

// Importando dependencias/bibliotecas
const express = require('express'); // Função que chamara o pacotes 
// O path identifica o SO e coloca da maneira certa o diretorio
const path = require('path'); // Serve para inserir rotas/endereços 
// Importando um JS que tem o module exports com funcionalidades
// Funcionalidades usadas no get
const pages = require('./pages.js')

// Iniciando o express 
// Sendo express uma função, a instancia de uma função torna-se um objeto
const server = express()

server

// Utilizando os arquivos estatico (Sem alteração dinamica/Sem ligação com banco de dados...)
// Todos arquivos da pasta public são estaticos, e assim não altera em tempo real
// Abaixo mostra em que pasta (public) estão os arquivos estaticos
// Ao fazer isso ele faz todas as rotas para poder acessar o public, não precisando fazer uma a uma
// use irá aplicar a funcionalidade do expressar de fazer todas rotas da pasta public.
// Pode acessar diretamente do browser, dado que o server esteja ligado
.use(express.static('public'))

// Configurar template engine
// Precisamos ter isso para o HTML(arquivo estatico) ter variaveis,condicionais...funcionalidade
// Mesmo HTML não sendo linguagem de programação, o template ajuda ele ser praticamente uma
// Na views sera buscado os arquivos da views
// Esta configurando o caminho a ser seguido e foi preciso alterar os .htmls para .hbs
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

// get é uma forma de requisição (Requisição -> Resposta)
// Para executar é necessario sempre dar um F5 na pagina para fazer a requisição naquela rota
// A resposta da requisição é uma função middleware
// get(rota,resposta) -> Cria uma rota/caminhos
// Request-> Pedido / response -> Resposta do servidor
.get('/', pages.index)

// CRIANDO MAIS ROTAS DA APLICAÇÃO
/* Usando o module exports, as funções de resposta de requisição de cada get
   estão dentro de pages.js */
.get('/orphanage',pages.orphanage)
.get('/orphanages',pages.orphanages)
.get('/create-orphanage',pages.createOrphanage)



// Ligar o servidor
// Listen() -> como se o servidor estivesse escutando, no caso uma porta
server.listen(5500) // porta 5500