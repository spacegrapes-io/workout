const STORAGE_KEY = "cassius-workout-v2";

const DAY_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const DAY_LONG = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const LIFT_NOTE =
  "Rest about 2 minutes on the first two lifts and about 90 seconds on the rest. The last set of each should be hard, with about 1 rep left. Add weight when you hit the top of the range. Eat a meal with protein before you start. Sharp joint pain means stop that exercise and write it in the note.";

const PLAN = [
  {
    name: "Steady run",
    headline: "6 km",
    detail: "Steady · about 35–45 minutes",
    cell: "6 km",
    kind: "run",
    coaching:
      "Continuous for all 6 km, at a pace where you can speak in short sentences. Eat something small beforehand if this is the first thing you do.",
    blocks: [
      {
        id: "kms",
        name: "6 km steady",
        cue: "Same effort the whole way. Short sentences. Walk only if a joint starts to hurt.",
        sets: 6,
        labels: ["Km 1", "Km 2", "Km 3", "Km 4", "Km 5", "Km 6"],
        unit: "min",
        unitName: "Time",
      },
    ],
  },
  {
    name: "Upper",
    headline: "Chest and back",
    detail: "About 65 minutes",
    cell: "Chest",
    kind: "lift",
    coaching: LIFT_NOTE,
    blocks: [
      {
        id: "warmup",
        name: "Warmup",
        cue: "Five minutes easy, then two progressively heavier sets of bench before the work sets.",
        sets: 1,
        labels: ["Ramp-up sets"],
      },
      {
        id: "bench",
        name: "Barbell bench press",
        cue: "Feet flat, shoulder blades squeezed, bar to mid-chest, full lockout. These are working sets.",
        sets: 4,
        reps: "5–8",
        unit: "lb",
        unitName: "Weight",
      },
      {
        id: "incline",
        name: "Incline dumbbell press",
        cue: "Bench near 30 degrees. Lower until your upper arms are about parallel with the floor.",
        sets: 4,
        reps: "8–10",
        unit: "lb",
        unitName: "Per hand",
      },
      {
        id: "dips",
        name: "Chest dips",
        cue: "Lean forward. Add weight once you can do 10 clean reps. Feet-elevated push-ups, 3 seconds down, if you have no dip bars.",
        sets: 3,
        reps: "6–10",
        unit: "lb",
        unitName: "Added",
      },
      {
        id: "row",
        name: "Barbell row or chest-supported row",
        cue: "Pull to your lower ribs. Torso stays set. No jerking the weight up.",
        sets: 4,
        reps: "6–8",
        unit: "lb",
        unitName: "Weight",
      },
      {
        id: "pullup",
        name: "Pull-ups or heavy pulldown",
        cue: "Pull-ups if the reps stay clean. Add weight when 8 reps is comfortable. Otherwise a heavy pulldown to the upper chest.",
        sets: 4,
        reps: "6–8",
        unit: "lb",
        unitName: "Added",
      },
      {
        id: "press",
        name: "Overhead press",
        cue: "Dumbbells or barbell. Ribs down, full lockout overhead.",
        sets: 3,
        reps: "6–8",
        unit: "lb",
        unitName: "Weight",
      },
      {
        id: "core",
        name: "Hanging leg raise or cable crunch",
        cue: "Control it. Stop before your lower back takes over.",
        sets: 3,
        reps: "8–12",
        unit: "lb",
        unitName: "Weight",
      },
    ],
  },
  {
    name: "Lower",
    headline: "Legs",
    detail: "About 65 minutes",
    cell: "Legs",
    kind: "lift",
    coaching: LIFT_NOTE,
    blocks: [
      {
        id: "warmup",
        name: "Warmup",
        cue: "Five minutes easy, then two progressively heavier sets of the squat.",
        sets: 1,
        labels: ["Ramp-up sets"],
      },
      {
        id: "squat",
        name: "Back squat or leg press",
        cue: "Full depth you can keep a tight back. On the leg press, don't let your hips tuck under.",
        sets: 4,
        reps: "6–8",
        unit: "lb",
        unitName: "Weight",
      },
      {
        id: "rdl",
        name: "Romanian deadlift",
        cue: "Soft knees, hips back, bar close to your legs. Heavy, and stop before your lower back rounds.",
        sets: 4,
        reps: "6–8",
        unit: "lb",
        unitName: "Weight",
      },
      {
        id: "split",
        name: "Bulgarian split squat",
        cue: "Rear foot on a bench, short stride, front heel down. Use dumbbells that make the last reps hard.",
        sets: 3,
        reps: "8 each leg",
        unit: "lb",
        unitName: "Per hand",
      },
      {
        id: "curl",
        name: "Leg curl",
        cue: "Hips stay down. Lower for a full 3 seconds.",
        sets: 4,
        reps: "8–12",
        unit: "lb",
        unitName: "Weight",
      },
      {
        id: "lunge",
        name: "Walking lunge",
        cue: "Long steps, torso tall. This should burn, not bounce.",
        sets: 3,
        reps: "10 each leg",
        unit: "lb",
        unitName: "Per hand",
      },
      {
        id: "calf",
        name: "Standing calf raise",
        cue: "Heavy. Pause at the bottom stretch and at the top.",
        sets: 4,
        reps: "10–12",
        unit: "lb",
        unitName: "Weight",
      },
      {
        id: "core",
        name: "Hanging knee raise",
        cue: "Pelvis tucks at the top. Slow on the way down.",
        sets: 3,
        reps: "10–15",
      },
    ],
  },
  {
    name: "Strong run",
    headline: "8 km",
    detail: "Steady, then a strong finish · about 45–55 minutes",
    cell: "8 km",
    kind: "run",
    coaching:
      "The first 5 km are steady. The last 3 km are a real push. Eat a meal beforehand.",
    blocks: [
      {
        id: "kms",
        name: "8 km with a strong finish",
        cue: "Km 1–5: short sentences. Km 6–8: a few words at a time, hard enough that you want them to end.",
        sets: 8,
        labels: [
          "Km 1",
          "Km 2",
          "Km 3",
          "Km 4",
          "Km 5",
          "Km 6 · strong",
          "Km 7 · strong",
          "Km 8 · strong",
        ],
        unit: "min",
        unitName: "Time",
      },
    ],
  },
  {
    name: "Upper",
    headline: "Chest again",
    detail: "About 70 minutes",
    cell: "Chest",
    kind: "lift",
    coaching: LIFT_NOTE,
    blocks: [
      {
        id: "warmup",
        name: "Warmup",
        cue: "Five minutes easy, then two progressively heavier sets of the incline press.",
        sets: 1,
        labels: ["Ramp-up sets"],
      },
      {
        id: "incline",
        name: "Incline barbell press",
        cue: "Main chest lift today. Bar to the upper chest, shoulder blades stay tight.",
        sets: 4,
        reps: "6–8",
        unit: "lb",
        unitName: "Weight",
      },
      {
        id: "dbpress",
        name: "Flat dumbbell press",
        cue: "Heavier than a pump set. Touch the lower chest and drive up.",
        sets: 4,
        reps: "8–10",
        unit: "lb",
        unitName: "Per hand",
      },
      {
        id: "fly",
        name: "Cable fly or pec deck",
        cue: "Soft elbows. Load it so the last reps are a grind, then squeeze for a second.",
        sets: 3,
        reps: "10–12",
        unit: "lb",
        unitName: "Weight",
      },
      {
        id: "row",
        name: "One-arm dumbbell row",
        cue: "Brace on a bench. Pull toward your hip and pause. Heavy enough to stay in the rep range.",
        sets: 4,
        reps: "6–8 each side",
        unit: "lb",
        unitName: "Per hand",
      },
      {
        id: "press",
        name: "Overhead press",
        cue: "Four hard sets. Ribs down, bar or dumbbells finish over the shoulders.",
        sets: 4,
        reps: "6–8",
        unit: "lb",
        unitName: "Weight",
      },
      {
        id: "lateral",
        name: "Lateral raise",
        cue: "Strict. Lead with the elbows and stop at shoulder height. Use a weight that fails near 12.",
        sets: 3,
        reps: "10–12",
        unit: "lb",
        unitName: "Per hand",
      },
      {
        id: "facepull",
        name: "Face pull",
        cue: "Pull to your face, hands beside your ears. Heavier than a warmup band.",
        sets: 3,
        reps: "12–15",
        unit: "lb",
        unitName: "Weight",
      },
    ],
  },
  {
    name: "Lower",
    headline: "Heavy legs",
    detail: "About 65 minutes",
    cell: "Legs",
    kind: "lift",
    coaching: LIFT_NOTE,
    blocks: [
      {
        id: "warmup",
        name: "Warmup",
        cue: "Five minutes easy, then two progressively heavier pulls before the work sets.",
        sets: 1,
        labels: ["Ramp-up sets"],
      },
      {
        id: "deadlift",
        name: "Trap-bar or conventional deadlift",
        cue: "Brace hard and push the floor away. Stop the set if your lower back rounds. This is the heavy lift of the week.",
        sets: 4,
        reps: "5",
        unit: "lb",
        unitName: "Weight",
      },
      {
        id: "squat",
        name: "Front squat or leg press",
        cue: "After the deadlifts, stay heavy but keep the reps clean.",
        sets: 3,
        reps: "6–8",
        unit: "lb",
        unitName: "Weight",
      },
      {
        id: "thrust",
        name: "Hip thrust",
        cue: "Chin tucked, ribs down, heavy squeeze at the top. Add weight across the sets.",
        sets: 4,
        reps: "6–8",
        unit: "lb",
        unitName: "Weight",
      },
      {
        id: "curl",
        name: "Leg curl",
        cue: "Three-second lower. Last reps should be difficult.",
        sets: 3,
        reps: "8–10",
        unit: "lb",
        unitName: "Weight",
      },
      {
        id: "calf",
        name: "Calf raise",
        cue: "Heavy, full range, pause at the bottom.",
        sets: 4,
        reps: "8–12",
        unit: "lb",
        unitName: "Weight",
      },
      {
        id: "core",
        name: "Ab wheel or hanging leg raise",
        cue: "Ab wheel from the knees if the full version folds your back. Otherwise hanging leg raises.",
        sets: 3,
        reps: "8–12",
      },
    ],
  },
  {
    name: "Long run",
    headline: "12 km",
    detail: "Steady · about 70–85 minutes",
    cell: "12 km",
    kind: "run",
    coaching:
      "One pace for all 12 km. Short sentences from the first kilometer to the last. Eat a real meal beforehand. Tomorrow's run is shorter, so spend this one smooth.",
    blocks: [
      {
        id: "kms",
        name: "12 km steady",
        cue: "Check each kilometer as you finish it. Hold the same effort. A joint that hurts sharply means stop and note it.",
        sets: 12,
        labels: [
          "Km 1",
          "Km 2",
          "Km 3",
          "Km 4",
          "Km 5",
          "Km 6",
          "Km 7",
          "Km 8",
          "Km 9",
          "Km 10",
          "Km 11",
          "Km 12",
        ],
        unit: "min",
        unitName: "Time",
      },
    ],
  },
];

const SCHEDULE = [
  ["Mon", "Chest and back, heavy", "Lift"],
  ["Tue", "Squat and hinge", "Lift"],
  ["Wed", "8 km, last 3 km strong", "Run"],
  ["Thu", "Chest, shoulders, back", "Lift"],
  ["Fri", "Deadlift and legs", "Lift"],
  ["Sat", "12 km steady", "Run"],
  ["Sun", "6 km steady", "Run"],
];

let selected = todayIso();

const app = document.querySelector("#app");
app.addEventListener("click", onClick);
app.addEventListener("input", onInput);
render();

function onClick(event) {
  const target = event.target.closest("button");
  if (!target) return;
  if (target.dataset.day) {
    selected = target.dataset.day;
    render();
    return;
  }
  if (target.dataset.shift) {
    selected = toIso(addDays(parseIso(selected), Number(target.dataset.shift)));
    render();
    return;
  }
  if (target.dataset.today !== undefined) {
    selected = todayIso();
    render();
    return;
  }
  if (target.dataset.clear !== undefined) {
    const data = load();
    data[selected] = emptyLog();
    save(data);
    render();
    return;
  }
  if (target.dataset.set) {
    const data = load();
    const log = data[selected] || emptyLog();
    const key = target.dataset.set;
    log.sets = { ...log.sets, [key]: !log.sets[key] };
    data[selected] = log;
    save(data);
    render();
  }
}

function onInput(event) {
  const target = event.target;
  const data = load();
  const log = data[selected] || emptyLog();
  if (target.dataset.load) {
    log.loads = { ...log.loads, [target.dataset.load]: target.value };
  } else if (target.dataset.note !== undefined) {
    log.note = target.value;
  } else {
    return;
  }
  data[selected] = log;
  save(data);
}

function render() {
  const date = parseIso(selected);
  const plan = PLAN[date.getDay()];
  const data = load();
  const log = data[selected] || emptyLog();
  const counts = progress(plan, log);
  const monday = startOfMonday(date);
  const today = todayIso();
  let markedNext = false;

  const days = Array.from({ length: 7 }, (_, offset) => {
    const dayDate = addDays(monday, offset);
    const iso = toIso(dayDate);
    const dow = dayDate.getDay();
    const dayPlan = PLAN[dow];
    const dayLog = data[iso] || emptyLog();
    const dayCounts = progress(dayPlan, dayLog);
    const classes = [
      "day",
      iso === selected ? "selected" : "",
      iso === today ? "today" : "",
      dayCounts.total > 0 && dayCounts.done === dayCounts.total ? "done" : "",
    ]
      .filter(Boolean)
      .join(" ");
    return `<button class="${classes}" type="button" data-day="${iso}">
      <strong>${DAY_SHORT[dow]}</strong>
      <span>${dayCounts.done === dayCounts.total ? "Done" : dayPlan.cell}</span>
    </button>`;
  }).join("");

  const blocks = plan.blocks
    .map((block) => {
      const sets = Array.from({ length: block.sets }, (_, index) => {
        const key = `${block.id}-${index}`;
        const done = Boolean(log.sets[key]);
        const isNext = !done && !markedNext;
        if (isNext) markedNext = true;
        const label = block.labels
          ? block.labels[index]
          : `Set ${index + 1}${block.reps ? ` · ${block.reps}` : ""}`;
        return `<button class="set${done ? " done" : ""}${isNext ? " next" : ""}" type="button" data-set="${key}" aria-pressed="${done}">
          <span class="mark">${done ? "✓" : ""}</span>
          <span>${esc(label)}</span>
        </button>`;
      }).join("");
      const loadField = block.unit
        ? `<label class="load"><span>${esc(block.unitName || "Weight")}</span>
            <input data-load="${esc(block.id)}" inputmode="decimal" autocomplete="off" value="${esc(log.loads[block.id] || "")}" />
            <span>${esc(block.unit)}</span></label>`
        : "";
      return `<section class="block">
        <h2>${esc(block.name)}</h2>
        <p class="cue">${esc(block.cue)}</p>
        ${loadField}
        <div class="sets">${sets}</div>
      </section>`;
    })
    .join("");

  const hasLog =
    Object.values(log.sets).some(Boolean) ||
    Object.values(log.loads).some((value) => value) ||
    log.note;

  app.innerHTML = `
    <p class="wordmark">Cassius</p>
    <h1 class="headline">${esc(plan.headline)}</h1>
    <p class="detail">${esc(DAY_LONG[date.getDay()])} · ${esc(plan.detail)}</p>
    <div class="progress-row">
      <span>${counts.done} of ${counts.total} checked</span>
      <span>${formatLong(date)}</span>
    </div>
    <div class="bar" aria-hidden="true"><div class="bar-fill" style="width:${counts.total ? Math.round((counts.done / counts.total) * 100) : 0}%"></div></div>
    <div class="week">${days}</div>
    <div class="week-nav">
      <button class="ghost" type="button" data-shift="-7">Previous</button>
      <p>${esc(weekLabel(monday))}</p>
      <button class="ghost" type="button" data-shift="7">Next</button>
    </div>
    ${selected !== today ? `<div class="actions"><button class="solid" type="button" data-today>Back to today</button></div>` : ""}
    <p class="note-line">${esc(plan.coaching)}</p>
    ${blocks}
    <label class="field">
      <span>Note for ${esc(formatLong(date))}</span>
      <textarea data-note placeholder="How it felt, anything that hurt.">${esc(log.note)}</textarea>
    </label>
    ${hasLog ? `<div class="actions"><button class="ghost" type="button" data-clear>Clear this day</button></div>` : ""}
    <section class="schedule">
      <h2>The week</h2>
      <ol>
        ${SCHEDULE.map(
          ([day, work, kind]) =>
            `<li><span class="when">${day}</span><span>${work}</span><span class="tag">${kind}</span></li>`,
        ).join("")}
      </ol>
    </section>
    <section class="why">
      <h2>Food and the gut</h2>
      <p>Eat regular meals, including a meal with protein before you lift or run. About 150 grams of protein a day and a small calorie deficit is the fat-loss setup that still lets you build muscle. Going most of the day without food, or doing these heavy sessions fasted, makes the lifting worse and the muscle harder to keep. Dinner, then breakfast, is a normal gap. The runs are 8 km Wednesday, 12 km Saturday, and 6 km Sunday — 26 km total. When the 12 km feels smooth two weeks in a row, add 1 km to Saturday only.</p>
    </section>
    <p class="save-note">Checks save on this device. A different phone or computer starts its own log.</p>
  `;
}

function progress(plan, log) {
  let total = 0;
  let done = 0;
  for (const block of plan.blocks) {
    for (let index = 0; index < block.sets; index += 1) {
      total += 1;
      if (log.sets[`${block.id}-${index}`]) done += 1;
    }
  }
  return { total, done };
}

function emptyLog() {
  return { sets: {}, loads: {}, note: "" };
}

function load() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function save(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function todayIso() {
  return toIso(new Date());
}

function toIso(date) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

function parseIso(iso) {
  const [year, month, day] = iso.split("-").map((part) => Number(part));
  return new Date(year, (month || 1) - 1, day || 1);
}

function addDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
}

function startOfMonday(date) {
  const day = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const dow = day.getDay();
  const diff = dow === 0 ? -6 : 1 - dow;
  return addDays(day, diff);
}

function formatLong(date) {
  return `${MONTHS[date.getMonth()]} ${date.getDate()}`;
}

function weekLabel(monday) {
  return `${formatLong(monday)} – ${formatLong(addDays(monday, 6))}`;
}

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
