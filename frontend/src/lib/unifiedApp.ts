import {
  Activity,
  BarChart3,
  Bell,
  Blocks,
  Database,
  Bot,
  BriefcaseBusiness,
  CalendarCheck,
  ClipboardList,
  FileText,
  Files,
  LayoutDashboard,
  LucideIcon,
  PackageCheck,
  Plug,
  ShieldCheck,
  UserRound,
  Users,
  Workflow,
} from 'lucide-react';

export type NavItem = { label: string; href: string; icon: LucideIcon };
export type FeatureDefinition = { title: string; href: string; category: string; summary: string; bullets: string[] };
export type PageDefinition = {
  title: string;
  eyebrow: string;
  subtitle: string;
  category: string;
  summary: string;
  bullets: string[];
  metrics: Array<{ label: string; value: string; note: string }>;
};
export type FeatureContext = {
  sourceOwners: string[];
  operatingQueues: string[];
  outputs: string[];
  relatedRoutes: Array<{ label: string; href: string }>;
};

const features = [
  {
    slug: 'workspaces',
    title: 'Workspaces',
    href: '/workspaces',
    category: 'Operations',
    icon: BriefcaseBusiness,
    summary: 'Workspaces workflow normalized for the Workplace Productivity suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Workspaces queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Workspaces', value: '24', note: 'Active' }, { label: 'Exceptions', value: '3', note: 'Need review' }, { label: 'Due Soon', value: '5', note: 'Next 14 days' }],
  },
  {
    slug: 'tasks',
    title: 'Tasks',
    href: '/tasks',
    category: 'Operations',
    icon: Users,
    summary: 'Tasks workflow normalized for the Workplace Productivity suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Tasks queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Tasks', value: '35', note: 'Active' }, { label: 'Exceptions', value: '4', note: 'Need review' }, { label: 'Due Soon', value: '6', note: 'Next 14 days' }],
  },
  {
    slug: 'projects',
    title: 'Projects',
    href: '/projects',
    category: 'Operations',
    icon: ClipboardList,
    summary: 'Projects workflow normalized for the Workplace Productivity suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Projects queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Projects', value: '46', note: 'Active' }, { label: 'Exceptions', value: '5', note: 'Need review' }, { label: 'Due Soon', value: '7', note: 'Next 14 days' }],
  },
  {
    slug: 'meetings',
    title: 'Meetings',
    href: '/meetings',
    category: 'Operations',
    icon: CalendarCheck,
    summary: 'Meetings workflow normalized for the Workplace Productivity suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Meetings queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Meetings', value: '57', note: 'Active' }, { label: 'Exceptions', value: '6', note: 'Need review' }, { label: 'Due Soon', value: '8', note: 'Next 14 days' }],
  },
  {
    slug: 'decisions',
    title: 'Decisions',
    href: '/decisions',
    category: 'Operations',
    icon: Activity,
    summary: 'Decisions workflow normalized for the Workplace Productivity suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Decisions queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Decisions', value: '68', note: 'Active' }, { label: 'Exceptions', value: '7', note: 'Need review' }, { label: 'Due Soon', value: '9', note: 'Next 14 days' }],
  },
  {
    slug: 'docs',
    title: 'Docs',
    href: '/docs',
    category: 'Operations',
    icon: Workflow,
    summary: 'Docs workflow normalized for the Workplace Productivity suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Docs queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Docs', value: '79', note: 'Active' }, { label: 'Exceptions', value: '8', note: 'Need review' }, { label: 'Due Soon', value: '10', note: 'Next 14 days' }],
  },
  {
    slug: 'approvals',
    title: 'Approvals',
    href: '/approvals',
    category: 'Operations',
    icon: FileText,
    summary: 'Approvals workflow normalized for the Workplace Productivity suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Approvals queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Approvals', value: '90', note: 'Active' }, { label: 'Exceptions', value: '9', note: 'Need review' }, { label: 'Due Soon', value: '11', note: 'Next 14 days' }],
  },
  {
    slug: 'okrs',
    title: 'OKRs',
    href: '/okrs',
    category: 'Operations',
    icon: ShieldCheck,
    summary: 'OKRs workflow normalized for the Workplace Productivity suite with records, queues, approvals, audit, and reporting.',
    bullets: ['OKRs queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'OKRs', value: '101', note: 'Active' }, { label: 'Exceptions', value: '10', note: 'Need review' }, { label: 'Due Soon', value: '12', note: 'Next 14 days' }],
  },
  {
    slug: 'risks',
    title: 'Risks',
    href: '/risks',
    category: 'Governance',
    icon: BarChart3,
    summary: 'Risks workflow normalized for the Workplace Productivity suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Risks queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Risks', value: '112', note: 'Active' }, { label: 'Exceptions', value: '11', note: 'Need review' }, { label: 'Due Soon', value: '13', note: 'Next 14 days' }],
  },
  {
    slug: 'resources',
    title: 'Resources',
    href: '/resources',
    category: 'Governance',
    icon: PackageCheck,
    summary: 'Resources workflow normalized for the Workplace Productivity suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Resources queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Resources', value: '123', note: 'Active' }, { label: 'Exceptions', value: '12', note: 'Need review' }, { label: 'Due Soon', value: '14', note: 'Next 14 days' }],
  },
  {
    slug: 'announcements',
    title: 'Announcements',
    href: '/announcements',
    category: 'Intelligence Layer',
    icon: Bell,
    summary: 'Announcements workflow normalized for the Workplace Productivity suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Announcements queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Announcements', value: '134', note: 'Active' }, { label: 'Exceptions', value: '13', note: 'Need review' }, { label: 'Due Soon', value: '15', note: 'Next 14 days' }],
  },
  {
    slug: 'reports',
    title: 'Reports',
    href: '/reports',
    category: 'Intelligence Layer',
    icon: Files,
    summary: 'Reports workflow normalized for the Workplace Productivity suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Reports queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Reports', value: '145', note: 'Active' }, { label: 'Exceptions', value: '14', note: 'Need review' }, { label: 'Due Soon', value: '16', note: 'Next 14 days' }],
  },
  {
    slug: "meeting-notes",
    title: "Meeting Notes",
    href: "/meeting-notes",
    category: "Meeting Intelligence",
    icon: FileText,
    summary: "Meeting capture, structured notes, summaries, attendees, and decision history.",
    bullets: ["Notes","Decisions","Attendees"],
    metrics: [
      { label: "Meeting Notes", value: "32", note: 'Active' },
      { label: 'Review', value: "6", note: 'Needs attention' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "transcript-summaries",
    title: "Transcript Summaries",
    href: "/transcript-summaries",
    category: "Meeting Intelligence",
    icon: ClipboardList,
    summary: "AI transcript cleanup, topic segmentation, and executive-ready meeting summaries.",
    bullets: ["Transcript cleanup","Topic segments","Summary"],
    metrics: [
      { label: "Transcript Summaries", value: "45", note: 'Active' },
      { label: 'Review', value: "7", note: 'Needs attention' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "action-items",
    title: "Action Items",
    href: "/action-items",
    category: "Meeting Intelligence",
    icon: Activity,
    summary: "Owner-assigned tasks, due dates, blockers, and follow-up tracking from meetings.",
    bullets: ["Owners","Due dates","Follow-ups"],
    metrics: [
      { label: "Action Items", value: "58", note: 'Active' },
      { label: 'Review', value: "8", note: 'Needs attention' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "crm-task-sync",
    title: "CRM/Task Sync",
    href: "/crm-task-sync",
    category: "Meeting Intelligence",
    icon: BarChart3,
    summary: "Sync meeting outcomes into CRM, project tools, email follow-ups, and task queues.",
    bullets: ["CRM sync","Task sync","Follow-up emails"],
    metrics: [
      { label: "CRM/Task Sync", value: "71", note: 'Active' },
      { label: 'Review', value: "9", note: 'Needs attention' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "action-item-followup",
    title: "Action Item Follow-Up",
    href: "/action-item-followup",
    category: "Meeting Intelligence",
    icon: Workflow,
    summary: "Owners, deadlines, blockers, reminders, and completion tracking from meeting notes.",
    bullets: ["Source-derived workflow","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Action Item Follow-Up", value: "32", note: 'Active items' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "transcript-summary",
    title: "Transcript Summary",
    href: "/transcript-summary",
    category: "Meeting Intelligence",
    icon: Workflow,
    summary: "Long transcript summarization, speaker highlights, risks, and executive-ready recap.",
    bullets: ["Source-derived workflow","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Transcript Summary", value: "40", note: 'Active items' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: 'documents',
    title: 'Documents',
    href: '/documents',
    category: 'Core Platform',
    icon: Files,
    summary: 'Workplace Productivity documents, packets, evidence, attachments, and exports.',
    bullets: ['Documents', 'Uploads', 'Exports'],
    metrics: [{ label: 'Documents', value: '640', note: 'Tracked' }, { label: 'In Review', value: '42', note: 'Open' }, { label: 'Uploaded', value: '88', note: 'This month' }],
  },
  {
    slug: 'notifications',
    title: 'Notifications',
    href: '/notifications',
    category: 'Core Platform',
    icon: Bell,
    summary: 'Workplace Productivity alerts, reminders, exceptions, and approvals.',
    bullets: ['Alerts', 'Reminders', 'Exceptions'],
    metrics: [{ label: 'Unread', value: '34', note: 'Needs review' }, { label: 'Critical', value: '7', note: 'Escalated' }, { label: 'Resolved', value: '211', note: 'This week' }],
  },
  {
    slug: 'integrations',
    title: 'Integrations',
    href: '/integrations',
    category: 'Core Platform',
    icon: Plug,
    summary: 'Workplace Productivity source-system connector health and sync status.',
    bullets: ['Connectors', 'Sync', 'Warnings'],
    metrics: [{ label: 'Connectors', value: '12', note: 'Configured' }, { label: 'Warnings', value: '3', note: 'Need attention' }, { label: 'Last Sync', value: '5m', note: 'Source data' }],
  },
  {
    slug: 'profiles',
    title: 'Profiles',
    href: '/profiles',
    category: 'Core Platform',
    icon: UserRound,
    summary: 'Workplace Productivity users, roles, teams, permissions, and ownership settings.',
    bullets: ['Users', 'Roles', 'Teams'],
    metrics: [{ label: 'Users', value: '72', note: 'Active' }, { label: 'Teams', value: '9', note: 'Configured' }, { label: 'Access Reviews', value: '5', note: 'Open' }],
  },
] as const;

const aiFeatures = [
  {
    slug: 'ai-assistant',
    title: 'AI Assistant',
    href: '/features/ai-assistant',
    category: 'Intelligence Layer',
    icon: Bot,
    summary: 'Workplace Productivity assistant for triage, summaries, drafting, recommendations, and operational review.',
    bullets: ['Triage support', 'Drafting', 'Review guidance'],
    metrics: [
      { label: 'Sessions', value: '128', note: 'Last 24 hours' },
      { label: 'Drafts', value: '204', note: 'Generated' },
      { label: 'Escalations', value: '14', note: 'Expert review' },
    ],
  },
  {
    slug: 'ai-tools',
    title: 'AI Tools',
    href: '/features/ai-tools',
    category: 'Intelligence Layer',
    icon: Activity,
    summary: 'Targeted AI tools for scoring, classification, extraction, exception review, and reporting.',
    bullets: ['Scoring', 'Classification', 'Exception review'],
    metrics: [
      { label: 'Runs', value: '318', note: 'Last 24 hours' },
      { label: 'Signals', value: '88', note: 'New alerts' },
      { label: 'Accepted', value: '117', note: 'Reviewer accepted' },
    ],
  },
] as const;

const allFeatures = [...features, ...aiFeatures];

export const primaryNav: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'All Features', href: '/features', icon: Blocks },
  { label: 'Documents', href: '/documents', icon: Files },
  { label: 'Source Tables', href: '/source-tables', icon: Database },
  { label: 'Profiles', href: '/profiles', icon: UserRound },
];

export const featureNav: NavItem[] = allFeatures.map((feature) => ({ label: feature.title, href: feature.href, icon: feature.icon }));
export const featureCatalog: FeatureDefinition[] = allFeatures.map((feature) => ({ title: feature.title, href: feature.href, category: feature.category, summary: feature.summary, bullets: [...feature.bullets] }));

export const featureFamilies = [
  { name: 'Operations', features: ['Workspaces', 'Tasks', 'Projects', 'Meetings', 'Decisions', 'Docs', 'Approvals', 'OKRs'] },
  { name: 'Operations', features: ['Workspaces', 'Tasks', 'Projects', 'Meetings', 'Decisions', 'Docs', 'Approvals', 'OKRs'] },
  { name: 'Governance', features: ['Risks', 'Resources'] },
  { name: 'Meeting Intelligence', features: ["Meeting Notes","Transcript Summaries","Action Items","CRM/Task Sync"] },
  { name: 'Intelligence Layer', features: ['Announcements', 'Reports', 'AI Assistant', 'AI Tools'] },
  { name: 'Core Platform', features: ['Documents', 'Notifications', 'Integrations', 'Profiles'] },
];

function toPage(feature: (typeof allFeatures)[number]): PageDefinition {
  return {
    title: feature.title,
    eyebrow: feature.category,
    subtitle: feature.summary,
    category: feature.category,
    summary: `${feature.title} is normalized from source applications into one merged suite workflow.`,
    bullets: [...feature.bullets],
    metrics: [...feature.metrics],
  };
}

export const pageRegistry: Record<string, PageDefinition> = Object.fromEntries(features.map((feature) => [feature.slug, toPage(feature)]));
export const aiFeatureRegistry: Record<string, PageDefinition> = Object.fromEntries(aiFeatures.map((feature) => [feature.slug, toPage(feature)]));
export const featureContexts: Record<string, FeatureContext> = Object.fromEntries(
  allFeatures.map((feature) => [
    feature.title,
    {
      sourceOwners: ['AIProjectManager', 'AIMeetingSummarizer where applicable'],
      operatingQueues: [`${feature.title} records`, `${feature.title} approvals`, `${feature.title} exceptions`],
      outputs: [`${feature.title} dashboard`, `${feature.title} export`, `${feature.title} audit trail`],
      relatedRoutes: [{ label: 'Dashboard', href: '/dashboard' }, { label: 'All Features', href: '/features' }, { label: 'Reports', href: '/reports' }],
    },
  ]),
);
