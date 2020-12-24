moment.locale('pt-br');
function add() {
    const adicaoInicio = document.querySelector('.adicaoInicio').value;
    const adicaoDias = document.querySelector('.adicaoDias').value;
    const adicaoResultado = document.querySelector('.adicaoResultado');
    adicaoResultado.innerHTML = moment(adicaoInicio).add(adicaoDias, 'days').format('L');
}

function sub() {
    const subtracaoInicio = document.querySelector('.subtracaoInicio').value;
    const subtracaoDias = document.querySelector('.subtracaoDias').value;
    const subtracaoResultado = document.querySelector('.subtracaoResultado');
    subtracaoResultado.innerHTML = moment(subtracaoInicio).subtract(subtracaoDias, 'days').format('L');
}

function dif() {
    const diferencaInicio = moment(document.querySelector('.diferencaInicio').value);
    const diferencaFim = moment(document.querySelector('.diferencaFim').value);
    const diferencaResultado = document.querySelector('.diferencaResultado');
    diferencaResultado.innerHTML = `${diferencaFim.diff(diferencaInicio, 'days')} dias.`
}

function exe() {
    if (document.querySelector('.adicaoInicio').value) {
        add();
    }
    if (document.querySelector('.subtracaoInicio').value) {
        sub();
    }
    if (document.querySelector('.diferencaInicio').value && document.querySelector('.diferencaFim').value) {
        dif();
    }
}
document.addEventListener('click', exe);