// Inicializaremos o mapa e definiremos sua visualização para nossas coordenadas geográficas escolhidas e um nível de zoom:
// O objeto L existe devido ao JS chamado no HTML
const map = L.map('mapid').setView([-23.4244096,-51.9418853],15);

/* Primeira camada que irá receber o map */
/* Depois adiciona a variavel map inicializada */
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


// Criando o icone 
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg", // Localização do icone
    iconSize: [58,68], // Largura e altura do iconSize
    iconAnchor: [29,68], // Onde estará ancorado
})


/* Let deixa alterar o valor */
let marker;

/* O map tem uma funcionalidade devido a class leafleft vinda da biblioteca */
/* Função on -> Está ouvindo algo -> esperando o click */
/* Teve o click, executará uma função */
/* O click passará um parametro event */
/* A variavel marker é declarada somente uma vez, mas essa função pode ser chamada
   varias vezes */
map.on('click', (event) => {
    /* event terá a latitude e longitude por meio do objeto latlng*/
    const lat = event.latlng.lat; /* Pegando somente a latitude */
    const lng = event.latlng.lng; /* Pegando somente a longitude */

    /* Pegar um elemento (inputs) no document (HTML) e atribuir lat e lng */
    /* Insere value nos inputs selecionados */
    /* Esses values aparecerá na url quando o formulário for enviado */
    document.querySelector('[name=lat]').value = lat; // [name=lat] -> Qualquer tipo de tag que tiver tag com name = lat 
    document.querySelector('[name=lng]').value = lng;

    // REMOVER ICONE ANTERIOR E COLOCANDO OUTRO(Caso haja mais que um clique)
    // Se ja estiver um marker(primeiro verdadeiro), ele excluirá do mapa o marker, com o removeLayer
    marker && map.removeLayer(marker)
    // E colocara o novo abaixo
    
    /* - Objeto L cria uma marcação em uma posição, adiciona ao mapa com icone*/
    marker = L.marker([lat,lng], {icon}).addTo(map);
})


    