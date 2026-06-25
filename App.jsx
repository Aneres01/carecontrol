import "./index.css";

export default function App() {
  return (
    <div className="app">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2 className="logo">CareControl</h2>

        <nav className="menu">
          <a className="active">Dashboard</a>
          <a>Autorizações</a>
          <a>Beneficiários</a>
          <a>Reembolsos</a>
          <a>Medicamentos</a>
        </nav>
      </aside>

      {/* MAIN */}
      <main className="main">
        <header className="topbar">
          <h1>Dashboard</h1>
          <span className="user">Analista Operacional</span>
        </header>

        {/* KPIs */}
        <section className="cards">
          <div className="card">
            <h3>Beneficiários</h3>
            <p>1.248</p>
          </div>

          <div className="card">
            <h3>Autorizações Pendentes</h3>
            <p>37</p>
          </div>

          <div className="card">
            <h3>Reembolsos</h3>
            <p>18</p>
          </div>

          <div className="card">
            <h3>Medicamentos</h3>
            <p>64</p>
          </div>
        </section>

        {/* TABELA */}
        <section className="panel">
          <h2>Solicitações Recentes</h2>

          <table>
            <thead>
              <tr>
                <th>Paciente</th>
                <th>Tipo</th>
                <th>Status</th>
                <th>Data</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Maria Silva</td>
                <td>Autorização</td>
                <td className="pendente">Pendente</td>
                <td>25/06</td>
              </tr>

              <tr>
                <td>João Souza</td>
                <td>Medicamento</td>
                <td className="aprovado">Aprovado</td>
                <td>24/06</td>
              </tr>

              <tr>
                <td>Ana Lima</td>
                <td>Reembolso</td>
                <td className="negado">Negado</td>
                <td>23/06</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
