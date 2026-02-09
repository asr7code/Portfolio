const text="AI Developer | ML Engineer | Android Developer";
let i=0;
function typing(){
if(i<text.length){
document.getElementById("typing").innerHTML+=text.charAt(i);
i++;
setTimeout(typing,60);
}}
typing();

function openProject(type){
let content=document.getElementById("projectContent");

if(type==="flight"){
content.innerHTML=`
<h2>Flight Price Predictor System</h2>

<p>
A machine learning-based web application to predict airline ticket prices based on multiple features such as airline, source, destination, date, and duration. Implemented data preprocessing, feature engineering, and trained a Random Forest Regressor model for accurate predictions. Deployed the model using Flask to provide a user-friendly interface for real-time price estimation.
</p>

<div class="project-gallery">
<div class="gallery-track">
<img src="flight1.png">
<img src="flight2.png">
<img src="flight1.png">
<img src="flight2.png">
</div>
</div>

<div class="project-links">
<a class="project-btn" target="_blank"
href="https://github.com/asr7code/ML-based-Flight-Predictor-Project">
View GitHub Repository
</a>
</div>

<button onclick="closeProject()">Close</button>
`;
}

if(type==="minor"){
content.innerHTML=`
<h2>Traffic Optimizer & Assistant</h2>

<p>
An AI-based Traffic Optimizer & Assistant system focused on improving road safety and traffic awareness using machine learning and computer vision. This project marked my first complete end-to-end AI system — from problem identification and dataset research to model training, deployment, and real-world simulation.

Built a CNN-based model trained on the GTSRB dataset to recognize 43 different traffic signs with high accuracy. Designed a web application using Streamlit where users can upload traffic sign images and receive predictions along with real-time voice alerts. Also implemented a traffic light simulation module with countdown timers and speed suggestions as a proof-of-concept for intelligent driving assistance.

This project played a crucial role in shaping my interest in AI for real-world impact and later became the foundation for my major project (ATOA).
</p>

<div class="project-gallery">
<div class="gallery-track">
<img src="minor1.png">
<img src="minor2.png">
<img src="minor3.png">
<img src="minor1.png">
<img src="minor2.png">
<img src="minor3.png">
</div>
</div>

<div class="project-links">
<a class="project-btn" target="_blank"
href="https://traffic-optimizer-assistant-luads7yvugyn4f8pdva8et.streamlit.app/">
Traffic Sign Detection Web_Version
</a>

<a class="project-btn" target="_blank"
href="https://obj2sim-fgj5alpczwcdgk4aghtfsa.streamlit.app/">
Traffic Simulation Demo
</a>
</div>

<button onclick="closeProject()">Close</button>
`;
}

if(type==="major"){
content.innerHTML=`
<h2>Advanced Traffic Optimizer & Assistant (ATOA)</h2>

<p>
Advanced Traffic Optimizer & Assistant (ATOA) is an AI-based driver assistance system that evolved from my minor project into a real-world, multi-platform solution focused on road safety and intelligent transportation.

The system integrates multiple AI-powered modules:

Pothole Detection: A YOLOv8-based computer vision model trained on the RDD2022 dataset and deployed as a web application to detect road hazards.

Accident Prevention & Alert System: A real-time cloud-connected system using smartphone sensors (GPS & accelerometer) and Firebase to automatically detect crashes and broadcast voice alerts to nearby users.

Traffic Sign Recognition (Android App): A native Android application built using Kotlin, OpenCV, and TensorFlow Lite for real-time sign detection with on-device voice alerts.

ATOA demonstrates how modern AI, mobile computing, and cloud systems can be combined to create a low-cost, software-based alternative to traditional ADAS, making advanced safety features accessible to everyday drivers.

This project represents my most intensive work and reflects my long-term interest in building AI systems that solve real societal problems.
</p>

<div class="project-gallery">
<div class="gallery-track">
<img src="major1.png">
<img src="major2.png">
<img src="major3.png">
<img src="major4.png">
<img src="major1.png">
<img src="major2.png">
<img src="major3.png">
<img src="major4.png">
</div>
</div>

<div class="project-links">
<a class="project-btn" target="_blank"
href="https://huggingface.co/spaces/asrcoddeploy/obj3pot">
Pothole Detection Web_Version
</a>

<a class="project-btn" target="_blank"
href="https://github.com/asr7code/ATOA_Obj1app/releases/tag/v1.0">
ATOA Obj1 Traffic Sign Detection [APK]
</a>

<a class="project-btn" target="_blank"
href="https://690240ab2450e40e86a878e9--beautiful-kleicha-da7ffd.netlify.app/">
Accident Alert System
</a>
</div>

<button onclick="closeProject()">Close</button>
`;
}

document.getElementById("projectModal").style.display="block";
}

function closeProject(){
document.getElementById("projectModal").style.display="none";
}

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00bfff";

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

