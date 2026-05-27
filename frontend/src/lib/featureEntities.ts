export type EntityRecord = { id: string; name: string; status: string; owner: string; amount?: string; dueDate?: string; priority?: string };
export type FeatureEntitySet = { title: string; columns: string[]; rows: EntityRecord[] };
const COLUMNS = ['Name', 'Status', 'Owner', 'Amount', 'Due Date', 'Priority'];
const entitySeeds = [
  ['workspaces', 'Workspaces Records', 'Workspaces priority queue', 'Open', 'Workspaces exception list', 'Operations Lead', '$0'],
  ['tasks', 'Tasks Records', 'Tasks priority queue', 'Review', 'Tasks exception list', 'Operations Lead', '$0'],
  ['projects', 'Projects Records', 'Projects priority queue', 'Action needed', 'Projects exception list', 'Operations Lead', '$0'],
  ['meetings', 'Meetings Records', 'Meetings priority queue', 'Open', 'Meetings exception list', 'Operations Lead', '$0'],
  ['decisions', 'Decisions Records', 'Decisions priority queue', 'Review', 'Decisions exception list', 'Operations Lead', '$0'],
  ['docs', 'Docs Records', 'Docs priority queue', 'Action needed', 'Docs exception list', 'Operations Lead', '$0'],
  ['approvals', 'Approvals Records', 'Approvals priority queue', 'Open', 'Approvals exception list', 'Operations Lead', '$0'],
  ['okrs', 'OKRs Records', 'OKRs priority queue', 'Review', 'OKRs exception list', 'Operations Lead', '$0'],
  ['risks', 'Risks Records', 'Risks priority queue', 'Action needed', 'Risks exception list', 'Governance Lead', '$0'],
  ['resources', 'Resources Records', 'Resources priority queue', 'Open', 'Resources exception list', 'Governance Lead', '$0'],
  ['announcements', 'Announcements Records', 'Announcements priority queue', 'Review', 'Announcements exception list', 'Intelligence Layer Lead', '$0'],
  ['reports', 'Reports Records', 'Reports priority queue', 'Action needed', 'Reports exception list', 'Intelligence Layer Lead', '$0'],
  ["meeting-notes","Meeting Notes Records","Meeting Notes operating queue","Open","Meeting Notes follow-up list","Meeting Intelligence","$0"],
  ["transcript-summaries","Transcript Summaries Records","Transcript Summaries operating queue","Review","Transcript Summaries follow-up list","Meeting Intelligence","$0"],
  ["action-items","Action Items Records","Action Items operating queue","Review","Action Items follow-up list","Meeting Intelligence","$0"],
  ["crm-task-sync","CRM/Task Sync Records","CRM/Task Sync operating queue","Review","CRM/Task Sync follow-up list","Meeting Intelligence","$0"],
  ['documents', 'Documents Records', 'Documents priority queue', 'Open', 'Documents exception list', 'Core Platform Lead', '$0'],
  ['notifications', 'Notifications Records', 'Notifications priority queue', 'Review', 'Notifications exception list', 'Core Platform Lead', '$0'],
  ['integrations', 'Integrations Records', 'Integrations priority queue', 'Action needed', 'Integrations exception list', 'Core Platform Lead', '$0'],
  ['profiles', 'Profiles Records', 'Profiles priority queue', 'Open', 'Profiles exception list', 'Core Platform Lead', '$0'],
  ['ai-assistant', 'AI Assistant Records', 'AI Assistant priority queue', 'Review', 'AI Assistant exception list', 'Intelligence Layer Lead', '$0'],
  ['ai-tools', 'AI Tools Records', 'AI Tools priority queue', 'Action needed', 'AI Tools exception list', 'Intelligence Layer Lead', '$0'],
] as const;

function buildSet(slug: string, title: string, firstName: string, firstStatus: string, secondName: string, owner: string, amount: string): FeatureEntitySet {
  return {
    title,
    columns: COLUMNS,
    rows: [
      { id: `${slug}-1`, name: firstName, status: firstStatus, owner, amount, dueDate: '2026-05-27', priority: 'High' },
      { id: `${slug}-2`, name: secondName, status: 'Review', owner: 'Operations', amount, dueDate: '2026-05-29', priority: 'Medium' },
      { id: `${slug}-3`, name: `${title.replace(' Records', '')} exception queue`, status: 'Queued', owner: 'Team Lead', amount: '$0', dueDate: '2026-05-30', priority: 'Medium' },
    ],
  };
}

export const featureEntitiesBySlug: Record<string, FeatureEntitySet> = Object.fromEntries(entitySeeds.map(([slug, title, firstName, firstStatus, secondName, owner, amount]) => [slug, buildSet(slug, title, firstName, firstStatus, secondName, owner, amount)]));
