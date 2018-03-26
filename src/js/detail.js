//显示左侧隐藏的列表
$('.act').mouseenter(function(){
	$('.noneList').show('1000');
});
$('.act').mouseleave(function(){
	$('.noneList').hide('1000');
});

// 放大镜

//给缩略图添加鼠标滑入事件
// 获取缩略图
var midImg=document.querySelector('.mid-img');
var osmallGoods=document.querySelector('.small-goods');
var largeImg=document.querySelector('.large-img');
var olargeGoods=document.querySelector('.large-goods');
var detailGoods=document.querySelector('.detail-goods'); 
var midGoods=document.querySelector('.mid-goods');
// var oLeftList=document.querySelector('.leftList');

var aLi=Array.from(osmallGoods.children);
aLi.forEach(v=>{
	v.onclick=function(){
		midImg.src=this.src;
		largeImg.src=this.src;
	}
});

// 显示小方框.大盒子
var oBox=document.querySelector('.box'); 
var oShadow=document.querySelector('#shadow');

// 计算边界的值
var maxL=oBox.offsetWidth-130;
// console.log(maxL);
var maxT=midGoods.offsetHeight-131;
// console.log(maxT);
oBox.onmouseover=function(){
	$('.icon').css('display','none');
	oShadow.style.display='block';
	// $('.large-goods').css('display','block').animate({width:260,height:260},300);
	$('.large-goods').stop(true).show("fast").animate({width:260,height:260,left:440},"fast");

		//移动小方框
	oBox.onmousemove=function(ev){
		var e=ev||window.event;
		var ix=e.clientX-detailGoods.offsetLeft-40-oBox.offsetLeft-65;
		var iy=e.clientY-detailGoods.offsetTop-20-65;

		// 判断边界
		if(ix<0){
			ix=0;
		}
		if(ix>maxL){
			ix=maxL;
		}
		if(iy<0){
			iy=0;
		}

		if(iy>maxT){
			iy=maxT;
		}
		oShadow.style.left=ix+'px';
		oShadow.style.top=iy+'px';
		largeImg.style.left=-2*ix+"px";
		largeImg.style.top=-2*iy+"px";
	}
}

// 显示小方框大盒子
var oBox=document.querySelector('.box'); 
var oShadow=document.querySelector('#shadow');
oBox.onmouseout=function(){
	$('.icon').css('display','block');
	oShadow.style.display='none';
	olargeGoods.style.display='none';
}


//小图
// $('.icon i').mouseenter(function(){
// 	$(this).css('display','none');

// });
// var oIconTwo=document.querySelector('.icon_two');
// var oIconTwoI=Array.from(oIconTwo.children);
// console.log(oIconTwoI);
// var oIcon=document.querySelector('.icon');
// var aI=Array.from(oIcon.children);
// aI.forEach((v,k)=>{
// 	v.onmouseenter=function(){
// 		this.style.display='none';
// 		oIconTwoI[k].children.style.display='block';
// 	}
// });



var aLi=$('.goodsTab').find('.clearfix li');
// 获取所有panel
var agoods=$('.goodsTab').find('.commodity-info');

aLi.mouseover(function(){
	var index=$(this).index();
	aLi.removeClass('active').eq(index).addClass('active');
	agoods.removeClass('active').eq(index).addClass('active');
});













