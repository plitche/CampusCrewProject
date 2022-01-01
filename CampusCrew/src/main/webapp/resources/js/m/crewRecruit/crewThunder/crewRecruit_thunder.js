/**
 *  번개크루 js
 */

	var thunderChangeDiv = function(openStep) {
		$('.recruit_thunder_popup').removeClass('layer_open');
		
		$('#thunderStep' + openStep).addClass('layer_open');
	}
	
	var thunderStep = function(number) {
		
		// 번개크루 step별 html, js 변화
		switch(number) {
		
		case "01":
			thunderChangeDiv(number);
			thunderUtil.step01.init();
			break;
			
		case "02":
			thunderChangeDiv(number);
			thunderUtil.step02.init();
			break;
			
		case "03":
			thunderChangeDiv(number);
			thunderUtil.step03.init();
			break;
		}
		
	}
	
	var thunderUtil = {
		
		// 번개크루모집 step01
		step01 : {
			
			info : new Object()
			, init : function() {
				
				thunderUtil.step01.event();
				
			}
			, event : function() {
				
				$('.btn_pop_close').off('click').on('click', function() {
					console.log('닫기');
					$('#thunderStep01').removeClass('layer_open');
				});
				
				$('.btn_pop_previous').off('click').on('click', function() {
					console.log('이전');
					$('#thunderStep01').removeClass('layer_open');
				});
				
				$('#btnThunderNext1').off('click').on('click', function() {
					console.log('다음');
					thunderStep("02");
				});
				
				
				// 데이터 넘기는거나 이벤트처리는 여기 실행하시면 됩니다.
				
			}
			
		},
		
		step02 : {
			info : new Object()
			, init : function() {
				
				thunderUtil.step02.event();
				
			}
			, event : function() {
				
				$('.btn_pop_close').off('click').on('click', function() {
					console.log('닫기');
					$('#thunderStep02').removeClass('layer_open');
				});
				
				$('.btn_pop_previous').off('click').on('click', function() {
					console.log('이전');
					thunderStep("01");
				});
				
				$('.btnThunderNext2').off('click').on('click', function() {
					console.log('다음');
					thunderStep("03");
				});
				
			}
		}
		
	
	}
	