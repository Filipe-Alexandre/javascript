function contar() {
    var ini = document.querySelector('#i')
    var fim = document.querySelector('#f')
    var pas = document.querySelector('#p')
    var msg = document.querySelector('#msg')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        alert("[ERRO] Faltam dados")
        msg.innerHTML = "Impossivel contar"
        } else {
        msg.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
            }
            //Conatgem Crescente
            if (i < f) {
                for (let c = i; c <= f; c += p) {
                msg.innerHTML += ` ${c} \u{1F449} `
                }
            } else {
            //Contagem Regressiva
            for (let c = i; c >= f; c -= p) {
                msg.innerHTML += ` ${c} \u{1F449} `
            }
        }
        msg.innerHTML += ('\u{1F3C1}')
    }
}