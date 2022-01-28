/**
 *  번개크루 js
 */

	let thunderChangeDiv = (openStep) => {
		$('.recruit_thunder_popup').removeClass('layer_open');
		
		$('#thunderStep' + openStep).addClass('layer_open');
	}
	
	let thunderStep = (number) => {
		
		// 번개크루 step별 html, js 변화
		switch(number) {
		
		// 번개크루 1단계 
		case "01":
			thunderChangeDiv(number);
			thunderUtil.step01.init();
			break;
		// 번개크루 2단계 	
		case "02":
			thunderChangeDiv(number);
			thunderUtil.step02.init();
			break;
		// 번개크루 3단계 		
		case "03":
			thunderChangeDiv(number);
			thunderUtil.step03.init();
			break;
		}
		
	}
	
	let thunderUtil = {
		
		// 번개크루모집 step01
		step01 : {
			
			info : new Object()
			, init : () => {
				
				thunderUtil.step01.event();
				
			}
			, event : () => {
				
				$('.thunder_btn_pop_close').off('click').on('click', () => {
					console.log('닫기');
					$('#thunderStep01').removeClass('layer_open');
				});
				
				$('.btn_pop_previous').off('click').on('click', () => {
					console.log('이전');
					$('#thunderStep01').removeClass('layer_open');
				});
				
				$('input:radio[name="crewType"]').off('click').on('click', ()=> {
					var chkRadio = $('input:radio[name="crewType"]:checked');
					$('.crewTypeContent').removeClass('on');
					$('input:radio[name="crewType"]:checked').next().addClass('on');
					if (chkRadio.length == 1	) {
						$('#btnThunderNext1').addClass('blue');
					} else {
						$('#btnThunderNext1').removeClass('blue');
					}
				});
				
				$('#btnThunderNext1').off('click').on('click', () => {
					if ($('input:radio[name="crewType"]:checked').length == 0) {
						msg.info('크루유형을 선택해주세요.');
						return;
					}
					console.log('다음');
					thunderStep("02");
				});
				
				
				// 데이터 넘기는거나 이벤트처리는 여기 실행하시면 됩니다.
				
			}
			
		},
		
		// 번개크루모집 step02
		step02 : {
			info : new Object()
			, init : () => {
				
				thunderUtil.step02.event();
				
			}
			, event : () => {
				
				$('.thunder_btn_pop_close').off('click').on('click', () => {
					console.log('닫기');
					$('#thunderStep02').removeClass('layer_open');
				});
				
				$('.btn_pop_previous').off('click').on('click', () => {
					console.log('이전');
					thunderStep("01");
				});
				
				$('.btnThunderNext2').off('click').on('click', () => {
					console.log('다음');
					thunderStep("03");
				});
				
			}
		}
		
	
	}
	