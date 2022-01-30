let createActivity = (function() {
	let that = {
			init : function() {
				that.Event.createStep();
				that.Event.closePopup();
				
				that.Event.selectType();
				that.Event.stepOneNext();
				
				that.Event.prevBtnAction();
				that.Event.titleSet();
				that.Event.setTwoNext();
				
				that.Event.setThreeNext();
				that.Event.setStepThreeNext();
				
			},
			
			Ajax : {
				
			},
			
			Template : {
				showCreateStep: function(stepLevel, direction) {
					$('.create_activity_popup').removeClass('layer_open');
					
					if (direction == 'prev') {
						$('#createActivityStep' + (parseInt(stepLevel)-1)).addClass('layer_open');
					} else if (direction == 'next') {
						$('#createActivityStep' + (parseInt(stepLevel)+1)).addClass('layer_open');
					}
				}
			},
			
			Event : {
				createStep : function() {
					$('#crewRecruit_battle').click(function() {
						that.Template.showCreateStep('0', 'next');
					})
				}
			
				,closePopup : function() {
					$('.activity_btn_pop_close').on('click', () => {
						$('.create_activity_popup').removeClass('layer_open');
					});
				}
				
				,prevBtnAction : function() {
					$('.btn_pop_previous').on('click', () => {
						let currentStep;
						
						$.each($('.create_activity_popup'), function(index, item) {
							if ($(item).hasClass('layer_open')) {
								currentStep = index+1;
							}
						})
						 
						that.Template.showCreateStep(currentStep, 'prev');
					})
				}
				
				// stop 1 start
				,selectType : function() {
					$('.crewTypeContent').click(function() {
						if ($(this).hasClass('on')) {
							$('.crewTypeContent').removeClass('on');
						} else {
							$('.crewTypeContent').removeClass('on');
							$(this).addClass('on');
						}
						
						let count = 0;
						$('.crewTypeContent').each(function (index, item) {
							if ($(item).hasClass('on')) {
								count++;
								$('#activityBtnNext1').addClass('on');
							}
						})
						
						if (count == 0) {
							$('#activityBtnNext1').removeClass('on');
						}
						
					});
				}
				
				,stepOneNext : function() {
					$('#activityBtnNext1').click(function() {
						let count = 0;
						$('.crewTypeContent').each(function (index, item) {
							if ($(item).hasClass('on')) {
								count++;
							}
						})
						
						if (count > 0) {
							that.Template.showCreateStep('1', 'next');
						} else {
							msg.info('크루연합 유형을 선택해주세요.');
						}
					})
				}
				
				// step 2 start
				,titleSet : function() {
					$('#createActivityStep2 textarea').on('change keyup paste', function() {
						let content = $(this).val();
						
						if (content.length > 200) {
							$(this).val($(this).val().substring(0, 200));
						}
						
						$('#createActivityStep2 #titleContent span').text(content.length);
						
						if (content.length > 0) {
							$('.activity_popup_footer #activityBtnNext2').addClass('on');
						} else {
							$('.activity_popup_footer #activityBtnNext2').removeClass('on');
						}
					})
				}
				
				,setTwoNext : function() {
					$('#activityBtnNext2').on('click', function() {
						let titleVal = $('#createActivityStep2 textarea').val();
						
						if (titleVal == '') {
							msg.info('크루연합 제목을 작성해주세요.');
						} else {
							that.Template.showCreateStep('2', 'next');
						}
					})
				}
				
				// step 3 start
				,setStepThreeNext : function() {
					$('#createActivityStep3 textarea').on('change keyup paste', function() {
						let content = $(this).val();
						
						if (content.length > 200) {
							$(this).val($(this).val().substring(0, 200));
						}
						
						$('#createActivityStep3 #titleContent span').text(content.length);
						
						let ImgVal = $('#createActivityImg').val();
						
						if (content.length > 0 && ImgVal != '') {
							$('.activity_popup_footer #activityBtnNext3').addClass('on');
						} else {
							$('.activity_popup_footer #activityBtnNext3').removeClass('on');
						}
					})
					
					$('#createActivityImg').on('change', function() {
						let goalVal = $('#createActivityStep3 textarea').val();
						
						if (goalVal != '' && $(this).val() != '') {
							$('.activity_popup_footer #activityBtnNext3').addClass('on');
						} else {
							$('.activity_popup_footer #activityBtnNext3').removeClass('on');
						}
					})
				}
				
				,setThreeNext : function() {
					$('#activityBtnNext3').on('click', function() {
						let goalVal = $('#createActivityStep3 textarea').val();
						let ImgVal = $('#createActivityImg').val();
						
						if (goalVal == '') {
							msg.info('크루연합 목표를 작성해주세요..');
							return;
						}
						
						if (ImgVal == '') {
							msg.info('크루연합 사진을 업로드 해주세요.');
							return;
						}
						
						that.Template.showCreateStep('3', 'next');
			
					});
				}
				
				
				
			},
	}
	return that;
}) ();;

