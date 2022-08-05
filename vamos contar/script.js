function contar() {
    var inicio = document.querySelector('#inicio')
    var fim = document.querySelector('#fim')
    var passo = document.querySelector('#passo')
    var res = document.querySelector('#res')
    var lembretes = document.querySelector('#lembretes')
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "Impossível contar! Verifique os dados e tente novamente"
    } else {
        lembretes.innerHTML = "Presione F5 para criar outra sequência"
        res.innerHTML = "Contando: "
        var i = Number(inicio.value)
        var f = Number(fim.value)
         var p = Number(passo.value)

        if (p <= 0) {
         window.alert("O 'passo' não pode ser 0, por isso vamos considerar ele igual a 1")
        p = 1
       }

        if(i < f) {
        for( let c = i ; c <= f; c += p){
            res.innerHTML += `${c} \u{1F449}`
           }
       } else {
        for( let c = i; c > f; c -= p ){
            res.innerHTML += `${c} \u{1F449}`
        }
       }

       
    }
}