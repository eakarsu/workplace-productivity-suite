export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  { name: 'AIProjectManager', ownership: 'Workspaces source capabilities and workflows', coverage: ['Workspaces', 'Tasks', 'Projects'] },
  { name: 'AIMeetingSummarizer', ownership: 'Tasks source capabilities and workflows', coverage: ['Meetings', 'Decisions', 'Docs'] },
  { name: 'AIDocumentAssistant', ownership: 'Projects source capabilities and workflows', coverage: ['Approvals', 'OKRs', 'Risks'] },
  { name: 'AIWorkplaceOps', ownership: 'Meetings source capabilities and workflows', coverage: ['Resources', 'Announcements', 'Reports'] },
];
export const dashboardMetrics: Metric[] = [
  { label: 'Workspaces', value: '84', note: 'Active' },
  { label: 'Tasks', value: '61', note: 'Open' },
  { label: 'Projects', value: '37', note: 'Need review' },
  { label: 'AI Tool Runs', value: '318', note: 'Last 24 hours' },
];
export const healthMetrics: Metric[] = [
  { label: 'Exceptions', value: '28', note: 'Open' },
  { label: 'Approvals', value: '46', note: 'Pending' },
  { label: 'Documents', value: '640', note: 'Tracked' },
  { label: 'Audit Items', value: '91%', note: 'Current' },
];
export const dashboardModules = ['Workspaces operating view', 'Tasks operating view', 'Projects operating view', 'Meetings operating view', 'Decisions operating view', 'Docs operating view', 'Approvals operating view', 'OKRs operating view'];
export const workflowHighlights = ['Workspaces workflow with records, approvals, audit, and reporting', 'Tasks workflow with records, approvals, audit, and reporting', 'Projects workflow with records, approvals, audit, and reporting', 'Meetings workflow with records, approvals, audit, and reporting', 'Decisions workflow with records, approvals, audit, and reporting'];
