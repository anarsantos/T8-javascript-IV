// abstração - pega o que tem no obj para usar no sistema
// encapsulamento
// herança - uma classe pode herdar características de outra classe
// polimorfismo


const crianca = new Object
console.log(typeof crianca);
crianca.nome = 'Elaine'
crianca.idade = 5
crianca['brinquedo favorito'] = 'Homem aranha'
console.log(crianca['idade']);
console.log(crianca['brinquedo favorito']);
delete crianca.idade

// Notação literal

const crianca2 = {
    nome: 'Paulo',
    idade: 6,
    enderco: {
        logradouro: 'Rua dos bobos',
        numero: 0,
        referencia: [
            {
                endereço: {
                    logradouro: 'Rua dos bobos',
                    numero: 2,
                    descricao: 'Mercado'
                }
            }
        ]
    },
    responsaveis: [{
        nome: 'Teresa',
        telefone: '1199999999',
        parentesco: 'tia'
    }, {
        nome: 'João',
        telefone: '11999999999',
        parentesco: 'pai'
    }],
    podeBrincar: false
}
console.log(crianca2);
delete crianca2.idade
console.log(crianca2);
delete crianca2
// console.log(crianca2.endereco.logradouro);


// Função construtora

function Crianca(nome, idade, altura) {
    // função construtora - irá gerar um modelo, por isso 'Crianca' está em maiúscula
    this.nome = nome
    this.idade = idade
    this.altura = altura
    this.podeBrincar = () => {
        return (altura > 1)
    }
}

const c1 = new Crianca('Bete', 6, 1.1)
console.log(`${c1.nome} tem ${c1.altura} e ${ c1.podeBrincar() ? 'pode brincar' : 'não pode brincar'}}`);
c1.especifico = true
const c2 = new Crianca('Carlos', 4, 0.8)
console.log(`${c2.nome} tem ${c2.altura} e ${c2.podeBrincar() ? 'pode brincar' : 'não pode brincar'}`)


const fromJSON = JSON.parse('{"info": "Vim do JSON"}')
console.log(fromJSON);
console.log(fromJSON.info);

// os valores da constatne pessoa tão no endereço A
const pessoa = {nome: "Gustavo"}
console.log(pessoa);
pessoa.nome = "Geraldo"
console.log(pessoa);

// os valores da constante pessoa2 tão no endereço A
const pessoa2 = pessoa
pessoa2.nome = "Tereza"
console.log(pessoa);
console.log(pessoa2);

const a = 1
const b = 2
const c = 3
const obj1 = {a:a, b:b, c:c}
const obj2 = {a, b, c}
console.log(obj1);
console.log(obj2);

const nomeAttr = 'nota'
const valotAttr = 8
const obj3 = {}
obj3[nomeAttr] = valotAttr
console.log(obj3);
const obj4 = {[nomeAttr]: valotAttr}
console.log(obj4);

const crianca4 = {
    nome: 'Jani',
    idade: 6,
    altura: 1.2
}

console.log(Object.keys(crianca4));
console.log(Object.values(crianca4));
console.log(Object.entries(crianca4));

// entries - retorna array de array

Object.entries(crianca4).forEach(([chave, valor]) => {
    console.log(`${ chave }: ${ valor }`);
})

Object.difineProperty(crianca4, 'dataNascimento', {
    enumerable: false,
    writable: false,
    value: '29/08/2013'
})

console.log(crianca4);
crianca4.dataNascimento = 'batata'
console.log(crianca4.dataNascimento);

const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a:4}
const obj5 = Object.assign(dest, o1, o2)

const produto = Object.preventExtensions({
    nome: 'Notebook',
    preco: 2,
    tag: 'promocao'
})

produto.desconto = 100
console.log(produto);
produto.nome = 'banana'
console.log(produto);
console.log(Object.isExtensible(produto));
console.log(Object.isExtensible(obj5));
delete produto.tag

const pessoa7 = {
    nome: 'Claudia',
    idade: 32
}

console.log(pessoa7);
Object.seal(pessoa7)
pessoa7.sobrenome = 'Rodrigues'
console.log(pessoa7);
delete pessoa7.nome
console.log(pessoa7);
pessoa7.nome = 'Fernanda'
console.log(pessoa7);

const pessoa8 = {
    nome: 'Claudia',
    idade: 32
}

Object.freeze(pessoa8)
pessoa8.sobrenome = 'Rodrigues'
console.log(pessoa8);
delete pessoa8.nome
console.log(pessoa8);
delete pessoa8.nome
console.log(pessoa8);
pessoa8.nome = 'Fernanda'
console.log(pessoa8);



// Função construtora
function Pessoa(nome, idade, corFavorita) {
    this.nome = nome
    this.idade = idade
    this.corFavorita = corFavorita
}

let mae = new Pessoa('Ana', 35, 'vermelho')
let tio = new Pessoa('Cleber', 49, 'rosa')

Pessoa.prototype.apresentacao = function () {
    return `O nome da mãe é: ${this.nome}`
}

console.dir(Pessoa);


console.log(mae.apresentacao());
console.log(tio.apresentacao());
mae.apresentacao = function(){
    return `O nome da mãe é: ${this.nome}`
}
console.log(mae.apresentacao());

// console.log(mae.apresentacao())
// console.log(tio.apresentacao())
// mae.apresentacao = function(){
//     return `apresentação especial da mãe: ${this.nome} e tenho ${this.idade}`
// }
// console.log(mae.apresentacao())

// Json - é uma notação textual do objeto
// A classe é uma função

// nome, sobrenome, materia
function Professor(nome, sobrenome, materia) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.materia = materia
}

Professor.prototype.dizMareria = function() {
    return `A matéria é: ${this.materia}`
}

const js3 = new Professor('Cintia', 'Fumi', 'JavaScript 3')
console.log(js3.dizMareria());
const js4 = new Professor('Lydia', 'Rodrigues', 'JavaScript 4')

js4.dizMareria = function() {
    return `A professora é: ${this.nome} e a matéria é ${this.materia}`
}

console.log(js4.dizMareria());

const avo = {attr1: 'A'}
const mae = {_proto_: avo, attr2: 'B', attr3: 'E'}
const filha = {_proto_: mae, attr3: 'C'}
console.log(filha.attr1, filha.attr2, filha.attr3);

class Avo {
    constructor(sobrenome = 'Rodrigues'){
        this.sobrenome = this.sobrenome
    }
}

class Mae extends Avo {
    constructor(sobrenome, profissao = 'Cineasta'){
        super(sobrenome)
        // super - reaproveita a propriedade que está acima
        this.profissao = profissao
    }
}

class Filha extends Mae {
    constructor(){
        super('Silva')
    }
}

const novaFilha = new Filha
novaFilha.profissao = 'Atiz'
console.log(novaFilha);
const novaMae = new Mae
console.log(novaMae);









const avo = { attr1: 'A'}
const mae = {__proto__:avo, attr2: 'B', attr3:'E'}
const filha = {__proto__:mae, attr3: 'C'}
console.log(filha.attr1, filha.attr2, filha.attr3)

class Avo {
    constructor(sobrenome = "Rodrigues"){
        this.sobrenome = sobrenome
    }
}

class Mae extends Avo {
    constructor(sobrenome, profissao="Cineasta"){
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filha extends Mae {
    constructor(){
        super('Silva')
    }
}

const novaFilha = new Filha
novaFilha.profissao = "Atriz"
console.log(novaFilha)
const novaMae = new Mae
console.log(novaMae)