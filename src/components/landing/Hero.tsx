import { useNavigate } from "react-router-dom";
import heroDashboard from "../../assets/images/hero-dashboard.png";

export default function Hero() {
    const navigate = useNavigate();
  return (
    <section
      id="producto"
      className="
        min-h-[90vh]
        bg-bg-app
        flex
        flex-col lg:flex-row
        items-center
        justify-between
        gap-10 lg:gap-16
        px-8 lg:px-20
        py-12 lg:py-16
      "
    >
      {/* Texto */}
      <div className="flex-1">
        <h1 className="text-4xl lg:text-6xl font-bold text-navy leading-tight text-center lg:text-left">
          Un ecosistema 360° para el cuidado de tu mascota
        </h1>

        <p className="mt-6 text-lg lg:text-xl text-text-muted max-w-xl text-center lg:text-left">
          Gestiona la salud de tu mascota y encuentra proveedores
          confiables desde una sola plataforma.
        </p>

        <div className="mt-10 flex gap-5 justify-center lg:justify-start">
          <button
            className="
              bg-teal
              hover:bg-teal-light
              text-white
              px-8
              py-4
              rounded-xl
              transition-colors
              duration-300
              shadow-md
            "
            onClick={() => navigate("/role")}
          >
            Probar Demo
          </button>
        </div>
      </div>

      {/* Imagen */}
      <div className="flex-1">
        <img
          src={heroDashboard}
          alt="Dashboard PetCare Tech"
          className="
            w-full
            rounded-3xl
            shadow-2xl
          "
        />
      </div>
    </section>
  );
}