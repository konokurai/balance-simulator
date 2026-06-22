const STORAGE_KEY = "miraizandaka_state_v1";
const LOCALE_KEY = "miraizandaka_locale_v1";
const SUPPORTED_LOCALES = ["ja", "en"];

const I18N = {
  ja: {
    app: {
      title: "MiraiZandaka | 未来残高シミュレーター",
      description: "MiraiZandaka はブラウザだけで動く未来残高シミュレーターです。",
      subtitle: "未来残高シミュレーター"
    },
    language: {
      label: "言語"
    },
    menu: {
      label: "メニュー",
      sample: "サンプルに戻す",
      clear: "保存データを削除"
    },
    storage: {
      local: "localStorage保存",
      aria: "保存方法",
      note: "データはこの端末のブラウザにのみ保存されます。"
    },
    summary: {
      aria: "残高サマリー",
      current: "現在残高",
      unsaved: "未保存",
      threeMonths: "3ヶ月後の予測",
      sixMonths: "6ヶ月後の予測",
      updatedAt: "更新 {date}",
      delta: "差分 {amount}"
    },
    entry: {
      title: "予定を追加"
    },
    fields: {
      title: "タイトル",
      titlePlaceholder: "例: 食費、給与、家賃など",
      amount: "金額",
      quickAmounts: "金額をすばやく追加",
      category: "カテゴリ",
      categoryPlaceholder: "例: 教育費",
      kind: "種類",
      kindAria: "収入または支出",
      repeat: "繰り返し",
      repeatAria: "予定タイプ",
      monthlyDay: "毎月の日付",
      oneTimeDate: "単発の日付",
      currentBalance: "現在残高"
    },
    kind: {
      income: "収入",
      expense: "支出"
    },
    repeat: {
      monthly: "毎月",
      oneTime: "単発"
    },
    actions: {
      add: "追加する",
      update: "更新する",
      saveBalance: "残高を保存",
      cancelEdit: "編集をやめる",
      addCategory: "カテゴリ追加",
      deleteCategory: "{name}を削除",
      editItem: "{title}を編集",
      deleteItem: "{title}を削除"
    },
    forecast: {
      title: "予測残高の推移",
      rangeAria: "表示期間",
      range30: "30日",
      range90: "90日",
      range180: "180日",
      chartAria: "未来の残高推移グラフ",
      chartFallback: "Chart.jsを読み込むとグラフが表示されます。",
      period: "表示期間",
      final: "最終予測",
      lowest: "最低残高",
      projectedBalance: "予測残高",
      currentBalance: "現在残高"
    },
    categories: {
      defaultIncome: "収入",
      defaultHousing: "住居費",
      defaultFood: "食費",
      defaultUtilities: "光熱費",
      defaultTransport: "交通費",
      defaultOther: "その他"
    },
    schedule: {
      title: "今後の予定",
      empty: "予定はまだありません。最初の固定費や給与を追加してみましょう。",
      monthlyTotal: "毎月合計 {amount}"
    },
    feedback: {
      storageFailed: "ブラウザの保存領域に書き込めませんでした。",
      titleRequired: "タイトルを入力してください。",
      amountRequired: "金額は1円以上で入力してください。",
      balanceRequired: "現在残高を入力してください。",
      updated: "予定を更新しました。",
      added: "予定を追加しました。",
      balanceSaved: "現在残高を保存しました。",
      editing: "予定を編集しています。",
      deleted: "予定を削除しました。",
      categoryRequired: "カテゴリ名を入力してください。",
      categoryExists: "同じカテゴリがすでにあります。",
      categoryAdded: "カテゴリを追加しました。",
      categoryDeleted: "カテゴリを削除しました。"
    },
    confirm: {
      deleteSchedule: "「{title}」を削除しますか？",
      deleteCategory: "カテゴリ「{name}」を削除しますか？このカテゴリの予定は「その他」に移動します。",
      loadSample: "サンプルデータに戻しますか？現在の入力内容は上書きされます。",
      clearData: "保存データを削除しますか？画面は初期サンプルに戻ります。"
    },
    sample: {
      salary: "給与振り込み",
      rent: "家賃引き落とし",
      food: "食費",
      utility: "電気代",
      bonus: "ボーナス",
      car: "車検"
    }
  },
  en: {
    app: {
      title: "MiraiZandaka | Future Balance Simulator",
      description: "MiraiZandaka is a browser-only future balance simulator.",
      subtitle: "Future Balance Simulator"
    },
    language: {
      label: "Language"
    },
    menu: {
      label: "Menu",
      sample: "Reset to sample",
      clear: "Delete saved data"
    },
    storage: {
      local: "Saved locally",
      aria: "Storage method",
      note: "Your data is saved only in this browser on this device."
    },
    summary: {
      aria: "Balance summary",
      current: "Current balance",
      unsaved: "Not saved",
      threeMonths: "Projected in 3 months",
      sixMonths: "Projected in 6 months",
      updatedAt: "Updated {date}",
      delta: "Change {amount}"
    },
    entry: {
      title: "Add schedule"
    },
    fields: {
      title: "Title",
      titlePlaceholder: "e.g. groceries, salary, rent",
      amount: "Amount",
      quickAmounts: "Quick amount add buttons",
      category: "Category",
      categoryPlaceholder: "e.g. education",
      kind: "Kind",
      kindAria: "Income or expense",
      repeat: "Repeat",
      repeatAria: "Schedule type",
      monthlyDay: "Monthly day",
      oneTimeDate: "One-time date",
      currentBalance: "Current balance"
    },
    kind: {
      income: "Income",
      expense: "Expense"
    },
    repeat: {
      monthly: "Monthly",
      oneTime: "One-time"
    },
    actions: {
      add: "Add",
      update: "Update",
      saveBalance: "Save balance",
      cancelEdit: "Cancel edit",
      addCategory: "Add category",
      deleteCategory: "Delete {name}",
      editItem: "Edit {title}",
      deleteItem: "Delete {title}"
    },
    forecast: {
      title: "Projected balance",
      rangeAria: "Forecast range",
      range30: "30 days",
      range90: "90 days",
      range180: "180 days",
      chartAria: "Future balance chart",
      chartFallback: "Load Chart.js to show the chart.",
      period: "Range",
      final: "Final projection",
      lowest: "Lowest balance",
      projectedBalance: "Projected balance",
      currentBalance: "Current balance"
    },
    categories: {
      defaultIncome: "Income",
      defaultHousing: "Housing",
      defaultFood: "Food",
      defaultUtilities: "Utilities",
      defaultTransport: "Transport",
      defaultOther: "Other"
    },
    schedule: {
      title: "Upcoming schedules",
      empty: "No schedules yet. Add your first fixed cost or income.",
      monthlyTotal: "Monthly total {amount}"
    },
    feedback: {
      storageFailed: "Could not write to this browser's storage.",
      titleRequired: "Enter a title.",
      amountRequired: "Enter an amount greater than zero.",
      balanceRequired: "Enter your current balance.",
      updated: "Schedule updated.",
      added: "Schedule added.",
      balanceSaved: "Current balance saved.",
      editing: "Editing a schedule.",
      deleted: "Schedule deleted.",
      categoryRequired: "Enter a category name.",
      categoryExists: "That category already exists.",
      categoryAdded: "Category added.",
      categoryDeleted: "Category deleted."
    },
    confirm: {
      deleteSchedule: "Delete \"{title}\"?",
      deleteCategory: "Delete category \"{name}\"? Its schedules will move to Other.",
      loadSample: "Reset to sample data? Your current entries will be overwritten.",
      clearData: "Delete saved data? The screen will return to the sample data."
    },
    sample: {
      salary: "Salary deposit",
      rent: "Rent payment",
      food: "Groceries",
      utility: "Electric bill",
      bonus: "Bonus",
      car: "Vehicle inspection"
    }
  }
};

const elements = {
  metaDescription: document.querySelector('meta[name="description"]'),
  localeSelect: document.querySelector("#localeSelect"),
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
  categorySelect: document.querySelector("#categorySelect"),
  categoryNameInput: document.querySelector("#categoryNameInput"),
  addCategoryButton: document.querySelector("#addCategoryButton"),
  categoryChips: document.querySelector("#categoryChips"),
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

let currentLocale = loadLocale();
let state = loadState();
let selectedKind = "expense";
let selectedRepeat = "monthly";
let editingId = null;
let chartRange = 90;
let balanceChart = null;

initialize();

function initialize() {
  elements.localeSelect.value = currentLocale;
  elements.dateInput.value = formatDateKey(addDays(today(), 7));
  elements.balanceInput.value = state.user_profile.current_balance;
  setKind("expense");
  setRepeat("monthly");
  bindEvents();
  applyI18n();
  render();
}

function bindEvents() {
  elements.menuButton.addEventListener("click", toggleMenu);
  elements.localeSelect.addEventListener("change", () => setLocale(elements.localeSelect.value));
  document.addEventListener("click", closeMenuOnOutsideClick);
  elements.loadSampleButton.addEventListener("click", loadSampleData);
  elements.clearDataButton.addEventListener("click", clearSavedData);
  elements.saveBalanceButton.addEventListener("click", saveCurrentBalance);
  elements.cancelEditButton.addEventListener("click", resetForm);
  elements.form.addEventListener("submit", saveScheduleFromForm);
  elements.addCategoryButton.addEventListener("click", addCategoryFromInput);
  elements.categoryNameInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addCategoryFromInput();
    }
  });
  elements.categoryChips.addEventListener("click", (event) => {
    const deleteButton = event.target.closest("[data-delete-category-id]");
    if (deleteButton) {
      deleteCategory(deleteButton.dataset.deleteCategoryId);
    }
  });
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

function normalizeLocale(locale) {
  const normalized = String(locale || "").toLowerCase().split("-")[0];
  return SUPPORTED_LOCALES.includes(normalized) ? normalized : "ja";
}

function loadLocale() {
  try {
    const saved = localStorage.getItem(LOCALE_KEY);
    if (saved) {
      return normalizeLocale(saved);
    }
  } catch {
    // Keep using browser language when localStorage is unavailable.
  }

  return normalizeLocale(navigator.language || "ja");
}

function persistLocale(locale) {
  try {
    localStorage.setItem(LOCALE_KEY, locale);
  } catch {
    // Locale choice is non-critical; the app can still run without persisting it.
  }
}

function setLocale(locale) {
  currentLocale = normalizeLocale(locale);
  elements.localeSelect.value = currentLocale;
  persistLocale(currentLocale);
  applyI18n();
  render();
}

function t(key, values = {}) {
  const fallback = getNested(I18N.ja, key) || key;
  const template = getNested(I18N[currentLocale], key) || fallback;
  return interpolate(template, values);
}

function getNested(source, path) {
  return path.split(".").reduce((value, part) => {
    if (value && Object.prototype.hasOwnProperty.call(value, part)) {
      return value[part];
    }
    return undefined;
  }, source);
}

function interpolate(template, values) {
  return String(template).replace(/\{(\w+)\}/g, (_, key) => {
    return values[key] ?? "";
  });
}

function applyI18n() {
  document.documentElement.lang = currentLocale;
  document.title = t("app.title");
  elements.metaDescription?.setAttribute("content", t("app.description"));

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
    node.setAttribute("aria-label", t(node.dataset.i18nAriaLabel));
  });

  setSubmitButtonLabel();
}

function defaultCategories() {
  return [
    { id: "cat_income", nameKey: "categories.defaultIncome", isDefault: true },
    { id: "cat_housing", nameKey: "categories.defaultHousing", isDefault: true },
    { id: "cat_food", nameKey: "categories.defaultFood", isDefault: true },
    { id: "cat_utilities", nameKey: "categories.defaultUtilities", isDefault: true },
    { id: "cat_transport", nameKey: "categories.defaultTransport", isDefault: true },
    { id: "cat_other", nameKey: "categories.defaultOther", isDefault: true }
  ];
}

function defaultState() {
  return {
    user_profile: {
      current_balance: 290000,
      updated_at: new Date().toISOString()
    },
    categories: defaultCategories(),
    schedules: [
      {
        id: "item_salary",
        title: t("sample.salary"),
        categoryId: "cat_income",
        amount: 295000,
        type: "monthly",
        day: 25
      },
      {
        id: "item_rent",
        title: t("sample.rent"),
        categoryId: "cat_housing",
        amount: -85000,
        type: "monthly",
        day: 27
      },
      {
        id: "item_food",
        title: t("sample.food"),
        categoryId: "cat_food",
        amount: -30000,
        type: "monthly",
        day: 27
      },
      {
        id: "item_utility",
        title: t("sample.utility"),
        categoryId: "cat_utilities",
        amount: -8500,
        type: "monthly",
        day: 3
      },
      {
        id: "item_bonus",
        title: t("sample.bonus"),
        categoryId: "cat_income",
        amount: 120000,
        type: "one-time",
        date: "2026-07-10"
      },
      {
        id: "item_car",
        title: t("sample.car"),
        categoryId: "cat_transport",
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

    const categories = normalizeCategories(parsed.categories);
    return {
      user_profile: {
        current_balance: Number(parsed.user_profile.current_balance) || 0,
        updated_at: parsed.user_profile.updated_at || new Date().toISOString()
      },
      categories,
      schedules: parsed.schedules
        .filter((item) => item && item.id && item.title && Number.isFinite(Number(item.amount)))
        .map((item) => ({
          id: String(item.id),
          title: String(item.title).slice(0, 50),
          categoryId: resolveCategoryId(item.categoryId || item.category, categories),
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

function normalizeCategories(savedCategories) {
  const defaults = defaultCategories();
  const categories = [...defaults];

  if (!Array.isArray(savedCategories)) {
    return categories;
  }

  savedCategories.forEach((category) => {
    const normalized = normalizeCategory(category);
    if (!normalized || defaults.some((item) => item.id === normalized.id) || categories.some((item) => item.name === normalized.name)) {
      return;
    }
    categories.push(normalized);
  });

  return categories;
}

function normalizeCategory(category) {
  if (typeof category === "string") {
    const name = category.trim();
    if (!name) {
      return null;
    }
    return {
      id: `cat_${slugify(name)}`,
      name,
      isDefault: false
    };
  }

  if (!category || typeof category !== "object") {
    return null;
  }

  const id = String(category.id || "").trim();
  const name = String(category.name || "").trim();
  const nameKey = String(category.nameKey || "").trim();

  if (!id || (!name && !nameKey)) {
    return null;
  }

  return {
    id,
    name,
    nameKey,
    isDefault: Boolean(category.isDefault)
  };
}

function resolveCategoryId(value, categories = state?.categories || defaultCategories()) {
  if (!value) {
    return "cat_other";
  }

  const raw = String(value);
  if (categories.some((category) => category.id === raw)) {
    return raw;
  }

  const byName = categories.find((category) => categoryDisplayName(category) === raw || category.name === raw);
  return byName?.id || "cat_other";
}

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch {
    setFeedback(t("feedback.storageFailed"), true);
    return false;
  }
}

function render() {
  renderCategories();
  renderSummary();
  renderChart();
  renderScheduleList();
}

function renderCategories() {
  const selectedCategoryId = elements.categorySelect.value || "cat_other";
  elements.categorySelect.innerHTML = state.categories
    .map((category) => {
      const name = categoryDisplayName(category);
      return `<option value="${escapeHtml(category.id)}">${escapeHtml(name)}</option>`;
    })
    .join("");

  elements.categorySelect.value = state.categories.some((category) => category.id === selectedCategoryId)
    ? selectedCategoryId
    : "cat_other";

  const customCategories = state.categories.filter((category) => !category.isDefault);
  elements.categoryChips.innerHTML = customCategories
    .map((category) => {
      const name = categoryDisplayName(category);
      return `
        <span class="category-chip">
          ${escapeHtml(name)}
          <button type="button" data-delete-category-id="${escapeHtml(category.id)}" aria-label="${escapeHtml(t("actions.deleteCategory", { name }))}">
            <span class="material-symbols-rounded" aria-hidden="true">close</span>
          </button>
        </span>
      `;
    })
    .join("");
}

function categoryDisplayName(category) {
  if (category?.nameKey) {
    return t(category.nameKey);
  }
  return category?.name || t("categories.defaultOther");
}

function addCategoryFromInput() {
  const name = elements.categoryNameInput.value.trim();
  if (!name) {
    setFeedback(t("feedback.categoryRequired"), true);
    elements.categoryNameInput.focus();
    return;
  }

  const exists = state.categories.some((category) => categoryDisplayName(category).toLowerCase() === name.toLowerCase() || category.name?.toLowerCase() === name.toLowerCase());
  if (exists) {
    setFeedback(t("feedback.categoryExists"), true);
    elements.categoryNameInput.focus();
    return;
  }

  const category = {
    id: uniqueCategoryId(name),
    name,
    isDefault: false
  };
  state.categories.push(category);
  elements.categoryNameInput.value = "";
  persist();
  renderCategories();
  elements.categorySelect.value = category.id;
  setFeedback(t("feedback.categoryAdded"), false);
}

function deleteCategory(id) {
  const category = state.categories.find((item) => item.id === id);
  if (!category || category.isDefault) {
    return;
  }

  const name = categoryDisplayName(category);
  if (!window.confirm(t("confirm.deleteCategory", { name }))) {
    return;
  }

  state.categories = state.categories.filter((item) => item.id !== id);
  state.schedules = state.schedules.map((item) => (
    item.categoryId === id ? { ...item, categoryId: "cat_other" } : item
  ));
  persist();
  render();
  setFeedback(t("feedback.categoryDeleted"), false);
}

function uniqueCategoryId(name) {
  const base = `cat_${slugify(name) || Date.now().toString(36)}`;
  if (!state.categories.some((category) => category.id === base)) {
    return base;
  }
  return `${base}_${Date.now().toString(36)}`;
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 28);
}

function renderSummary() {
  const current = state.user_profile.current_balance;
  const threeMonth = projectBalance(90).at(-1).balance;
  const sixMonth = projectBalance(180).at(-1).balance;

  elements.currentBalanceText.textContent = formatCurrency(current);
  elements.updatedAtText.textContent = t("summary.updatedAt", { date: formatDateTime(state.user_profile.updated_at) });
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
    <span>${t("forecast.period")} <strong>${formatRangeDays(chartRange)}</strong></span>
    <span>${t("forecast.final")} <strong>${formatCurrency(finalRow.balance)}</strong></span>
    <span>${t("forecast.lowest")} <strong>${formatCurrency(minRow.balance)} / ${formatShortDate(parseDateKey(minRow.date))}</strong></span>
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
          label: t("forecast.projectedBalance"),
          data: displayRows.map((row) => row.balance),
          borderColor: "#149246",
          backgroundColor: "rgba(20, 146, 70, 0.1)",
          fill: true,
          tension: 0.28,
          pointRadius: displayRows.length > 20 ? 0 : 3,
          pointHoverRadius: 5
        },
        {
          label: t("forecast.currentBalance"),
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
  elements.monthlyTotalText.textContent = t("schedule.monthlyTotal", { amount: formatSignedCurrency(monthlyTotal) });

  const occurrences = getUpcomingOccurrences(10, 220);
  elements.emptyState.hidden = occurrences.length > 0;
  elements.scheduleList.innerHTML = occurrences
    .map((occurrence) => {
      const date = parseDateKey(occurrence.date);
      const item = occurrence.schedule;
      const isIncome = item.amount > 0;
      const safeId = escapeHtml(item.id);
      const categoryName = categoryDisplayName(state.categories.find((category) => category.id === resolveCategoryId(item.categoryId)));
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
              <span class="badge category-badge">${escapeHtml(categoryName)}</span>
              <span class="badge">${item.type === "monthly" ? t("repeat.monthly") : t("repeat.oneTime")}</span>
            </div>
            <div class="schedule-amount ${isIncome ? "income" : "expense"}">${formatSignedCurrency(item.amount)}</div>
          </div>
          <div class="row-actions">
            <button type="button" data-edit-id="${safeId}" aria-label="${escapeHtml(t("actions.editItem", { title: item.title }))}">
              <span class="material-symbols-rounded" aria-hidden="true">edit</span>
            </button>
            <button type="button" data-delete-id="${safeId}" aria-label="${escapeHtml(t("actions.deleteItem", { title: item.title }))}">
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
    setFeedback(t("feedback.titleRequired"), true);
    elements.titleInput.focus();
    return;
  }

  if (!Number.isFinite(rawAmount) || rawAmount <= 0) {
    setFeedback(t("feedback.amountRequired"), true);
    elements.amountInput.focus();
    return;
  }

  if (!Number.isFinite(balance)) {
    setFeedback(t("feedback.balanceRequired"), true);
    elements.balanceInput.focus();
    return;
  }

  const schedule = {
    id: editingId || `item_${Date.now().toString(36)}`,
    title,
    categoryId: elements.categorySelect.value || "cat_other",
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
    setFeedback(t("feedback.updated"), false);
  } else {
    state.schedules.push(schedule);
    setFeedback(t("feedback.added"), false);
  }

  persist();
  resetForm({ keepFeedback: true });
  render();
}

function saveCurrentBalance() {
  const balance = Number(elements.balanceInput.value);
  if (!Number.isFinite(balance)) {
    setFeedback(t("feedback.balanceRequired"), true);
    elements.balanceInput.focus();
    return;
  }

  state.user_profile.current_balance = Math.trunc(balance);
  state.user_profile.updated_at = new Date().toISOString();
  persist();
  render();
  setFeedback(t("feedback.balanceSaved"), false);
}

function startEdit(id) {
  const item = state.schedules.find((schedule) => schedule.id === id);
  if (!item) {
    return;
  }

  editingId = item.id;
  elements.titleInput.value = item.title;
  elements.categorySelect.value = resolveCategoryId(item.categoryId);
  elements.amountInput.value = Math.abs(item.amount);
  elements.balanceInput.value = state.user_profile.current_balance;
  setKind(item.amount > 0 ? "income" : "expense");
  setRepeat(item.type);

  if (item.type === "monthly") {
    elements.dayInput.value = item.day || 1;
  } else {
    elements.dateInput.value = item.date || formatDateKey(today());
  }

  setSubmitButtonLabel();
  elements.cancelEditButton.hidden = false;
  setFeedback(t("feedback.editing"), false);
  elements.titleInput.focus();
  elements.form.scrollIntoView({ behavior: "smooth", block: "start" });
}

function deleteSchedule(id) {
  const item = state.schedules.find((schedule) => schedule.id === id);
  if (!item) {
    return;
  }

  if (!window.confirm(t("confirm.deleteSchedule", { title: item.title }))) {
    return;
  }

  state.schedules = state.schedules.filter((schedule) => schedule.id !== id);
  persist();
  render();
  resetForm({ keepFeedback: true });
  setFeedback(t("feedback.deleted"), false);
}

function resetForm(options = {}) {
  editingId = null;
  elements.form.reset();
  elements.balanceInput.value = state.user_profile.current_balance;
  elements.categorySelect.value = "cat_other";
  elements.categoryNameInput.value = "";
  elements.dayInput.value = 25;
  elements.dateInput.value = formatDateKey(addDays(today(), 7));
  setKind("expense");
  setRepeat("monthly");
  setSubmitButtonLabel();
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

function setSubmitButtonLabel() {
  const icon = editingId ? "check_circle" : "add_circle";
  const label = editingId ? t("actions.update") : t("actions.add");
  elements.submitButton.innerHTML = `<span class="material-symbols-rounded" aria-hidden="true">${icon}</span><span data-i18n-submit-label>${label}</span>`;
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
  if (!window.confirm(t("confirm.loadSample"))) {
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
  if (!window.confirm(t("confirm.clearData"))) {
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
  const title = item.title.toLowerCase();
  if (item.amount > 0) {
    return title.includes("給与") || title.includes("salary") ? "account_balance_wallet" : "redeem";
  }
  if (title.includes("家") || title.includes("rent") || title.includes("home")) return "home";
  if (title.includes("食") || title.includes("food") || title.includes("grocer")) return "shopping_cart";
  if (title.includes("電") || title.includes("ガス") || title.includes("水") || title.includes("utility") || title.includes("electric")) return "lightbulb";
  if (title.includes("車") || title.includes("交通") || title.includes("car") || title.includes("vehicle") || title.includes("transport")) return "directions_car";
  if (title.includes("通信") || title.includes("スマホ") || title.includes("phone") || title.includes("internet")) return "wifi";
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
  return new Intl.DateTimeFormat(localeTag(), {
    month: "numeric",
    day: "numeric"
  }).format(date);
}

function formatWeekday(date) {
  return date.toLocaleDateString(localeTag(), { weekday: "short" });
}

function formatDateTime(isoString) {
  try {
    return new Date(isoString).toLocaleString(localeTag(), {
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  } catch {
    return t("summary.unsaved");
  }
}

function formatCurrency(value) {
  return new Intl.NumberFormat(localeTag(), {
    style: "currency",
    currency: "JPY",
    maximumFractionDigits: 0
  }).format(value);
}

function formatCompactCurrency(value) {
  return new Intl.NumberFormat(localeTag(), {
    notation: "compact",
    maximumFractionDigits: 1
  }).format(value);
}

function formatSignedCurrency(value) {
  const sign = value > 0 ? "+" : value < 0 ? "-" : "";
  return `${sign}${formatCurrency(Math.abs(value))}`;
}

function formatDelta(value) {
  return t("summary.delta", { amount: formatSignedCurrency(value) });
}

function formatRangeDays(days) {
  return currentLocale === "ja" ? `${days}日` : `${days} days`;
}

function localeTag() {
  return currentLocale === "en" ? "en-US" : "ja-JP";
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
