class Card{
    constructor(receita){
        this.receita = receita
    }
    render(){
        const {
            imagem,
            titulo,
            ingredientes
        } = this.receita

        const card = `<div class="card">
        <img class="imagem" src="${this.receita.imagem}" />
        <h2>${this.receita.titulo}</h2>
        <p class="ingredientes">${ingredientes}</p>
        </div>`
        document.querySelector('.cards').insertAdjacentHTML('beforeend', card)
        
    }
}
// um componente precisa ser genérico para quando eu precisar reenderizar em qualquer pg deixar o critério de qual tag usar na main, a lógica de reenderização utiliza o mais
