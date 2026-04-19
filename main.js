//Con esto trabajo al boton
// Con const creo la variable + document traigo por id
/**
 * @type {HTMLButtonElement}
 */
const singinButton = document.getElementById("botsingin");

//Aca con el comportamiento del boton al hacer click
singinButton.onclick = () => {
  document.body.style.backgroundColor = "#000";
  document.header.style.backgroundColor = "#000";
};


const singupButton = document.getElementById("botsingup");
//Aca con el comportamiento del boton al hacer click
singupButton.onclick = () => {
  document.body.style.backgroundColor = "#38d091";
};
