export const sourceProjectTools = [
  {
    "id": "meeting-intelligence-copilot",
    "title": "Meeting Intelligence Copilot",
    "category": "Meeting Intelligence",
    "description": "Focused Meeting Intelligence AI tool elevated inside the current merged suite.",
    "defaultPrompt": "Turn the meeting transcript into professional notes, decisions, risks, action items, owners, due dates, and CRM/task follow-ups.",
    "inputLabel": "Meeting Intelligence context",
    "outputLabel": "Meeting Intelligence AI response",
    "signals": [
      "Meeting Notes",
      "Transcript Summaries",
      "Action Items",
      "CRM/Task Sync"
    ]
  },
  {
    "id": "ai-project-manager-source-workflow",
    "title": "AI Project Manager Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIProjectManager.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIProjectManager to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Project Manager source context",
    "outputLabel": "AI Project Manager source analysis",
    "signals": [
      "frontend/src/main",
      "frontend/src/pages/AIHistory",
      "frontend/src/pages/CfAgenticSprintPlanner",
      "frontend/src/pages/GapNoAiAutoassignmentBySkillsAndWorkload",
      "frontend/src/pages/GapNoAiBurnoutsentimentDetectionAcrossStan",
      "frontend/src/pages/GapNoAiMeetingTranscriptSummarizationToTa",
      "frontend/src/pages/GapNoAiTimelineEstimationUnderVelocitydepe",
      "frontend/src/components/AIOutput"
    ]
  },
  {
    "id": "ai-project-manager-ai-tools",
    "title": "AI Project Manager AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIProjectManager.",
    "defaultPrompt": "Review AIProjectManager AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Project Manager AI prompt or tool context",
    "outputLabel": "AI Project Manager AI tool response",
    "signals": [
      "frontend/src/main.jsx",
      "frontend/src/pages/AIHistory.jsx",
      "frontend/src/pages/CfAgenticSprintPlanner.jsx",
      "frontend/src/pages/GapNoAiAutoassignmentBySkillsAndWorkload.jsx",
      "frontend/src/pages/GapNoAiBurnoutsentimentDetectionAcrossStan.jsx",
      "frontend/src/pages/GapNoAiMeetingTranscriptSummarizationToTa.jsx",
      "frontend/src/pages/GapNoAiTimelineEstimationUnderVelocitydepe.jsx",
      "frontend/src/components/AIOutput.jsx"
    ]
  },
  {
    "id": "ai-project-manager-ai-history-67q48z-exact-ai",
    "title": "AI Project Manager: AI History",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIHistory.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI History\" from AIProjectManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI History donor inputs",
    "outputLabel": "AI History AI response",
    "signals": [
      "frontend/src/pages/AIHistory.jsx"
    ]
  },
  {
    "id": "ai-project-manager-cf-agentic-sprint-planner-ixslzr-exact-ai",
    "title": "AI Project Manager: Cf Agentic Sprint Planner",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/CfAgenticSprintPlanner.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Cf Agentic Sprint Planner\" from AIProjectManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Cf Agentic Sprint Planner donor inputs",
    "outputLabel": "Cf Agentic Sprint Planner AI response",
    "signals": [
      "frontend/src/pages/CfAgenticSprintPlanner.jsx"
    ]
  },
  {
    "id": "ai-project-manager-gap-no-ai-autoassignment-by-skills-and-workload-1hltlb-exact-ai",
    "title": "AI Project Manager: Gap No AI Autoassignment By Skills And Workload",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapNoAiAutoassignmentBySkillsAndWorkload.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No AI Autoassignment By Skills And Workload\" from AIProjectManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No AI Autoassignment By Skills And Workload donor inputs",
    "outputLabel": "Gap No AI Autoassignment By Skills And Workload AI response",
    "signals": [
      "frontend/src/pages/GapNoAiAutoassignmentBySkillsAndWorkload.jsx"
    ]
  },
  {
    "id": "ai-project-manager-gap-no-ai-burnoutsentiment-detection-across-stan-e1iyos-exact-ai",
    "title": "AI Project Manager: Gap No AI Burnoutsentiment Detection Across Stan",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapNoAiBurnoutsentimentDetectionAcrossStan.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No AI Burnoutsentiment Detection Across Stan\" from AIProjectManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No AI Burnoutsentiment Detection Across Stan donor inputs",
    "outputLabel": "Gap No AI Burnoutsentiment Detection Across Stan AI response",
    "signals": [
      "frontend/src/pages/GapNoAiBurnoutsentimentDetectionAcrossStan.jsx"
    ]
  },
  {
    "id": "ai-project-manager-gap-no-ai-meeting-transcript-summarization-to-ta-nxhe58-exact-ai",
    "title": "AI Project Manager: Gap No AI Meeting Transcript Summarization To Ta",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapNoAiMeetingTranscriptSummarizationToTa.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No AI Meeting Transcript Summarization To Ta\" from AIProjectManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No AI Meeting Transcript Summarization To Ta donor inputs",
    "outputLabel": "Gap No AI Meeting Transcript Summarization To Ta AI response",
    "signals": [
      "frontend/src/pages/GapNoAiMeetingTranscriptSummarizationToTa.jsx"
    ]
  },
  {
    "id": "ai-project-manager-gap-no-ai-timeline-estimation-under-velocitydepe-g6znod-exact-ai",
    "title": "AI Project Manager: Gap No AI Timeline Estimation Under Velocitydepe",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapNoAiTimelineEstimationUnderVelocitydepe.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No AI Timeline Estimation Under Velocitydepe\" from AIProjectManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No AI Timeline Estimation Under Velocitydepe donor inputs",
    "outputLabel": "Gap No AI Timeline Estimation Under Velocitydepe AI response",
    "signals": [
      "frontend/src/pages/GapNoAiTimelineEstimationUnderVelocitydepe.jsx"
    ]
  },
  {
    "id": "ai-project-manager-ai-burnout-detection-1mv3co-exact-ai",
    "title": "AI Project Manager: AI Burnout Detection",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai-burnout-detection.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Burnout Detection\" from AIProjectManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Burnout Detection donor inputs",
    "outputLabel": "AI Burnout Detection AI response",
    "signals": [
      "backend/routes/ai-burnout-detection.js"
    ]
  },
  {
    "id": "ai-project-manager-ai-5cuwes-exact-ai",
    "title": "AI Project Manager: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIProjectManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Action Items",
      "Backlog Items",
      "Constraints",
      "Content",
      "Current Risks",
      "Date",
      "Dependencies",
      "Description"
    ]
  },
  {
    "id": "ai-project-manager-gap-no-ai-autoassignment-by-skills-and-workload-zw47k7-exact-ai",
    "title": "AI Project Manager: Gap No AI Autoassignment By Skills And Workload",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-no-ai-autoassignment-by-skills-and-workload.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No AI Autoassignment By Skills And Workload\" from AIProjectManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No AI Autoassignment By Skills And Workload donor inputs",
    "outputLabel": "Gap No AI Autoassignment By Skills And Workload AI response",
    "signals": [
      "Input"
    ]
  },
  {
    "id": "ai-project-manager-gap-no-ai-burnoutsentiment-detection-across-stan-1305mo-exact-ai",
    "title": "AI Project Manager: Gap No AI Burnoutsentiment Detection Across Stan",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-no-ai-burnoutsentiment-detection-across-stan.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No AI Burnoutsentiment Detection Across Stan\" from AIProjectManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No AI Burnoutsentiment Detection Across Stan donor inputs",
    "outputLabel": "Gap No AI Burnoutsentiment Detection Across Stan AI response",
    "signals": [
      "Input"
    ]
  },
  {
    "id": "ai-project-manager-gap-no-ai-meeting-transcript-summarization-to-ta-1l1kw9-exact-ai",
    "title": "AI Project Manager: Gap No AI Meeting Transcript Summarization To Ta",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-no-ai-meeting-transcript-summarization-to-ta.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No AI Meeting Transcript Summarization To Ta\" from AIProjectManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No AI Meeting Transcript Summarization To Ta donor inputs",
    "outputLabel": "Gap No AI Meeting Transcript Summarization To Ta AI response",
    "signals": [
      "Input"
    ]
  },
  {
    "id": "ai-project-manager-gap-no-ai-timeline-estimation-under-velocitydepe-coat54-exact-ai",
    "title": "AI Project Manager: Gap No AI Timeline Estimation Under Velocitydepe",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-no-ai-timeline-estimation-under-velocitydepe.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No AI Timeline Estimation Under Velocitydepe\" from AIProjectManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No AI Timeline Estimation Under Velocitydepe donor inputs",
    "outputLabel": "Gap No AI Timeline Estimation Under Velocitydepe AI response",
    "signals": [
      "Input"
    ]
  }
];
