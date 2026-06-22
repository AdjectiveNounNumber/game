const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let n = 0;
let mx = my = 0;
let birth = Date.now();
let cheating = false;
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
    if (n == 0) {
        birth = Date.now();
    }
    ctx.fill();
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`You clicked the circle ${n} time${n == 1 ? '' : 's'}`, w/2, h/2 + 80);
    ctx.font = '16px Arial';
    ctx.fillText('Click the circle to 100', w/2, h/2 + 120);
    if (n > 124 && n <= 149 && !cheating) {
        ctx.font = '14px Arial';
        ctx.fillText('ok genuinely stop there is nothing more to see here', w/2, h/2 - 100);
    } else if (n > 149 && n <= 174) {
        ctx.font = '14px Arial';
        ctx.fillText("well, since you're still here this was originally made as a task in a discord server", w/2, h/2 - 100);
    } else if (n > 174 && n < 200) {
        ctx.font = '14px Arial';
        ctx.fillText("uhm. im gonna go now, bye", w/2, h/2 - 100);
    }
    if (n > 99) {
        ctx.font = '24px Arial';
        if (Date.now() - birth < 8000 || cheating) {
            cheating = true;
            ctx.fillStyle = 'red';
            ctx.fillText('too fast, cheater >:(', w/2, h/2 - 70);
        } else {
            ctx.fillStyle = 'green';
            ctx.fillText('Good job you win!', w/2, h/2 - 70);
        }
    }
    requestAnimationFrame(draw);
}
draw();
