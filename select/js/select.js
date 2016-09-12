$(function(){
	$.getJSON('地区.json',function(date){            //获取json数据	
	//省份列表
		$('#province').empty();                      //清空省份列表
		var html = ' ';
		var pro ;
		$.each(date, function(i,its) {              //遍历这份文件
			pro = '<option value="'+i+'">'+date[i].name+'</option>';		//获取省份列表的name，创建下拉菜单元素
			$('#province').append(pro);                   //上面创建的下拉菜单添加到#province中
		});
	//城市列表	
		$("#province").change(function(){             //当省份列表的选择发生改变时执行函数
			$('#city').empty();                       //清空此前的城市列表
			var html = ' ';
			$('#area').empty();                       //清空此前的地区列表
			var html = ' ';
			var cit ;
			var num_1 = parseInt($("#province option:selected").val());  //获取当前选中省份的下拉菜单的value值并且转成整数类型。
			var sub_1 = date[num_1].sub;                //获取当前选择的省份下面的城市列表并且保存到对象sub_1里面。		
			$.each(sub_1, function(i,its) {            //遍历这个城市列表
				cit = '<option value="'+i+'">'+sub_1[i].name+'</option>';   //获取城市列表的name，创建下拉菜单元素
				$("#city").append(cit);                       //上面创建的下拉菜单添加到#city中
			});			               
		});
	//地区列表
		$("#city").change(function(){             //当城市列表的选择发生改变时执行函数
			$('#area').empty();                       //清空此前的地区列表
			var html = ' ';
			var cit ;
			var num_1 = parseInt($("#province option:selected").val());  //获取当前选中省份的下拉菜单的value值并且转成整数类型。
			var num_2 = parseInt($("#city option:selected").val());      //获取当前选中城市的下拉菜单的value值并且转成整数类型。
			var sub_1 = date[num_1].sub;
			var sub_2 = sub_1[num_2].sub;                 //获取当前选择的城市下面的地区列表并且保存到对象sub_2里面。
			$.each(sub_2, function(i,its) {            //遍历这个地区列表
				are = '<option value="'+i+'">'+sub_2[i].name+'</option>';   //获取地区列表的name，创建下拉菜单元素
				$("#area").append(are);                                     //上面创建的下拉菜单添加到#area中
			});
		});
	});		
});
