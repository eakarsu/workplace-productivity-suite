import type { FeatureContext, FeatureDefinition, PageDefinition } from '@/lib/unifiedApp';
import type { FeatureEntitySet } from '@/lib/featureEntities';
import type { FeatureSurface } from '@/lib/featureSurfaces';

export const sourceCustomFeatureCatalog: FeatureDefinition[] = [
  {
    "title": "AI Project Manager Source Feature",
    "href": "/features/source-ai-project-manager",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIProjectManager: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "14 AI, prompt, tool, or workflow files captured"
    ]
  }
];

export const sourceCustomFeatureFamilies: Array<{ name: string; features: string[] }> = [
  {
    "name": "Source Project Features",
    "features": [
      "AI Project Manager Source Feature"
    ]
  }
];

export const sourceCustomPageRegistry: Record<string, PageDefinition> = {
  "source-ai-project-manager": {
    "title": "AI Project Manager Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AIProjectManager, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIProjectManager: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "14 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "14",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  }
};

export const sourceCustomFeatureContexts: Record<string, FeatureContext> = {
  "AI Project Manager Source Feature": {
    "sourceOwners": [
      "AIProjectManager"
    ],
    "operatingQueues": [
      "Main",
      "AI History",
      "Cf Agentic Sprint Planner",
      "Gap No AI Autoassignment By Skills And Workload"
    ],
    "outputs": [
      "AI Project Manager merged workflow register",
      "AI Project Manager API and route coverage map",
      "AI Project Manager AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  }
};

export const sourceCustomFeatureSurfaceBySlug: Record<string, FeatureSurface> = {
  "source-ai-project-manager": {
    "workItems": [
      {
        "id": "source-ai-project-manager-work-1",
        "item": "Main",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/main.jsx"
      },
      {
        "id": "source-ai-project-manager-work-2",
        "item": "AI History",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIHistory.jsx"
      },
      {
        "id": "source-ai-project-manager-work-3",
        "item": "Cf Agentic Sprint Planner",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/CfAgenticSprintPlanner.jsx"
      },
      {
        "id": "source-ai-project-manager-work-4",
        "item": "Gap No AI Autoassignment By Skills And Workload",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/GapNoAiAutoassignmentBySkillsAndWorkload.jsx"
      },
      {
        "id": "source-ai-project-manager-work-5",
        "item": "Gap No AI Burnoutsentiment Detection Across Stan",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/GapNoAiBurnoutsentimentDetectionAcrossStan.jsx"
      },
      {
        "id": "source-ai-project-manager-work-6",
        "item": "Gap No AI Meeting Transcript Summarization To Ta",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/GapNoAiMeetingTranscriptSummarizationToTa.jsx"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-project-manager-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-project-manager-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-project-manager-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-project-manager-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-project-manager-log-1",
        "message": "Deep-merge feature generated from AIProjectManager",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-project-manager-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  }
};

export const sourceCustomFeatureEntitiesBySlug: Record<string, FeatureEntitySet> = {
  "source-ai-project-manager": {
    "title": "AI Project Manager Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-project-manager-entity-1",
        "name": "Main",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-project-manager-entity-2",
        "name": "AI History",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-project-manager-entity-3",
        "name": "Cf Agentic Sprint Planner",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-project-manager-entity-4",
        "name": "Gap No AI Autoassignment By Skills And Workload",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-project-manager-entity-5",
        "name": "Gap No AI Burnoutsentiment Detection Across Stan",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  }
};

export const sourceCustomFeatureLinksByProject: Record<string, string> = {
  "AIProjectManager": "/features/source-ai-project-manager"
};
