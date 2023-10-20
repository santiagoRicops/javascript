
const btn = document.querySelector("button");
btn.addEventListener("click", function(){
    let edad = document.querySelector(".n1").value;
    if( edad >= 18){
        alert("puedes pasar");
    } else{
        alert("eres menor de edad no puedes pasar");
    }
})


