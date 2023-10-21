const inputUno = parseInt(prompt("ingrese su primer numero a realizar las operaciones "))
const inputDos = parseInt(prompt("ingrese su segundo numero a realizar las operaciones "))


if(inputUno, inputDos){
    console.log("estas son tus operaciones");
}else{
    alert ("por que no haz dado tus numeros para realizar la operacion");
}
function suma (numeroUno, numeroDos){
    const suma = numeroUno + numeroDos
    
     return suma
    
}
 console.log("el resultado de suma de los numeros:", inputUno, ",", inputDos, "es igual a", suma(inputUno, inputDos))

 function resta(numeroUno, numeroDos) {
    const resta = numeroUno - numeroDos
    return resta
 }
 console.log("el resultado de las resta de los numeros:", inputUno, ",", inputDos, "es igual a", resta(inputUno, inputDos))

 function multiplicacion(numeroUno, numeroDos) {
    const multiplicacion = numeroUno * numeroDos
    return multiplicacion
 }
 console.log("el resultado de la multiplicacion de los numeros", inputUno, ",", inputDos, "es igual a", multiplicacion(inputUno, inputDos))
 

 function divicion(numeroUno, numeroDos) {
    const divicion = numeroUno / numeroDos
    return divicion
 }
console.log("el resultado de la divicion  de los numeros ", inputUno, ",", inputDos, "es igual a", divicion(inputUno, inputDos))
