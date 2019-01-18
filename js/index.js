
$(function(){

	var time = 3 * 1000;

	var bottom_time = 6 * 1000;

	var spLength = $('.slide_point span').length;
		
		scimgWidth = $(window).width(),

		sulWidth = scimgWidth * spLength,

		sNum = 0;

		$(".slide_cont ul").width(sulWidth);

		$(".slide_cont ul li").width(scimgWidth);

	var sTimer = setInterval(moveSlide,time);

	function moveSlide(){
		sNum++;
		if(sNum >= spLength){
			sNum = 0;
		};

		showPics(sNum);
	}

	$('.slide_point span').mouseover(function(){
		clearInterval(sTimer);

		sNum = $(this).index();

		showPics(sNum);
	}).mouseleave(function(){

		sTimer = setInterval(moveSlide,bottom_time);

	});

	function showPics(sNum){

		$(".slide_point span").eq(sNum).find('img').attr('src','img/image/2_' + (sNum + 1) + '.png');

		$(".slide_point span").eq(sNum).find('img').css({'width':'210px','height':'280px'});

		$(".slide_point span").find('img').each(function(index){

			if(sNum != index){

				$(this).attr('src','img/image/0_' +(index + 1)+ '.png');

				$(this).css({'width':'200px','height':'250px'});
			}
		});

		$(".slide_point span").eq(sNum).addClass("cur_point").sibilings().removeClass("cur_point");

		$(".slide_cont ul").animate({

			"margin-left":-scimgWidth * sNum
		});

	}
});

(function($){

	$.fn.tabso = function(options){

		var opts = $.extend({},$.fn.tabso.defaults,options);

		return this.each(function(i){

			var _this = $(this);

			var $menus = _this.children(opts.menuChildSel);

			var $container = $(opts.cnSelect).eq(i);

			if(!$container) return;

			if(opts.tabStyle == "move" || opts.tabStyle == "move-fade" || opts.tabStyle == "move-animate"){

				var step = 0;

				if(opts.direction == "left"){

					step = $container.children().children(opts.cnChildSel).outerWidth(true);
				}else{

					step = $container.children().children(opts.cnChildSel).outerHeight(true);
				}


			}

			if(opts.tabStyle == "move-animate"){

				var animateArgu = new Object();
			}

			$menus[opts.tabEvent](function(){

				var index = $menus.index($(this));

				$(this).addClass(opts.onStyle).sibilings().removeClass(opts.onStyle);

				$(this).children('em').addClass(opts.onStyle2);

				$(this).sibilings().children('em').removeClass(opts.onStyle2);

				switch(opts.tabStyle){

					case "fade":
					if(!($container.children(opts.cntChildSel).eq(index).is(":animated"))){

						$container.children(opts.cnChildSel).eq(index).sibilings().css("display","none").end().stop(true,true).fadeIn(opts.aniSpeed);
						

					}
					break;
					case "move":
					$container.children(opts.cnChildSel).css(opts.direction,-step * index + "px");

				break;
				case "move-fade":
				if($container.children(opts.cnChildSel).css(opts.direction) == -step * index + "px") break;

			break;

			case "move-animate":
			animateArgu[opts.direction] = -step * index + "px";

			$container.children(opts.cnChildSel).stop(true).animate(animateArgu,opts.aniSpeed,opts.animMethod);
			break;
			default:
			$container.children(opts.cnChildSel).eq(index).css("display","block").sibilings().css("display","none");
				}
			});

			$menus.eq(0)[opts.tabEvent]();
		});
	};


	$.fn.tabso.defaults = {

		cnSelect : ".content_wrap",

		tabEvent2:"mouseleave",

		tabEvent:"mouseover",

		tabStyle:"normal",

		direction:"top",

		aniMethod:"swing",

		aniSpeed:"fast",

		onStyle:"current",

		onStyle2:"tab2",

		menuChildSel:"*",

		cnChildSel:"*"
	};
})(jQuery);