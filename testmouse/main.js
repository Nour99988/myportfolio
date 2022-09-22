const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let spots = [];
let hue = 0;
const mouse = {
  x: undefined,
  y: undefined,
};

canvas.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  for (let i = 0; i < 3; i++) {
    spots.push(new Particle());
  }
});

class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = Math.random() * 2 + 0.1;
    this.speedx = Math.random() * 2 - 1;
    this.speedy = Math.random() * 2 - 1;
    this.color = "hsl(" + hue + ", 100%, 50% )";
  }
  update() {
    this.x += this.speedx;
    this.y += this.speedy;
    if (this.size > 0.1) this.size -= 0.03;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x + 100, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}
function handleparticle() {
  for (let i = 0; i < spots.length; i++) {
    console.log(spots.length);
    spots[i].update();
    spots[i].draw();
    for (let j = i; j < spots.length; j++) {
      const dx = spots[i].x - spots[j].x;
      const dy = spots[i].y - spots[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 90) {
        ctx.beginPath();
        ctx.strokeStyle = spots[i].color;
        // ctx.strokeStyle = "red";
        ctx.lineWidth = spots[i].size / 10;
        console.log(spots);
        ctx.moveTo(spots[i].x + 100, spots[i].y);
        ctx.lineTo(spots[j].x + 100, spots[j].y);
        ctx.closePath();
        ctx.stroke();
      }
    }
    if (spots[i].size <= 0.3) {
      spots.splice(i, 1);
      i--;
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleparticle();
  hue++;
  window.requestAnimationFrame(animate);
}

window.addEventListener("resize", function () {
  canvas.width = this.innerWidth;
  canvas.height = this.innerHeight;
  Infinity();
});

window.addEventListener("mouseout", function () {
  mouse.x = undefined;
  mouse.y = undefined;
});

animate();
window.addEventListener("mousemove", () => {
  //   console.log(spots);
});
// mouse trail

const dataFromApi = [];

fetch("https://fakestoreapi.com/products/1")
  .then((res) => res.json())
  .then((data) => {
    dataFromApi = [...data];
  });
