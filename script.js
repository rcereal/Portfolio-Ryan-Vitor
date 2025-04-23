// Inicializa o EmailJS com a chave pública
(function () {
  emailjs.init("3ezdfNr4mqwgjAM73"); // Verifique se essa chave está correta
})();

// Manipulador de envio do formulário
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Impede o envio padrão

    // Exibe mensagem de carregamento
    document.getElementById("form-message").innerText = "Enviando...";

    // Envia os dados para o EmailJS
    emailjs.sendForm("service_9ysl56x", "template_xy8bonn", this).then(
      function () {
        // Sucesso no envio
        document.getElementById("form-message").innerText =
          "Mensagem enviada com sucesso!";
      },
      function (error) {
        // Caso ocorra um erro
        console.error("Erro ao enviar:", error);
        document.getElementById("form-message").innerText =
          "Erro ao enviar. Tente novamente.";
      }
    );

    // Limpa o formulário após envio
    this.reset();
  });
