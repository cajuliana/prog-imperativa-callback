//Crie uma função acaoCarro(), que receberá uma callback como parâmetro. 
// Após isso, crie duas funções: andar() – deve exibir uma mensagem dizendo que o carro está andando – e parar() – 
//deve exibir uma mensagem dizendo que o carro parou.
// Execute ambas as ações utilizando a função acaoCarro(), passando suas ações como callbacks.

function acaoCarro (acao) {
    console.log(acao);
}

let andar = () => 'O carro está andando';
let parar = () => 'O carro está parado';

acaoCarro(andar());
acaoCarro(parar());