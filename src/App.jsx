import { useState } from "react";
import { Layout } from "./components/Layout";
import { Badge, Card, SectionHeader, Table, Toggle } from "./components/UI";
import {
  activityFeed,
  commandCenterStats,
  commercialPipeline,
  dashboardKpis,
  financeCards,
  financeExceptions,
  financeTable,
  moduleSpotlights,
  productionFeatures,
  productionOrders,
  productionSignals,
  purchasingFeatures,
  reportCards,
  reportLibrary,
  salesFeatures,
  salesQuotes,
  settingsPolicies,
  settingsToggles,
  supplierMemory,
  supplyEscalations,
  supplyFeatures,
  supplyWorkflow,
  warehouseBadges,
  warehouseFeatures,
  warehouseLocations,
  warehouseNotes,
} from "./data/modules";

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
      {items.map((item) => {
        const title = Array.isArray(item) ? item[0] : item.title;
        const subtitle = Array.isArray(item) ? item[1] : item.subtitle;
        return <Card key={title} title={title} subtitle={subtitle} />;
      })}
    </div>
  );
}

function DashboardModule({ onNavigate }) {
  return (
    <div className="module-stack">
      <section className="hero-panel hero-dashboard">
        <div className="hero-copy">
          <p className="eyebrow">Landing Page</p>
          <h3>Enterprise coordination for teams who prefer memory over master data.</h3>
          <p>
            NoERP 360 presents a confident operating picture for businesses that
            still rely on instinct, undocumented know-how, and the way things
            have always been done. It looks fully digital, while preserving the
            cultural comfort of not entering anything.
          </p>
          <div className="hero-actions">
            <button type="button" className="primary-button" onClick={() => onNavigate("reports")}>
              Review assumptions
            </button>
            <button type="button" className="ghost-button" onClick={() => onNavigate("supply")}>
              Open verbal backlog
            </button>
          </div>
        </div>

        <div className="hero-panel-grid">
          <div className="signal-card">
            <span className="badge info">Real-time</span>
            <strong>Memory Engine</strong>
            <p>
              Synchronizes operations through instinct, corridor updates, and
              selective recollection with no transactional burden.
            </p>
          </div>
          <div className="hero-mini-card">
            <span>Operational confidence</span>
            <strong>94%</strong>
            <p>Evidence remains under discussion.</p>
          </div>
          <div className="hero-mini-card">
            <span>Data entry resistance</span>
            <strong>Structural</strong>
            <p>Process discipline remains culturally optional.</p>
          </div>
        </div>
      </section>

      <div className="card-grid kpi-grid">
        {dashboardKpis.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            value={item.value}
            subtitle={item.meta}
            tone={item.tone}
          />
        ))}
      </div>

      <div className="command-center">
        <Card
          title="Operational Command Center"
          subtitle="A realistic landing page for perfectly unrealistic data discipline."
        >
          <div className="command-grid">
            {commandCenterStats.map((item) => (
              <div className="command-stat" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <p>{item.caption}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card title="Real-time Memory Engine" subtitle="Human knowledge remains the official system of record.">
          <p className="body-copy">
            Instead of burdening staff with structured transactions, NoERP 360
            leverages shared memory, implied process steps, and socially
            validated stock levels. The result is flexible, immediate, and
            impossible to reconcile.
          </p>
          <div className="inline-badges">
            <Badge tone="info">No barcode required</Badge>
            <Badge tone="warning">Excel-assisted intelligence</Badge>
            <Badge tone="neutral">Audit-resistant by design</Badge>
          </div>
        </Card>
      </div>

      <div className="three-column">
        <Card title="Live Activity Feed" subtitle="Latest operational assumptions across the enterprise.">
          <ul className="activity-list">
            {activityFeed.map((entry) => (
              <li key={`${entry.time}-${entry.event}`}>
                <span className={`timeline-dot tone-${entry.tone}`} />
                <div>
                  <div className="activity-meta">
                    <strong>{entry.team}</strong>
                    <span>{entry.time}</span>
                  </div>
                  <span>{entry.event}</span>
                </div>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Module Spotlights" subtitle="Cross-functional status without the inconvenience of updates.">
          <div className="spotlight-list">
            {moduleSpotlights.map((item) => (
              <div className="spotlight-row" key={item.module}>
                <div>
                  <strong>{item.module}</strong>
                  <p>{item.note}</p>
                </div>
                <Badge tone="neutral">{item.status}</Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Quick Actions" subtitle="Things a serious ERP would usually let you do.">
          <div className="quick-actions">
            <button type="button" className="action-tile" onClick={() => onNavigate("sales")}>
              <strong>Create verbal order</strong>
              <span>Capture demand without typing anything.</span>
            </button>
            <button type="button" className="action-tile" onClick={() => onNavigate("warehouse")}>
              <strong>Locate theoretical stock</strong>
              <span>Ask the warehouse with modern visual support.</span>
            </button>
            <button type="button" className="action-tile" onClick={() => onNavigate("finance")}>
              <strong>Close the month emotionally</strong>
              <span>Prepare an explanation before the numbers exist.</span>
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}

function FinanceModule() {
  return (
    <div className="module-stack">
      <SectionHeader
        title="Finance & Accounting"
        subtitle="We know approximately how much we have."
      />
      <div className="banner warning-banner">
        No discrepancies detected because no data exists.
      </div>
      <div className="card-grid">
        {financeCards.map(([title, value]) => (
          <Card key={title} title={title} value={value} />
        ))}
      </div>
      <div className="two-column">
        <Card title="Financial Visibility" subtitle="The books remain conceptually balanced.">
          <Table
            columns={[
              { key: "period", label: "Period" },
              { key: "account", label: "Account" },
              { key: "amount", label: "Amount" },
              { key: "status", label: "Status" },
              { key: "owner", label: "Source" },
            ]}
            rows={financeTable}
          />
        </Card>
        <Card title="Exception Monitor" subtitle="Key areas currently held together by optimism.">
          <InsightList items={financeExceptions} />
        </Card>
      </div>
    </div>
  );
}

function PurchasingModule() {
  const [message, setMessage] = useState("");

  return (
    <div className="module-stack">
      <SectionHeader
        title="Purchasing"
        subtitle="When it runs out, call the supplier."
        action={
          <button
            type="button"
            className="primary-button"
            onClick={() =>
              setMessage("Purchase order not created, but everyone feels informed.")
            }
          >
            Generate purchase order from memory
          </button>
        }
      />
      {message ? <div className="banner success-banner">{message}</div> : null}
      <FeatureCards items={purchasingFeatures} />
      <div className="two-column">
        <Card title="Supplier Memory Register" subtitle="Supplier knowledge remains decentralized but passionate.">
          <Table
            columns={[
              { key: "supplier", label: "Supplier" },
              { key: "buyer", label: "Buyer" },
              { key: "lastPrice", label: "Last Price" },
              { key: "leadTime", label: "Lead Time" },
            ]}
            rows={supplierMemory}
          />
        </Card>
        <Card title="Purchasing Empty State" subtitle="Structured procurement remains aspirational.">
          <div className="empty-state">
            <strong>No approved purchase orders found.</strong>
            <p>
              Procurement currently operates through remembered agreements,
              repeat phone calls, and a strong belief that the supplier knows
              what was meant.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

function SalesModule() {
  return (
    <div className="module-stack">
      <SectionHeader
        title="Sales"
        subtitle="The price depends on the customer and the mood."
      />
      <FeatureCards items={salesFeatures} />
      <div className="two-column">
        <Card title="Quote Register" subtitle="Commercial precision with flexible specifics.">
          <Table
            columns={[
              { key: "customer", label: "Customer" },
              { key: "price", label: "Price" },
              { key: "discount", label: "Discount" },
              { key: "status", label: "Status" },
            ]}
            rows={salesQuotes}
          />
        </Card>
        <Card title="Pipeline Commentary" subtitle="Forecasting remains qualitative and highly confident.">
          <InsightList items={commercialPipeline} />
        </Card>
      </div>
    </div>
  );
}

function WarehouseModule() {
  return (
    <div className="module-stack">
      <SectionHeader
        title="Warehouse Management"
        subtitle="It must be somewhere."
      />
      <FeatureCards items={warehouseFeatures} />

      <div className="two-column">
        <Card title="Warehouse Bin Map" subtitle="Location certainty remains dynamic.">
          <div className="bin-grid">
            {warehouseLocations.map((location) => (
              <div className="bin-card" key={location.code}>
                <span className="bin-code">Location {location.code}</span>
                <Badge tone={location.tone}>{location.label}</Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Availability Signals" subtitle="Operational truth indicators.">
          <div className="inline-badges multi-line">
            {warehouseBadges.map((badge) => (
              <Badge key={badge} tone="info">
                {badge}
              </Badge>
            ))}
          </div>
          <div className="subsection-spacer" />
          <InsightList items={warehouseNotes} />
        </Card>
      </div>
    </div>
  );
}

function ProductionModule() {
  return (
    <div className="module-stack">
      <SectionHeader title="Production" subtitle="Let's just make it." />
      <FeatureCards items={productionFeatures} />
      <div className="two-column">
        <Card title="Production Board" subtitle="Execution visibility with selective certainty.">
          <Table
            columns={[
              { key: "workOrder", label: "Work Order" },
              { key: "materialStatus", label: "Material Status" },
              { key: "operator", label: "Operator" },
              { key: "completion", label: "Completion" },
            ]}
            rows={productionOrders}
          />
        </Card>
        <Card title="Shop Floor Signals" subtitle="What the system would know if the system were used.">
          <InsightList items={productionSignals} />
        </Card>
      </div>
    </div>
  );
}

function SupplyModule() {
  return (
    <div className="module-stack">
      <SectionHeader
        title="Production Supply"
        subtitle="Do we have the material?"
      />
      <FeatureCards items={supplyFeatures} />
      <div className="two-column">
        <Card title="Material Escalation Workflow" subtitle="Standard operating pattern.">
          <ol className="workflow-list">
            {supplyWorkflow.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </Card>
        <Card title="Escalation Notes" subtitle="Interdepartmental alignment status.">
          <InsightList items={supplyEscalations} />
        </Card>
      </div>
    </div>
  );
}

function ReportsModule() {
  return (
    <div className="module-stack">
      <SectionHeader
        title="Reports"
        subtitle="Accurate reports require accurate data. Good luck."
      />
      <div className="card-grid">
        {reportCards.map(([title, value]) => (
          <Card key={title} title={title} value={value} />
        ))}
      </div>
      <div className="two-column">
        <Card title="Analytics Workspace" subtitle="Chart rendering remains blocked by reality.">
          <div className="empty-chart">
            <div className="empty-chart-grid" />
            <p>
              No chart available because nobody entered anything. Executive
              interpretation may proceed regardless.
            </p>
          </div>
        </Card>
        <Card title="Report Library" subtitle="Popular outputs with flexible source quality.">
          <InsightList items={reportLibrary} />
        </Card>
      </div>
    </div>
  );
}

function SettingsModule() {
  const [toggles, setToggles] = useState(settingsToggles);
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
        title="Settings"
        subtitle="Configure the illusion of control."
        action={
          <button
            type="button"
            className="primary-button"
            onClick={() => setSaved("Nothing saved. Existing ambiguity preserved.")}
          >
            Save nothing
          </button>
        }
      />
      {saved ? <div className="banner info-banner">{saved}</div> : null}
      <div className="two-column">
        <Card title="Behavior Controls" subtitle="System governance aligned with operational culture.">
          <div className="toggle-list">
            {toggles.map((toggle) => (
              <Toggle
                key={toggle.key}
                label={toggle.label}
                enabled={toggle.enabled}
                onChange={() => flipToggle(toggle.key)}
              />
            ))}
          </div>
        </Card>
        <Card title="Policy Preview" subtitle="Formal controls with intentionally limited consequences.">
          <InsightList items={settingsPolicies} />
        </Card>
      </div>
    </div>
  );
}

export default function App() {
  const [activeModule, setActiveModule] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderModule = () => {
    switch (activeModule) {
      case "dashboard":
        return <DashboardModule onNavigate={setActiveModule} />;
      case "finance":
        return <FinanceModule />;
      case "purchasing":
        return <PurchasingModule />;
      case "sales":
        return <SalesModule />;
      case "warehouse":
        return <WarehouseModule />;
      case "production":
        return <ProductionModule />;
      case "supply":
        return <SupplyModule />;
      case "reports":
        return <ReportsModule />;
      case "settings":
        return <SettingsModule />;
      default:
        return <DashboardModule onNavigate={setActiveModule} />;
    }
  };

  return (
    <Layout
      activeModule={activeModule}
      onSelectModule={setActiveModule}
      sidebarOpen={sidebarOpen}
      onToggleSidebar={setSidebarOpen}
    >
      {renderModule()}
    </Layout>
  );
}
