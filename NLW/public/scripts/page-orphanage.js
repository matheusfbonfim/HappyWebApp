/* Objeto que terá propriedades para servir de argumento*/
const options = {
    dragging: false, 
    touchZoom: false, // Desabilitar o zoom 
    doubleClickZoom: false, // Desabilitar o duplo clique para dar zoom
    scrollWheelZoom: false, // Desabilita a roda do mouse 
    zoomControl: false, // Desabilitar o controle de zoom
}


// Inicializaremos o mapa e definiremos sua visualização para nossas coordenadas geográficas escolhidas e um nível de zoom:
// O objeto L existe devido ao JS chamado no HTML
// O parametro options colocará restrições ao criar o mapa 
const map = L.map('mapid', options).setView([-23.4244096,-51.9418853],15);

/* Primeira camada que irá receber o map */
/* Depois adiciona a variavel map inicializada */
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


// Criando o icone 
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg", // Localização do icone
    iconSize: [58,68], // Largura e altura do iconSize
    iconAnchor: [29,68], // Onde estará ancorado
    popupAnchor: [170,2] // Deixar o popup ao lado (Caixa de mensagem ao lado do icone)
})


/* - Objeto L cria uma marcação em uma posição, adiciona ao mapa, liga o popup
   - Ir no google maps procurar um local e na url ver a latitude e longitude
   - Em um local em Maringá, ficou @23.4244096,-51.9418853
*/
L
    .marker([-23.4244096,-51.9418853], { icon: icon })
    .addTo(map)
    

/* Image Gallery - Criação da funcao que recebe o click */
function selectImage(event){
    const button = event.currentTarget; /* Retorna exatamente o botão clicado - HTML*/

    /* Percorrer um botao de cada vez e remover a classe active do botão*/
    /* No caso é só uma */
    

    /* Selecionar a imagem clicada */

    /* Atualizar o container de imagem */
}