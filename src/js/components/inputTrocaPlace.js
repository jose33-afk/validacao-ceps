import { pegaElemento } from "../modules/ultis.js";
const cepInput = pegaElemento("#cep__input");
const NumCll = pegaElemento("#numero__input");

const trocaPlaceholder = (elemento, focus, normal) => {
  elemento.addEventListener("focus", () => {
    elemento.placeholder = focus;
  });

  elemento.addEventListener("blur", () => (elemento.placeholder = normal)); //() unica linha
};

trocaPlaceholder(cepInput, "Digite somente numeros!", "01001-000");
trocaPlaceholder(NumCll, "Digite somente numeros!", "(87) 33674673");

export { cepInput, NumCll};
