const fruta = ["banana", "morango", "bacurí", "laranja"];

const valorInput = document.querySelector("input");

const submitar = document.querySelector("button");

submitar.addEventListener("click", function (){
    let digitado = fruta.find(f => f === valorInput.value)

    if (digitado === valorInput.value) {
        console.log("Achei")

    } else {
        alert("não encontrado")
    }
})

// Código da Simara:

// let input = document.querySelector("input")
// console.log(input)

// let button = document.querySelector("button")
// console.log(button)

// button.addEventListener("click", function () {

//     let buscarFrutas = frutas.filter((fruta) => fruta === input.value)
//     console.log(buscarFrutas)

//     if(buscarFrutas.length>0) {
//         console.log("Tem!!")
//     } else{
//         console.log("Não tem!!")
//     }
// })
