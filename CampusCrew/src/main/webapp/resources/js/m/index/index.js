/**
 * 홈 js
 * 
 */


// 로딩되고 실행할 이벤트
$(function(){
	
	// 크루개설버튼 클릭 시 크루리스트
	$('.crewRecruit_plusBtn').off('click').on('click', ()=> {
		$('.crewRecruit_list').toggle();
	});
	
	$('.crewRecruit_thunder').off('click').on('click', ()=> {
		console.log('번개크루 팝업');
		thunderStep("01");
		$('.crewRecruit_list').hide();
	});

	$('.crewRecruit_regular').off('click').on('click', ()=> {
		console.log('정기크루 팝업');
	});

	$('.crewRecruit_battle').off('click').on('click', ()=> {
		console.log('배틀크루 팝업');
	});
	
	
});


