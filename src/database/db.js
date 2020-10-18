// BANCO DE DADOS DA APLICAÇÃO
const Database = require('sqlite-async') // Importando o sqlite para app

// Função que pegará o banco de dados
function execute(db){
    // Executa o banco de dados após estar aberto
    // Ao executar já criará uma tabela dentro do banco se não existir
    // O codigo dentro de execute tem a notação do SQLite // O id vai se autoincrementar
    
    return db.exec(`
    CREATE TABLE IF NOT EXISTS orphanages (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        lat TEXT, 
        lng TEXT,
        name TEXT, 
        about TEXT, 
        whatsapp TEXT, 
        images TEXT,
        instructions TEXT, 
        opening_hours TEXT, 
        open_on_weekends TEXT
        );
        `)
}
    
// Database é um objeto 
// Pede para o banco de dados(sqlite-async) abrir no diretorio atual e coloque
// um arquivo database.sqlite
/* Usaremos uma promise, isto é, vamos abrir o banco de dados no diretorio
   e quando abrir, irá fazer uma funcionalidade (then(function...)) */
// Then recebe de parametro uma função que recebe de param. o banco de dados que acabou de abrir
// O banco de dados é colocado no module exports para possiveis exportações
// Then retorna o banco de dados depois de alguma execução
module.exports= Database.open(__dirname + '/database.sqlite').then(execute)//db; 
    