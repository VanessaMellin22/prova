var nomes = [];
function salvar() {
    var input = document.querySelector('#button');
    if (input.value != '') {
        var div = document.querySelector('#content');
        var paragrafo = document.createElement('b');
        var input_1 = document.querySelector('#button');
        var texto = document.createTextNode(input_1.value);
        div.appendChild(paragrafo);
        nomes.push(input_1.value);
        paragrafo.appendChild(texto);
    }
    input.value = "";
    console.log(nomes);
}
