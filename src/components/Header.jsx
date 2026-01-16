import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo_editada.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      id="header"
      className="text-white fixed w-full top-0 transition-colors duration-300 z-50 bg-[var(--vermelho-escuro)] shadow-lg"
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="logo_Header" className="h-16 w-auto" />
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg transition-colors ${
                  isActive
                    ? "text-[var(--laranja)] font-bold"
                    : "hover:text-[var(--laranja)]"
                }`
              }
            >
              Início
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-lg transition-colors ${
                  isActive
                    ? "text-[var(--laranja)] font-bold"
                    : "hover:text-[var(--laranja)]"
                }`
              }
            >
              Empresa
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-lg transition-colors ${
                  isActive
                    ? "text-[var(--laranja)] font-bold"
                    : "hover:text-[var(--laranja)]"
                }`
              }
            >
              Produtos/Serviços
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-lg transition-colors ${
                  isActive
                    ? "text-[var(--laranja)] font-bold"
                    : "hover:text-[var(--laranja)]"
                }`
              }
            >
              Contato
            </NavLink>
          </div>

          {/* Botão Mobile */}
          <button
            id="menu-toggle"
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              // Ícone de X
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Ícone de menu (hambúrguer)
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden bg-[var(--vermelho-escuro)] shadow-md rounded-lg mt-2 px-6 pb-4 font-roboto transition-all duration-300"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 transition-colors ${
                  isActive
                    ? "text-[var(--laranja)] font-bold"
                    : "hover:text-[var(--laranja)]"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              Início
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block py-2 transition-colors ${
                  isActive
                    ? "text-[var(--laranja)] font-bold"
                    : "hover:text-[var(--laranja)]"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              Empresa
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `block py-2 transition-colors ${
                  isActive
                    ? "text-[var(--laranja)] font-bold"
                    : "hover:text-[var(--laranja)]"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              Produtos
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block py-2 transition-colors ${
                  isActive
                    ? "text-[var(--laranja)] font-bold"
                    : "hover:text-[var(--laranja)]"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              Contato
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}