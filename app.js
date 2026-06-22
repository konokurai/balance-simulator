const STORAGE_KEY = "miraizandaka_state_v1";

const elements = {
  menuButton: document.querySelector("#menuButton"),
  menuPanel: document.querySelector("#menuPanel"),
  loadSampleButton: document.querySelector("#loadSampleButton"),
  clearDataButton: document.querySelector("#clearDataButton"),
  currentBalanceText: document.querySelector("#currentBalanceText"),
  updatedAtText: document.querySelector("#updatedAtText"),
  threeMonthText: document.querySelector("#threeMonthText"),
  threeMonthDelta: document.querySelector("#threeMonthDelta"),
  sixMonthText: document.querySelector("#sixMonthText"),
  sixMonthDelta: document.querySelector("#sixMonthDelta"),
  form: document.querySelector("#scheduleForm"),
  titleInput: document.querySelector("#titleInput"),
  amountInput: document.querySelector("#amountInput"),
  balanceInput: document.querySelector("#balanceInput"),
  dayInput: document.querySelector("#dayInput"),
  dateInput: document.querySelector("#dateInput"),
  monthlyDayField: document.querySelector("#monthlyDayField"),
  oneTimeDateField: document.querySelector("#oneTimeDateField"),
  incomeButton: document.querySelector("#incomeButton"),
  expenseButton: document.querySelector("#expenseButton"),
  submitButton: document.querySelector("#submitButton"),
  cancelEditButton: document.querySelector("#cancelEditButton"),
  saveBalanceButton: document.querySelector("#saveBalanceButton"),
  formFeedback: document.querySelector("#formFeedback"),
  rangeTabs: document.querySelectorAll("[data-range]"),
  forecastNote: document.querySelector("#forecastNote"),
  chartCanvas: document.querySelector("#balanceChart"),
  chartFallback: document.querySelector("#chartFallback"),
  scheduleList: document.querySelector("#scheduleList"),
  emptyState: document.querySelector("#emptyState"),
  monthlyTotalText: document.querySelector("#monthlyTotalText")
};

let state = loadState();
let selectedKind = "expense";
let selectedRepeat = "monthly";
let editingId = null;
let chartRange = 90;
let balanceChart = null;

initialize();

function initialize() {
  elements.dateInput.value = formatDateKey(addDays(today(), 7));
  elements.balanceInput.value = state.user_profile.current_balance;
  setKind("expense");
  setRepeat("monthly");
  bindEvents();
  render();
}

function bindEvents() {
  elements.menuButton.addEventListener("click", toggleMenu);
  document.addEventListener("click", closeMenuOnOutsideClick);
  elements.loadSampleButton.addEventListener("click", loadSampleData);
  elements.clearDataButton.addEventListener("click", clearSavedData);
  elements.saveBalanceButton.addEventListener("click", saveCurrentBalance);
  elements.cancelEditButton.addEventListener("click", resetForm);
  elements.form.addEventListener("submit", saveScheduleFromForm);

  document.querySelectorAll("[data-kind]").forEach((button) => {
    button.addEventListener("click", () => setKind(button.dataset.kind));
  });

  document.querySelectorAll("[data-repeat]").forEach((button) => {
    button.addEventListener("click", () => setRepeat(button.dataset.repeat));
  });

  document.querySelectorAll("[data-amount]").forEach((button) => {
    button.addEventListener("click", () => addQuickAmount(Number(button.dataset.amount)));
  });

  elements.rangeTabs.forEach((button) => {
    button.addEventListener("click", () => {
      chartRange = Number(button.dataset.range);
      elements.rangeTabs.forEach((tab) => tab.classList.toggle("is-active", tab === button));
      renderChart();
    });
  });

  elements.scheduleList.addEventListener("click", (event) => {
    const editButton = event.target.closest("[data-edit-id]");
    const deleteButton = event.target.closest("[data-delete-id]");

    if (editButton) {
      startEdit(editButton.dataset.editId);
    }

    if (deleteButton) {
      deleteSchedule(deleteButton.dataset.deleteId);
    }
  });
}

function defaultState() {
  return {
    user_profile: {
      current_balance: 290000,
      updated_at: new Date().toISOString()
    },
    schedules: [
      {
        id: "item_salary",
        title: "給与振り込み",
        amount: 295000,
        type: "monthly",
        day: 25
      },
      {
        id: "item_rent",
        title: "家賃引き落とし",
        amount: -85000,
        type: "monthly",
        day: 27
      },
      {
        id: "item_food",
        title: "食費",
        amount: -30000,
        type: "monthly",
        day: 27
      },
      {
        id: "item_utility",
        title: "電気代",
        amount: -8500,
        type: "monthly",
        day: 3
      },
      {
        id: "item_bonus",
        title: "ボーナス",
        amount: 120000,
        type: "one-time",
        date: "2026-07-10"
      },
      {
        id: "item_car",
        title: "車検",
        amount: -100000,
        type: "one-time",
        date: "2026-09-15"
      }
    ]
  };
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return defaultState();
    }

    const parsed = JSON.parse(saved);
    if (!parsed.user_profile || !Array.isArray(parsed.schedules)) {
      return defaultState();
    }

    return {
      user_profile: {
        current_balance: Number(parsed.user_profile.current_balance) || 0,
        updated_at: parsed.user_profile.updated_at || new Date().toISOString()
      },
      schedules: parsed.schedules
        .filter((item) => item && item.id && item.title && Number.isFinite(Number(item.amount)))
        .map((item) => ({
          id: String(item.id),
          title: String(item.title).slice(0, 50),
          amount: Math.trunc(Number(item.amount)),
          type: item.type === "one-time" ? "one-time" : "monthly",
          day: Number(item.day) || 1,
          date: item.date
        }))
    };
  } catch {
    return defaultState();
  }
}

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch {
    setFeedback("ブラウザの保存領域に書き込めませんでした。", true);
    return false;
  }
}

function render() {
  renderSummary();
  renderChart();
  renderScheduleList();
}

function renderSummary() {
  const current = state.user_profile.current_balance;
  const threeMonth = projectBalance(90).at(-1).balance;
  const sixMonth = projectBalance(180).at(-1).balance;

  elements.currentBalanceText.textContent = formatCurrency(current);
  elements.updatedAtText.textContent = `更新 ${formatDateTime(state.user_profile.updated_at)}`;
  elements.threeMonthText.textContent = formatCurrency(threeMonth);
  elements.sixMonthText.textContent = formatCurrency(sixMonth);
  elements.threeMonthDelta.textContent = formatDelta(threeMonth - current);
  elements.sixMonthDelta.textContent = formatDelta(sixMonth - current);
  elements.threeMonthText.classList.toggle("is-negative", threeMonth < 0);
  elements.sixMonthText.classList.toggle("is-negative", sixMonth < 0);
  elements.threeMonthDelta.classList.toggle("is-negative", threeMonth - current < 0);
  elements.threeMonthDelta.classList.toggle("is-positive", threeMonth - current > 0);
  elements.sixMonthDelta.classList.toggle("is-negative", sixMonth - current < 0);
  elements.sixMonthDelta.classList.toggle("is-positive", sixMonth - current > 0);
}

function renderChart() {
  const projection = projectBalance(chartRange);
  const displayRows = thinChartRows(projection, chartRange);
  const minRow = projection.reduce((lowest, row) => (row.balance < lowest.balance ? row : lowest), projection[0]);
  const finalRow = projection.at(-1);

  elements.forecastNote.innerHTML = `
    <span>表示期間 <strong>${chartRange}日</strong></span>
    <span>最終予測 <strong>${formatCurrency(finalRow.balance)}</strong></span>
    <span>最低残高 <strong>${formatCurrency(minRow.balance)} / ${formatShortDate(parseDateKey(minRow.date))}</strong></span>
  `;

  if (!window.Chart) {
    elements.chartCanvas.hidden = true;
    elements.chartFallback.hidden = false;
    return;
  }

  elements.chartCanvas.hidden = false;
  elements.chartFallback.hidden = true;

  if (balanceChart) {
    balanceChart.destroy();
  }

  balanceChart = new Chart(elements.chartCanvas, {
    type: "line",
    data: {
      labels: displayRows.map((row) => formatShortDate(parseDateKey(row.date))),
      datasets: [
        {
          label: "予測残高",
          data: displayRows.map((row) => row.balance),
          borderColor: "#149246",
          backgroundColor: "rgba(20, 146, 70, 0.1)",
          fill: true,
          tension: 0.28,
          pointRadius: displayRows.length > 20 ? 0 : 3,
          pointHoverRadius: 5
        },
        {
          label: "現在残高",
          data: displayRows.map(() => state.user_profile.current_balance),
          borderColor: "#aab6b0",
          borderDash: [6, 6],
          borderWidth: 2,
          pointRadius: 0,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 280
      },
      plugins: {
        legend: {
          labels: {
            color: "#607068",
            boxWidth: 22,
            usePointStyle: true,
            font: {
              family: "'Noto Sans JP', sans-serif",
              weight: 700
            }
          }
        },
        tooltip: {
          callbacks: {
            label: (context) => `${context.dataset.label}: ${formatCurrency(context.raw)}`
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: "#607068",
            maxTicksLimit: 7,
            font: {
              family: "'Noto Sans JP', sans-serif",
              weight: 700
            }
          },
          grid: {
            display: false
          }
        },
        y: {
          ticks: {
            color: "#607068",
            callback: (value) => formatCompactCurrency(value),
            font: {
              family: "'Noto Sans JP', sans-serif",
              weight: 700
            }
          },
          grid: {
            color: "rgba(96, 112, 104, 0.16)"
          }
        }
      }
    }
  });
}

function renderScheduleList() {
  const monthlyTotal = state.schedules
    .filter((item) => item.type === "monthly")
    .reduce((total, item) => total + item.amount, 0);
  elements.monthlyTotalText.textContent = `毎月合計 ${formatSignedCurrency(monthlyTotal)}`;

  const occurrences = getUpcomingOccurrences(10, 220);
  elements.emptyState.hidden = occurrences.length > 0;
  elements.scheduleList.innerHTML = occurrences
    .map((occurrence) => {
      const date = parseDateKey(occurrence.date);
      const item = occurrence.schedule;
      const isIncome = item.amount > 0;
      const safeId = escapeHtml(item.id);
      return `
        <article class="schedule-item">
          <time class="schedule-date" datetime="${occurrence.date}">
            ${formatShortDate(date)}
            <small>${formatWeekday(date)}</small>
          </time>
          <div class="schedule-icon ${isIncome ? "income" : "expense"}">
            <span class="material-symbols-rounded" aria-hidden="true">${chooseIcon(item)}</span>
          </div>
          <div class="schedule-main">
            <div class="schedule-title">
              <span>${escapeHtml(item.title)}</span>
              <span class="badge">${item.type === "monthly" ? "毎月" : "単発"}</span>
            </div>
            <div class="schedule-amount ${isIncome ? "income" : "expense"}">${formatSignedCurrency(item.amount)}</div>
          </div>
          <div class="row-actions">
            <button type="button" data-edit-id="${safeId}" aria-label="${escapeHtml(item.title)}を編集">
              <span class="material-symbols-rounded" aria-hidden="true">edit</span>
            </button>
            <button type="button" data-delete-id="${safeId}" aria-label="${escapeHtml(item.title)}を削除">
              <span class="material-symbols-rounded" aria-hidden="true">delete</span>
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

function saveScheduleFromForm(event) {
  event.preventDefault();
  const title = elements.titleInput.value.trim();
  const rawAmount = Math.abs(Number(elements.amountInput.value));
  const amount = selectedKind === "income" ? rawAmount : -rawAmount;
  const balance = Number(elements.balanceInput.value);

  if (!title) {
    setFeedback("タイトルを入力してください。", true);
    elements.titleInput.focus();
    return;
  }

  if (!Number.isFinite(rawAmount) || rawAmount <= 0) {
    setFeedback("金額は1円以上で入力してください。", true);
    elements.amountInput.focus();
    return;
  }

  if (!Number.isFinite(balance)) {
    setFeedback("現在残高を入力してください。", true);
    elements.balanceInput.focus();
    return;
  }

  const schedule = {
    id: editingId || `item_${Date.now().toString(36)}`,
    title,
    amount: Math.trunc(amount),
    type: selectedRepeat
  };

  if (selectedRepeat === "monthly") {
    const day = clamp(Number(elements.dayInput.value), 1, 31);
    schedule.day = day;
  } else {
    schedule.date = elements.dateInput.value || formatDateKey(today());
  }

  state.user_profile.current_balance = Math.trunc(balance);
  state.user_profile.updated_at = new Date().toISOString();

  if (editingId) {
    state.schedules = state.schedules.map((item) => (item.id === editingId ? schedule : item));
    setFeedback("予定を更新しました。", false);
  } else {
    state.schedules.push(schedule);
    setFeedback("予定を追加しました。", false);
  }

  persist();
  resetForm({ keepFeedback: true });
  render();
}

function saveCurrentBalance() {
  const balance = Number(elements.balanceInput.value);
  if (!Number.isFinite(balance)) {
    setFeedback("現在残高を入力してください。", true);
    elements.balanceInput.focus();
    return;
  }

  state.user_profile.current_balance = Math.trunc(balance);
  state.user_profile.updated_at = new Date().toISOString();
  persist();
  render();
  setFeedback("現在残高を保存しました。", false);
}

function startEdit(id) {
  const item = state.schedules.find((schedule) => schedule.id === id);
  if (!item) {
    return;
  }

  editingId = item.id;
  elements.titleInput.value = item.title;
  elements.amountInput.value = Math.abs(item.amount);
  elements.balanceInput.value = state.user_profile.current_balance;
  setKind(item.amount > 0 ? "income" : "expense");
  setRepeat(item.type);

  if (item.type === "monthly") {
    elements.dayInput.value = item.day || 1;
  } else {
    elements.dateInput.value = item.date || formatDateKey(today());
  }

  elements.submitButton.innerHTML = '<span class="material-symbols-rounded" aria-hidden="true">check_circle</span>更新する';
  elements.cancelEditButton.hidden = false;
  setFeedback("予定を編集しています。", false);
  elements.titleInput.focus();
  elements.form.scrollIntoView({ behavior: "smooth", block: "start" });
}

function deleteSchedule(id) {
  const item = state.schedules.find((schedule) => schedule.id === id);
  if (!item) {
    return;
  }

  if (!window.confirm(`「${item.title}」を削除しますか？`)) {
    return;
  }

  state.schedules = state.schedules.filter((schedule) => schedule.id !== id);
  persist();
  render();
  resetForm({ keepFeedback: true });
  setFeedback("予定を削除しました。", false);
}

function resetForm(options = {}) {
  editingId = null;
  elements.form.reset();
  elements.balanceInput.value = state.user_profile.current_balance;
  elements.dayInput.value = 25;
  elements.dateInput.value = formatDateKey(addDays(today(), 7));
  setKind("expense");
  setRepeat("monthly");
  elements.submitButton.innerHTML = '<span class="material-symbols-rounded" aria-hidden="true">add_circle</span>追加する';
  elements.cancelEditButton.hidden = true;

  if (!options.keepFeedback) {
    setFeedback("", false);
  }
}

function setKind(kind) {
  selectedKind = kind === "income" ? "income" : "expense";
  document.querySelectorAll("[data-kind]").forEach((button) => {
    const active = button.dataset.kind === selectedKind;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function setRepeat(type) {
  selectedRepeat = type === "one-time" ? "one-time" : "monthly";
  document.querySelectorAll("[data-repeat]").forEach((button) => {
    const active = button.dataset.repeat === selectedRepeat;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  elements.monthlyDayField.hidden = selectedRepeat !== "monthly";
  elements.oneTimeDateField.hidden = selectedRepeat !== "one-time";
}

function addQuickAmount(amount) {
  const current = Math.abs(Number(elements.amountInput.value)) || 0;
  elements.amountInput.value = current + amount;
  elements.amountInput.focus();
}

function setFeedback(message, isError) {
  elements.formFeedback.textContent = message;
  elements.formFeedback.classList.toggle("is-error", Boolean(isError));
}

function toggleMenu() {
  const shouldOpen = elements.menuPanel.hidden;
  elements.menuPanel.hidden = !shouldOpen;
  elements.menuButton.setAttribute("aria-expanded", String(shouldOpen));
}

function closeMenuOnOutsideClick(event) {
  if (elements.menuPanel.hidden) {
    return;
  }

  if (event.target.closest(".topbar-actions")) {
    return;
  }

  elements.menuPanel.hidden = true;
  elements.menuButton.setAttribute("aria-expanded", "false");
}

function loadSampleData() {
  if (!window.confirm("サンプルデータに戻しますか？現在の入力内容は上書きされます。")) {
    return;
  }

  state = defaultState();
  persist();
  resetForm();
  render();
  elements.menuPanel.hidden = true;
  elements.menuButton.setAttribute("aria-expanded", "false");
}

function clearSavedData() {
  if (!window.confirm("保存データを削除しますか？画面は初期サンプルに戻ります。")) {
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
  state = defaultState();
  resetForm();
  render();
  elements.menuPanel.hidden = true;
  elements.menuButton.setAttribute("aria-expanded", "false");
}

function projectBalance(days) {
  const rows = [];
  let balance = state.user_profile.current_balance;
  const start = today();

  for (let offset = 0; offset <= days; offset += 1) {
    const date = addDays(start, offset);
    if (offset > 0) {
      balance += transactionsOnDate(date).reduce((total, item) => total + item.amount, 0);
    }

    rows.push({
      date: formatDateKey(date),
      balance
    });
  }

  return rows;
}

function transactionsOnDate(date) {
  return state.schedules.filter((item) => occursOnDate(item, date));
}

function occursOnDate(item, date) {
  if (item.type === "one-time") {
    return item.date === formatDateKey(date);
  }

  const targetDay = clamp(Number(item.day) || 1, 1, 31);
  const lastDay = daysInMonth(date.getFullYear(), date.getMonth());
  return date.getDate() === Math.min(targetDay, lastDay);
}

function getUpcomingOccurrences(limit, withinDays) {
  const occurrences = [];
  const start = today();

  for (let offset = 0; offset <= withinDays; offset += 1) {
    const date = addDays(start, offset);
    transactionsOnDate(date).forEach((schedule) => {
      occurrences.push({
        date: formatDateKey(date),
        schedule
      });
    });

    if (occurrences.length >= limit) {
      break;
    }
  }

  return occurrences.slice(0, limit);
}

function thinChartRows(rows, days) {
  const maxPoints = days <= 30 ? 31 : 32;
  const step = Math.max(1, Math.ceil(rows.length / maxPoints));
  const thinned = rows.filter((_, index) => index % step === 0);
  const last = rows.at(-1);

  if (thinned.at(-1)?.date !== last.date) {
    thinned.push(last);
  }

  return thinned;
}

function chooseIcon(item) {
  const title = item.title;
  if (item.amount > 0) {
    return title.includes("給与") ? "account_balance_wallet" : "redeem";
  }
  if (title.includes("家")) return "home";
  if (title.includes("食")) return "shopping_cart";
  if (title.includes("電") || title.includes("ガス") || title.includes("水")) return "lightbulb";
  if (title.includes("車") || title.includes("交通")) return "directions_car";
  if (title.includes("通信") || title.includes("スマホ")) return "wifi";
  return "payments";
}

function today() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function daysInMonth(year, monthIndex) {
  return new Date(year, monthIndex + 1, 0).getDate();
}

function parseDateKey(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatShortDate(date) {
  return `${date.getMonth() + 1}/${date.getDate()}`;
}

function formatWeekday(date) {
  return date.toLocaleDateString("ja-JP", { weekday: "short" });
}

function formatDateTime(isoString) {
  try {
    return new Date(isoString).toLocaleString("ja-JP", {
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  } catch {
    return "未保存";
  }
}

function formatCurrency(value) {
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
    maximumFractionDigits: 0
  }).format(value);
}

function formatCompactCurrency(value) {
  return new Intl.NumberFormat("ja-JP", {
    notation: "compact",
    maximumFractionDigits: 1
  }).format(value);
}

function formatSignedCurrency(value) {
  const sign = value > 0 ? "+" : value < 0 ? "-" : "";
  return `${sign}${formatCurrency(Math.abs(value))}`;
}

function formatDelta(value) {
  return `差分 ${formatSignedCurrency(value)}`;
}

function clamp(value, min, max) {
  if (!Number.isFinite(value)) {
    return min;
  }
  return Math.min(max, Math.max(min, Math.trunc(value)));
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };
    return entities[character];
  });
}
