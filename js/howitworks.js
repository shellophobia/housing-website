$(document).ready(function(){
	$('.feedback').data('hidden','false');
	$('#icon a').on('click',function(e){
		e.preventDefault();
		if($('.feedback').data('hidden')=='false'){
			$('.feedback').animate({right:'0%'},1000);
			$('.feedback').data('hidden','true');
			$('body').append($('<div class="blur"></div>'));
		}
		else{
			$('.feedback').animate({right:'-32.7%'},1000);
			$('.feedback').data('hidden','false');
			$('.blur').remove();
		}
	});
	$('#feed-close').on('click',function(e){
		e.preventDefault();
		if($('.feedback').data('hidden')=='true'){
			$('.feedback').animate({right:'-32.7%'},1000);
			$('.feedback').data('hidden','false');
			$('.blur').remove();
		}
	});
	$('#how').on('click',function(){
		$('#animator').animate({height:'82vh'},1000,function(){
			$(window).scrollTop($('#animator').offset().top);
			$('#slide1').fadeIn(500);
			$('#slide1 h3').slideDown({duration:1000,easing:"easeOutBounce"});
			$('#slide1 span').show('slide',{direction:'left'});
			$('#slide1 button').delay(500).show('slide',{direction:'down'}).on('click',function(){
				$('#slide1').fadeOut(600);
				animateRow1();
		});
		});	
	});
});

function animateRow1(){
	$('#slide2').fadeIn(100);
	var el = $('#slide2 .row').find('h3:first');
	$('#slide2 .row:first').delay(500).fadeIn(500,function(){
		showDiv(el);
		el= $(this).find('div:first');
		setTimeout(function(){showDiv(el)},500);
		setTimeout(function(){$(this).find('button').show('slide',{direction:'up'},500);},3000);
	});
	$('.next').on('click',function(){
		animateRow2();
	});
}

function animateRow2(){
	$('#slide2').find('.row:eq(0)').fadeOut(500);
	var el = $('#slide2').find('.row:eq(1)').find('h3:first');
	$('#slide2 .row:eq(1)').delay(500).fadeIn(500,function(){
		showDiv(el);
		$(this).find('img:first').show(500);
		el= $(this).find('div:first');
		setTimeout(function(){showDiv(el)},800);
		setTimeout(function(){$(this).find('button').show('slide',{direction:'up'},500);},3200);
	});
	$('.next').on('click',function(){
		animateRow3();
	});
}

function animateRow3(){
	$('#slide2').find('.row:eq(1)').fadeOut(500);
	var el = $('#slide2').find('.row:eq(2)').find('h3:first');
	$('#slide2 .row:eq(2)').delay(800).fadeIn(500,function(){
		showDiv(el);
		el= $(this).find('div:first');
		setTimeout(function(){showDiv(el)},800);
		setTimeout(function(){$(this).find('button').show('slide',{direction:'up'},500);},3200);
	});
	$('#slide2 .row:eq(2)').find('button').on('click',function(){
		animateMakeSlide();
	});
}

function animateMakeSlide(){
	$('#slide2').fadeOut(500);
	$('#slide3').delay(500).fadeIn(500);
	var el = $('#slide3').find('.row:eq(0)').find('h3:first');
	$('#slide3 .row:eq(0)').delay(500).fadeIn(500,function(){
		showDiv(el);
		el= $(this).find('div:first');
		setTimeout(function(){showDiv(el)},800);
		setTimeout(function(){$(this).find('button').show('slide',{direction:'up'},500);},3200);
	});
	$('#slide3 .row:eq(0)').find('button').on('click',function(){
		animateRow4();
	});
}

function animateRow4(){
	$('#slide3').find('.row:eq(0)').fadeOut(500);
	$('#make-5').delay(800).fadeIn(500,function(){
		$(this).find('h3:first').show('slide',{direction:'left'},500);
	});
}

function showDiv(elem){
	if(elem.prop('tagName')=='H3'){
		elem.delay(200).show('slide',{direction:'left'},500);
	}
	else{
		elem.delay(200).show('slide',{direction:'down'},500,function(){
			$(this).next().length && showDiv($(this).next());
		});
	}
}


// http://jsfiddle.net/4d1khucm/