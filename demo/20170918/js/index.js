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
		canvasBarrage(canvas,data);
		return;
	}
	var context=canvas.getContext('2d');
		canvas.width=canvas.clientWidth;
		canvas.height-canvas.clientHeight;

	//存储实例
	var store={}
	//字号大小
	var fontsize=20;
	//实例方法

	var Barrage=function(obj,index){

	}
	data.forEach(function(obj,index){
		store[index]=new Barrage(obj,index);
	})

	//绘制弹幕文本
	var draw=function(){
		for(var index in store){
			var barrage=store[index];
			barrage.x -= barrage.moveX;
		}
	}

 }


canvasBarrage('#canvas01',dataBarrage);


