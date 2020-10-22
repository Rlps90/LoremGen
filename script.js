function criarLorem() {
    let criarLorem = document.getElementById('loremtxt')

    if (criarLorem.value.length == 0) {
        alert('[ERRO]: Por favor, insira um número')
    } else {
        if (criarLorem.value < 0) {
            alert('[ERRO]: Por favor, insira um número positivo.')
        } else {
            document.getElementById('resultado').innerHTML = criarLorem.value *

        }
    }
}