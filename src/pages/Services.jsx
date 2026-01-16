import photo03 from "../assets/imag-pgserv1.jpg";

/** Página Serviços */
export function Services() {
    return (
        <div className="px-6 md:px-16 py-12 bg-gray-50 text-gray-800 mt-20">
            {/* Cabeçalho */}
            <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
                <div className="flex-1">
                    <h1 className="text-4xl font-bold text-[var(--vermelho-escuro)] mb-4">
                        Nossos serviços
                    </h1>
                    <h2 className="text-2xl text-[var(--vermelho-escuro)] font-semibold mb-2 underline">
                        Controle de Qualidade e Garantia do FCK
                    </h2>
                    <p className="leading-relaxed text-justify text-2xl">
                        Na USEMIX, a qualidade do concreto é prioridade. A resistência do
                        concreto (FCK) é verificada por meio de ensaios de compressão,
                        realizados em laboratório, conforme as normas da ABNT. Esses ensaios
                        confirmam se o concreto atingiu a resistência solicitada em projeto,
                        garantindo segurança estrutural, desempenho e durabilidade.
                    </p>
                </div>
                <div className="flex-1">
                    <img
                        src={photo03}
                        alt="img-page-servicos"
                        className="rounded-lg shadow-lg w-full h-100 object-cover"
                    />
                </div>
            </div>

            {/* Seções */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-[var(--vermelho-escuro)] underline mb-4">O que é o FCK?</h2>
                <p className="leading-relaxed text-justify">
                    FCK significa Resistência Característica do Concreto à Compressão.
                    Esse valor indica a capacidade do concreto de suportar cargas e esforços
                    estruturais. A unidade de medida utilizada é o MPa (Mega Pascal),
                    obtida por meio de ensaios laboratoriais realizados em corpos de prova.
                    Além do FCK, é essencial informar também:
                </p>
                <ul className="list-disc list-inside mt-4 text-gray-700">
                    <li>A consistência do concreto</li>
                    <li>O abatimento (slump)</li>
                </ul>

                <p className="leading-relaxed text-justify pt-4">
                    Esses dados são fundamentais para a elaboração correta do traço e do
                    orçamento.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-[var(--vermelho-escuro)] underline mb-4">
                    Classificação dos Concretos
                </h2>
                <p className="leading-relaxed text-justify">
                    Os concretos para fins estruturais são classificados nos
                    Grupos I e II, conforme a resistência característica à compressão
                    (FCK), determinada por ensaios conforme a ABNT NBR 5739.
                    Concretos com resistência inferior a C20 são considerados não
                    estruturais, sendo utilizados como:
                </p>
                <ul className="list-disc list-inside mt-4 text-gray-700">
                    <li>Concreto magro</li>
                    <li>Lastro para piso</li>
                    <li>Regularização de base</li>
                </ul>
            </section>

            {/* Tipos de Concreto */}
            <section className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-[var(--verde-escuro)] mb-2">
                        🔹 Concreto FCK 20 MPa
                    </h3>
                    <p className="mb-2">Indicado para ambientes de agressividade fraca, comum em áreas rurais.
                        Muito utilizado em:</p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Fundação hélice contínua</li>
                        <li>Concretagens simples</li>
                        <li>Serviços sem fins estruturais</li>
                    </ul>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-[var(--verde-escuro)] mb-2">
                        🔹 Concreto FCK 25 MPa
                    </h3>
                    <p className="mb-2">Resiste à agressividade moderada.
                        Recomendado para:</p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Edificações de pequeno porte</li>
                        <li>Construções residenciais</li>
                        <li>Obras comerciais</li>
                    </ul>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-[var(--verde-escuro)] mb-2">
                        🔹  Concreto FCK 30 MPa
                    </h3>
                    <p className="mb-2">Indicado para:</p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Edifícios</li>
                        <li>Construções industriais</li>
                        <li>Ambientes com agressividade forte</li>
                    </ul>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-[var(--verde-escuro)] mb-2">
                        🔹 Concreto FCK 35 MPa
                    </h3>
                    <p className="mb-2">Amplamente utilizado em:</p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Edifícios</li>
                        <li>Obras industriais</li>
                        <li>Estruturas de alto desempenho</li>
                    </ul>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-[var(--verde-escuro)] mb-2">
                        🔹 Concreto de Alta Resistência
                    </h3>
                    <p className="mb-2">De acordo com a ABNT NBR 12655,
                        o concreto de alta resistência
                        pertence ao Grupo II.
                        Esse tipo de concreto é indicado
                        para:</p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Grandes obras</li>
                        <li>Edifícios altos</li>
                        <li>Estruturas especiais</li>
                    </ul>
                </div>


            </section>

            {/* Controle de Qualidade */}
            <section className="mb-12">
                <h3 className="text-2xl font-bold text-[var(--vermelho-escuro)] underline mb-4">
                    Controle de Qualidade USEMIX
                </h3>
                <p className="leading-relaxed text-justify">
                    A USEMIX possui rigorosos protocolos de controle, que incluem:
                </p>
                <ul className="list-disc list-inside mt-4 text-gray-700">
                    <li> Seleção criteriosa de materiais</li>
                    <li> Equipamentos aferidos regularmente</li>
                    <li> Ensaios laboratoriais contínuos</li>
                    <li> Treinamento de equipes</li>
                    <li> Reciclagem técnica de profissionais</li>
                    <li> Atendimento às normas técnicas</li>
                </ul>

                <p className="leading-relaxed text-justify">Todos os processos são realizados antes, durante e após a entrega do
                    concreto.</p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-[var(--vermelho-escuro)] underline mb-4">
                    Estrutura Laboratorial
                </h2>
                <p className="leading-relaxed text-justify">
                    Nosso laboratório é composto por:
                </p>
                <ul className="list-disc list-inside mt-4 text-gray-700">

                    <li>Engenheiros Civis</li>
                    <li>Técnicos em Edificação</li>
                    <li>Laboratoristas especializados</li>

                </ul>

                <p className="leading-relaxed text-justify">
                    Realizamos:
                </p>
                <ul className="list-disc list-inside mt-4 text-gray-700">
                    <li>Ensaios de resistência</li>
                    <li>Análises de qualidade</li>
                    <li>Controle de consistência</li>
                    <li>Certificação do FCK</li>
                    <li>Aperfeiçoamento contínuo do concreto</li>
                </ul>
            </section>

            {/* Normas Técnicas */}
            <section className="mb-12">
                <h3 className="text-2xl font-bold text-[var(--vermelho-escuro)] underline mb-4">
                    Normas Técnicas Seguidas
                </h3>
                <ul className="list-disc list-inside text-gray-700">
                    <li>NBR 12655 – Preparo, controle, recebimento e aceitação</li>
                    <li>NBR 7212 – Execução de concreto dosado em central</li>
                    <li>NBR 5738 – Moldagem e cura de corpos de prova</li>
                    <li>NBR NM 67 – Abatimento do tronco de cone</li>
                    <li>NBR 5739 – Ensaio de compressão</li>
                    <li>NBR 12142 – Resistência à tração na flexão</li>
                    <li>NBR 6118 – Projeto de estruturas de concreto</li>
                    <li>NBR 7211 – Agregados para concreto</li>
                    <li>NBR 7680 – Extração e ensaio de testemunhos</li>
                    <li>NBR 8953 – Classificação dos concretos</li>
                </ul>
            </section>

            {/* Compromisso */}
            <section>
                <h3 className="text-2xl font-bold text-[var(--vermelho-escuro)] underline mb-4">
                    Compromisso com o Cliente
                </h3>
                <p className="leading-relaxed text-justify">
                    A USEMIX tem duas grandes prioridades:
                </p>
                <ul className="list-disc list-inside mt-4 text-gray-700">
                    <li>Controle rigoroso de qualidade</li>
                    <li>Satisfação total dos clientes</li>
                </ul>
                <p className="mt-4 leading-relaxed text-justify">
                    Nosso compromisso é entregar concreto seguro, resistente e dentro das
                    especificações técnicas exigidas para cada projeto.
                </p>
            </section>
        </div>
    );
}