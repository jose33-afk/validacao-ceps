async function validarCep() {
  const cepsAPI = await fetch("https://viacep.com.br/ws/01001000/json/"); //1
  const cep = await cepsAPI.json();
  return cep;
}

export { validarCep };
/*
  1 - fetch retorna uma promese preciso do await pra esperar ela processar.
*/
