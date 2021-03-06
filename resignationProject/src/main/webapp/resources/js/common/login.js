/**
 *  로그인 js -  팝업 단계형태의 프로세스로 진행
 */

	
	var loginChangeDiv = function(openStep) {
		$(".loginPopup").css('display', 'none');
		
		$('#loginPopupStep' + openStep).show();
	}
	
	var loginStep = function(number) {
		
		switch(number) {
		
		// 로그인 1단계 - 연동로그인 및 로그인
		case "01": 
			loginChangeDiv(number);
			loginUtil.step01.init();
			break;
			
		// 회원가입 2단계 - 필요정보동의 설명 
		case "02":
			loginChangeDiv(number);
			loginUtil.step02.init();
			break;
			
		// 회원가입 3단계 - 성별, 나이, MBTI, 하루 중 여유가 되는 시간 입력
		case "03":
			loginChangeDiv(number);
			loginUtil.step03.init();
			break;
			
		// 회원가입 4단계 - 전화번호, 주소, 링크 입력
		case "04":
			loginChangeDiv(number);
			loginUtil.step04.init();
			break;
			
		// 회원가입 5단계 - 관심사
		case "05":
			loginChangeDiv(number);
			loginUtil.step05.init();
			break;
		}
		
	}
	
	// 회원가입 버튼을 클릭하면 첫번째 스텝을 진행된다.
	$(".login").off('click').on('click', function() {
		loginStep("01");
	});
	
	
	var loginUtil = {
			
		step01 : {
			
			info : new Object()
			, init : function() {
				
				loginUtil.step01.event();
				
			}
			, event : function() {
				
				$('#naverLogin').off('click').on('click', function() {
					
					$.ajax({
						url :  "/resignation/login/naverLogin"
						, type : 'post'
						, contentType : 'application/json; charset=UTF-8'
						, dataType : 'json'
						, success : function(data) {
							console.log(data.url);
							location.href = data.url;
						}
						, fail : function(failData) {
							console.log("네이버로그인 실패");
						}
					});
				});
				
				$('#kakaoLogin').off('click').on('click', function() {
					location.href="https://kauth.kakao.com/oauth/authorize?response_type=code&amp;encode_state=0&amp;redirect_uri=https%3A%2F%2Fsideproject.co.kr%2Foauth&amp;client_id=4522dff1bb2cfbd6ffd857aecca54928&amp;state=Lw%253D%253D%7Ckakao%7CN%7C%7C";
				});
				
				$('#closeBtn_login').on('click', function() {
					$('.loginPopup').hide();
				});
				
				$(document).on('click', '#goJoin', function() {
					$('.loginPopup').hide();
					joinStep("01");
				});
				
				$('#loginStep01NextBtn').off('click').on('click', function() {
					$('#loading').show();
					
					var email = $('#email_login').val();
					var pw = $('#pw_login').val();
					
					// 전역변수로 사용한다.
					loginUtil.step01.info = email;
					
					var sendObj = {
						"email":email
						,"pw":pw
					};
					
					$.ajax({
						
						url :  "/resignation/login/step01"
						, type : 'post'
						, contentType : 'application/json; charset=UTF-8'
						, dataType : 'json'
						, data : JSON.stringify(sendObj)
						, success : function(data) {
							// 로그인이 성공했을 시
							if (data.success == "Y") {
								msg.info('로그인되었습니다.');
								$('.alertOkayIcon').on('click', function() {
									location.href='/resignation';
								});
							// 로그인 할 수 없는 정보일때
							} else {
								msg.info('로그인 정보가 일치하지 않습니다. \n다시 확인해주세요.');
							}
						}
						, fail : function(failResult) {
							
						}
						
					});
					
				});
				
				
			}
			
		}
	
		, step02 : {
					
		}
		, step03 : {
			
		}
		, step04 : {
			
		}
		, step05 : {
			
		}
		
	};
	
	
