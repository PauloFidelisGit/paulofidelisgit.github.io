
//Calculadora de prazo processual
moment.locale('pt-br');

const fds = {
    'domingo': 'final de semana',
    'sábado': 'final de semana',
}

const exclude = {
    '01/01/2021': 'Confraternização Universal',
    '15/02/2021': 'Carnaval',
    '16/02/2021': 'Carnaval',
    '02/04/2021': 'Paixão de Cristo',
    '21/04/2021': 'Tiradentes',
    '01/05/2021': 'Dia do Trabalho',
    '03/06/2021': 'Corpus Christi',
    '07/09/2021': 'Independência do Brasil',
    '12/10/2021': 'Nossa Sr.a Aparecida - Padroeira do Brasil',
    '02/11/2021': 'Finados',
    '15/11/2021': 'Proclamação da República',
    '25/12/2021': 'Natal',
}


for (let [v, c] of Object.entries(exclude)) {
    const datas = document.querySelector('.feriados').innerHTML += `<p>${v} - ${c}</p>`
}
function calc() {
    let datafim = '';
    const data = moment(document.getElementById('data').value);
    let prazo = Number(document.getElementById('prazo').value);
    let cont = 1;
    const resul = [];
    for (i = 0; i < prazo + 1; i++) {
        if (i == 0) {
            resul.push(`<span class="resultado-fds">★ - ${data.format('L - dddd')}<span></span>`);
            continue
        }
        const add = data.add(1, 'days');
        if (add.format('dddd') in fds) {
            prazo++;
            resul.push(`<span class="resultado-fds">X - ${add.format('L - dddd')}</span>`);
            datafim = add.format('L');
        }
        else if (add.format('L') in exclude) {
            console.log()
            prazo++;
            resul.push(`<span class="resultado-fds">X - ${add.format('L - dddd')} - ${exclude[`${add.format('L')}`]}</span>`);
            datafim = add.format('L');
        }
        else {
            resul.push(`<span class="font-bold">${cont}</span> - ${add.format('L - dddd')}`);
            datafim = add.format('L');
            cont++;
        }
    }
    const fimprazo = document.getElementById('data-final');
    const ul = document.getElementById('simulacao');
    const c = resul;
    ul.innerHTML = '';
    for (i = 0; i < c.length; i++) {
        ul.innerHTML += `<li>${c[i]}</li>`;
    }
    fimprazo.innerHTML = `<p>DATA FINAL</p><p id="data-fim">${datafim}</p>`;
};

document.addEventListener('click', e => {
    const data = moment(document.getElementById('data').value);
    let prazo = Number(document.getElementById('prazo').value);
    const el = e.target;
    if (el.classList.contains('btn-calcular') && data.format('L') !== 'Invalid date' && prazo !== 0) {
        calc();
    }
})