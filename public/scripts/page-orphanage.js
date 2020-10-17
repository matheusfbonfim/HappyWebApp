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
    iconUrl: "/images/map-marker.svg", // Localização do icone
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
    /* currentTarget -> evento atual que está disparando */
    const button = event.currentTarget; /* Retorna exatamente o botão clicado - HTML*/

    // REMOVER TODAS AS CLASSES .ACTIVE
    /* Percorrer um botao de cada vez e remover todas classes active do botão
     No caso é só uma 
     No documento voce fara uma busca por todos(querySelectorAll)
     Procura igual no css -> Foi colocado images button pois os botões estão na 
     classe image */
    const buttons = document.querySelectorAll(".images button") // Coloca todos os botões em um NOdelist
    /*console.log(buttons) -> Possivel ver no console do Google que é criado um array dos botões*/ 
    
    // Função que será usado em cada botão
    function removeActiveClass(button){
        /**No console do Google foi possivel ver que os botões estão não em uma lista
         * e sim numa NodeList, que tem algumas funcionalidades diferentes
         * 
         * Cada botão tem uma classList/ classList é um objeto
         */
        button.classList.remove("active")// Remove todas class active dos botões
    }

    // Percorre cada botao
    buttons.forEach(removeActiveClass)
    

    // SELECIONAR A IMAGEM CLICADA
    /* Pegar os filhos do botão que no caso seria a imagem
       Caso queira ver os filhos, basta colocar console.log(button.children)
       e ver no console do Google */
    const image = button.children[0] // Pega a imagem clicada clicada
    const imageContainer = document.querySelector(".orphanage-details > img") // Pegar somente a imagem maior

    /* ATUALIZAR O CONTAINER DE IMAGEM */
    /* Tendo o imageContainer, é preciso atualizar o container de imagem
       Quando fizemos o imageContainer, é possivel ter a funcionalidade de src, onde é 
       possivel atualizar o diretorio */
    imageContainer.src = image.src 

    /* Imagem maior */ 
    // ADICIONAR A CLASSE .ACTIVE PARA O BOTÃO SELECIONADO (button)
    button.classList.add('active') // Adiciona uma class List ao botão clicado
}