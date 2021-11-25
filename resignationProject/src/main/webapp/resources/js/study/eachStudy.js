var study = (function() {
	var that = {
			init : function() {

				// 포지션 지원 Event
				that.Event.applyPosition();
				
				// 카카오 URL 공유 세팅
				that.Event.kakaoInit();
				
				// 마우스 오버 이벤트
				that.Event.writerMouseOver();
				
			},
			
			Ajax : {
				// 포지션 지원 ajax
				applyPositionAjax : function(postData) {
					requestAjaxPOST('/resignation/study/applyPosition', postData, function(data) {
						switch(data.iReturn) {
						case 0 : 
							msg.info('포지션 지원에 성공하셨습니다.')
							break;
						case 1 : 
							msg.info('해당 포지션은 더이상 남은 자리가 없습니다.')
							break;
						case 2 : 
							msg.info('이미 해당 스터디의 [' + data.appliedPosition + ']포지션에 신청 했었습니다. \n다시 신청 하고 싶으시면 마이페이지에서 취소뒤 다시 시도해주세요.')						
							break;
						default : 
							msg.info('오류가 발생하였습니다. 나정호씨에게 문의해주세요.')
							break;
						}
					});
				}
			},
			
			Template : {
				
			},
			
			Event :  {
				// 포지션 지원 Event
				applyPosition : function() {
					$('.positionApplyBtn').click(function() {
						var positionName = $(this).siblings('.positionTxt').text();
						var studyNum = $('#studyNum').val();

						var postData = {'iStudyNo' : studyNum, 
											   'positionName' : positionName, 
											   'applyID' : 'plitche'};
						
						that.Ajax.applyPositionAjax(postData);
					});
				},
				// 카카오톡 공유하기 btn event
				// todo 로그인 체크
				kakaoInit : function() {
					Kakao.init('7135fee1bb4bfce6c69f63b063ece987');
					$('.shareBtn').on('click', function() {
						try {
						    Kakao.Link.sendDefault({
							  objectType: 'feed',
							  content: {
							    title: '오늘의 디저트',
							    description: '아메리카노, 빵, 케익',
							    imageUrl:
							      'http://mud-kage.kakao.co.kr/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
							    link: {
							      mobileWebUrl: 'https://developers.kakao.com',
							      androidExecutionParams: 'test',
							    },
							  },
							  itemContent: {
							    profileText: 'Kakao',
							    profileImageUrl: 'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
							    titleImageUrl: 'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
							    titleImageText: 'Cheese cake',
							    titleImageCategory: 'Cake',
							    items: [
							      {
							        item: 'Cake1',
							        itemOp: '1000원',
							      },
							      {
							        item: 'Cake2',
							        itemOp: '2000원',
							      },
							      {
							        item: 'Cake3',
							        itemOp: '3000원',
							      },
							      {
							        item: 'Cake4',
							        itemOp: '4000원',
							      },
							      {
							        item: 'Cake5',
							        itemOp: '5000원',
							      },
							    ],
							    sum: '총 결제금액',
							    sumOp: '15000원',
							  },
							  social: {
							    likeCount: 10,
							    commentCount: 20,
							    sharedCount: 30,
							  },
							  buttons: [
							    {
							      title: '웹으로 이동',
							      link: {
							        mobileWebUrl: 'https://developers.kakao.com',
							      },
							    },
							    {
							      title: '앱으로 이동',
							      link: {
							        mobileWebUrl: 'https://developers.kakao.com',
							      },
							    },
							  ]
							});
						  ; window.kakaoDemoCallback && window.kakaoDemoCallback()
						} catch(e) { window.kakaoDemoException && window.kakaoDemoException(e) }
					});
				},
				
				writerMouseOver : function() {
					// 작성자 마우스 오버 이벤트
					$('.writerInfo, .writerRightBox').mouseover(function() {
						$(this).find('.infoHoverMenu').show();
					});
					
					$('.writerInfo, .writerRightBox').mouseleave(function() {
						$(this).find('.infoHoverMenu').hide();
					});
				},
				
			},
	}
	return that;
}) ();;
