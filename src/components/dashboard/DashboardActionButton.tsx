import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface DashboardActionButtonProps {
    icon: LucideIcon;
    children: ReactNode;
    onClick?: () => void;
    className?: string;
}

export default function DashboardActionButton({
    icon: Icon,
    children,
    onClick,
    className = "",
}: DashboardActionButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`w-full min-w-0 flex items-center gap-4 rounded-xl bg-bg-app p-4 text-left transition hover:bg-teal hover:text-white ${className}`}
        >
            <Icon size={22} className="shrink-0" />
            <span className="min-w-0 truncate">{children}</span>
        </button>
    );
}
