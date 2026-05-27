import { useState } from "react";
import { Layout } from "./components/Layout";
import { Badge, Card, SectionHeader, Table, Toggle } from "./components/UI";
import {
  activityFeed,
  dashboardKpis,
  financeCards,
  financeTable,
  productionOrders,
  reportCards,
  salesQuotes,
  settingsToggles,
  warehouseBadges,
  warehouseLocations,
} from "./data/modules";

function DashboardModule() {
  return (
    <div className="module-stack">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Landing Page</p>
          <h3>The ERP suite for businesses running entirely on confidence.</h3>
          <p>
            NoERP 360 delivers executive-grade visibility into operations that
            remain intentionally undocumented, approximately coordinated, and
            fully aligned with how things have worked for 30 years.
          </p>
          <div className="hero-actions">
            <button type="button" className="primary-button">
              Review assumptions
            </button>
            <button type="button" className="ghost-button">
              Open verbal backlog
            </button>
          </div>
        </div>

        <div className="hero-metrics">
          <div className="signal-card">
            <span className="badge info">Real-time</span>
            <strong>Memory Engine</strong>
            <p>Synchronizes operations through instinct, hallway updates, and selective recollection.</p>
          </div>
          <div className="signal-grid">
            <div>
              <span>Master data coverage</span>
              <strong>Minimal</strong>
            </div>
            <div>
              <span>Decision latency</span>
              <strong>Depends who is present</strong>
            </div>
            <div>
              <span>Audit trace</span>
              <strong>Informal</strong>
            </div>
            <div>
              <span>Confidence level</span>
              <strong>High somehow</strong>
            </div>
          </div>
        </div>
      </section>

      <div className="card-grid kpi-grid">
        {dashboardKpis.map((item) => (
          <Card key={item.title} title={item.title} value={item.value} tone={item.tone} />
        ))}
      </div>

      <div className="two-column">
        <Card title="Real-time Memory Engine" subtitle="Human knowledge remains the system of record.">
          <p className="body-copy">
            Instead of burdening staff with actual transactions, NoERP 360
            leverages shared memory, implied process steps, and emotionally
            validated stock levels. The result is flexible, immediate, and
            impossible to reconcile.
          </p>
          <div className="inline-badges">
            <Badge tone="info">No barcode required</Badge>
            <Badge tone="warning">Excel-assisted intelligence</Badge>
            <Badge tone="neutral">Audit-resistant by design</Badge>
          </div>
        </Card>

        <Card title="Activity Feed" subtitle="Latest operational assumptions.">
          <ul className="activity-list">
            {activityFeed.map((entry) => (
              <li key={entry}>
                <span className="timeline-dot" />
                <span>{entry}</span>
              </li>
            ))}
          </ul>
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
      <Card title="Financial Visibility" subtitle="The books remain conceptually balanced.">
        <Table
          columns={[
            { key: "period", label: "Period" },
            { key: "account", label: "Account" },
            { key: "amount", label: "Amount" },
            { key: "status", label: "Status" },
          ]}
          rows={financeTable}
        />
      </Card>
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
      <div className="feature-grid">
        <Card title="Supplier memory list" subtitle="Key vendors are stored in three people's phones." />
        <Card title="Purchase order by phone" subtitle="Formal approval occurs during the call." />
        <Card title="Delivery date optimism" subtitle="ETA remains a trust-based metric." />
        <Card title="Price from last time, probably" subtitle="Historical pricing is reconstructed socially." />
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
      <div className="feature-grid">
        <Card title="Quote by feeling" subtitle="Margin control through intuition." />
        <Card title="Verbal sales orders" subtitle="Confirmed if everyone nods." />
        <Card title="Manual discount guessing" subtitle="Special terms remain highly personalized." />
        <Card title="Customer relationship memory" subtitle="CRM maintained by senior colleagues." />
      </div>
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
      <div className="feature-grid">
        <Card title="Theoretical stock" subtitle="Current quantities are philosophically available." />
        <Card title="Approximate locations" subtitle="Bin precision improves if you ask around." />
        <Card title="Annual surprise inventory" subtitle="Reality is discovered once per year." />
        <Card title="Serial numbers if someone wrote them down" subtitle="Traceability depends on handwriting." />
      </div>

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
        </Card>
      </div>
    </div>
  );
}

function ProductionModule() {
  return (
    <div className="module-stack">
      <SectionHeader title="Production" subtitle="Let's just make it." />
      <div className="feature-grid">
        <Card title="Verbal work orders" subtitle="Capacity planning through urgency." />
        <Card title="Routing from experience" subtitle="Process know-how remains beautifully undocumented." />
        <Card title="BOM from memory" subtitle="Component structures emerge under pressure." />
        <Card title="Real-time firefighting" subtitle="Exception handling is the default workflow." />
      </div>
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
      <div className="feature-grid">
        <Card title="Manual checking" subtitle="System confirmation starts with walking around." />
        <Card title="Running between departments" subtitle="Integrated processes with cardio." />
        <Card title="Crisis-based replenishment" subtitle="Reorder points triggered by stress." />
        <Card title="Blame routing" subtitle="Cross-functional accountability workflow." />
      </div>
      <Card title="Material Escalation Workflow" subtitle="Standard operating pattern.">
        <ol className="workflow-list">
          <li>Production asks for material</li>
          <li>Warehouse checks memory</li>
          <li>Purchasing says it was ordered</li>
          <li>Finance asks for document</li>
          <li>Everyone opens Excel</li>
        </ol>
      </Card>
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
      <Card title="Analytics Workspace" subtitle="Chart rendering remains blocked by reality.">
        <div className="empty-chart">
          <div className="empty-chart-grid" />
          <p>No chart available because nobody entered anything.</p>
        </div>
      </Card>
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
    </div>
  );
}

const moduleMap = {
  dashboard: DashboardModule,
  finance: FinanceModule,
  purchasing: PurchasingModule,
  sales: SalesModule,
  warehouse: WarehouseModule,
  production: ProductionModule,
  supply: SupplyModule,
  reports: ReportsModule,
  settings: SettingsModule,
};

export default function App() {
  const [activeModule, setActiveModule] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const ActiveModule = moduleMap[activeModule];

  return (
    <Layout
      activeModule={activeModule}
      onSelectModule={setActiveModule}
      sidebarOpen={sidebarOpen}
      onToggleSidebar={setSidebarOpen}
    >
      <ActiveModule />
    </Layout>
  );
}
