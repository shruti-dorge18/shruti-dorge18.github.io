const root = document.documentElement;
const toggle = document.getElementById("tg");

if (toggle) {
  toggle.addEventListener("click", () => {
    const isDark = root.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch (e) {}
  });
}

const roles = ["I design PCBs", "I write Verilog"];
const target = document.getElementById("ty");
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function tick() {
  if (!target) return;
  const current = roles[roleIndex];
  charIndex += deleting ? -1 : 1;
  target.textContent = current.slice(0, charIndex);
  let delay = deleting ? 40 : 90;

  if (!deleting && charIndex === current.length) {
    deleting = true;
    delay = 1600;
  } else if (deleting && charIndex === 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 350;
  }
  setTimeout(tick, delay);
}
tick();

function updateLocalTime() {
  const time = new Date().toLocaleTimeString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });
  const location = document.getElementById("loc");
  if (location) location.textContent = `Mumbai, India, +IST ${time}`;
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}
updateLocalTime();
setInterval(updateLocalTime, 30000);
