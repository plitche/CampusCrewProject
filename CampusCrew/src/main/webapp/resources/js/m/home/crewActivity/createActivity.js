let createActivity = (function() {
	let that = {
			init : function() {
				that.Event.createStep();
			},
			
			Ajax : {
				
			},
			
			Template : {
				
			},
			
			Event : {
				createStep : function() {
					$('.crewRecruit_battle').click(function() {
						alert('11111111');
					})
				}
				,
				
				
			},
	}
	return that;
}) ();;
