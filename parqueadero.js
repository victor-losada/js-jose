/*cuatro vehiculos: motos, carros, ciclas, camiones, y el valor de parkeo. por cicla 500,
motos 1000, carros 1500, y camiones 3000. el sistema debe pedir la hora de ingreso y la
 hora de salida; debe mostrar tikect, nombre de la persona, placa, total a pagar y cuanto 
 tiempo estuvo*/

const parqueadero= (vehiculos,  hringreso, hrsalida, tikect, totpagar) => {
   let factura
   let motos
   let carro
   let camion
   let cicla
   let vl1 = 1000
   let vl2= 1500
   let vl3 = 3000
   let vl4 = 500
   //let hrsalida = 18

   if (vehiculos == "moto" ){
      factura = motos + vl1

       if(vehiculos  == "carro" ){
         factura = carro + vl2

      } else if(vehiculos == "camion") {
         factura = camion + vl3
      }
      else if (vehiculos == "cicla"){
         factura = cicla + vl4
      }
      else {
         factura = "vehiculo denegado"
      }
   }
   else if ( hringreso == "+"){
      if (hringreso == 25) {
         factura = "dato erroneo "
      }
      else {
         factura = hringreso +hrsalida
      }
   }





   
}
