 function verificarEdad () {
    let anios = parseInt(prompt("Ingrese su edad"));
     if(anios > 17 && anios < 1000){    alert ("Eres mayor de edad");} 
    else if (anios < 18){ alert("Se necesita supervisión de un adulto");}

}

verificarEdad() 

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
    alert("Su deuda es de $12500");
    /* let deuda = parseFloat(prompt ("Su deuda es de $12500")); 
    break;*/
    
    
  case "pagar":
    let pagar = parseFloat(prompt ("Ingrese el monto a pagar"));
    
    function promedio(deuda , pagar){
      alert(deuda - pagar);
      
    }
    promedio(12500 , pagar)
    
} 

alert("Elija la ubicación que desea para el torneo que viene")

function usuario(nombre, contraseña, socio){
            this.nombre = nombre;
            this.contraseña = password;
            this.socio = socio;
}
const usuario1 = new usuario(nombre, password, socio)

console.log(usuario1);



class Tribuna {
    constructor(tribune, precio){
        this.tribune = tribune;
        this.precio = precio;
    }

}
const plateaMessi = new Tribuna ("Messi", 100000);
const plateaCristiano = new Tribuna ("Cristiano", 80000);
const popularNeymar = new Tribuna ("Neymar", 50000);
const popularMbappe = new  Tribuna ("Mbappe", 50000);

const estadio = [plateaMessi, plateaCristiano, popularNeymar, popularMbappe];
console.log(estadio);
 
estadio.forEach((tribuna)=>{
    console.log(tribuna.precio);

});

const TribunaConDiaDelClub = estadio.map ((producto =>{
    return {
        tribune: producto.tribune,
        precio: (producto.precio+3000)
    }
}))
console.log(TribunaConDiaDelClub)

let fechaDeHoy = new Date ();
console.log(fechaDeHoy);

estadio.sort((a,b) => a.precio - b.precio);
console.log(estadio);

const PrecioMenorA80000 = estadio.filter(producto => producto.precio < 80000);
console.log(PrecioMenorA80000);
