/*
 * 
 * 
 * 
 */

// 로딩되고 실행할 이벤트
$(function(){
	
	// 크루개설버튼 클릭 시 크루리스트
	$('.crewRecruit_plusBtn').off('click').on('click', function() {
		$('.crewRecruit_list').toggle();
	});
	
});