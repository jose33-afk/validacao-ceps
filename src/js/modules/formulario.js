import { pegaElemento } from "./ultis.js";
import { Endereco } from "./ClassEndereco.js";
const formulario = document.querySelector(".form-container");

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

const teste = (testeendereco) => {
  console.log(testeendereco);
};


//fazer funcao pra formatar o text