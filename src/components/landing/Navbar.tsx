import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-navy text-white relative z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-20">
        <a href="#producto" className="flex items-center gap-3 z-50">
          <h2 className="text-xl md:text-2xl font-bold">PetCare Tech</h2>
        </a>

        <div className="hidden gap-8 text-sm font-medium md:flex">
          <a href="#producto" className="transition hover:text-teal-light">
            Producto
          </a>

          <a href="#servicios" className="transition hover:text-teal-light">
            Servicios
          </a>

          <a href="#nosotros" className="transition hover:text-teal-light">
            Nosotros
          </a>
        </div>

        <button 
            className="md:hidden z-50 text-white"
            onClick={() => setIsOpen(!isOpen)}
        >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-navy border-t border-white/10 p-6 flex flex-col gap-6 shadow-xl md:hidden">
            <a href="#producto" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-teal-light">Producto</a>
            <a href="#servicios" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-teal-light">Servicios</a>
            <a href="#nosotros" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-teal-light">Nosotros</a>
        </div>
      )}
    </nav>
  );
}