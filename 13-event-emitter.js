// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it
// Estamos a la escucha del evento response, que ejecuta un callback en su llamada. Se pueden incluir parámetros al callback
customEmitter.on("response", (name, id) => {
  console.log(`data recieved user ${name} with id: ${id} `);
});

customEmitter.on("response", () => {
  console.log(`some other logic here`);
});

// Emitimos el evento. Se puedne enviar parámetros.
customEmitter.emit('response', 'john', 34);