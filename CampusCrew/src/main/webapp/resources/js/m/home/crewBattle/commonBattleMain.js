let IbItemAccountMain = (function($) {

	let _args;
	let _init;
	let _data;
	let _util;
	let _el;
	let _manipulateDom;
	let _eventHandle;
	let _fetch;

	_args = {
	
	}

	_data = {
		config : {
			'modelData' : null
			, 'rollingBanner' : [
				{'index' : 0, 'path' : '20211015_account_evtBanner.jpg', 'url' : '/m/evt/com/2021/0721_characterReward/characterReward', 'name' : 'reward' }
				, {'index' : 1, 'path' : 'img_account_banner03.jpg', 'url' : ''}
				, {'index' : 2, 'path' : 'img_account_banner04.jpg', 'url' : ''}
				, {'index' : 3, 'path' : 'img_account_banner05.jpg', 'url' : '/m/item/sell/itemSellList?iGameSeq=3602&iGameServerSeq=0&tiItemType=4', 'name' :'blade2' }
				, {'index' : 4, 'path' : 'img_account_banner06.jpg', 'url' : '/m/evt/com/2021/1005_odin/odin', 'name' : 'odin' }
			]
		},

	}

	_el = {
		divRollingBannerArea: () => $('#divRollingBannerArea')
	}

	_util = {
		bizSetConfig : function(modelData) {
			let returnArr = [];
			
			$.each(modelData.itemAccountGame, function() {
				returnArr[this.tiRanking] = this;
			});
			
			returnArr = returnArr.filter(Object);
			
			var returnArrLength = returnArr.length;
		}
	
		, utilSearchGameList : function(iGameSeq, iGameServerSeq, tiOptionCode) {
			let linkText = '/m/item/sell/itemSellList?iGameSeq=' + iGameSeq + '&iGameServerSeq=' + iGameServerSeq + '&tiItemType=1';
			
			// 분류전체를 선택했으면 링크에 tiOptionCode를 추가하지 않는다.
			if (tiOptionCode != -1) {
			linkText += '&vcAccountClass=' + tiOptionCode;
			}
			
			IbCommon.util.setCookieValue("HeaderMenu", "HeaderGameSeq", iGameSeq);
			IbCommon.util.setCookieValue("HeaderMenu", "HeaderServerSeq", iGameServerSeq);
			document.location.href = linkText;
		}
		
	}

	_manipulateDom = {
			bizBanner : function() {

			}
	}

	_eventHandle = function() {

		_el.divPopGameItemList().on("click", "a", function(e) {
			const $this = $(this);
			const iGameSeq = $this.data('seq');

			_data.classArr = [];

		})
	}
	
	_fetch = {
	
	}

	_init = function(modelData = {}) {
		_util.bizSetConfig(modelData);
		_manipulateDom.bizBanner();
		_manipulateDom.bizGame();
		_manipulateDom.bizGameList();
		_eventHandle();
	}
	
	return {
		init: _init
		, util: _util
	}
}(jQuery));