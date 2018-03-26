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

	// 改变最后一个label的margin-bottom
	$('.check').parent().css('margin-bottom','0');

	
	$('.register').click(function(){
		// 用户名输入为空的时候
		if($('.username').val()==''){
			$('.error').css('display','block').html('账号或邮箱或手机号未填写或格式不正确');
		}else{
			if($('.password').val()==''){
				$('.error').css('display','block').html('请输入密码');
			}else{
				if($('.check').val()==''){
					$('.error').css('display','block').html('请输入验证码');
				}else{
					//获取验证码
					if($('.check').val()!=$('i').html()){
						$('.error').css('display','block').html('验证码输入不正确');	
					}else{
						$('.error').css('display','none');
					}
				}
			}
		}
	});
});