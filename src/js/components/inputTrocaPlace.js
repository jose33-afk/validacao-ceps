import { pegaElemento } from "../modules/ultis.js";
const cepInput = pegaElemento("#cep__input");

cepInput.addEventListener("focus", () => {
  cepInput.placeholder = "Digite somente numeros!";
});

cepInput.addEventListener("blur", () => (cepInput.placeholder = "01001-000")); //() unica linha

cepInput.addEventListener("input", () => {
  if (cepInput.value.length === 8) {
    const cep = cepInput.value;
    if (/^[0-9]+$/.test(cep)) { //1
      console.log(cep);
    } else {
      alert("[Cep:Error]invalido!");
    }
  }
});

//teste e pra testar expressoes regulares.
