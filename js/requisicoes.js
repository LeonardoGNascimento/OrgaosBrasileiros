// Requere os dados do JSON e chama a  função insereTitulosSQL
export default async function buscaSQL() {
  const querySql = await fetch("../json/querySql.json");
  const requeridoJSON = await querySql.json();
  return await requeridoJSON;
}
