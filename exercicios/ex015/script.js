function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#ano')
    var img = document.querySelector('#div02')

    if(fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('mf')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'm-crianca.png')
            } else if (idade < 22) {
                //jovem
                img.setAttribute('src', 'm-jovem.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'm-adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'm-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'f-crianca.png')
            } else if (idade < 22) {
                //jovem
                img.setAttribute('src', 'f-jovem.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'f-adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'f-idosa.png')
            }
        }
        div02.style.textAlign='center'
        div02.innerHTML = `Detectamos ${genero} com ${idade} anos`
        div02.appendChild(img)
    }
}