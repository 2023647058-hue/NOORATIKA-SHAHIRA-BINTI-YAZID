const audio = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

audio.volume = 0;

function fadeIn() {
  audio.play();
  let vol = 0;
  audio.volume = 0;

  const fade = setInterval(() => {
    if (vol < 1) {
      vol += 0.05;
      audio.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 100);
}

function fadeOut() {
  let vol = audio.volume;

  const fade = setInterval(() => {
    if (vol > 0) {
      vol -= 0.05;
      audio.volume = vol;
    } else {
      audio.pause();
      clearInterval(fade);
    }
  }, 100);
}

function toggleMusic() {
  if (audio.paused) {
    fadeIn();
    btn.innerHTML = "??";
    localStorage.setItem("music", "on");
  } else {
    fadeOut();
    btn.innerHTML = "??";
    localStorage.setItem("music", "off");
  }
}

function loadPage(page) {
  fetch(page + ".html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("content").innerHTML = data;
    });
}

// Auto play ikut status
window.onload = () => {
  if (localStorage.getItem("music") === "on") {
    fadeIn();
    btn.innerHTML = "??";
  }
};

loadPage("home");