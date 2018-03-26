$(function(){
	// 页面加载生成随机验证码
	var str='';
		var arr=['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F'];		
		for(i=0;i<4;i++){
			var x=Math.floor(Math.random()*14);
			str+=arr[x];
		}
		$('i').html(str);

	//随机验证码
	$('.changePic').click(function(){
		var str='';
		var arr=['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F'];		
		for(i=0;i<4;i++){
			var x=Math.floor(Math.random()*14);
			str+=arr[x];
		}
		$('i').html(str);
	});

	// 去掉input默认框
	$('input').focus(function(){
		$(this).css('outline','none');
	});

	// 改变label边框颜色
	$('input').blur(function(){
		if($(this).val()==''){
			$(this).parent().css('borderColor','#e24a4a');
		}else{
			$(this).parent().css('borderColor','#ccc');
		}
	})

	$('.phone').blur(function(){
		// 验证手机号
		if($('.phone').val()==''){
			$('.phone').parent().css('margin-bottom','0');
			$('.errorPhone').css('display','block').html('手机用来登录，不能为空');
		}else{
			var reg = /^1(3|4|5|7|8|9)\d{9}$/;
			if(!reg.test($('.phone').val())) {
				$('.phone').parent().css('margin-bottom','0');
				$('.errorPhone').css('display','block').html('手机格式错误');
			}else{
				$('.phone').parent().css('margin-bottom','40px');
				$('.errorPhone').css('display','none');
			}
		}
	});
	// 验证验证码
	$('.check').blur(function(){		
		if($('.check').val()==''){
			$('.check').parent().css('margin-bottom','0');
			$('.errorCheck').css('display','block').html('验证码不能为空');
		}else{
			if($('.check').val()!=$('i').html()){
				$('.check').parent().css('margin-bottom','0');
				$('.errorCheck').css('display','block').html('验证码不正确');	
			}else{
				if($('.check').val()==$('i').html()){
					$('.check').parent().css('margin-bottom','40px');
					$('.errorCheck').css('display','none');
				}			
			}
		}
	});
	// 验证短信
	$('.message').blur(function(){		
		if($('.message').val()==''){
			$('.message').parent().css('margin-bottom','0');
			$('.errorMessage').css('display','block').html('验证码不能为空');
		}else{
			// 验证码不能小于5位
			if($('.message').val().length<5){
				$('.message').parent().css('margin-bottom','0');
			$('.errorMessage').css('display','block').html('验证码不正确');
			}else{
				$('.message').parent().css('margin-bottom','40px');
				$('.errorMessage').css('display','none');
			}			
		}
	});
	// 验证密码
	$('.password').blur(function(){		
		if($('.password').val()==''){
			$('.password').parent().css('margin-bottom','0');
			$('.errorPassword').css('display','block').html('密码不能为空');
		}else{
			if($('.password').val().length<6){
				$('.password').parent().css('margin-bottom','0');
				$('.errorPassword').css('display','block').html('密码太短啦，不足6个字符');
			}else{
				var ichar=false;
				for(var i=0;i<$('.password').val().length;i++){
					var char=$('.password').val().charCodeAt(i);
					if(char>=65&&char<=9||char>=97&&char<=122){
						ichar=true;
					}
					if(ichar==false){
						$('.password').parent().css('margin-bottom','0');
						$('.errorPassword').css('display','block').html('密码必须包含数字和字符');
					}else{
						$('.password').parent().css('margin-bottom','40px');
						$('.errorPassword').css('display','none');
					}
				}		
			}
		}
	});
	// 确认密码
	$('.confirm').blur(function(){		
		if($('.confirm').val()==''){
			$('.confirm').parent().css('margin-bottom','0');
			$('.errorConfirm').css('display','block').html('确认密码不能为空');
		}else{
			if($('.confirm').val()!=$('.password').val()){
				$('.confirm').parent().css('margin-bottom','0');
				$('.errorConfirm').css('display','block').html('两次输入密码不一致');
			}else{
				$('.confirm').parent().css('margin-bottom','40px');
				$('.errorConfirm').css('display','none');
			}
		}
	});
});