// fazer o fetch para ver se carregamos o array de cartas

const cardSection = document.getElementById('cards-section')


caso o card não 
const placeholderCard = {
    nome: "Carta não carregada",
    tipo: "Arcano Maior",
    descricao: " Sem descrição",
    imagem: "http://via.placeholder.com/250X500",
    link: "https://www.astrolink.com.br/"
}

renderizaCarta = carta => {
    const novaCarta = new Card(carta).render()
    cardSection.innerHTML = novaCarta
}

// fetch('tarot.json').then(response =>{
//     return response.json()
// }).then(json => {
// console.log(json);
// renderizaCarta(json[0])
// })

// fazer uma função para tirar uma nova carta aleatória
selecionaCartaAleatoria = cartas => {
    let numeroAleatorio = Math.floor(Math.random() * cartas.lenth)
    return cartas[numeroAleatorio]
}

// transformar nosso fetch num async  await
async function carregaCartas() {
    try {
    const response = await fetch('tarot.json')
    console.log(response)
    if(!response.ok) throw `com o status:${response.status}`
    const json = await response.json()
    renderizaCarta(selecionaCartaAleatoria(json))
} catch(e){
    renderizaCarta(placeholderCard)
    errorSection.innerHTML = `A requisição falhou: ${e}`
}
}

carregaCartas()
novaCarta = () => {
    carregaCartas()
}