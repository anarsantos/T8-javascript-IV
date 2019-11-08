const titulo = document.getElementById("titulo")
const descricao = document.getElementById("descricao")
const btnSubmit = document.getElementById("btn-submit")

btnSubmit.addEventListener('click', function(event){
    event.preventDefault()
    // Pra que serve o preventDefault?

    // abaixo segue construção do payload
    let body = JSON.stringify({
        title: titulo.value,
        body: descricao.value,
        // body - é a mensagem no comentário
        useerId: 1
    })

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body
    }).then( reponse => resonse. json()).then(json => console.log(json)
    )
    // quando uso arrow function que na mesma linha vai executar this.assignedSlot, não precisa de return
})