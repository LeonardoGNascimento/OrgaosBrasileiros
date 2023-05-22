import { orgaosGerais } from "../json/orgaosParaVerificar.js";
import { todosDetalhes } from "../json/detalhes.js";

import identificaOrgaoEImprimeDetalhes from "./identificaOrgao.js";
import fechaAbaDetalhes from "./fechaAbaDetalhes.js";
import criarLista from "./criarLista.js";
import pesquisaOrgao from "./pesquisarOrgao.js";
import renderizaOrgaos from "./renderizaOrgaos.js";
//import pesquisaOrgao from "./pesquisarOrgao.js";

const table = document.getElementById("tabela");
const estados = document.querySelectorAll("a");
const tabelaGeral = document.getElementById("tabelaGeral");
const titulos = {
  coluna1: "Órgão",
  coluna2: "Código Órgão",
  coluna3: "Link",
  coluna4: "Detalhes",
};
// TITULOS DA TABELA -------------------
//Cria os headers da tabela
function tableHeader() {
  return `
<tr>
<th>${titulos.coluna1}</th>
    <th>${titulos.coluna2}</th>
    <th>${titulos.coluna3}</th>
    <th>${titulos.coluna4}</th>
</tr>
<tr>
`;
}
table.innerHTML = tableHeader();
tabelaGeral.innerHTML = tableHeader();
criarLista(orgaosGerais, tabelaGeral);
// ---------------- EVENTOS AO CLICAR EM UM ESTADO DO MAPA
renderizaOrgaos();
//------------------------- EVENTO AO PESQUISAR UM ÓRGÃO-----------------------
pesquisaOrgao();
// ---------------------FUNCIONALIDADE 'DETALHES' ----------------------------

//Quando o botão de 'detalhes' for clicado, verifica qual é o órgão correspondente
table.addEventListener("click", (e) => {
  identificaOrgaoEImprimeDetalhes(e, todosDetalhes);

  fechaAbaDetalhes();
});
tabelaGeral.addEventListener("click", (e) => {
  identificaOrgaoEImprimeDetalhes(e, todosDetalhes);

  fechaAbaDetalhes();
});
