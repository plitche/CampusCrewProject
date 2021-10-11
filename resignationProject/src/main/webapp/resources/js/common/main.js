var main = (function() {
	var that = {
			Init : function() {
				// 상단 nav 메뉴 세팅
				that.Event.navBtnEvent();
				
			},
			
			Event :  {
				navBtnEvent : function() {
					// 홈 버튼
					$("#homeBtn").on("click", function() {
						location.href="/resignation";
					});
					
					$('#headerNav a').on('click', function() {
						location.href= "/resignation/navigation/" + $(this).attr('btnName');
					});
				}
				
			}
			
	}
	return that;
}) ();;