import { useEffect } from "react";
import logo from "../../logo/NoERP360.png";
import { modules } from "../data/modules";

export function Layout({
  activeModule,
  onSelectModule,
  sidebarOpen,
  onToggleSidebar,
  children,
}) {
  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth > 960 && sidebarOpen) {
        onToggleSidebar(false);
      }
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, [onToggleSidebar, sidebarOpen]);

  return (
    <div className="app-shell">
      <aside className={`sidebar ${sidebarOpen ? "is-open" : ""}`}>
        <div className="brand-block">
          <div className="brand-logo-shell">
            <img src={logo} alt="NoERP 360 logo" className="brand-logo" />
          </div>
          <div>
            <p className="eyebrow">Enterprise Memory Platform</p>
            <h1>NoERP 360</h1>
          </div>
        </div>

        <nav className="nav-list" aria-label="Application modules">
          {modules.map((module) => (
            <button
              key={module.id}
              type="button"
              className={`nav-item ${activeModule === module.id ? "active" : ""}`}
              onClick={() => {
                onSelectModule(module.id);
                onToggleSidebar(false);
              }}
            >
              <span className="nav-icon">{module.icon}</span>
              <span>{module.label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-card">
          <span className="badge neutral">Compliance Snapshot</span>
          <p>Documentation maturity remains fully dependent on verbal tradition.</p>
        </div>
      </aside>

      <div className="main-area">
        <header className="topbar">
          <div className="topbar-left">
            <button
              type="button"
              className="menu-button"
              onClick={() => onToggleSidebar(!sidebarOpen)}
              aria-label="Toggle navigation"
            >
              <span />
              <span />
              <span />
            </button>
            <div className="topbar-logo-shell">
              <img src={logo} alt="NoERP 360" className="topbar-logo" />
            </div>
            <div>
              <p className="eyebrow">NoERP 360</p>
              <h2>Operational Visibility Without Operational Data</h2>
            </div>
          </div>

          <div className="topbar-right">
            <div className="topbar-status">
              <span className="status-dot" />
              Memory engine online
            </div>
            <button type="button" className="ghost-button">
              Export assumptions
            </button>
          </div>
        </header>

        <main className="content">{children}</main>
      </div>

      {sidebarOpen ? (
        <button
          type="button"
          className="sidebar-overlay"
          onClick={() => onToggleSidebar(false)}
          aria-label="Close navigation"
        />
      ) : null}
    </div>
  );
}
