import { validarCep } from "./api.js";
import { pegaElemento } from "./ultis.js";

const preencheDados = (dado) => {
  const InputCep = pegaElemento("#cep__input");
  const InputCidade = pegaElemento('#cidade__input');
  const InputEstado = pegaElemento('#estado__input');

  validarCep(dado).then((endereco) => {
    if (endereco != undefined) {
      InputCep.value = `${endereco.cep}`;
      InputCidade.value = `${endereco.cidade}`;
      InputEstado.value = `${endereco.estado}`;
      
      InputCep.dataset.valido = 'on';
    }
  });
};

export { preencheDados };
