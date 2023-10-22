// expresion
// declaracion


let seis = 3 + 3

let J = "ss"

let cinco = 3 + 2

cinco + 1 // 6

let n = "SANTIAGO"

let ochoc = seis + 2

var miVariable = "Hola"
miVariable = 2

let miVariablelet = "Hola"
miVariablelet =""

const miVariableConst = "Hola"
window
console.log(window)


// primitivos
// string
// numeros
// booleanos
// null
// undefined

// compuesto
// array
// object
 const seAcabo = null


 console.log(seAcabo);
const p = true

2 / 2
2 % 2

// operqdores de comparacion
console.log(2 == "2");
console.log(2 === "2");
console.log(2 != "2");
console.log(2 !== "2");
console.log(2 > 1);
console.log(2 < 3 );
console.log(2 <= 3);
console.log(2 >= 3);

// opreadores logicos
// &&   AND
// || OR
// ! NOT

console.log(2 > 4 && 4 > 2);

console.log(9 >  8 && 8 > 7 && 2 > 1 && 1 > 2);
console.log(9 > 10 || 10 > 9);
console.log(!true);

// decremento e incremento

let j = 10

++j
if (7 !== "7" && 8 < 7 || 5 !== true){
    console.log("es totalmente diferente");
}
if (true > false){
    console.log("true es mayor");

}
if (true === false){
    console.log("son iguales");
}else{
    console.log("son diferentes");
}
console.log(j++);

if(true) {
console.log('verdadero');
} else {

    console.log('falso');
}


// null false
// 0 false
// ubdefined false
// -1 false
// faqlse false

let modal = false

console.log(!modal);

const edad =  18;
if (edad !== 18){
    console.log("no tiene 18");
}else{
    console.log("tiene 18");
}


// funciones

// QUE ES UNA FUNCION   

function name_funcion() {
console.log('mi primera funcion');
}

// ejecucion
name_funcion()
function suma(){
    const numeroUno = 5;
    const numerosDos = 10;
     console.log(numeroUno+numerosDos); 

}
suma();
suma()
suma()
suma()
suma()

function params(numeroUno, numerosDos) {
  const resultado =  numeroUno + numerosDos
  console.log(resultado)

}

params(2, 5) 
params(10, 5) 
params(10, 5) 
params(10, 5) 
params(10, 5) 
params(10, 5) 
params(10, 5) 
function nombreUsuario(nombre, apellido) {
    const nombreCompleto = nombre + " " + apellido
    return nombreCompleto
    4
    SVGDefsElementasd
    asdasd
    apellido
}

console.log(nombreUsuario("sebastian", "garcia") + 10);
nombreUsuario("santiago", "rico")


let minumero = 10

function minumerofuncion() {
    return 5
}
console.log(minumerofuncion() + minumero); 

function paramsWithReturn(param) {
 
    return param
}

paramsWithReturn(5)

//console.log(prompt("Mi argumento para prompt"))
//  const input =  prompt("ingrese el nombre de usuario")
// function nombreCliente(cliente){
   
//     if("") {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
//    if (cliente){
//     console.log(cliente) 
//    }else{
//     console.log("vuelva pronto")
//    }
   

   

   
// }
// nombreCliente(input)

// console.log("" === false);
// // hacer una funcion que se llame nombre de cliente y reciba un parametro llamado cliente debe de venir de un prom si le doy aceptar me da el nombre del usuario y si le doy cancelar me dice vuelva pronto

console.log("=================================================================================== FOR ============================================");



// bucles, loo´ps

// 1. inicializar el valor inicial 
// 2. una condicion
// 3. incrementar o decrementar
for(let index = 0; index <= 10; index++) {
   
    console.log(index);
}

let v = "Hola"

v  += "Mundo"

console.log(v);
for(let contador = 2; contador <= 50; contador += 2){
    console.log(contador);
}
// string
// array
// set

// number
// booleano
// objetops
for (let contadorCincoEnCinco = 5; contadorCincoEnCinco <= 100; contadorCincoEnCinco += 5 ){
    console.log(contadorCincoEnCinco);
}


let frase = "Frase poetica ajdsfhakjshdakjshdkashdkajhsdkjashdjkahdjksahjdkh"

console.log();
console.log(frase[6]);


for(let char = 0; char < frase.length; char++) {
const miFrase = frase[char]
    if(miFrase === "a") {
        continue
    }
    console.log(miFrase);
}
let index = 0;

while(index < 10) {
    index += 1
    console.log('TRUE', frase[index]);
}
console.log('FALSE');

for(const posicionDeCaracter of frase) {
console.log(posicionDeCaracter);
}
// Array

const myArray = [10, true, "String", [1, [5]]] // array

console.log(myArray[3][1][0]);