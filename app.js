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




// js for google page


const results = [
  {
    url: "waywardarchive.net/catalog",
    title: "The Wayward Archive — waywardarchive.net",
    desc: "A catalog of websites that should not exist. Browse records of lost digital artifacts, ghost URLs, and pages deleted from the public record. Last indexed: ????",
    link: "the_wayward_archive/the_wayward_archive.html"
  },
  {
    url: "community.nexlink.net/forums/thread/0099",
    title: "Is anyone else receiving this signal? — community.nexlink.net",
    desc: "I keep getting this strange signal through my old modem... it's showing me websites I've never seen before. Does anyone know what ECHO is? Why does every search lead to the same place?",
    link: ""
  },
  {
    url: "echo-corp.net/about",
    title: "ECHO Corporation — About Us",
    desc: "ECHO was founded in 2001 with a simple mission: to index what others have missed. Some pages don't want to be found. We find them anyway.",
    link: ""
  },
  {
    url: "echo-corp.net/index/[REDACTED]",
    title: "[REDACTED] — Page removed by administrator",
    desc: '<span class="redacted">████████████████████</span> This result has been removed at the request of <span class="redacted">████████████████</span>. If you believe this was done in error, contact <span class="redacted">████████████</span>.',
    link: "layer3.html"
  }
];

function showResults(query) {
  document.getElementById('top').classList.add('shifted');
  document.getElementById('results-section').classList.remove('hidden');
  document.getElementById('result-count').textContent = 'About 230 results (0.58 seconds)';

  const list = document.getElementById('results-list');
  list.innerHTML = '';

  results.forEach(r => {
    const item = document.createElement('div');
    item.innerHTML = `
      <p class="result-url">${r.url}</p>
      <a class="result-title" href="${r.link || '#'}">${r.title}</a>
      <p class="result-desc">${r.desc}</p>
    `;
    list.appendChild(item);
  });
}

document.getElementById('search-btn').addEventListener('click', () => {
  const q = document.getElementById('search-input').value.trim();
  if (q) showResults(q);
});

document.getElementById('search-input').addEventListener('keydown', e => {
  if (e.key === 'Enter' && e.target.value.trim()) showResults(e.target.value.trim());
});
