const calcular = document.getElementById('calcResult');


function imc() {
    const altura = document.getElementById('altura').value; //Buscando o valor Altura.
    const peso = document.getElementById('peso').value;    //Buscando o valor Peso.
    const resultado = document.getElementById('resultado');

    if (altura == '' || peso == '') { //Alerta para fazer o preenchimento de todos os campos.
        alert('Preencha todos os campos para poder fazer o calculo.');
    }

    else if (altura !== '' && peso !== '') {

        let valorIMC = (peso / (altura * altura)).toFixed(1); //Calculo para o IMC.

        //Homem
        let homem = document.getElementById('masculino').checked = true;
        let mulher = document.getElementById('feminino').checked = true;

        if (homem){ //Caso seja Homem
            console.log('Masculino selec')
            if (valorIMC <= 19) {
                resultado.textContent = 'Abaixo do Peso';//Texto da situação.
                document.querySelector('#resultado').style.background = "yellow";//Cor do Background.
                document.querySelector('#resultado').style.color = "black";//Cor do texto diferente dos demais.
            }
            else if (valorIMC <= 25.7){
                resultado.textContent = 'Peso Normal';//Texto da situação.
                document.querySelector('#resultado').style.background = "green";//Cor do Background.
            }
            else if (valorIMC <= 27.3){
                resultado.textContent = 'Marginalmente Acima do Peso';//Texto da situação.
                document.querySelector('#resultado').style.background = "peru";//Cor do Background.
            }
            else if (valorIMC <= 32.3){
                resultado.textContent = 'Acima do Peso Ideal';//Texto da situação.
                document.querySelector('#resultado').style.background = "orange";//Cor do Background.
            }
            else {
                resultado.textContent = 'Obeso';//Texto da situação.
                document.querySelector('#resultado').style.background = "red";//Cor do Background.
            }
        }

        //Mulher
        else{
            console.log('Mulher selec')
            if (valorIMC <= 19) {
                resultado.textContent = 'Abaixo do Peso';//Texto da situação.
                document.querySelector('#resultado').style.background = "yellow";//Cor do Background.
                document.querySelector('#resultado').style.color = "black";//Cor do texto diferente dos demais.
            }
            else if (valorIMC <= 25.7){
                resultado.textContent = 'Peso Normal';//Texto da situação.
                document.querySelector('#resultado').style.background = "green";//Cor do Background.
            }
            else if (valorIMC <= 27.3){
                resultado.textContent = 'Marginalmente Acima do Peso';//Texto da situação.
                document.querySelector('#resultado').style.background = "peru";//Cor do Background.
            }
            else if (valorIMC <= 32.3){
                resultado.textContent = 'Acima do Peso Ideal';//Texto da situação.
                document.querySelector('#resultado').style.background = "orange";//Cor do Background.
            }
            else {
                resultado.textContent = 'Obeso';//Texto da situação.
                document.querySelector('#resultado').style.background = "red";//Cor do Background.
            } 
        }
        
    }
}