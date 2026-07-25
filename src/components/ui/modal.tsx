import { X } from "lucide-react";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    description: string;
}

export default function Modal({
    open,
    onClose,
    title,
    description,
}: ModalProps) {

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

            <div className="bg-white rounded-2xl shadow-xl p-8 w-[450px]">

                <div className="flex justify-between items-center">

                    <h2 className="text-xl font-bold text-navy">
                        {title}
                    </h2>

                    <button onClick={onClose}>
                        <X />
                    </button>

                </div>

                <p className="mt-5 text-text-muted leading-7">
                    {description}
                </p>

                <button
                    onClick={onClose}
                    className="mt-8 w-full bg-teal text-white py-3 rounded-xl hover:bg-teal-light transition"
                >
                    Entendido
                </button>

            </div>

        </div>
    );
}