(function () {
  var canvas = document.createElement("canvas");
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "9999";
  document.body.appendChild(canvas);

  var ctx = canvas.getContext("2d");
  var w, h;
  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  var petals = [];
  for (var i = 0; i < 30; i++) {
    petals.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 4 + 2,
      d: Math.random() * 30
    });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "rgba(255,192,203,0.8)";
    ctx.beginPath();
    petals.forEach(function (p) {
      ctx.moveTo(p.x, p.y);
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    });
    ctx.fill();
    move();
  }

  function move() {
    petals.forEach(function (p, i) {
      p.y += Math.cos(p.d) + 1;
      p.x += Math.sin(p.d);
      if (p.y > h) {
        petals[i] = {
          x: Math.random() * w,
          y: 0,
          r: p.r,
          d: p.d
        };
      }
    });
  }

  setInterval(draw, 33);
})();
