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

    async orphanage(req,res){
        // Para pegar o id da url, utiliza-se o query
        const id = req.query.id
        
         try {
            // Devido ao await, pode-se chamar o banco diretamente, sem o then para ter retorno
            // Chama o banco de dados 
            const db = await Database; 
            // Seleciona especificamente um orfanato
            // Para colocar a variavel id é preciso usar crase
            const results = await db.all(`SELECT * FROM orphanages WHERE id = "${id}"`)
            // orphanage[0] -> Pega somente o objeto, não o objeto dentro do array (que só tem 1 objeto)
            //console.log(orphanage[0])
            const orphanage = results[0]  

            // As imagens estão indo no formato texto, assim é necessário fazer a mudança
            // Tem que ir no formato array
            orphanage.images = orphanage.images.split(',')
            // Pega o link da primeira imagem
            orphanage.firstImage = orphanage.images[0]

            // Para colocar sobre o atendimento de fim de semana, tem que colocar
            // transformar o open_on_weekends em booleano
            if (orphanage.open_on_weekends == "0"){
                orphanage.open_on_weekends = false
            }else{
                 orphanage.open_on_weekends = true
            }

            //orphanage_on_weekends == "0" ? false : true 


            return res.render('orphanage', {orphanage}) 
        } catch (error) {
            // Mostrar o erro
            console.log(error);
            return res.send("Erro no banco de dados")
        }
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