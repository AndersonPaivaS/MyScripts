function gerar() {
    let numero = document.querySelector('#numero')
    let tab = document.querySelector('#tab')
    let paragrafo = document.querySelector('#paragrafo')

    if (numero.value.length == 0) {
        window.alert('Digite um número para obter a tabuada!')
    } else {
        
        let num = Number(numero.value)
        let contador = 1
        tab.innerHTML = ''
        while (contador <= 10) {
            let item = document.createElement('option')
            item.text = `${num} x ${contador} = ${num*contador}`
            item.value = `tab${contador}`
            tab.appendChild(item)
            contador++
        }

        paragrafo.innerHTML = "Nos países desenvolvidos os currículos dos dois primeiros anos escolares dão lugar de destaque à “fluência nos fatos fundamentais” da adição e subtração e, no 3o ano, da multiplicação e divisão."
    }
}