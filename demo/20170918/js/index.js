//弹幕数组
var dataBarrage=[
	{
		value:'使用的是静态死数据',
		color:'#ff0000',
		range:[0,0.5]
	},
	{
		value:'前方高能预警+1！！！',
		color:'#ccfffc',
		range:[0,0.5]
	}
	,
	{
		value:'前方高能预警+2！！！',
		color:'#cffcff',
		range:[0,0.5]
	}
	,
	{
		value:'前方高能预警+3！！！',
		color:'#cffcff',
		range:[0.2,0.6]
	}
]


 var canvasBarrage = function(canvas,data){
 	if(!canvas || !data || !data.length){//判断数据和canvas 是否存在
 		return
 	}
	if(typeof canvas=='string'){
		canvas=document.querySelector(canvas);
	}
	console.log(!canvas.getContext);
	if(!canvas.getContext){
		return;
	}
	var context=canvas.getContext('2d');
//		canvas.width=canvas.clientWidth;
//		canvas.height-canvas.clientHeight;
		canvas.width="960";
		canvas.height="800";

	context.fillStyle="#FC943F";
	context.fillRect(10,10,100,100);//填充的矩形
	context.strokeStyle="#FF0000"
	context.strokeRect(50,50,80,120);//边框的矩形

	context.clearRect(30,30,20,20);//清空指定位置大小矩形部分，透明

	/**
	 * *绘制路径  beginPath//新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。closePath()//闭合路径之后图形绘制命令又重新指向到上下文中。,stroke()//通过线条来绘制图形轮廓。;fill()通过填充路径的内容区域生成实心的图形。*
	 *，就是闭合路径closePath(),不是必需的。这个方法会通过绘制一条从当前点到开始点的直线来闭合图形。如果图形是已经闭合了的，即当前点为开始点，该函数什么也不做。
	 * *注意：当你调用fill()函数时，所有没有闭合的形状都会自动闭合，所以你不需要调用closePath()函数。但是调用stroke()时不会自动闭合。
	 * moveTo(x, y) 将笔触移动到指定的坐标x以及y上。
	 * lineTo(x, y)绘制一条从当前位置到指定x以及y位置的直线。
	 * 绘制圆弧或者圆，我们使用arc()方法。当然可以使用arcTo()，不过这个的实现并不是那么的可靠，所以我们这里不作介绍。
	 * arc(x, y, radius, startAngle, endAngle, anticlockwise)//画一个以（x,y）为圆心的以radius为半径的圆弧（圆），从startAngle开始弧度到endAngle结束，按照anticlockwise给定的方向（默认为顺时针）来生成。、、true未逆时针  ；
	 * 角度与弧度的js表达式:radians=(Math.PI/180)*degrees。
	 ***/
	//绘制三角形
	context.beginPath();//
	context.moveTo(200,200);
	context.lineTo(250,250);
	context.lineTo(200,300);
	context.fill();

	context.beginPath();//
	context.moveTo(220,200);
	context.lineTo(280,280);
	context.lineTo(280,100);
	//context.lineTo(220,200);
	context.closePath();
	context.stroke();
	//context.fill();

		context.beginPath();
		context.arc(300,300,50,0,(Math.PI/180)*160,false);
		context.fillStyle='#0ff00f';
		context.fill();

	for(var i=0;i<4;i++){
		context.beginPath();
		var x=500,y=200,radius=100+i*10,
		startAngle=0,endAngle=(Math.PI/180)*300,anticlockwise=false;
		context.arc(x,y,radius,startAngle,endAngle,anticlockwise);
		context.stroke();
	}



//	//存储实例
//	var store={}
//	//字号大小
//	var fontsize=20;
//	//实例方法
//
//	var Barrage=function(obj,index){
//
//	}
//	data.forEach(function(obj,index){
//		store[index]=new Barrage(obj,index);
//	})
//
//	//绘制弹幕文本
//	var draw=function(){
//		for(var index in store){
//			var barrage=store[index];
//			barrage.x -= barrage.moveX;
//		}
//	}

 }


canvasBarrage('#canvas01',dataBarrage);


