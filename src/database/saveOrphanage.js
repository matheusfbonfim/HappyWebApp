// Paramento da função serão os dados para salvar a pagina (orphanage)
// Paramento da função db é o banco de dados
function saveOrphanage(db, orphanage) {
    // Sendo db o proprio banco de dados, o db run vai executar o codigo de Parametro
    // O codigo é sqlite para inserir no banco
    // Têm-se o dados em orphanage, e utilizaremos tal para enviar os dados para o inserting
  
    return db.run(`
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
        "${orphanage.lat}",
        "${orphanage.lng}",
        "${orphanage.name}",
        "${orphanage.about}",
        "${orphanage.whatsapp}",
        "${orphanage.images}",
        "${orphanage.instructions}",
        "${orphanage.opening_hours}",
        "${orphanage.open_on_weekends}"
    ); 
`);
}

module.exports = saveOrphanage; // Atalho para função
