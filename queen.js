var size = 65; //棋子大小
var num = 8; //棋盘维数
var cs;//画布
var ctx;//context对象
var level = 1;
var stack = [];
var X=-1;//记录鼠标上次位置，减少重绘
var Y=-1;
var matrix=new Array();
var queen=new Image();
queen.src='queen.jpg';
window.onload = function () {
    cs = document.getElementById('cs');//获取画布元素
    ctx = cs.getContext('2d');//context对象
    ctx.fillStyle = '#bae7ff';
    ctx.fillRect(520, 0, 180, 520);
    ctx.fillStyle = '#fcffe6';
    //initCanvas(ctx)
    for(var i=0;i<num;i++){
        matrix[i]=new Array();
        for(var j=0;j<num;j++)
            matrix[i][j]=0;
    }
    stack.push(ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height));
    initBorder(level);
    cs.addEventListener('mousemove', function (e) {
        moveQueen((e.clientX - e.clientX % size) / size, (e.clientY - e.clientY % size) / size);
    });
    cs.addEventListener('click', function (e) {
        setQueen((e.clientX - e.clientX % size) / size, (e.clientY - e.clientY % size) / size);
    });
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
function moveQueen(x, y) {
    if (x > 7 || y > level - 1)
        return;
    if(X==x&&Y==y||matrix[x][y]>0)
        return;
    ctx.putImageData(stack[level - 1], 0, 0);
    initBorder(level);
    ctx.fillStyle = '#ffccc7';
    var d = y - x;
    var s = x + y;
    for (var i = 0; i < num; i++) {
        if (d + i < 0 || d + i > level - 1||matrix[i][d+i]>0)
            continue;
        ctx.fillRect(i * size, (d + i) * size, size, size);
    }
    for (var i = 0; i < num; i++) {
        if (s - i < 0 || s - i > level - 1||matrix[i][s-i]>0)
            continue;
        ctx.fillRect(i * size, (s - i) * size, size, size);
    }
    ctx.drawImage(queen,x*size,y*size,size,size);
    X=x;
    Y=y;
}
function setQueen(x, y) {
    if (x > 7 || y > level - 1||matrix[x][y]>0)
        return;
    ctx.putImageData(stack[level - 1], 0, 0);
    matrix[x][y]++;

    ctx.drawImage(queen,x*size,y*size);
    stack.push(ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height));
    level++;
    if(level>8){
        ctx.putImageData(stack[0], 0, 0);
        level=1;
    }
    initBorder(level);
}

function initBorder(x) {
    ctx.fillStyle = '#95de64';
    ctx.fillRect(0,x*size-size,num*size,size);
}