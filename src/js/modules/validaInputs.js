import { cepInput, NumCll } from "../components/inputTrocaPlace.js";

const SomenteNumeros = (elemento, nome, comprimento) => {
  elemento.addEventListener("input", () => {
    if (elemento.value.length === comprimento) {
      const valorElemento = elemento.value;
      if (/^[0-9]+$/.test(valorElemento)) {
        //1
        console.log(valorElemento);
      } else {
        alert(`[${nome}:Error]invalido!`);
      }
    }
  });
};

SomenteNumeros(cepInput, 'Cep', 8);
SomenteNumeros(NumCll, 'Numero', 11);
//teste e pra testar expressoes regulares.
