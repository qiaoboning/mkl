(function($){
	var Tab=function(tab){
		var aMenuLi=tab.find('.menu li:not(.focus)');
		// console.log(aMenuLi);
		// 获取所有panel
		var agoodsBox=tab.find('.goodsBox');

		aMenuLi.click(function(){
			var index=$(this).index();
			// console.log(index);
			aMenuLi.removeClass('active').eq(index-1).addClass('active');
			agoodsBox.removeClass('active').eq(index-1).addClass('active');
		});
	};
	$.fn.extend({
		tab:function(){
			new Tab(this);
		}
	});

})(jQuery);



//显示左侧隐藏的列表
$('.act').mouseenter(function(){
	$('.noneList').show('1000');
});
$('.act').mouseleave(function(){
	$('.noneList').hide('1000');
});

//改变分页
$('.paging li:not(.active)').mouseover(function(){
	$(this).addClass('active');
});
$('.paging li:not(.active)').mouseout(function(){
	$(this).removeClass('active');
});


