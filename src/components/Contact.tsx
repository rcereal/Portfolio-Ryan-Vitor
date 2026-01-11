"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    emailjs
      .sendForm(
        "service_9ysl56x",
        "template_xy8bonn",
        formRef.current,
        "3ezdfNr4mqwgjAM73"
      )
      .then(
        () => {
          setStatus("success");
          formRef.current?.reset();
          setTimeout(() => setStatus("idle"), 5000);
        },
        (error) => {
          console.error("Erro no envio:", error);
          setStatus("error");
        }
      );
  };

  return (
    <section id="contato" className="py-20 bg-[#030712] relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Vamos Conversar?
            </span>
          </h2>
          <p className="text-gray-400">
            Tem uma ideia ou uma vaga? Mande uma mensagem e entrarei em contato.
          </p>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10"
        >
          <input type="hidden" name="title" value="Portfólio 2.0" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-300"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name" // O EmailJS busca pelo 'name'
                required
                className="w-full px-4 py-3 bg-[#030712] border border-white/10 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition text-white"
                placeholder="Seu nome"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-300"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-[#030712] border border-white/10 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition text-white"
                placeholder="seu@email.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-gray-300"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-3 bg-[#030712] border border-white/10 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition text-white resize-none"
              placeholder="Como posso te ajudar?"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "sending" || status === "success"}
            className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
              status === "success"
                ? "bg-green-600 text-white cursor-default"
                : "bg-indigo-600 hover:bg-indigo-700 text-white"
            }`}
          >
            {status === "idle" && (
              <>
                Enviar Mensagem <Send size={18} />
              </>
            )}
            {status === "sending" && (
              <>
                <Loader2 size={18} className="animate-spin" /> Enviando...
              </>
            )}
            {status === "success" && (
              <>
                <CheckCircle size={18} /> Mensagem Enviada!
              </>
            )}
            {status === "error" && (
              <>
                <AlertCircle size={18} /> Erro ao enviar. Tente novamente.
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
