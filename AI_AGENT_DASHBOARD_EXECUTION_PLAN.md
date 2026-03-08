# AI Agent Dashboard — Execution Plan

## 1) ملخص المشروع
بناء لوحة تحكم تشغيلية وإدارية لإدارة منظومة **AI Orchestration** تضم 10 Agents (تم دمج 3 Agents مبدئية إلى Agent واحد للـ Intake/Qualification/Pricing)، وتخدم شركة سفر عبر قناة WhatsApp المربوطة مع Zoho SalesIQ وZoho CRM. الهدف هو تشغيل ذكي على مدار 24 ساعة، مع رفع جودة الخدمة، وخفض الاعتماد على العنصر البشري في الحالات الروتينية، وإبقاء التدخل البشري في الحالات الحساسة فقط.

---

## 2) الأهداف
### أهداف أعمال (Business)
1. رفع عدد العملاء المخدومين بشكل سليم (محادثة منطقية + إجابات كاملة + بدون أخطاء تسعير/تجاوب).
2. خفض التكلفة التشغيلية بنسبة **50%**.
3. تحقيق معدل تحويل **25%** للـ Leads.

### أهداف تشغيلية (Operational)
1. تمكين إدارة ومراقبة الوكلاء من واجهة واحدة.
2. نظام صلاحيات وموافقات واضح (Dashboard + WhatsApp).
3. رصد جودة الردود والأداء بشكل لحظي مع توصيات تحسين.

---

## 3) أنواع المستخدمين (User Types)
1. **Admin**: إعداد النظام بالكامل، إدارة الصلاحيات والسياسات.
2. **Operations Manager**: متابعة الحجوزات، الموافقات، الحالات الحرجة.
3. **Sales/Support Operator**: مراقبة المحادثات الساخنة، التدخل اليدوي عند الحاجة.
4. **Marketing Manager**: إدارة المحتوى والإعلانات ومراجعة التوصيات.
5. **Analyst**: مراجعة التقارير، جودة البيانات، قياس KPIs.
6. **Approver (Exec/Supervisor)**: اعتماد قرارات محددة عبر لوحة التحكم أو WhatsApp.

---

## 4) المتطلبات الوظيفية (Functional Requirements)
1. إدارة كاملة لكل Agent (الاسم، الدور، المهمة، Prompt/Instructions، الأدوات، مصادر الإدخال، المخرجات، Trigger/Schedule، Memory/Notes، Status، Logs، Limits/Permissions).
2. Orchestration Layer مركزية للتحكم في سير العمل بين Agents.
3. تكامل WhatsApp + Zoho SalesIQ + Zoho CRM من اليوم الأول.
4. تكامل API لنظام الحجز الحالي (بحث تواريخ/أسعار، روابط الدفع، إصدار الحجز).
5. دعم لغتين: العربية والإنجليزية.
6. نبرة الرد: عربية كويتية بيضاء محترمة ورصينة.
7. تصنيف Leads إلى Hot/Warm/Cold، مع متابعة تلقائية للبارد.
8. نظام موافقات للحالات الحساسة.
9. تحويل فوري للبشر في 3 حالات:
   - Refund.
   - إذا بدأت مخرجات البوت غير منطقية.
   - إذا طلب العميل التواصل البشري.
10. لوحة مراقبة لحظية: أداء Agents، المحادثات، الأخطاء، SLA، الجودة.
11. سجل تدقيق (Audit Trail) كامل لكل قرار وتنفيذ.
12. Agent متخصص لتحسين جودة ردود وأداء بقية Agents (Quality Optimizer Agent).

---

## 5) المتطلبات غير الوظيفية (Non-Functional Requirements)
1. **الاعتمادية**: توافر مرتفع مع استئناف تلقائي للمهام.
2. **القابلية للتوسع**: إضافة Agents وأدوات جديدة بدون إعادة هيكلة جذرية.
3. **الأمان**: تشفير أسرار API، RBAC، سجلات تدقيق.
4. **الأداء**: استجابة سريعة للمحادثات، Queue للمهام الخلفية.
5. **القابلية للملاحظة**: Metrics + Structured Logs + Error tracing.
6. **المرونة**: نشر على VPS مبدئيًا مع مسار واضح للترحيل لاحقًا.
7. **الامتثال**: سياسات بيانات العملاء وإخفاء المعلومات الحساسة في السجلات.

---

## 6) بنية الـ Agents (Proposed 10-Agent Architecture)
> ملاحظة: تم دمج (Lead Intake + Qualification + Itinerary & Pricing) في Agent واحد كما طلبت.

1. **Commercial Frontline Agent (Merged)**
   - استقبال العميل من WhatsApp/SalesIQ.
   - جمع البيانات، تصنيف حرارة المحادثة، بناء العرض السعري.
2. **Booking Execution Agent**
   - إرسال روابط الدفع.
   - إصدار الحجز بعد تحقق شروط التنفيذ.
3. **After-Sales Service Agent**
   - تعديل/استفسارات ما بعد البيع.
   - رفع Refund للبشر.
4. **Content Strategy Agent**
   - تخطيط المحتوى حسب الموسم/الجمهور/الأداء.
5. **Content Production Agent**
   - كتابة نصوص المحتوى/الإعلانات (A/B Variants).
6. **Ads Optimization Agent**
   - تحليل الأداء الإعلاني وتوصية/تنفيذ تحسينات.
7. **Analytics Intelligence Agent**
   - تحليل بيانات CleverTap + GA + CRM.
8. **Decision Orchestrator Agent**
   - العقل المركزي لتوجيه المهام والاعتمادات.
9. **Quality Optimizer Agent**
   - تقييم جودة الردود وقرارات الوكلاء وتحسين الـ Prompts والسياسات.
10. **Compliance & Guardrails Agent**
   - التحقق من الحدود والسياسات والصلاحيات قبل التنفيذ.

---

## 7) بنية لوحة التحكم (Dashboard Architecture)
### أقسام رئيسية
1. **Overview**: صحة النظام، KPIs، إنذارات فورية.
2. **Agents Control Center**: إنشاء/تعديل/إيقاف Agents، إدارة Prompts.
3. **Conversations & Leads**: المحادثات الحية، التصنيف الحراري، التدخل اليدوي.
4. **Approvals Inbox**: طلبات الموافقة (Dashboard + WhatsApp).
5. **Bookings Monitor**: دورة الحجز من التسعير حتى التأكيد.
6. **Marketing Studio**: المحتوى، الإعلانات، التوصيات.
7. **Analytics & Insights**: تقارير سببية وقرارات مقترحة.
8. **Logs & Audit**: تتبع كل إجراء ونقطة قرار.
9. **Permissions & Policies**: RBAC، الحدود، السياسات.
10. **Integrations**: مفاتيح API، Webhooks، حالات الاتصال.

---

## 8) شرح الصفحات (Page-by-Page)
1. **Login + MFA**.
2. **Dashboard Home**: KPI cards + Active incidents + Agent health.
3. **Agent Details Page**:
   - Profile (اسم/دور/مهمة).
   - Prompt editor (versioned).
   - Tools/Connectors.
   - Trigger schedule.
   - Memory/Notes.
   - Runtime status + logs.
4. **Conversation Console**:
   - Timeline للمحادثة.
   - AI reasoning summary (مختصر).
   - Human takeover button.
5. **Approvals Center**:
   - Queue + SLA countdown.
   - Approve/Reject + سبب القرار.
6. **Bookings Pipeline**:
   - Search → Quote → Payment link → Confirmed booking.
7. **Marketing Command**:
   - Content ideas, campaign drafts, optimization actions.
8. **Insights Lab**:
   - Cohorts, conversion funnel, attribution snapshots.
9. **Audit & Compliance**:
   - من نفذ ماذا؟ متى؟ ولماذا؟
10. **Settings**:
   - Roles, Secrets, Integrations, Alert rules.

---

## 9) تصميم قاعدة البيانات (اقتراح PostgreSQL)
### جداول أساسية
1. `users` (id, name, email, role_id, status, created_at)
2. `roles` (id, name)
3. `permissions` (id, key, description)
4. `role_permissions` (role_id, permission_id)
5. `agents` (id, name, role, objective, status, owner_id)
6. `agent_versions` (id, agent_id, prompt, tools_config, policy_config, version, created_by)
7. `agent_memories` (id, agent_id, memory_type, content, expires_at)
8. `integrations` (id, provider, auth_type, secret_ref, status)
9. `leads` (id, source, customer_id, heat_level, stage, assigned_agent_id)
10. `conversations` (id, lead_id, channel, language, status, started_at, ended_at)
11. `messages` (id, conversation_id, sender_type, content, model_meta, created_at)
12. `quotes` (id, lead_id, itinerary_data, total_price, currency, valid_until)
13. `payments` (id, lead_id, payment_link, status, gateway_ref)
14. `bookings` (id, lead_id, external_booking_id, status, issued_at)
15. `service_tickets` (id, booking_id, type, priority, status, assigned_to)
16. `approval_requests` (id, entity_type, entity_id, reason, status, requested_by, decided_by)
17. `agent_runs` (id, agent_id, trigger_type, input_ref, output_ref, status, latency_ms)
18. `events` (id, event_type, payload, source, created_at)
19. `audit_logs` (id, actor_type, actor_id, action, resource_type, resource_id, metadata, created_at)
20. `kpi_snapshots` (id, metric_key, metric_value, window_start, window_end)

---

## 10) APIs المقترحة (Internal + Integration)
### Internal APIs
- `POST /api/agents`
- `PATCH /api/agents/:id`
- `POST /api/agents/:id/activate`
- `POST /api/orchestrator/dispatch`
- `GET /api/conversations?status=active`
- `POST /api/conversations/:id/takeover`
- `POST /api/approvals/:id/approve`
- `POST /api/approvals/:id/reject`
- `GET /api/metrics/overview`

### Integration APIs
- WhatsApp webhook ingestion endpoint.
- Zoho SalesIQ sync endpoints.
- Zoho CRM sync (lead/contact/deal).
- Booking provider connector (using your API docs).
- Payment status webhook handler.

### Event Contracts
- `lead.created`
- `lead.qualified`
- `quote.generated`
- `payment.link_sent`
- `payment.completed`
- `booking.issued`
- `approval.requested`
- `handover.human`
- `qa.alert.triggered`

---

## 11) الأتمتة (Automation)
1. Auto follow-up للـ Cold Leads عبر جدولة ذكية.
2. Daily health checks للـ Integrations.
3. Rule-based escalations عند انخفاض الجودة/ارتفاع الأخطاء.
4. Prompt A/B evaluation أسبوعي لوكلاء المبيعات والتسويق.
5. تقارير صباحية للإدارة عبر WhatsApp/Email.
6. Cron jobs للتحليلات والتوصيات الدورية.

---

## 12) الصلاحيات والموافقات (RBAC + Approvals)
### RBAC
- Admin: كل الصلاحيات.
- Operations: إدارة الحجوزات/المحادثات/الموافقات التشغيلية.
- Marketing: المحتوى/الحملات/تحسين الأداء.
- Analyst: قراءة البيانات والتقارير دون تنفيذ تشغيلي.
- Approver: قبول/رفض الطلبات الحساسة.

### حالات موافقة إلزامية
1. Refund (إلزامي بشري).
2. سلوك بوت غير منطقي (QA alert).
3. طلب العميل تواصل بشري.

### قنوات الموافقة
- Dashboard.
- WhatsApp interactive approval message.

---

## 13) الـ MVP (8 أسابيع)
### نطاق MVP المعتمد
1. Orchestration Core + Agent Registry.
2. 10 Agents بالهيكل المتفق عليه.
3. WhatsApp + Zoho SalesIQ + Zoho CRM integration.
4. Booking API connector (بحث/سعر/دفع/إصدار حجز).
5. RBAC + Approvals workflow.
6. Live monitoring + logs + audit.
7. Analytics dashboard أساسي للمقاييس الثلاثة.
8. Quality Optimizer Agent (نسخة أولى).

---

## 14) المرحلة الثانية (Phase 2)
1. دعم Voice/Call Center integration.
2. Refund automation مع Human-in-the-loop.
3. Historical booking check عبر APIs.
4. توسعة قنوات Slack/Email/CSV ingestion.
5. Recommendation engine أعمق للتسويق والعمليات.
6. Multi-tenant readiness (إذا أردت التوسع التجاري لاحقًا).

---

## 15) خارطة التنفيذ (8-Week Roadmap)
### Week 1
- Discovery تفصيلي + توثيق تدفقات العمل.
- نمذجة البيانات والعقود (API/Event schemas).

### Week 2
- بناء Orchestrator skeleton + Auth/RBAC foundation.
- إعداد Agent runtime abstraction.

### Week 3
- تكامل WhatsApp + SalesIQ + CRM ingestion.
- Conversation console (نسخة أولية).

### Week 4
- Booking connector (search/quote/payment link/issue booking).
- Approvals workflow (dashboard).

### Week 5
- WhatsApp approvals.
- Logs/Audit center.

### Week 6
- Analytics dashboards + KPI pipelines.
- Quality Optimizer (initial scoring loop).

### Week 7
- Hardening: monitoring, retries, fallback, failover.
- UAT داخلي مع الفريق (8 مستخدمين).

### Week 8
- إطلاق MVP + Playbooks تشغيل + خطة تحسين 30 يوم.

---

## 16) المخاطر والحالات الخاصة
1. **عدم اتساق بيانات APIs الخارجية** → طبقة Validation + Retries + Dead-letter queue.
2. **سوء تصنيف lead heat** → rules + model feedback loop.
3. **هلوسة/خرف البوت** → QA guardrails + auto handover.
4. **انقطاع تكامل خارجي** → graceful degradation + alerts.
5. **تضارب قرارات Agents** → Decision Orchestrator + policy engine.
6. **تسريب أسرار/API keys** → secret manager + rotation policy.

---

## 17) Stack مقترح (CTO Startup Fit)
### Backend
- **Node.js (NestJS)** أو **Python (FastAPI)** — أوصي NestJS للـ orchestration والهيكلة.
- **PostgreSQL** (بيانات تشغيلية).
- **Redis** (queues, caching, rate limiting).
- **BullMQ / Temporal (لاحقًا)** للـ workflows.

### Frontend
- **Next.js + TypeScript + Tailwind + shadcn/ui**.
- Real-time updates عبر WebSocket/SSE.

### Observability
- OpenTelemetry + Grafana/Loki/Prometheus.
- Sentry للأخطاء التطبيقية.

### Infra (VPS)
- Docker Compose (MVP).
- Nginx reverse proxy + SSL.
- Daily backups + restore drill.

---

## 18) مخرج 2 — Master Build Prompt
انسخ البرومبت التالي لاستخدامه معي لاحقًا عند البدء بالتنفيذ:

```text
You are my CTO-level full-stack engineering partner.
Build a production-minded MVP for an AI Agent Orchestration Dashboard for a travel company.

Context:
- Primary channel: WhatsApp integrated with Zoho SalesIQ and Zoho CRM.
- Existing booking bot can already: search prices by date, send payment links, issue bookings.
- Human mandatory escalation for: refunds, bot abnormal behavior, customer requests human.
- Languages: Arabic + English.
- Arabic tone: professional white Kuwaiti dialect (respectful, formal, no slangy terms).
- Users: up to 8 internal users in MVP.
- Deployment target: VPS.
- MVP timeline: 8 weeks.

Core goals:
1) Serve customers correctly with high-quality logical conversations and correct pricing.
2) Reduce operational cost by 50%.
3) Reach 25% conversion for qualified hot leads.

Must build:
- Orchestration layer controlling 10 agents.
- Agent management model: name, role, mission, instructions, tools, input source, output, trigger/schedule, memory/notes, status, logs, limits/permissions.
- RBAC + approval system (Dashboard + WhatsApp approvals).
- Live monitoring + audit logs.
- Analytics module combining CleverTap + Google Analytics + Zoho CRM insights.
- Quality Optimizer Agent to improve response quality and other agents’ actions.

Output format required from you in implementation phase:
1) Architecture
2) Data model
3) API contracts
4) Folder structure
5) Step-by-step implementation with milestones
6) Actual code patches
7) Test plan
8) Deployment guide for VPS
9) Post-launch KPI instrumentation

Engineering constraints:
- Clean modular architecture.
- Security first (secret management, RBAC, auditability).
- Scalable design to add Slack/Email/CSV/Cron integrations later.
- Prefer practical, incremental delivery over overengineering.
```

---

## 19) مخرج 3 — هيكل المجلدات المقترح
```text
ai-agent-dashboard/
  apps/
    web/                         # Next.js dashboard
      src/
        app/
        components/
        features/
        lib/
    api/                         # NestJS/FastAPI backend
      src/
        modules/
          auth/
          users/
          roles/
          agents/
          orchestrator/
          conversations/
          leads/
          bookings/
          approvals/
          analytics/
          integrations/
          audit/
          quality/
        common/
        main.ts
  packages/
    sdk/                         # shared client/types
    schemas/                     # zod/json schemas for events/api
    prompts/                     # versioned prompt templates
  infra/
    docker/
      docker-compose.yml
    nginx/
    scripts/
  docs/
    architecture/
    api/
    runbooks/
  tests/
    e2e/
    integration/
  .env.example
  README.md
```

---

## 20) مخرج 4 — Checklist ميزات الـ MVP
- [ ] Login + RBAC + session security.
- [ ] Agent CRUD + versioned prompts.
- [ ] Orchestrator dispatch engine.
- [ ] WhatsApp inbound/outbound messaging.
- [ ] Zoho SalesIQ + Zoho CRM sync.
- [ ] Booking API actions: search/pricing/payment-link/issue-booking.
- [ ] Lead heat classification (hot/warm/cold).
- [ ] Cold lead automated follow-up.
- [ ] Human handover button in conversation console.
- [ ] Approval queue + approve/reject via dashboard.
- [ ] WhatsApp approval actions.
- [ ] Mandatory escalation rules (refund / bot-abnormal / human-request).
- [ ] Live system monitoring dashboard.
- [ ] Structured logs + audit trail.
- [ ] KPI dashboard for service quality, cost reduction proxy, conversion.
- [ ] Quality Optimizer Agent (v1 scoring + recommendations).
- [ ] VPS deployment scripts + SSL + backups.
- [ ] UAT sign-off with internal users.

---

## 21) مخرج 5 — نقاط ما زالت غير محسومة
1. وثيقة KPI الموظفين الحالية (ستزوّدني بها لاحقًا).
2. تفاصيل API auth/rate-limits/webhooks من وثائق المزود.
3. تعريف دقيق لمعادلة “جودة المحادثة السليمة” (scoring rubric).
4. سياسة الاحتفاظ بالبيانات (Data retention period).
5. حد زمني SLA للموافقات البشرية.
6. حدود الصلاحيات التفصيلية لكل Role على مستوى الإجراء.
7. آلية قياس “خفض التكلفة 50%” (صيغة baseline مقابل post-launch).
8. هل سيُسمح بالتعديل اليدوي على Prompts في الإنتاج أم عبر workflow مراجعة فقط.

---

## 22) القرار التنفيذي المقترح
ابدأ بالـ MVP وفق هذه الخطة على VPS خلال 8 أسابيع، مع تصميم “قابل للترحيل” إلى بنية أكثر توسعًا لاحقًا دون كسر النظام. الأولوية القصوى: **سلامة التشغيل + الجودة + القياس** قبل أي توسعات تجميلية.
