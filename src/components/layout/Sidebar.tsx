import {
  PawPrint,
  CalendarDays,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-full md:w-20 bg-white border-t md:border-t-0 md:border-r border-gray-200 flex flex-row md:flex-col items-center justify-around md:justify-start py-4 md:py-6 gap-0 md:gap-8 fixed bottom-0 left-0 right-0 md:relative z-50">
      <PawPrint className="text-gray-500 text-teal" size={24} />
      <CalendarDays className="text-gray-500" size={24} />
      <Settings className="text-gray-500" size={24} />
    </aside>
  );
}