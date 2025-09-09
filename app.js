let amigos = [];

function adicionarAmigo() {
    let campoAmigo = document.getElementById('amigo');
    let nomeAmigo = campoAmigo.value;

    if (nomeAmigo == '') {
        alert('Por favor, insira um nome.');
        return;
    }

    // adiciona o amigo ao array na memória
    amigos.push(nomeAmigo);
    console.log(amigos);
    
    // limpa o campo de input
    campoAmigo.value = '';

    // chama a função para atualizar a tela
    atualizarLista();
}

// Esta função apenas lê o array 'amigos' e atualiza a tela
function atualizarLista() {
    let lista = document.getElementById('listaAmigos'); 
    lista.innerHTML = ''; // Limpa a lista antes de recriá-la para evitar duplicação

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += "<li>" + amigos[i] + "</li>";
    }
}

// A tua função de sortear (ainda por finalizar)
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear.');
        return;
    }
    // Sorteia um índice aleatório
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    // Mostra o resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = 'O amigo sorteado é: ' + amigoSorteado;
}