// Retorno é o proprio db
const Database = require('./db.js')

// Sendo o db uma promise, possivel chamar mais then
// Os then são sempre funções que retorna 
// Usará async wait nos then
// Podendo assim executar linha por linha e não precisando de varios then's
// Se não tivesse async await, teriamos que fazer uma cadeia de then's
Database.then(async (db) => {
    // Inserir dados na tabela (db.run -> Irá rodar um código) 
    // Irá rodar uma instrução SQLite
     await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "-23.4244096",
            "-51.9518853",
            "Lar das meninos",
            "Presta assistência a crianças de 06 a 15 anos que se  encontre em situação de risco e/ou vulnerabilidade social.",
            "545645646",
            "https://images.unsplash.com/photo-1570473546427-50ca517710b2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            "Horário de visitas Das 18h até 8h",
            "0"
        ); 
    `)

    // Consultar dados da tabela
    // Funcionalidade db.all() é capaz de buscar todos os dados presentes no banco de DADOS
    // Pode colocar as informações em uma const
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")  
    console.log(selectedOrphanages)      

    // Consultar somente 1 orfanatos, pelo ID
    const selectOrphanage = await db.all('SELECT * FROM orphanages WHERE id = "6"')
    console.log(selectOrphanage)
})