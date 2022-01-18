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
	
	// 홈 필터 리스트 가져오기

	$.ajax({
		url: '/campusCrew/m/getFilterTabList',
		type: 'GET',
		data: {},
		dataType: 'json',
		async: true,
		success: function(data) {
			console.log(data)
			
			var FilterTabList = '';
			var firstTab = '';
			$.each(data.filterTabList, function(index, value) {
				if (index==0) firstTab = value.VCFILTERNAME;
				FilterTabList	 += 
				`<li>
					<a href="javascript:fn_getCrewList('`+value.VCFILTERNAME+`')">`+value.VCFILTERNAME+`</a>
				</li>`;
			})
			$('.filterTab ul li:first').addClass('on');
			
			$('.filterTab ul').html(FilterTabList);
			fn_getCrewList(firstTab);
		},
		error: function() {
			alert('오류가 발생하였습니다. ')
		}
	})
	
});

let fn_getCrewList = (filterName) => {
	$(this).find('li').siblings().removeClass('on');
	$(this).find('li').addClass('on');
	
	let getData = {'filterName': filterName} 
	
	$.ajax({
		url: '/campusCrew/m/getHomeCrewList',
		type: 'GET',
		data : getData,
		dataType: 'json',
		async: true,
		success: function(data) {
			console.log(data)
			
			
		},
		error: function() {
			alert('리스트 가져오기 오류');
		}
	})
}
