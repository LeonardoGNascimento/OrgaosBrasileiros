import * as orgaos from "./orgaos.js";
import { orgaosGerais } from "./orgaosNaoHomologados.js";

const table = document.getElementById("tabela");
const estados = document.querySelectorAll("a");
const tabelaGeral = document.getElementById("tabelaGeral");
const titulos = {
  coluna1: "Órgão",
  coluna2: "Código Órgão",
  coluna3: "Link",
};

function criarLista(nomeEstado, tabela) {
  let estado = nomeEstado;
  let lista = "";
  estado.map((e) => {
    lista += `
   <tr>
    <td>${e.nome}</td>
    <td>${e.cod}</td>
    <td><a href="${e.link}" target="_blank">Vai ser hackeado ao clicar</a></td>
   </tr>
  `;
  });
  tabela.innerHTML += lista;
}
function trocarLista() {
  table.innerHTML = `
  <tr>
  <th>${titulos.coluna1}</th>
      <th>${titulos.coluna2}</th>
      <th>${titulos.coluna3}</th>
  </tr>
  <tr>
  `;
}

// TITULOS DA TABELA -------------------
function tableHeader() {
  return `
<tr>
<th>${titulos.coluna1}</th>
    <th>${titulos.coluna2}</th>
    <th>${titulos.coluna3}</th>
</tr>
<tr>
`;
}
table.innerHTML = tableHeader();
tabelaGeral.innerHTML = tableHeader();
// ---------------- EVENTOS AO CLICAR EM UM ESTADO DO MAPA

criarLista(orgaosGerais, tabelaGeral);
estados.forEach((e) => {
  const valorHref = e.href.animVal;
  e.dataset.id = `${valorHref}`;
  e.addEventListener("click", (evento) => {
    const estadoClicado = evento.target.parentNode.dataset.id;
    switch (estadoClicado) {
      case "#tocantins":
        trocarLista();
        criarLista(orgaos.tocantins, table);
        break;
      case "#bahia":
        trocarLista();
        criarLista(orgaos.bahia, table);
        break;
      case "#sergipe":
        trocarLista();
        criarLista(orgaos.sergipe, table);
        break;
      case "#pernambuco":
        trocarLista();
        criarLista(orgaos.pernambuco, table);
        break;
      case "#alagoas":
        trocarLista();
        criarLista(orgaos.alagoas, table);
        break;
      case "#riograndedonorte":
        trocarLista();
        criarLista(orgaos.riograndedonorte, table);
        break;
      case "#ceara":
        trocarLista();
        criarLista(orgaos.ceara, table);
        break;
      case "#piaui":
        trocarLista();
        criarLista(orgaos.piaui, table);
        break;
      case "#maranhao":
        trocarLista();
        criarLista(orgaos.maranhao, table);
        break;
      case "#amapa":
        trocarLista();
        criarLista(orgaos.amapa, table);
        break;
      case "#para":
        trocarLista();
        criarLista(orgaos.para, table);
        break;
      case "#roraima":
        trocarLista();
        criarLista(orgaos.roraima, table);
        break;
      case "#amazonas":
        trocarLista();
        criarLista(orgaos.amazonas, table);
        break;
      case "#acre":
        trocarLista();
        criarLista(orgaos.acre, table);
        break;
      case "#rondonia":
        trocarLista();
        criarLista(orgaos.rondonia, table);
        break;
      case "#matogrosso":
        trocarLista();
        criarLista(orgaos.matogrosso, table);
        break;
      case "#matogrossodosul":
        trocarLista();
        criarLista(orgaos.matogrossodosul, table);
        break;
      case "#goias":
        trocarLista();
        criarLista(orgaos.goias, table);
        break;
      case "#parana":
        trocarLista();
        criarLista(orgaos.parana, table);
        break;
      case "#santacatarina":
        trocarLista();
        criarLista(orgaos.santacatarina, table);
        break;
      case "#riograndedosul":
        trocarLista();
        criarLista(orgaos.riograndedosul, table);
        break;
      case "#saopaulo":
        trocarLista();
        criarLista(orgaos.saopaulo, table);
        console.log();
        break;
      case "#minasgerais":
        trocarLista();
        criarLista(orgaos.minasgerais, table);

        break;
      case "#riodejaneiro":
        trocarLista();
        criarLista(orgaos.riodejaneiro, table);
        break;
      case "#espiritosanto":
        trocarLista();
        criarLista(orgaos.espiritosanto, table);
        break;
      case "#distritofederal":
        trocarLista();
        criarLista(orgaos.distritofederal, table);
        break;
      case "#paraiba":
        trocarLista();
        criarLista(orgaos.paraiba, table);

        break;
    }
  });
});
//------------------------- EVENTO AO PESQUISAR UM ÓRGÃO-----------------------
const inputBuscar = document.getElementById("buscar");

inputBuscar.addEventListener("change", (e) => {
  let valorDigitado = e.target.value;
  let encontrou = false;
  console.log(encontrou);
  orgaos.todosEstados.forEach((evento) => {
    evento.map((todosObjetos) => {
      if (todosObjetos.cod === valorDigitado) {
        encontrou = true;
        let replicaObj = [
          {
            nome: todosObjetos.nome,
            cod: todosObjetos.cod,
            link: todosObjetos.link,
          },
        ];
        trocarLista();
        criarLista(replicaObj, table);
        inputBuscar.value = "";
      }
    });
  });
  if (encontrou === false) {
    alert("Código não localizado");
  }
});
// -------------------------------------------------
