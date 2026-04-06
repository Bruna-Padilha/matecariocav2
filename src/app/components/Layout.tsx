import { Outlet, Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

// CORREÇÃO: Saindo de app/components para buscar em src/assets
import logoImage from "../../assets/44f1dcd3ed1fc0ff941404d1e28985ad27c0fff0.png";

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Início" },
    { path: "/cardapio", label: "Cardápio" },
    { path: "/galeria", label: "Galeria" },
  ];

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between max-w-6xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logoImage} alt="Mate Carioca" className="h-20 md:h-24 object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "text-[#0c6938] font-semibold border-b-2 border-[#fdc101]"
                    : "text-[#004042] hover:text-[#0c6938]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#004042] p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-xl">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg py-2 transition-colors ${
                    location.pathname === item.path
                      ? "text-[#0c6938] font-bold"
                      : "text-[#004042]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-24 md:pt-32">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#004042] text-white py-12 mt-auto">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <h3 className="text-[#fdc101] text-2xl mb-4 font-bold" style={{ fontFamily: 'Righteous, sans-serif' }}>
                Mate Carioca
              </h3>
              <p className="text-sm opacity-90 leading-relaxed">
                O verdadeiro sabor carioca em cada gole. 
                Refrescância e tradição direto para você.
              </p>
            </div>
            <div>
              <h4 className="text-[#fdc101] font-bold mb-4 uppercase tracking-wider text-sm">Contato</h4>
              <p className="text-sm opacity-90">Foz do Iguaçu - PR</p>
              <p className="text-sm opacity-90 mt-1">Instagram: @matecariocafoz</p>
            </div>
            <div>
              <h4 className="text-[#fdc101] font-bold mb-4 uppercase tracking-wider text-sm">Horários</h4>
              <p className="text-sm opacity-90">Atendimento sob demanda</p>
              <p className="text-sm opacity-90 mt-1">Consulte disponibilidade no WhatsApp</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs opacity-60">
            <p>&copy; 2026 Mate Carioca. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}