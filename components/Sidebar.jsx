export default function Sidebar({ setPage }) {
  return (
    <aside className="sidebar">
      <h1 className="logo">CareControl</h1>

      <button onClick={() => setPage("dashboard")}>Dashboard</button>
      <button onClick={() => setPage("autorizacoes")}>Autorizações</button>
      <button onClick={() => setPage("beneficiarios")}>Beneficiários</button>
    </aside>
  );
}
