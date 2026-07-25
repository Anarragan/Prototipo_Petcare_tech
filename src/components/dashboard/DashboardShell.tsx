import type { ReactNode } from "react";
import Sidebar from "../layout/Sidebar";
import Topbar from "../layout/Topbar";

interface DashboardShellProps {
    children: ReactNode;
    className?: string;
}

export default function DashboardShell({
    children,
    className = "",
}: DashboardShellProps) {
    return (
        <div className="min-h-screen bg-bg-app flex flex-col md:flex-row pb-16 md:pb-0">
            <Sidebar />

            <div className="flex-1 flex flex-col min-w-0">
                <Topbar />

                <main className={`flex-1 p-6 overflow-y-auto ${className}`}>
                    {children}
                </main>
            </div>
        </div>
    );
}
