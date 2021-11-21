var main = (function() {
	var that = {
			Init : function() {
				// 상단 nav 메뉴 세팅
				that.Event.navBtnEvent();
				
				// 우측 사이드 바 control
				that.Event.stickyButtonEvent();
			},
			
			Event :  {
				navBtnEvent : function() {
					// 홈 버튼
					$("#homeBtn").on("click", function() {
						$('#loading').show();
						location.href="/resignation";
					});
					
					$('#headerNav a').on('click', function() {
						location.href= "/resignation/navigation/" + $(this).attr('btnName');
					});
				},
				// 우측 사이드 바 이벤트
				stickyButtonEvent : function() {
					$('#btn_side_toggle').on('click', 'a', function(e) {
						e.preventDefault();
						
						if ($('#btn_side_toggle').hasClass('on')) {
							$('#btn_side_toggle').removeClass('on');
							$('#rightSide').animate({right: -170}, 100);
							$(this).text('<');
						} else {
							$('#btn_side_toggle').addClass('on');
							$("#rightSide").animate({right: 0}, 100);
							$(this).text('>');
						}
						
					});
				},
				
				
			}
			
	}
	return that;
}) ();;