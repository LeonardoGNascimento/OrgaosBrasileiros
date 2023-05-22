const table = document.getElementById("tabela");
const titulos = {
  coluna1: "Órgão",
  coluna2: "Código Órgão",
  coluna3: "Link",
  coluna4: "Detalhes",
};

export default function trocarLista() {
  table.innerHTML = `
    <tr>
    <th>${titulos.coluna1}</th>
        <th>${titulos.coluna2}</th>
        <th>${titulos.coluna3}</th>
       <th>${titulos.coluna4}</th>
    </tr>
    <tr>
    `;
}
