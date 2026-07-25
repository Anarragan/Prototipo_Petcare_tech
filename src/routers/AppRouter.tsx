import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "../pages/landing/home";
import SelectRole from "../pages/landing/selectRole";
import OwnerDashboard from "../pages/owner/dashboard";
import ProviderDashboard from "../pages/provider/dashboard";
import NotFound from "../pages/notFound";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/role" element={<SelectRole />} />
                <Route path="/owner" element={<OwnerDashboard />} />
                <Route path="/provider" element={<ProviderDashboard />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}