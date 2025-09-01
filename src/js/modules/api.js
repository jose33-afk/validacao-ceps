export async function validarCep() {
  const cepsAPI = await fetch("https://viacep.com.br/ws/01001000/json/"); 
  const cep = await cepsAPI.json();
  return cep;
}



