import bgImage from "../assets/img-bt.jpg";
import Maps from "/src/components/maps.jsx";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  const goToContactPage = () => {
    navigate("/contact"); // redireciona para a página de contato
  };

  return (
    <>
      {/* Hero Section */}
      <section
        id="inicio"
        className="min-h-screen flex items-center text-white bg-cover bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 100%), url(${bgImage})`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Texto principal */}
            <div className="fade-in max-w-3xl mx-auto mt-40">
              <h1
                className="text-4xl md:text-4xl font-bold mb-2 leading-tight text-center"
                style={{ textShadow: "3px 3px 4px rgba(255, 140, 90, 1)" }}
              >
                TRANSFORMANDO PROJETOS <br /> EM REALIDADE COM{" "}
                <span className="text-[var(--laranja)]">EXCELÊNCIA</span> <br /> E
                COMPROMISSO.
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-20">
                <button
                  onClick={goToContactPage}
                  className="w-full sm:w-auto bg-[var(--laranja)] hover:bg-[var(--laranja-claro)] 
               text-white px-8 py-4 rounded-lg font-semibold 
               transition-colors cursor-pointer text-center"
                >
                  Solicitar Orçamento
                </button>
              </div>
            </div>

            {/* Box lateral */}
            <div className="fade-in">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Por que nos escolher?
                </h3>
                <div className="space-y-4">
                  {[
                    "+30 anos de experiência",
                    "Equipe especializada",
                    "Materiais de primeira qualidade",
                    "Desempenho garantido em cada entrega",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-[var(--laranja)] rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-[var(--vermelho-escuro)] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="ml-5 text-4xl font-bold mb-6">Bem-vindo à Usemix</h2>
              <p className="ml-5 mb-6 text-gray-200 text-justify">
                Fundada em 13 de julho de 1993, a USEMIX Concreto e Fundações Ltda atua no fornecimento de
                concreto pré-misturado para a Construção Civil, consolidando-se como referência em qualidade e
                confiabilidade no mercado de Manaus.
              </p>
              <p className="ml-5 mb-8 text-gray-300 text-justify">
                Somos especialistas em concreto usinado, oferecendo soluções sob medida para obras de todos os
                portes. Com tecnologia avançada, frota própria e equipe técnica qualificada, garantimos
                agilidade, segurança e excelência em cada entrega. <br /> <br />
                ✓ Concreto usinado com alto desempenho <br /> <br />
                ✓ Atendimento personalizado e suporte técnico <br /> <br />
                ✓ Compromisso com prazos e qualidade certificada <br /> <br />
                Seja para construções residenciais, comerciais ou industriais, a USEMIX está pronta para ser sua
                parceira na base de grandes projetos.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "5000+", label: "Serviços Concluídos" },
                  { value: "30+", label: "Anos de Experiência" },
                  { value: "98%", label: "Clientes Satisfeitos" },
                  { value: "60", label: "Profissionais" },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-[var(--laranja)] mb-2">{item.value}</div>
                    <div className="text-sm text-gray-300">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-in">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Nossos Diferenciais</h3>
                <div className="space-y-6">
                  {[
                    { icon: "🏆", title: "Qualidade Certificada", desc: "Todos os materiais são rigorosamente selecionados e testados." },
                    { icon: "⏰", title: "Pontualidade", desc: "Cumprimos rigorosamente os prazos estabelecidos." },
                    { icon: "🛡", title: "Responsabilidade Social e Ambiental", desc: "Atendemos os requisitos legais e normativos para preservação do meio ambiente." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-[var(--laranja)] rounded-full flex items-center justify-center shrink-0 mt-1">
                        <span className="text-white text-sm">{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{item.title}</h4>
                        <p className="text-gray-300 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section (sem formulário) */}
      <section id="contato" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-[var(--verde-escuro)] mb-4">Entre em Contato</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div className="fade-in">
              <h3 className="text-2xl font-bold text-[var(--verde-escuro)] mb-6">Informações de Contato</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[var(--laranja)] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--verde-escuro)]">Endereço</h4>
                    <p className="text-gray-600">
                      Rua Pederneiras, nº 127 <br /> Rodovia Grande Circular Zumbi dos Palmares
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[var(--laranja)] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--verde-escuro)]">Telefones</h4>
                    <p className="text-gray-600">
                      (92) 98116-6152 <br /> (92) 98116-6134
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[var(--laranja)] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--verde-escuro)]">Email</h4>
                    <p className="text-gray-600">
                      laboratorio@usemix.com.br <br /> adm.usemix@usemix.com.br
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[var(--laranja)] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--verde-escuro)]">Horário de Atendimento</h4>
                    <p className="text-gray-600">
                      Segunda a Sexta: 7:00h às 16h <br /> Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-[var(--vermelho-escuro)] rounded-xl text-white">
                <h4 className="font-bold mb-3">🎯 Atendimento Especializado</h4>
                <p className="text-sm text-gray-200">
                  Nossa equipe técnica está pronta para avaliar seu projeto e oferecer as melhores soluções.
                  Agende uma visita orçamentária!
                </p>
              </div>
            </div>

            {/* Espaço para mapa ou imagem ao lado (opcional) */}
            <div className="fade-in">
              <div className="w-full h-90 rounded-xl shadow overflow-hidden">
                <Maps />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}