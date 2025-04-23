// document
//   .getElementById("contact-form")
//   .addEventListener("submit", function (event) {});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("form-message").innerText =
      "Mensagem enviada com sucesso!";
    this.reset();
  });
