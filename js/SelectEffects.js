//对于<ul><li>选择时的边框渲染特效JS
//找到cruises-choices类下的li标签，确定点击事件
$('.cruises-choices').find('li').click(function(){ 
//点击哪个li为其添加一个类名为cruises-choices-button的CSS，同时移除同辈li的cruises-choices-button这种类
$(this).addClass('cruises-choices-button').siblings().removeClass('cruises-choices-button');			
});

$('.hangxian').find('li').click(function(){ 
//点击哪个li为其添加一个类名为cruises-choices-button的CSS，同时移除同辈li的cruises-choices-button这种类
$(this).addClass('crt-li').siblings().removeClass('crt-li');			
});