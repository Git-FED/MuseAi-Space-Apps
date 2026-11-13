const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
let w, h, dpr, t = 0;
const ribbons = [];
const sparks = [];

function resize() {
  dpr = Math.min(devicePixelRatio || 1, 2);
  w = innerWidth; h = innerHeight;
  canvas.width = w * dpr; canvas.height = h * dpr;
  canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ribbons.length = 0; sparks.length = 0;
  for (let i = 0; i < 9; i++) ribbons.push({ y: h * (.08 + i * .11), amp: 18 + Math.random()*70, freq: .001 + Math.random()*.003, phase: Math.random()*8, speed: .0003 + Math.random()*.0008, hue: i % 3 });
  for (let i = 0; i < 90; i++) sparks.push({ x: Math.random()*w, y: Math.random()*h, s: Math.random()*1.7+.2, a: Math.random(), drift: Math.random()*.4+.1 });
}

function ribbon(r, index) {
  ctx.beginPath();
  for (let x = -30; x <= w + 30; x += 18) {
    const y = r.y + Math.sin(x*r.freq + t*r.speed + r.phase) * r.amp + Math.sin(x*.006 - t*.0004 + index)*22;
    if (x === -30) ctx.moveTo(x,y); else ctx.lineTo(x,y);
  }
  const grad = ctx.createLinearGradient(0, r.y-r.amp, w, r.y+r.amp);
  const colors = [['#d7ff4f','#6f8f34'],['#87a8ff','#282d72'],['#ff5d9e','#6e294f']][r.hue];
  grad.addColorStop(0, colors[0] + '00'); grad.addColorStop(.35, colors[0] + '45'); grad.addColorStop(.7, colors[1] + '35'); grad.addColorStop(1, colors[1] + '00');
  ctx.strokeStyle = grad; ctx.lineWidth = 1.2 + (index % 3) * .75; ctx.shadowBlur = 18; ctx.shadowColor = colors[0]; ctx.stroke(); ctx.shadowBlur = 0;
}

function draw() {
  ctx.fillStyle = 'rgba(7,8,7,.16)'; ctx.fillRect(0,0,w,h);
  const wash = ctx.createRadialGradient(w*.67,h*.38,0,w*.67,h*.38,Math.max(w,h)*.75);
  wash.addColorStop(0,'rgba(28,42,20,.18)'); wash.addColorStop(1,'rgba(7,8,7,0)'); ctx.fillStyle = wash; ctx.fillRect(0,0,w,h);
  ribbons.forEach(ribbon);
  sparks.forEach(p => { p.y -= p.drift; if (p.y < -4) { p.y = h+4; p.x = Math.random()*w; } ctx.fillStyle = `rgba(215,255,79,${p.a*.24})`; ctx.fillRect(p.x,p.y,p.s,p.s); });
  if (!reduce) { t += 1; requestAnimationFrame(draw); }
}
resize(); addEventListener('resize', resize); draw();
