const ajuste = document.querySelectorAll(".controle-ajuste");
let pecaAdd;

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

//pega cada botão de + e -, adiciona um evento click, quando clicado envia
//como dados para uma função o tipo de operação, por meio do dataset e a input onde será alterado valor,
//por meio do parentNode

ajuste.forEach((e) => {
    e.addEventListener('click', (handler) => {
        
        manipulaDados(handler.target.dataset.controle, handler.target.parentNode);
        atualizaEstatisticas(handler.target.dataset.peca, handler.target.dataset.controle);
    });
});

//função para somar ou subtrair no input quando os botões de + e - são pressionados

function manipulaDados (operacao, controle) {

    if(operacao == '-')
        controle.querySelector('[data-contador]').value--;
           
    else if (operacao == '+')
            controle.querySelector('[data-contador]').value++;
            
    }
   
function atualizaEstatisticas(pecaAdd, operacao){
    const estatistica = document.querySelectorAll("[data-estatistica]");
    estatistica.forEach((e) => {
        const atributoAdd = e.dataset.estatistica;
        if(operacao == '+')
            e.textContent = parseInt(e.textContent) + pecas[pecaAdd][atributoAdd];
       if(operacao == '-')
            e.textContent = parseInt(e.textContent) -pecas[pecaAdd][atributoAdd];
    })
}