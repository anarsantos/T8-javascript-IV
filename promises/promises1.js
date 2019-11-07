function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        if (sefundos > 10){
            reject("Muito tenpo para esperar")
        }
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, "Hm, esperei para falar"). then(frase => console.log(`${frase} - vim da promisse`)).catch(e => console.log(e))