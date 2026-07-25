export default function Services() {
  const services = [
    "Veterinarios",
    "Paseadores",
    "Peluquerías",
    "Emergencias",
    "Seguros",
  ];

  return (
    <section id="servicios" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-8 lg:px-20">
        <h2 className="mb-10 lg:mb-14 text-center text-3xl lg:text-4xl font-bold text-navy">
          Servicios Integrados
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 xl:grid-cols-5">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-3xl bg-bg-card p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal" />

              <h3 className="mb-3 text-xl font-semibold text-navy">
                {service}
              </h3>

              <p className="text-sm leading-6 text-text-muted">
                Disponibles en todo momento.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}