/**
 *  회원가입을 위한 js - 회원가입은 팝업 단계형태의 프로세스로 진행
 */

	
	var joinChangeDiv = function(openStep) {
		$(".joinPopup").css('display', 'none');
		
		$('#joinPopupStep' + openStep).show();
	}
	
	var joinStep = function(number) {
		
		switch(number) {
		
		// 회원가입 1단계 - 연동로그인 및 간단정보 입력
		case "01": 
			joinChangeDiv(number);
			joinUtil.step01.init();
			break;
			
		// 회원가입 2단계 - 필요정보동의 설명 
		case "02":
			joinChangeDiv(number);
			joinUtil.step02.init();
			break;
			
		// 회원가입 3단계 - 성별, 나이, MBTI, 하루 중 여유가 되는 시간 입력
		case "03":
			joinChangeDiv(number);
			joinUtil.step03.init();
			break;
			
		// 회원가입 4단계 - 전화번호, 주소, 링크 입력
		case "04":
			joinChangeDiv(number);
			joinUtil.step04.init();
			break;
			
		// 회원가입 5단계 - 관심사
		case "05":
			joinChangeDiv(number);
			joinUtil.step05.init();
			break;
		}
		
	}
	
	// 회원가입 버튼을 클릭하면 첫번째 스텝을 진행된다.
	$(".join").off('click').on('click', function() {
		joinStep("01");
	});
	
	
	
	var joinUtil = {
			
		// 회원가입 1단계 - 연동로그인 및 간단정보 입력
		step01 : {
			// step01에서 전역으로 쓸만한 데이터 저장하는 용도
			info : new Object()
			, init : function() {
				
				joinUtil.step01.event();
				
			}
			, event : function() {
				
				$('#naverJoin').off('click').on('click', function() {
					location.href = "https://nid.naver.com/oauth2.0/authorize?response_type=code&amp;svctype=0&amp;redirect_uri=https%3A%2F%2Fsideproject.co.kr%2Foauth&amp;client_id=N6RnBkbkpWeXFM90j_dk&amp;state=Lw%253D%253D%7Cnaver%7CN%7C%7C";
				});
				
				$('#kakaoJoin').off('click').on('click', function() {
					location.href="https://kauth.kakao.com/oauth/authorize?response_type=code&amp;encode_state=0&amp;redirect_uri=https%3A%2F%2Fsideproject.co.kr%2Foauth&amp;client_id=4522dff1bb2cfbd6ffd857aecca54928&amp;state=Lw%253D%253D%7Ckakao%7CN%7C%7C";
				});
				
				$('#closeBtn').on('click', function() {
					$('.joinPopup').hide();
				});
				
				var now = new Date();
				var year = now.getFullYear();
				var month = now.getMonth();
				var date = now.getDate();
				
				$('#joinYear').text(year);
				$('#joinMonth').text(month);
				$('#joinDay').text(date);
				
				$(document).on('click', '#alreadyJoin', function() {
					$('.joinPopup').hide();
					loginStep("01");
				});
				
				$('#joinStep01NextBtn').off('click').on('click', function() {
					var email = $('#email').val();
					var pw = $('#pw').val();
					var nickname = $('#nickname').val();
					
					if (email == null || email == '') {
						alert("이메일정보를 입력해주세요.");
						return;
					}
					
					if (pw == '') {
						alert("비밀번호를 입력해주세요.");
						return;
					}
					
					if (pw.length < 4) {
						alert('비밀번호 형식이 올바르지 않습니다.');
						return;
					}
					
					if (nickname == '') {
						alert('닉네임을 입력해주세요.');
						return;
					}
					
					// 전역변수로 사용한다.
					joinUtil.step01.info = email;
					
					var sendObj = {
							"email":email
							,"pw":pw
							,"nickname":nickname
					};
					$.ajax({
						url :  "/resignation/join/step01"
						, type : 'post'
						, contentType : 'application/json; charset=UTF-8'
						, dataType : 'json'
						, data : JSON.stringify(sendObj)
						, success : function(data) {
							if (data.success == "Y") {
								console.log("첫번째 사표수리 완료");
								// 첫번재 사표수리 완료되면 Step02이동해야한다.
								joinStep("02");
							} else if (data.success == "N"){
								alert("이미 사표수리한 정보입니다.");
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
		
		// 회원가입 2단계 - 필요정보동의 설명 
		step02 : {
			
			init : function() {
				joinUtil.step02.event();
			}
			, event : function() {
				$('#joinEmailInfo').text(joinUtil.step01.info);
				
				$('.joinStep02NextBtn').off('click').on('click', function() {
					joinStep('03');
				});
				
				// 로그인 버튼 클릭시 로그인 창 열어주는 이벤트 처리해야함
				
			}
			
		},
		
		// 회원가입 3단계 - 성별, 나이, MBTI, 하루 중 여유가 되는 시간 입력
		step03 : {
			
			init : function() {
				joinUtil.step03.event();
			}
			, event : function() {
				
				$('.joinStep03NextBtn').off('click').on('click', function() {
					
					var email = joinUtil.step01.info;
					var age = $('#age').val();
					var mbti = $('#mbti').val().toUpperCase(); // 대문자로 변경해서 데이터를 넘긴다.
					var possibleTime1 = $('#possibleTime1').val();
					var possibleTime2 = $('#possibleTime2').val();
					
					if (possibleTime1 == '' || possibleTime2 == '') {
						alert('여유로운 시간대를 선택해주세요.');
						return;
					}
					
					var sendObj = {
							"email":email
							,"age":age
							,"mbti":mbti
							,"possibleTime1":possibleTime1
							,"possibleTime2":possibleTime2
					};
					
					$.ajax({
						url :  "/resignation/join/step03"
						, type : 'post'
						, contentType : 'application/json; charset=UTF-8'
						, dataType : 'json'
						, data : JSON.stringify(sendObj)
						, success : function(data) {
							if (data.success == "Y") {
								console.log("step03정보 업데이트 완료");
								// step03정보 업데이트 완료되면 Step04이동해야한다.
								joinStep("04");
							} else {
								console.log("step03정보 업데이트 실패");
							}
						}
						,fail : function(failMsg) {
							alert('실패');
						}
					});
					
					
				});
				
				
			}
		},
		
		// 회원가입 4단계 - 전화번호, 주소, 링크 입력
		step04 : {
			
			init : function() {
				joinUtil.step04.event();
			}
			, event : function() {
				
				$('#previousBtn1').off('click').on('click', function() {
					joinStep("03");
				});
					
				$('.joinStep04NextBtn').off('click').on('click', function() {
					
					var myprofile = $("#myprofile")[0];
					var email = joinUtil.step01.info;
					var address = $('#address').val();
					var link1 = $('#link1').val();
					var link2 = $('#link2').val();
					
					if (myprofile.files.length === 0) {
						alert('프로필사진을 올려주세요.');
						return;
					}
					
					
					if (address == '') {
						alert('~동까지만 거주하는 위치를 입력해주세요.');
						return;
					}
					
					var form = $('#joinStep4UpdateForm')[0];
					var formData = new FormData(form);
					formData.append("email", email);
					
					$.ajax({
						url :  "/resignation/join/step04"
						, enctype: 'multipart/form-data'
						, type : 'post'
						, contentType : false
						, processData : false
						, dataType : 'json'
						, data : formData
						, success : function(dataResult) {
							console.log(dataResult.result);
							console.log('성공');
							if (dataResult.result == "Y") {
								console.log("step04정보 업데이트 완료");
								// step04정보 업데이트 완료되면 Step05로 이동해야한다.
								joinStep("05");
							} else if (dataResult.result == "N"){
								console.log("step04정보 업데이트 실패");
							}
						}
						,fail : function(failMsg) {
							alert('실패');
						}
					});
					
					
				});
			}
				
		},
		step05 : {
			init : function() {
				joinUtil.step05.event();
			}
			, event : function() {
				
				$('#previousBtn2').off('click').on('click', function() {
					joinStep("04");
				});
				
				var tagCount = 0;
				// ID를 가진 input를 가지고 있는 곳에서 키를 누를경우
				$('.tagInput').off('keydown').on('keydown', function(key) {
					// enter 키를 눌렀다면
					if (key.keyCode == 13) {
						
						tagCount++;
						
						//tagCount = $('#tags > li').length + 1; // enter 누를때마다 tag 개수 파악한다.
						//console.log(tagCount);
						$('#tags').append('<li class="tag' +tagCount +'"></li>');
						$('.tag' + tagCount).append('<span class="tag-title">' + $('.tagInput').val() + '</span>');
						$('.tag' + tagCount).append('<span class="tag-close-icon">X</span>')
						$('.tagInput').val('');
						// 만약 태그의 갯수가 5개이면 입력창을 삭제시켜 입력하지 못하게 한다.
						if ($('#tags > li').length == 5) {
							$('.tagInput').hide();
						} 
					}
				});
				
				
				$(document).on('click', '.tag-close-icon', function(){
					$(this).parent('li').remove();
					if ($('#tags > li').length != 5) {
						$('.tagInput').show();
					} 
				});
				
				// 완료 버튼 클릭 시 데이터를 보내 저장한
				$('.joinStep05NextBtn').off('click').on('click', function() {
					
					// 관심태그 정보를 담는다
					var tagArray = new Array();
					var tagLength = $('#tags > li').length;
					for (var i = 0; i < tagLength; i++) {
						tagArray.push($('#tags > li > .tag-title').eq(i).text());
					}
					
					console.log(tagArray);
					console.log(tagArray[0]);
					console.log(tagArray[1]);
					console.log(tagArray[2]);
					console.log(tagArray[3]);
					console.log(tagArray[4]);
					
					var introduce = $('#introduce').val();
					console.log(introduce);
					var email = joinUtil.step01.info;
					
					var sendObj = {
						"email":email,
						"introduce":introduce,
						"field1":tagArray[0] == undefined ? "" : tagArray[0],
						"field2":tagArray[1] == undefined ? "" : tagArray[1],
						"field3":tagArray[2] == undefined ? "" : tagArray[2],
						"field4":tagArray[3] == undefined ? "" : tagArray[3],
						"field5":tagArray[4] == undefined ? "" : tagArray[4]
					};
					
					
					console.log(sendObj);
					
					$.ajax({
						url :  "/resignation/join/step05"
						, type : 'post'
						, contentType : 'application/json; charset=UTF-8'
						, dataType : 'json'
						, data : JSON.stringify(sendObj)
						, success : function(data) {
							if (data.success == 'Y') {
								alert('사표처리가 완료되었습니다. 파트너를 만나보세요!')
								$('.joinPopup').hide();
							} else {
								alert('실패하였습니다.')
							}
						}
						, fail : function(failResult) {
							
						}
					
					});
					
				});
				
				
			}
			
		}
		
	};
	
	
