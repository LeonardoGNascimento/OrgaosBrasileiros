export default function fechaAbaDetalhes() {
  Array.from(document.querySelectorAll(".fecharDetalhes")).map((e) => {
    e.addEventListener("click", (e) => {
      console.log(e.target.parentNode.parentNode);
      // Identifica a tabela clicada e a remove da tela
      let divClicada = e.target.parentNode.parentNode;
      divClicada.remove();
      //Array.from(document.querySelectorAll(".fecharTodos")).map((evento) =>   evento.remove());
    });
  });
}
