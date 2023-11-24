const sumarCompleto = () => {
  var n1 = parseInt(document.getElementById("idNumero1").value);
  var n2 = parseInt(document.getElementById("idNumero2").value);
  console.log("Funcion sumar " + n1);
  console.log("Funcion sumar " + n2);
  var resultado = n1 + n2;
  console.log(resultado);
  document.getElementById("idResSumar").innerHTML = resultado;
};

const restar = () => {
  var n1 = parseInt(document.getElementById("idNumero1").value);
  var n2 = parseInt(document.getElementById("idNumero2").value);
  console.log("Funcion sumar" + n1);
  console.log("Funcion sumar" + n2);
  var resultado = n1 - n2;
  console.log(resultado);
  document.getElementById("idResRestar").innerText = resultado;
};

const multiplicar = () => {
  var n1 = parseInt(document.getElementById("idNumero1").value);
  var n2 = parseInt(document.getElementById("idNumero2").value);
  console.log("Funcion sumar" + n1);
  console.log("Funcion sumar" + n2);
  var resultado = n1 * n2;
  console.log(resultado);
  document.getElementById("idResMultiplicar").innerText = resultado;
};

const dividir = () => {
  var n1 = parseInt(document.getElementById("idNumero1").value);
  var n2 = parseInt(document.getElementById("idNumero2").value);
  var resultado = n1 / n2;
  console.log(resultado);
  document.getElementById("idResDividir").innerText = resultado;
};

const cambiarImagen = () => {
  document.getElementById("img1").src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/2023_Obsidian_logo.svg/1200px-2023_Obsidian_logo.svg.png";
};

const conceptosJS = () => {
  let var1 = 10;
  let var1texto = "Texto1";
  console.log(var1);
  console.log(var1texto);

  // var ya no se usa mucho
  var var2 = 10;
  var var2texto = "Texto2";
  console.log(var2);
  console.log(var2texto);

  const c1 = 10;
  const const1texto = "Texto3";

  console.log(c1);
  console.log(const1texto);

  // Arreglos
  const diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
  console.log(diasSemana);

  console.log(diasSemana[0]);
  console.log(diasSemana[4]);
  console.log(diasSemana[5]);
  diasSemana[5] = "Sabado";
  console.log(diasSemana[5]);

  // agrega al final
  diasSemana.push("Domingo");
  console.log(diasSemana);

  // agrega al inicio
  diasSemana.unshift("Feriado");
  console.log(diasSemana);

  const edades = [1, 2, 3, 4, 5];
  console.log(edades);

  //   concatenar
  const edades2 = [6, 7, 8];
  const edadFinales = edades.concat(edades2);
  console.log(edadFinales);

  for (const dias of diasSemana) {
    console.log(dias);

    // la nomenclatura oficial son con ===
    if (dias === "Martes") {
      console.log("martes dos por uno");
    }
  }

  //   Declaracion de objetos
  const estudiante = {
    nombre: "Perico",
    apellido: "De los Palotes",
    edad: 85,
    genero: "M",
    ciudad: "Quito",
  };

  console.log(estudiante);
  console.log(estudiante.apellido);

  estudiante.nombre = "Daniel";

  console.log(estudiante);

  const persona = {
    nombre: "Perico",
    apellido: "De los Palotes",
    edad: 85,
    direccion: {
      callePrincipal: "America",
      calleSecundaria: "Rumipamba",
      numeracion: "N62-22",
      barrio: "Mariana de Jesus",
    },
  };

  console.log(persona);
  console.log(persona.direccion.barrio);

  const paciente1 = {
    sangre: "O+",
    nombre: "Pepit",
    id: "223",
  };
  const paciente2 = {
    sangre: "O-",
    nombre: "Kevin",
    id: "224",
  };
  const paciente3 = {
    sangre: "B+",
    nombre: "Julia",
    id: "225",
  };

  const arregloPaci = [
    {
      sangre: "O+",
      nombre: "Pepit",
      id: "223",
    },
    {
      sangre: "O-",
      nombre: "Kevin",
      id: "224",
    },
    paciente3,
  ];

  console.log(arregloPaci);

  //   saca el ultimo elemento de un arreglo
  console.log(arregloPaci.pop());
  console.log(arregloPaci[0].id);
  console.table(arregloPaci);

  //   Desestructurar arreglos

  const diasSemana2 = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
  const [primera, segunda, tercera] = diasSemana2;
  const [d1, d2, d3, d4, d5] = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
  ];
  console.log(primera, tercera);

  const { nombre: n2, id: id2, sangre: s2 } = arregloPaci[0];
  console.log(n2, id2, s2);

  const vehiculo = { marca: "Toyota", modelo: "Corolla", anio: 2022 };
  const { marca: mT } = vehiculo;
  console.log(mT);

  const {motor : {nombre}} = {
    marca: "Toyota",
    modelo: "Corolla",
    motor: {
      nombre: "Honda",
      hp: 115,
    },
  };

  console.log(nombre);
};
