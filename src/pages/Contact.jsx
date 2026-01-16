// src/pages/Contact.jsx
import { useState } from "react";
import emailjs from "emailjs-com";

export function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // ativa o carregamento

    emailjs
      .sendForm(
        "service_t2kx9zw",       // substitua pelo seu Service ID
        "template_961rtud",      // substitua pelo seu Template ID
        e.target,                // o próprio formulário
        "z-8lKu_MuKeMvenFR"      // substitua pela sua Public Key
      )
      .then(
        () => {
          alert("Solicitação enviada com sucesso!");
          e.target.reset(); // limpa o formulário
          setLoading(false); // desativa o carregamento
        },
        (error) => {
          console.error("Erro ao enviar:", error);
          alert("Erro ao enviar. Tente novamente.");
          setLoading(false); // desativa o carregamento
        }
      );
  };

  return (
    <section id="contato" className="py-20 bg-gray-50 mt-6">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 fade-in">
          <h2 className="text-3xl font-bold text-[var(--verde-escuro)] mb-2">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600">
            Solicite seu orçamento preenchendo o formulário abaixo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Formulário */}
          <div>
            <h3 className="text-xl font-bold text-[var(--verde-escuro)] mb-4">
              Solicite seu Orçamento
            </h3>
            <form
              id="contact-form"
              className="space-y-4"
              onSubmit={handleSubmit}
            >
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="nome"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--laranja)] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--laranja)] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--laranja)] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de Projeto
                </label>
                <select
                  name="projeto"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--laranja)] focus:border-transparent"
                >
                  <option>Construção Residencial</option>
                  <option>Construção Comercial</option>
                  <option>Construção Industrial</option>
                  <option>Outros</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  name="mensagem"
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--laranja)] focus:border-transparent"
                  placeholder="Descreva seu projeto..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  loading
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-[var(--laranja)] hover:bg-[var(--laranja-claro)] text-white"
                }`}
              >
                {loading ? "Enviando..." : "Enviar Solicitação"}
              </button>
            </form>
          </div>

          {/* Informações de contato */}
          <div className="fade-in">
            <h3 className="text-xl font-bold text-[var(--verde-escuro)] mb-4">
              Informações de Contato
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                📍 Rua Pederneiras, nº 127 - Rodovia Grande Circular Zumbi dos
                Palmares
              </p>
              <p>📞 (92) 3199-3444 | (92) 98116-6134</p>
              <p>
                ✉ laboratorio@usemix.com.br <br /> adm.usemix@usemix.com.br
              </p>
              <p>
                🕒 Segunda a Sexta: 7h às 16h <br /> Sábado: 8h às 12h
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}