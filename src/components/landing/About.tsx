import heroDashboard from "../../assets/images/hero-dashboard.png";

export default function About() {
  return (
    <section id="nosotros" className="bg-bg-app py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:gap-16 px-8 lg:px-20 lg:grid-cols-2">
        {/* Texto */}

        <div>
          <h2 className="mb-4 lg:mb-6 text-3xl lg:text-4xl font-bold text-navy text-center lg:text-left">
            Nuestra misión
          </h2>

          <p className="mb-8 lg:mb-10 text-base lg:text-lg leading-7 lg:leading-8 text-text-muted text-center lg:text-left">
            PetCare Tech busca centralizar el cuidado de las mascotas,
            conectando propietarios y proveedores mediante una plataforma
            inteligente que facilite la gestión de servicios, el seguimiento de
            la salud y la comunicación en un solo lugar.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 shadow">
              <h3 className="font-semibold text-navy">IA</h3>
              <p className="text-sm text-text-muted">
                Recomendaciones inteligentes.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow">
              <h3 className="font-semibold text-navy">24/7</h3>
              <p className="text-sm text-text-muted">
                Atencion personalizada.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow">
              <h3 className="font-semibold text-navy">Seguridad</h3>
              <p className="text-sm text-text-muted">
                Proveedores verificados.
              </p>
            </div>
          </div>
        </div>

        {/* Imagen */}

        <div>
          <img
            src={heroDashboard}
            alt="Dashboard PetCare Tech"
            className="w-full rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}