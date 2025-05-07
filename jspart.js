const planner = document.getElementById("planner");
const clock = document.getElementById("clock");
const toast = document.getElementById("toast");

function updateClock() {
  const now = new Date();
  clock.textContent = now.toLocaleString();
}
setInterval(updateClock, 1000);
updateClock();

const hours = [
  "9 AM", "10 AM", "11 AM", "12 PM",
  "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"
];

function getHourNumber(label) {
  const [time, period] = label.split(' ');
  let hr = parseInt(time);
  if (period === 'PM' && hr !== 12) hr += 12;
  return hr;
}

const currentHour = new Date().getHours();

hours.forEach(label => {
  const hourNum = getHourNumber(label);
  const status =
    hourNum < currentHour ? "past" :
    hourNum === currentHour ? "present" :
    "future";

  const taskText = localStorage.getItem(label) || "";

  const block = document.createElement("div");
  block.className = `time-block`;

  block.innerHTML = `
    <div class="hour">${label}</div>
    <textarea class="task ${status}" placeholder="What’s the plan?" id="task-${label}">${taskText}</textarea>
    <button class="saveBtn" onclick="saveTask('${label}')">💾</button>
  `;

  planner.appendChild(block);
});

function saveTask(label) {
  const input = document.getElementById(`task-${label}`);
  localStorage.setItem(label, input.value);
  showToast();
}

function showToast() {
  toast.style.opacity = "1";
  setTimeout(() => {
    toast.style.opacity = "0";
  }, 2000);
}
