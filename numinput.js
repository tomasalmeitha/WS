const prompt=require("prompt-sync")({sigint:true});


// Programa que solicita ao user números e vai efetuando a soma até este inserir '0'


/*do {

    var num1 = Number(prompt("Insert the temperature in fahrenheit: "));
    var convTemp = (num1 - 32) * (5/9);
    console.log(convTemp);

    } while (num1 >= 0);*/




/*function convtoCelsius(fahrenheit) {

    const convTemp = (fahrenheit - 32) * (5/9);
    console.log(convTemp);
}

convtoCelsius(74);*/



/*do {

    var num1 = Number(prompt("Insert the temperature in fahrenheit: "));
    var convTemp = (num1 - 32) * (5/9);
    console.log(convTemp);

    } while (num1 != 20000);*/


    
   /* do {

    var num1 = Number(prompt("Insert the temperature in fahrenheit: "));
    var convFahrToCelsius = (num1 - 32) * (5/9);
    var convCelsiusToKelvin = convFahrToCelsius + 273.15;
    console.log("The temperature in Celsius is: " +convFahrToCelsius);
    console.log("The temperature in Kelvin is: "+convCelsiusToKelvin);

    } while (num1 >= 0);*/



//////////// PROGRAMA QUE VAI SOMANDO OS VALORES INSERIDOS PELO USER E QUANDO ESTE ESCREVER 'EXIT' O PROGRAMA PÁRA E DEVOLVE A SOMA DOS VALORES INSERIDOS ////////////////

/*var num1 = "";
var sum = 0;

    do {

        num1 = prompt("Insert a number: ");

        if(!isNaN(num1)){

            sum = sum + Number(num1);
            
        } else{
            
            if (num1.toLowerCase() != 'exit'){
                console.log("Comando inválido");
            }
        }
        

    } while (num1.toLowerCase() !== 'exit');

    console.log("A soma dos números inseridos é: " +sum);*/


//////////// O PROGRAMA AVALIA SE O NUMERO INSERIDO É OU NÃO PRIMO /////////////

var num, divisor = 2;
var primo = Boolean(true);

do {
    num = Number(prompt("Insira um número: "));


if (Number(num)) {

    
    if (num <= 1){
        primo = false;
    }

    while (divisor < num){
        if (num%divisor == 0){
            primo = false;
        }
        divisor++;
    }

    ///////// este 'for' faz o mesmo que o 'while' de cima //////////
    /* for (i=2; i < num; i++){
        if (num%i == 0){
            primo = false;
            break;
        }
    }*/

    if (primo) {
        console.log("O número é primo");
    } else {
        console.log("O número não é primo");
    }

    
} else {

    console.log("erro");

}
    var num2 = prompt("Deseja continuar (Y/N): ");

} while(num2 == 'Y');