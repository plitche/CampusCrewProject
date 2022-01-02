/**
 *  로그인/회원가입 팝업 js
 */

	let loginJoinChangeDiv = (openStep) => {
		$('.loginJoin_popup').removeClass('layer_open');
		
		$('#loginJoinStep' + openStep).addClass('layer_open');
	}
	
	let loginJoinStep = (number) => {
		
		// 번개크루 step별 html, js 변화
		switch(number) {
		
		// 번개크루 1단계 
		case "01":
			loginJoinChangeDiv(number);
			loginJoinUtil.step01.init();
			break;
		// 번개크루 2단계 	
		case "02":
			loginJoinChangeDiv(number);
			loginJoinUtil.step02.init();
			break;
		// 번개크루 3단계 		
		case "03":
			loginJoinChangeDiv(number);
			loginJoinUtil.step03.init();
			break;
		}
		
	}
	
	let loginJoinUtil = {
		
		// 번개크루모집 step01
		step01 : {
			
			info : new Object()
			, init : () => {
				
				loginJoinUtil.step01.event();
				
			}
			, event : () => {
				
				$('.btn_pop_close').off('click').on('click', () => {
					console.log('닫기');
					$('#loginJoinStep01').removeClass('layer_open');
				});
				
				$('.btn_pop_previous').off('click').on('click', () => {
					console.log('이전');
					$('#loginJoinStep01').removeClass('layer_open');
				});
				
				
				// 데이터 넘기는거나 이벤트처리는 여기 실행하시면 됩니다.
				
			}
			
		},
		
		// 번개크루모집 step02
		step02 : {
			info : new Object()
			, init : () => {
				
				loginJoinUtil.step02.event();
				
			}
			, event : () => {
				
				$('.btn_pop_close').off('click').on('click', () => {
					console.log('닫기');
					$('#loginJoinStep02').removeClass('layer_open');
				});
				
				$('.btn_pop_previous').off('click').on('click', () => {
					console.log('이전');
					loginJoinStep("01");
				});
				
				
			}
		}
		
	
	}
	