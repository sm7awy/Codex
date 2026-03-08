const data = {
  kpis: [
    { label: "العملاء المخدومين اليوم", value: "148" },
    { label: "نسبة التحويل (Hot Leads)", value: "26.4%" },
    { label: "انخفاض التكلفة التشغيلية", value: "41%" },
    { label: "متوسط زمن الرد", value: "18 ثانية" }
  ],
  agents: [
    { name: "Commercial Frontline", role: "Sales + Pricing", status: "active", channel: "WhatsApp" },
    { name: "Booking Execution", role: "Issue Booking", status: "active", channel: "Booking API" },
    { name: "After-Sales Service", role: "Support", status: "warning", channel: "WhatsApp" },
    { name: "Ads Optimization", role: "Marketing", status: "active", channel: "Meta/Google" },
    { name: "Decision Orchestrator", role: "Routing", status: "active", channel: "Internal" },
    { name: "Quality Optimizer", role: "QA", status: "active", channel: "Internal" },
    { name: "Compliance Guardrails", role: "Policy", status: "active", channel: "Internal" },
    { name: "Analytics Intelligence", role: "Insights", status: "active", channel: "GA/CleverTap" }
  ],
  approvals: [
    { title: "Refund Request #RF-2089", note: "حالة استرداد تتطلب اعتماد بشري" },
    { title: "Human Handover #CNV-991", note: "العميل طلب التواصل مع موظف" }
  ],
  conversations: [
    { title: "عميل - حجز لندن", note: "Hot lead | تم إرسال عرضين + رابط دفع" },
    { title: "عميل - استفسار فيزا", note: "Warm lead | جاري المتابعة خلال 30 دقيقة" },
    { title: "عميل - متابعة باردة", note: "Cold lead | مجدول Follow-up تلقائي" }
  ],
  logs: [
    "[09:15:03] Decision Orchestrator routed lead LEAD-449 to Commercial Frontline",
    "[09:15:18] Pricing tool returned 3 offers (KWI -> LHR)",
    "[09:15:45] Payment link generated for quote QT-8849",
    "[09:16:02] QA monitor score=0.93 (response quality: good)",
    "[09:16:29] Escalation opened: REFUND requires human approval"
  ]
};

function render() {
  document.getElementById("kpis").innerHTML = data.kpis
    .map((kpi) => `<div class="kpi"><h3>${kpi.label}</h3><strong>${kpi.value}</strong></div>`)
    .join("");

  document.getElementById("agentsTable").innerHTML = data.agents
    .map(
      (agent) => `<tr>
        <td>${agent.name}</td>
        <td>${agent.role}</td>
        <td><span class="status ${agent.status}">${agent.status}</span></td>
        <td>${agent.channel}</td>
      </tr>`
    )
    .join("");

  const activeCount = data.agents.filter((a) => a.status === "active").length;
  document.getElementById("activeAgentsBadge").textContent = `${activeCount}/${data.agents.length} Active`;

  document.getElementById("approvalsList").innerHTML = data.approvals
    .map((item) => `<div class="item"><h4>${item.title}</h4><p>${item.note}</p></div>`)
    .join("");

  document.getElementById("conversationsList").innerHTML = data.conversations
    .map((item) => `<div class="item"><h4>${item.title}</h4><p>${item.note}</p></div>`)
    .join("");

  document.getElementById("logsList").textContent = data.logs.join("\n");
}

document.getElementById("refreshBtn").addEventListener("click", () => {
  data.logs.unshift(`[${new Date().toLocaleTimeString("en-GB")}] Manual refresh executed`);
  data.logs = data.logs.slice(0, 7);
  render();
});

render();
