let numero = parseInt(prompt('ingresar la cantidad de numeros a sumar'));

let suma = 0;

for (let i = 0; i < numero; i++) {
    let otronumero = parseInt(prompt('ingresar numero a sumar'));
    suma += otronumero;
}
alert('numero total: ' + suma);