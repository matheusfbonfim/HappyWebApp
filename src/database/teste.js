// Retorno é o proprio db
const Database = require('./db.js')

// Sendo o db uma promise, possivel chamar mais then
// Os then são sempre funções que retorna 
// Usará async wait nos then
// Podendo assim executar linha por linha e não precisando de varios then's
Database.then(async (db) => {
    // Inserir dados na tabela (db.run -> Irá rodar um código) 
    // Irá rodar uma instrução SQLite
    await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "-23.4244096",
            "-51.9418853",
            "Lar das meninas",
            "Presta assistência a crianças de 06 a 15 anos que se  encontre em situação de risco e/ou vulnerabilidade social.",
            "https://images.unsplash.com/photo-1570473546427-50ca517710b2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            "Horário de visitas Das 18h até 8h",
            "1"
        ); 
    `)

    // Consultar dados da tabela


})