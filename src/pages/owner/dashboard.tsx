import { useState } from "react";
import {
    Ambulance,
    Footprints,
    Scissors,
    ShieldCheck,
    ShoppingBag,
    Stethoscope,
} from "lucide-react";
import DashboardActionButton from "../../components/dashboard/DashboardActionButton";
import DashboardKeyValueRow from "../../components/dashboard/DashboardKeyValueRow";
import DashboardSectionCard from "../../components/dashboard/DashboardSectionCard";
import DashboardShell from "../../components/dashboard/DashboardShell";
import Modal from "../../components/ui/modal";

const petHighlights = [
    {
        title: "Próxima vacuna",
        detail: "Rabia · 18 Ago",
    },
    {
        title: "Última consulta",
        detail: "Hace 2 semanas",
    },
];

const serviceOptions = [
    {
        label: "Veterinarios",
        icon: Stethoscope,
    },
    {
        label: "Paseadores",
        icon: Footprints,
    },
    {
        label: "Peluquerías",
        icon: Scissors,
    },
    {
        label: "Tienda",
        icon: ShoppingBag,
    },
    {
        label: "Emergencias",
        icon: Ambulance,
    },
    {
        label: "Seguros",
        icon: ShieldCheck,
    },
];

const integratedServices = [
    {
        name: "Clínica Animal Medellín",
        description: "Consulta general · 1.2 km",
        badge: "Disponible",
        badgeClassName: "bg-green-100 text-green-700",
    },
    {
        name: "Happy Pets Spa",
        description: "Peluquería · 900 m",
        badge: "Promoción",
        badgeClassName: "bg-blue-100 text-blue-700",
    },
    {
        name: "Paseadores Medellín",
        description: "Paseo · 500 m",
        badge: "Recomendado",
        badgeClassName: "bg-yellow-100 text-yellow-700",
    },
];

export default function Dashboard() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <DashboardShell>
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
                <DashboardSectionCard
                    title="Perfil de la mascota"
                    className="xl:col-span-3 min-h-[420px]"
                >
                    <div className="flex h-full flex-col">
                        <div className="mt-6 flex flex-col items-center text-center">
                            <img
                                src="/ron.png"
                                alt="Ron"
                                className="h-28 w-28 rounded-full border-4 border-teal object-cover"
                            />

                            <h3 className="mt-4 text-xl font-bold text-navy">
                                Ron
                            </h3>

                            <p className="text-sm text-text-muted">
                                Golden Retriever · 4 años
                            </p>
                        </div>

                        <div className="mt-8 space-y-5">
                            <div>
                                <DashboardKeyValueRow
                                    label="Estado general"
                                    value="92%"
                                    valueClassName="font-semibold text-teal"
                                />

                                <div className="mt-2 h-2 rounded-full bg-gray-200 overflow-hidden">
                                    <div className="h-full w-[92%] rounded-full bg-teal" />
                                </div>
                            </div>

                            {petHighlights.map((item) => (
                                <div key={item.title} className="rounded-xl bg-bg-app p-3">
                                    <p className="text-sm font-medium text-navy">
                                        {item.title}
                                    </p>

                                    <p className="text-xs text-text-muted">
                                        {item.detail}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </DashboardSectionCard>

                <DashboardSectionCard
                    title="Ubicación en tiempo real"
                    className="xl:col-span-6 min-h-[420px]"
                >
                    <div className="flex h-full flex-col">
                        <div className="flex-1 min-h-0 overflow-hidden rounded-2xl">
                            <img
                                src="/mapa_owner.png"
                                alt="Mapa"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">
                            <div className="rounded-xl bg-bg-app p-3 text-center">
                                <p className="text-xs text-text-muted">
                                    Ubicación
                                </p>
                                <p className="font-semibold text-navy">
                                    Medellín
                                </p>
                            </div>

                            <div className="rounded-xl bg-bg-app p-3 text-center">
                                <p className="text-xs text-text-muted">Pulso</p>
                                <p className="font-semibold text-navy">78 lpm</p>
                            </div>

                            <div className="rounded-xl bg-bg-app p-3 text-center">
                                <p className="text-xs text-text-muted">
                                    Temperatura
                                </p>
                                <p className="font-semibold text-navy">
                                    38.2 °C
                                </p>
                            </div>

                            <div className="rounded-xl bg-bg-app p-3 text-center">
                                <p className="text-xs text-text-muted">Estado</p>
                                <p className="font-semibold text-green-600">
                                    Normal
                                </p>
                            </div>
                        </div>
                    </div>
                </DashboardSectionCard>

                <DashboardSectionCard
                    title="Servicios"
                    className="xl:col-span-3 min-h-[420px]"
                >
                    <div className="space-y-4">
                        {serviceOptions.map((service) => (
                            <DashboardActionButton
                                key={service.label}
                                icon={service.icon}
                                onClick={() => setOpenModal(true)}
                            >
                                {service.label}
                            </DashboardActionButton>
                        ))}
                    </div>
                </DashboardSectionCard>

                <DashboardSectionCard
                    title="Servicios Integrados"
                    action={
                        <button className="text-sm text-teal hover:underline">
                            Ver todos
                        </button>
                    }
                    className="xl:col-span-9 min-h-[260px]"
                >
                    <div className="grid gap-5 md:grid-cols-3">
                        {integratedServices.map((service) => (
                            <div key={service.name} className="rounded-xl bg-bg-app p-5">
                                <h3 className="font-semibold text-navy">
                                    {service.name}
                                </h3>

                                <p className="mt-2 text-sm text-text-muted">
                                    {service.description}
                                </p>

                                <span
                                    className={`mt-4 inline-block rounded-full px-3 py-1 text-xs ${service.badgeClassName}`}
                                >
                                    {service.badge}
                                </span>
                            </div>
                        ))}
                    </div>
                </DashboardSectionCard>

                <DashboardSectionCard
                    title="Asistente IA"
                    className="xl:col-span-3 min-h-[260px]"
                >
                    <div className="flex h-full flex-col">
                        <div className="rounded-xl bg-bg-app p-4">
                            <p className="text-sm text-text-muted">
                                Recomendación
                            </p>

                            <p className="mt-3 text-sm leading-6">
                                Dobby tiene programada una vacuna en los próximos días.
                                Se recomienda agendar una cita con un veterinario cercano.
                            </p>
                        </div>

                        <button
                            className="mt-5 w-full rounded-xl bg-teal py-3 text-white transition hover:bg-teal-light"
                            onClick={() => setOpenModal(true)}
                        >
                            Hablar con IA
                        </button>
                    </div>
                </DashboardSectionCard>
            </div>

            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                title="Funcionalidad demostrativa"
                description="Esta sección hace parte del prototipo de PetCare Tech. En la versión final permitirá acceder a la funcionalidad completa."
            />
        </DashboardShell>
    );
}