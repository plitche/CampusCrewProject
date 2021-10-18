/**
 *  회원가입을 위한 js - 회원가입은 팝업 단계형태의 프로세스로 진행
 */

$(function() {
	
	var changeDiv = function(openStep) {
		$(".joinPopup").css('display', 'none');
		
		$('#joinPopupStep' + openStep).show();
	}
	
	var joinStep = function(number) {
		
		switch(number) {
		
		// 회원가입 1단계 - 연동로그인 및 간단정보 입력
		case "01": 
			changeDiv(number);
			util.step01.init();
			break;
			
		// 회원가입 2단계 - 필요정보동의 설명 
		case "02":
			changeDiv(number);
			util.step02.init();
			break;
			
		// 회원가입 3단계 - 성별, 나이, MBTI, 하루 중 여유가 되는 시간 입력
		case "03":
			changeDiv(number);
			util.step03.init();
			break;
			
		// 회원가입 4단계 - 전화번호, 주소 입력
		case "04":
			changeDiv(number);
			util.step04.init();
			break;
			
		// 자기소개 및 운영하는 블로그 및 인스타그램 링크 입력
		case "05":
			changeDiv(number);
			util.step05.init();
			break;
		}
		
	}
	
	// 회원가입 버튼을 클릭하면 첫번째 스텝을 진행된다.
	$(".join").off('click').on('click', function() {
		joinStep("01");
	});
	
	
	
	var util = {
			
		step01 : {
			
			init : function() {
				
				util.step01.event();
				
			},
			event : function() {
				
				$('#closeBtn').on('click', function() {
					$('.joinPopup').hide();
				});
				
				$('#continueBtn').off('click').on('click', function() {
					var email = $('#email').val();
					var pw = $('#pw').val();
					var age = $('#age').val();
					
					var sendObj = {
							"email":email
							,"pw":pw
							,"age":age
					};
					$.ajax({
						url :  "/resignation/join/step01"
						, type : 'post'
						, contentType : 'application/json; charset=UTF-8'
						, dataType : 'json'
						, data : JSON.stringify(sendObj)
						, success : function(data) {
							if (data.success == "Y") {
								alert("첫번째 사표수리 완료");
								// 첫번재 사표수리 완료되면 Step02이동해야한다.
							} else if (data.success == "N"){
								alert("이미 가입된 사표수리한 정보입니다.");
								$('#closeBtn').trigger('click');
							} else if (data.success == "F") {
								alert("사표수리 실패");
							}
						}
						, error : function() {
							alert('실패');
						}
					});
				});
				
			}
	
		},
		step02 : {
			
		},
		step03 : {
			
		},
		step04 : {
			
		},
		step05 : {
			
		}
		
	};
	
	
});