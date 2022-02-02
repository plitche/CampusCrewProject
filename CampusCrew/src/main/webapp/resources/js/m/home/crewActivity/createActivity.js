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
					
					$('#' + that.StepThreeImg).on('change', function() {
						let thisImgID = $(this).prop('id');
						let lastIndex = thisImgID.charAt(thisImgID.length-1);
						let nextIndex = parseInt(lastIndex)+1;
						
						if (!$('#createActivityImg' + nextIndex).length) {
							let html = `
								<label for="`+ 'createActivityImg'+nextIndex +`">+</label>
								<input type="file" id="`+ 'createActivityImg'+nextIndex +`" class="createActivityImg" name="`+ 'createActivityImg'+nextIndex +`" style="display: none;">
							`;
							
							$('#content div:nth-child(1)').append(html);
							$('label[for="'+thisImgID+'"]').css('display', 'none');
							
							that.Template.setImageFromFile(this, 'img.'+thisImgID+'');
						} else {
							alert('1111');
						}
						
						
						let goalVal = $('#createActivityStep3 textarea').val();
						
						if (goalVal != '' && $(this).val() != '') {
							$('.activity_popup_footer #activityBtnNext3').addClass('on');
						} else {
							$('.activity_popup_footer #activityBtnNext3').removeClass('on');
						}
						
						console.log(that.StepThreeImg)
						that.StepThreeImg = 'createActivityImg'+nextIndex
						console.log(that.StepThreeImg)
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
					})
				}
				
				// step 4 start
				,setFourNext : function() {
					$('#activityBtnNext4').on('click', function() {
					
						
					});
				}
				
				
				
			},
	}
	return that;
}) ();;

