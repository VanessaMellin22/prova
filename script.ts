let nomes : string[] = [];
function salvar(){
    let input : HTMLInputElement | null =
    document.querySelector('#button')!;

    if(input.value != ''){
        let div : HTMLDivElement | null =
        document.querySelector('#content')!;

        let paragrafo : HTMLElement | null =
        document.createElement('b');

        let input : HTMLInputElement | null =
        document.querySelector('#button')!;
    
        let texto = document.createTextNode(input.value);
         
        div.appendChild(paragrafo);
        nomes.push(input.value);
        paragrafo.appendChild(texto);
    }
    input.value="";
    console.log(nomes);
}