import { cepInput, NumCll } from "../components/inputTrocaPlace.js";
import { pegaElemento } from "./ultis.js";
import { preencheDados } from "./preenchedadosAuto.js";
const listadivs = pegaElemento("div", 2);

//validar spans.
const validarInput = (nome, input) => {
  let valor = input.value;
  if (/(.)\1{5,}/.test(valor)) {
    alert(`Tem certeza que isso e um(a) ${nome}`);
    input.value = "";
  }
};

for (let div of listadivs) {
  let nome = div.querySelector("label").textContent;
  let input = div.querySelector("input");
  input.addEventListener("input", () => {
    validarInput(nome, input);
  });
}

//Validar numeros.
const SomenteNumeros = (elemento, nome, comprimento) => {
  elemento.addEventListener("input", () => {
    if (elemento.value.length != 8) (elemento.dataset.valido = "off");

    if (elemento.value.length === comprimento) {
      const valorElemento = elemento.value;
      console.log(`somente numeros valido:${elemento.dataset.valido}`);

      if (elemento.dataset.valido === "off") {
        if (/^[0-9]+$/.test(valorElemento)) {
          if (nome == "Cep") preencheDados(valorElemento);
        } else {
          alert(`[${nome}:Error]invalido!`);
          elemento.value = "";
        }
      }
    }
  });
};

SomenteNumeros(cepInput, "Cep", 8);
SomenteNumeros(NumCll, "Numero", 11);

//teste e pra testar expressoes regulares.
