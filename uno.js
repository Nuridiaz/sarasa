function mostrar() {
  
/*Se necesita llevar la gestión de una veterinaria. Para ello se podrán registrar los datos de cada mascota mientras el usuario quiera.
De cada mascota se solicita:
-nombre (entre 3 y 8 caracteres)
-tipo (“mamifero”, “ave”, “reptil”)
-sangre ( "fria", "calida")
Si es de tipo reptil solo puede tener sangre fria
-edad ( mayor a cero)
-sexo( “m” de macho o “h” de hembra )
Informar:

a- Promedio de edad de los reptiles
b- tipo y sexo de la mascota mas joven
c- Del total de mascotas que porcentaje son aves
d- De que tipo de mascota hay mas cantidad*/


//promedio, acum y cont para cada reptil
//contMascMasJoven, flagMascMasJoven,
//porcAves, contAves,
//comparar cantidades de tipos de mascotas


let nombre;
let tipo;
let sangre;
let edad;
let sexo;
let promedioReptil=0;
let acumReptil=0;
let contReptil=0;
let flagReptil=1;
let flagMascMasJoven=1;
let totalMascotas;
let porcAves;
let contAves=0;
let contMamifero=0;
let seguir;
let edadMascMasJoven;
let sexoMascMasJoven;
let tipoMascMasJoven;
let acumAves=0;
let acumMamifero=0;
let masMascotas;

do{

nombre = prompt("Ingrese el nombre de la mascota: ");
while(nombre.length < 3 || nombre.length > 8){
  nombre = prompt("Error. Ingrese el nombre de la mascota: ");
}

tipo = prompt("Ingrese el tipo de mascota: ");
while(tipo != "mamifero" && tipo != "ave" && tipo != "reptil"){
  tipo = prompt("Error. Ingrese el tipo de mascota: ");
}

sangre = prompt("Ingrese el tipo de sangre: ");
while(sangre != "fria" && sangre != "calida"){
  sangre = prompt("Error. Ingrese el tipo de sangre: ");
}

edad = parseInt(prompt("Ingrese edad: "));
while(isNaN(edad) || edad <= 0 ){
  edad = parseInt(prompt("Error. Ingrese edad: "));
}

sexo = prompt("Ingrese su sexo: ");
  while(sexo != "m" && sexo != "h"){
}sexo = prompt("Error. Ingrese su sexo: ");


  if(flagReptil){
  acumReptil += tipo;
  contReptil++;
  flagReptil == 0;
  }
 
switch(tipo){
  case "reptil":
    while(sangre != "fria"){
      alert("Error. Solos los reptiles pueden tener sangre fria");
    }
    acumReptil += tipo;
    contReptil++;
  break;

  case "ave":
    acumAves += tipo;
    contAves++;
  break;

  case "mamifero":
   acumMamifero += tipo;
   contMamifero++;
   break;
}

if(flagMascMasJoven){
  edadMascMasJoven = edad;
  tipoMascMasJoven = tipo;
  sexoMascMasJoven = sexo;
 flagMascMasJoven == 0;
}

totalMascotas = acumReptil + acumMamifero + acumAves;
porcAves = (contAves/totalMascotas) * 100;

seguir = prompt("Quiere ingresar otra mascota?");
}while(seguir == "s");

if(acumReptil != 0){
promedioReptil = acumReptil/contReptil;
}else(acumReptil == 0)



if( acumReptil > acumMamifero && acumReptil > acumAve){
 masMascotas = "reptil";
}else if(acumMamifero >= acumReptil && acumMamifero > acumAve){
  masMascotas = "mamifero";
}else{
  masMascotas = "ave";
}

document.write("a)Promedio de edad de los reptiles: " + promedioReptil + "<br>");
document.write("b)Tipo de la mascota mas joven: " + tipo + " Sexo de la mascota mas joven " + sexo + "<br>");
document.write("c)Porcentaje de aves:  " + porcAves + "<br>");
document.write("d)Tipo de mascota con mas cantidad:  " + masMascotas + "<br>");


}




