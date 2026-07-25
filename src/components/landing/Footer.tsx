export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-8 py-12 md:py-16 md:grid-cols-4 lg:px-20 text-center md:text-left">
        <div>
          <h2 className="mb-3 text-2xl font-bold">PetCare Tech</h2>

          <p className="text-sm text-gray-300">
            Un ecosistema 360° para el cuidado de tu mascota.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Producto</h3>

          <ul className="space-y-2 text-sm text-gray-300">
            <li>Dashboard</li>
            <li>Marketplace</li>
            <li>Agenda</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Servicios</h3>

          <ul className="space-y-2 text-sm text-gray-300">
            <li>Veterinarios</li>
            <li>Paseadores</li>
            <li>Peluquerías</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Contacto</h3>

          <ul className="space-y-2 text-sm text-gray-300">
            <li>petcaretech@email.com</li>
            <li>+57 300 000 0000</li>
            <li>Medellín, Colombia</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © 2026 PetCare Tech. Todos los derechos reservados.
      </div>
    </footer>
  );
}