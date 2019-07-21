var size = 65; //棋子大小
var num = 8; //棋盘维数
var cs;
var ctx;
var stack = [];
window.onload = function () {
    cs = document.getElementById('cs');//获取画布元素
    ctx = cs.getContext('2d');//context对象
    ctx.fillStyle = '#bae7ff';
    ctx.fillRect(520, 0, 180, 520);
    ctx.fillStyle = '#ff85c0'
    initCanvas(ctx)
    stack.push(ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height));
    cs.addEventListener('mousemove', function (e) {
        ctx.fillStyle = '#f5222d';
        ctx.save();
        setQueen(ctx, (e.clientX - e.clientX % size) / size, (e.clientY - e.clientY % size) / size);
    });


}
function initCanvas(pen) {
    for (var i = 0; i <= num; i++) {
        pen.moveTo(0, i * size);
        pen.lineTo(size * num, i * size);
        pen.stroke();
    }
    for (var i = 0; i <= num; i++) {
        pen.moveTo(i * size, 0);
        pen.lineTo(i * size, size * num);
        pen.stroke();
    }
}
function setQueen(pen, x, y) {
    if (x > 7 || y > 7)
        return;
    ctx.putImageData(stack[0], 0, 0);

    pen.fillRect(x * size, y * size, size, size)
}