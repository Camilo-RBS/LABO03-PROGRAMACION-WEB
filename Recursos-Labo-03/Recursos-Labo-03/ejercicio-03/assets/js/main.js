const calculateFactorial = (num) => {
    if(num<0){
        return alert("el numero debe de ser un entero positivo")
    }
    let factorial = 1;
    for(let i=1;i<= num; i++){
        factorial *= i;
    }
    return factorial; 
}

const requestNumber = () => {
    //Code
    let num;
    num = prompt("Introduce un número entero no negativo para calcular su factorial:");
    return parseInt(num);
}

const main = () => {
    //Code
    let numero = requestNumber();
    alert("El factorial del número ingresado es: " + calculateFactorial(numero));

}

main();
