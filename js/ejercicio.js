
const estudiantes = [
  // { nombre: "Perico", apellido: "Palotes" , edad: 0},
  // { nombre: "Daniel", apellido: "Aquino" , edad: 0},
  // { nombre: "Alison", apellido: "Guzman" , edad: 0},
  // { nombre: "Tomas", apellido: "Guaman" , edad: 0},
  // { nombre: "Agustin", apellido: "Rea" , edad: 0},
];

const app = Vue.createApp({

  data() {
    return {
      lista: estudiantes,
      nombre: undefined,
      apellido: null,
      edad: null,
      genero: null,
      pais: null,
      editar: "Editar",
    };
  },

  methods: {
    cambiar() {
      console.log("Se esta cambiando el mensaje");
      this.mensaje = "Nuevo mensaje";
    },
    sumar() {
      this.valor += 1;
    },
    agregar() {
      console.log("Agregando Estudiante...........");
      console.log(estudiantes);
      const enviar = {
        nombre: this.nombre,
        apellido: this.apellido,
        edad: this.edad,
        genero: this.genero,
        pais: this.pais,
      };
      this.lista.push(enviar);
      
    },
    quitar(valor) {
      console.log(valor);
      this.lista.splice(valor, 1);
      this.editar = "Borrar";
    },

   
  },
});

app.mount("#myApp");
