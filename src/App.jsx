import { useEffect, useRef, useState } from "react";
import logo from "../logo/NoERP360.png";
import { Layout } from "./components/Layout";
import { Badge, Card, SectionHeader, Table, Toggle } from "./components/UI";
import { translations } from "./i18n";
import { SpeedInsights } from "@vercel/speed-insights/react";

const LANGUAGE_STORAGE_KEY = "noerp360-language";
const THEME_STORAGE_KEY = "noerp360-theme";
const LEGACY_STORAGE_KEY = "noerp360-legacy";

function InsightList({ items }) {
  return (
    <div className="insight-list">
      {items.map(([label, text]) => (
        <div className="insight-row" key={label}>
          <strong>{label}</strong>
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
}

function FeatureCards({ items }) {
  return (
    <div className="feature-grid">
      {items.map(([title, subtitle]) => (
        <Card key={title} title={title} subtitle={subtitle} />
      ))}
    </div>
  );
}

function Modal({ children, fullScreen = false, onClose, closeLabel }) {
  return (
    <div className={`modal-overlay ${fullScreen ? "full-screen" : ""}`} role="dialog" aria-modal="true">
      <div className={`modal-card ${fullScreen ? "full-screen" : ""}`}>
        {onClose ? (
          <button type="button" className="modal-close" onClick={onClose} aria-label={closeLabel}>
            {closeLabel}
          </button>
        ) : null}
        {children}
      </div>
    </div>
  );
}

function LoadingOverlay({ message }) {
  return (
    <div className="loading-overlay" role="status" aria-live="polite">
      <div className="loading-card">
        <div className="loading-spinner" />
        <strong>{message}</strong>
      </div>
    </div>
  );
}

function Toast({ message }) {
  return (
    <div className="toast" role="status" aria-live="polite">
      {message}
    </div>
  );
}

function FloatingAssistant({ t }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const submitPrompt = (prompt) => {
    const question = prompt.trim();
    if (!question) {
      return;
    }

    setMessages((current) => [
      ...current,
      { role: "user", text: question },
      { role: "assistant", text: t.assistant.reply },
    ]);
    setInput("");
  };

  return (
    <div className="assistant-wrap">
      {open ? (
        <div className="assistant-panel">
          <div className="assistant-header">
            <div>
              <strong>{t.assistant.title}</strong>
              <p>{t.assistant.subtitle}</p>
            </div>
            <button type="button" className="assistant-close" onClick={() => setOpen(false)}>
              {t.common.close}
            </button>
          </div>

          <div className="assistant-messages">
            <div className="assistant-message assistant-message-bot">
              <span>{t.assistant.welcome}</span>
            </div>
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`assistant-message ${
                  message.role === "assistant"
                    ? "assistant-message-bot"
                    : "assistant-message-user"
                }`}
              >
                <span>{message.text}</span>
              </div>
            ))}
          </div>

          <div className="assistant-suggestions">
            {t.assistant.suggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                className="assistant-suggestion"
                onClick={() => submitPrompt(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>

          <div className="assistant-input-row">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={t.assistant.placeholder}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  submitPrompt(input);
                }
              }}
            />
            <button type="button" className="primary-button" onClick={() => submitPrompt(input)}>
              {t.assistant.send}
            </button>
          </div>
        </div>
      ) : null}

      <button type="button" className="assistant-trigger" onClick={() => setOpen((current) => !current)}>
        {t.assistant.button}
      </button>
    </div>
  );
}

function AuditReportModal({ t, onClose, onExport, onSend }) {
  return (
    <Modal onClose={onClose} closeLabel={t.audit.close}>
      <div className="report-modal">
        <div className="report-header">
          <div>
            <span className="badge info">NoERP 360</span>
            <strong>{t.audit.title}</strong>
            <p>{t.audit.subtitle}</p>
          </div>
          <div className="report-actions">
            <button type="button" className="ghost-button" onClick={onExport}>
              {t.audit.export}
            </button>
            <button type="button" className="primary-button" onClick={onSend}>
              {t.audit.send}
            </button>
          </div>
        </div>

        <div className="report-grid">
          <section className="report-section report-section-wide">
            <span className="report-label">{t.audit.executiveTitle}</span>
            <p>{t.audit.executiveText}</p>
          </section>

          <section className="report-section">
            <span className="report-label">{t.audit.statusTitle}</span>
            <div className="report-status-list">
              {t.audit.statusItems.map(([label, value]) => (
                <div key={label} className="report-status-row">
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </section>

          <section className="report-section report-section-wide">
            <span className="report-label">{t.audit.riskTitle}</span>
            <Table
              columns={t.audit.riskColumns.map((label, index) => ({
                key: ["risk", "severity", "mitigation"][index],
                label,
              }))}
              rows={t.audit.riskRows.map(([risk, severity, mitigation]) => ({
                risk,
                severity,
                mitigation,
              }))}
            />
          </section>

          <section className="report-section">
            <span className="report-label">{t.audit.findingsTitle}</span>
            <ul className="report-bullet-list">
              {t.audit.findings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="report-section">
            <span className="report-label">{t.audit.recommendationTitle}</span>
            <ul className="report-bullet-list">
              {t.audit.recommendations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="report-footer">
          <button type="button" className="ghost-button" onClick={onClose}>
            {t.audit.close}
          </button>
        </div>
      </div>
    </Modal>
  );
}

function DashboardModule({ t, onNavigate, onOpenExcelMode, onOpenSapModal, onOpenAuditReport }) {
  return (
    <div className="module-stack">
      <section className="hero-panel hero-dashboard">
        <div className="hero-copy">
          <p className="eyebrow">{t.common.landingPage}</p>
          <div className="hero-title-logo-wrap">
            <img src={logo} alt={t.common.logoAlt} className="hero-title-logo" />
          </div>
          <p>{t.dashboard.heroText}</p>
          <p className="legacy-caption">{t.dashboard.legacyCaption}</p>
          <div className="hero-actions">
            <button type="button" className="primary-button" onClick={() => onNavigate("reports")}>
              {t.dashboard.reviewAssumptions}
            </button>
            <button type="button" className="ghost-button" onClick={onOpenAuditReport}>
              {t.dashboard.managementReport}
            </button>
            <button type="button" className="ghost-button" onClick={() => onNavigate("supply")}>
              {t.dashboard.openBacklog}
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-logo-card">
            <div className="hero-logo-shell">
              <img src={logo} alt={t.common.logoAlt} className="hero-logo" />
            </div>
            <div className="hero-logo-copy">
              <span className="badge info">{t.dashboard.realtime}</span>
              <strong>{t.dashboard.memoryEngine}</strong>
              <p>{t.dashboard.memoryEngineText}</p>
            </div>
          </div>

          <div className="hero-panel-grid">
            <div className="hero-mini-card">
              <span>{t.dashboard.operationalConfidence}</span>
              <strong>94%</strong>
              <p>{t.dashboard.evidencePending}</p>
            </div>
            <div className="hero-mini-card">
              <span>{t.dashboard.entryResistance}</span>
              <strong>{t.dashboard.structural}</strong>
              <p>{t.dashboard.processOptional}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="card-grid kpi-grid">
        {t.dashboard.kpis.map(([title, value, meta, tone]) => (
          <Card key={title} title={title} value={value} subtitle={meta} tone={tone} />
        ))}
      </div>

      <div className="command-center">
        <Card title={t.dashboard.commandCenterTitle} subtitle={t.dashboard.commandCenterSubtitle}>
          <div className="command-grid">
            {t.dashboard.commandStats.map(([label, value, caption]) => (
              <div className="command-stat" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
                <p>{caption}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card title={t.dashboard.memoryEngine} subtitle={t.dashboard.memoryCardSubtitle}>
          <p className="body-copy">{t.dashboard.memoryCardText}</p>
          <div className="inline-badges">
            {t.dashboard.memoryBadges.map((badge, index) => (
              <Badge key={badge} tone={index === 1 ? "warning" : index === 2 ? "neutral" : "info"}>
                {badge}
              </Badge>
            ))}
          </div>
        </Card>
      </div>

      <div className="two-column">
        <Card title={t.dashboard.utilitiesTitle} subtitle={t.dashboard.utilitiesSubtitle}>
          <p className="body-copy">{t.dashboard.utilitiesText}</p>
          <div className="hero-actions">
            <button type="button" className="primary-button excel-button" onClick={onOpenExcelMode}>
              {t.dashboard.excelMode}
            </button>
            <button type="button" className="ghost-button" onClick={onOpenSapModal}>
              {t.dashboard.sapSync}
            </button>
          </div>
        </Card>
        <Card title={t.dashboard.quickTitle} subtitle={t.dashboard.quickSubtitle}>
          <div className="quick-actions">
            {t.dashboard.quickActions.map(([title, text, target]) => (
              <button
                key={title}
                type="button"
                className="action-tile"
                onClick={() => onNavigate(target)}
              >
                <strong>{title}</strong>
                <span>{text}</span>
              </button>
            ))}
          </div>
        </Card>
      </div>

      <div className="three-column">
        <Card title={t.dashboard.activityTitle} subtitle={t.dashboard.activitySubtitle}>
          <ul className="activity-list">
            {t.dashboard.activityFeed.map(([time, team, event, tone]) => (
              <li key={`${time}-${event}`}>
                <span className={`timeline-dot tone-${tone}`} />
                <div>
                  <div className="activity-meta">
                    <strong>{team}</strong>
                    <span>{time}</span>
                  </div>
                  <span>{event}</span>
                </div>
              </li>
            ))}
          </ul>
        </Card>

        <Card title={t.dashboard.spotlightTitle} subtitle={t.dashboard.spotlightSubtitle}>
          <div className="spotlight-list">
            {t.dashboard.spotlights.map(([module, status, note]) => (
              <div className="spotlight-row" key={module}>
                <div>
                  <strong>{module}</strong>
                  <p>{note}</p>
                </div>
                <Badge tone="neutral">{status}</Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card title={t.assistant.title} subtitle={t.assistant.reply}>
          <div className="inline-badges multi-line">
            {t.assistant.suggestions.map((suggestion) => (
              <Badge key={suggestion} tone="info">
                {suggestion}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

function FinanceModule({ t }) {
  return (
    <div className="module-stack">
      <SectionHeader eyebrow={t.common.module} title={t.finance.title} subtitle={t.finance.subtitle} />
      <div className="banner warning-banner">{t.finance.banner}</div>
      <div className="card-grid">
        {t.finance.cards.map(([title, value]) => (
          <Card key={title} title={title} value={value} />
        ))}
      </div>
      <div className="two-column">
        <Card title={t.finance.visibilityTitle} subtitle={t.finance.visibilitySubtitle}>
          <Table
            columns={t.finance.columns.map((label, index) => ({
              key: ["period", "account", "amount", "status", "owner"][index],
              label,
            }))}
            rows={t.finance.rows.map(([period, account, amount, status, owner]) => ({
              period,
              account,
              amount,
              status,
              owner,
            }))}
          />
        </Card>
        <Card title={t.finance.exceptionsTitle} subtitle={t.finance.exceptionsSubtitle}>
          <InsightList items={t.finance.exceptions} />
        </Card>
      </div>
    </div>
  );
}

function PurchasingModule({ t }) {
  const [message, setMessage] = useState("");

  return (
    <div className="module-stack">
      <SectionHeader
        eyebrow={t.common.module}
        title={t.purchasing.title}
        subtitle={t.purchasing.subtitle}
        action={
          <button type="button" className="primary-button" onClick={() => setMessage(t.purchasing.success)}>
            {t.purchasing.generate}
          </button>
        }
      />
      {message ? <div className="banner success-banner">{message}</div> : null}
      <FeatureCards items={t.purchasing.features} />
      <div className="two-column">
        <Card title={t.purchasing.supplierTitle} subtitle={t.purchasing.supplierSubtitle}>
          <Table
            columns={t.purchasing.columns.map((label, index) => ({
              key: ["supplier", "buyer", "lastPrice", "leadTime"][index],
              label,
            }))}
            rows={t.purchasing.rows.map(([supplier, buyer, lastPrice, leadTime]) => ({
              supplier,
              buyer,
              lastPrice,
              leadTime,
            }))}
          />
        </Card>
        <Card title={t.purchasing.emptyTitle} subtitle={t.purchasing.emptySubtitle}>
          <div className="empty-state">
            <strong>{t.purchasing.emptyStrong}</strong>
            <p>{t.purchasing.emptyText}</p>
          </div>
        </Card>
      </div>
    </div>
  );
}

function SalesModule({ t }) {
  return (
    <div className="module-stack">
      <SectionHeader eyebrow={t.common.module} title={t.sales.title} subtitle={t.sales.subtitle} />
      <FeatureCards items={t.sales.features} />
      <div className="two-column">
        <Card title={t.sales.quotesTitle} subtitle={t.sales.quotesSubtitle}>
          <Table
            columns={t.sales.columns.map((label, index) => ({
              key: ["customer", "price", "discount", "status"][index],
              label,
            }))}
            rows={t.sales.rows.map(([customer, price, discount, status]) => ({
              customer,
              price,
              discount,
              status,
            }))}
          />
        </Card>
        <Card title={t.sales.pipelineTitle} subtitle={t.sales.pipelineSubtitle}>
          <InsightList items={t.sales.pipeline} />
        </Card>
      </div>
    </div>
  );
}

function WarehouseModule({ t }) {
  return (
    <div className="module-stack">
      <SectionHeader eyebrow={t.common.module} title={t.warehouse.title} subtitle={t.warehouse.subtitle} />
      <FeatureCards items={t.warehouse.features} />

      <div className="two-column">
        <Card title={t.warehouse.binTitle} subtitle={t.warehouse.binSubtitle}>
          <div className="bin-grid">
            {t.warehouse.bins.map(([code, label, tone]) => (
              <div className="bin-card" key={code}>
                <span className="bin-code">{t.common.location} {code}</span>
                <Badge tone={tone}>{label}</Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card title={t.warehouse.availabilityTitle} subtitle={t.warehouse.availabilitySubtitle}>
          <div className="inline-badges multi-line">
            {t.warehouse.badges.map((badge) => (
              <Badge key={badge} tone="info">
                {badge}
              </Badge>
            ))}
          </div>
          <div className="subsection-spacer" />
          <InsightList items={t.warehouse.notes} />
        </Card>
      </div>
    </div>
  );
}

function ProductionModule({ t }) {
  return (
    <div className="module-stack">
      <SectionHeader eyebrow={t.common.module} title={t.production.title} subtitle={t.production.subtitle} />
      <FeatureCards items={t.production.features} />
      <div className="two-column">
        <Card title={t.production.boardTitle} subtitle={t.production.boardSubtitle}>
          <Table
            columns={t.production.columns.map((label, index) => ({
              key: ["workOrder", "materialStatus", "operator", "completion"][index],
              label,
            }))}
            rows={t.production.rows.map(([workOrder, materialStatus, operator, completion]) => ({
              workOrder,
              materialStatus,
              operator,
              completion,
            }))}
          />
        </Card>
        <Card title={t.production.signalsTitle} subtitle={t.production.signalsSubtitle}>
          <InsightList items={t.production.signals} />
        </Card>
      </div>
    </div>
  );
}

function SupplyModule({ t }) {
  return (
    <div className="module-stack">
      <SectionHeader eyebrow={t.common.module} title={t.supply.title} subtitle={t.supply.subtitle} />
      <FeatureCards items={t.supply.features} />
      <div className="two-column">
        <Card title={t.supply.workflowTitle} subtitle={t.supply.workflowSubtitle}>
          <ol className="workflow-list">
            {t.supply.workflow.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </Card>
        <Card title={t.supply.escalationTitle} subtitle={t.supply.escalationSubtitle}>
          <InsightList items={t.supply.escalations} />
        </Card>
      </div>
    </div>
  );
}

function ReportsModule({ t }) {
  return (
    <div className="module-stack">
      <SectionHeader eyebrow={t.common.module} title={t.reports.title} subtitle={t.reports.subtitle} />
      <div className="card-grid">
        {t.reports.cards.map(([title, value]) => (
          <Card key={title} title={title} value={value} />
        ))}
      </div>
      <div className="two-column">
        <Card title={t.reports.analyticsTitle} subtitle={t.reports.analyticsSubtitle}>
          <div className="empty-chart">
            <div className="empty-chart-grid" />
            <p>{t.reports.analyticsEmpty}</p>
          </div>
        </Card>
        <Card title={t.reports.libraryTitle} subtitle={t.reports.librarySubtitle}>
          <InsightList items={t.reports.library} />
        </Card>
      </div>
    </div>
  );
}

function SettingsModule({ t }) {
  const [toggles, setToggles] = useState([
    { key: "requireEntry", enabled: false },
    { key: "discipline", enabled: false },
    { key: "excel", enabled: true },
    { key: "joze", enabled: true },
    { key: "legacy", enabled: true },
  ]);
  const [saved, setSaved] = useState("");

  const flipToggle = (key) => {
    setSaved("");
    setToggles((current) =>
      current.map((toggle) =>
        toggle.key === key ? { ...toggle, enabled: !toggle.enabled } : toggle,
      ),
    );
  };

  return (
    <div className="module-stack">
      <SectionHeader
        eyebrow={t.common.module}
        title={t.settings.title}
        subtitle={t.settings.subtitle}
        action={
          <button type="button" className="primary-button" onClick={() => setSaved(t.settings.saved)}>
            {t.settings.save}
          </button>
        }
      />
      {saved ? <div className="banner info-banner">{saved}</div> : null}
      <div className="two-column">
        <Card title={t.settings.controlsTitle} subtitle={t.settings.controlsSubtitle}>
          <div className="toggle-list">
            {toggles.map((toggle, index) => (
              <Toggle
                key={toggle.key}
                label={t.settings.toggles[index]}
                enabled={toggle.enabled}
                onChange={() => flipToggle(toggle.key)}
              />
            ))}
          </div>
        </Card>
        <Card title={t.settings.policyTitle} subtitle={t.settings.policySubtitle}>
          <InsightList items={t.settings.policies} />
        </Card>
      </div>
    </div>
  );
}

export default function App() {
  const loadingTimeoutRef = useRef(null);
  const loadingIntervalRef = useRef(null);
  const excelIntervalRef = useRef(null);

  const [activeModule, setActiveModule] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") {
      return "sl";
    }

    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return stored && translations[stored] ? stored : "sl";
  });
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    return window.localStorage.getItem(THEME_STORAGE_KEY) || "light";
  });
  const [legacyMode, setLegacyMode] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.localStorage.getItem(LEGACY_STORAGE_KEY) === "true";
  });
  const [loading, setLoading] = useState(false);
  const [loadingMessageIndex, setLoadingMessageIndex] = useState(0);
  const [excelModeOpen, setExcelModeOpen] = useState(false);
  const [excelMessageIndex, setExcelMessageIndex] = useState(0);
  const [sapModalOpen, setSapModalOpen] = useState(false);
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const toastTimeoutRef = useRef(null);

  const t = translations[language];

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  useEffect(() => {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem(LEGACY_STORAGE_KEY, String(legacyMode));
    document.documentElement.dataset.legacy = legacyMode ? "true" : "false";
  }, [legacyMode]);

  useEffect(() => {
    return () => {
      window.clearTimeout(loadingTimeoutRef.current);
      window.clearInterval(loadingIntervalRef.current);
      window.clearInterval(excelIntervalRef.current);
      window.clearTimeout(toastTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!excelModeOpen) {
      window.clearInterval(excelIntervalRef.current);
      setExcelMessageIndex(0);
      return undefined;
    }

    excelIntervalRef.current = window.setInterval(() => {
      setExcelMessageIndex((current) => (current + 1) % t.excel.messages.length);
    }, 1100);

    return () => window.clearInterval(excelIntervalRef.current);
  }, [excelModeOpen, t.excel.messages.length]);

  const handleModuleChange = (nextModule) => {
    if (nextModule === activeModule) {
      setSidebarOpen(false);
      return;
    }

    window.clearTimeout(loadingTimeoutRef.current);
    window.clearInterval(loadingIntervalRef.current);

    setSidebarOpen(false);
    setLoading(true);
    setLoadingMessageIndex(0);

    loadingIntervalRef.current = window.setInterval(() => {
      setLoadingMessageIndex((current) => (current + 1) % t.common.loadingMessages.length);
    }, 220);

    loadingTimeoutRef.current = window.setTimeout(() => {
      window.clearInterval(loadingIntervalRef.current);
      setActiveModule(nextModule);
      setLoading(false);
    }, 920);
  };

  const showToast = (message) => {
    window.clearTimeout(toastTimeoutRef.current);
    setToastMessage(message);
    toastTimeoutRef.current = window.setTimeout(() => {
      setToastMessage("");
    }, 2600);
  };

  const renderModule = () => {
    switch (activeModule) {
      case "dashboard":
        return (
          <DashboardModule
            t={t}
            onNavigate={handleModuleChange}
            onOpenExcelMode={() => setExcelModeOpen(true)}
            onOpenSapModal={() => setSapModalOpen(true)}
            onOpenAuditReport={() => setAuditModalOpen(true)}
          />
        );
      case "finance":
        return <FinanceModule t={t} />;
      case "purchasing":
        return <PurchasingModule t={t} />;
      case "sales":
        return <SalesModule t={t} />;
      case "warehouse":
        return <WarehouseModule t={t} />;
      case "production":
        return <ProductionModule t={t} />;
      case "supply":
        return <SupplyModule t={t} />;
      case "reports":
        return <ReportsModule t={t} />;
      case "settings":
        return <SettingsModule t={t} />;
      default:
        return (
          <DashboardModule
            t={t}
            onNavigate={handleModuleChange}
            onOpenExcelMode={() => setExcelModeOpen(true)}
            onOpenSapModal={() => setSapModalOpen(true)}
            onOpenAuditReport={() => setAuditModalOpen(true)}
          />
        );
    }
  };

  return (
    <>
      <Layout
        activeModule={activeModule}
        onSelectModule={handleModuleChange}
        sidebarOpen={sidebarOpen}
        onToggleSidebar={setSidebarOpen}
        language={language}
        onLanguageChange={setLanguage}
        theme={theme}
        onThemeToggle={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
        legacyMode={legacyMode}
        onLegacyToggle={() => setLegacyMode((current) => !current)}
        t={t}
      >
        {renderModule()}
      </Layout>

      <FloatingAssistant t={t} />

      <SpeedInsights />

      {loading ? <LoadingOverlay message={t.common.loadingMessages[loadingMessageIndex]} /> : null}

      {excelModeOpen ? (
        <Modal fullScreen onClose={() => setExcelModeOpen(false)} closeLabel={t.excel.back}>
          <div className="excel-mode">
            <strong>{t.excel.title}</strong>
            <div className="excel-loading-list">
              {t.excel.messages.map((message, index) => (
                <div
                  key={message}
                  className={`excel-loading-item ${index === excelMessageIndex ? "active" : ""}`}
                >
                  <span className="loading-spinner small" />
                  <span>{message}</span>
                </div>
              ))}
            </div>
          </div>
        </Modal>
      ) : null}

      {sapModalOpen ? (
        <Modal onClose={() => setSapModalOpen(false)} closeLabel={t.sap.close}>
          <div className="sap-modal">
            <span className="badge warning">SAP</span>
            <strong>{t.sap.title}</strong>
            <p>{t.sap.subtitle}</p>
            <div className="sap-error-list">
              {t.sap.errors.map((error, index) => (
                <div key={error} className="sap-error-row">
                  <span>0{index + 1}</span>
                  <strong>{error}</strong>
                </div>
              ))}
            </div>
          </div>
        </Modal>
      ) : null}

      {auditModalOpen ? (
        <AuditReportModal
          t={t}
          onClose={() => setAuditModalOpen(false)}
          onExport={() => showToast(t.audit.exportToast)}
          onSend={() => showToast(t.audit.sendToast)}
        />
      ) : null}

      {toastMessage ? <Toast message={toastMessage} /> : null}
    </>
  );
}
