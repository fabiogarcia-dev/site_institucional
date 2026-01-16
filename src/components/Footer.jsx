import { NavLink } from "react-router-dom";
import face from "../assets/facebook.png";
import insta from "../assets/instagram.png";

export default function Footer() {
  return (
    <footer className="bg-[var(--vermelho-escuro)] text-white py-6">
      <div className="container mx-auto px-4 pl-15">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">USEMIX</span>
            </div>
            <p className="text-gray-300 mb-4">
              Construindo sonhos com qualidade e confiança há mais de 30 anos.
            </p>
            <a
              href="https://www.facebook.com/usemix.concretoefundacoesltda#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={face}
                alt="Facebook"
                className="h-6 w-6 inline-block mr-4 hover:opacity-75 transition-opacity"
              />
            </a>
            <a
              href="https://www.instagram.com/usemixconcretoltda/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={insta}
                alt="Instagram"
                className="h-6 w-6 inline-block hover:opacity-75 transition-opacity"
              />
            </a>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Construção Residencial</li>
              <li>Construção Comercial</li>
              <li>Reformas</li>
              <li>Projetos Arquitetônicos</li>
            </ul>
          </div>

          {/* Links úteis */}
          <div>
            <h4 className="font-bold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <NavLink to="/about" className="hover:text-[var(--laranja)] transition-colors">
                  Sobre Nós
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" className="hover:text-[var(--laranja)] transition-colors">
                  Portfólio
                </NavLink>
              </li>
              <li>
                <NavLink to="/Contact" className="hover:text-[var(--laranja)] transition-colors">
                  Orçamento
                </NavLink>
              </li>
            </ul>
          </div>

          
        </div>

        {/* Rodapé */}
        <div className="border-t border-gray-600 mt-4 pt-1 text-center text-gray-400">
          <p>
            &copy; 2025 FGTech Soluções em Informática. Todos os direitos reservados. | CNPJ: 26.781.040/0001-01
          </p>
        </div>
      </div>
    </footer>
  );
}