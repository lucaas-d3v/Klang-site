
function anoAtual() {
    let data = new Date();
    let ano = data.getFullYear();

    document.getElementById('ano-atual').textContent = ano;
}

window.onload = anoAtual;