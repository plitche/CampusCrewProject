/**
 * 홈 js
 * 
 */

// 로딩되고 실행할 이벤트
$(function(){
		
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
			
			let listHtml = '';
			$.each(data.homeCrewList, function(index, value) {
				listHtml += `
				<div class="eachCrewList">
					<div class="filterName">`+value.TABLEINFO+`</div>
					<div class="listTag">
						<span>#테니스</span>
						<span>#대학생</span>
					</div>
					<div class="listTitle">`+value.VCCREWBATTLETITLE+`</div>
					<div class="listFooter">
						<span>A B C</span>
						<div>
							<span>사람</span>
							<span class="currentApply">6</span>&nbsp;/
							<span class="needApply">10</span>
						</div>
					</div>
				</div>
				`;
			})
			
			$('.homeCrewList').html(listHtml);
		},
		error: function() {
			alert('리스트 가져오기 오류');
		}
	})
}
