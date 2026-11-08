// Mantém os parâmetros da campanha ao avançar da pré-venda para o questionário.
(function () {
  var button = document.getElementById('continuar-questionario');
  if (!button) return;
  button.href = '/pagina/' + window.location.search + window.location.hash;
})();
