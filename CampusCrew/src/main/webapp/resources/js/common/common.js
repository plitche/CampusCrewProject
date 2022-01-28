/**
 * requestAjaxPOST(url, data, callback)
 * Ajax Post Submit
 *@paramurl
 *@paramdata
 *@paramcallback
*/
function requestAjaxPOST(url, data, callback){
   let ajaxPOST;
   if(ajaxPOST) clearTimeout(ajaxPOST);
   ajaxPOST = setTimeout(function(){ requestAjaxPOST_(url, data, callback); },200);
}
function requestAjaxPOST2(url, data, callback){
   let ajaxPOST2;
   if(ajaxPOST2) clearTimeout(ajaxPOST);
   ajaxPOST2 = setTimeout(function(){ requestAjaxPOST_(url, data, callback); },200);
}
function requestAjaxPOSTTxt(url, data, callback){
   let ajaxPOST;
   if(ajaxPOST) clearTimeout(ajaxPOST);
   ajaxPOST = setTimeout(function(){ requestAjaxPOSTTxt_(url, data, callback); },200);
}


function crewRecruitOpen() {
	$('.crewRecruit_list').addClass('layer_open');
	$('.crewRecruit_box').addClass('dark');
}

function crewRecruitClose() {
	$('.crewRecruit_list').removeClass('layer_open');
	$('.crewRecruit_box').removeClass('dark');
}

/**
 * requestAjaxPOST_(url, data, callback)
 * Ajax Post Submit
 * @paramurl
 * @paramdata
 * @paramcallback
*/
function requestAjaxPOST_(url, data, callback){

   $.ajax({
      type: "POST",
      url: url,
      data: $.param(data),
      async: true,
      cache: false,
      success: callback,
      dataType:"json"
   });
}
function requestAjaxPOSTTxt_(url, data, callback){

   $.ajax({
      type: "POST",
      url: url,
      data: $.param(data),
      async: true,
      cache: false,
      success: callback,
      dataType:"text"
   });
}

let msg = {
		
		// 알려드립니다 alert
		info : function(message) {
			
			// 만약 로딩창이 존재한다면 로딩창을 띄우고 0.5초 후에 alert창을 띄운다.
			if ($('#loading').css('display') === 'block') {
				
				setTimeout(function() {
					// alert창이 보이면 loading 창은 숨긴다.
					if ($('.alert_box').css('display', 'block')) {
						$('#loading').hide();
					}
					$('.alert_box').show();
					$('.alert_box').css('transition-duration', '2s');
					let alert = $('#alert_content').text(message);
					alert.html(alert.html().replace(/\n/g, '<br>'));
				}, 500);
			
			// 로딩창이 없다면 바로 alert창을 띄운다
			} else {
				
				$('.alert_box').show();
				$('.alert_box').css('transition-duration', '2s');
				let alert = $('#alert_content').text(message);
				alert.html(alert.html().replace(/\n/g, '<br>'));
				
			}
			
		}
		// 경고 alert - 아직 미작업
		, warn : function(message) {
			
		}
};
	
	

/**
 * requestFormAjaxPOST(url, data, callback)
 * Ajax Form Submit
 *@paramurl
*@paramdata
*@paramcallback
*/
function requestFormAjaxPOST(url, data, callback){
   let ajaxPOST;
   if(ajaxPOST) clearTimeout(ajaxPOST);
   ajaxPOST = setTimeout(function(){ requestAjaxFormPOST_(url, data, callback); },200);
}

function requestAjaxFormPOST_(url, data, callback){
   $.ajax({
      type: "POST",
      url: url,
      data: data,
      async: true,
      cache: false,
      success: callback,
      dataType:"json"
   });
}

function requestAjaxGET(url, data, callback){
   $.ajax({
      type: "GET",
      url: url,
      data: $.param(data),
      async: true,
      cache: false,
      success: callback,
      dataType:"json"
   });
}

/**
 * Common Script    - CommonScript.setTableRow
 */
CommonScript = {
   setTableRow: function(id, results, options, blankDataText, blankClass) {

      let tbody = $(id);
      tbody.html("");

      if (results == "" || results == undefined) {

         if (blankDataText == "" || blankDataText == undefined) {
            blankDataText = "검색된 데이터가 없습니다.";
         }

         blankClass = (blankClass == undefined) ? "nodata center" : blankClass;

         tbody.append("<tr><td class=\"" + blankClass + "\" colspan=\"" + options.length + "\">" + blankDataText + "</td></tr>");
         return;
      }

      let newRow = "";
      let newColumn = "";
      let newData = "";
      let optionAlign = "";
      let optionType = "";
      let optionTemp = "";
      let optionIsUrl = false;
      let optionClass = "";
      let optionUrlText = "";

      $.each(results, function(i, row) {

         newColumn = "";
         newData = "";

         for (let j = 0; j < options.length; j++){

            optionUrlText = "";
            optionAlign = $.trim(options[j][1]);
            optionType = $.trim(options[j][2]);
            optionTemp = $.trim(options[j][3]);
            optionIsUrl = options[j][4];
            optionClass = (options[j][5] == undefined) ? "" : $.trim(options[j][5]);
            newData = (optionType == "img") ? $.trim(options[j][0]) : row[options[j][0]];

            switch (optionType){
               case "i" :
                  newData = (newData == undefined) || newData == "" ? "0" : $.formatNumber(newData, {format:"#,##-"});
                  break;
               case "f" :
                  newData = (newData == undefined) ? "" : $.formatNumber(newData, {format:"#,###.00"});
                  break;
               case "pi" :
                  newData = (newData == undefined) ? "" : $.formatNumber(newData, {format:"#,##-"}) + "%";
                  break;
               case "pf" :
                  newData = (newData == undefined) ? "" : $.formatNumber(newData, {format:"#,##-.00"}) + "%";
                  break;
               case "c" :
                  newData = (newData == undefined || newData == "") ? "\\0" : "\\" + $.formatNumber(newData, {format:"#,##-"});
                  break;
               case "d" :
                  newData = (newData == undefined) ? "" : $.dateformat.date(newDate(newData), (optionTemp == "") ? "yyyy-MM-dd a hh:mm:ss" : optionTemp);
                  break;
               case "b" :
                  newData = (newData == undefined) ? options[j][0] : newData;
                  break;
               case "t" :
               case "img" :
               case "s" :
               case "cb" :
               default :
                  newData = $.trim(newData);
                  break;
            }

            if (optionTemp != "" && optionType != "b" && optionType != "d") {
               newData = "<span class='" + optionTemp + "'>" + newData + "</span>";
            }

            if (optionIsUrl) {
               optionUrlText = callbackUrl(i, j, row);
            }

            if (optionType == "b") {
               if (optionUrlText == "") {
                  newData = "<button class=\"bn" + optionTemp + " bn\">" + newData + "</button>";
               }
               else {
                  newData = "<button class=\"bn" + optionTemp + " bn\" onclick=\"" + optionUrlText + "\">" + newData + "</button>";
               }
            }
            else if (optionType == "img") {
               if (optionUrlText == "") {
                  newData = "<img src=\"" + newData + "\" />";
               }
               else {
                  newData = "<img onclick=\"" + optionUrlText + "\" src=\"" + newData + "\" class=\"cursor_pointer\" />";
               }
            }
            else if (optionType == "cb") {
               if (optionUrlText == "") {
                  newData = "<input type=\"checkbox\" name=\"chkList\" value=\"" + newData + "\" />";
               }
               else {
                  newData = "<input type=\"checkbox\" name=\"chkList\" onclick=\"" + optionUrlText + "\" value=\"" + newData + "\" />";
               }
            }
            else if (optionType == "t") {
               newData = callbackText(i, j, row);
            }
            else {
               if (optionUrlText != "") {
                  newData = "<a href=\"" + optionUrlText + "\">" + newData + "</a>";
               }
            }

            newColumn += "<td class='" + optionAlign + " " + optionClass + "'>" + newData + "</td>";
         }

         newRow = "<tr>" + newColumn + "</tr>";

         tbody.append(newRow);
      });
   },
    close: function() {
window.close();
    },
    reload: function() {
document.location.reload();
    },
    windowOpen: function(url, name, width, height, position, isscroll) {

        let scroll;
        let left;
        let top;

        if (position == 0) {
            left = 0;
            top = 0;
        }
        else if (position == 2) {
            left = (window.screen.width + 500) + width;
            top = (window.screen.height + 500) + height;
        }
        else {
            left = (window.screen.width / 2) - (width / 2);
            top = (window.screen.height / 2) - (height / 2);
        }

        if (isscroll) {
            scroll = 'yes';
        }
        else {
            scroll = 'no';
        }

        let win =window.open(url, name, "width=" + width + "px, height=" + height + "px, top=" + top + ", left=" + left + ", scrollbars=" + scroll + ", resizable=no, toolbar=no, menubar=no, location=no");
        win.focus();
    },
   setLinkUrl: function(protocol, url, isopener) {
      if (isopener == undefined || !isopener) {
document.location.href = "https://" +document.location.hostname + url;
      } else {
opener.location.href = "https://" +document.location.hostname + url;
      }
   },
   setLinkASPUrl: function(url, isopener) {
      if (isopener == undefined || !isopener) {
document.location.href = ASPURL +  url;
      } else {
opener.location.href = ASPURL +  url;
      }
   },
   setLinkUrlReplace: function(protocol, url, isopener) {
      if (isopener == undefined || !isopener) {
document.location.replace("https://" +document.location.hostname + url);
      } else {
opener.location.replace("https://" +document.location.hostname + url);
      }
   }
};

function callBackUrl(index, row){
   return "";
}

function callbackUrl(index, column, row){
   return "";
}

function callbackText(index, column, row){
   return "";
}

/**
 * Paging Method
 */
function goPage(v){

   $("#intTargetPage").val(v);

   if ($("#intCurrentPage").val() < $("#intTargetPage").val())
      $("#intStartSeq").val($("#endId").val());
   else
      $("#intStartSeq").val($("#startId").val());

   if ($("#intStartSeq").val() == "")
      $("#intStartSeq").val(1);

   if (callbackPage()) $("form#ibFM")[0].submit();
}

function goPageAjax(v){

   _intTargetPage = v;

   if (_intCurrentPage < _intTargetPage)
      _intStartSeq =_endId;
   else
      _intStartSeq =_startId;

   callbackPage();
}

function goPageSimple(v){

   $("#tiDirection").val(v);

   if(v == 0 || v == 3)
      $("#iCursorSeq").val($("#startId").val());
   else
      $("#iCursorSeq").val($("#endId").val());

   if ($("#iCursorSeq").val() == "")
      $("#iCursorSeq").val(1);

   if(callbackPageSimple()) $("form#ibFM")[0].submit();
}

function goPageSimpleAjax(v){

_tiDirection= v;

   if(v == 0 || v == 3)
_iCursorSeq=_startId;
   else
_iCursorSeq=_endId;

   callbackPageSimple();
}

function callbackPage(){
   return true;
}

function callbackPageSimple(){

   return true;
}

/**
 *�ㅻ뒛 �좎쭨 由ы꽩
*/
function getToday() {

   let date = newDate();

    let year   = date.getFullYear();
    let month  = date.getMonth() + 1;
    let day    = date.getDate();

    if (("" + month).length == 1) { month = "0" + month; }
    if (("" + day).length  == 1) { day  = "0" + day;  }

    return year + "" + month + "" + day;
}

function getToday2(argFlag) {
   if(typeof(argFlag) == "undefined") argFlag = "/";
   let date = newDate();

    let year   = date.getFullYear();
    let month  = date.getMonth() + 1;
    let day    = date.getDate();

    if (("" + month).length == 1) { month = "0" + month; }
    if (("" + day).length  == 1) { day  = "0" + day;  }

    return year + argFlag + month + argFlag + day;
}

/**
 *현재 시(hour)가져오기
*/
function getHour() {
   let date = newDate();
   let hour = date.getHours();
   if(hour < 10)
      hour = '0' + hour;

   return hour + '';
}

/**
 *현재 분(minute)가져오기
*/
function getMinute() {
   let date = newDate();
   let minute = date.getMinutes();
   if(minute<10)
      minute = '0' + minute;

   return minute + '';
}

/**
 *留덉�留��좎쭨 由ы꽩
*/
function getLastDay(year, month) {
   let newDay = newDate(year, month, "");
    return newDay.getDate();
}

/**
 *�앹뾽 �몄텧
*@paramurl
*@paramname
*@paramwidth
*@paramheight
*/
function popupWindow(url, name, width, height) {
	

   let top    = (screen.height / 2) - (height / 2);
   let left   = (screen.width / 2) - (width /2);

   if (name == null) {
      name = "_blank";
   }

   let popupWin =window.open(url,name,"toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=no,resizable=1,width="+width+",height="+height+",top=" + top + ",left = " + left);

   popupWin.focus();
}

function menuLinkInfo(strMenuChk){
   if(strMenuChk == "item"){
location.href = "/item/sell/findItemSellView";
   }else if (strMenuChk == "mobile"){
location.href = "/mobile/mobileMainView";
   }else if (strMenuChk == "cooperation"){
location.href = "/cooperation/cooperationMainView";
   }else if (strMenuChk == "gamePlus"){
location.href = "/gamePlus/gameplusMainView";
   }else if (strMenuChk == "event"){
location.href = "/event/eventMainView";
   }else if (strMenuChk == "help"){
location.href = "/help/helpMainView";
   }
// /item/sell/findItemSell?iGameSeq=xxxx&iGameServerSeq=xxxx
}

function logoutProc(){
    if (confirm("濡쒓렇�꾩썐 �섏떆寃좎뒿�덇퉴?")) {
      let url = "/login/logoutMngProc";
      let data = {};

      requestAjaxGET(url, data, logOutDirectPage);
      //location.href = "/member/logoutMngProc";
    }
}

function logoutProc2(){
    let url = "/login/logoutMngProc";
   let data = {};
   requestAjaxGET(url, data, logOutDirectPage);
}

function logOutDirectPage(data){
   let errCode = data.errCode;
   let msg = "�꾩씠�쒕쿋�대� �댁슜�댁＜��怨좉컼�섍퍡 媛먯궗�쒕┰�덈떎.\n��긽 怨좉컼���꾪빐 理쒖꽑���ㅽ븯��(二��꾩씠�쒕쿋�닿� �섍쿋�듬땲��";

   if(errCode == "0"){
      alert("濡쒓렇�꾩썐 �ㅽ뙣");
   }else{
      alert(msg);
   }

location.href = "/main/mainView";
}

function fncGetDepositPopup(strMenuName, strInflux, strPaymentType){
   let iPopWidth =screen.width;
    let iPopHeight =screen.height;

    if (parseInt(iPopHeight) < 900){
        if ($.browser.msie){
            if ($.browser.version > 6.0){
               let iWidth = 688;
            }else{
               let iWidth = 686;
            }
            let iHeight = 700;
        }else{
            let iWidth = 698;
            let iHeight = 720;
        }

        let objScrollbars = "yes";
    }else{
        if ($.browser.msie){
            let iWidth = 670;
            let iHeight = 725;
        } else{
            let iWidth = 670;
            let iHeight = 740;
        }

        let objScrollbars = "no";
    }

    let iLeftWidth = (iPopWidth / 2) - (iWidth / 2);
    let iTopHeight = (iPopHeight / 2) - (iHeight / 2);
    let strHost =document.location.hostname;

    /*
    if (strHost.toUpperCase() == "WWW.ITEMBAY.KR"){
       strHost = "www.itembay.com";
    }
    */
    //let url = "/mybay/mileageMng/popupAccountDepositView?cPaymentType=" + strPaymentType + "&vcInflux=ITEMBAY&menuName=ACCOUNT";
    //let url = DepositPopup.fucGetDepositLink(strMenuName) + "?cPaymentType=" + strPaymentType + "&vcInflux=" + strInflux;
    //let url = "https://" + strHost + DepositPopup.fucGetDepositLink(strMenuName) + "?cPaymentType=" + strPaymentType + "&vcInflux=" + strInflux;
    let url = "/mileageMng/popupAccountDepositView?cPaymentType=" + strPaymentType + "&vcInflux=" + strInflux + "&menuName=" + strMenuName;

    let objDepositPopup =window.open(url, "MileageCharge", "width=" + iWidth + ",height=" + iHeight + ",left=" + iLeftWidth + ",top=" + iTopHeight + ",toolbar=no, status=no, menubar=no, scrollbars=" + objScrollbars + ", resize=no, resizable=no, location=no, directories=no");

    if (objDepositPopup == null){
       alert("충전 창이 차단 되었습니다. 팝업 허용 설정을 해 주십시오.");
    }else{
       objDepositPopup.focus();
    }
}

function fncPopupResize(iW, iH)
{

window.resizeTo(iW, iH);
    //alert($(window).height() + ":" + $("body").height());
    if ($(window).height() < $("body").innerHeight())
    {
window.moveBy(0, ($("body").innerHeight() - $(window).height()) * -1);
window.resizeTo(iW, iH);
    }
    else
    {
       // 가운데 정렬
      let top_position =screen.width / 2 - iW / 2;
      let left_position =screen.height / 2 - iH / 2;

window.moveTo(top_position, left_position);
    }
}

//function fncSetLinkUrl(){

//}

function fncWindowOpen(url, name, width, height, position, isscroll) {

    let scroll;
    let left;
    let top;

    if (position == 0) {
        left = 0;
        top = 0;
    }
    else if (position == 2) {
        left = (window.screen.width + 500) + width;
        top = (window.screen.height + 500) + height;
    }
    else {
        left = (window.screen.width / 2) - (width / 2);
        top = (window.screen.height / 2) - (height / 2);
    }

    if (isscroll) {
        scroll = 'yes';
    }
    else {
        scroll = 'no';
    }

    let win =window.open(url, name, "width=" + width + ", height=" + height + ", top=" + top + ", left=" + left + ", resizable=1, scrollbars=" + scroll);
    win.focus();
}
function createComboBox(group, selectID, style, eventValue, selectName,  firstValue, selectedValue ) {
   let uri = "/comboBox/comboBoxMain" ;
   if ( selectID == undefined  ){
      selectID = "" ;
   }
   if ( style == undefined  ){
      style = "" ;
   }
   if ( eventValue == undefined  ){
      eventValue = "" ;
   }
   if ( selectName == undefined  ){
      selectName = "" ;
   }
   if ( firstValue == undefined  ){
      firstValue = "" ;
   }
   if ( selectedValue == undefined  ){
      selectedValue = "" ;
   }
   let data = {group:group ,
            selectID : selectID ,
             style : style,
             eventValue : eventValue,
             selectedName : selectedName,
             firstValue : firstValue,
             selectedValue : selectedValue};
   requestAjaxPOST(uri, data,  resultComboBoxCallBack) ;
}
function resultComboBoxCallBack(data) {
   let group = data.group;
   let selectID = data.selectID ;
   let style = data.style ;
   let selectedName = data.selectedName ;
   let firstValue = data.firstValue ;
   let selectedValue = data.selectedValue;
   let eventValue = data.eventValue;

   let code = "" ;
   let codeName = "" ;
   let selected = "" ;
   let rowNum =  0 ;
   if(data == "" ||  data.list == "" || data.list == undefined ) {
      rowNum =  0 ;
   }else {
      rowNum = data.list.length ;
   }
   let optionHtml = "" ;
   let selectHtml = "" ;

   for(let inx = 0; inx < rowNum; inx++) {
      code =  data.list[inx].code ;
      codeName = data.list[inx].codeName ;
      if( code == selectedValue) {
         selected = "selected" ;
      }else {
         selected = "" ;
      }
      optionHtml += "<option value= '"+code+"' "+selected+">"+codeName+"</option>" ;

   }
   if(selectID != "" ) {
      if (eventValue != "") {
         eventValue = "onChange='"+eventValue+"'" ;
      }
      selectHtml = "<select name = '"+selectedName+"' id = '"+selectedName+"' style= '"+style+"'  "+eventValue+"  >" ;
      if(firstValue != "" ) selectHtml += "<option value = \"\">"+firstValue+"</option>" ;
      selectHtml += optionHtml +"</select>" ;
      $("#"+selectID).html(selectHtml);
   }else {
      if(firstValue != "" ) selectHtml += "<option value = \"\">"+firstValue+"</option>"+optionHtml ;
document.write(selectHtml);
   }
}
function GetScrollHeight()
{
    return (document.compatMode == "CSS1Compat") ?document.documentElement.scrollHeight :document.body.scrollHeight;
}

function SetStartPage(objID){

     objID.style.behavior='url(#default#homepage)';
     objID.setHomePage(SERVERURL + "/shortCut/intro?strRedirectType=p");
}

function SetBookmark(){
window.external.AddFavorite(SERVERURL + "/shortCut/intro?strRedirectType=b", 'itemBay(아이템베이) 대한민국 No.1 게임전문 거래사이트');
}

function MM_swapImgRestore() { //v3.0
   let i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
   let d=document; if(d.images){ if(!d.MM_p) d.MM_p=newArray();
    let i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=newImage; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
   let p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
   if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
   for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
   if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
   let i,j=0,x,a=MM_swapImage.arguments;document.MM_sr=newArray; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

/*******************************************************************************
 *계약상담시스템 공통js
 ******************************************************************************/
//ID / CLASS 로 SHOW HIDE 효과 주기 1.
function objChangeClass(objId, objClass){
document.getElementById(objId).className = objClass;
}

//팝업창 브라우져별로 body 값 계산해서 리사이징
function PopupAutoResize() {
window.resizeTo(100, 100);
   let thisX = parseInt(document.body.scrollWidth);
   let thisY = parseInt(document.body.scrollHeight);
   let maxThisX =screen.width - 50;
   let maxThisY =screen.height - 50;
   let marginY = 0;
   //alert(thisX + "===" + thisY);
   //alert("임시 브라우저 확인 : " + navigator.userAgent);
   // 브라우저별 높이 조절.
   if (navigator.userAgent.indexOf("MSIE 6") > 0) marginY = 60;        // IE 6.x
   else if(navigator.userAgent.indexOf("MSIE 7") > 0) marginY = 80;    // IE 7.x
   else if(navigator.userAgent.indexOf("MSIE 8") > 0) marginY = 80;    // IE 7.x
   else if(navigator.userAgent.indexOf("MSIE 9") > 0) marginY = 60;    // IE 9.x
   else if(navigator.userAgent.indexOf("Firefox") > 0) marginY = 50;   // FF
   else if(navigator.userAgent.indexOf("Opera") > 0) marginY = 30;     // Opera
   else if(navigator.userAgent.indexOf("Netscape") > 0) marginY = -2;  // Netscape
   else if(navigator.userAgent.indexOf("Chrome") > 0) marginY = 20;  // Chrome
   if (thisX > maxThisX) {
window.document.body.scroll = "yes";
      thisX = maxThisX;
   }
   if (thisY > maxThisY - marginY) {
window.document.body.scroll = "yes";
      thisX += 19;
      thisY = maxThisY - marginY;
   }
window.resizeTo(thisX+10, thisY+marginY);
}

//로그인 여부 확인
//사용방법 isLoginCheck('${isLogin}','${session.MemberID}')
function isLoginCheck(isLogin,vcMemberID) {
   if(isLogin == '' || vcMemberID == '') {
      alert("로그인이 필요합니다.");
document.location.href = "/login/loginAdult?returnUrl=" + encodeURI(document.location.href);
      return false;
   }else{
      return true;
   }
}

//애드 서버 배너 노출 여부 확인
function fncAdServerBannerShow(bannerKey, renderSelector, adKoreaClose) {
   let $renderSelector = $(renderSelector);
   let htmlTag = "";

   if($renderSelector.length == 0){
      return false;
   }

   if(bannerKey == "" || bannerKey == undefined){
      return false;
   }

   if(adKoreaClose){
      return false;
   }

   $.ajax({
      type: 'get',
      async: false,
      dataType: "json",
      url: "/common/popup/getMainBackendBanner?strPopupName="+bannerKey,
      success: function(data) {

         if (data.mapdata.strStatus == "1") {

            switch(bannerKey){
               case "ItemListBottom1" :
                  htmlTag = '<iframe src="/xml/banner/frame?slotid=stw_itembaycom_24" style="width: 970px; height: 90px" scrolling="no" frameborder="0"></iframe>';
                  break;
               case "ItemListBottom2" :
                  htmlTag = '<iframe src="/xml/banner/frame?slotid=stw_itembaycom_20" width="999" height="70" scrolling="no" frameborder="0"></iframe>';
                  break;
               case "ItemListLeft1" :
                  htmlTag = '<iframe src="/xml/banner/frame?slotid=stw_itembaycom_22" style="width: 200px; height: 200px" scrolling="no" frameborder="0"></iframe>';
                  break;
               case "ItemListLeft2" :
                  htmlTag = '<iframe src="/xml/banner/frame?slotid=stw_itembaycom_23" style="width: 200px; height: 200px" scrolling="no" frameborder="0"></iframe>';
                  break;
               case "MybayStatusBottom1" :
                  htmlTag = '<iframe src="/xml/banner/frame?slotid=stw_itembaycom_21" width="728" height="90" scrolling="no" frameborder="0"></iframe>';
                  break;
               default :
                  break;
            }

            $renderSelector.html(htmlTag);
         }else{
            $renderSelector.html("");

            if($renderSelector.last().is('a')){
               $renderSelector.css({'cursor':'default'});
            }
         }
      },
      error: function(xhr, status, error) { }
   });
}

// 특정 게임에 대한 서버리스트 리턴 (비동기)
// param : {gameSeq, randomParam, success, error, complete}
function getServersByGameSeq(obj) {
   let randomParam = obj.js_ibnp_common ? obj.js_ibnp_common :Math.floor(Math.random()*1000);
   let url = "/resources/js/json/Game"+ obj.gameSeq +".js?v=" + randomParam;
   $.ajax({
      type: "GET",
      url: url,
        dataType: "json",
        async: true,
        success: function(data)
        {
           if (obj.success) {
              obj.success(data);
           }
        },
        error: function(e) {
           if (obj.error) {
              obj.error(e);
           }
        },
        complete: function(e) {
           if (obj.complete) {
              obj.complete(e);
           }
        }
    });
}

/*
 * @author yuhnam
 * @description 한번에 한 이벤트만 실행되도록 Lock을 만들어서 길을 막음.
 */
let Lock = function() {
   this.L = false;
};
// 락 상태
Lock.prototype.isLocked = function() {
   return this.L;
};
// 락 해제
Lock.prototype.free = function() {
   return this.L = false;
};
// 락 시도
Lock.prototype.tryLock = function() {
   if(this.isLocked()) {
      return false;
   } else {
      this.L = true;
      return true;
   }
};
// 클로저로 락을 생성.
Lock.withLock = function(fnc) {
   let newLock = new Lock();
   return fnc(newLock);
};

/*
 * @author yskwon, jjseo (퍼블용)
 * @description 팝업 열기,닫기 버튼 공통
 */
function globalClose(closeTarget,time,custom) {
   time === undefined ? time = 0 : time;
   if(custom) return $(closeTarget).addClass('hide')
   $(closeTarget).fadeOut(time);
};

function globalOpen(openTarget,time,custom){
   time === undefined ? time = 0 : time;
   if(custom) return $(openTarget).addClass('hide')
   $(openTarget).fadeIn(time);
};