import { orgaosGerais } from "../json/orgaosParaVerificar.js";
import { todosDetalhes } from "../json/detalhes.js";
import identificaOrgaoEImprimeDetalhes from "./identificaOrgao.js";
import fechaAbaDetalhes from "./fechaAbaDetalhes.js";
import criarLista from "./criarLista.js";
import pesquisaOrgao from "./pesquisarOrgao.js";
import renderizaOrgaos from "./renderizaOrgaos.js";

const table = document.getElementById("tabela");
const tabelaGeral = document.getElementById("tabelaGeral");
const titulos = {
  coluna1: "Órgão",
  coluna2: "Código Órgão",
  coluna3: "Link",
  coluna4: "Detalhes",
};

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
renderizaOrgaos();
pesquisaOrgao();

table.addEventListener("click", (e) => {
  identificaOrgaoEImprimeDetalhes(e, todosDetalhes);
  fechaAbaDetalhes();
});

tabelaGeral.addEventListener("click", (e) => {
  identificaOrgaoEImprimeDetalhes(e, todosDetalhes);
  fechaAbaDetalhes();
});
