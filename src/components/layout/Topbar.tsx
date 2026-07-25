import { Bell, CircleUserRound } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-16 bg-navy flex items-center justify-between px-4 md:px-8 text-white">
      <div className="flex items-center gap-4 md:gap-10">

        <h1 className="text-lg md:text-xl font-bold truncate">
          PETCARE TECH
        </h1>

        <nav className="hidden lg:flex gap-8 text-sm">
          <a href="#">Dashboard</a>
          <a href="#">Servicios</a>
          <a href="#">Mascotas</a>
          <a href="#">Configuración</a>
        </nav>

      </div>

      <div className="flex gap-4 md:gap-5">
        <Bell />
        <CircleUserRound />
      </div>
    </header>
  );
}