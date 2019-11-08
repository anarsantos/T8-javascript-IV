// Fazer a chamada usando fetch para pegar uma imagem
// colcoar a imagem criando uma tag img no body
// lidando com erros

fetch("rainbow.jpg").then(response => {
    console.log(response);
    return response.blob()
    // para pegar a img
    // console.log(blob);
}).then(blob => {
    console.log(blob);
    document.getElementById("rainbow").src =
        URL.createObjectURL(blob)
})

// async await

async function pegarArcoIro(){
    const response = await fetch('rainbow.jpg')
    const blob = await response.blob()
    console.log(response);
    console.log(blob);
    document.getElementById('rainbow').src = 
    URL.createObjectURL(blob)  
}

// pagaArcoIro().then(() => console.log("YAY, carregou!")).catch(() => console.log(Droga! Não carregou:))
