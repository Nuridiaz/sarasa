function mostrar() {
 /*Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre,
carrera("Quimica";"Fisica";"Sistemas"),
sexo (masculino - femenino -no binario),
cantidad de materias(entre 1 y 5),
Nota promedio del alumno(entre 0 y 10),
edad (validar).
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.*/



let carrera;
let sexo;
let cantidadMaterias;
let notaProm;
let edad;
let promFisica;

nombre = prompt("Ingrese su nombre: ");

carrera = prompt("Ingrese la carrera: ");
while(carrera != "quimica" && carrera != "fisica" && carrera != "sistemas"){
  carrera = prompt("Error. Ingrese la carrera correcta: ");
}

cantidadMaterias = prompt("Ingrese cantidad de materias: ");
while(isNaN(cantidadMaterias) || cantidadMaterias < 1 || cantidadMaterias > 5){
  cantidadMaterias = prompt("Error. Ingrese cantidad de materias: ");
}

sexo = prompt("Ingrese su sexo: ");
  while(sexo != "masculino" || sexo != "femenino" || sexo != "no binario"){
sexo = prompt("Error. Ingrese su sexo: ");
}

edad = parseInt(prompt("Ingrese edad: "));
while(isNaN(edad) || edad <= 0 ){
  edad = parseInt(prompt("Error. Ingrese edad: "));
}

nota = parseInt(prompt("Ingrese nota: "));
while(isNaN(nota) || nota < 0 || nota > 10){
  nota = parseInt(prompt("Error. Ingrese nota: "));
}

a) El nombre del mejor promedio de los alumnos que estudian Fisica.

if()
















}
