
//瀑布流
var oSection=document.querySelector('.section');
var aPanel 	= Array.from(oSection.children);
var iPanelW =aPanel[0].offsetWidth;



//计算容纳多少列
	var  iWinW  =984;
	var iMaxCol = Math.floor(iWinW / iPanelW);

	
// // // 指定section的宽度
	oSection.style.width = iMaxCol * iPanelW + 'px';
	

var aColH = [];
aPanel.forEach(function(v,k){
	if(k<iMaxCol){
		v.style.top=0;
		v.style.left=k*iPanelW+'px';
		aColH.push(v.offsetHeight);
	}else{
		//寻找最矮列和下标
		var iMinH=Math.min(...aColH);
		var iMinK=aColH.indexOf(iMinH);

		v.style.left=iMinK*iPanelW+'px';
		v.style.top=iMinH+'px';

		//更新列的高度
		aColH[iMinK]+=v.offsetHeight;
	}

});

$(function(){
	$('.banner').slideDown(1500,'linear');
});
//显示左侧隐藏的列表
$('.act').mouseenter(function(){
	$('.noneList').show('1000');
});
$('.act').mouseleave(function(){
	$('.noneList').hide('1000');
});

//显示隐藏的电话

$('.rightList li:eq(1)').mouseover(function(){
	$('.nonePhone').show().animate({right:70},500);
});
//隐藏电话
$('.rightList li:eq(1)').mouseout(function(){
	$('.nonePhone').hide().animate({right:160},500);
});


//显示隐藏的商品详情

$('.instruction').click(function(){
	$(this).children('div .detail').css({"display":"block"}).animate({
		width:324,
		height:193
	},400,function(){
		$(this).animate({height:587},600);
	});
	// 显示遮罩层
	$('.shadow').css('display','block');
});

$('.error').click(function(){
	$(this).parent().animate({height:193},400,function(){
		$(this).animate({height:0,width:0},400,function(){
			$(this).css('display','none');
		});
		// 隐藏遮罩层
		$('.shadow').css('display','none');
	});			
});

//滑过图片改变背景色并移动
$('.section_02').mouseover(function(){
	$(this).find('p').css('color','#fff');
	$(this).children('div .sec02_left').css('background','#eeafce');	
	$(this).children().children().css('border-left-color','#eeafce');
	$(this).children().has('img').css('transform','translateX(-4px)');	
});
$('.special').mouseover(function(){
	$(this).find('p').css('color','#fff');	
	$(this).children('div .content').css('background','#eeafce');
	$(this).children().children().css('border-right-color','#eeafce');
	$(this).children().has('img').css('transform','translateX(4px)');	
});

$('.book').mouseover(function(){
	$(this).children().has('img').css('transform','translateX(-4px)');	
});

$('.book').mouseout(function(){
	$(this).children().has('img').css('transform','translateX(0px)');	
});

$('.section_02').mouseout(function(){
	$(this).find('p').css('color','#969696');
	$(this).children().css('background','#fff');
	$(this).children().children().css('border-left-color','#fff');
	$(this).children().has('img').css('transform','translateX(0px)');	
});

$('.special').mouseout(function(){
	$(this).find('p').css('color','#969696');
	$(this).children().css('background','#fff');
	$(this).children().children().css('border-right-color','#fff');
	$(this).children().has('img').css('transform','translateX(0px)');	
});



//获取detail
// var odetail=document.querySelector('.detail');
// var oSection=document.querySelector('.section');
// var osecList=oSection.children;
// for(var i=0;i<osecList.length;i++){
// 	if(i==3){
// 		osecList[i].appendChild(odetail);
// 	}
// }


