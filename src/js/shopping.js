$(function(){

	
	var len=$('.table-title').siblings().length-1;
	//改变总共几件商品
	$('.num').text(len);

	//获取每件商品的单价
	var sum=0;
	$('.data').each(function(){	
		sum+=parseInt($(this).text());
	});
	$('.totalMoney').text(sum);

	//数量++
	$('.plus').click(function(){
		var number=$(this).prev().text();
		number++;
		$(this).prev().text(number);
		//改变小计
		var price=number*$(this).parent().parent().prev().children().children().text();
		$(this).parent().parent().next().children().children().text(price);
		// 改变总价
		var sum=0;
		$('.data').each(function(){	
			sum+=parseInt($(this).text());
		});
		$('.totalMoney').text(sum);
	});

	// 数量--
	$('.reduce').click(function(){
		var number=$(this).next().text();
		//改变小计
		var price=number*$(this).parent().parent().prev().children().children().text();
		$(this).parent().parent().next().children().children().text(price);

		number--;
		if(number<=0){
			$('.reduce').css('cursor','notallowed');
		}else{
			$(this).next().text(number);
		}

		// 改变总价
		var sum=0;
		$('.data').each(function(){	
			sum+=parseInt($(this).text());
		});
		$('.totalMoney').text(sum);
	});

	// 点击删除
	$('.delete').click(function(){
		var that=$(this);
		$('.deletegoods').css('display','block').animate({top:50});	
			// 点击取消
			$('.cancel').click(function(){
				$('.deletegoods').animate({top:0}).css('display','none');
			});
		// 点击确定
		$('.sure').click(function(){
			$('.deletegoods').animate({top:0}).css('display','none');
			//删除已经添加的商品
			that.parent().parent().remove();
			// console.log($('.table-title').siblings().length-1);
			if(($('.table-title').siblings().length-1)==0){
				// console.log($('.table-title').siblings().length);
				$('.table-title').next().css({'display':'block','width':'1000'});
				$('.noneGoods').css({'text-align':'cneter','line-height':'3','width':'1000'});
			}

			//获取
			var len=$('.table-title').siblings().length-1;
			//改变总共几件商品
			$('.num').text(len);
		});
	});
});

	
	

