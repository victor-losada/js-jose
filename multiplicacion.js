let nombre = "calculadora"

function multiplicar() {
    var numero1 = parseFloat("ingrese el primer numero");
    var numero2 = parseFloat(document.getElementById("numero2").value);

    var resultado = numero1 * numero2;
    document.getElementById("resultado").innerHTML = "Resultado:" + resultado;
    /*console.log(numero2(4))
    console.log(numero1(7))
    console.log(resultado())*/

}
//echo "el resultado es". resultado;


