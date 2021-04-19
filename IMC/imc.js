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

        
        let sexo = document.getElementsByName('sexo');//Buscando o Sexo do User.

        if (sexo[0].checked){ //Caso seja Homem
            if (valorIMC <= 19) {
                resultado.textContent = 'Abaixo do Peso';//Texto da Condicao.
                document.querySelector('#resultado').style.background = "yellow";//Cor do Background.
                
            }
            else if (valorIMC <= 25.7){
                resultado.textContent = 'Peso Normal';//Texto da Condicao.
                document.querySelector('#resultado').style.background = "green";//Cor do Background.
            }
            else if (valorIMC <= 27.3){
                resultado.textContent = 'Marginalmente Acima do Peso';//Texto da Condicao.
                document.querySelector('#resultado').style.background = "yellow";//Cor do Background.
            }
            else if (valorIMC <= 32.3){
                resultado.textContent = 'Acima do Peso Ideal';//Texto da Condicao.
                 document.querySelector('#resultado').style.background = "yellow";//Cor do Background.
            }
            else {
                resultado.textContent = 'Obeso';//Texto da Condicao.
                document.querySelector('#resultado').style.background = "red";//Cor do Background.
            }
        }

        
        else{ //Mulher
            if (valorIMC <= 19) {
                resultado.textContent = 'Abaixo do Peso';//Texto da Condicao.
                document.querySelector('#resultado').style.background = "yellow";//Cor do Background.
                
            }
            else if (valorIMC <= 25.7){
                resultado.textContent = 'Peso Normal';//Texto da Condicao.
                document.querySelector('#resultado').style.background = "green";//Cor do Background.
            }
            else if (valorIMC <= 27.3){
                resultado.textContent = 'Marginalmente Acima do Peso';//Texto da Condicao.
                document.querySelector('#resultado').style.background = "yellow";//Cor do Background.
            }
            else if (valorIMC <= 32.3){
                resultado.textContent = 'Acima do Peso Ideal';//Texto da Condicao.
                 document.querySelector('#resultado').style.background = "yellow";//Cor do Background.
            }
            else {
                resultado.textContent = 'Obeso';//Texto da Condicao.
                document.querySelector('#resultado').style.background = "red";//Cor do Background.
            } 
        }
        
    }
}