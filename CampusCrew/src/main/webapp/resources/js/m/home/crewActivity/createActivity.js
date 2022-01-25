let createActivity = (function() {
	let that = {
			init : function() {
				that.Event.createStep();
			},
			
			Ajax : {
				
			},
			
			Template : {
				showCreateStpe: function(stepLevel) {
					$('.recruit_thunder_popup').removeClass('layer_open');
					$('#createActivityStep' + stepLevel).addClass('layer_open');
				}
			},
			
			Event : {
				createStep : function() {
					$('.crewRecruit_battle').click(function() {
						that.Template.showCreateStpe('01');
						$('.crewRecruit_list').hide();
					})
				}
			
				,
				
				
			},
	}
	return that;
}) ();;
