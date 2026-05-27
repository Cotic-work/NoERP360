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
  { title: "Data Completeness", value: "0%", tone: "danger" },
  { title: "User Adoption", value: "We'll start next Monday", tone: "info" },
  { title: "Inventory Accuracy", value: "Probably", tone: "warning" },
  { title: "Open Issues", value: "Ask Joze", tone: "neutral" },
  { title: "System Usage", value: "Optional", tone: "info" },
];

export const activityFeed = [
  "Sales order created verbally",
  "Warehouse stock confirmed by feeling",
  "Production plan updated in someone's head",
  "Finance closing postponed until someone finds the Excel file",
  "Purchase request approved during a hallway conversation",
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
  },
  {
    period: "May 2026",
    account: "Expense accruals",
    amount: "Someone estimated it",
    status: "Discussed but not posted",
  },
  {
    period: "April 2026",
    account: "Inventory value",
    amount: "Depends which sheet you open",
    status: "Pending reconciliation miracle",
  },
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

export const reportCards = [
  ["Inventory Valuation", "Unavailable"],
  ["Sales Forecast", "Optimistic"],
  ["Production Efficiency", "Depends who you ask"],
  ["Financial Result", "Excel pending"],
];

export const settingsToggles = [
  { key: "requireEntry", label: "Require data entry", enabled: false },
  { key: "discipline", label: "Enforce process discipline", enabled: false },
  { key: "excel", label: "Allow Excel overrides", enabled: true },
  { key: "joze", label: "Ask Joze mode", enabled: true },
  { key: "legacy", label: "Legacy mindset compatibility", enabled: true },
];
