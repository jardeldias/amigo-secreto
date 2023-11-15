let amigos = [];

function embaralha(lista) {

    let indice = lista.length

    let indiceAleatorio;

    while (indice) {
        // atenção para o pós-incremento indice-- 
        indiceAleatorio = Math.floor(Math.random() * indice--);
        [lista[indice], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice]];
    }
}


function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');
    if (nomeAmigo.value == ''){
        alert('Informe o nome do amigo.')
        return;
    }

    if (amigos.includes(nomeAmigo.value)) {
        alert('Nome já adicionado.');
        return;
    }
    
    let lista = document.getElementById('lista-amigos');
    amigos.push(nomeAmigo.value);
    if (lista.textContent == '') {
        lista.textContent += nomeAmigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + nomeAmigo.value;
    }
    nomeAmigo.value = '';
}

function sortear() {
    if (amigos.length < 4){
        alert('Adicione pelo menos 4 amigos.')
        return;
    }
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br/>';
        }
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';
}