var valor1;
var valor2;
var operacion;
var json=[];


function calculadora(){
    
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var punto = document.getElementById('punto');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');


uno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}
punto.onclick = function(e){
    resultado.textContent = resultado.textContent  + ".";
    let valor = resultado.textContent;
    //console.log(valor.split('.'));
    if(valor.split('.').length>2) 
    resultado.textContent =valor.replace(/\.+$/,"");
}
reset.onclick = function(e){
    resetear();
}
suma.onclick = function(e){
    valor1 = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function(e){
    valor1 = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    valor1 = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function(e){
    valor1 = resultado.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function(e){
    valor2 = resultado.textContent;
    resolver();
}
  }

  function limpiar(){
    resultado.textContent = "";
  }
  function resetear(){
    resultado.textContent = "";
    valor1 = 0;
    valor2 = 0;
    operacion = "";
  }

  function resolver(){
    var res = 0;
    var numero = 0;
    var numero2 = 0;
    var symbol ="";
    switch(operacion){
      case "+":
        numero = valor1;
        numero2 = valor2;
        symbol="+";
        res = parseFloat(valor1) + parseFloat(valor2);

        break;
      case "-":
        numero = valor1;
        numero2 = valor2;
        symbol="-";
          res = parseFloat(valor1) - parseFloat(valor2);

          break;
      case "*":
        symbol="x";
        numero = valor1;
        numero2 = valor2;
        res = parseFloat(valor1) * parseFloat(valor2);

        break;
      case "/":
        symbol="/";
        numero = valor1;
        numero2 = valor2;
        res = parseFloat(valor1) / parseFloat(valor2);

        break;
    }
    resetear();
    resultado.textContent = res;
    numero.textContent = valor1;

    let tbody = document.getElementById('history')
    tbody.innerHTML +=  numero + symbol + numero2 +"="+ res + "<tr></tr>"
    const nuevo = {numero1: numero, symbol: symbol, numero2: numero2, igual: "=", resultado: res}
    json.push(nuevo)

  }

  function clearTable() {
	var Table = document.getElementById("history");
	Table.innerHTML = "";
}


