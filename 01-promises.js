//ARROW FUNCTION
/* 
const promise = () => {
  return new Promise((resolve, reject) => {});
};
 */

//FUNCTION
/*
function prom() {
  return new Promise((resolve, reject) => {});
}
*/

//LOGICA NEGATIVA, PRIMERO CONFIRMAR SI NO SE CUMPLE PARA NO CONTINUAR
function isMyName(name) {
  const myName = "tuxdinosaur";
  return new Promise((resolve, reject) => {
    if (name != myName) {
      return reject(false);
    }
    resolve(true);
  });
}

isMyName("tuxdinosaur")
  //Metodo then es del objeto promesa, recibe lo que se le pasó a resolve
  .then(response => {
    console.log("Correcto:", response);
  })
  //Cuando algo falla
  .catch(error => {
    console.log("Incorrecto:", error);
  });
