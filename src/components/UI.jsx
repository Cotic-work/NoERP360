export function SectionHeader({ eyebrow = "Module", title, subtitle, action }) {
  return (
    <div className="section-header">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h3>{title}</h3>
        {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
      </div>
      {action}
    </div>
  );
}

export function Card({ title, subtitle, value, children, tone = "default" }) {
  return (
    <section className={`card tone-${tone}`}>
      {title ? <p className="card-title">{title}</p> : null}
      {value ? <div className="card-value">{value}</div> : null}
      {subtitle ? <p className="card-subtitle">{subtitle}</p> : null}
      {children}
    </section>
  );
}

export function Badge({ children, tone = "neutral" }) {
  return <span className={`badge ${tone}`}>{children}</span>;
}

export function Table({ columns, rows }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={`${row[columns[0].key]}-${index}`}>
              {columns.map((column) => (
                <td key={column.key}>{row[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Toggle({ label, enabled, onChange }) {
  return (
    <label className="toggle-row">
      <span className="toggle-label">{label}</span>
      <button
        type="button"
        className={`toggle ${enabled ? "enabled" : ""}`}
        onClick={onChange}
        aria-pressed={enabled}
      >
        <span className="toggle-handle" />
      </button>
    </label>
  );
}
