"use client";

import { useEffect, useState } from "react";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "";

const tableConfig = {
  clients: process.env.NEXT_PUBLIC_DASHBOARD_CLIENTS_TABLE || "dashboard_clients",
  tasks: process.env.NEXT_PUBLIC_DASHBOARD_TASKS_TABLE || "dashboard_tasks",
  appointments:
    process.env.NEXT_PUBLIC_DASHBOARD_APPOINTMENTS_TABLE ||
    "dashboard_appointments",
  availability:
    process.env.NEXT_PUBLIC_DASHBOARD_AVAILABILITY_TABLE ||
    "availability_rules",
};

const availabilityConfig = {
  dateColumn:
    process.env.NEXT_PUBLIC_DASHBOARD_AVAILABILITY_DATE_COLUMN || "rule_date",
  statusColumn:
    process.env.NEXT_PUBLIC_DASHBOARD_AVAILABILITY_STATUS_COLUMN || "status",
  reasonColumn:
    process.env.NEXT_PUBLIC_DASHBOARD_AVAILABILITY_REASON_COLUMN || "reason",
  unavailableValue:
    process.env.NEXT_PUBLIC_DASHBOARD_UNAVAILABLE_VALUE || "unavailable",
  availableValue: process.env.NEXT_PUBLIC_DASHBOARD_AVAILABLE_VALUE || "available",
};

async function supabaseRest(path, options = {}) {
  const headers = {
    apikey: supabaseKey,
    Accept: "application/json",
    ...options.headers,
  };

  if (options.token) {
    headers.Authorization = `Bearer ${options.token}`;
  }

  if (options.body) {
    headers["Content-Type"] = "application/json";
  }

  const response = await fetch(`${supabaseUrl}${path}`, {
    ...options,
    headers,
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  const text = await response.text();
  const payload = text ? JSON.parse(text) : null;

  if (!response.ok) {
    throw new Error(payload?.message || payload?.hint || "Supabase request failed");
  }

  return payload;
}

async function fetchTableData(tableName, token) {
  if (!tableName) {
    return [];
  }

  return supabaseRest(`/rest/v1/${encodeURIComponent(tableName)}?select=*&limit=250`, {
    token,
  });
}

async function loadDashboardTables(token) {
  const names = ["clients", "tasks", "appointments", "availability"];
  const loaded = {};
  const errors = [];

  await Promise.all(
    names.map(async (name) => {
      try {
        loaded[name] = await fetchTableData(tableConfig[name], token);
      } catch (error) {
        loaded[name] = [];
        errors.push(`${tableConfig[name]}: ${error.message}`);
      }
    })
  );

  return { loaded, errors };
}

const sampleClients = [
  {
    id: "demo-client-1",
    name: "Maria Ortega",
    phone: "+1 (305) 555-0148",
    email: "maria@example.com",
    service_type: "Deep cleaning",
    status: "needs_booking",
    urgency: "high",
    preferred_date: addDaysIso(2),
    address: "Brickell, Miami",
    notes: "Asked for apartment cleaning after tomorrow.",
  },
  {
    id: "demo-client-2",
    name: "Daniel Brooks",
    phone: "+1 (786) 555-0191",
    email: "daniel@example.com",
    service_type: "HVAC inspection",
    status: "quoted",
    urgency: "medium",
    preferred_date: addDaysIso(5),
    address: "Doral, FL",
    notes: "Waiting for approval from property manager.",
  },
  {
    id: "demo-client-3",
    name: "Sofia Green",
    phone: "+1 (954) 555-0110",
    email: "sofia@example.com",
    service_type: "Move-out cleaning",
    status: "needs_follow_up",
    urgency: "high",
    preferred_date: addDaysIso(1),
    address: "Fort Lauderdale",
    notes: "Needs a cleaner before keys are returned.",
  },
  {
    id: "demo-client-4",
    name: "North Bay Office",
    phone: "+1 (305) 555-0133",
    email: "ops@northbay.example",
    service_type: "Recurring office service",
    status: "active",
    urgency: "low",
    preferred_date: addDaysIso(8),
    address: "Aventura, FL",
    notes: "Monthly maintenance account.",
  },
];

const sampleTasks = [
  {
    id: "demo-task-1",
    title: "Confirm cleaner availability",
    client_name: "Maria Ortega",
    status: "open",
    priority: "high",
    due_date: addDaysIso(0),
    notes: "Match with a cleaner for after tomorrow.",
  },
  {
    id: "demo-task-2",
    title: "Send quote follow-up",
    client_name: "Daniel Brooks",
    status: "waiting",
    priority: "medium",
    due_date: addDaysIso(1),
    notes: "Ask if the HVAC quote is approved.",
  },
  {
    id: "demo-task-3",
    title: "Book move-out cleaning",
    client_name: "Sofia Green",
    status: "open",
    priority: "high",
    due_date: addDaysIso(1),
    notes: "Urgent because keys are due tomorrow.",
  },
];

const sampleAppointments = [
  {
    id: "demo-appointment-1",
    client_name: "Sofia Green",
    service_type: "Move-out cleaning",
    scheduled_at: `${addDaysIso(1)}T10:30:00`,
    status: "tentative",
    address: "Fort Lauderdale",
  },
  {
    id: "demo-appointment-2",
    client_name: "Maria Ortega",
    service_type: "Deep cleaning",
    scheduled_at: `${addDaysIso(2)}T14:00:00`,
    status: "needs_confirmation",
    address: "Brickell, Miami",
  },
  {
    id: "demo-appointment-3",
    client_name: "North Bay Office",
    service_type: "Recurring office service",
    scheduled_at: `${addDaysIso(4)}T09:00:00`,
    status: "confirmed",
    address: "Aventura, FL",
  },
];

const sampleAvailability = [
  {
    id: "demo-rule-1",
    rule_date: addDaysIso(6),
    status: "unavailable",
    reason: "Owner blocked the day for admin work.",
  },
];

const quickPrompts = [
  "Дай всех клиентов которым надо клининг",
  "Кому нужна запись на послезавтра?",
  "Сегодня я занят, позначь этот день недоступным",
  "Покажи срочные задачи на сегодня",
  "Найди клиентов без подтвержденной записи",
];

function addDaysIso(days) {
  const date = new Date();
  date.setHours(12, 0, 0, 0);
  date.setDate(date.getDate() + days);
  return toIsoDate(date);
}

function toIsoDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function createMessage(role, text, extra = {}) {
  return {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    role,
    text,
    ...extra,
  };
}

function cleanText(value) {
  return String(value || "")
    .toLowerCase()
    .replaceAll("ё", "е")
    .trim();
}

function getField(record, keys, fallback = "") {
  for (const key of keys) {
    if (record?.[key] !== undefined && record?.[key] !== null) {
      return record[key];
    }
  }

  return fallback;
}

function normalizeClient(record) {
  const name = getField(record, [
    "name",
    "full_name",
    "customer_name",
    "client_name",
    "company",
  ]);
  const service = getField(record, [
    "service_type",
    "service",
    "need",
    "category",
    "request_type",
  ]);
  const nextDate = getField(record, [
    "preferred_date",
    "appointment_date",
    "next_follow_up",
    "due_date",
    "scheduled_at",
    "created_at",
  ]);

  return {
    raw: record,
    id: String(getField(record, ["id"], name || Math.random())),
    name: String(name || "Unnamed client"),
    phone: String(getField(record, ["phone", "phone_number", "mobile"], "")),
    email: String(getField(record, ["email"], "")),
    service: String(service || "General request"),
    status: String(getField(record, ["status", "stage"], "new")),
    urgency: String(getField(record, ["urgency", "priority"], "medium")),
    address: String(getField(record, ["address", "location"], "")),
    notes: String(getField(record, ["notes", "summary", "description"], "")),
    nextDate,
  };
}

function normalizeTask(record) {
  return {
    raw: record,
    id: String(getField(record, ["id"], Math.random())),
    title: String(getField(record, ["title", "name", "task"], "Untitled task")),
    clientName: String(
      getField(record, ["client_name", "customer_name", "client"], "")
    ),
    status: String(getField(record, ["status"], "open")),
    priority: String(getField(record, ["priority", "urgency"], "medium")),
    dueDate: getField(record, ["due_date", "due_at", "date", "created_at"], ""),
    notes: String(getField(record, ["notes", "description", "summary"], "")),
  };
}

function normalizeAppointment(record) {
  return {
    raw: record,
    id: String(getField(record, ["id"], Math.random())),
    clientName: String(
      getField(record, ["client_name", "customer_name", "client"], "Unknown")
    ),
    service: String(
      getField(record, ["service_type", "service", "type"], "Appointment")
    ),
    scheduledAt: getField(
      record,
      ["scheduled_at", "start_time", "starts_at", "appointment_date", "date"],
      ""
    ),
    status: String(getField(record, ["status"], "scheduled")),
    address: String(getField(record, ["address", "location"], "")),
  };
}

function normalizeAvailability(record) {
  return {
    raw: record,
    id: String(getField(record, ["id"], Math.random())),
    date: getField(
      record,
      [availabilityConfig.dateColumn, "date", "day", "unavailable_date"],
      ""
    ),
    status: String(
      getField(record, [availabilityConfig.statusColumn, "status"], "")
    ),
    reason: String(
      getField(record, [availabilityConfig.reasonColumn, "reason", "notes"], "")
    ),
  };
}

function extractDateKey(value) {
  if (!value) {
    return "";
  }

  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}/.test(value)) {
    return value.slice(0, 10);
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return toIsoDate(date);
}

function formatDateLabel(value) {
  const key = extractDateKey(value);
  if (!key) {
    return "No date";
  }

  const date = new Date(`${key}T12:00:00`);
  return new Intl.DateTimeFormat("ru-RU", {
    weekday: "short",
    day: "numeric",
    month: "short",
  }).format(date);
}

function formatTimeLabel(value) {
  if (!value) {
    return "";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function parseCommandDate(input) {
  const text = cleanText(input);
  const today = new Date();
  today.setHours(12, 0, 0, 0);

  if (/\b(today|сегодня|сег)\b/.test(text)) {
    return toIsoDate(today);
  }

  if (/\b(tomorrow|завтра)\b/.test(text) && !/после\s*завтра|послезавтра/.test(text)) {
    const date = new Date(today);
    date.setDate(date.getDate() + 1);
    return toIsoDate(date);
  }

  if (/after tomorrow|после\s*завтра|послезавтра/.test(text)) {
    const date = new Date(today);
    date.setDate(date.getDate() + 2);
    return toIsoDate(date);
  }

  const iso = text.match(/\b(20\d{2})-(\d{1,2})-(\d{1,2})\b/);
  if (iso) {
    return `${iso[1]}-${iso[2].padStart(2, "0")}-${iso[3].padStart(2, "0")}`;
  }

  const dotted = text.match(/\b(\d{1,2})[./](\d{1,2})(?:[./](\d{2,4}))?\b/);
  if (dotted) {
    const year = dotted[3]
      ? dotted[3].length === 2
        ? `20${dotted[3]}`
        : dotted[3]
      : String(today.getFullYear());
    return `${year}-${dotted[2].padStart(2, "0")}-${dotted[1].padStart(2, "0")}`;
  }

  const monthMap = {
    января: 0,
    январь: 0,
    jan: 0,
    февраля: 1,
    февраль: 1,
    feb: 1,
    марта: 2,
    март: 2,
    mar: 2,
    апреля: 3,
    апрель: 3,
    apr: 3,
    мая: 4,
    май: 4,
    may: 4,
    июня: 5,
    июнь: 5,
    jun: 5,
    июля: 6,
    июль: 6,
    jul: 6,
    августа: 7,
    август: 7,
    aug: 7,
    сентября: 8,
    сентябрь: 8,
    sep: 8,
    октября: 9,
    октябрь: 9,
    oct: 9,
    ноября: 10,
    ноябрь: 10,
    nov: 10,
    декабря: 11,
    декабрь: 11,
    dec: 11,
  };
  const monthNames = Object.keys(monthMap).join("|");
  const monthMatch = text.match(new RegExp(`\\b(\\d{1,2})\\s+(${monthNames})\\b`));

  if (monthMatch) {
    const date = new Date(today);
    date.setMonth(monthMap[monthMatch[2]]);
    date.setDate(Number(monthMatch[1]));
    return toIsoDate(date);
  }

  return "";
}

function isCleaningNeed(client) {
  const haystack = cleanText(
    `${client.service} ${client.notes} ${client.status} ${client.raw?.tags || ""}`
  );
  return /clean|cleaning|клин|уборк|убират|горнич|deep/.test(haystack);
}

function isOpenStatus(status) {
  return !/done|closed|complete|cancel|заверш|закрыт|отмен/.test(cleanText(status));
}

function scoreGlobalResult(item, query) {
  const text = cleanText(JSON.stringify(item));
  return cleanText(query)
    .split(/\s+/)
    .filter(Boolean)
    .reduce((score, token) => score + (text.includes(token) ? 1 : 0), 0);
}

function interpretCommand(input, data) {
  const text = cleanText(input);
  const commandDate = parseCommandDate(input);
  const clients = data.clients.map(normalizeClient);
  const tasks = data.tasks.map(normalizeTask);
  const appointments = data.appointments.map(normalizeAppointment);

  const asksForUnavailableWrite =
    /(занят|занята|недоступ|выходн|закрыт|не\s*работ|busy|unavailable|closed)/.test(
      text
    ) &&
    /(познач|пометь|отметь|сделай|mark|block|постав|добав|я\s+занят)/.test(text);

  const asksForAvailableWrite =
    /(доступн|рабоч|открой|работаем|available|open)/.test(text) &&
    /(познач|пометь|отметь|сделай|mark|постав|добав|открой)/.test(text) &&
    !/(недоступ|не\s*работ|занят|закрыт|busy|unavailable|closed)/.test(text);

  if (asksForUnavailableWrite || asksForAvailableWrite) {
    return {
      type: "write_availability",
      date: commandDate || addDaysIso(0),
      reason: input,
      status: asksForAvailableWrite
        ? availabilityConfig.availableValue
        : availabilityConfig.unavailableValue,
    };
  }

  if (/(клининг|clean|cleaning|уборк|убират)/.test(text)) {
    const matches = clients.filter(isCleaningNeed);
    return {
      type: "clients",
      title: "Клиенты, которым нужен клининг",
      items: matches,
      text: matches.length
        ? `Нашел ${matches.length} клиент${matches.length === 1 ? "а" : "ов"} по клинингу.`
        : "Не нашел клиентов по клинингу в загруженных данных.",
    };
  }

  if (/(запис|брон|book|booking|appointment|календар|calendar|встреч|слот)/.test(text)) {
    let matches = appointments;

    if (commandDate) {
      matches = appointments.filter(
        (appointment) => extractDateKey(appointment.scheduledAt) === commandDate
      );
    }

    if (/клиент|client|кому|кого/.test(text)) {
      const clientMatches = clients.filter((client) => {
        const dateMatches =
          !commandDate || extractDateKey(client.nextDate) === commandDate;
        const statusMatches = /book|запис|needs_booking|new|follow/.test(
          cleanText(`${client.status} ${client.notes}`)
        );
        return dateMatches && statusMatches;
      });

      return {
        type: "clients",
        title: commandDate
          ? `Клиенты для записи на ${formatDateLabel(commandDate)}`
          : "Клиенты, которым нужна запись",
        items: clientMatches,
        text: clientMatches.length
          ? `Нашел ${clientMatches.length} клиент${clientMatches.length === 1 ? "а" : "ов"} для записи.`
          : "Не нашел клиентов с подходящей датой записи.",
      };
    }

    return {
      type: "appointments",
      title: commandDate
        ? `Записи на ${formatDateLabel(commandDate)}`
        : "Ближайшие записи",
      items: matches,
      text: matches.length
        ? `Нашел ${matches.length} запис${matches.length === 1 ? "ь" : "ей"} в календаре.`
        : "На эту дату записей не найдено.",
    };
  }

  if (/(задач|task|todo|сроч|urgent|priority|дедлайн|deadline)/.test(text)) {
    let matches = tasks;

    if (/(сроч|urgent|high|важн)/.test(text)) {
      matches = matches.filter((task) => /high|urgent|сроч|важн/.test(cleanText(task.priority)));
    }

    if (commandDate) {
      matches = matches.filter((task) => extractDateKey(task.dueDate) === commandDate);
    }

    matches = matches.filter((task) => isOpenStatus(task.status));

    return {
      type: "tasks",
      title: commandDate
        ? `Задачи на ${formatDateLabel(commandDate)}`
        : "Активные задачи",
      items: matches,
      text: matches.length
        ? `Нашел ${matches.length} активн${matches.length === 1 ? "ую задачу" : "ые задачи"}.`
        : "Подходящих активных задач не нашлось.",
    };
  }

  if (/(клиент|client|customer|lead|лид)/.test(text)) {
    const matches = clients
      .map((client) => ({ client, score: scoreGlobalResult(client, input) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .map(({ client }) => client);

    return {
      type: "clients",
      title: "Поиск по клиентам",
      items: matches.length ? matches : clients,
      text: matches.length
        ? `Нашел ${matches.length} клиент${matches.length === 1 ? "а" : "ов"} по запросу.`
        : "Не вижу точного совпадения, показываю общий список клиентов.",
    };
  }

  const globalResults = [
    ...clients.map((item) => ({ kind: "client", item })),
    ...tasks.map((item) => ({ kind: "task", item })),
    ...appointments.map((item) => ({ kind: "appointment", item })),
  ]
    .map((entry) => ({ ...entry, score: scoreGlobalResult(entry.item, input) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);

  return {
    type: "mixed",
    title: "Умный поиск",
    items: globalResults,
    text: globalResults.length
      ? `Нашел ${globalResults.length} совпадени${globalResults.length === 1 ? "е" : "й"} по всему dashboard.`
      : "Не нашел точных совпадений. Попробуй написать услугу, дату, статус или имя клиента.",
  };
}

function StatusPill({ value, tone = "slate" }) {
  const tones = {
    slate: "border-slate-200 bg-slate-50 text-slate-700",
    green: "border-emerald-200 bg-emerald-50 text-emerald-700",
    amber: "border-amber-200 bg-amber-50 text-amber-700",
    red: "border-rose-200 bg-rose-50 text-rose-700",
    blue: "border-sky-200 bg-sky-50 text-sky-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-bold ${tones[tone]}`}
    >
      {value}
    </span>
  );
}

function IconSpark() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M12 2 14.6 8.7 22 12l-7.4 3.3L12 22l-2.6-6.7L2 12l7.4-3.3L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M7 2v4M17 2v4M3.5 9h17M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconDatabase() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M4 7c0-2.2 3.6-4 8-4s8 1.8 8 4-3.6 4-8 4-8-1.8-8-4Zm0 0v5c0 2.2 3.6 4 8 4s8-1.8 8-4V7M4 12v5c0 2.2 3.6 4 8 4s8-1.8 8-4v-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ResultList({ message }) {
  if (!message.items?.length) {
    return null;
  }

  return (
    <div className="mt-4 grid gap-3">
      {message.items.slice(0, 6).map((entry, index) => {
        const item = entry.item || entry;
        const kind = entry.kind || message.type;

        if (kind === "task" || message.type === "tasks") {
          return (
            <div
              key={`${message.id}-task-${item.id || index}`}
              className="rounded-2xl border border-white/70 bg-white/70 p-4 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="font-bold text-slate-950">{item.title}</div>
                  <div className="mt-1 text-sm text-slate-500">
                    {item.clientName || "No client"} · {formatDateLabel(item.dueDate)}
                  </div>
                </div>
                <StatusPill
                  value={item.priority}
                  tone={/high|urgent|сроч/.test(cleanText(item.priority)) ? "red" : "amber"}
                />
              </div>
            </div>
          );
        }

        if (kind === "appointment" || message.type === "appointments") {
          return (
            <div
              key={`${message.id}-appointment-${item.id || index}`}
              className="rounded-2xl border border-white/70 bg-white/70 p-4 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="font-bold text-slate-950">{item.clientName}</div>
                  <div className="mt-1 text-sm text-slate-500">
                    {item.service} · {formatDateLabel(item.scheduledAt)} {formatTimeLabel(item.scheduledAt)}
                  </div>
                </div>
                <StatusPill value={item.status} tone="blue" />
              </div>
            </div>
          );
        }

        return (
          <div
            key={`${message.id}-client-${item.id || index}`}
            className="rounded-2xl border border-white/70 bg-white/70 p-4 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="font-bold text-slate-950">{item.name}</div>
                <div className="mt-1 text-sm text-slate-500">
                  {item.service} · {formatDateLabel(item.nextDate)}
                </div>
                {item.phone ? (
                  <div className="mt-2 text-xs font-semibold text-slate-400">
                    {item.phone}
                  </div>
                ) : null}
              </div>
              <StatusPill
                value={item.urgency}
                tone={/high|urgent|сроч/.test(cleanText(item.urgency)) ? "red" : "green"}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function DashboardApp() {
  const [session, setSession] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [activePanel, setActivePanel] = useState("overview");
  const [command, setCommand] = useState("");
  const [autoApplyRules, setAutoApplyRules] = useState(true);
  const [connection, setConnection] = useState({
    mode: "demo",
    message: "Demo data loaded. Add Supabase env vars and sign in to use live data.",
  });
  const [data, setData] = useState({
    clients: sampleClients,
    tasks: sampleTasks,
    appointments: sampleAppointments,
    availability: sampleAvailability,
  });
  const [messages, setMessages] = useState([
    createMessage(
      "assistant",
      "Я могу искать клиентов, задачи, записи и менять правила доступности. Например: «сегодня я занят, позначь этот день недоступным»."
    ),
  ]);

  const configured = Boolean(supabaseUrl && supabaseKey);
  const clients = data.clients.map(normalizeClient);
  const tasks = data.tasks.map(normalizeTask);
  const appointments = data.appointments.map(normalizeAppointment);
  const availability = data.availability.map(normalizeAvailability);
  const openTasks = tasks.filter((task) => isOpenStatus(task.status));
  const cleaningClients = clients.filter(isCleaningNeed);
  const upcomingAppointments = appointments
    .filter((appointment) => extractDateKey(appointment.scheduledAt) >= addDaysIso(0))
    .sort((a, b) =>
      String(a.scheduledAt || "").localeCompare(String(b.scheduledAt || ""))
    );
  const unavailableDays = availability.filter((rule) =>
    cleanText(rule.status || availabilityConfig.unavailableValue).includes(
      cleanText(availabilityConfig.unavailableValue)
    )
  );
  const nextSevenDays = Array.from({ length: 7 }, (_, index) => addDaysIso(index));

  useEffect(() => {
    const saved = window.localStorage.getItem("nexa-dashboard-session");
    if (saved) {
      try {
        setSession(JSON.parse(saved));
      } catch {
        window.localStorage.removeItem("nexa-dashboard-session");
      }
    }
  }, []);

  useEffect(() => {
    if (configured && session?.access_token) {
      let isActive = true;

      async function loadLiveData() {
        setLoading(true);
        setConnection({ mode: "loading", message: "Loading Supabase data..." });

        const { loaded, errors } = await loadDashboardTables(session.access_token);

        if (!isActive) {
          return;
        }

        setData({
          clients: loaded.clients || [],
          tasks: loaded.tasks || [],
          appointments: loaded.appointments || [],
          availability: loaded.availability || [],
        });
        setConnection({
          mode: errors.length ? "warning" : "live",
          message: errors.length
            ? `Live mode with ${errors.length} table warning${errors.length === 1 ? "" : "s"}. Check table names, grants, and RLS.`
            : "Connected to Supabase live data.",
          errors,
        });
        setLoading(false);
      }

      loadLiveData();

      return () => {
        isActive = false;
      };
    }
  }, [configured, session?.access_token]);

  async function loadDashboardData(token = session?.access_token) {
    if (!configured || !token) {
      setConnection({
        mode: "demo",
        message: "Demo data loaded. Sign in to load Supabase records.",
      });
      return;
    }

    setLoading(true);
    setConnection({ mode: "loading", message: "Loading Supabase data..." });

    const { loaded, errors } = await loadDashboardTables(token);

    setData({
      clients: loaded.clients || [],
      tasks: loaded.tasks || [],
      appointments: loaded.appointments || [],
      availability: loaded.availability || [],
    });
    setConnection({
      mode: errors.length ? "warning" : "live",
      message: errors.length
        ? `Live mode with ${errors.length} table warning${errors.length === 1 ? "" : "s"}. Check table names, grants, and RLS.`
        : "Connected to Supabase live data.",
      errors,
    });
    setLoading(false);
  }

  async function handleSignIn(event) {
    event.preventDefault();
    setAuthError("");

    if (!configured) {
      setAuthError("Add Supabase URL and publishable key to .env.local first.");
      return;
    }

    setLoading(true);

    try {
      const authSession = await supabaseRest("/auth/v1/token?grant_type=password", {
        method: "POST",
        body: { email, password },
      });
      setSession(authSession);
      window.localStorage.setItem(
        "nexa-dashboard-session",
        JSON.stringify(authSession)
      );
      setPassword("");
    } catch (error) {
      setAuthError(error.message);
    } finally {
      setLoading(false);
    }
  }

  function handleSignOut() {
    setSession(null);
    window.localStorage.removeItem("nexa-dashboard-session");
    setData({
      clients: sampleClients,
      tasks: sampleTasks,
      appointments: sampleAppointments,
      availability: sampleAvailability,
    });
    setConnection({
      mode: "demo",
      message: "Signed out. Demo data is visible until you sign in again.",
    });
  }

  async function applyAvailabilityRule(date, reason, status = availabilityConfig.unavailableValue) {
    if (!configured || !session?.access_token) {
      throw new Error("Sign in with Supabase Auth before changing availability.");
    }

    const payload = {
      [availabilityConfig.dateColumn]: date,
      [availabilityConfig.statusColumn]: status,
    };

    if (availabilityConfig.reasonColumn) {
      payload[availabilityConfig.reasonColumn] =
        reason || "Changed from NexaFlow dashboard assistant";
    }

    setSaving(true);

    try {
      const result = await supabaseRest(
        `/rest/v1/${encodeURIComponent(tableConfig.availability)}?on_conflict=${encodeURIComponent(
          availabilityConfig.dateColumn
        )}`,
        {
          method: "POST",
          token: session.access_token,
          headers: {
            Prefer: "resolution=merge-duplicates,return=representation",
          },
          body: payload,
        }
      );

      await loadDashboardData(session.access_token);
      return result;
    } finally {
      setSaving(false);
    }
  }

  async function handleCommandSubmit(event) {
    event.preventDefault();
    const trimmed = command.trim();

    if (!trimmed) {
      return;
    }

    const userMessage = createMessage("user", trimmed);
    setCommand("");
    setMessages((current) => [...current, userMessage]);

    const interpretation = interpretCommand(trimmed, data);

    if (interpretation.type === "write_availability") {
      setActivePanel("rules");
      const statusLabel =
        interpretation.status === availabilityConfig.availableValue
          ? "доступным"
          : "недоступным";

      if (!autoApplyRules) {
        setMessages((current) => [
          ...current,
          createMessage(
            "assistant",
            `Я понял правило: ${formatDateLabel(interpretation.date)} сделать ${statusLabel}. Автоприменение выключено, нажми кнопку ниже, когда будешь готов.`,
            {
              action: {
                type: "write_availability",
                date: interpretation.date,
                reason: interpretation.reason,
                status: interpretation.status,
              },
            }
          ),
        ]);
        return;
      }

      try {
        await applyAvailabilityRule(
          interpretation.date,
          interpretation.reason,
          interpretation.status
        );
        setMessages((current) => [
          ...current,
          createMessage(
            "assistant",
            `Готово. ${formatDateLabel(interpretation.date)} помечен как ${statusLabel} в Supabase.`
          ),
        ]);
      } catch (error) {
        setMessages((current) => [
          ...current,
          createMessage(
            "assistant",
            `Я распознал команду, но не смог записать правило: ${error.message}`
          ),
        ]);
      }
      return;
    }

    if (interpretation.type === "clients") {
      setActivePanel("clients");
    } else if (interpretation.type === "tasks") {
      setActivePanel("tasks");
    } else if (interpretation.type === "appointments") {
      setActivePanel("calendar");
    }

    setMessages((current) => [
      ...current,
      createMessage("assistant", interpretation.text, interpretation),
    ]);
  }

  async function handlePendingAction(action) {
    if (action.type !== "write_availability") {
      return;
    }

    try {
      await applyAvailabilityRule(action.date, action.reason, action.status);
      const statusLabel =
        action.status === availabilityConfig.availableValue
          ? "доступен"
          : "недоступен";
      setMessages((current) => [
        ...current,
        createMessage(
          "assistant",
          `Правило применено: ${formatDateLabel(action.date)} теперь ${statusLabel}.`
        ),
      ]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        createMessage("assistant", `Не смог применить правило: ${error.message}`),
      ]);
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#eaf1ec] text-slate-950">
      <div
        aria-hidden="true"
        className="fixed inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(14,116,144,0.18),transparent_32%),radial-gradient(circle_at_82%_8%,rgba(245,158,11,0.16),transparent_30%),linear-gradient(135deg,#f8f4e8_0%,#eaf1ec_45%,#dcece7_100%)]"
      />
      <div className="fixed left-1/2 top-12 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-200/30 blur-3xl" />

      <div className="relative mx-auto grid min-h-screen max-w-[1500px] gap-6 px-4 py-4 md:px-6 lg:grid-cols-[280px_1fr] lg:py-6">
        <aside className="rounded-[32px] border border-white/60 bg-slate-950 p-5 text-white shadow-[0_30px_90px_-45px_rgba(15,23,42,0.9)] lg:sticky lg:top-6 lg:h-[calc(100vh-48px)]">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-400 text-slate-950">
              <IconSpark />
            </div>
            <div>
              <div className="text-sm font-black uppercase tracking-[0.28em] text-emerald-200">
                NexaFlow
              </div>
              <div className="text-xl font-black leading-none">Ops Board</div>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/8 p-4">
            <div className="flex items-center gap-2 text-sm font-bold text-emerald-100">
              <IconDatabase />
              Supabase
            </div>
            <div className="mt-3 text-sm leading-6 text-white/70">
              {connection.message}
            </div>
            <div className="mt-4">
              <StatusPill
                value={
                  connection.mode === "live"
                    ? "Live"
                    : connection.mode === "warning"
                      ? "Partial"
                      : configured
                        ? "Auth needed"
                        : "Demo"
                }
                tone={
                  connection.mode === "live"
                    ? "green"
                    : connection.mode === "warning"
                      ? "amber"
                      : "blue"
                }
              />
            </div>
          </div>

          <nav className="mt-8 grid gap-2">
            {[
              ["overview", "Overview"],
              ["clients", "Clients"],
              ["tasks", "Tasks"],
              ["calendar", "Calendar"],
              ["rules", "Availability rules"],
            ].map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setActivePanel(key)}
                className={`rounded-2xl px-4 py-3 text-left text-sm font-bold transition ${
                  activePanel === key
                    ? "bg-emerald-300 text-slate-950 shadow-lg shadow-emerald-950/20"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="mt-8 rounded-3xl bg-[#f6e7bd] p-4 text-slate-950">
            <div className="text-sm font-black">Boss command example</div>
            <div className="mt-2 text-sm leading-6">
              Сегодня я занят, позначь этот день недоступным.
            </div>
          </div>
        </aside>

        <section className="grid gap-6">
          <header className="overflow-hidden rounded-[36px] border border-white/70 bg-white/70 p-5 shadow-[0_30px_100px_-60px_rgba(15,23,42,0.65)] backdrop-blur md:p-8">
            <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-black text-emerald-800">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  AI navigation and operations
                </div>
                <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl">
                  Один экран для клиентов, задач, календаря и правил.
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                  Командная строка понимает обычный язык: ищет клиентов,
                  вытаскивает срочные задачи, показывает записи по датам и
                  может записывать правила доступности в Supabase.
                </p>
              </div>

              <div className="w-full max-w-md rounded-[28px] border border-slate-200 bg-slate-950 p-5 text-white shadow-2xl shadow-slate-950/20">
                {session?.user ? (
                  <div>
                    <div className="text-sm font-bold text-white/60">Signed in as</div>
                    <div className="mt-1 truncate text-lg font-black">
                      {session.user.email}
                    </div>
                    <div className="mt-4 flex gap-3">
                      <button
                        type="button"
                        onClick={() => loadDashboardData()}
                        className="rounded-2xl bg-white px-4 py-2 text-sm font-black text-slate-950 transition hover:bg-emerald-100"
                      >
                        {loading ? "Loading..." : "Refresh"}
                      </button>
                      <button
                        type="button"
                        onClick={handleSignOut}
                        className="rounded-2xl border border-white/15 px-4 py-2 text-sm font-black text-white/80 transition hover:bg-white/10"
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSignIn}>
                    <div className="text-sm font-bold text-emerald-200">
                      Supabase Auth login
                    </div>
                    <div className="mt-3 grid gap-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="boss@company.com"
                        className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-emerald-300"
                      />
                      <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Password"
                        className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-emerald-300"
                      />
                    </div>
                    {authError ? (
                      <div className="mt-3 rounded-2xl bg-rose-500/15 p-3 text-sm text-rose-100">
                        {authError}
                      </div>
                    ) : null}
                    <button
                      type="submit"
                      disabled={loading}
                      className="mt-4 w-full rounded-2xl bg-emerald-300 px-4 py-3 text-sm font-black text-slate-950 transition hover:bg-emerald-200 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {loading ? "Signing in..." : "Sign in and load live data"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </header>

          <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[34px] border border-white/70 bg-white/75 p-5 shadow-[0_30px_100px_-70px_rgba(15,23,42,0.65)] backdrop-blur md:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-emerald-700">
                    <IconSpark />
                    Assistant
                  </div>
                  <h2 className="mt-2 text-2xl font-black text-slate-950">
                    Напиши как человеку
                  </h2>
                </div>
                <label className="flex cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-black text-slate-600">
                  <input
                    type="checkbox"
                    checked={autoApplyRules}
                    onChange={(event) => setAutoApplyRules(event.target.checked)}
                    className="h-4 w-4 accent-emerald-600"
                  />
                  Auto rules
                </label>
              </div>

              <form onSubmit={handleCommandSubmit} className="mt-5">
                <div className="flex flex-col gap-3 rounded-[26px] border border-slate-200 bg-[#f7f3e9] p-3 md:flex-row">
                  <input
                    value={command}
                    onChange={(event) => setCommand(event.target.value)}
                    placeholder="Например: дай клиентов которым надо клининг"
                    className="min-h-12 flex-1 bg-transparent px-2 text-base font-semibold text-slate-950 outline-none placeholder:text-slate-400"
                  />
                  <button
                    type="submit"
                    disabled={saving}
                    className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {saving ? "Writing..." : "Run"}
                  </button>
                </div>
              </form>

              <div className="mt-4 flex flex-wrap gap-2">
                {quickPrompts.map((prompt) => (
                  <button
                    type="button"
                    key={prompt}
                    onClick={() => setCommand(prompt)}
                    className="rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-xs font-bold text-slate-600 transition hover:border-emerald-300 hover:text-emerald-800"
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              <div className="mt-5 max-h-[520px] space-y-4 overflow-y-auto pr-1">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`rounded-[24px] p-4 ${
                      message.role === "user"
                        ? "ml-auto max-w-[86%] bg-slate-950 text-white"
                        : "mr-auto bg-white/80 text-slate-700 shadow-sm"
                    }`}
                  >
                    <div className="text-sm leading-6">{message.text}</div>
                    <ResultList message={message} />
                    {message.action ? (
                      <button
                        type="button"
                        onClick={() => handlePendingAction(message.action)}
                        className="mt-4 rounded-2xl bg-emerald-600 px-4 py-2 text-sm font-black text-white transition hover:bg-emerald-700"
                      >
                        Apply to Supabase
                      </button>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
              {[
                ["Clients", clients.length, `${cleaningClients.length} cleaning`],
                ["Open tasks", openTasks.length, "needs attention"],
                [
                  "Appointments",
                  upcomingAppointments.length,
                  `${nextSevenDays.length} day view`,
                ],
                ["Unavailable", unavailableDays.length, "blocked days"],
              ].map(([label, value, hint], index) => (
                <div
                  key={label}
                  className="rounded-[30px] border border-white/70 bg-white/75 p-6 shadow-[0_25px_80px_-60px_rgba(15,23,42,0.65)] backdrop-blur"
                  style={{ animation: `nf-fade-up .5s ease ${index * 70}ms both` }}
                >
                  <div className="text-sm font-black uppercase tracking-[0.18em] text-slate-400">
                    {label}
                  </div>
                  <div className="mt-3 text-5xl font-black tracking-tight text-slate-950">
                    {value}
                  </div>
                  <div className="mt-2 text-sm font-bold text-emerald-700">{hint}</div>
                </div>
              ))}
            </div>
          </section>

          {activePanel === "overview" ? (
            <section className="grid gap-6 xl:grid-cols-3">
              <Panel title="Priority clients" className="xl:col-span-1">
                <div className="grid gap-3">
                  {clients
                    .filter((client) => /high|urgent|сроч/.test(cleanText(client.urgency)))
                    .slice(0, 5)
                    .map((client) => (
                      <ClientMiniCard key={client.id} client={client} />
                    ))}
                </div>
              </Panel>
              <Panel title="Next calendar" className="xl:col-span-1">
                <CalendarStrip
                  days={nextSevenDays}
                  appointments={upcomingAppointments}
                  availability={availability}
                />
              </Panel>
              <Panel title="Today tasks" className="xl:col-span-1">
                <TaskList
                  tasks={openTasks.filter(
                    (task) => extractDateKey(task.dueDate) === addDaysIso(0)
                  )}
                />
              </Panel>
            </section>
          ) : null}

          {activePanel === "clients" ? (
            <Panel title="Clients">
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {clients.map((client) => (
                  <ClientCard key={client.id} client={client} />
                ))}
              </div>
            </Panel>
          ) : null}

          {activePanel === "tasks" ? (
            <Panel title="Tasks">
              <div className="grid gap-4 lg:grid-cols-3">
                {["open", "waiting", "done"].map((status) => (
                  <div
                    key={status}
                    className="rounded-[26px] border border-slate-200 bg-[#f8f5ee] p-4"
                  >
                    <div className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">
                      {status}
                    </div>
                    <div className="mt-4 grid gap-3">
                      {tasks
                        .filter((task) =>
                          status === "done"
                            ? !isOpenStatus(task.status)
                            : cleanText(task.status).includes(status)
                        )
                        .map((task) => (
                          <TaskCard key={task.id} task={task} />
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </Panel>
          ) : null}

          {activePanel === "calendar" ? (
            <Panel title="Calendar">
              <div className="grid gap-4 lg:grid-cols-7">
                {nextSevenDays.map((day) => {
                  const dayAppointments = upcomingAppointments.filter(
                    (appointment) => extractDateKey(appointment.scheduledAt) === day
                  );
                  const rule = availability.find(
                    (item) => extractDateKey(item.date) === day
                  );

                  return (
                    <div
                      key={day}
                      className={`min-h-64 rounded-[26px] border p-4 ${
                        cleanText(rule?.status).includes("unavailable")
                          ? "border-rose-200 bg-rose-50"
                          : "border-slate-200 bg-white/70"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="text-sm font-black text-slate-950">
                            {formatDateLabel(day)}
                          </div>
                          <div className="mt-1 text-xs font-bold text-slate-400">
                            {day}
                          </div>
                        </div>
                        {rule ? <StatusPill value={rule.status} tone="red" /> : null}
                      </div>
                      <div className="mt-4 grid gap-3">
                        {dayAppointments.length ? (
                          dayAppointments.map((appointment) => (
                            <div
                              key={appointment.id}
                              className="rounded-2xl bg-slate-950 p-3 text-white"
                            >
                              <div className="text-xs font-bold text-emerald-200">
                                {formatTimeLabel(appointment.scheduledAt)}
                              </div>
                              <div className="mt-1 text-sm font-black">
                                {appointment.clientName}
                              </div>
                              <div className="text-xs text-white/60">
                                {appointment.service}
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="rounded-2xl border border-dashed border-slate-200 p-4 text-sm font-semibold text-slate-400">
                            No appointments
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Panel>
          ) : null}

          {activePanel === "rules" ? (
            <Panel title="Availability rules">
              <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
                <div className="rounded-[28px] border border-slate-200 bg-[#f8f5ee] p-5">
                  <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
                    <IconCalendar />
                    Quick rules
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Эти кнопки пишут в таблицу{" "}
                    <span className="font-mono font-bold">{tableConfig.availability}</span>.
                  </p>
                  <div className="mt-5 grid gap-3">
                    {[
                      ["Сегодня недоступен", addDaysIso(0)],
                      ["Завтра недоступен", addDaysIso(1)],
                      ["Послезавтра недоступен", addDaysIso(2)],
                    ].map(([label, date]) => (
                      <button
                        key={label}
                        type="button"
                        onClick={async () => {
                          try {
                            await applyAvailabilityRule(
                              date,
                              `Quick rule: ${label}`
                            );
                            setMessages((current) => [
                              ...current,
                              createMessage(
                                "assistant",
                                `${formatDateLabel(date)} помечен как недоступный.`
                              ),
                            ]);
                          } catch (error) {
                            setMessages((current) => [
                              ...current,
                              createMessage(
                                "assistant",
                                `Не смог записать правило: ${error.message}`
                              ),
                            ]);
                          }
                        }}
                        className="rounded-2xl bg-slate-950 px-4 py-3 text-left text-sm font-black text-white transition hover:bg-emerald-700"
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-3">
                  {availability.length ? (
                    availability.map((rule) => (
                      <div
                        key={rule.id}
                        className="rounded-[24px] border border-slate-200 bg-white/80 p-4"
                      >
                        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                          <div>
                            <div className="text-lg font-black text-slate-950">
                              {formatDateLabel(rule.date)}
                            </div>
                            <div className="mt-1 text-sm text-slate-500">
                              {rule.reason || "No reason saved"}
                            </div>
                          </div>
                          <StatusPill
                            value={rule.status || "rule"}
                            tone={cleanText(rule.status).includes("unavailable") ? "red" : "green"}
                          />
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="rounded-[24px] border border-dashed border-slate-300 p-8 text-center text-sm font-semibold text-slate-500">
                      No availability rules yet.
                    </div>
                  )}
                </div>
              </div>
            </Panel>
          ) : null}

          {connection.errors?.length ? (
            <div className="rounded-[28px] border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900">
              <div className="font-black">Supabase warnings</div>
              <div className="mt-2 grid gap-1 font-mono text-xs">
                {connection.errors.map((error) => (
                  <div key={error}>{error}</div>
                ))}
              </div>
            </div>
          ) : null}
        </section>
      </div>
    </main>
  );
}

function Panel({ title, children, className = "" }) {
  return (
    <section
      className={`rounded-[34px] border border-white/70 bg-white/75 p-5 shadow-[0_30px_100px_-70px_rgba(15,23,42,0.65)] backdrop-blur md:p-6 ${className}`}
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="text-2xl font-black tracking-tight text-slate-950">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function ClientMiniCard({ client }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="font-black text-slate-950">{client.name}</div>
          <div className="mt-1 text-sm text-slate-500">{client.service}</div>
        </div>
        <StatusPill value={client.urgency} tone="red" />
      </div>
    </div>
  );
}

function ClientCard({ client }) {
  return (
    <article className="rounded-[28px] border border-slate-200 bg-[#f8f5ee] p-5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/10">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-black text-slate-950">{client.name}</h3>
          <p className="mt-1 text-sm font-semibold text-emerald-700">
            {client.service}
          </p>
        </div>
        <StatusPill
          value={client.urgency}
          tone={/high|urgent|сроч/.test(cleanText(client.urgency)) ? "red" : "green"}
        />
      </div>
      <div className="mt-5 grid gap-3 text-sm text-slate-600">
        <div>
          <span className="font-black text-slate-950">Next:</span>{" "}
          {formatDateLabel(client.nextDate)}
        </div>
        <div>
          <span className="font-black text-slate-950">Status:</span> {client.status}
        </div>
        {client.phone ? (
          <div>
            <span className="font-black text-slate-950">Phone:</span> {client.phone}
          </div>
        ) : null}
        {client.address ? (
          <div>
            <span className="font-black text-slate-950">Area:</span> {client.address}
          </div>
        ) : null}
      </div>
      {client.notes ? (
        <p className="mt-5 rounded-2xl bg-white/80 p-4 text-sm leading-6 text-slate-500">
          {client.notes}
        </p>
      ) : null}
    </article>
  );
}

function TaskList({ tasks }) {
  if (!tasks.length) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 p-6 text-sm font-semibold text-slate-400">
        No tasks here. A suspiciously peaceful moment.
      </div>
    );
  }

  return (
    <div className="grid gap-3">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

function TaskCard({ task }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white/80 p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-black text-slate-950">{task.title}</h3>
          <div className="mt-1 text-sm text-slate-500">
            {task.clientName || "No client"} · {formatDateLabel(task.dueDate)}
          </div>
        </div>
        <StatusPill
          value={task.priority}
          tone={/high|urgent|сроч/.test(cleanText(task.priority)) ? "red" : "amber"}
        />
      </div>
      {task.notes ? (
        <p className="mt-3 text-sm leading-6 text-slate-500">{task.notes}</p>
      ) : null}
    </article>
  );
}

function CalendarStrip({ days, appointments, availability }) {
  return (
    <div className="grid gap-3">
      {days.map((day) => {
        const rule = availability.find((item) => extractDateKey(item.date) === day);
        const count = appointments.filter(
          (appointment) => extractDateKey(appointment.scheduledAt) === day
        ).length;

        return (
          <div
            key={day}
            className={`flex items-center justify-between rounded-2xl border p-4 ${
              cleanText(rule?.status).includes("unavailable")
                ? "border-rose-200 bg-rose-50"
                : "border-slate-200 bg-white/80"
            }`}
          >
            <div>
              <div className="font-black text-slate-950">{formatDateLabel(day)}</div>
              <div className="text-xs font-bold text-slate-400">{day}</div>
            </div>
            <div className="flex items-center gap-2">
              <StatusPill value={`${count} appt`} tone="blue" />
              {rule ? <StatusPill value={rule.status} tone="red" /> : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
