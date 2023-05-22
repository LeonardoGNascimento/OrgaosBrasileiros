export default function criarLista(nomeEstado, tabela) {
  let estado = nomeEstado;
  let lista = "";
  estado.map((e) => {
    lista += `
     <tr>
      <td>${e.nome}</td>
      <td id="${e.cod}">${e.cod}</td>
      <td><a href="${e.link}" target="_blank">Clique aqui</a></td>
      <td>+</td>
     </tr>
    `;
  });
  tabela.innerHTML += lista;
}
