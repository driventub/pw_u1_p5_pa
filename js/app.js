console.log("Elementos Vue");
console.log(Vue);

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
      valor: 1000
    };
  },

  methods: {
    cambiar(){
        console.log("Se esta cambiando el mensaje");
        this.mensaje = "Nuevo mensaje";
    },
    sumar(){
        this.valor += 1
    }
  },
});

app.mount("#myApp");
