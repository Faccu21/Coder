let anios = parseInt(prompt("Ingrese su edad"));
if(anios > 17 && anios < 1000){
    alert ("Eres mayor de edad");
} else if (anios < 18){
    alert("Se necesita supervisión de un adulto");
}

let socio = parseInt(prompt ("Ingrese número de socio"));
const socioAutorizado = 10500
for (let i = 0; i < 3; i++)
if (socio == socioAutorizado){
 alert("Bienvenido socio nº " + socio);
 break;
 } else {
 socio = parseInt(prompt("Socio no encontrado. Ingrese de nuevo"));
} 


let nombre = prompt ("Ahora ingrese un nombre de usuario. Cada vez que desee ingresar, deberá colocarlo");
alert("Bienvenido, " + nombre);

let password = parseInt(prompt ("Por favor, ingrese una contraseña de 5 caracteres"));
let password2 = parseInt(prompt ("Por favor, repita la contraseña"));
for (let i = 0; i < 3; i++)
if (password == password2){
 alert("Contraseña guardada");
 break;
 } else {
 password = parseInt(prompt("contraseña incorrecta. Ingrese de nuevo"));
} 

let operation = prompt ("¿Qué operación desea realizar?");
switch (operation){
  case "ver deuda":
    let deuda = parseFloat(prompt ("Su deuda es de $12500"));
    break;
    
  case "pagar":
    let pagar = parseFloat(prompt ("Ingrese el monto a pagar"));
    
    function promedio(deuda , pagar){
      alert(deuda - pagar);
      
    }
    promedio(12500 , pagar)
    
    
    
}



/* function promedio(deuda , pagar){
  alert(deuda - pagar);
  
}
promedio(12500 , pagar) */
