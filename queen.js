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
    ctx.fillStyle = '#fcffe6';
    //initCanvas(ctx)
    stack.push(ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height));
    //cs.addEventListener('mousemove', function (e) {
    //    setQueen((e.clientX - e.clientX % size) / size, (e.clientY - e.clientY % size) / size);
    //});

}
function initCanvas() {
    for (var i = 0; i <= num; i++) {
        ctx.moveTo(0, i * size);
        ctx.lineTo(size * num, i * size);
        ctx.stroke();
    }
    for (var i = 0; i <= num; i++) {
        ctx.moveTo(i * size, 0);
        ctx.lineTo(i * size, size * num);
        ctx.stroke();
    }
}
function setQueen(x, y) {
    if (x > 7 || y > 7)
        return;
    ctx.putImageData(stack[0], 0, 0);

    ctx.fillStyle = '#ffccc7';
    var d=y-x;
    var s=x+y;
    for(var i=0;i<num;i++){
        if(d+i<0||d+i>7)
            continue;
        ctx.fillRect(i*size,(d+i)*size,size,size);
    }
    for(var i=0;i<num;i++){
        if(s-i<0||s-i>7)
            continue;
        ctx.fillRect(i*size,(s-i)*size,size,size);
    }
    ctx.fillStyle = '#f5222d';
    ctx.fillRect(x * size, y * size, size, size);
}

function war_1(){
    
}