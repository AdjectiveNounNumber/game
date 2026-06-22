const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let n = 0;
let mx = my = 0;
function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);
function click(e) {
    mx = e.clientX;
    my = e.clientY;
}
window.addEventListener('click', click);
function draw() {
    let w = canvas.width, h = canvas.height;
    ctx.fillStyle = 'white';
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(w/2, h/2, 30, 0, Math.PI * 2);
    if (ctx.isPointInPath(mx, my)) {
        n++;
        mx = my = 0;
    }
    ctx.fill();
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`You clicked the circle ${n} time${n == 1 ? '' : 's'}`, w/2, h/2 + 80);
    ctx.font = '16px Arial';
    ctx.fillText('Click the circle to 100', w/2, h/2 + 120);
    if (n > 119) {
        ctx.font = '14px Arial';
        ctx.fillText('ok genuinely stop there is nothing more to see here', w/2, h/2 - 100);
    }
    if (n > 99) {
        ctx.font = '24px Arial';
        ctx.fillStyle = 'green';
        ctx.fillText('Good job you win!', w/2, h/2 - 70);
    }
    requestAnimationFrame(draw);
}
draw();