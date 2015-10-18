$(function() {

	$("#f_slider1").show();
	$("#focusBar li").css("width",$(window).width());
	$("a.arrL").mouseover(function(){stopFocusAm();}).mouseout(function(){starFocustAm();});
	$("a.arrR").mouseover(function(){stopFocusAm();}).mouseout(function(){starFocustAm();});
	$("#focusBar li").mouseover(function(){stopFocusAm();}).mouseout(function(){starFocustAm();});
	starFocustAm();
	
	$adnumli.hover(function(){
		stopFocusAm();
		$adnumli.index($(this))!=(nextI-1)?$(this).addClass("bg"):'';
	},function(){
		starFocustAm();
		$adnumli.index($(this))!=(nextI-1)?$(this).removeClass("bg"):'';
	}).click(function(){
		$adnumli.removeClass("bg").eq($adnumli.index($(this))).addClass("bg");
		next=$(this).attr("rel");
		changeFocus(currentI>next?false:true,next);
	});
	$adnumli.eq(0).addClass("bg");
});
	
	var i=0;
	$("#focusBar li").each(function(){
		i++;
		$(".adnum").append('<a href="javascript:void();" rel="'+ i +'">'+ i +'</a>');
	});

/*------focus-------*/
$("#focusBar").hover(
	function () {
		$("#focusBar .arrL").stop(false,true);
		$("#focusBar .arrR").stop(false,true);
		$("#focusBar .arrL").animate({ left: 0}, { duration: 500 });
		$("#focusBar .arrR").animate({ right: 0}, { duration: 500 });
	}, function () {
		$("#focusBar .arrL").stop(false,true);
		$("#focusBar .arrR").stop(false,true);
		$("#focusBar .arrL").animate({ left: -52}, { duration: 500 });
		$("#focusBar .arrR").animate({ right: -52}, { duration: 500 });
	}
);

var timerFID;

function nextPage() {
	changeFocus(true,0);
}
function prePage() {
	changeFocus(false,0);
}

var $adnumli = $(".adnum a");
var currentI=1;
var changeingFocus = false;
function changeFocus(dir, next) {
	if($("#focusBar li").length <= 1) return;
	if(changeingFocus) return;
	changeingFocus = true;
	
	$("#f_slider"+nextI).stop(false,true);
	$("#f_slider"+nextI+" .focusL").stop(false,true);
	$("#f_slider"+nextI+" .focusR").stop(false,true);
	var nextI
	if(next==0){ 
		nextI= dir?parseInt(currentI)+1:parseInt(currentI)-1;
	}else{
		var nextI = next;
	}
	nextI = nextI>$("#focusBar li").length?1:(nextI<1?$("#focusBar li").length:nextI);
	//var focusWidth = $(window).width()>1000?1000:$(window).width();
	$("#f_slider"+currentI).css("width",$(window).width());
	$("#f_slider"+nextI).css("width",$(window).width());
	if(dir) {
		$("#f_slider"+nextI).css("left",$(window).width());
		$("#f_slider"+nextI+" .focusL").css("left",$(window).width()/2);
		$("#f_slider"+nextI+" .focusR").css("left",$(window).width()/2);
		$("#f_slider"+currentI).show();
		$("#f_slider"+nextI).show();
		
		$("#f_slider"+currentI+" .focusL").animate({left: -($(window).width()/2+1000)},1200,'easeInExpo');
		$("#f_slider"+currentI+" .focusR").animate({left: -($(window).width()/2+1000)},900,'easeInExpo',function(){
				$("#f_slider"+nextI+" .focusL").animate({left: -960},1200,'easeInOutCirc');
				$("#f_slider"+nextI+" .focusR").animate({left: -960},900,'easeInOutCirc');
				
				$("#f_slider"+currentI).animate({left: -$(window).width()},1800,'easeOutExpo');
				$("#f_slider"+nextI).animate({left: 0},1800,'easeOutExpo',function(){
						$("#f_slider"+currentI).hide();
						currentI = nextI;
						changeingFocus = false;
				});
		});
		$adnumli.removeClass("bg").eq(nextI-1).addClass("bg");
	} else {
		$("#f_slider"+nextI).css("left",-$(window).width());
		$("#f_slider"+nextI+" .focusL").css("left",-($(window).width()/2+1200));
		$("#f_slider"+nextI+" .focusR").css("left",-($(window).width()/2+900));
		$("#f_slider"+currentI).show();
		$("#f_slider"+nextI).show();
		
		$("#f_slider"+currentI+" .focusR").animate({left: $(window).width()/2},900,'easeInExpo');
		$("#f_slider"+currentI+" .focusL").animate({left: $(window).width()/2},1200,'easeInExpo',function(){
			$("#f_slider"+nextI+" .focusL").animate({left: -960},1200,'easeInOutCirc');
			$("#f_slider"+nextI+" .focusR").animate({left: -960},900,'easeInOutCirc');
			
			$("#f_slider"+currentI).animate({left: $(window).width()},1800,'easeOutExpo');
			$("#f_slider"+nextI).animate({left: 0},1800,'easeOutExpo',function(){
				$("#f_slider"+currentI).hide();
				currentI = nextI;
				changeingFocus = false;
			});
		});
		$adnumli.removeClass("bg").eq(nextI-1).addClass("bg");
	}
}
function starFocustAm(){
	timerFID = setInterval("timer_tickF()",5000);
}
function stopFocusAm(){
	clearInterval(timerFID);
}
function timer_tickF() {
	changeFocus(true,0);
}
