var study = (function() {
	var that = {
			init : function() {
				// ajax 스터디 리스트 불러오기
				that.Ajax.getStudyList();
				
				// 각 스터디 마우스 오버 이벤트
				that.Event.studyMouseOver();
				
			},
			
			Ajax : {
				// ajax 스터디 리스트 가져오기 
				getStudyList : function() {
					var url = '/resignation/study/getStudyList';
					
					$.ajax({
						url: url,
						async: false,
						type: 'GET',
						data: {},
						dataType: 'json',
						success: function(data) {
							// 템플릿 적용
							that.Template.StudyList(data);
						}
					});
					
				}
			},
			
			Template : {
				StudyList : function(list) {
					var tag = [];
					
					var studyListItems = list.studyList; // 스터디 리스트
					var listLength = studyListItems.length; // 스터디 개수
					
					if (listLength > 0) {
						$.each(studyListItems, function(i, item) {
							tag.push(`<div class="study_item_wrap">`);
							tag.push(`	<div class="icon_box">`);
							tag.push(`		<img src="https://cdn.loud.kr/prod/LOUD_IMG/designer/img-loudpick-label-s.png" alt="라벨">`);
							tag.push(`	</div>`);
							
							tag.push(`	<div class="study_item">`);
							tag.push(`		<div class="thumbnail" onclick="fnGoStudyInfo(`+item.ISTUDYNO+`)">`);
							tag.push(`			<div class="img_box">`);
							tag.push(`				<img src="https://cdn.loud.kr/prod/upload/ordersub/b_file1/thumimg2/order_sub_2851786_1_210926231452.jpg" alt="스터디이미지">`);
							tag.push(`			</div>`);
							tag.push(`			<div class="item_info">`);
							tag.push(`				<ul>`);
							tag.push(`					<li class="txt_bold">`+item.VCSUBJECT+`</li>`);
							tag.push(`					<li class="txt_medium">`+item.VCMEMBERADDRESS+`</li>`);
							tag.push(`				</ul>`);
							tag.push(`				<button class="btn_like"><i class="far fa-heart btn_like"></i></button>`);
							tag.push(`			</div>`);
							tag.push(`		</div>`);
							
							tag.push(`		<div class="item_writer_info">`);
							tag.push(`			<div class="profile">`);
							tag.push(`				<a>`);
							tag.push(`					<img src="https://cdn.loud.kr/prod/LOUD_IMG/cl/no_img.jpg" alt="memberPhoto">`);
							tag.push(`				</a>`);
							tag.push(`			</div>`);
							tag.push(`			<div class="tit">`);
							tag.push(`				<a>`+item.VCMEMBERNICNAME+`</a>`);
							tag.push(`				<p class="subject">[`+item.VCSUBJECT+`]</p>`);
							tag.push(`			</div>`);
							tag.push(`			<ul class="win_info">`);
							tag.push(`				<li class="prize">`+item.DTSTARTDATE +`~`+ item.DTENDDATE+`</li>`);
							tag.push(`				<li class="win">&nbsp; `+item.VCTIME+`</li>`);
							tag.push(`			</ul>`);
							tag.push(`		</div>`);
							tag.push(`	</div>`);
							tag.push(`</div>`);
						});
					}
					
					$('.study_list').html(tag.join(''));
					
				}
			},
			
			Event :  {
				// 각 스터디 마우스 오버 이벤트
				studyMouseOver : function() {
					$('.study_item_wrap').mouseover(function() {
						$(this).find('.item_info').show();
					});
					
					$('.study_item_wrap').mouseleave(function() {
						$(this).find('.item_info').hide();
					});	
				},
				
			},
	}
	return that;
}) ();;