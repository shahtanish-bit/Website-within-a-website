const lines = document.querySelectorAll('#terminal p');
const title = document.getElementById('title');
const status = document.getElementById('status');
const btn = document.getElementById('connect-btn');
const toast = document.getElementById('toast');

const LINE_DELAY = 300;
const TOAST_DELAY_AFTER_LINES = 200;
const TOAST_VISIBLE_DURATION = 3000;
const READY_DELAY_AFTER_TOAST = 500;

function revealTerminalLines() {
  lines.forEach((line, i) => {
    setTimeout(() => { line.style.opacity = '1'; }, i * LINE_DELAY);
  });
  return lines.length * LINE_DELAY;
}

function showToast() {
  toast.classList.add('show');
  setTimeout(hideToast, TOAST_VISIBLE_DURATION);
}

function hideToast() {
  toast.classList.remove('show');
  setTimeout(showConnectionReady, READY_DELAY_AFTER_TOAST);
}

function showConnectionReady() {
  status.textContent = 'CONNECTION READY';
  title.textContent = '▐ signal acquired ▌';
  btn.style.opacity = '1';
}

function init() {
  const linesFinishedAt = revealTerminalLines();
  setTimeout(showToast, linesFinishedAt + TOAST_DELAY_AFTER_LINES);
}

init();