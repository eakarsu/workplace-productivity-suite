export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "meeting-intelligence",
    "label": "Meeting Intelligence",
    "description": "Open Meeting Intelligence workflows elevated from AiMeetingAgent.",
    "href": "/meeting-notes",
    "sourceProjects": [
      "AiMeetingAgent"
    ],
    "examples": [
      "Meeting Notes",
      "Transcript Summaries",
      "Action Items",
      "CRM/Task Sync"
    ],
    "count": 1
  },
  {
    "id": "ai-assistant",
    "label": "AI Assistant",
    "description": "Run source-derived AI assistant workflows and prompts.",
    "href": "/features/ai-tools",
    "sourceProjects": [
      "AIProjectManager"
    ],
    "examples": [
      "backend/routes/ai",
      "backend/routes/ai-burnout-detection",
      "backend/routes/gap-no-ai-autoassignment-by-skills-and-workload",
      "backend/routes/gap-no-ai-burnoutsentiment-detection-across-stan",
      "backend/routes/gap-no-ai-meeting-transcript-summarization-to-ta",
      "backend/routes/gap-no-ai-timeline-estimation-under-velocitydepe"
    ],
    "count": 1
  }
];
