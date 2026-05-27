export const modules = [
  { id: "dashboard", label: "Dashboard", icon: "◫" },
  { id: "finance", label: "Finance & Accounting", icon: "◎" },
  { id: "purchasing", label: "Purchasing", icon: "◌" },
  { id: "sales", label: "Sales", icon: "△" },
  { id: "warehouse", label: "Warehouse Management", icon: "▣" },
  { id: "production", label: "Production", icon: "◈" },
  { id: "supply", label: "Production Supply", icon: "↹" },
  { id: "reports", label: "Reports", icon: "◧" },
  { id: "settings", label: "Settings", icon: "☰" },
];

export const dashboardKpis = [
  { title: "Data Completeness", value: "0%", meta: "No one blinked first", tone: "danger" },
  { title: "User Adoption", value: "We'll start next Monday", meta: "Monday remains unconfirmed", tone: "info" },
  { title: "Inventory Accuracy", value: "Probably", meta: "Confidence exceeds evidence", tone: "warning" },
  { title: "Open Issues", value: "Ask Joze", meta: "Single point of institutional memory", tone: "neutral" },
  { title: "System Usage", value: "Optional", meta: "Culture-led deployment", tone: "info" },
];

export const commandCenterStats = [
  { label: "Orders in verbal queue", value: "18", caption: "Prioritized by who shouted last" },
  { label: "Excel files in circulation", value: "27", caption: "Version control remains conversational" },
  { label: "Critical materials located", value: "3/11", caption: "The rest are spiritually available" },
];

export const activityFeed = [
  { time: "08:14", team: "Sales", event: "Sales order created verbally", tone: "info" },
  { time: "08:42", team: "Warehouse", event: "Warehouse stock confirmed by feeling", tone: "warning" },
  { time: "09:05", team: "Production", event: "Production plan updated in someone's head", tone: "neutral" },
  { time: "09:31", team: "Finance", event: "Finance closing postponed until someone finds the Excel file", tone: "danger" },
  { time: "10:02", team: "Purchasing", event: "Supplier lead time accepted on mutual optimism", tone: "info" },
];

export const moduleSpotlights = [
  {
    module: "Finance",
    status: "Spreadsheet pending",
    note: "Cash position will become clearer once the shared drive is searched properly.",
  },
  {
    module: "Warehouse",
    status: "Physically somewhere",
    note: "Cycle counting remains blocked by confidence in last week's recollection.",
  },
  {
    module: "Production",
    status: "Escalated verbally",
    note: "Work center priorities were updated near the coffee machine and are considered binding.",
  },
];

export const financeCards = [
  ["General Ledger", "Not posted yet"],
  ["Accounts Receivable", "Customer will probably pay"],
  ["Accounts Payable", "Supplier will call if urgent"],
  ["Month-end Closing", "Before audit, hopefully"],
];

export const financeTable = [
  {
    period: "May 2026",
    account: "Revenue",
    amount: "Approximately positive",
    status: "Awaiting spreadsheet alignment",
    owner: "Commercial memory",
  },
  {
    period: "May 2026",
    account: "Expense accruals",
    amount: "Someone estimated it",
    status: "Discussed but not posted",
    owner: "Finance hallway review",
  },
  {
    period: "April 2026",
    account: "Inventory value",
    amount: "Depends which sheet you open",
    status: "Pending reconciliation miracle",
    owner: "Warehouse legend",
  },
];

export const financeExceptions = [
  ["Bank reconciliation", "Waiting for the latest export from an unspecified desktop"],
  ["Fixed assets", "Still tracked through legacy intuition and one PDF printout"],
  ["Audit readiness", "Strong narrative, limited supporting evidence"],
];

export const purchasingFeatures = [
  {
    title: "Supplier memory list",
    subtitle: "Key vendors are stored in three people's phones.",
  },
  {
    title: "Purchase order by phone",
    subtitle: "Formal approval occurs during the call.",
  },
  {
    title: "Delivery date optimism",
    subtitle: "ETA remains a trust-based metric.",
  },
  {
    title: "Price from last time, probably",
    subtitle: "Historical pricing is reconstructed socially.",
  },
];

export const supplierMemory = [
  { supplier: "Reliable Metals", buyer: "Miran", lastPrice: "Same as January, allegedly", leadTime: "Soon enough" },
  { supplier: "Fast Plastics", buyer: "Nina", lastPrice: "Written in an email somewhere", leadTime: "Before it becomes a problem" },
  { supplier: "Critical Screws Ltd.", buyer: "Everyone", lastPrice: "Negotiated emotionally", leadTime: "Expedite by calling again" },
];

export const salesFeatures = [
  ["Quote by feeling", "Margin control through intuition."],
  ["Verbal sales orders", "Confirmed if everyone nods."],
  ["Manual discount guessing", "Special terms remain highly personalized."],
  ["Customer relationship memory", "CRM maintained by senior colleagues."],
];

export const salesQuotes = [
  {
    customer: "Regular one",
    price: "Same as last time",
    discount: "Special",
    status: "Promised",
  },
  {
    customer: "Big account",
    price: "We'll see",
    discount: "Strategic",
    status: "Verbal approval",
  },
  {
    customer: "New prospect",
    price: "Depends on mood",
    discount: "Maybe",
    status: "Follow up eventually",
  },
];

export const commercialPipeline = [
  ["Forecast accuracy", "Anchored in confidence rather than mathematics"],
  ["Contract visibility", "Latest version depends on who forwarded what"],
  ["Margin review", "Discussed after the deal is already promised"],
];

export const warehouseFeatures = [
  ["Theoretical stock", "Current quantities are philosophically available."],
  ["Approximate locations", "Bin precision improves if you ask around."],
  ["Annual surprise inventory", "Reality is discovered once per year."],
  ["Serial numbers if someone wrote them down", "Traceability depends on handwriting."],
];

export const warehouseLocations = [
  { code: "A1", label: "Maybe full", tone: "info" },
  { code: "B2", label: "Ask warehouse", tone: "warning" },
  { code: "C3", label: "Do not touch", tone: "danger" },
  { code: "X9", label: "Lost but important", tone: "neutral" },
];

export const warehouseBadges = [
  "Probably available",
  "Seen last week",
  "Someone knows",
];

export const warehouseNotes = [
  ["Inbound staging", "Occupied by items awaiting identification"],
  ["Pick confirmations", "Handled via nods and forklift instinct"],
  ["Count variance", "Invisible until year-end emotional processing"],
];

export const productionFeatures = [
  ["Verbal work orders", "Capacity planning through urgency."],
  ["Routing from experience", "Process know-how remains beautifully undocumented."],
  ["BOM from memory", "Component structures emerge under pressure."],
  ["Real-time firefighting", "Exception handling is the default workflow."],
];

export const productionOrders = [
  {
    workOrder: "Urgent",
    materialStatus: "Should be OK",
    operator: "Whoever is free",
    completion: "Soon",
  },
  {
    workOrder: "Very urgent",
    materialStatus: "Inbound allegedly",
    operator: "Night shift maybe",
    completion: "Today-ish",
  },
  {
    workOrder: "Legacy priority",
    materialStatus: "Hidden somewhere",
    operator: "The experienced one",
    completion: "After setup drama",
  },
];

export const productionSignals = [
  ["Setup discipline", "Relies on one operator remembering the old way"],
  ["Quality feedback", "Escalated only when visibly undeniable"],
  ["Capacity visibility", "Updated through eye contact and urgency"],
];

export const supplyFeatures = [
  ["Manual checking", "System confirmation starts with walking around."],
  ["Running between departments", "Integrated processes with cardio."],
  ["Crisis-based replenishment", "Reorder points triggered by stress."],
  ["Blame routing", "Cross-functional accountability workflow."],
];

export const supplyWorkflow = [
  "Production asks for material",
  "Warehouse checks memory",
  "Purchasing says it was ordered",
  "Finance asks for document",
  "Everyone opens Excel",
];

export const supplyEscalations = [
  ["Shortage root cause", "Known emotionally, not transactionally"],
  ["Material reservations", "Reserved in principle"],
  ["Department sync", "Achieved when everyone joins the same complaint"],
];

export const reportCards = [
  ["Inventory Valuation", "Unavailable"],
  ["Sales Forecast", "Optimistic"],
  ["Production Efficiency", "Depends who you ask"],
  ["Financial Result", "Excel pending"],
];

export const reportLibrary = [
  ["Executive dashboard", "Looks decisive, sourced from assumptions"],
  ["Margin analysis", "Requires three files and one brave analyst"],
  ["Traceability report", "Best generated after interviewing the team"],
];

export const settingsToggles = [
  { key: "requireEntry", label: "Require data entry", enabled: false },
  { key: "discipline", label: "Enforce process discipline", enabled: false },
  { key: "excel", label: "Allow Excel overrides", enabled: true },
  { key: "joze", label: "Ask Joze mode", enabled: true },
  { key: "legacy", label: "Legacy mindset compatibility", enabled: true },
];

export const settingsPolicies = [
  ["Approval matrix", "Maintained verbally by whoever has seniority that day"],
  ["Change management", "Handled carefully as long as nothing changes"],
  ["Data retention", "Mostly preserved in inboxes and personal folders"],
];
