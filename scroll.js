let botao = document.getElementById("botao");
let secaoResultado = document.getElementById('secaoResultado');

botao.addEventListener('click', mostrarResultado);


function mostrarResultado() {
    

    let offsetTop = secaoResultado.offsetTop;

    
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth' 
    });
}