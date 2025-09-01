import { pegaElemento } from "./ultis.js";
import { Endereco } from "./ClassEndereco.js";
const formulario = pegaElemento(".form-container");



//Pega dados.
let preenchido = false;
formulario.addEventListener("submit", (event) => {
  event.preventDefault(); //impede o recarregamento da página

  if (!preenchido) {
    preenchido = true;
    let listaInputs = pegaElemento("input", 2);
    listaInputs = listaInputs.map((item) => item.value);
    const enderecoDe = new Endereco(...listaInputs);
    teste(enderecoDe);
  } else {
    alert("os dados ja foram enviados aguarde!");
  }
});

const teste = (testeendereco) => { //oq eu vou fazer com dados
  console.log(testeendereco);
};


//fazer funcao pra formatar o text