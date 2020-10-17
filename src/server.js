/**Com o express é possivel inicializar um servidor, por isso é feito um "import"
 * com require da biblioteca express e depois inicializado o servidor
 * 
 * Instalamos tambem o nodemon para ficar atualizando sozinho o codigo e
 * não precisar encerrar o processamento do server
 */
// Importando dependencias/bibliotecas
const express = require('express'); // Função que chamara o pacotes 

// Iniciando o express 
// Sendo express uma função, a instancia de uma função torna-se um objeto
const server = express()

// get é uma forma de requisição
// A resposta da requisição é uma função middleware
// get(rota,) -> Cria uma rota/caminhos
server.get('/', () => {
    console.log('oi')
})

// Ligar o servidor
// Listen() -> como se o servidor estivesse escutando, no caso uma porta
server.listen(5500) // porta 5500