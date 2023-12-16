console.log("Elementos Vue");
console.log(Vue);

const estudiantes = [
//   { nombre: "Perico", apellido: "Palotes" },
//   { nombre: "Daniel", apellido: "Aquino" },
//   { nombre: "Alison", apellido: "Guzman" },
//   { nombre: "Tomas", apellido: "Guaman" },
//   { nombre: "Agustin", apellido: "Rea" },
];

const app = Vue.createApp({
  //   template: `
  //       <h1> Hola Mundo</h1>
  //       <p>Vue.js con CDN</p>

  //       <h1>{{1+1}}</h1>
  //       <p> {{[1,2,3,4,5,6,7,8]}}</p>
  //       <p> {{false ? 'Verdadero' : 'Falso'}}</p>
  //       `,

  data() {
    return {
      mensaje: "Hello",
      valor: 1000,
      lista: estudiantes,
      nombre: undefined,
      apellido: null,
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
      const enviar = { nombre: this.nombre, apellido: this.apellido };
      this.lista.push(enviar);
    },
    quitar(valor) {
      console.log(valor);
      this.lista.splice(valor, 1);
      this.editar = "Borrar";
    },
    
    presionarTecla({charCode}){

      if (charCode == 13) {
        this.agregar();
      }

      
    },

    presionarTeclaMod(){
      console.log("presionando 2");
    }
  },
});

app.mount("#myApp");
