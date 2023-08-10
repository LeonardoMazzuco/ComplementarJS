let inputNome = document.querySelector('#nome')
let inputIdade = document.querySelector('#idade')


const nomes = []
const idades = []

function salvarInformacoes() {
    nomes.push(inputNome.value)
    idades.push(inputIdade.value)

    console.log(nomes)
    console. log(idades)
    inputNome.value = ''
    inputIdade.value = ''
}

function visualizarInformacoes() {
    alert(nomes)
    alert(idades)
}