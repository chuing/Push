// JavaScript Document
$(function(){
	var crel = ",143,144,146,";
	$("#fc61 a").each(function(){if(crel.indexOf("," + $(this).attr("rel") + ",")!=-1) $(this).css({"color":"#f08800","font-weight":"bold"});});
    show_nav();
});

	function show_nav(){
		var $nav = $(".c li");
		$nav.hover(
			function(){	
			    $(this).find("a").addClass("navover");
				rel = $(this).find("a").attr('rel');
				ind = $nav.index($(this));
				if(rel){
					$("#fc").hide();
					$("#fc"+rel).css('z-index',1001);
					//$(".fc"+rel).css('top','60px');
					$("#fc"+rel).show();
					if($("#fc"+rel+'_r').css('min-height')!=$("#fc"+rel+'_r').css('height')&&$("#fc"+rel+'_r').css('min-height')!='0px')
					{
						var height = $("#fc"+rel+'_r').css('min-height');
					}
					else
					{
						var height = $("#fc"+rel+'_r').css('height');
					}
					$("#fc"+rel).each(function(){
						$(this).children().css('height',height);
					}
					);
				}
			},
			function(){
				rel = $(this).find("a").attr('rel');
				ind = $nav.index($(this));
				$(this).find("a").removeClass("navover");
				if(rel){
					$("#fc"+rel).hide();
				}
			}
		);
		$("div[id^='fc']").hover(
			function(){
				$nav.removeClass("navover").eq(ind).find("a").addClass("navover");
				$("#fc"+rel).css('display','block');
			},
			function(){
				$nav.eq(ind).find("a").removeClass("navover");
				$("#fc"+rel).css('display','none');
			}
		);
	}