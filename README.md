# Workplace Productivity Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AIProjectManager`
- `AIMeetingSummarizer`
- `AIDocumentAssistant`
- `AIWorkplaceOps`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/workplace-productivity-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:4570`

Seeded users:
- `admin@workplace-productivity.local / admin123`
- `manager@workplace-productivity.local / manager123`
- `analyst@workplace-productivity.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/workplace-productivity-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:4570 npm run smoke
```
