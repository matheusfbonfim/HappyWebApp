// Exportação de um modulo JS que será um array contendo os orfanatos
// Como se fosse um banco de dados "fake"
module.exports = [
    
    // Objetos que refere-se a pagina orphanage
    // Cada objeto é um orfanato, que tem alguns dados, como colocado em cada objeto
    {
        // ID de cada orfanato
        id: 1,
        //Latitude
        lat:"-23.4244096",
        //Longitude
        lng:"-51.9418853",
        // Titulo/nome do orfanato
        name: "Lar das meninas",
        description: "Presta assistência a crianças de 06 a 15 anos que se  encontre em situação de risco e/ou vulnerabilidade social.",
        // Um array que contem as imagens (Imagens aleatorias de sites) 
        images:[
            "https://images.unsplash.com/photo-1570473546427-50ca517710b2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ],

        // Instruções do orfanato
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",

        // Horário de visita
        opening_hours:"Horário de visitas Das 18h até 8h",

        // Atende final de semana
        open_on_weekends: "1"

    },

    {
        // ID de cada orfanato
        id: 2,
        //Latitude
        lat:"-23.4244096",
        //Longitude
        lng:"-51.9518853",
        // Titulo/nome do orfanato
        name: "Lar dos meninos",
        description: "Presta assistência a crianças de 06 a 15 anos que se  encontre em situação de risco e/ou vulnerabilidade social.",
        // Um array que contem as imagens (Imagens aleatorias de sites) 
        images:[
            "https://images.unsplash.com/photo-1570473546427-50ca517710b2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ],

        // Instruções do orfanato
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",

        // Horário de visita
        opening_hours:"Horário de visitas Das 18h até 8h",

        // Atende final de semana
        open_on_weekends: "0"
    }
]