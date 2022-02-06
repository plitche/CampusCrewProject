let createActivity = (function() {
	let that = {
			StepThreeImg : 'createActivityImg1',
			
			init : function() {
				that.Event.createStep();
				that.Event.closePopup();
				that.Event.prevBtnAction();
				
				
				that.Event.selectType();
				that.Event.stepOneNext();
				
				
				that.Event.titleSet();
				that.Event.setTwoNext();
				
				
				that.Event.setStepThreeBtn();
				that.Event.setThreeNext();

				
				that.Event.addPositionAction();
				that.Event.setFourNext();
				
				
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
			
				,setImageFromFile: function(input, expression) {
					 if (input.files && input.files[0]) {
					        var reader = new FileReader();
					        reader.onload = function (e) {
					            $(expression).attr('src', e.target.result);
					            $(expression).show();
					        }
					        reader.readAsDataURL(input.files[0]);
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
					$('#createActivityStep2 input').on('change keyup paste', function() {
						let content = $(this).val();
						
						if (content.length > 20) {
							$(this).val($(this).val().substring(0, 20));
						}
						
						$('#createActivityStep2 #titleContent span').text(content.length);
						
						if (content.length > 0) {
							$('.activity_popup_footer #activityBtnNext2').addClass('on');
							$('#crewActivityTitle').addClass('on');
						} else {
							$('.activity_popup_footer #activityBtnNext2').removeClass('on');
							$('#crewActivityTitle').removeClass('on');
						}
					})
				}
				
				,setTwoNext : function() {
					$('#activityBtnNext2').on('click', function() {
						let titleVal = $('#crewActivityTitle').val();
						
						if (titleVal == '') {
							msg.info('크루연합 제목을 작성해주세요.');
						} else {
							that.Template.showCreateStep('2', 'next');
						}
					});
				}
				
				// step 3 start
				,setStepThreeBtn : function() {
					$('#createActivityStep3 textarea').on('change keyup paste', function() {
						let content = $(this).val();
						
						if (content.length > 200) {
							$(this).val($(this).val().substring(0, 200));
						} else if (content.length == 200) {
							// $('#createActivityStep3 p ').css('color', 'red');
						}
						
						$('#createActivityStep3 #titleContent span').text(content.length);
						
						let ImgVal = $('#createActivityImg').val();
						
						if (content.length > 0) {
							$('#createActivityStep3 #titleContent').addClass('on');
							
							if (ImgVal != '') {
								$('.activity_popup_footer #activityBtnNext3').addClass('on');
							} else {
								$('.activity_popup_footer #activityBtnNext3').removeClass('on');	
							}
						} else {
							$('#createActivityStep3 #titleContent').removeClass('on');
						}
					})
					
					$('#createActivityImg').on('change', function() {						
						that.Template.setImageFromFile(this, '#previewImg');
						$('#createActivityStep3 label').addClass('on');
						$('#createActivityStep3 label').text('사 진 수 정');
						
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

						if (ImgVal == '') {
							msg.info('크루연합 사진을 업로드 해주세요.');
							return;
						}
						
						if (goalVal == '') {
							msg.info('크루연합 목표를 작성해주세요.');
							return;
						}
						
						that.Template.showCreateStep('3', 'next');
					})
				}
				
				// step 4 start
				,addPositionAction : function() {
					$('#createActivityStep4 #addNeedPosition').on('click', function() {
						let positionName = prompt('연합에 필요한 포지션을 입력하세요.');
						positionName = positionName.replace(/ /gi, '') // 공백 제거
						
						if (positionName == '' || positionName == 'undefine' || positionName == null) {
							msg.info('연합에 필요한 포지션을 정확하게 입력하세요.');
							return;
						}
						 
						let html = `
						<div>
							<p class="eachPosition">`+positionName+`</p>
							<p class="reduceBtn" onclick="createActivity.Event.plusMinusBtnAction(this);">-</p>
							<p><span class="needCount">0</span>명</p>
							<p class="addBtn" onclick="createActivity.Event.plusMinusBtnAction(this);">+</p>
						</div>
						`;
						
						$('#createActivityStep4 #needPositionList').append(html);
						
						let isCount = that.Event.isExistsCount();
						if (isCount) {
							$('#activityBtnNext4').addClass('on');
						} else {
							$('#activityBtnNext4').removeClass('on');
						}
						
					})
				}
				
				,plusMinusBtnAction : function(thisTag) {
					let current = $(thisTag).parent().find('.needCount').text();
					console.log(current);
					if ($(thisTag).hasClass('reduceBtn')) {
						if (current <= 0) {
							return;
						} else {
							$(thisTag).parent().find('.needCount').text(parseInt(current)-1);
						}
					} else if ($(thisTag).hasClass('addBtn')) {
						$(thisTag).parent().find('.needCount').text(parseInt(current)+1);
					}
					
					let isCount = that.Event.isExistsCount();
					if (isCount) {
						$('#activityBtnNext4').addClass('on');
					} else {
						$('#activityBtnNext4').removeClass('on');
					}
				}
				
				,isExistsCount : function() {
					let positionList = $('#needPositionList span');
					let isCount = false;
					
					$.each(positionList, function(index, value) {
						if (value.innerText != 0) {
							isCount = true;
							return;
						}
					})
					
					return isCount;
				}
				
				,setFourNext : function() {
					$('#activityBtnNext4').on('click', function() {
						let isCount = that.Event.isExistsCount();

						if (isCount) {
							that.Template.showCreateStep('4', 'next');
						} else {
							msg.info('연합에 필요한 포지션 및 인원을 추가해주세요.');
						}
						
					});
				}
				
				
				
			},
	}
	return that;
}) ();;

