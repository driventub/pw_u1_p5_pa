function sumarNumeroCompleto() {
  var resultado = parsear("idElemento1") + parsear("idElemento2");
  console.log("Funcion sumar" + n1);
  console.log("Funcion sumar" + n2);
  console.log(resultado);
  document.getElementById("idResSumar").innerText = resultado;
}

const parsear = (id) => parseInt(document.getElementById(id).value);
function restar() {
  var resultado = parsear("idElemento1") - parsear("idElemento2");
  console.log(resultado);
  document.getElementById("idResRestar").innerText = resultado;
}

function multiplicar() {
  var resultado = parsear("idElemento1") * parsear("idElemento2");
  console.log(resultado);
  document.getElementById("idResMultiplicar").innerText = resultado;
}

function dividir() {
  var resultado = parsear("idElemento1") / parsear("idElemento2");
  console.log(resultado);
  document.getElementById("idResDividir").innerText = resultado;
}

function cambiarImagen() {
  document.getElementById("img1").src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/2023_Obsidian_logo.svg/1200px-2023_Obsidian_logo.svg.png";
}
