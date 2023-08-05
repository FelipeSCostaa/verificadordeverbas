
let botao_sem_justa_causa = document.getElementById("sem_justaCausa");
let botao_com_justa_causa = document.getElementById("justaCausa");
let container_iniciativaDemissao = document.getElementById("container_iniciativaDemissao");

botao_sem_justa_causa.addEventListener('change', mostrar_container_iniciativaDemissao);

botao_com_justa_causa.addEventListener('change',enconder_container_iniciativaDemissao )
    
function enconder_container_iniciativaDemissao(){
    container_iniciativaDemissao.style.display = 'none';
}

function mostrar_container_iniciativaDemissao() {
    if (botao_sem_justa_causa.checked) {
        container_iniciativaDemissao.style.display = 'block';


    } else if(botao_com_justa_causa.checked) {
        enconder_container_iniciativaDemissao
    }
}

//---------------------------------------------------------------------------


let valorSalario;

let diasTrabalhados;

let botao_diasTrabalhados = document.getElementById("botao_diasTrabalhados");

let saldoSalario;

botao_diasTrabalhados.addEventListener('click', calculoSaldoSalario);

function calculoSaldoSalario(){
        let sucesso_diasTrabalhados = document.getElementById("sucesso_diasTrabalhados");

        valorSalario = parseFloat(document.getElementById("valorSalario").value);
        diasTrabalhados = parseInt(document.getElementById("diasTrabalhados").value);

        saldoSalario = parseFloat(((valorSalario/30)*diasTrabalhados).toFixed(2));

        sucesso_diasTrabalhados.style.display = 'block';

        return saldoSalario;
}


//-----------------------------------------------------------


let pediDemissao = document.getElementById("pediDemissao");

let fuiDemitido = document.getElementById("fuiDemitido");

let tempoTrabalhado

let botao_tempoTrabalhado = document.getElementById("botao_tempoTrabalhado");

botao_tempoTrabalhado.addEventListener('click', calculoFerias);

let ferias;



function calculoFerias(){
        
        let sucesso_tempoTrabalhado = document.getElementById("sucesso_tempoTrabalhado");

        valorSalario = parseFloat(document.getElementById("valorSalario").value);
        tempoTrabalhado = parseInt(document.getElementById("tempoTrabalhado").value);

        ferias = parseFloat((((valorSalario*tempoTrabalhado)/12)+((valorSalario*tempoTrabalhado)/12)/3).toFixed(2));

        sucesso_tempoTrabalhado.style.display = 'block'

        return ferias;
}


    botao_tempoTrabalhado.addEventListener('click', calculoSalario13)

    let salario13;


function calculoSalario13(){

    valorSalario = parseFloat(document.getElementById("valorSalario").value);
    tempoTrabalhado = parseInt(document.getElementById("tempoTrabalhado").value);

    salario13 = parseFloat(((valorSalario/12)*tempoTrabalhado).toFixed(2));

    return salario13;

}




let tempoTotalTrabalhado;

let botao_tempoTotalTrabalhado = document.getElementById("botao_tempoTotalTrabalhado");

botao_tempoTotalTrabalhado.addEventListener('click', calcularMultaFgts);

let multaFgts;


function calcularMultaFgts(){

    let sucesso_tempoTotalTrabalhado = document.getElementById("sucesso_tempoTotalTrabalhado");

    valorSalario = parseFloat(document.getElementById("valorSalario").value);
    tempoTotalTrabalhado = parseInt(document.getElementById("tempoTotalTrabalhado").value);

    multaFgts = parseFloat((((valorSalario*8/100)*tempoTotalTrabalhado)*40/100).toFixed(2));
    

    sucesso_tempoTotalTrabalhado.style.display = 'block';

    return multaFgts;
}

botao_tempoTotalTrabalhado.addEventListener('click', calcularFGTS);

let FGTS;

function calcularFGTS(){

    valorSalario = parseFloat(document.getElementById("valorSalario").value);
    tempoTotalTrabalhado = parseInt(document.getElementById("tempoTotalTrabalhado").value);


    FGTS = parseFloat(((valorSalario*8/100)*tempoTotalTrabalhado).toFixed(2));

    return FGTS;
}




//----------------------------------------------------------
let botao = document.getElementById("botao");

let secaoResultado = document.getElementById("secaoResultado");

let resultadoFinal = document.getElementById("resultadoFinal");





botao.addEventListener('click', calcularVerbas);

function calcularVerbas(){

   
    let rescisaoTotal;
    

      sucesso_diasTrabalhados.style.display = 'none';
      sucesso_tempoTotalTrabalhado.style.display = 'none';
      sucesso_tempoTrabalhado.style.display = 'none';


    if(botao_com_justa_causa.checked){
        secaoResultado.style.display = 'flex';

        ocultarResult13salario.style.display = 'none';
        ocultarResultferias.style.display = 'none';
        ocultarResultMulta.style.display = 'none'; 
        ocultarResultFGTS.style.display = 'none'; 

      
        

        
        saldoSalarioResult.innerHTML = "R$ " + saldoSalario
        rescisaoTotalResult.innerHTML = "R$ " + saldoSalario
        explicacao.innerHTML = "<p>Considerando a demissão por justa causa, você tem direito ao seu saldo de salário, somente, bem como, férias vencidas se for o caso.</p><p>No entanto, é importante lembrar que você também terá direito a receber o 1/3 constitucional de férias vencidas, caso possua, salário família se for o caso e as suas horas extras caso haja.</p><p>Para isso, busque a ajuda de um advogado especialista que poderá te auxiliar e dizer com certeza os seus direitos.</p>"
    }
    else if(botao_sem_justa_causa.checked && pediDemissao.checked){


        secaoResultado.style.display = 'flex';


        ocultarResult13salario.style.display = 'block';
        ocultarResultferias.style.display = 'block';
        ocultarResultMulta.style.display = 'none'; 
        ocultarResultFGTS.style.display = 'none'; 
       

        
       
        rescisaoTotal = (saldoSalario + salario13 + ferias).toFixed(2);

        
        

        saldoSalarioResult.innerHTML = "R$ " + saldoSalario
        salario13Result.innerHTML = "R$ " + salario13
        feriasResult.innerHTML = "R$ " + ferias
        rescisaoTotalResult.innerHTML = "R$ " + rescisaoTotal
        

        explicacao.innerHTML = "<p>É importante lembrar que quando o empregado pede demissão, ele deve cumprir o aviso prévio e receber o salário equivalente, podendo ser dispensado pela empresa de cumprir esse aviso, total ou parcial. Neste último caso, o empregado recebe só pelos dias em que trabalhou.</p><p>Vale lembrar, no entanto, que caso o empregado comprove que arrumou um novo emprego, a empresa é obrigada a liberá-lo do aviso prévio.</p><p>Além disso, quando o empregado é quem pede demissão, ele não terá direito a sacar seu FGTS, nem receber a multa de 40%.</p><p>Por fim, é importante destacar que o empregado, neste caso, também não receberá o seguro desemprego.</p>"
    }

    else if(botao_sem_justa_causa.checked && fuiDemitido.checked){
        secaoResultado.style.display = 'flex';

        ocultarResult13salario.style.display = 'block';
        ocultarResultferias.style.display = 'block';
        ocultarResultMulta.style.display = 'block'; 
        ocultarResultFGTS.style.display = 'block'; 

      
     
       
        rescisaoTotal = (saldoSalario + salario13 + ferias + multaFgts).toFixed(2);

        


        saldoSalarioResult.innerHTML = "R$ " + saldoSalario
        salario13Result.innerHTML = "R$ " + salario13
        feriasResult.innerHTML = "R$ " + ferias
        multaFGTSresult.innerHTML = "R$ " + multaFgts
        saldoFGTSresult.innerHTML = "R$ " + FGTS + " "
        rescisaoTotalResult.innerHTML = "R$ " + rescisaoTotal



        explicacao.innerHTML = "<p>É importante lembrar que nesse caso o empregado ainda terá direito ao aviso prévio, seja ele trabalhado ou indenizado, bem como, receber suas férias vencidas mais 1/3 se for o caso</p><p>Além disso, neste caso o empregado também terá direito a sacar seu FGTS e receber o seguro desemprego.</p></div>"

    }
}

let botaoResetar = document.getElementById("botaoResetar");
let meuForm = document.getElementById("meuForm");

botaoResetar.addEventListener('click', resetar);

function resetar(){
    
        meuForm.reset();
      
        secaoResultado.style.display = 'none';
      }
      
     






