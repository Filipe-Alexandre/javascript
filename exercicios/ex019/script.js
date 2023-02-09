function gerar() {
    let num = document.querySelector('#txtn')
    let tab = document.querySelector('#idtab')
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} \u{00d7} ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }

}