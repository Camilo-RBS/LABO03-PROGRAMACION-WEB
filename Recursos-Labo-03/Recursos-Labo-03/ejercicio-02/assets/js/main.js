
const plus = (a,b) => {
    //Code
    return a+b;

};
const subtract = (a,b) =>{
    //Code
    return a-b;
} ;
const multiply = (a,b) =>{
    //Code
    return a*b;
} ;
const split = (a,b) => {
    return a/b;
    //Code
};
const requestNumber = () => {
    //Code
    let number = parseFloat(prompt("Ingrese su primer numero"));
    let number1 = parseFloat(prompt("Ingrese su segundo numero"));

    return [number,number1];
};

const selectOperation = (number,number1) => {
    //Code
    let op = prompt("Ingrese el numero de la opcion que desea realizar:" + "\n 1.Suma" + "\n 2.Resta" + "\n 3.Multiplicacion" + "\n 4.Dvision");
    let result;
    switch (op) {
        case "1":
          result=plus(number,number1);
          break;
        case "2":
          result=subtract(number,number1);
          break;
        case "3":
          result=multiply(number,number1);
          break;
        case "4":
          result=split(number,number1);
          break;       
        default:
          alert("la opcion que usted esta seleccionando no existe ")
          return;
      }
      
     alert("su resultado es: "+ result);
      
};

const main = () => {
    //Code
    let [number, number1] = requestNumber(); 
    selectOperation(number, number1);

}

main();
