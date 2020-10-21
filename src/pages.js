// Chamando o banco de dados a aplicação
const Database = require('./database/db')

// Utilizado para salvar no banco de dados 
const saveOrphanage =  require('./database/saveOrphanage')

/* Será utilizado o module exports para disponibilizar o uso da funções
   ou elementos aqui criados */

/* Module exports irá exportar o objeto */
module.exports = {

    // console.log(request.query) // Retorna todos os dados da requisiçao(url) depois da ?
    // return response.send("Oi") // Com send enviamos a resposta 
    // __dirname retorna o diretorio atual 
    // Path contribui para fazer a roda de maneira dinamica, independ. do SO
    //return response.sendFile(path.join(__dirname,'views','index.html')) // Envia um arquivo como resposta
    

    /* Função usada dentro do get como resposta para requisição */
    index(req,res){
        // A resposta(response) vai renderizar a pagina usando o index (Uso da template engine)
        return res.render('index')
    },

    orphanage(req,res){
        // Tem como resposta a pagina orphanage renderizada
        return res.render('orphanage')
    },

    // Devido a estar utilizando o await tem que usar async
    async orphanages(req,res){
        // Vai tentar isso aqui, e caso der errado, emitir mensagem
        try {

            // Devido ao await, pode-se chamar o banco diretamente, sem o then para ter retorno
            const db = await Database;
            // Tem como resposta a pagina orphanages renderizada  
            // Tem que enviar os dados para pagina orfanages (page-orphanages)
            // Tem que importar o modulo de fakedata e passar como parametro 
            // O segundo parametro esta passando os dados para o front-end
            const orphanages = await db.all("SELECT * FROM orphanages") 
            return res.render('orphanages', { orphanages })

        } catch(error) {
            console.log(error)
            return res.send("Erro no banco de dados")
        }
        
    },

    createOrphanage(req,res){
        // Tem como resposta a pagina create-orphanage renderizada
        return res.render('create-orphanage')
    }
}