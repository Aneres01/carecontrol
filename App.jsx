import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Autorizações from "./pages/Autorizações";
import Beneficiarios from "./pages/Beneficiarios";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="layout">
      <Sidebar setPage={setPage} />

      <div className="content">
        {page === "dashboard" && <Dashboard />}
        {page === "autorizacoes" && <Autorizações />}
        {page === "beneficiarios" && <Beneficiarios />}
      </div>
    </div>
  );
}
  );
}
