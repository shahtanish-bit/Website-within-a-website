const lines = document.querySelectorAll("#terminal p");
const title = document.getElementById("title");
const status = document.getElementById("status");
const btn = document.getElementById("connect-btn");
const toast = document.getElementById("toast");

const LINE_DELAY = 300;
const TOAST_DELAY_AFTER_LINES = 200;
const TOAST_VISIBLE_DURATION = 3000;
const READY_DELAY_AFTER_TOAST = 500;

function revealTerminalLines() {
  lines.forEach((line, i) => {
    setTimeout(() => {
      line.style.opacity = "1";
    }, i * LINE_DELAY);
  });
  return lines.length * LINE_DELAY;
}

function showConnectToast() {
  toast.classList.add("show");
  setTimeout(hideToast, TOAST_VISIBLE_DURATION);
}

function hideToast() {
  toast.classList.remove("show");
  setTimeout(showConnectionReady, READY_DELAY_AFTER_TOAST);
}

function showConnectionReady() {
  status.textContent = "CONNECTION READY";
  title.textContent = "▐ signal acquired ▌";
  btn.style.opacity = "1";
}

function init() {
  const linesFinishedAt = revealTerminalLines();
  setTimeout(showConnectToast, linesFinishedAt + TOAST_DELAY_AFTER_LINES);
}

if (toast) init();




// js for google page
const results = [
  {
    url: "waywardarchive.net/catalog",
    title: "The Wayward Archive — waywardarchive.net",
    desc: "A catalog of websites that should not exist. Browse records of lost digital artifacts, ghost URLs, and pages deleted from the public record. Last indexed: ????",
    link: "the_wayward_archive/the_wayward_archive.html",
  },
  {
    url: "community.nexlink.net/forums/thread/0099",
    title: "Is anyone else receiving this signal? — community.nexlink.net",
    desc: "I keep getting this strange signal through my old modem... it's showing me websites I've never seen before. Does anyone know what ECHO is? Why does every search lead to the same place?",
    link: "",
  },
  {
    url: "echo-corp.net/about",
    title: "ECHO Corporation — About Us",
    desc: "ECHO was founded in 2001 with a simple mission: to index what others have missed. Some pages don't want to be found. We find them anyway.",
    link: "",
  },
  {
    url: "echo-corp.net/index/[REDACTED]",
    title: "[REDACTED] — Page removed by administrator",
    desc: '<span class="redacted">████████████████████</span> This result has been removed at the request of <span class="redacted">████████████████</span>. If you believe this was done in error, contact <span class="redacted">████████████</span>.',
    link: "layer3.html",
  },
];

function showResults(query) {
  document.getElementById("top").classList.add("shifted");
  document.getElementById("results-section").classList.remove("hidden");
  document.getElementById("result-count").textContent =
    "About 230 results (0.58 seconds)";

  const list = document.getElementById("results-list");
  list.innerHTML = "";

  results.forEach((r) => {
    const item = document.createElement("div");
    item.innerHTML = `
      <p class="result-url">${r.url}</p>
      <a class="result-title" href="${r.link || "#"}">${r.title}</a>
      <p class="result-desc">${r.desc}</p>
    `;
    list.appendChild(item);
  });
}

const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");

if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    const q = searchInput.value.trim();
    if (q) showResults(q);
  });
}

if (searchInput) {
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.target.value.trim())
      showResults(e.target.value.trim());
  });
}




// for da error popupp on the archive web
const classifiedFile = document.querySelector(".classified-file");
const classifiedRecord = document.getElementById("classified-record");
const records = document.querySelector(".records");
const achievement = document.getElementById("achievement");

let achievementTimer = null;

if (classifiedFile) {
  classifiedFile.addEventListener("click", () => {
    const clone = classifiedRecord.cloneNode(true);
    clone.classList.remove("hidden");
    clone.removeAttribute("id");
    records.insertBefore(clone, records.firstChild);

    showAchievement();
  });
}

function showAchievement() {
  if (achievementTimer) clearTimeout(achievementTimer);

  achievement.classList.add("visible");

  achievementTimer = setTimeout(() => {
    achievement.classList.remove("visible");
  }, 4000);
}






// for the nexus thing
function toggleStartMenu() {
      const menu = document.getElementById('start-menu');
      menu.classList.toggle('hidden');
    }

    function closeStartMenu() {
      document.getElementById('start-menu').classList.add('hidden');
    }

    function openAbout() {
      showToast('toast-about');
    }

    function shutDown() {
      window.location.href = '../lattice_social/lattice_social.html';
      closeStartMenu();
    }


    document.addEventListener('click', (e) => {
      const menu = document.getElementById('start-menu');
      const btn = document.querySelector('.start-btn');
      if (!menu.contains(e.target) && e.target !== btn) {
        menu.classList.add('hidden');
      }
    });

    

    let toastTimer = null;

    function showToast(id) {
      // hide any currently visible toast first (ik im smart 😼😼)
      document.querySelectorAll('.nexus-achievement').forEach(t => t.classList.remove('visible'));
      if (toastTimer) clearTimeout(toastTimer);

      const toast = document.getElementById(id);
      toast.classList.add('visible');
      toastTimer = setTimeout(() => toast.classList.remove('visible'), 7000);
    }

    function openRecycleBin() {
      showToast('nexus-achievement');
    }

    function openMyComputer() {
      document.getElementById('mycomputer-window').classList.remove('hidden');
    }

    function openReadme() {
      document.getElementById('readme-window').classList.remove('hidden');
    }

    function openWarning() {
      document.getElementById('warning-window').classList.remove('hidden');
    }

    function closeWindow(id) {
      document.getElementById(id).classList.add('hidden');
    }

    function updateClock() {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      document.getElementById('taskbar-time').textContent = h + ':' + m;
    }

    updateClock();
    setInterval(updateClock, 1000);








// for the error popup aftr u click on confidential in way acrchive
    function triggerClassifiedPopup(e) {
  e.preventDefault();

  const classifiedRecord = document.getElementById('classified-record');
  const records = document.querySelector('.records');

  const clone = classifiedRecord.cloneNode(true);
  clone.classList.remove('hidden');
  clone.removeAttribute('id');
  records.insertBefore(clone, records.firstChild);

  showAchievement();
}

















// for nexlink forums

function openThread(id) {
  document.querySelectorAll('.thread-view').forEach(t => t.classList.add('hidden'));
  const el = document.getElementById(id);
  el.classList.remove('hidden');
  setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50);
}

function closeThread(id) {
  document.getElementById(id).classList.add('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}




function closeThread(id) {
  document.getElementById(id).classList.add('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function postReply(threadId) {
  const view = document.getElementById(threadId);
  const textarea = view.querySelector('textarea');
  const text = textarea.value.trim();
  if (!text) return;

  const posts = view.querySelector('.thread-posts');
  const noPostsMsg = posts.querySelector('.no-posts');
  if (noPostsMsg) noPostsMsg.remove();

  // get current time
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-GB').replace(/\//g, '/');
  const timeStr = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  // guest post
  const guestPost = document.createElement('div');
  guestPost.classList.add('post-entry');
  guestPost.innerHTML = `
    <div class="post-user">
      <p class="post-username">guest_user</p>
      <p class="post-rank">New Member</p>
      <div class="post-avatar">👤</div>
      <p class="post-count">Posts: 1</p>
    </div>
    <div class="post-content">
      <p class="post-meta">Posted: ${dateStr}, ${timeStr}</p>
      <p>${text}</p>
    </div>
  `;
  posts.appendChild(guestPost);
  textarea.value = '';
  guestPost.scrollIntoView({ behavior: 'smooth' });

  // quietharbor auto-reply after 2 seconds
  setTimeout(() => {
    const reply = document.createElement('div');
    reply.classList.add('post-entry');
    reply.innerHTML = `
      <div class="post-user">
        <p class="post-username">quietharbor</p>
        <p class="post-rank">[ SUSPENDED ]</p>
        <div class="post-avatar">🌊</div>
        <p class="post-count">Posts: 247</p>
      </div>
      <div class="post-content">
        <p class="post-meta">Posted: just now — [THIS USER IS SUSPENDED. THIS POST SHOULD NOT BE VISIBLE.]</p>
        <p class="post-red">You found this. That means you're already in it.</p>
        <p class="post-red">Keep going. The garden is real.</p>
        <br>
        <a href="javascript:void(0)" class="post-link-red">→ Continue deeper</a>
      </div>
    `;
    posts.appendChild(reply);
    reply.scrollIntoView({ behavior: 'smooth' });
  }, 2000);
}
