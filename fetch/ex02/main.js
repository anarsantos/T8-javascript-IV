//... continuem a pegar os inputs do index.html para preencher depois com o valor da api
const cepInput = document.getElementById("cep")
const logradouroInput = document.getElementById("logradouro")
const complementoInput = document.getElementById("complemento")
const bairroInput = document.getElementById("bairro")
const localidadeInput = document.getElementById("localidade")
const ufInput = document.getElementById("uf")


cepInput.addEventListener("blur", ()=>{
    // quando uso o "blur" o usuário irá clicar fora e os outros campos serão preenchido automaticamente
    if(cepInput.value){
        fetch(`https://viacep.com.br/ws/${cepInput.value}/json`).then(response => {
            return response.json()
        }).then(json => {
            preencherCampos(json)
            ///façam aparecer os valores nos inputs
        })
    }
})

preencherCampos = dados => {
    logradouroInput.value = dados.logradouro
    complementoInput.value = dados.complemento
    bairroInput.value = dados.bairro
    localidadeInput.value = dados.localidade
    ufInput.value = dados.uf
}