/* =========================================================
   EDIT ME — all personal content lives in this config block.
   Replace text, image paths, and song info here. Nothing
   below the CONFIG section needs to change for basic edits.
   ========================================================= */
const CONFIG = {

  // shown on the lock screen
  lockNote: "I love you today, tomorrow, and forever.",

  // Wallpapers — put photo path here (e.g. "assets/photos/lock.jpg" or "assets/photos/photo1.jpg")
  // leave empty ("") to keep the default dark iOS gradient
  wallpapers: {
    lock: "assets/photos/lock.jpg", // Wallpaper untuk Lock Screen
    home: "assets/photos/home.jpg", // Wallpaper untuk Home Screen
  },

  // Messages app — each line is one bubble. sender: "me" or "them"
  messages: [
    { sender: "me", text: "Sayang" },
    { sender: "me", text: "Kalau aku disuruh teriak ke dunia, aku bakal bisikin ke kamu" },
    { sender: "them", text: "Kenapa gitu?" },
    { sender: "them", text: "Woy!!?" },
    { sender: "me", text: "Karena kamu dunia aku" },
    { sender: "me", text: "I love you kak" },
    { sender: "them", text: "Gembel :(" },
    { sender: "them", text: "Pret banget kamu" },
    { sender: "me", text: "Kalau kamu kan pretty wkww" },
  ],

  // Gallery app — replace src with real paths inside assets/photos/
  // leave src empty ("") to show a placeholder tile instead of an image
  photos: [
    { src: "assets/photos/photo1.jpg", caption: "El, kalau aku tembak kamu gimana? - Ian" },
    { src: "assets/photos/photo2.jpg", caption: "Your eyes it's a beautiful thing kak" },
    { src: "assets/photos/photo3.jpg", caption: "Liat kak, ada ikan cupang" },
    { src: "assets/photos/photo4.jpg", caption: "Ini namanya mini vlog malam mingguan" },
    { src: "assets/photos/photo5.jpg", caption: "Hitungan ke-3 kita jadi duyung kak" },
    { src: "assets/photos/photo6.jpg", caption: "El, musuhnya serang aku terus :( -Ian" },
  ],

  // Music app — put the actual file in assets/music/ and update src
  songs: [
    {
      title: "About You",
      artist: "The 1975",
      src: "assets/music/song1.mp3",
      spotifyUrl: "https://open.spotify.com/track/3hEfpBHxgieRLz4t3kLNEg?si=rG3-q6hYR3K_3aGv3IC4-g"
    },
    {
      title: "Shape of My Heart",
      artist: "Backstreet Boys",
      src: "assets/music/song2.mp3",
      spotifyUrl: "https://open.spotify.com/track/35o9a4iAfLl5jRmqMX9c1D?si=yooPnVRPSOSpdORrfVqAIA"
    },
  ],

  // Notes app — first three are a list, the last one opens as "the final note"
  notes: [
    {
      title: "things i like about you",
      body:
        "the way i look at your eyes when you're talking, kinda forget what i was gonna say.\n\n" +
        "your smile, specifically the one that shows up when you're trying not to smile.\n\n" +
        "that you remember weird small details from conversations we had weeks ago.\n\n" +
        "i like your laugh when something's actually funny.",
    },
    {
      title: "things i probably don't say enough",
      body:
        "that you're pretty, like, distractingly so, and i don't say it as much as i think it.\n\n" +
        "that i notice when you're having an off day, even if i don't always say something right away.\n\n" +
        "that talking to you is easy in a way that not much else is.\n\n" +
        "that i'm glad you're around. like, actually glad, not just saying it.",
    },
    {
      title: "just because",
      body:
        "i don't always know how to say everything properly, so i guess i made this instead.\n\n" +
        "it's not some big grand thing, just a bunch of small ones put together.\n\n" +
        "figured you'd get more out of a whole little phone than one text.\n\n" +
        "anyway. hope you liked it.",
    },
  ],
 
  // Final surprise — each string is its own line, revealed one at a time
  finalLines: [
    "anyway, that's it.",
    "just wanted to make something for you.",
    "and maybe remind you that, out of everyone, i still really like having you around, and i still think you're the prettiest person i've talked to today.",
    "I will always be here for you.",
    "I will always choose you.",
  ],
 
  // hidden easter egg — shown after tapping the Notes icon 5 times on the home screen
  secretMessage: "okay fine, one more thing: you're really pretty and i don't say it enough. there, i said it.",
 
  // delay (ms) before the home screen notification banner appears
  notifDelay: 6000,
};

/* =========================================================
   CLOCK — updates the lock screen + status bars every second
   ========================================================= */
function formatTime(date) {
  let h = date.getHours();
  const m = date.getMinutes().toString().padStart(2, "0");
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return `${h}:${m} ${ampm}`;
}

function formatDate(date) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`;
}

function tickClock() {
  const now = new Date();
  const time = formatTime(now);
  const date = formatDate(now);

  document.getElementById("lockTime").textContent = time;
  document.getElementById("lockDate").textContent = date;
  document.getElementById("homeDate").textContent = date;

  // status bars show compact 12h/24h style time like real phones (e.g. 9:41)
  let h = now.getHours();
  let m = now.getMinutes().toString().padStart(2, "0");
  const shortTime = `${h % 12 || 12}:${m}`;
  document.getElementById("statusTime").textContent = shortTime;
  document.getElementById("statusTimeHome").textContent = shortTime;
}
tickClock();
setInterval(tickClock, 1000 * 15);

// inject the configurable lock note text
document.querySelector(".lock-note").textContent = CONFIG.lockNote;

// apply custom wallpapers if provided in CONFIG
function applyWallpapers() {
  if (CONFIG.wallpapers) {
    const lockEl = document.getElementById("lockScreen");
    const homeEl = document.getElementById("homeScreen");
    
    if (CONFIG.wallpapers.lock && CONFIG.wallpapers.lock.trim() !== "") {
      lockEl.style.backgroundImage = `linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 100%), url('${CONFIG.wallpapers.lock}')`;
      lockEl.style.backgroundSize = "cover";
      lockEl.style.backgroundPosition = "center";
    }
    
    if (CONFIG.wallpapers.home && CONFIG.wallpapers.home.trim() !== "") {
      homeEl.style.backgroundImage = `linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.6) 100%), url('${CONFIG.wallpapers.home}')`;
      homeEl.style.backgroundSize = "cover";
      homeEl.style.backgroundPosition = "center";
    }
  }
}
applyWallpapers();


/* =========================================================
   SCREEN NAVIGATION (iOS Navigation Stack)
   ========================================================= */
const screens = {
  lock: document.getElementById("lockScreen"),
  home: document.getElementById("homeScreen"),
  messages: document.getElementById("app-messages"),
  gallery: document.getElementById("app-gallery"),
  music: document.getElementById("app-music"),
  notes: document.getElementById("app-notes"),
  final: document.getElementById("app-final"),
};

let currentApp = null;
let isNoteDetailOpen = false;

function openApp(name) {
  if (currentApp === name) return;

  // Home screen transitions to behind state (parallax slide left -26%)
  screens.home.classList.remove("active");
  screens.home.classList.add("screen-behind");

  // Deactivate any other app screen
  Object.keys(screens).forEach((key) => {
    if (key !== "home" && key !== "lock" && key !== name) {
      screens[key].classList.remove("active");
    }
  });

  // Activate chosen app screen
  currentApp = name;
  screens[name].classList.add("active");

  if (name === "messages") startMessages();
  if (name === "gallery") buildGallery();
  if (name === "notes") buildNotesList();
  if (name === "final") startFinal();
}

function goBack() {
  // If inside Notes and note detail is open, back goes to notes list first
  if (currentApp === "notes" && isNoteDetailOpen) {
    closeNoteDetail();
    return;
  }

  // Otherwise pop current app back to Home screen
  goHome();
}

function goHome() {
  if (!currentApp && screens.home.classList.contains("active")) return;

  if (currentApp && screens[currentApp]) {
    screens[currentApp].classList.remove("active");
  }

  // Reset note detail if open
  closeNoteDetail();

  // Bring home screen back to active
  screens.home.classList.remove("screen-behind");
  screens.home.classList.add("active");

  currentApp = null;
}

// Back buttons in all app topbars
document.querySelectorAll("[data-back]").forEach((btn) => {
  btn.addEventListener("click", goBack);
});

// Home indicator tap & swipe up
const homeIndicator = document.getElementById("homeIndicator");
homeIndicator.addEventListener("click", () => {
  if (!screens.lock.classList.contains("active")) {
    goHome();
  }
});

// App icons on the home screen open their matching app
document.querySelectorAll(".app-icon").forEach((icon) => {
  icon.addEventListener("click", () => {
    const app = icon.dataset.app;
    openApp(app);
  });
});


/* =========================================================
   GESTURES (Swipe Back & Home Indicator Swipe Up)
   ========================================================= */
// 1. iOS Edge Swipe-Back gesture (Swipe right from left edge to go back)
const phoneScreen = document.getElementById("phoneScreen");
let swipeStartX = null;
let swipeStartY = null;
let isEdgeSwiping = false;

function onGestureStart(x, y) {
  if (screens.lock.classList.contains("active")) return;
  const rect = phoneScreen.getBoundingClientRect();
  const relativeX = x - rect.left;

  // If drag starts near the left edge (< 48px) and an app or note detail is open
  if (relativeX <= 48 && (currentApp !== null || isNoteDetailOpen)) {
    isEdgeSwiping = true;
    swipeStartX = x;
    swipeStartY = y;
  }
}

function onGestureMove(x, y) {
  if (!isEdgeSwiping) return;
  const deltaX = x - swipeStartX;
  const deltaY = Math.abs(y - swipeStartY);

  // If vertical movement is dominant, cancel swipe back
  if (deltaY > 50 && deltaX < 30) {
    isEdgeSwiping = false;
  }
}

function onGestureEnd(x) {
  if (!isEdgeSwiping) return;
  const deltaX = x - swipeStartX;
  if (deltaX > 55) {
    goBack();
  }
  isEdgeSwiping = false;
  swipeStartX = null;
  swipeStartY = null;
}

// Touch events for edge swipe
phoneScreen.addEventListener("touchstart", (e) => {
  onGestureStart(e.touches[0].clientX, e.touches[0].clientY);
}, { passive: true });

phoneScreen.addEventListener("touchmove", (e) => {
  onGestureMove(e.touches[0].clientX, e.touches[0].clientY);
}, { passive: true });

phoneScreen.addEventListener("touchend", (e) => {
  onGestureEnd(e.changedTouches[0].clientX);
});

// Mouse drag support for edge swipe
phoneScreen.addEventListener("mousedown", (e) => {
  onGestureStart(e.clientX, e.clientY);
});

window.addEventListener("mousemove", (e) => {
  onGestureMove(e.clientX, e.clientY);
});

window.addEventListener("mouseup", (e) => {
  onGestureEnd(e.clientX);
});

// 2. Home Indicator Swipe Up to return home
let homeSwipeStartY = null;
homeIndicator.addEventListener("touchstart", (e) => {
  homeSwipeStartY = e.touches[0].clientY;
}, { passive: true });

homeIndicator.addEventListener("touchend", (e) => {
  if (homeSwipeStartY !== null) {
    const deltaY = homeSwipeStartY - e.changedTouches[0].clientY;
    if (deltaY > 25) {
      if (screens.lock.classList.contains("active")) {
        unlock();
      } else {
        goHome();
      }
    }
    homeSwipeStartY = null;
  }
});

homeIndicator.addEventListener("mousedown", (e) => {
  homeSwipeStartY = e.clientY;
});

homeIndicator.addEventListener("mouseup", (e) => {
  if (homeSwipeStartY !== null) {
    const deltaY = homeSwipeStartY - e.clientY;
    if (deltaY > 25) {
      if (screens.lock.classList.contains("active")) {
        unlock();
      } else {
        goHome();
      }
    }
    homeSwipeStartY = null;
  }
});


/* =========================================================
   LOCK SCREEN — swipe up (touch + mouse) or tap to unlock
   ========================================================= */
const lockScreen = screens.lock;
let dragStartY = null;

function unlock() {
  lockScreen.classList.add("unlocking");
  setTimeout(() => {
    goHome();
    lockScreen.classList.remove("active");
    lockScreen.classList.remove("unlocking");
    triggerNotification();
  }, 500);
}

function handleDragStart(y) { dragStartY = y; }
function handleDragEnd(y) {
  if (dragStartY === null) return;
  const distance = dragStartY - y;
  if (distance > 50) unlock();
  dragStartY = null;
}

lockScreen.addEventListener("touchstart", (e) => handleDragStart(e.touches[0].clientY), { passive: true });
lockScreen.addEventListener("touchend", (e) => handleDragEnd(e.changedTouches[0].clientY));
lockScreen.addEventListener("mousedown", (e) => handleDragStart(e.clientY));
lockScreen.addEventListener("mouseup", (e) => handleDragEnd(e.clientY));

// tapping the "swipe up" hint also unlocks
document.getElementById("swipeUp").addEventListener("click", unlock);


/* =========================================================
   HOME SCREEN NOTIFICATION BANNER
   ========================================================= */
function triggerNotification() {
  const banner = document.getElementById("notifBanner");
  setTimeout(() => {
    if (screens.home.classList.contains("active")) {
      banner.classList.add("show");
    }
  }, CONFIG.notifDelay);
}

document.getElementById("notifBanner").addEventListener("click", () => {
  document.getElementById("notifBanner").classList.remove("show");
  openApp("messages");
});


/* =========================================================
   HIDDEN EASTER EGG — tap Notes icon 5x on the home screen
   ========================================================= */
let notesTapCount = 0;
let notesTapTimer = null;

document.getElementById("notesIcon").addEventListener("click", (e) => {
  notesTapCount++;
  clearTimeout(notesTapTimer);
  notesTapTimer = setTimeout(() => (notesTapCount = 0), 1500);

  if (notesTapCount >= 5) {
    notesTapCount = 0;
    e.stopImmediatePropagation();
    showSecretToast(CONFIG.secretMessage);
  }
}, true);

function showSecretToast(text) {
  const toast = document.getElementById("secretToast");
  toast.textContent = text;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 4200);
}


/* =========================================================
   MESSAGES APP
   ========================================================= */
let messagesStarted = false;

function startMessages() {
  const body = document.getElementById("chatBody");
  body.innerHTML = "";
  messagesStarted = true;
  playMessagesSequence(body, 0);
}

function playMessagesSequence(body, index) {
  if (index >= CONFIG.messages.length) return;
  if (!screens.messages.classList.contains("active")) return;

  const msg = CONFIG.messages[index];

  // show typing indicator first
  const typingRow = document.createElement("div");
  typingRow.className = "msg-row typing-row";
  typingRow.innerHTML = `<div class="typing-bubble"><span></span><span></span><span></span></div>`;
  body.appendChild(typingRow);
  body.scrollTop = body.scrollHeight;

  setTimeout(() => {
    typingRow.remove();

    const row = document.createElement("div");
    row.className = `msg-row ${msg.sender === "me" ? "me" : "them"}`;
    const now = formatTime(new Date());
    row.innerHTML = `
      <div class="msg-bubble">${escapeHtml(msg.text)}</div>
      <span class="msg-time">${now}</span>
    `;
    body.appendChild(row);
    body.scrollTop = body.scrollHeight;

    playMessagesSequence(body, index + 1);
  }, 700 + Math.min(msg.text.length * 18, 1200));
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}


/* =========================================================
   GALLERY APP
   ========================================================= */
let galleryBuilt = false;

function buildGallery() {
  if (galleryBuilt) return;
  galleryBuilt = true;

  const grid = document.getElementById("galleryGrid");
  document.getElementById("galleryCount").textContent = `${CONFIG.photos.length} photos`;

  CONFIG.photos.forEach((photo, i) => {
    const tile = document.createElement("button");
    tile.className = "gallery-item";

    if (photo.src) {
      const img = document.createElement("img");
      img.src = photo.src;
      img.alt = photo.caption || "memory";
      img.onerror = () => {
        tile.innerHTML = "🖼";
      };
      tile.appendChild(img);
    } else {
      tile.textContent = "🖼";
    }

    tile.addEventListener("click", () => openLightbox(i));
    grid.appendChild(tile);
  });
}

function openLightbox(index) {
  const photo = CONFIG.photos[index];
  const lightbox = document.getElementById("lightbox");
  const imgWrap = document.getElementById("lightboxImg");
  const caption = document.getElementById("lightboxCaption");

  imgWrap.innerHTML = "";
  if (photo.src) {
    const img = document.createElement("img");
    img.src = photo.src;
    img.onerror = () => (imgWrap.textContent = "🖼");
    imgWrap.appendChild(img);
  } else {
    imgWrap.textContent = "🖼";
  }
  caption.textContent = photo.caption || "";

  lightbox.classList.add("show");
}

document.getElementById("lightboxClose").addEventListener("click", () => {
  document.getElementById("lightbox").classList.remove("show");
});
document.getElementById("lightbox").addEventListener("click", (e) => {
  if (e.target.id === "lightbox") e.currentTarget.classList.remove("show");
});


/* =========================================================
   MUSIC APP (Apple Music & Control Center Style)
   ========================================================= */
const audio = document.getElementById("audio");
const playerEl = document.querySelector(".player");
let currentSong = 0;
let isPlaying = false;

function loadSong(index) {
  currentSong = (index + CONFIG.songs.length) % CONFIG.songs.length;
  const song = CONFIG.songs[currentSong];
  audio.src = song.src;
  document.getElementById("trackTitle").textContent = song.title;
  document.getElementById("trackArtist").textContent = song.artist;
  document.getElementById("progressFill").style.width = "0%";
  document.getElementById("progressThumb").style.left = "0%";
  document.getElementById("timeElapsed").textContent = "0:00";
  document.getElementById("timeTotal").textContent = "0:00";
  
  const spotifyLink = document.getElementById("spotifyLink");
  if (spotifyLink) {
    if (song.spotifyUrl) {
      spotifyLink.href = song.spotifyUrl;
      spotifyLink.style.display = "inline-flex";
    } else {
      spotifyLink.style.display = "none";
    }
  }
  
  setPlayState(false);
}

function setPlayState(playing) {
  isPlaying = playing;
  const playIcon = document.getElementById("playIcon");
  if (playing) {
    playerEl.classList.add("playing");
    playIcon.innerHTML = `
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
      </svg>
    `;
  } else {
    playerEl.classList.remove("playing");
    playIcon.innerHTML = `
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M8 5v14l11-7z"/>
      </svg>
    `;
  }
}

document.getElementById("playBtn").addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    setPlayState(false);
  } else {
    audio.play().then(() => setPlayState(true)).catch(() => setPlayState(false));
  }
});

document.getElementById("prevBtn").addEventListener("click", () => loadSong(currentSong - 1));
document.getElementById("nextBtn").addEventListener("click", () => loadSong(currentSong + 1));

audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;
  const pct = (audio.currentTime / audio.duration) * 100;
  document.getElementById("progressFill").style.width = `${pct}%`;
  document.getElementById("progressThumb").style.left = `${pct}%`;
  document.getElementById("timeElapsed").textContent = formatSeconds(audio.currentTime);
});

audio.addEventListener("loadedmetadata", () => {
  document.getElementById("timeTotal").textContent = formatSeconds(audio.duration);
});

audio.addEventListener("ended", () => loadSong(currentSong + 1));

function formatSeconds(sec) {
  if (!isFinite(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

// Progress scrubbing
function seekAudio(e) {
  if (!audio.duration) return;
  const bar = document.getElementById("progressBar");
  const rect = bar.getBoundingClientRect();
  const clickX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
  const pct = clickX / rect.width;
  audio.currentTime = pct * audio.duration;
  document.getElementById("progressFill").style.width = `${pct * 100}%`;
  document.getElementById("progressThumb").style.left = `${pct * 100}%`;
}

const progressBar = document.getElementById("progressBar");
progressBar.addEventListener("click", seekAudio);

loadSong(0);


/* =========================================================
   NOTES APP (Nested iOS Navigation)
   ========================================================= */
let notesBuilt = false;
const notesContainer = document.querySelector(".notes-container");

function buildNotesList() {
  document.getElementById("notesSubtitle").textContent = `${CONFIG.notes.length} notes`;
  if (notesBuilt) return;
  notesBuilt = true;

  const list = document.getElementById("notesList");
  CONFIG.notes.forEach((note, i) => {
    const card = document.createElement("button");
    card.className = "note-card";
    const preview = note.body.split("\n")[0].slice(0, 46);
    card.innerHTML = `
      <span class="note-card-title">${escapeHtml(note.title)}</span>
      <span class="note-card-preview">${escapeHtml(preview)}…</span>
    `;
    card.addEventListener("click", () => openNoteDetail(i));
    list.appendChild(card);
  });
}

function openNoteDetail(index) {
  const note = CONFIG.notes[index];
  document.getElementById("noteDetailText").textContent = note.body;
  notesContainer.classList.add("detail-open");
  document.getElementById("notesTitle").textContent = note.title;
  document.getElementById("notesSubtitle").textContent = "Note";

  // Dynamic back button: "‹ Notes" when in note detail
  document.getElementById("notesBackLabel").textContent = "Notes";
  isNoteDetailOpen = true;
}

function closeNoteDetail() {
  if (!isNoteDetailOpen) return;
  notesContainer.classList.remove("detail-open");
  document.getElementById("notesTitle").textContent = "Notes";
  document.getElementById("notesSubtitle").textContent = `${CONFIG.notes.length} notes`;

  // Restore back button label: "‹ Home"
  document.getElementById("notesBackLabel").textContent = "Home";
  isNoteDetailOpen = false;
}


/* =========================================================
   FINAL SURPRISE
   ========================================================= */
let finalStarted = false;

function startFinal() {
  const content = document.getElementById("finalContent");
  const glow = document.querySelector(".final-glow");
  content.innerHTML = "";
  glow.classList.remove("show");
  finalStarted = true;

  CONFIG.finalLines.forEach((line, i) => {
    const p = document.createElement("p");
    p.className = "final-line";
    if (i === CONFIG.finalLines.length - 1) p.classList.add("final-emphasis");
    p.textContent = line;
    content.appendChild(p);
  });

  const lines = content.querySelectorAll(".final-line");
  lines.forEach((line, i) => {
    setTimeout(() => {
      line.classList.add("show");
      if (i === lines.length - 1) {
        setTimeout(() => glow.classList.add("show"), 300);
      }
    }, 900 * (i + 1));
  });
}
