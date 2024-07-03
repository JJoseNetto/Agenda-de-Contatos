const form = document.getElementById('form-atividade');
const Nomes = [];
const Telefones = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){
    const inputNomeCadastro = document.getElementById('nome-cadastro');
    const inputTelCadastro = document.getElementById('tel-cadastro');
    const telValue = inputTelCadastro.value.trim();

    if (!isTelefoneValido(telValue)) {
        alert('O telefone deve ter no mínimo 8 dígitos e no máximo 14 dígitos.');
        return;
    }

    if (Telefones.includes(parseFloat(telValue))) {
        alert(`O telefone: "${telValue}" já foi inserido`);
    } else {
        Nomes.push(inputNomeCadastro.value);
        Telefones.push(parseFloat(telValue));

        let linha = `<tr>`;
        linha += `<td>${inputNomeCadastro.value}</td>`;
        linha += `<td>${telValue}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNomeCadastro.value = '';
    inputTelCadastro.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function isTelefoneValido(telefone) {
    const telefoneNumerico = telefone.replace(/\D/g, '');
    return telefoneNumerico.length >= 8 && telefoneNumerico.length <= 14;
}
