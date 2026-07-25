import { useNavigate } from "react-router-dom";

export default function SelectRole() {

    const navigate = useNavigate();

    return (

        <main className="min-h-screen bg-bg-app flex items-center justify-center p-6">

            <div className="w-full max-w-5xl">

                <h1 className="text-3xl md:text-5xl font-bold text-center text-navy">
                    ¿Cómo deseas explorar PetCare Tech?
                </h1>

                <p className="mt-4 text-center text-text-muted">
                    Selecciona un perfil para visualizar la demostración.
                </p>

                <div className="mt-14 grid md:grid-cols-2 gap-8">

                    <button
                        onClick={() => navigate("/owner")}
                        className="rounded-3xl bg-white p-10 shadow-lg hover:scale-105 transition"
                    >

                        <h2 className="mt-5 text-2xl font-bold text-navy">
                            Soy Propietario
                        </h2>

                        <p className="mt-3 text-text-muted">
                            Gestiona mascotas, citas y servicios.
                        </p>

                    </button>

                    <button
                        onClick={() => navigate("/provider")}
                        className="rounded-3xl bg-white p-10 shadow-lg hover:scale-105 transition"
                    >

                        <h2 className="mt-5 text-2xl font-bold text-navy">
                            Soy Proveedor
                        </h2>

                        <p className="mt-3 text-text-muted">
                            Administra clientes y agenda.
                        </p>

                    </button>

                </div>

            </div>

        </main>

    );

}