const calcular = document.getElementById('calcResult');


function imc() {
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (altura == '' || peso == '') {
        alert('Preencha todos os campos para poder fazer o calculo.');
    }
    else if (altura !== '' && peso !== '') {
        let valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        //Mulher
        if (valorIMC < 18.5) {
            classificacao = 'Abaixo do Peso';
        }

        resultado.textContent = valorIMC;
    }
}


calcular.addEventListener('click', imc)