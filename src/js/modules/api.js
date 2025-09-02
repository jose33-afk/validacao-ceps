export async function validarCep(PossivelCep) {
  try {
    const cepsAPI = await fetch(
      `https://viacep.com.br/ws/${PossivelCep}/json/`
    );
    const cep = await cepsAPI.json();
    if (cep.erro) {
      throw new Error("Cep Invalido ou n encontrado!"); //Vai pro catch.
    }

    const dadosEndereco = {
      cep: cep.cep,
      estado: cep.estado,
      cidade: cep.localidade
    };

    console.log(cep)
    return dadosEndereco;
  } catch (erro) {
    return console.log(`${erro}`);
  }
}
