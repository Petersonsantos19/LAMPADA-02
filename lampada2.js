const turn = document.getElementById ('turn');

const lamp = document.getElementById ('lamp');


function lampOn () {
    if ( !lampQuebrada () ){
        lamp.src = './imagens/ligada.jpg';
    }
}

function lampOff () {
    if ( !lampQuebrada () ){
        lamp.src = './imagens/desligada.jpg';
        turn.textContent = 'Ligar';
    }
}

function lampOnOff() {
    if (turn.textContent == 'Ligar'){
        lampOn();
        turn.textContent = 'Desligar';
    }else {
        lampOff();
        turn.textContent = 'Ligar';
    }
}

function lampQuebra () {
    lamp.src = './imagens/quebrada.jpg';
}

function lampQuebrada () {
    return lamp.src.indexOf ('quebrada') > -1 
}

turn.addEventListener ('click', lampOnOff);

lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampQuebra);