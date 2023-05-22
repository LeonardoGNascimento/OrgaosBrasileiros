import * as orgaos from "../json/orgaos.js";
import trocarLista from "./trocarLista.js";
import criarLista from "./criarLista.js";
const estados = document.querySelectorAll("a");
const table = document.getElementById("tabela");

export default function renderizaOrgaos() {
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
}
