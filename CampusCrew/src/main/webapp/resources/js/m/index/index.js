/**
 * 
 * 
 */


// 로딩되고 실행할 이벤트
$(function(){
	
	// 크루개설버튼 클릭 시 크루리스트
	$('.crewRecruit_plusBtn').off('click').on('click', function() {
		$('.crewRecruit_list').toggle();
	});
	
	$('.crewRecruit_thunder').off('click').on('click', function() {
		console.log('번개크루 팝업화면 열자!');
		$('#thunderStep01').addClass('layer_open');
	});

	$('.crewRecruit_regular').off('click').on('click', function() {
		console.log('정기크루 팝업화면 열자!');
	});

	$('.crewRecruit_battle').off('click').on('click', function() {
		console.log('배틀크루 팝업화면 열자!');
	});
	
	
});


