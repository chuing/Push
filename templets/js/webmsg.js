$(function(){
	$(".webMsg").click(function(){openwin("http://qiao.baidu.com/v3/?module=default&controller=im&action=index&siteid=6728559&ucid=10286884","在线咨询","800","600");});
	//$(".webMsg").click(function(){openwin("http://webim.qiao.baidu.com/im/index?siteid=6728559&ucid=10286884","在线咨询","800","600");});http://webim.qiao.baidu.com
	$(".sbcxan img").click(function(){
		var _s=$('#shanbiao').val();
		_s=_s=="请输入你要查询的商标名称！"?'':_s;
		dialog("商标查询","iframe_h:/a/jt/sbcx.html#"+_s,"633px","672px","FloatBox");
	});
	//$(".webMsg").click(function(){dialog("在线咨询","iframe_h:http://qiao.baidu.com/v3/?module=default&controller=im&action=index&ucid=7742907&type=n&siteid=5441933","800px","560px","FloatBox");});
});
function openwin(url,name,iWidth,iHeight)
{
	var iTop = (window.screen.height-30-iHeight)/2;
	var iLeft = (window.screen.width-10-iWidth)/2;
	window.open(url,name,'height='+iHeight+',,innerHeight='+iHeight+',width='+iWidth+',innerWidth='+iWidth+',top='+iTop+',left='+iLeft+',toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no');  
}