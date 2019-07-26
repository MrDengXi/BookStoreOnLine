$(function(){
 		var index = 1;
 		var siv;
 		start();
 		function start(){
 		siv = setInterval(function(){
	 			if(index == 4){
	 				index =1;
	 			}
	 			$("#bc-top-images").attr("src", "images/index-"+index+".jpg");
	 			$("#top-bar span").eq(index-1).addClass("hover").siblings("span").removeClass("hover");
	 			index++;
	 		}, 2000);
 		}
 	$("#top-bar span").mouseover(function(){
		clearInterval(siv);
		$(this).addClass("hover").siblings("span").removeClass("hover");
		_index = $(this).index() + 1;// 获取序列号
		index = _index + 1;
		$("#bc-top-images").attr("src", "images/index-"+_index+".jpg");
	}).mouseout(function(){
		start();
	});
 	$("#item-cul").mouseover(function(){
 		$("#item-body").css("display", "block");
 		$("#item-cul").css("border-top", "#9dbce8 1px solid");
 		$("#item-cul").css("border-bottom", "#9dbce8 1px solid");
 		$("#item-cul").css("border-right", "none");
 	}).mouseout(function(){
 		$("#item-body").css("display", "none");
 		$("#item-cul").css("border-top", "none");
 		$("#item-cul").css("border-bottom", "#9dbce8 0.5px dotted");
 		$("#item-cul").css("border-right", "#9dbce8 1px solid");
	});
 	
 	$("#cfl_item1").mouseover(function(){
 		$("#cfl_item1").css("border-left", "#487a6f 1px solid");
 		$("#cfl_item1").css("border-top", "#487a6f 1px solid");
 		$("#cfl_item1").css("border-bottom", "none");
 		$("#cfl_item1").css("border-right", "#487a6f 1px solid");
 		$("#cfl_item1").css("font-weight", "bold");
 	}).mouseout(function(){
 		$("#cfl_item1").css("border-left", "none");
 		$("#cfl_item1").css("border-top", "none");
 		$("#cfl_item1").css("border-bottom", "#487a6f 1px solid");
 		$("#cfl_item1").css("border-right", "none");
 		$("#cfl_item1").css("font-weight", "normal");
	});
 	
 	$("#cfl_item2").mouseover(function(){
 		$("#cfl_item2").css("border-left", "#487a6f 1px solid");
 		$("#cfl_item2").css("border-top", "#487a6f 1px solid");
 		$("#cfl_item2").css("border-bottom", "none");
 		$("#cfl_item2").css("border-right", "#487a6f 1px solid");
 		$("#cfl_item2").css("font-weight", "bold");
 	}).mouseout(function(){
 		$("#cfl_item2").css("border-left", "none");
 		$("#cfl_item2").css("border-top", "none");
 		$("#cfl_item2").css("border-bottom", "#487a6f 1px solid");
 		$("#cfl_item2").css("border-right", "none");
 		$("#cfl_item2").css("font-weight", "normal");
	});
 	$("#cfl_item3").mouseover(function(){
 		$("#cfl_item3").css("border-left", "#487a6f 1px solid");
 		$("#cfl_item3").css("border-top", "#487a6f 1px solid");
 		$("#cfl_item3").css("border-bottom", "none");
 		$("#cfl_item3").css("border-right", "#487a6f 1px solid");
 		$("#cfl_item3").css("font-weight", "bold");
 	}).mouseout(function(){
 		$("#cfl_item3").css("border-left", "none");
 		$("#cfl_item3").css("border-top", "none");
 		$("#cfl_item3").css("border-bottom", "#487a6f 1px solid");
 		$("#cfl_item3").css("border-right", "none");
 		$("#cfl_item3").css("font-weight", "normal");
	});
 	$("#cfl_item4").mouseover(function(){
 		$("#cfl_item4").css("border-left", "#487a6f 1px solid");
 		$("#cfl_item4").css("border-top", "#487a6f 1px solid");
 		$("#cfl_item4").css("border-bottom", "none");
 		$("#cfl_item4").css("border-right", "#487a6f 1px solid");
 		$("#cfl_item4").css("font-weight", "bold");
 	}).mouseout(function(){
 		$("#cfl_item4").css("border-left", "none");
 		$("#cfl_item4").css("border-top", "none");
 		$("#cfl_item4").css("border-bottom", "#487a6f 1px solid");
 		$("#cfl_item4").css("border-right", "none");
 		$("#cfl_item4").css("font-weight", "normal");
	});
 	$("#cfl_item5").mouseover(function(){
 		$("#cfl_item5").css("border-left", "#487a6f 1px solid");
 		$("#cfl_item5").css("border-top", "#487a6f 1px solid");
 		$("#cfl_item5").css("border-bottom", "none");
 		$("#cfl_item5").css("border-right", "#487a6f 1px solid");
 		$("#cfl_item5").css("font-weight", "bold");
 	}).mouseout(function(){
 		$("#cfl_item5").css("border-left", "none");
 		$("#cfl_item5").css("border-top", "none");
 		$("#cfl_item5").css("border-bottom", "#487a6f 1px solid");
 		$("#cfl_item5").css("border-right", "none");
 		$("#cfl_item5").css("font-weight", "normal");
	});
 	$("#cfl_item6").mouseover(function(){
 		$("#cfl_item6").css("border-left", "#487a6f 1px solid");
 		$("#cfl_item6").css("border-top", "#487a6f 1px solid");
 		$("#cfl_item6").css("border-bottom", "none");
 		$("#cfl_item6").css("border-right", "#487a6f 1px solid");
 		$("#cfl_item6").css("font-weight", "bold");
 	}).mouseout(function(){
 		$("#cfl_item6").css("border-left", "none");
 		$("#cfl_item6").css("border-top", "none");
 		$("#cfl_item6").css("border-bottom", "#487a6f 1px solid");
 		$("#cfl_item6").css("border-right", "none");
 		$("#cfl_item6").css("font-weight", "normal");
	});
 	$("#cfl_item7").mouseover(function(){
 		$("#cfl_item7").css("border-left", "#487a6f 1px solid");
 		$("#cfl_item7").css("border-top", "#487a6f 1px solid");
 		$("#cfl_item7").css("border-bottom", "none");
 		$("#cfl_item7").css("border-right", "#487a6f 1px solid");
 		$("#cfl_item7").css("font-weight", "bold");
 	}).mouseout(function(){
 		$("#cfl_item7").css("border-left", "none");
 		$("#cfl_item7").css("border-top", "none");
 		$("#cfl_item7").css("border-bottom", "#487a6f 1px solid");
 		$("#cfl_item7").css("border-right", "none");
 		$("#cfl_item7").css("font-weight", "normal");
	});
 	})