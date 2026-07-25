import type { ReactNode } from "react";

interface DashboardKeyValueRowProps {
    label: string;
    value: ReactNode;
    icon?: ReactNode;
    labelClassName?: string;
    valueClassName?: string;
}

export default function DashboardKeyValueRow({
    label,
    value,
    icon,
    labelClassName = "text-text-muted",
    valueClassName = "font-semibold text-navy",
}: DashboardKeyValueRowProps) {
    return (
        <div className="flex items-center justify-between gap-4 text-sm">
            <div className={`flex items-center gap-2 ${labelClassName}`}>
                {icon}
                <span>{label}</span>
            </div>

            <span className={valueClassName}>{value}</span>
        </div>
    );
}
