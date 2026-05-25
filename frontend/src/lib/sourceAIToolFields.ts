export type SourceAIToolField = {
  name: string;
  label: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  source: string;
};

export const sourceAIToolFieldsByToolId: Record<string, SourceAIToolField[]> = {
  "ai-project-manager-ai-history-67q48z-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI History source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIHistory.jsx"
    }
  ],
  "ai-project-manager-cf-agentic-sprint-planner-ixslzr-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Agentic Sprint Planner source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfAgenticSprintPlanner.jsx"
    }
  ],
  "ai-project-manager-gap-no-ai-autoassignment-by-skills-and-workload-1hltlb-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Autoassignment By Skills And Workload source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoAiAutoassignmentBySkillsAndWorkload.jsx"
    }
  ],
  "ai-project-manager-gap-no-ai-burnoutsentiment-detection-across-stan-e1iyos-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Burnoutsentiment Detection Across Stan source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoAiBurnoutsentimentDetectionAcrossStan.jsx"
    }
  ],
  "ai-project-manager-gap-no-ai-meeting-transcript-summarization-to-ta-nxhe58-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Meeting Transcript Summarization To Ta source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoAiMeetingTranscriptSummarizationToTa.jsx"
    }
  ],
  "ai-project-manager-gap-no-ai-timeline-estimation-under-velocitydepe-g6znod-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Timeline Estimation Under Velocitydepe source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoAiTimelineEstimationUnderVelocitydepe.jsx"
    }
  ],
  "ai-project-manager-ai-burnout-detection-1mv3co-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Burnout Detection source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-burnout-detection.js"
    }
  ],
  "ai-project-manager-ai-5cuwes-exact-ai": [
    {
      "name": "action_items",
      "label": "Action Items",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "backlog_items",
      "label": "Backlog Items",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "content",
      "label": "Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "current_risks",
      "label": "Current Risks",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "date",
      "label": "Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dependencies",
      "label": "Dependencies",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "feedback_items",
      "label": "Feedback Items",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "goal",
      "label": "Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "holidays",
      "label": "Holidays",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "mood_score",
      "label": "Mood Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "priorities",
      "label": "Priorities",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "progress",
      "label": "Progress",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "project_description",
      "label": "Project Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "project_id",
      "label": "Project Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "project_ids",
      "label": "Project Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "project_name",
      "label": "Project Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "retro_id",
      "label": "Retro Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "retro_text",
      "label": "Retro Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "risk_id",
      "label": "Risk Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "scope",
      "label": "Scope",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sprint_id",
      "label": "Sprint Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sprint_name",
      "label": "Sprint Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "standups",
      "label": "Standups",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "task_id",
      "label": "Task Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "task_ids",
      "label": "Task Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "tasks_data",
      "label": "Tasks Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "tasks_summary",
      "label": "Tasks Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "team_capacity",
      "label": "Team Capacity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "team_data",
      "label": "Team Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "team_ids",
      "label": "Team Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "team_members",
      "label": "Team Members",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "team_size",
      "label": "Team Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "team_velocity",
      "label": "Team Velocity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "teams",
      "label": "Teams",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "timeline",
      "label": "Timeline",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "to_improve",
      "label": "To Improve",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "velocity",
      "label": "Velocity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "went_well",
      "label": "Went Well",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-project-manager-gap-no-ai-autoassignment-by-skills-and-workload-zw47k7-exact-ai": [
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-no-ai-autoassignment-by-skills-and-workload.js"
    }
  ],
  "ai-project-manager-gap-no-ai-burnoutsentiment-detection-across-stan-1305mo-exact-ai": [
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-no-ai-burnoutsentiment-detection-across-stan.js"
    }
  ],
  "ai-project-manager-gap-no-ai-meeting-transcript-summarization-to-ta-1l1kw9-exact-ai": [
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-no-ai-meeting-transcript-summarization-to-ta.js"
    }
  ],
  "ai-project-manager-gap-no-ai-timeline-estimation-under-velocitydepe-coat54-exact-ai": [
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-no-ai-timeline-estimation-under-velocitydepe.js"
    }
  ],
  "ai-project-manager-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI History source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIHistory.jsx"
    },
    {
      "name": "action_items",
      "label": "Action Items",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "backlog_items",
      "label": "Backlog Items",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "content",
      "label": "Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "current_risks",
      "label": "Current Risks",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "date",
      "label": "Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dependencies",
      "label": "Dependencies",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "feedback_items",
      "label": "Feedback Items",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "goal",
      "label": "Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "holidays",
      "label": "Holidays",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "mood_score",
      "label": "Mood Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "priorities",
      "label": "Priorities",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "progress",
      "label": "Progress",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "project_description",
      "label": "Project Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "project_id",
      "label": "Project Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "project_ids",
      "label": "Project Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "project_name",
      "label": "Project Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "retro_id",
      "label": "Retro Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "retro_text",
      "label": "Retro Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "risk_id",
      "label": "Risk Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "scope",
      "label": "Scope",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sprint_id",
      "label": "Sprint Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sprint_name",
      "label": "Sprint Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "standups",
      "label": "Standups",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "task_id",
      "label": "Task Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "task_ids",
      "label": "Task Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "tasks_data",
      "label": "Tasks Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "tasks_summary",
      "label": "Tasks Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "team_capacity",
      "label": "Team Capacity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "team_data",
      "label": "Team Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "team_ids",
      "label": "Team Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "team_members",
      "label": "Team Members",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "team_size",
      "label": "Team Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "team_velocity",
      "label": "Team Velocity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "teams",
      "label": "Teams",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "timeline",
      "label": "Timeline",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "to_improve",
      "label": "To Improve",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "velocity",
      "label": "Velocity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "went_well",
      "label": "Went Well",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-no-ai-autoassignment-by-skills-and-workload.js"
    }
  ],
  "ai-project-manager-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI History source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIHistory.jsx"
    },
    {
      "name": "action_items",
      "label": "Action Items",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "backlog_items",
      "label": "Backlog Items",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "content",
      "label": "Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "current_risks",
      "label": "Current Risks",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "date",
      "label": "Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dependencies",
      "label": "Dependencies",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "feedback_items",
      "label": "Feedback Items",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "goal",
      "label": "Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "holidays",
      "label": "Holidays",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "mood_score",
      "label": "Mood Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "priorities",
      "label": "Priorities",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "progress",
      "label": "Progress",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "project_description",
      "label": "Project Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "project_id",
      "label": "Project Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "project_ids",
      "label": "Project Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "project_name",
      "label": "Project Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "retro_id",
      "label": "Retro Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "retro_text",
      "label": "Retro Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "risk_id",
      "label": "Risk Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "scope",
      "label": "Scope",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sprint_id",
      "label": "Sprint Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sprint_name",
      "label": "Sprint Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "standups",
      "label": "Standups",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "task_id",
      "label": "Task Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "task_ids",
      "label": "Task Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "tasks_data",
      "label": "Tasks Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "tasks_summary",
      "label": "Tasks Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "team_capacity",
      "label": "Team Capacity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "team_data",
      "label": "Team Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "team_ids",
      "label": "Team Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "team_members",
      "label": "Team Members",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "team_size",
      "label": "Team Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "team_velocity",
      "label": "Team Velocity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "teams",
      "label": "Teams",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "timeline",
      "label": "Timeline",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "to_improve",
      "label": "To Improve",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "velocity",
      "label": "Velocity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "went_well",
      "label": "Went Well",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-no-ai-autoassignment-by-skills-and-workload.js"
    }
  ]
};
