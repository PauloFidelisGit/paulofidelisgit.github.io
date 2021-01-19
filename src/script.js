moment.locale('pt-br');

function htmlCalcCustas() {
    const div = document.querySelector('.column-b');
    const menu = document.getElementById('menu-a');
    menu.setAttribute('style', 'background-color: var(--cor-dois); border-left: 5px solid var(--cor-seis);')

    const menuLimpoB = document.getElementById('menu-b');
    menuLimpoB.removeAttribute('style');
    const menuLimpoC = document.getElementById('menu-c');
    menuLimpoC.removeAttribute('style');

    div.innerHTML = `
    <style>
    .simulador-custas {
        /* border: var(--borda); */
        display: flex;
        text-align: center;
        justify-content: center;
    }

    .simulador-custas>#inputs label {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }

    .simulador-custas>#inputs>label>input {
        text-align: center;
    }
</style>

    <div class="title">
        <h1>Simulador de custas processuais TJMT</h1>
    </div>
    <div id="content" class="content">
        <div class="simulador-custas">
            <div id="inputs">
                <label>Valor da causa<input id="valor-causa" type="text" value="10"></label>
                <label>Custas<input id="custas" type="text" value="10"></label>
                <label>Taxas<input id="taxas" type="text" value="10"></label>
                <label>Total<input id="total" type="text" value="10"></label>
                <label><button id="btnCustas">Calcular</button></label>
            </div>
        </div>
    </div>

    `;
}

function calcCustas() {
    const valor = document.getElementById('valor-causa');
    const custas = document.getElementById('custas');
    const taxas = document.getElementById('taxas');
    const total = document.getElementById('total');
    console.log(valor.value, custas.value, taxas.value, total.value)
}

function htmlOpDatas() {
    const div = document.querySelector('.column-b');
    const menu = document.getElementById('menu-b');
    menu.setAttribute('style', 'background-color: var(--cor-dois); border-left: 5px solid var(--cor-seis);')

    const menuLimpoA = document.getElementById('menu-a');
    menuLimpoA.removeAttribute('style');
    const menuLimpoC = document.getElementById('menu-c');
    menuLimpoC.removeAttribute('style');

    div.innerHTML = `
    <style>
    .operacoes-datas {
        /* border: var(--borda); */
        display: flex;
        text-align: center;
        justify-content: center;
    }

    .operacoes-datas>#inputs label {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }

    .operacoes-datas>#inputs>label>input {
        text-align: center;
    }
#div-opt1>label> *{
    text-align: center;
}
#div-opt2>label> *{
    text-align: center;
}
    .operacoes-datas>#inputs>#div-opt1,
    #div-opt2 {
        display: none;
    }

    .operacoes-datas>#inputs>#opts {
        display: flex;
        flex-direction: column;
        text-align: left;
    }
    .operacoes-datas>#inputs>#opts>label {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .operacoes-datas>#inputs>#opts>label>input {
        width: 20px;
        margin-right: 10px;
    }
</style>
<div class="title">
<h1>Operações com datas</h1>
</div>
<div id="content" class="content">
<div class="operacoes-datas">
    <div id="inputs">
        <label>Data início<input id="data-inicio" type="date" value="${moment().format('YYYY-MM-DD')}"></label>
        <div id="opts">
            <label><input onclick="checkboxOpt1()" type="radio" name="opt">Adição/Subtração</label>
            <label><input onclick="checkboxOpt2()" type="radio" name="opt">Diferença</label>
        </div>
        <div id="div-opt1">
            <label>Dias<input id="dias" type="text" value="10"></label>
            <label><button id="btnOpDatas">Calcular</button></label>
            <br>
            <label>Resultados</label>
            <label>Adição<input id="adicao" type="text" readonly></label>
            <label>Subtração<input id="subtracao" type="text" readonly></label>
        </div>
        <div id="div-opt2">
            <label>Data Fim<input id="data-fim" type="date" value="2020-01-10"></label>
            <label><button id="btnOpDatas2">Calcular</button></label>
            <br>
            <label>Resultado em dias</label>
            <label><input id="diferenca" type="text" readonly></label>
        </div>

    </div>
</div>
</div>
    `;
}

function calcDatas() {
    const datai = document.getElementById('data-inicio').value;
    const dias = document.getElementById('dias').value;
    const dataa = document.getElementById('adicao');
    const datas = document.getElementById('subtracao');
    dataa.value = moment(datai).add(dias, 'days').format('L');
    datas.value = moment(datai).subtract(dias, 'days').format('L');
}
function calcDatas2() {
    moment.locale('pt-br');
    const datai = document.getElementById('data-inicio').value;
    const dataf = document.getElementById('data-fim').value;
    const r = document.getElementById('diferenca');
    r.value = moment(dataf).diff(datai, 'days');

}

function checkboxOpt1() {
    const opt1 = document.getElementById('div-opt1').style.display = 'block';
    const opt2 = document.getElementById('div-opt2').style.display = 'none';
}
function checkboxOpt2() {
    const opt1 = document.getElementById('div-opt1').style.display = 'none';
    const opt2 = document.getElementById('div-opt2').style.display = 'block';
}


function htmlCalcPrazo() {
    const div = document.querySelector('.column-b');
    const menu = document.getElementById('menu-c');
    menu.setAttribute('style', 'background-color: var(--cor-dois); border-left: 5px solid var(--cor-seis);')

    const menuLimpoA = document.getElementById('menu-a');
    menuLimpoA.removeAttribute('style');
    const menuLimpoB = document.getElementById('menu-b');
    menuLimpoB.removeAttribute('style');

    div.innerHTML = `
    <style>
    .calc-prazo {
        /* border: var(--borda); */
        display: flex;
        flex-direction: column;
        text-align: center;
        width: max-content;
        align-content: center;
        margin-left: auto;
        margin-right: auto;
        
    }

    .calc-prazo>#inputs label {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }

    .calc-prazo>#inputs>label>input {
        text-align: center;
    }

    .calc-prazo>#inputs>#div-opt1,
    #div-opt2 {
        display: none;
    }

    .calc-prazo>#inputs>#opts {
        display: flex;
        flex-direction: column;
        text-align: left;
    }

    .calc-prazo>#inputs>#opts>label {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .calc-prazo>#inputs>#opts>label>input {
        width: 20px;
        margin-left: 10px;        
    }
    #data-final>p {
        margin-top: 20px;
        margin-bottom: 20px;
        font-weight: bold;
        font-size: 2em;
    }
    
    #data-fim {
        color: red;
    }
    
    .resultado {
        width: fit-content;
    }
    
    .resultado>ul {
        list-style-type: none;
    }
    
    .font-bold {
        font-weight: bold;
    }
    
    .resultado-fds {
        font-weight: bold;
        color: red;
    }
    #simulacao{
        text-align: left;
    }
</style>
    <div class="title">
            <h1>Calculadora de prazo processual</h1>
        </div>
        <div id="content" class="content">
            <div class="calc-prazo">
                <div id="inputs">
                <label>Prazo <input id="prazo" type="text" value=""></label>
                    <label>Data <input id="data" type="date" value="${moment().format('YYYY-MM-DD')}"></label>
                    <label><button id="btnCalcPrazo">Calcular</button></label>
                </div>
                <div id="data-final">
                    
                </div>
                <div class="resultado">
                    <ul id="simulacao">
                        
                    </ul>
                </div>
            </div>
        </div>
    `;
}

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
    '14/09/2021': 'Aniversário de Sinop/MT',
    '12/10/2021': 'Nossa Sr.a Aparecida - Padroeira do Brasil',
    '28/10/2021': 'Dia do servidor público',
    '02/11/2021': 'Finados',
    '15/11/2021': 'Proclamação da República',
    '20/11/2020': 'Dia da consciência negra',
    '08/12/2020': 'Dia da justiça',
    '25/12/2021': 'Natal',
}

function calcPrazo() {
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
}


document.addEventListener('click', e => {
    const el = e.target;
    if (el.id === 'btnCustas') {
        calcCustas();
    }
    if (el.id === 'btnOpDatas') {
        calcDatas();
    }
    if (el.id === 'btnOpDatas2') {
        calcDatas2();
    }
    if (el.id === 'btnCalcPrazo') {
        calcPrazo();
    }
});