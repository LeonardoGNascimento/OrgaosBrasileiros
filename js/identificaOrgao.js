export default function identificaOrgaoEImprimeDetalhes(e, todosDetalhes) {
  let nodelistLinhaClicada = Array.from(e.target.parentNode.childNodes);

  let linhaClicada = nodelistLinhaClicada.find((evento) => {
    if (evento.id) {
      return true;
    }
  });
  let idLinhaClicada = linhaClicada ? linhaClicada.id : null;

  let objetoCorrespondente = todosDetalhes.find((evento) => {
    if (evento.cod === idLinhaClicada) {
      return true;
    }
  });
  imprimeInfoMinerador(e, objetoCorrespondente);
}

function imprimeInfoMinerador(e, objetoCorrespondente) {
  let idFechar = 0;
  const divTabela = e.target.offsetParent.parentNode;
  const spanTabela = e.target.offsetParent.parentNode.childNodes[5];
  //const spanTabelaGeral = e.target.offsetParent.parentNode.childNodes[3];
  let idBotaoFechar = objetoCorrespondente.cod;
  // Imprime na tela as informações do minerador
  spanTabela.innerHTML += spanMinerador(
    objetoCorrespondente,
    idFechar,
    idBotaoFechar
  );
}
function spanMinerador(objetoCorrespondente, idFechar, idBotaoFechar) {
  return `
  <div id="${idFechar + idBotaoFechar}" class="fecharTodos">
    <br/>
    <span class="fecharDetalhes"><i class="fa-sharp fa-solid fa-circle-xmark"></i></span>
    <table id="tabelaDetalhes"  border="1">
    <tr>
      <th colspan="9">Código órgão: ${objetoCorrespondente.cod}</th>
    </tr>
    <tr> 
      <th>Foto Órgão</th>
      <th>Foto Miner</th>
      <th>Espelho Notic Órgão</th>
      <th>Espelho Notic Miner</th>
      <th>Extrato órgão</th>
      <th>Extrato Miner</th>
      <th>Boleto órgão</th>
      <th>Boleto Miner</th>
      <th>Originária</th>
    </tr>
    <tr>
      <td>${objetoCorrespondente.fotoOrgao}</td>
      <td>${objetoCorrespondente.fotoMiner}</td>
      <td>${objetoCorrespondente.espelhoNoticOrgao}</td>
      <td>${objetoCorrespondente.espelhoNoticMiner}</td>
      <td>${objetoCorrespondente.extratoOrgao}</td>
      <td>${objetoCorrespondente.extratoMiner}</td>
      <td>${objetoCorrespondente.boletoOrgao}</td>
      <td>${objetoCorrespondente.boletoMiner}</td>
      <td>${objetoCorrespondente.originaria}</td>
    </tr>
    </table>
  </div>
    `;
}
