/**
 *  번개크루 js
 */

	let thunderInit = () => {
		$('.crewTypeContent').removeClass('on');
		$('.thunderNextBtn').removeClass('blue');
		$('input[type=radio]').attr('checked', 'false');
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
					var chkRadio = $('input:radio[name="crewType"]:checked');
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
					
					var chkRadioVal = $('input:radio[name="crewType"]:checked').val();

					var sendObj = {
							"crewType" : chkRadioVal
					}
					
					$.ajax({
						url :  "/campusCrew/thunder/step01"
						, type : 'post'
						, contentType : 'application/json; charset=UTF-8'
						, dataType : 'json'
						, data : JSON.stringify(sendObj)
						, success : function(data) {
							console.log(data.results);
							if (data.results == 'Y') {
								// 시퀀스 번호과 유형값만 가져온다. 
								// 시퀀스 번호는 이전으로 돌아갔을때 update 하기 위한 체크 용도로 사용하고,
								// 유형값은 step02로 갔을 때, 유형별로 보여주는 분야값들을 다르게 설정한다.
								thunderStep("02");
							} else {
								console.log('데이터 삽입 실패!');
							}
						}
						, fail : function(failData) {
							console.log("데이터 삽입 실패");
						}
					});
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
				
				thunderPopClose();
				
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
	