// Inicializa o EmailJS com sua Public Key
(function () {
  emailjs.init("3ezdfNr4mqwgjAM73");
})();

// Captura o submit do formulário e envia via EmailJS
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_9ysl56x", "template_xy8bonn", this).then(
      function () {
        document.getElementById("form-message").innerText =
          "Mensagem enviada com sucesso!";
      },
      function (error) {
        document.getElementById("form-message").innerText =
          "Erro ao enviar. Tente novamente.";
        console.error("Erro no envio:", error);
      }
    );

    this.reset();
  });
