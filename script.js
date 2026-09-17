window.onload = function () {
  document.getElementById("mainApp").style.display = "none";
};

function loginNexora() {
  const user = document.getElementById("loginUser").value.trim();
  const pass = document.getElementById("loginPass").value.trim();

  if (user === "krish_up13" && pass === "Nexora2026") {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("mainApp").style.display = "block";
  } else {
    document.getElementById("loginMsg").innerText = "❌ Wrong Username or Password";
  }
}
// Clock
setInterval(()=>{
  clock.innerHTML=new Date().toLocaleString();
},1000);

// Password Strength
function checkPass(){
  let p=pass.value,s=0;
  if(p.length>=8)s++;
  if(/[A-Z]/.test(p))s++;
  if(/[0-9]/.test(p))s++;
  if(/[^A-Za-z0-9]/.test(p))s++;
  result.innerHTML=["Weak","Medium","Strong","Very Strong"][s-1]||"Weak";
}

// Notes
notes.value=localStorage.getItem("nexora_notes")||"";
function saveNotes(){
  localStorage.setItem("nexora_notes",notes.value);
  alert("Notes Saved!");
}

// QR
function makeQR(){
 img.src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="+encodeURIComponent(qr.value);
}

// Device Info
function info(){
 device.innerHTML=
 "Platform: "+navigator.platform+
 "<br>Language: "+navigator.language+
 "<br>Browser: "+navigator.userAgent;
}

// Matrix Background
let c=document.getElementById("matrix"),ctx=c.getContext("2d");
c.width=innerWidth;c.height=innerHeight;
let ch="01NEXORA",drops=Array(Math.floor(c.width/20)).fill(1);
setInterval(()=>{
 ctx.fillStyle="rgba(0,0,0,.08)";
 ctx.fillRect(0,0,c.width,c.height);
 ctx.fillStyle="#00ff66";
 ctx.font="16px monospace";
 drops.forEach((y,i)=>{
   ctx.fillText(ch[Math.floor(Math.random()*ch.length)],i*20,y*20);
   drops[i]=(y*20>c.height&&Math.random()>0.97)?0:y+1;
 });
},35);
function voice() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.lang = "en-IN";
  recognition.start();

  recognition.onresult = function (event) {
    const command = event.results[0][0].transcript.toLowerCase();
    document.getElementById("voiceOut").innerHTML = "🎤 " + command;

    // Commands
    if (command.includes("hello nexora")) {
      speak("Hello Krish, Welcome to Nexora AI.");
    }

    else if (command.includes("open youtube")) {
      speak("Opening YouTube");
      window.open("https://youtube.com", "_blank");
    }

    else if (command.includes("open google")) {
      speak("Opening Google");
      window.open("https://google.com", "_blank");
    }

    else if (command.includes("what is the time")) {
      speak("Current time is " + new Date().toLocaleTimeString());
    }

    else if (command.includes("open github")) {
      speak("Opening GitHub");
      window.open("https://github.com/krish-devloper24", "_blank");
    }

    else {
      speak("Sorry, command not recognized.");
    }
  };
}

function speak(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-IN";
  window.speechSynthesis.speak(speech);
}
function voice() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SR();

  recognition.lang = "en-IN";
  recognition.start();

  recognition.onresult = function (event) {
    const cmd = event.results[0][0].transcript.toLowerCase();
    document.getElementById("voiceOut").innerHTML = "🎤 " + cmd;

    if (cmd.includes("hello nexora")) {
      speak("Hello Krish. Welcome back.");
    }

    else if (cmd.includes("open youtube")) {
      speak("Opening YouTube");
      window.open("https://youtube.com", "_blank");
    }

    else if (cmd.includes("open google")) {
      speak("Opening Google");
      window.open("https://google.com", "_blank");
    }

    else if (cmd.includes("open github")) {
      speak("Opening GitHub");
      window.open("https://github.com/krish-devloper24", "_blank");
    }

    else if (cmd.includes("open instagram")) {
      speak("Opening Instagram");
      window.open("https://instagram.com", "_blank");
    }

    else if (cmd.includes("open whatsapp")) {
      speak("Opening WhatsApp Web");
      window.open("https://web.whatsapp.com", "_blank");
    }

    else if (cmd.includes("open chat g p t")) {
      speak("Opening ChatGPT");
      window.open("https://chatgpt.com", "_blank");
    }

    else if (cmd.includes("what is the time")) {
      speak("Current time is " + new Date().toLocaleTimeString());
    }

    else if (cmd.includes("search")) {
      let q = cmd.replace("search", "").trim();
      speak("Searching " + q);
      window.open("https://www.google.com/search?q=" + encodeURIComponent(q), "_blank");
    }

    else {
      speak("Sorry Krish, I don't know this command.");
    }
  };
}

function speak(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-IN";
  speech.rate = 1;
  window.speechSynthesis.speak(speech);
}
function voice() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    alert("Voice recognition not supported.");
    return;
  }

  const recognition = new SR();
  recognition.lang = "en-IN";
  recognition.continuous = false;
  recognition.start();

  recognition.onresult = (e) => {
    const cmd = e.results[0][0].transcript.toLowerCase();
    document.getElementById("voiceOut").innerHTML = "🎤 " + cmd;
    runCommand(cmd);
  };
}

function runCommand(cmd) {

  if (cmd.includes("hello nexora")) speak("Hello Krish. Systems online.");

  else if (cmd.includes("open youtube")) openSite("https://youtube.com","Opening YouTube");

  else if (cmd.includes("open google")) openSite("https://google.com","Opening Google");

  else if (cmd.includes("open github")) openSite("https://github.com/krish-devloper24","Opening GitHub");

  else if (cmd.includes("open instagram")) openSite("https://instagram.com","Opening Instagram");

  else if (cmd.includes("open whatsapp")) openSite("https://web.whatsapp.com","Opening WhatsApp");

  else if (cmd.includes("open maps")) openSite("https://maps.google.com","Opening Maps");

  else if (cmd.includes("weather")) weather();

  else if (cmd.includes("time")) speak("Current time is " + new Date().toLocaleTimeString());

  else if (cmd.includes("date")) speak("Today is " + new Date().toDateString());

  else if (cmd.includes("matrix mode")) {
      document.body.style.background = "black";
      speak("Matrix mode activated.");
  }

  else if (cmd.includes("jarvis mode")) {
      document.body.style.background = "#001122";
      speak("Jarvis mode activated.");
  }

  else if (cmd.includes("search")) {
      let q = cmd.replace("search","").trim();
      openSite("https://www.google.com/search?q=" + encodeURIComponent(q), "Searching " + q);
  }

  else {
      speak("Sorry Krish. Command not found.");
  }
}

function speak(text){
  speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}

function openSite(url,msg){
  speak(msg);
  window.open(url,"_blank");
}
// ===== NEXORA AI V4 =====

// AI Wake Word
function wakeNexora() {
  speak("Nexora online. Waiting for your command.");
  voice();
}

// Hacker Terminal
function terminalCommand() {
  let cmd = prompt("NEXORA TERMINAL >");

  if (cmd === "help") {
    alert("Commands:\nhelp\nsystem\nmatrix\njarvis\nclear");
  } else if (cmd === "system") {
    alert("NEXORA AI v4.0\nStatus: Online");
  } else if (cmd === "matrix") {
    document.body.style.background = "#000";
    speak("Matrix mode activated");
  } else if (cmd === "jarvis") {
    document.body.style.background = "#001b2e";
    speak("Jarvis mode activated");
  } else if (cmd === "clear") {
    location.reload();
  } else {
    alert("Unknown Command");
  }
}

// Theme Switch
function toggleTheme() {
  document.body.classList.toggle("light");
}

// AI Orb Animation
setInterval(() => {
  const orb = document.getElementById("orb");
  orb.style.boxShadow =
    `0 0 ${20 + Math.random() * 40}px cyan`;
}, 500);
// Camera Face Scan
async function startCamera(){
  const stream = await navigator.mediaDevices.getUserMedia({video:true});
  document.getElementById("video").srcObject = stream;
  speak("Face scanner activated.");
}

// Hacker Animation
function hackAnimation(){
  const t = document.getElementById("terminal");
  t.textContent = "";
  let i = 0;
  const lines = [
    "Initializing NEXORA...",
    "Scanning system...",
    "Firewall Secure ✓",
    "Face Detected ✓",
    "Access Granted ✓"
  ];
  const run = setInterval(()=>{
    t.textContent += lines[i] + "\\n";
    i++;
    if(i === lines.length) clearInterval(run);
  },700);
}

// 3D Solar System
const s = document.getElementById("solar").getContext("2d");
let angle = 0;
function drawSolar(){
  s.clearRect(0,0,300,300);
  s.fillStyle="yellow";
  s.beginPath();
  s.arc(150,150,12,0,6.28);
  s.fill();

  [45,75,105,135].forEach((r,n)=>{
    s.strokeStyle="#00ffff";
    s.beginPath();
    s.arc(150,150,r,0,6.28);
    s.stroke();

    s.fillStyle=["gray","orange","deepskyblue","red"][n];
    s.beginPath();
    s.arc(
      150+r*Math.cos(angle/(n+1)),
      150+r*Math.sin(angle/(n+1)),
      6,0,6.28
    );
    s.fill();
  });

  angle += 0.02;
  requestAnimationFrame(drawSolar);
}
drawSolar();
// Battery Percentage
async function batteryInfo(){
  if("getBattery" in navigator){
    const b = await navigator.getBattery();
    document.getElementById("battery").innerText =
      Math.round(b.level*100) + "%";
  } else {
    document.getElementById("battery").innerText = "Not Supported";
  }
}
batteryInfo();

// Fake Health Animation
let hp = 100;
setInterval(()=>{
  hp = hp>95 ? 100 : hp+1;
  document.getElementById("health").innerText = hp + "%";
},3000);
setTimeout(()=>{
 document.getElementById("bootScreen").style.display="none";
 document.getElementById("jarvisUI").style.display="block";
 speak("Welcome back Krish. Nexora AI is online.");
},4000);

// Live Clock
setInterval(()=>{
 document.getElementById("clock").innerHTML=
 new Date().toLocaleTimeString();
},1000);

// AI Status Animation
setInterval(()=>{
 const s=document.getElementById("status");
 s.innerHTML=Math.random()>0.5?"🟢 AI ONLINE":"⚡ SCANNING...";
},2000);
const SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "en-IN";

function voice(){
  recognition.start();
  speak("Listening Krish");
}

recognition.onresult = (e)=>{
  const cmd = e.results[0][0].transcript.toLowerCase();
  document.getElementById("voiceOut").innerHTML = "🎤 " + cmd;

  if(cmd.includes("hello nexora")){
    speak("Hello Krish. Systems online.");
  }
  else if(cmd.includes("open youtube")){
    window.open("https://youtube.com","_blank");
    speak("Opening YouTube");
  }
  else if(cmd.includes("open google")){
    window.open("https://google.com","_blank");
    speak("Opening Google");
  }
  else if(cmd.includes("time")){
    speak(new Date().toLocaleTimeString());
  }
  else if(cmd.includes("weather")){
    weather();
  }
};

// AI Speak
function speak(text){
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = "en-IN";
  speechSynthesis.speak(msg);
}

// Face Scanner
async function startCamera(){
  const stream = await navigator.mediaDevices.getUserMedia({video:true});
  document.getElementById("video").srcObject = stream;
  speak("Face scanner activated");
}

// Hacker Terminal Animation
function hackAnimation(){
  const t = document.getElementById("terminal");
  t.textContent = "";
  const lines = [
    "Initializing NEXORA...",
    "Scanning Face...",
    "Identity Verified ✓",
    "Firewall Active ✓",
    "Access Granted ✓"
  ];

  let i = 0;
  const run = setInterval(()=>{
    t.textContent += lines[i] + "\\n";
    i++;
    if(i === lines.length) clearInterval(run);
  },700);
}

// Weather
async function weather(){
  const city = document.getElementById("city").value || "Delhi";
  const data = await fetch(
    "https://wttr.in/" + city + "?format=3"
  ).then(r=>r.text());

  document.getElementById("weatherOut").innerHTML = data;
  speak(data);
}
song.onchange = (e)=>{
  audio.src = URL.createObjectURL(e.target.files[0]);
};

// RGB Cyber Mode
function rgbMode(){
  let colors = ["#00ffff","#ff00ff","#00ff00","#ff3300","#ffff00"];
  let i = 0;

  setInterval(()=>{
    document.body.style.boxShadow =
      "inset 0 0 100px " + colors[i];
    document.querySelectorAll(".card").forEach(card=>{
      card.style.borderColor = colors[i];
      card.style.boxShadow = "0 0 20px " + colors[i];
    });
    i = (i + 1) % colors.length;
  },800);

  speak("RGB cyber mode activated");
}
// Full AI Scan
function aiScan(){
  const out = document.getElementById("scanOutput");
  out.textContent = "";

  const logs = [
    "⚡ Booting NEXORA AI...",
    "🔍 Checking CPU...",
    "🛡️ Firewall Active",
    "📡 Network Connected",
    "🤖 AI Core Online",
    "✅ Scan Complete"
  ];

  let i = 0;
  const scan = setInterval(()=>{
    out.textContent += logs[i] + "\n";
    i++;
    if(i === logs.length){
      clearInterval(scan);
      speak("System scan complete.");
    }
  },800);
}

// Themes
function matrixMode(){
  document.body.style.background="#000";
  speak("Matrix mode activated");
}

function jarvisMode(){
  document.body.style.background="#031b2f";
  speak("Jarvis mode activated");
}

// GPS Location
function getLocation(){
  navigator.geolocation.getCurrentPosition((pos)=>{
    document.getElementById("locationOut").innerHTML =
      "Latitude: " + pos.coords.latitude +
      "<br>Longitude: " + pos.coords.longitude;
  });
}
// Hey Nexora Wake Word
function wakeNexora(){
  speak("Hello Krish. I am ready.");
  voice();
}

// AI Status Animation
setInterval(()=>{
 const s=document.getElementById("jarvisStatus");
 s.innerHTML=Math.random()>0.5
   ?"🟢 JARVIS ONLINE"
   :"⚡ ANALYZING SYSTEM...";
},2000);

// Fake Face Unlock
function faceUnlock(){
  speak("Scanning face...");
  setTimeout(()=>{
    speak("Face verified. Access granted.");
    alert("✅ FACE UNLOCK SUCCESS");
  },2500);
}

function loginNexora() {
  const user = document.getElementById("loginUser").value.trim();
  const pass = document.getElementById("loginPass").value.trim();

  if (user === "krish_up13" && pass === "Nexora2026") {
    document.getElementById("loginMsg").innerHTML = "🟢 Access Granted...";
    speak("Welcome back Krish. Booting Nexora AI.");

    setTimeout(() => {
      document.getElementById("loginPage").style.display = "none";
      document.getElementById("mainApp").style.display = "block";
    }, 2500);
  } else {
    document.getElementById("loginMsg").innerHTML = "❌ Wrong Username or Password";
    speak("Access denied");
  }
}
function faceUnlock() {
  document.getElementById("scanStatus").innerHTML =
    "🔍 Scanning Face...";

  setTimeout(() => {
    document.getElementById("scanStatus").innerHTML =
      "✅ Face Verified";

    speak("Face verified. Welcome Krish.");

    document.getElementById("loginPage").style.display = "none";
    document.getElementById("mainApp").style.display = "block";
  }, 2500);
}

function fingerScan() {
  document.getElementById("scanStatus").innerHTML =
    "🖐️ Scanning Fingerprint...";

  setTimeout(() => {
    document.getElementById("scanStatus").innerHTML =
      "✅ Fingerprint Verified";

    speak("Fingerprint verified.");

    document.getElementById("loginPage").style.display = "none";
    document.getElementById("mainApp").style.display = "block";
  }, 2500);
}
function openApp(app) {
  const links = {
    youtube: "https://www.youtube.com",
    github: "https://github.com/krish-devloper24",
    instagram: "https://www.instagram.com",
    whatsapp: "https://web.whatsapp.com"
  };

  if (links[app]) {
    window.open(links[app], "_blank");
  }
}
