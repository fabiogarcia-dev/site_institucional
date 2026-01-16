import photo01 from "../assets/img-pgempr1.jpg";
import photo02 from "../assets/img-pgempr2.jpg";

/** Página sobre empresa */
export function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Título principal */}
      <div className="text-center mb-12 mt-15">
        <h1 className="text-4xl font-bold text-[var(--vermelho-escuro)] leading-snug">
          USEMIX - CONCRETO USINADO COM QUALIDADE,<br />
          SEGURANÇA E PONTUALIDADE
        </h1>
      </div>

      {/* Quem somos */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="bg-[var(--vermelho-escuro)] text-white p-8 rounded-lg shadow-lg md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-4">Quem somos?</h2>
          <p className="leading-relaxed text-justify text-2xl">
            Nossa história começa em 13 de Julho de 1993. A USEMIX Concreto e
            Fundações Ltda foi fundada para atuar no fornecimento de concreto
            pré-misturado para a Construção Civil, consolidando-se como
            referência em qualidade e confiabilidade no mercado de Manaus.

          </p>
        </div>
        <img
          className="md:w-1/2 rounded-lg shadow-lg"
          src={photo01}
          alt="img_page_01"
        />
      </div>

      {/* Subtítulo */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[var(--vermelho-escuro)]">
          CONCRETO É DECISÃO SÉRIA!
        </h2>
      </div>

      {/* Segunda seção */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <img
          className="md:w-1/2 rounded-lg shadow-lg"
          src={photo02}
          alt="img-page-02"
        />
        <div className="md:w-1/2">
          <p className="leading-relaxed text-justify text-2xl">
            Escolher a USEMIX é garantir resistência, precisão e entrega sem
            atrasos. Produzimos concreto usinado com controle rigoroso de
            qualidade, resistência específica (FCK) para cada tipo de obra e
            frota própria para garantir pontualidade em todas as entregas.
            Somos uma empresa comprometida em oferecer serviços com excelência
            e responsabilidade, pautados pelo respeito ao meio ambiente e pela
            conformidade com requisitos legais e normativos.
          </p>
        </div>
      </div>

      {/* Lista de valores */}
      <div className="bg-gray-100 p-8 rounded-lg shadow mb-16">
        <h3 className="text-xl font-semibold mb-4 text-[var(--vermelho-escuro)]">
          Nossos compromissos:
        </h3>
        <ul className="list-none list-inside space-y-2 text-xl">
          <li><span className="text-orange-500">✔</span> Asseguramos qualidade e responsabilidade em cada serviço prestado</li>
          <li><span className="text-orange-500">✔</span> Preservamos o meio ambiente, adotando práticas sustentáveis</li>
          <li><span className="text-orange-500">✔</span> Cumprimos rigorosamente todas as exigências legais e normativas</li>
          <li><span className="text-orange-500">✔</span> Promovemos a melhoria contínua dos processos e da gestão</li>
          <li><span className="text-orange-500">✔</span> Garantimos a satisfação dos clientes com metas claras e eficazes</li>
        </ul>
      </div>

      {/* Por que escolher */}
      <div className="text-center mb-12">
        <p className="text-2xl font-bold text-[var(--vermelho-escuro)]">
          POR QUE ESCOLHER O CONCRETO USINADO DA USEMIX?
        </p>
      </div>

      {/* Três colunas */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="font-semibold mb-4">Normas técnicas</h4>
          <ul className="list-none list-inside space-y-2">
            <li><span className="text-orange-500">✔</span> Concreto produzido em usina moderna</li>
            <li><span className="text-orange-500">✔</span> Controle técnico de dosagem e resistência</li>
            <li><span className="text-orange-500">✔</span> Padronização do início ao fim</li>
            <li><span className="text-orange-500">✔</span> Redução de desperdícios</li>
            <li><span className="text-orange-500">✔</span> Mais produtividade na obra</li>
            <li><span className="text-orange-500">✔</span> Segurança estrutural garantida</li>
            <li><span className="text-orange-500">✔</span> Entrega no prazo combinado</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="font-semibold mb-4">Aplicações</h4>
          <ul className="list-none list-inside space-y-2">
            <li><span className="text-orange-500">✔</span> Lajes</li>
            <li><span className="text-orange-500">✔</span> Fundações</li>
            <li><span className="text-orange-500">✔</span> Prédios</li>
            <li><span className="text-orange-500">✔</span> Obras comerciais</li>
            <li><span className="text-orange-500">✔</span> Obras industriais</li>
            <li><span className="text-orange-500">✔</span> Grandes estruturas</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="font-semibold mb-4">Logística</h4>
          <ul className="list-none list-inside space-y-2">
            <li><span className="text-orange-500">✔</span> Pontualidade</li>
            <li><span className="text-orange-500">✔</span> Agilidade</li>
            <li><span className="text-orange-500">✔</span> Volume exato contratado</li>
            <li><span className="text-orange-500">✔</span> Menor risco de atrasos</li>
          </ul>
        </div>
      </div>

      {/* Orçamento */}
      <div className="text-center">
        <p className="text-2xl font-bold text-[var(--vermelho-escuro)] mb-4">
          SOLICITE SEU ORÇAMENTO AGORA
        </p>

        <ul className="list-none space-y-2 text-center leading-relaxed">
          <li><span className="text-orange-500">✔</span> Concreto confiável</li>
          <li><span className="text-orange-500">✔</span> Entrega rápida</li>
          <li><span className="text-orange-500">✔</span> Volume garantido</li>
          <li><span className="text-orange-500">✔</span> Suporte técnico</li>
          <li><span className="text-orange-500">✔</span> Qualidade certificada</li>
        </ul>

        <p className="mt-4 font-semibold">
          Fale agora com a USEMIX e garanta a base certa para sua obra.
        </p>
      </div>
    </div>
  );
}