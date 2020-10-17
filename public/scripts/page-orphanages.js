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

// Criando o popup (Caixa de mensagem)
// Maiores entendimentos é olhando a documentação
const popup = L.popup({
    closeButton: false, 
    className: 'map-popup',
    minWidth: 240, // Largura minima
    minHeight: 240 // Altura minima
}).setContent('Lar das meninas <a href="/orphanage?id=1" class="choose-orphanage"> <img src= "/images/arrow-white.svg"></a>')



/* - Objeto L cria uma marcação em uma posição, adiciona ao mapa, liga o popup
   - Ir no google maps procurar um local e na url ver a latitude e longitude
   - Em um local em Maringá, ficou @23.4244096,-51.9418853
*/
L
    .marker([-23.4244096,-51.9418853], { icon: icon })
    .addTo(map)
    .bindPopup(popup)
    