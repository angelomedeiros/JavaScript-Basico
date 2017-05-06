/* Tentar imprimir isso em um local especifico da página

var criando_array = document.getElementsByTagName('h1')[0];

var array1 = new Array("Red",10,24.4);
var array2 = Array("Blue", 12, 30.3, array1);
var array3 = ["orange", 10, 23.2, array1, array2];

document.write("<p>Array1: " + array1[0] + "</p>");
document.write("<p>Array1: " + array1[1] + "</p>");
document.write("<p>Array1: " + array1[2] + "</p>");

document.write("<p>Array2: " + array2[0] + "</p>");
document.write("<p>Array2: " + array2[1] + "</p>");
document.write("<p>Array2: " + array2[2] + "</p>");
document.write("<p>Array2: " + array2[3] + "</p>");

document.write("<p>Array3: " + array3[0] + "</p>");
document.write("<p>Array3: " + array3[1] + "</p>");
document.write("<p>Array3: " + array3[2] + "</p>");
document.write("<p>Array3: " + array3[3] + "</p>");
document.write("<p>Array3: " + array3[4] + "</p>");

document.write("<p>Array1: " + array1.length + "</p>");
document.write("<p>Array2: " + array2.length + "</p>");
document.write("<p>Array3: " + array3.length + "</p>");

*/

var array1 = new Array("Red",10,24.4);
var array2 = Array("Blue", 12, 30.3);
var array3 = ["orange", 10, 23.2];
array1 = array1.concat(array2,array3);

document.write("<p>Array1: " + array1[0] + "</p>");
document.write("<p>Array1: " + array1[1] + "</p>");
document.write("<p>Array1: " + array1[2] + "</p>");
document.write("<p>Array1: " + array1[3] + "</p>");
document.write("<p>Array1: " + array1[4] + "</p>");
document.write("<p>Array1: " + array1[5] + "</p>");
document.write("<p>Array1: " + array1[6] + "</p>");
document.write("<p>Array1: " + array1[7] + "</p>");
document.write("<p>Array1: " + array1[8] + "</p>");
document.write("<p>Array1: " + array1[9] + "</p>");

document.write("<p>Array2: " + array2[0] + "</p>");
document.write("<p>Array2: " + array2[1] + "</p>");
document.write("<p>Array2: " + array2[2] + "</p>");
document.write("<p>Array2: " + array2[3] + "</p>");

document.write("<p>Array3: " + array3[0] + "</p>");
document.write("<p>Array3: " + array3[1] + "</p>");
document.write("<p>Array3: " + array3[2] + "</p>");
document.write("<p>Array3: " + array3[3] + "</p>");
document.write("<p>Array3: " + array3[4] + "</p>");

document.write("<p>Array1: " + array1.length + "</p>");
document.write("<p>Array2: " + array2.length + "</p>");
document.write("<p>Array3: " + array3.length + "</p>");





