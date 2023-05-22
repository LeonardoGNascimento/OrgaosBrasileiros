import * as orgaos from "../json/orgaos.js";
import criarLista from "./criarLista.js";
import trocarLista from "./trocarLista.js";
const inputBuscar = document.getElementById("buscar");
const table = document.getElementById("tabela");
// Adiciona um evento escutador no input
export default function pesquisaOrgao() {
  inputBuscar.addEventListener("change", (evento) => {
    let valorDigitado = evento.target.value;
    let encontrou = false;
    orgaos.todosEstados.forEach((estado) => {
      const objetoEncontrado = estado.find((objetoOrgao) => {
        return objetoOrgao.cod === valorDigitado;
      });
      if (objetoEncontrado != undefined) {
        encontrou = true;
        const objToArray = [
          {
            nome: objetoEncontrado.nome,
            cod: objetoEncontrado.cod,
            link: objetoEncontrado.link,
          },
        ];
        trocarLista();
        criarLista(objToArray, table);
        inputBuscar.value = "";
      }
    });
    if (encontrou === false) {
      alert("Código não localizado");
    }
  });
}
