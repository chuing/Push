// JavaScript Document
$(function(){
        show_nav();
});

	function show_nav(){
		/* 导航显示效果 */
		$("#nav .v").hover(
			function(){	
				$(this).css('cursor','hand');
				rel = $(this).attr('rel');
				if(rel){
					$(".fd").hide();
					$(".fd"+rel).css('z-index',1000);
					//$(".fd"+rel).css('top','60px');
					$(".fd"+rel).show();
					if($(".fd"+rel+'_r').css('min-height')!=$(".fd"+rel+'_r').css('height')&&$(".fd"+rel+'_r').css('min-height')!='0px')
					{
						var height = $(".fd"+rel+'_r').css('min-height');
					}
					else
					{
						var height = $(".fd"+rel+'_r').css('height');
					}
					$(".fd"+rel).each(function(){
						$(this).children().css('height',height);
					}						
					);
				}	
			},
			function(){
				rel = $(this).attr('rel');
				if(rel){
					$(".fd"+rel).hide();
				}	
			}
		);
		var wzlist=$("div[id^='wz']");
		$("div[id^='wz']").hover(
			function(){
				$("#wz"+rel).css('display','block');
			},
			function(){
				$("#wz"+rel).css('display','none');
			}
		);
		/* 导航显示效果结束 */
	}