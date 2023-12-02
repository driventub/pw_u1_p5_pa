var operacion = "";

const mostrar = () => {
  document.getElementById("idRes").innerHTML = operacion;
};

const quitar = () => {
  // operacion = operacion.substring(0, operacion.length() - 1);
  operacion = operacion.slice(0, operacion.length - 1);
  console.log(operacion);
  mostrar();
};
function agregarNumero(valor) {
  console.log(valor);
  console.log(operacion);
  operacion = operacion.concat(valor);
  mostrar();
}

function agregarSigno(valor) {
  console.log(valor);
  console.log(operacion);

  if (chequear(operacion.charAt(operacion.length - 1))) {
    return;
  }

  operacion = operacion.concat(valor);
  mostrar();
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

const limpiar = () => {
  operacion = "";
  document.getElementById("idRes").innerHTML = operacion;
};
