/**
 *  번개크루 js
 */

	let thunderFinalInsertData = new Object();

	let thunderInit = () => {
		$('.crewTypeContent').removeClass('on'); // step01의 label class 삭제
		$('.crewFieldContent').removeClass('on'); // step02의 label class 삭제
		$('.thunderNextBtn').removeClass('blue'); // 다음 버튼의 class 삭제
		$('input[type=radio]').attr('checked', 'false'); // radio 선택 값 checked 풀기
		// 아마 계속 추가 될것임.
	}

	let thunderPopClose = () => {
		$('.thunder_btn_pop_close').off('click').on('click', () => {
			console.log('닫기');
			msg.info('개설을 취소하면 모든 정보는 사라집니다.\n개설 취소 하시겠어요?');
			$('#alertOkayIcon').on('click', ()=> {
				thunderInit();
				$('.recruit_thunder_popup').removeClass('layer_open');
			});
		});
	}

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
				
				//thunderInit();
				thunderUtil.step01.event();
				
			}
			, event : () => {
				
				thunderPopClose();
				
				$('.btn_pop_previous').off('click').on('click', () => {
					console.log('이전');
					$('#thunderStep01').removeClass('layer_open');
				});
				
				$('input:radio[name="crewType"]').off('click').on('click', ()=> {
					let chkRadio = $('input:radio[name="crewType"]:checked');
					$('.crewTypeContent').removeClass('on');
					$('input:radio[name="crewType"]:checked').next().addClass('on');
					if (chkRadio.length == 1	) {
						$('#btnThunderNext1').addClass('blue');
					} else {
						$('#btnThunderNext1').removeClass('blue');
					}
				});
				
				// 다음 버튼 클릭시 크루유형 값을 데이터 insert
				$('#btnThunderNext1').off('click').on('click', ()=> {
					
					if ($('input:radio[name="crewType"]:checked').length == 0) {
						msg.info('크루유형을 선택해주세요.');
						return;
					}
					
					let thunderStep01Val = $('input:radio[name="crewType"]:checked').val();
					
					// 번개크루 step01 데이터 저장
					thunderFinalInsertData.crewType = thunderStep01Val
					console.log(thunderFinalInsertData);
					thunderStep("02");
					
				});
				
			}
			
		},
		
		// 번개크루모집 step02
		step02 : {
			info : new Object()
			, init : () => {
				
				//thunderInit();
				thunderUtil.step02.event();
				
			}
			, event : () => {
				
				console.log(thunderFinalInsertData.crewType);
				
				// step02 팝업이 열리면 크루유형에 맞는 분야를 보여준다.
				if ($('#thunderStep02').hasClass('layer_open') == true) {
					switch(thunderFinalInsertData.crewType) {
					// step01에서 진로탐색이면
					case "0":
						$('.thunderStep02Content').hide();
						$('#content_1').css('display', 'block');
						break;
						// step01에서 자기계발이면
					case "1":
						$('.thunderStep02Content').hide();
						$('#content_2').css('display', 'block');
						break;
						// step01에서 기타이면
					case "2":
						$('.thunderStep02Content').hide();
						$('#content_3').css('display', 'block');
						break;
					}
				}
				
				thunderPopClose();
				
				$('.btn_pop_previous').off('click').on('click', () => {
					$('.crewFieldContent').removeClass('on');
					$('input[name=crewField]').attr('checked', 'false');
					$('#btnThunderNext2').removeClass('blue');
					thunderStep("01");
				});
				
				$('input:radio[name="crewField"]').off('click').on('click', ()=> {
					let chkRadio = $('input:radio[name="crewField"]:checked');
					$('.crewFieldContent').removeClass('on');
					$('input:radio[name="crewField"]:checked').next().addClass('on');
					if (chkRadio.length == 1	) {
						$('#btnThunderNext2').addClass('blue');
					} else {
						$('#btnThunderNext2').removeClass('blue');
					}
				});
				
				$('#btnThunderNext2').off('click').on('click', ()=> {
					
					if ($('input:radio[name="crewField"]:checked').length == 0) {
						msg.info('크루분야를 선택해주세요.');
						return;
					}
					
					let thunderStep02Val = $('input:radio[name="crewField"]:checked').val();
					
					// 번개크루 step01 데이터 저장
					thunderFinalInsertData.crewField = thunderStep02Val
					console.log(thunderFinalInsertData);
					
					console.log('다음');
					thunderStep("03");
				});
				
				
				
			}
		},
		
		step03 : {
			info : new Object()
			, init : () => {
				
				//thunderInit();
				thunderUtil.step03.event();
				
			}
			, event : () => {
				
				
				
			}
			
		},
		
	
	}
	