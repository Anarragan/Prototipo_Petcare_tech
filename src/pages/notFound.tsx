import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <main className="min-h-screen bg-bg-app flex items-center justify-center px-6">
            <div className="w-full max-w-xl rounded-3xl bg-white p-10 text-center shadow-lg border border-gray-200">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                    404
                </p>

                <h1 className="mt-4 text-4xl font-bold text-navy">
                    Esta página no existe
                </h1>

                <p className="mt-4 text-text-muted leading-7">
                    Verifica la dirección o vuelve a una sección válida del prototipo.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <button
                        onClick={() => navigate("/")}
                        className="rounded-xl bg-teal px-5 py-3 font-semibold text-white transition hover:bg-teal-light"
                    >
                        Ir al inicio
                    </button>

                    <button
                        onClick={() => navigate("/role")}
                        className="rounded-xl border border-gray-200 px-5 py-3 font-semibold text-navy transition hover:bg-bg-app"
                    >
                        Elegir perfil
                    </button>
                </div>
            </div>
        </main>
    );
}