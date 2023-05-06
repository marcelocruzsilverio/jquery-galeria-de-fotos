// $(document).ready(function () {
//   alert("Olá jQuery");
// }); função para ver se o jQuery está funcionando
// o jQuery funciona através do $() dentro do parenteses informamos o seletor

$(document).ready(function () {
  // console.log(document.querySelector("header button")); como é no javaScript
  // console.log($("#botao-cancelar")); como é no jQuery

  // document
  //   .querySelector("header button")
  //   .addEventListener("click", function () {});

  $("header button").click(function () {
    $("form").slideDown();
  });

  $("#botao-cancelar").click(function () {
    $("form").slideUp();
  });

  $("form").on("submit", function (ev) {
    ev.preventDefault();
    const enderecoNovaImagem = $("#endereco-imagem-nova").val(); //seria o input.value no javaScript
    const novoItem = $("<li style='display: none'></li>");
    $(`<img src= "${enderecoNovaImagem}" />`).appendTo(novoItem);
    $(`<div class="overlay-imagem-link">
    <a
      href="${enderecoNovaImagem}"
      target="_blank"
      title="Ver imagem em tamanho real"
      >Ver imagem em tamanho real</a
    >
  </div>`).appendTo(novoItem);
    $(novoItem).appendTo("ul");
    $(novoItem).fadeIn(1000); //adiciona uma transição de 1 segundo, ou seja, a foto vai demorar esse tempo pra surgir na tela
    $("#endereco-imagem-nova").val(""); //limpando o input
  });
});
