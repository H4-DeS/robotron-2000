const soma = document.querySelectorAll(".controle-ajuste");
const subtrai = document.querySelectorAll("#subtrai");

//pega cada botão de + e -, adiciona um evento click, quando clicado envia
//como dados para uma função o tipo de operação, por meio do dataset e a input onde será alterado valor,
//por meio do parentNode
soma.forEach((e) => {
    e.addEventListener('click', (handler) => {
        manipulaDados(handler.target.dataset.controle, handler.target.parentNode);
    });
});

//função para somar ou subtrair no input quando os botões de + e - são pressionados
function manipulaDados (operacao, controle) {

    if(operacao == '-')
        controle.querySelector('[data-contador]').value--;
    else if (operacao == '+')
            controle.querySelector('[data-contador]').value++;

    }
