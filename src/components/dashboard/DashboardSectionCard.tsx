import type { ReactNode } from "react";
import Card from "../cards/Card";

interface DashboardSectionCardProps {
    title: string;
    children: ReactNode;
    action?: ReactNode;
    className?: string;
}

export default function DashboardSectionCard({
    title,
    children,
    action,
    className = "",
}: DashboardSectionCardProps) {
    return (
        <Card className={`min-h-0 flex flex-col ${className}`}>
            <div className="flex items-center justify-between gap-4 mb-6">
                <h2 className="text-lg font-semibold text-navy">{title}</h2>
                {action}
            </div>

            <div className="flex-1 min-w-0">{children}</div>
        </Card>
    );
}
