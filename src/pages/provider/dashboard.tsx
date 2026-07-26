import {
    CalendarDays,
    CircleCheck,
    Clock3,
    ClipboardList,
    DollarSign,
    Star,
    Users,
} from "lucide-react";
import { useState } from "react";
import DashboardKeyValueRow from "../../components/dashboard/DashboardKeyValueRow";
import DashboardSectionCard from "../../components/dashboard/DashboardSectionCard";
import DashboardShell from "../../components/dashboard/DashboardShell";
import Modal from "../../components/ui/modal";
import logo from "../../assets/images/logo.png";

const agendaItems = [
    ["09:00", "Consulta General", "Dobby"],
    ["10:30", "Vacunación", "Max"],
    ["12:00", "Control", "Luna"],
    ["15:30", "Peluquería", "Rocky"],
];

const requestItems = [
    "Nueva Consulta",
    "Vacunación",
    "Peluquería",
    "Emergencia",
    "Paseador",
];

const statsItems = [
    {
        icon: ClipboardList,
        label: "Servicios",
        value: "12",
    },
    {
        icon: Users,
        label: "Clientes",
        value: "86",
    },
    {
        icon: Star,
        label: "Rating",
        value: "4.9",
    },
    {
        icon: DollarSign,
        label: "Hoy",
        value: "$850.000",
    },
];

export default function Dashboard() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <DashboardShell>
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
                <DashboardSectionCard
                    title="Perfil del proveedor"
                    className="xl:col-span-3 min-h-[420px]"
                >
                    <div className="flex h-full flex-col">
                        <div className="flex flex-col items-center text-center">
                            <img
                                src={logo}
                                alt="Patitas en casa"
                                className="h-28 w-28 rounded-full border-4 border-teal object-cover"
                            />

                            <h3 className="mt-4 text-xl font-bold text-navy">
                                Patitas en casa
                            </h3>

                            <p className="text-sm text-text-muted">
                                Clínica Veterinaria
                            </p>
                        </div>

                        <div className="mt-8 space-y-4">
                            <DashboardKeyValueRow
                                label="Estado"
                                value="Disponible"
                                valueClassName="font-semibold text-green-600"
                            />

                            <DashboardKeyValueRow
                                label="Calificación"
                                value={
                                    <span className="flex items-center gap-1">
                                        <Star size={16} fill="gold" />
                                        4.9
                                    </span>
                                }
                            />

                            <DashboardKeyValueRow label="Ciudad" value="Medellín" />
                        </div>
                    </div>
                </DashboardSectionCard>

                <DashboardSectionCard
                    title="Agenda del día"
                    className="xl:col-span-6 min-h-[420px]"
                >
                    <div className="space-y-4">
                        {agendaItems.map(([hora, servicio, mascota]) => (
                            <div
                                key={hora}
                                className="flex items-center justify-between rounded-xl bg-bg-app p-4"
                            >
                                <div className="flex items-center gap-4">
                                    <Clock3 className="shrink-0 text-teal" />

                                    <div>
                                        <p className="font-semibold text-navy">
                                            {servicio}
                                        </p>

                                        <p className="text-sm text-text-muted">
                                            {mascota}
                                        </p>
                                    </div>
                                </div>

                                <span className="font-semibold">{hora}</span>
                            </div>
                        ))}
                    </div>
                </DashboardSectionCard>

                <DashboardSectionCard
                    title="Solicitudes"
                    className="xl:col-span-3 min-h-[420px]"
                >
                    <div className="space-y-4">
                        {requestItems.map((item) => (
                            <button
                                key={item}
                                className="w-full rounded-xl bg-bg-app p-4 text-left transition hover:bg-teal hover:text-white"
                                onClick={() => setOpenModal(true)}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </DashboardSectionCard>

                <DashboardSectionCard
                    title="Próximos Servicios"
                    action={<CalendarDays className="text-teal" />}
                    className="xl:col-span-9 min-h-[260px]"
                >
                    <table className="w-full">
                        <thead>
                            <tr className="text-left text-text-muted">
                                <th className="pb-3 font-normal">Mascota</th>
                                <th className="pb-3 font-normal">Servicio</th>
                                <th className="pb-3 font-normal">Hora</th>
                                <th className="pb-3 font-normal">Estado</th>
                            </tr>
                        </thead>

                        <tbody>
                            {[
                                ["Dobby", "Consulta", "09:00"],
                                ["Max", "Vacunación", "10:30"],
                                ["Luna", "Control", "12:00"],
                                ["Rocky", "Peluquería", "15:30"],
                            ].map(([mascota, servicio, hora]) => (
                                <tr key={mascota} className="border-t h-12">
                                    <td>{mascota}</td>
                                    <td>{servicio}</td>
                                    <td>{hora}</td>
                                    <td>
                                        <span className="flex items-center gap-1 text-green-600">
                                            <CircleCheck size={16} />
                                            Confirmado
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </DashboardSectionCard>

                <DashboardSectionCard
                    title="Estadísticas"
                    className="xl:col-span-3 min-h-[260px]"
                >
                    <div className="space-y-5">
                        {statsItems.map((stat) => (
                            <DashboardKeyValueRow
                                key={stat.label}
                                icon={<stat.icon />}
                                label={stat.label}
                                value={stat.value}
                            />
                        ))}
                    </div>
                </DashboardSectionCard>
            </div>

            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                title="Funcionalidad demostrativa"
                description="Esta acción hace parte del prototipo de PetCare Tech. En la versión final mostrará la funcionalidad completa."
            />
        </DashboardShell>
    );
}