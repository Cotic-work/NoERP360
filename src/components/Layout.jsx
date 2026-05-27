import { useEffect } from "react";
import logo from "../../logo/NoERP360.png";
import { languages } from "../i18n";
import { moduleIcons } from "../data/modules";

export function Layout({
  activeModule,
  onSelectModule,
  sidebarOpen,
  onToggleSidebar,
  language,
  onLanguageChange,
  theme,
  onThemeToggle,
  t,
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
            <img src={logo} alt={t.common.logoAlt} className="brand-logo" />
          </div>
          <div>
            <p className="eyebrow">{t.dashboard.memoryEngine}</p>
            <h1>{t.appName}</h1>
          </div>
        </div>

        <nav className="nav-list" aria-label={t.common.module}>
          {moduleIcons.map((module) => (
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
              <span>{t.modules[module.id]}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-card">
          <span className="badge neutral">{t.common.complianceSnapshot}</span>
          <p>{t.common.complianceText}</p>
        </div>
      </aside>

      <div className="main-area">
        <header className="topbar">
          <div className="topbar-left">
            <button
              type="button"
              className="menu-button"
              onClick={() => onToggleSidebar(!sidebarOpen)}
              aria-label={t.common.toggleNavigation}
            >
              <span />
              <span />
              <span />
            </button>
            <div className="topbar-logo-shell">
              <img src={logo} alt={t.common.logoAlt} className="topbar-logo" />
            </div>
            <div>
              <p className="eyebrow">{t.appName}</p>
              <h2>{t.common.topbarTitle}</h2>
            </div>
          </div>

          <div className="topbar-right">
            <div className="topbar-status">
              <span className="status-dot" />
              {t.common.memoryOnline}
            </div>
            <label className="language-switcher">
              <span>{t.common.language}</span>
              <select value={language} onChange={(event) => onLanguageChange(event.target.value)}>
                {languages.map((item) => (
                  <option key={item.code} value={item.code}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>
            <button type="button" className={`theme-toggle ${theme === "dark" ? "active" : ""}`} onClick={onThemeToggle}>
              <span className="theme-toggle-dot" />
              {t.common.nightShift}
            </button>
            <button type="button" className="ghost-button">
              {t.common.exportAssumptions}
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
          aria-label={t.common.closeNavigation}
        />
      ) : null}
    </div>
  );
}
