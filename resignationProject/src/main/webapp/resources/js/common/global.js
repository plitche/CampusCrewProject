   //===============================================================
   // Name : 공용 링크 스크립트
   // Auth : jhkim
   // Date : 2006.02.17
   //---------------------------------------------------------------

   //===============================================================
   // 3초 딜레이를 두고 URL 이동
   // strUrl : URL
   // bDelay : Delay 사용 여부(true 사용, false 미사용)
   //===============================================================
   varblnDelay= true;

   function fncTryRedirect(strUrl, bDelay)
   {
      if (bDelay == true)
      {
         if (blnDelay== true)
         {
blnDelay= false;
document.location.href = strUrl;
            setTimeout("blnDelay = true",3000);
         }
      }
      else
document.location.href = strUrl;
   }

   //===============================================================
   // SSL페이지에서 상위프레임을 이동시킬때 사용(직접 링크)
   //===============================================================
   function fncTryRedirectSetFrame(strProtocal, strHostName, strUrl, objFrame, strFrame)
   {
      if (fncGetIsHTTPS())
        {
            /*if ($.browser.msie)
             objFrame.location.href = strProtocal + "://" + strHostName + strUrl;
            else
            {*/
                var Frame = encodeURIComponent(strFrame);
                var Url = encodeURIComponent("https://" + strHostName + strUrl);
document.location.href = "https://" + strHostName + "/scripting/scriptProc?url=" + Url + "&scriptFlag="+strFrame;
            //}
        }
      else
location.href = "https://" + strHostName + strUrl;
   }

   //===============================================================
   // SSL페이지에서 상위프레임을 이동시킬때 사용(직접 링크) 자바페이지
   //===============================================================
   function fncTryRedirectSetFrameJava(strProtocal, strHostName, strUrl, objFrame, strFrame)
   {
      if (fncGetIsHTTPS())
        {
            /*if ($.browser.msie)
             objFrame.location.href = strProtocal + "://" + strHostName + strUrl;
            else
            {*/
                var Frame = encodeURIComponent(strFrame);
                var Url = encodeURIComponent("https://" + strUrl);
location.href = "https://" + strHostName + "/Pub/Inc/RedirectFrame.asp?Frame=" + strFrame + "&Url=" + Url;
            //}
        }
      else
location.href = "https://" + strUrl;
   }

   //===============================================================

   //===============================================================
   // Form의 Action이 SSL적용할 페이지에 사용
   //===============================================================
   function fncSetProtocol(strProtocol, strHotName, iFormNum, strAction)
   {
      if (strHotName == "no1.itembay.com")
      {
         //strHotName = "www.itembay.com";
         strHotName = "no1.itembay.com";
      }

      if (strHotName == "best.itembay.com")
      {
         //strHotName = "www.itembay.com";
         strHotName = "best.itembay.com";
      }

      if (strHotName == "no1.itembay.co.kr")
         strHotName = "no1.itembay.co.kr";

      if (strHotName == "best.itembay.co.kr")
         strHotName = "best.itembay.co.kr";

      if (strHotName == "biz.itembay.co.kr")
         strHotName = "biz.itembay.co.kr";

      if (strHotName == "www.itembay.kr")
         strHotName = "www.itembay.com";

      try
      {
document.forms[iFormNum].action = "https://" + strHotName  + strAction;
document.forms[iFormNum].autocomplete = "off"; // 자동완성기능 해지
      }
      catch(e)
      {
         return 0;
      }
   }
   //===============================================================
   function fncJavaDomain(){

       if(document.location.href.indexOf("stage.item") > -1){
           return "trades.itembay.com";
       }else if(document.location.href.indexOf("biz.item") > -1){
           return "tradeb.itembay.co.kr";
       }else{
          return "trade.itembay.com";
      }
   }

   //===============================================================
   // Form의 Action이 SSL적용할 페이지에 사용 (Form Name 사용)
   //===============================================================
   function fncSetFormAction(strProtocol, strHotName, strFormName, strAction)
   {
      if (strHotName == "www.itembay.kr")
         strHotName = "www.itembay.com";

      try
      {
         $("#" + strFormName).attr("action", "https://" + strHotName  + strAction);
         $("#" + strFormName).attr("autocomplete", "off");  // 자동완성기능 해지
      }
      catch(e)
      {
         return 0;
      }
   }
   //===============================================================

   //===============================================================
   // 링크로 SSL페이지를 호출할때 사용(문자열 리턴)
   //===============================================================
   function fncSetLink(strProtocol, strHotName, strAction)
   {
      var strLink = "";

      if (strHotName == "www.itembay.kr")
         strHotName = "www.itembay.com";

      try
      {
         strLink = "https://" + strHotName + strAction;
      }
      catch(e)
      {
         return 0;
      }

      return strLink;
   }
   //===============================================================

   //===============================================================
   // 링크로 SSL페이지를 호출할때 사용(직접 링크)
   //===============================================================
   function fncSetLinkUrl(strProtocol, strUrl)
   {
      var strHotName = "";
      strHotName =document.location.hostname;

document.location.href = "https://" +  strHotName + strUrl;
   }
   //===============================================================

   //===============================================================
   // 문자열에서 특정문자 치환 후 반환하는 함수
   //===============================================================
   function fncGetReplaceString(objReplaceString, strReplaceBeforeMark, strReplaceAfterMark)
   {
      for (var i=0; i < objReplaceString.length; i++)
      {
         if (objReplaceString.search(strReplaceBeforeMark) == -1)
            break;

         objReplaceString = objReplaceString.replace(strReplaceBeforeMark, strReplaceAfterMark);
      }

      return objReplaceString;
   }
   //===============================================================

   //===============================================================
   // 하루동안 팝업창 띄우지 않게 하는 함수
   //===============================================================
   function fncDisPopup(objName)
   {
      var strPopup = "";
      var obj =document.all(objName);

      if(obj.checked)
         strPopup = "1";
      else
         strPopup = "0";

      var todayDate = newDate();
      todayDate.setDate(todayDate.getDate() + 1);
document.cookie = objName + "="+strPopup+"; path=/" + "; expires=" + todayDate.toGMTString() + "; domain=" + ASPDOMAIN;
   }

   //===============================================================

   //===============================================================
   // 한달동안 팝업창 띄우지 않게 하는 함수 changeon 20.05.18
   //===============================================================
   function fncDisPopupMonth(objName)
   {
      var strPopup = "";
      var obj =document.all(objName);

      if(obj.checked)
         strPopup = "1";
      else
         strPopup = "0";

      var todayDate = newDate();
      todayDate.setDate(todayDate.getDate() + 30);
document.cookie = objName + "="+strPopup+"; path=/" + "; expires=" + todayDate.toGMTString() + "; domain=" + ASPDOMAIN;
   }

   //===============================================================

   //===============================================================
   // 하루동안 팝업창 띄우지 않게 하는 함수 yskwon 21.07.15
   //===============================================================
   function fncDisPopupDay(objName)
   {
      var strPopup = "";
      var obj =document.all(objName);

      if(obj.checked)
         strPopup = "1";
      else
         strPopup = "0";

      var todayDate = newDate();
      todayDate.setDate(todayDate.getDate() + 1);
document.cookie = objName + "="+strPopup+"; path=/" + "; expires=" + todayDate.toGMTString() + "; domain=" + ASPDOMAIN;
   }

   //===============================================================

   //===============================================================
   // 새창 띄우기
   //===============================================================
   function fncOpenWin(strUrl, intW, intH, blnPos, blnScroll)
   {
      var Win;
      var strScroll;

      if (blnPos == 0)
      {
         var strLeft = 0;   // 새창을 화면 왼쪽으로 위치하게(가로위치)
         var strTop = 0;    // 새창을 화면 위쪽으로 위치하게(세로위치)
      }
      else if (blnPos == 2)
      {
         var strLeft = (window.screen.width +500) + intW;   // 새창을 화면 가운데로 위치하게(가로위치)
         var strTop = (window.screen.height +500) + intH;   // 새창을 화면 가운데로 위치하게(세로위치)
      }
      else
      {
         var strLeft = (window.screen.width / 2) - (intW / 2);  // 새창을 화면 가운데로 위치하게(가로위치)
         var strTop = (window.screen.height / 2) - (intH / 2);  // 새창을 화면 가운데로 위치하게(세로위치)
      }

      if (blnScroll == 0)
         strScroll = 'no';
      else
         strScroll = 'yes';

      Win =window.open(strUrl, "itemBay", "width=" + intW + ", height=" + intH + ", top="+ strTop +", left="+ strLeft +", scrollbars="+ strScroll);
      Win.focus();
   }
   //===============================================================

   //===============================================================
   // 새창 띄우기(윈도우명 지정)
   //===============================================================
   function fncOpenWinName(strUrl, strName, intW, intH, blnPos, blnScroll)
   {
      var Win;
      var strScroll;

      if (blnPos == 0)
      {
         var strLeft = 0;   // 새창을 화면 왼쪽으로 위치하게(가로위치)
         var strTop = 0;    // 새창을 화면 위쪽으로 위치하게(세로위치)
      }
      else if (blnPos == 2)
      {
         var strLeft = (window.screen.width +500) + intW;   // 새창을 화면 가운데로 위치하게(가로위치)
         var strTop = (window.screen.height +500) + intH;   // 새창을 화면 가운데로 위치하게(세로위치)
      }
      else
      {
         var strLeft = (window.screen.width / 2) - (intW / 2);  // 새창을 화면 가운데로 위치하게(가로위치)
         var strTop = (window.screen.height / 2) - (intH / 2);  // 새창을 화면 가운데로 위치하게(세로위치)
      }

      if(blnScroll == 0)
         strScroll = 'no';
      else
         strScroll = 'yes';

      Win =window.open(strUrl, strName, "width=" + intW + ", height=" + intH + ", top="+ strTop +", left="+ strLeft +", scrollbars="+ strScroll);
      Win.focus();
   }
   //===============================================================

   //===============================================================
   // 새창 띄우기(폼으로 전송시 //윈도우명 지정)  Form1: 폼이름 지정
   //===============================================================
   function fncOpenFormWinName(strUrl, strName, intW, intH, blnPos, blnScroll)
   {
      var Win;
      var strScroll;
      var form =document.Form1;

      if (blnPos == 0)
      {
         var strLeft = 0;   // 새창을 화면 왼쪽으로 위치하게(가로위치)
         var strTop = 0;    // 새창을 화면 위쪽으로 위치하게(세로위치)
      }
      else if (blnPos == 2)
      {
         var strLeft = (window.screen.width +500) + intW;   // 새창을 화면 가운데로 위치하게(가로위치)
         var strTop = (window.screen.height +500) + intH;   // 새창을 화면 가운데로 위치하게(세로위치)
      }
      else
      {
         var strLeft = (window.screen.width / 2) - (intW / 2);  // 새창을 화면 가운데로 위치하게(가로위치)
         var strTop = (window.screen.height / 2) - (intH / 2);  // 새창을 화면 가운데로 위치하게(세로위치)
      }

      if (blnScroll == 0)
         strScroll = 'no';
      else
         strScroll = 'yes';

      Win =window.open("about:blank", strName, "width=" + intW + ", height=" + intH + ", top="+ strTop +", left="+ strLeft +", scrollbars="+ strScroll);

      form.target = strName ;
      form.action = strUrl ;
      form.submit();
      Win.focus();
   }
   //===============================================================

   //===============================================================
   // 컨펌문을 통해 윈도우 오픈
   //===============================================================
   function fncOpenWinWithConfirm(strMsg, strUrl, intW, intH, blnPos, blnScroll)
   {
      if (confirm(strMsg))
         fncOpenWin(strUrl, intW, intH, blnPos, blnScroll);
   }
   //===============================================================

   //===============================================================
   // 컨펌문을 통해 URL이동
   //===============================================================
   function fncRedirectWithConfirm(strMsg, strUrl)
   {
      if (confirm(strMsg))
document.location.href=strUrl;
   }

   //===============================================================
   // 경고창 후 URL이동
   //===============================================================
   function fncRedirectWithAlert(strMsg, strUrl)
   {
      alert(strMsg);
document.location.href=strUrl;
   }
   //===============================================================

   //===============================================================
   // 해당 id를 갖은 요소에 값을 세팅
   //===============================================================
   function fncSetValueById(id, val)
   {
      var strID = id;
      var strVal = val;

      if (strVal != "")
      {
         var obj =document.getElementById(id);
         obj.value = strVal;
      }
   }
   //===============================================================

   //===============================================================
   // 해당 id를 갖은 요소에 값을 리턴
   //===============================================================
   function fncGetValueById(id)
   {
      var strID = id;
      var obj =document.getElementById(id);
      return obj.value;
   }
   //===============================================================

   //===============================================================
   // 라디오버튼의 해당 id를 갖은 요소에 값을 리턴
   //===============================================================
   function fncSetRadioValueById(id, val)
   {
      if (jQuery.browser.msie)
      {
         for (var i=0;i<document.all(id).length;i++)
         {
            if (document.all(id)(i).value == val)
            {
document.all(id)(i).checked = true;
               return;
            }
         }
      }
      else
      {
        return;
      }
   }

   //===============================================================
   // 라디오버튼의 value 값을 리턴
   //===============================================================
   function fncSetRadioValue(id)
   {
      for (var i=0;i<document.all(id).length;i++)
      {
         if (document.all(id)(i).checked)
            returndocument.all(id)(i).value;
      }
   }

   //===============================================================
   // 라디오버튼의 Index 값을 리턴
   //===============================================================
   function fncGetRadioIndex(id)
   {
      for (var i=0;i<document.all(id).length;i++)
      {
         if (document.all(id)(i).checked)
            return i;
      }
   }

   // Checked 유무 리턴
   function fncRadioCheck(id)
   {
      var bState = false;

      for (var i=0;i<document.all(id).length;i++)
      {
         if (document.all(id)(i).checked)
         {
            bState = true;
            break;
         }
      }

      return bState;
   }

   //===============================================================
   // 체크박스의 전체선택, 전체해제 모듈
   // bState : true - 체크, false - 해제
   //===============================================================
   function fncCheckToggle(obj, bState)
   {
      if (typeof(obj.length) == "number")
      {
         for (var i=0;i<obj.length;i++)
            obj(i).checked = bState;
      }
      else
         obj.checked = bState;
   }
   //===============================================================

   //===============================================================
   // VB의 Trim 메소드
   //===============================================================
   function fnc_Validation_Trim(strVal)
   {
      try
      {
         // LTrim
         while (strVal.search(/^\s/) != -1)
         {
            strVal = strVal.replace(/^\s/,"");
         }
         // RTrim
         while (strVal.search(/\s$/) != -1)
         {
            strVal = strVal.replace(/\s$/,"");
         }
      }
      catch(ex)
      {
         return strVal;
      }

      return strVal;
   }
   //===============================================================

   //===============================================================
   // 해당 컨트롤에서 특정 문자열을 하일라이트
   //===============================================================
   function fnc_Validation_Select(obj, val)
   {
      if(obj.createTextRange) {
         var rang = obj.createTextRange();

         rang.findText(val);
         rang.select();
      } else {
         var startIdx = $(obj).val().indexOf(val)
            , endIdx = startIdx + val.length;

         obj.selectionStart = startIdx;
         obj.selectionEnd  = endIdx;
         obj.focus();
      }
   }
   //===============================================================

   //===============================================================
   // SELECTBOX 선택(value로 selectedIndex 리턴)
   //===============================================================
   function fncGetSelectedIndex(obj, strValue)
   {
      for (var i=0;i<obj.length;i++)
      {
         if (obj[i].value == parseInt(strValue))
            break;
      }

      return i;
   }
   //===============================================================

   //===============================================================
   // Control에 Event를 Attach 시킴
   //===============================================================
   function fncAttachEvent(objCtrlID, objEventType, objEventName)
   {
document.getElementById(objCtrlID).attachEvent(objEventType, objEventName);
   }

   //===============================================================
   // HyperLink에 언더라인 주기
   //===============================================================
   function fncSetTextDecoration(obj, bState)
   {
      if (bState)
         obj.style.textDecoration = "underline";
      else
         obj.style.textDecoration = "none";
   }
   //===============================================================

   //===============================================================
   // 날짜 포맷 변경
   //===============================================================
   function fncFormatDateTime(date, namedFormat)
   {
      var strDate = "";

      switch(namedFormat)
      {
         case 0:
         {
            var strYear = date.getYear();
            var strMonth = date.getMonth()+1;
            var strDay = date.getDate();
            var strHour = date.getHours();
            var strMinute = date.getMinutes();
            var strSecond = date.getMilliseconds();

            if (strMonth < 10) strMonth = "0" + strMonth;
            if (strDay < 10) strDay = "0" + strDay;
            if (strHour < 10) strHour = "0" + strHour;
            if (strMinute < 10) strMinute = "0" + strMinute;
            if (strSecond < 10) strSecond = "0" + strSecond;

            strDate = strYear + "-" + strMonth + "-" + strDay + " " + strHour + ":" + strMinute + ":" + strSecond;
            break;
         }
         case 1:
         {
            var strYear = newString(date.getYear());
            var strMonth = date.getMonth()+1;
            var strDay = date.getDate();
            var strHour = date.getHours();
            var strMinute = date.getMinutes();

            strYear = strYear.substring(2, 4);
            if (strMonth < 10) strMonth = "0" + strMonth;
            if (strDay < 10) strDay = "0" + strDay;
            if (strHour < 10) strHour = "0" + strHour;
            if (strMinute < 10) strMinute = "0" + strMinute;

            strDate = strYear + "/" + strMonth + "/" + strDay + " " + strHour + ":" + strMinute;
            break;
         }
      }

      return strDate;
   }
   //===============================================================

   //===============================================================
   // 쿠키 Value 값 알아오기(다중쿠키)
   //===============================================================
   function fncGetCookieValue(objCookie, objName)
   {
      var strCookie =document.cookie;
      var arrCookie = "";
      var arrCookieChild = "";
      var arrCookieLastChild = "";
      var objValue = null;

      if (strCookie.indexOf(";") > -1)
      {
         arrCookie = strCookie.split(";");

         for (var i=0;i<arrCookie.length;i++)
         {
            strCookieChild = arrCookie[i].replace(" ", "");

            if (strCookieChild.substring(0, objCookie.length + 1) == objCookie + "=")
            {
               strCookieChild = strCookieChild.substring(objCookie.length + 1, strCookieChild.length);

               if (strCookieChild.indexOf("&") > -1)
               {
                  arrCookieChild = strCookieChild.split("&");

                  for (var j=0;j<arrCookieChild.length;j++)
                  {
                     arrCookieLastChild = arrCookieChild[j].split("=");
                     if (arrCookieLastChild[0] == objName)
                        objValue = arrCookieLastChild[1];
                  }
               }
               else
               {
                  if (strCookieChild.substring(objCookie.length + 1, strCookieChild.length).indexOf("=") > -1)
                  {
                     arrCookieLastChild = strCookieChild.split("=");

                     if (arrCookieLastChild[0] == objName)
                        objValue = arrCookieLastChild[1];
                  }
               }
            }
         }
      }

      return objValue;
   }
   //===============================================================

   //===============================================================
   // 쿠키 값 수정(다중쿠키)
   //===============================================================
   function fncSetCookieValue(objCookie, objName, objValue)
   {
      var strCookie =document.cookie;
      var arrCookie = "";
      var arrCookieChild = "";
      var strBeforeCookie = "";
      var strAfterCookie = "";
      var strBeforeValue = fncGetCookieValue(objCookie, objName);
      var bCreated = false;

      if (strCookie.indexOf(";") > -1)
      {
         arrCookie = strCookie.split(";");

         for (var i=0;i<arrCookie.length;i++)
         {
            strCookieChild = arrCookie[i].replace(" ", "");

            if (strCookieChild.substring(0, objCookie.length + 1) == objCookie + "=")
            {
               strAfterCookie = strCookieChild.replace(objName + "=" + strBeforeValue, objName + "=" + objValue);
document.cookie = strAfterCookie + ";path=/;domain=" + fncGetCookieDomain();
               bCreated = true;
            }
         }
      }
   }
   //===============================================================

   //===============================================================
   // cookie에 사용할 도메인 정보 리턴
   //===============================================================
   function fncGetCookieDomain() {
        var d =document.domain.toLowerCase();
        var i = d.indexOf(".itembay");

        if (i > -1) {
            return d.substr(i, d.length - 1);
        } else {
            return d;
        }
   }

   //===============================================================
   // false 값을 리턴
   //===============================================================
   function fncGetFalse()
   {
      return false;
   }
   //===============================================================

   //===============================================================
   // 오른쪽마우스 막기
   //===============================================================
   /*
   if (document.location.hostname.toLowerCase().search(".com") > -1)
   {
      document.oncontextmenu = fncGetFalse;
   }
   */

   //===============================================================

   //===============================================================
   // HTTPS여부를 리턴
   //===============================================================
   function fncGetIsHTTPS()
   {
      if (location.href.toLowerCase().search("https://") > -1)
         return true;
      else
         return false;
   }
   //===============================================================

   //===============================================================
   // OV Version 정보를 리턴
   //===============================================================
   function fncGetOSVersion()
   {
      if (navigator.userAgent.indexOf('IRIX') != -1)
         var OpSys = "Irix";
      else if ((navigator.userAgent.indexOf('Win') != -1) && (navigator.userAgent.indexOf('98') != -1))
         var OpSys = "Windows 98";
      else if ((navigator.userAgent.indexOf('Win') != -1) && (navigator.userAgent.indexOf('95') != -1))
         var OpSys = "Windows 95";
      else if (navigator.appVersion.indexOf("16") !=-1)
         var OpSys = "Windows 3.1";
      else if (navigator.appVersion.indexOf("NT") !=-1)
         var OpSys= "Windows NT";
      else if (navigator.appVersion.indexOf("SunOS") !=-1)
         var OpSys = "SunOS";
      else if (navigator.appVersion.indexOf("Linux") !=-1)
         var OpSys = "Linux";
      else if (navigator.userAgent.indexOf('Mac') != -1)
         var OpSys = "Macintosh";
      else if (navigator.appName=="WebTV Internet Terminal")
         var OpSys="WebTV";
      else if (navigator.appVersion.indexOf("HP") !=-1)
         var OpSys="HP-UX";
      else
         var OpSys = "other";

      return OpSys;
   }

   //===============================================================
   // Browser Version 정보를 리턴
   //===============================================================
   function fncGetBrowserVersion()
   {
      if (navigator.userAgent.indexOf("AOL 5") != -1)
         return "America Online 5.0";
      else if (navigator.userAgent.indexOf("AOL 4") != -1)
         return "America Online 4.0";
      else if (navigator.userAgent.indexOf("AOL 3") != -1)
         return "America Online 3.0";
      else if (navigator.userAgent.indexOf("MSIE 7") != -1)
         return "Internet Explorer 7.0";
      else if (navigator.userAgent.indexOf("MSIE 6") != -1)
         return "Internet Explorer 6.0";
      else if (navigator.userAgent.indexOf("MSIE 5") != -1)
         return "Internet Explorer 5.0";
      else if (navigator.userAgent.indexOf("MSIE 4") != -1)
         return "Internet Explorer 4.0";
      else if (navigator.userAgent.indexOf("MSIE 3") != -1)
         return "Internet Explorer 3.0!";
      else if (navigator.userAgent.indexOf("Mozilla/5.0") != -1)
         return "Netscape 5 Beta";
      else if (navigator.userAgent.indexOf("Mozilla/4.7") != -1)
         return "Netscape 4.7";
      else if (navigator.userAgent.indexOf("Mozilla/4.61") != -1)
         return "Netscape 4.61";
      else if (navigator.userAgent.indexOf("Mozilla/4.5") != -1)
         return "Netscape 4.5";
      else if (navigator.userAgent.indexOf("Mozilla/4") != -1)
         return "Netscape 4.0";
      else if (navigator.userAgent.indexOf("Mozilla/3") != -1)
         return "Netscape 3.0";
      else if (navigator.userAgent.indexOf("Mozilla/2") != -1)
         return "Netscape 2";
      else if (navigator.userAgent.indexOf("MSIE 4.5") != -1)
         return "Microsoft Internet Explorer 4.5 for Macintosh";
      else if (navigator.appName=="WebTV Internet Terminal")
         return "WebTV Browser";
      else
         return "unKnown";
   }
   //===============================================================

   //===============================================================
   // Layer Toggle Display - 공용으로 사용
   //===============================================================
   function fncToggleLayerDisplay(strID)
   {
      var objLayer = document.getElementById(strID);

      if (objLayer.style.display != "none")
         objLayer.style.display = "none";
      else
         objLayer.style.display = "";
   }

   //===============================================================
   // 쿠키 값 설정
   //===============================================================
   function fncSetCookie( name, value, expiredays )
   {
      var todayDate = new Date();
      todayDate.setDate( todayDate.getDate() + expiredays );
      //document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"  //브라우저를 닫아도 일정기간 쿠키값을 기억합니다.
      document.cookie = name + "=" + escape( value ) + "; path=/;";  // 브라우저를 닫으면 쿠키값이 사라집니다.
   }

   //===============================================================
   // 쿠키 값 불러오기
   //===============================================================
   function fncGetCookie(name)
   {
      var nameOfCookie = name + "=";
      var x = 0;

      while (x <= document.cookie.length)
      {
         var y = (x+nameOfCookie.length);

         if (document.cookie.substring( x, y ) == nameOfCookie)
         {
            if ((endOfCookie=document.cookie.indexOf( ";", y )) == -1)
               endOfCookie = document.cookie.length;

            return unescape(document.cookie.substring(y, endOfCookie));
         }

         x = document.cookie.indexOf(" ", x) + 1;

         if ( x == 0 )
            break;
      }

      return "";
   }

   //===============================================================
   // Case 14441 : fncShowTogleLayer 수정 - 김원태
   //===============================================================
   function fncShowTogleLayer(objDiv)
   {
      var objDiv1   = document.getElementById("tblGameInfo");
      var objDiv2   = document.getElementById("spnShowButton");
      var state1 = "block";
      var state2 = "<img src='/image/sell/btn_hide.gif' border='0' onClick=\"fncShowTogleLayer('tblGameInfo');\" style='display:block; cursor:hand'>";

      if (objDiv == "tblGameInfo")
      {
         state1 = "none";
         state2 = "<img src='/image/sell/btn_show.gif' align='absmiddle' onclick=\"fncShowTogleLayer('spnShowButton');\" style='cursor:hand;'>";
      }
      else
      {
         state1 = "block";
         state2 = "<img src='/image/sell/btn_hide.gif' border='0' onClick=\"fncShowTogleLayer('tblGameInfo');\" style='display:block; cursor:hand'>";
      }

      if (objDiv1 != null)
         objDiv1.style.display = state1;

      if (objDiv2 != null)
         objDiv2.innerHTML = state2;
   }

   function fncGetStatus()
   {
      window.status = window.status;
      return false;
   }

   // Body내 이동
   function fncGoPage(strUrl)
   {
      location.href = strUrl;
   }

   document.onmouseover=fncGetStatus;
   document.onmouseout=fncGetStatus;

   //=================================================================
   // Random 코드 리턴
   //=================================================================
   function fncCreateRandomCode()
   {
      var arrString = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(",");
      var strRandom = "";

      for (var j=0; j<11; j++)
         strRandom += arrString[Math.floor(Math.random() * arrString.length)];

      return strRandom;
   }

   //===============================================================
   // 지정된 Byte수 만큼 문자열을 리턴함
   //===============================================================
   String.prototype.cut = function(len) {
      var str = this;
      var l = 0;

      for (var i=0; i<str.length; i++)
      {
         l += (str.charCodeAt(i) > 128) ? 2 : 1;
         if (l > len) return str.substring(0,i);
      }

      return str;
   };
   //===============================================================

   //===============================================================
   // 문자열의 Byte수를 리턴함
   //===============================================================
   String.prototype.bytes = function() {
      var str = this;
      var l = 0;

      for (var i=0; i<str.length; i++)
         l += (str.charCodeAt(i) > 128) ? 2 : 1;

      return l;
   };
   //===============================================================

   //===============================================================
   // XMLHTTP객체를 생성한다.
   //===============================================================
   function fncHTTPObjectInit()
   {
      var xmlhttp;

      if (xmlhttp && xmlhttp.readyState!=0)
      {
         xmlhttp.abort();
      }

      try
      {
         xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
      }
      catch(e)
      {
         try
         {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
         }
         catch(e)
         {
            xmlhttp = false;
         }
      }

      return xmlhttp;
   }
   //===============================================================

   //===============================================================
   // 설명: 날짜의 차이를 일(day)로 반환한다.
   // 파라미터: 날짜1(yyyy-mm-dd), 날짜2(yyyy-mm-dd)
   //===============================================================
   function fncDateDiff(date1, date2)
   {
      var arrDate1 = date1.split("-");
      var arrDate2 = date2.split("-");

      day1 = new Date(arrDate1[0],arrDate1[1]-1,arrDate1[2]).getTime();
      day2 = new Date(arrDate2[0],arrDate2[1]-1,arrDate2[2]).getTime();

      return ((day1-day2)/(24*60*60*1000));
   }
   //===============================================================

   //===============================================================
   // XML 객채생성
   //===============================================================
   function fncCreateRemoteDOMDoc(strPath)
   {
      var xmlDoc;
      xmlDoc = new ActiveXObject("Msxml2.DOMDocument.3.0");
      xmlDoc.async = false;
      xmlDoc.loadXML(strPath);

      return xmlDoc;
   }

   //===============================================================
   // XML 객채생성
   //===============================================================
   function fncCreateDOMDoc(strPath)
   {
      var xmlDoc;
      xmlDoc = new ActiveXObject("Msxml2.DOMDocument.3.0");
      xmlDoc.async = false;
      xmlDoc.load(strPath);

      return xmlDoc;
   }
   //===============================================================

   //===============================================================
   // XML Thread 객채 생성
   //===============================================================
   function fncCreateFreeThreadedDOMDoc(strPath)
   {
      var xslDoc;
      xslDoc = new ActiveXObject('MSXML2.FreeThreadedDOMDocument.3.0');
      xslDoc.async = false;
      xslDoc.load(strPath);
      return xslDoc;
   }
   //===============================================================

   //===============================================================
   // XSL Template 객채생성
   //===============================================================
   function fncCreateXSLTemplate(objXML, objXSL, arrParam)
   {
      var xslTemplate;
      var xslProc;

      xslTemplate = new ActiveXObject('MSXML2.XSLTemplate');
      xslTemplate.stylesheet = objXSL;

      xslProc = xslTemplate.createProcessor();
      xslProc.input = objXML;

      for (var i=0;i<arrParam.length;i++)
         xslProc.addParameter(arrParam[i][0], arrParam[i][1]); // 인자이름, 인자값

      /*
      실행하면 xslProc.output 속성에 변환 결과가 문자열로 저장된다.
      변환결과를 XML 개체로 변환 하려면 transform()메소드를 실행하기 전에 xslProc.output속성을
      XML 문서 개체로 지정하면 된다.
      */

      try
      {
         xslProc.transform;
         return xslProc.output;
      }
      catch(e)
      {
         return "";
      }
   }
   //===============================================================

   //===============================================================
   // 숫자범위를 지정 Random하게 숫자 Return (080204_김원태)
   //===============================================================
   function fncRandomIntGet(iStart, iEnd)
   {
      return Math.floor(Math.random() * (iEnd - iStart + 1)) + iStart;
   }

   //===============================================================
   // 네이버 배너를 위해 리스트날개배너의 위치 재설정 (080619_김원태)
   //===============================================================
   function fncSetWingBannerPosition(iTop, vcDivWingBannerID)
   {
      var iTopPosition;     //배너의 상단위치
      var iBodyWidth;       //창의 넓이
      var iMainTableWidth;  //메인 테이블의 넓이
      var iLeftPosition;    //창 좌측 끝과 배너와의 간격

      iMainTableHeight = document.getElementById("mainTable").height;

      iTopPosition = document.body.offsetTop + iTop; //iTop - Body 최상단과의 간격

      document.getElementById(vcDivWingBannerID).style.top = iTopPosition;

      iBodyWidth = document.body.clientWidth;
      iMainTableWidth = document.getElementById("mainTable").width;

      //창의 크기가 메인테이블보다 작거나 작을 경우 메인테이블의 위치에 고정
      if (iBodyWidth <= iMainTableWidth)
         iLeftPosition = 1000 + 10; //mainTable의 width(1000) + 간격(5) - 메인테이블의 사이즈가 변경되면 같이 변경해야 함
      else
         iLeftPosition = iBodyWidth / 2 + (iMainTableWidth / 2) + 10;

      document.getElementById(vcDivWingBannerID).style.left = iLeftPosition;
   }

   //===============================================================
   // 판매 수수료 정보 가져오기 (현재는 최대 수수료만 가져옴, 추후 필요 시 개선)
   //===============================================================
   function fncGetCommissionObj() {
      var now = new Date();
      var year = now.getFullYear();
      var month = now.getMonth() + 1;
      var day = now.getDate();

      if ((month + '').length < 2) {
         month = '0' + month;
      }

      if ((day + '').length < 2) {
         day = '0' + day;
      }

      var eventStartDate = '20200501';
      var today = year + '' + month + '' + day;
      var commissionObj = {
         'maxCommission' : {
            'moreThan' : 940000
            , 'amount' : 47000
         }
         , 'maxAccountCommission' : {
            'flag' : true
            , 'amount' : 350000
         }
      };

      // 2020년 05월 01일 부터 최대 수수료 변경
      if (today < eventStartDate) {
         commissionObj.maxCommission.moreThan = 594000;
         commissionObj.maxCommission.amount = 29700;
         commissionObj.maxAccountCommission.flag = false;
      }

      return commissionObj;
   }

   //===============================================================
   // 숫자 포맷 적용하여 리턴
   //===============================================================
   function fncNumberFormat(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   }

   // 내용의 값을 공백을 trim하기 위한것(앞/뒤)
   // 사용: String값.trim()
   String.prototype.trim = function() {
      var TRIM_PATTERN = /(^\s*)|(\s*$)/g;
      return this.replace(TRIM_PATTERN, "");
   }
