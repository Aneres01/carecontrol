import React, { useState } from "react";

export default function App() {
  const [page, setPage] = useState("dashboard");
  const [beneficiaries, setBeneficiaries] = useState([]);

  const [form, setForm] = useState({ name: "", cpf: "", birth: "" });

  function addBeneficiary(e) {
    e.preventDefault();
    if (!form.name || !form.cpf || !form.birth) return;
    setBeneficiaries([...beneficiaries, form]);
    setForm({ name: "", cpf: "", birth: "" });
  }

  return (
    <div style={{ fontFamily: "Arial" }}>
      <div style={{ display: "flex", gap: 10, padding: 15, background: "#0f172a", color: "#fff" }}>
        <button onClick={() => setPage("dashboard")}>Dashboard</button>
        <button onClick={() => setPage("beneficiaries")}>Beneficiários</button>
      </div>

      <div style={{ padding: 20 }}>
        {page === "dashboard" && (
          <div>
            <h1>CareControl</h1>
            <p>Total Beneficiários: {beneficiaries.length}</p>
          </div>
        )}

        {page === "beneficiaries" && (
          <div>
            <h1>Beneficiários</h1>

            <form onSubmit={addBeneficiary}>
              <input placeholder="Nome" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              <input placeholder="CPF" value={form.cpf} onChange={e => setForm({ ...form, cpf: e.target.value })} />
              <input type="date" value={form.birth} onChange={e => setForm({ ...form, birth: e.target.value })} />
              <button type="submit">Salvar</button>
            </form>

            {beneficiaries.map((b, i) => (
              <div key={i} style={{ border: "1px solid #ccc", marginTop: 10, padding: 10 }}>
                {b.name} - {b.cpf}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
