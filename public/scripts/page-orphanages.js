// Inicializaremos o mapa e definiremos sua visualização para nossas coordenadas geográficas escolhidas e um nível de zoom:
// O objeto L existe devido ao JS chamado no HTML
const map = L.map('mapid').setView([-23.4244096,-51.9418853],15);

/* Primeira camada que irá receber o map */
/* Depois adiciona a variavel map inicializada */
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


// Criando o icone 
const icon = L.icon({
    iconUrl: "/images/map-marker.svg", // Localização do icone
    iconSize: [58,68], // Largura e altura do iconSize
    iconAnchor: [29,68], // Onde estará ancorado
    popupAnchor: [170,2] // Deixar o popup ao lado (Caixa de mensagem ao lado do icone)
})

// Função para criar o popup e marcar no mapa a devida indicação de cada orfanato
// Preciso fazer a função devido a ter varios pontos no mapa
// Analisar quais elementos são dinâmicos e fazer mudanças
// Parametro é um objeto orphanage (como se fosse um elemento do array de objeto de fakedata.js)
function addMarker({id, name, lat, lng}){

    // Criando o popup (Caixa de mensagem)
    // Maiores entendimentos é olhando a documentação
    const popup = L.popup({
        closeButton: false, 
        className: 'map-popup',
        minWidth: 240, // Largura minima
        minHeight: 240 // Altura minima
    }).setContent(`${name} <a href="/orphanage?id=${id}"><img src= "/images/arrow-white.svg"></a>`)
    
    /* - Objeto L cria uma marcação em uma posição, adiciona ao mapa, liga o popup
       - Ir no google maps procurar um local e na url ver a latitude e longitude
       - Em um local em Maringá, ficou @23.4244096,-51.9418853
    */
    L
        .marker([lat,lng], { icon: icon })
        .addTo(map)
        .bindPopup(popup)
} 

// Apos a função, temos que pegar as informações no span hidden presente no HTML
// Pegar todos os spans presentes no bloco orphanages
// É possivel notar que a const é um NodeList com cada span
const orphanageSpan = document.querySelectorAll('.orphanages span')
//console.log(orphanageSpan)

// Para cada span, executar uma função
orphanageSpan.forEach( span => {
    // Pegar elementos de cada span e colocar em um objeto
    const orphanage = {
        // Sendo o span uma tag no html, o dataset faz parte do objeto tipo html (span)
        // O dataset sempre referencia o data-...
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }
    console.log(span)
    // Passar o objeto como parametro e criar o ponto no mapa
    addMarker(orphanage)
})
    