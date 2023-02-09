function verificar() {
    var res = document.querySelector('#res')
    var ent = document.getElementsByName('ent')
    var foto = document.querySelector('#foto')
    
        if (ent[0].checked) {
            res.innerHTML = '<a href="https://youtu.be/xU3AB-L2yHQ" target="_blank"><img src="img-filme.png" alt="Filmes"></a>'
        } else if (ent[1].checked) {
            res.innerHTML = '<a href="https://youtu.be/prJ7a-NV5qY" target="_blank"><img src="img-serie.png" alt="Séries"></a>'
        } else if (ent[2].checked) {
            res.innerHTML = '<a href="https://youtu.be/88dk2hyIwCM" target="_blank"><img src="img-desenho.png" alt="Desenhos"></a>'
        } else if (ent[3].checked) {
            res.innerHTML = '<a href="https://youtu.be/zVgKnfN9i34" target="_blank"><img src="img-anime.png" alt="Animes"></a>'
        } else if (ent[4].checked) {
            res.innerHTML = '<a href="https://media.tenor.com/lndtLWwXZC0AAAAj/%D1%87%D1%82%D0%BE.gif" target="_blank"><img src="img-outros.png" alt="Outros"></a>'
        }

}