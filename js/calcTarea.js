var operacion = "";

function agregarNumero(valor) {
  console.log(valor);
  console.log(operacion);
  operacion = operacion.concat(valor);
  document.getElementById("idRes").innerHTML = operacion;
}

function agregarSigno(valor) {
  console.log(valor);
  console.log(operacion);

  if (chequear(operacion.charAt(operacion.length - 1))) {
    return;
  }

  operacion = operacion.concat(valor);

  document.getElementById("idRes").innerHTML = operacion;
}

function resultado() {
  console.log(operacion);

  if (chequear(operacion.charAt(operacion.length - 1))) {
    return;
  }

  try {
    var res = eval(operacion);
    document.getElementById("idRes").innerHTML = res;
  } catch (error) {
    alert("Expresion: " + error.message);
  }
}

function chequear(char) {
  return ["+", "-", "*", "/", "."].includes(char);
}
