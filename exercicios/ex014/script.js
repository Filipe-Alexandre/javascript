function carregar(){
    var msg = window.document.querySelector('#msg')
    var foto = window.document.querySelector('#foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<p>Agora são ${hora} horas.</p>`
    if (hora >= 0 && hora < 12) {
        foto.src = 'foto-manha.jpg'
        document.body.style.background = "#6AB9F5"
    } else if (hora >=12 && hora <= 18) {
        foto.src = 'foto-tarde.jpg'
        document.body.style.background = "#FFC455"
    } else {
        foto.src = 'foto-noite.jpg'
        document.body.style.background = "#1E2936"
    }

}