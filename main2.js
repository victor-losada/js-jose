//declaracion de la funcion felcha
const calculadora=(signo, valor1, valor2) => {
    let resultado 
    if (signo == "+"){
        resultado = valor1 + valor2
    }
    else if(signo == "-") {
        resultado = valor1 - valor2
    }
    
    else if (signo == "*") {
        resultado = valor1 * valor2
    }
    else if(signo == "/") {
        if(valor2 == 0){
            resultado = "error- no se puede dividir por cero"
        }
        else{
            resultado = valor1 / valor2
        }

    }else {
        resultado = "error-Signo no tenido en cuenta"
    }
    return resultado
}
console.log(calculadora("/", 4, 0))
