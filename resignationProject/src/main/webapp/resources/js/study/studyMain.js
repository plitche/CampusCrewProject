var study = (function() {
	var that = {
			init : function() {
				// ajax 스터디 리스트 불러오기
				 that.Ajax.getStudyList();
				
				// 각 스터디 마우스 오버 이벤트
				that.Event.studyMouseOver();
				
			},
			
			Ajax : {
				// ajax 스터디 리스트 가져오기 
				getStudyList : function() {
					requestAjaxPOST('/resignation/study/getStudyList', {}, function(data) {
						console.log(data.studyList);
					});
				},
			},
			
			Event :  {
				// 각 스터디 마우스 오버 이벤트
				studyMouseOver : function() {
					$('.study_item_wrap').mouseover(function() {
						$(this).find('.item_info').show();
					});
					
					$('.study_item_wrap').mouseleave(function() {
						$(this).find('.item_info').hide();
					});	
				},
				
				
				
			},
	}
	return that;
}) ();;