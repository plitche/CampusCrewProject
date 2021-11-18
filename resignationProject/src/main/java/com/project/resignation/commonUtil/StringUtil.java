package com.project.resignation.commonUtil;

import java.io.BufferedReader;
import java.io.UnsupportedEncodingException;
import java.net.InetAddress;
import java.net.URLEncoder;
import java.net.UnknownHostException;
import java.security.MessageDigest;
import java.sql.Clob;
import java.text.NumberFormat;
import java.text.StringCharacterIterator;
import java.util.Arrays;
import java.util.Collections;
import java.util.Random;
import java.util.Vector;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;

import org.springframework.util.StringUtils;

/**
 * 1. FileName	:	StringUtil.java
 *
 */
public class StringUtil extends StringUtils {

	//spring framework 의 StringUtils 클래스에 정의된 기능들을 기본적으로 사용하고.. 이외의 기능만 추가한다.
	
	/**
	 * 
	 * <PRE>
	 * 1. MethodName	:	isNull
	 * 2. Comment		:	Null 여부
	 * </PRE>
	 *
	 *	@param value
	 *	@return
	 */
	public static boolean isNull(Object value) {
		
		if(value == null) return true;
		
		return false;
	}
	public static boolean isEmpty(String str) {
		boolean result = false ;
		result = hasLength(str) ;
		if( result == true && !str.equals("null") ) return false ;
		else return true ;
	}
	/**
	 * <PRE>
	 * 1. MethodName	:	isNotNull
	 * 2. Comment		:	Not Null 여부
	 * </PRE>
	 *
	 *	@param value
	 *	@return
	 */
	public static boolean isNotNull(Object value) {
		
		if(value == null) return false;
		
		return true;
	}
	
	/**
	 * <PRE>
	 * 1. MethodName	:	isArray
	 * 2. Comment		:	Array 여부
	 * </PRE>
	 *
	 *	@param value
	 *	@return
	 */
	public  static boolean isArray(Object value) {
		
		if(isNotNull(value) && value.getClass().isArray()) return true;		
		
		return false;
	}
	
	/**
	 * <PRE>
	 * 1. MethodName	:	nvl
	 * 2. Comment		:	nvl 처리
	 * </PRE>
	 *
	 *	@param src
	 *	@param s
	 *	@return
	 */
	public static String nvl(String src, String s) {
        
		if(src == null || src.length() < 1)
        	return s;
        else
			return src.trim();
	}
	
	
	/**
	 * <PRE>
	 * 1. MethodName	:	nvl
	 * 2. Comment		:	nvl 처리
	 * </PRE>
	 *
	 *	@param src
	 *	@param s
	 *	@return
	 */
	public static int nvl(String src, int s) {
        
		if(!hasLength(src) )
        	return s;
        else
			return Integer.parseInt(src) ;
	}
	
	/**
	 * <PRE>
	 * 1. MethodName	:	nvl
	 * 2. Comment		:	nvl 처리
	 * </PRE>
	 *
	 *	@param obj
	 *	@param s
	 *	@return
	 */
	public static String nvl(Object obj, String s) {
		
		if (obj == null || obj.toString().equals("null")) {
            return s;
        }

        return obj.toString();        
		
	}
	
	/**
	 * <PRE>
	 * 1. MethodName	:	toKorean
	 * 2. Comment		:	ksc5601 변환
	 * </PRE>
	 *
	 *	@param s
	 *	@return
	 */
	public static String toKorean(String s) {
		if (s == null)
			return s;
		try {
			return new String(s.getBytes("8859_1"), "ksc5601");
		} catch(Exception exception) {
			return s;
		}
	}
	
	/**
	 * <PRE>
	 * 1. MethodName	:	toEnglish
	 * 2. Comment		:	8859_1 변환
	 * </PRE>
	 *
	 *	@param s
	 *	@return
	 */
	public static String toEnglish(String s) {
		if (s == null)
			return s;
		try {
			return new String(s.getBytes("ksc5601"), "8859_1");
		} catch(Exception exception) {
			return s;
		}
	}
	
    /**
     * 문자열을 특정 문자열 만큼 잘라주고 뒤에  'tail' 을 붙여준다.
     * @param str
     * @param cut
     * @param tail
     * @return
     */
	public static String cropByte(String str, int cut, String tail) {
        if (str == null) {
            return    "";
        }
        if ( str.length() <= cut ) return str;
       // if ( cut < 3 ) return str.substring(0, 2);

		StringCharacterIterator iter = new StringCharacterIterator(str);
        int check = 0;
		int type = Character.getType(iter.last());
		if(type == Character.OTHER_SYMBOL) 
		  cut --;
		else check++;
			
		if(check < 1){
		    // 재검사
			iter.setText(str.substring(0,cut));
			type = Character.getType(iter.last()); 
			if(type == Character.OTHER_SYMBOL)
			  cut += 2;
		}
		 
        // 문자를 다시 잘라 리턴
	    return str.substring(0,cut)+tail ;
	}
	
	/**
	 * <PRE>
	 * 1. MethodName	:	subStringLR
	 * 2. Comment		:	Left, Right 문자열 자르기
	 * </PRE>
	 *
	 *	@param str
	 *	@param totalCnt
	 *	@param cut
	 *	@param lrSplit
	 *	@return
	 */
	public static String subStringLR(String str, int totalCnt, int cut, String lrSplit) {
		if (lrSplit.equals("R")) {
			return str.substring(0,(totalCnt - cut));
		}else {
			return str.substring(cut, totalCnt);
		}
	}	
	
	/**
	 * 문자열을 Form의 Input Text에 삽입할때 문자 변환
	 * @param str
	 * @return
	 */
    public static String	htmlTextConvert (String str) {
		if (str == null || str.equals("")) {
			return	"";
		}
		else {
			char	schr1			=	'\'';
			char	schr2			=	'\"';
			char	schr3			=	'<';
			char	schr4			=	'>';
			char	schr5			=	'&';
			char	schr6			=	'(';
			char	schr7			=	')';
			
			StringBuffer	sb		=	new StringBuffer(str);
			int		idx_str			=	0;
			int		edx_str			=	0;

			while (idx_str >= 0) {
				idx_str				=	str.indexOf(schr1, edx_str);
				if (idx_str < 0) {
					break;
				}
				str					=	sb.replace(idx_str, idx_str+1, "&#39;").toString();
				edx_str				=	idx_str + 5;
			}

			sb						=	new StringBuffer(str);
			idx_str					=	0;
			edx_str					=	0;
			while (idx_str >= 0) {
				idx_str				=	str.indexOf(schr2, edx_str);
				if (idx_str < 0) {
					break;
				}
				str					=	sb.replace(idx_str, idx_str+1, "&quot;").toString();
				edx_str				=	idx_str + 6;
			}
			
			sb						=	new StringBuffer(str);
			idx_str					=	0;
			edx_str					=	0;
			while (idx_str >= 0) {
				idx_str				=	str.indexOf(schr3, edx_str);
				if (idx_str < 0) {
					break;
				}
				str					=	sb.replace(idx_str, idx_str+1, "&lt;").toString();
				edx_str				=	idx_str + 4;
			}
			sb						=	new StringBuffer(str);
			idx_str					=	0;
			edx_str					=	0;
			while (idx_str >= 0) {
				idx_str				=	str.indexOf(schr4, edx_str);
				if (idx_str < 0) {
					break;
				}
				str					=	sb.replace(idx_str, idx_str+1, "&gt;").toString();
				edx_str				=	idx_str + 4;
			}
			
			sb						=	new StringBuffer(str);
			idx_str					=	0;
			edx_str					=	0;
			while (idx_str >= 0) {
				idx_str				=	str.indexOf(schr5, edx_str);
				if (idx_str < 0) {
					break;
				}
				str					=	sb.replace(idx_str, idx_str+1, "&#38;").toString();
				edx_str				=	idx_str + 4;
			}
			sb						=	new StringBuffer(str);
			idx_str					=	0;
			edx_str					=	0;
			while (idx_str >= 0) {
				idx_str				=	str.indexOf(schr6, edx_str);
				if (idx_str < 0) {
					break;
				}
				str					=	sb.replace(idx_str, idx_str+1, "&#40;").toString();
				edx_str				=	idx_str + 4;
			}	
			sb						=	new StringBuffer(str);
			idx_str					=	0;
			edx_str					=	0;
			while (idx_str >= 0) {
				idx_str				=	str.indexOf(schr7, edx_str);
				if (idx_str < 0) {
					break;
				}
				str					=	sb.replace(idx_str, idx_str+1, "&#41;").toString();
				edx_str				=	idx_str + 4;
			}				
			return	str;
		}
	}
    /**
	 * 문자열을 Form의 Input Text에 삽입할때 문자 변환
	 * @param str
	 * @return
	 */
    public static String	getInputText (String str) {
		if (str == null || str.equals("")) {
			return	"";
		}else {
			char	schr1			=	'\'';
			char	schr2			=	'\"';
			StringBuffer	sb		=	new StringBuffer(str);
			int		idx_str			=	0;
			int		edx_str			=	0;

			while (idx_str >= 0) {
				idx_str				=	str.indexOf(schr1, edx_str);
				if (idx_str < 0) {
					break;
				}
				str					=	sb.replace(idx_str, idx_str+1, "&#39;").toString();
				edx_str				=	idx_str + 5;
			}

			sb						=	new StringBuffer(str);
			idx_str					=	0;
			edx_str					=	0;
			while (idx_str >= 0) {
				idx_str				=	str.indexOf(schr2, edx_str);
				if (idx_str < 0) {
					break;
				}
				str					=	sb.replace(idx_str, idx_str+1, "&quot;").toString();
				edx_str				=	idx_str + 6;
			}
		

			return	str;
		}
	}	
	/**
	 * 
	 * <PRE>
	 * 1. MethodName	:	trim
	 * 2. Comment		:	널포인트 방지 공백제거
	 * </PRE>
	 *
	 *	@param s
	 *	@return
	 */
	public static String trim(String s) {
		if( hasLength(s)) {
			return s.trim() ;
		}else {
			return "";
		}
	}
	
	public static boolean isNumber(String s ) {
		boolean result = true ;
		try {
			Integer.parseInt(s) ;
		}catch(NumberFormatException e) {
			result = false ;
		}
		
		return result ;
	}
	/**
	 * <PRE>
	 * 1. MethodName	:	fncIsNumberic
	 * 2. Comment		:	숫자형식인 경우 숫자, 아닌경우 0
	 * </PRE>
	 *
	 * @param s
	 * @return
	 */
	public static int fncIsNumberic(String s){
		int result = 0 ;
		try {
			result = Integer.parseInt(s) ;
		}catch(NumberFormatException e) {
			result = 0 ;
		}		
		return result ;		
	}
	/**
	 * 천단위 콤마 찍힌 숫자를 리턴한다.
	 * @param str
	 * @return
	 */
	public static String getMoneyType(int str)  { 
		NumberFormat nf = NumberFormat.getNumberInstance(); 
		String result = nf.format(str); 
		return result; 
	}
	/**
	 * 천단위 콤마 찍힌 숫자를 리턴한다.
	 * @param str
	 * @return
	 */
	public static String getMoneyType(long str)  { 
		NumberFormat nf = NumberFormat.getNumberInstance(); 
		String result = nf.format(str); 
		return result; 
	}
	
	public static String getMoneyType(double str)  { 
		NumberFormat nf = NumberFormat.getNumberInstance(); 
		String result = nf.format(str); 
		return result; 
	}

	public static String getMoneyType(String str) { 
		NumberFormat nf = NumberFormat.getNumberInstance(); 
		String result = nf.format(nvl(str, 0)); 
		return result; 
	}	
	
	/**
	 * 천단위 콤마 찍힌 숫자를 리턴한다.
	 * @param str
	 * @return
	 */
	public static String getKoreanCurrencyType(long str)  { 
		NumberFormat nf = NumberFormat.getNumberInstance(); 
		String result = "\\"+nf.format(str); 
		return result; 
	}
	
	public static String getCashReceiptType( int cashReceiptType ) {
		String result = "" ;
		switch (cashReceiptType) {
			case 0 :
				result = "개인 소득공제용" ;
				break ;
			case 1 :
				result = "사업자 지출증빙용" ;
				break;
			case 2 :
				result = "미신청";
				break;
			default :
				result = "" ;
		}
		
		return result ;
	}
	
	//휴대폰 인증번호 생성
	public static String authNumberSMS() {
		  Random rand = new Random(System.currentTimeMillis()); // seed값을 배정하여 생성
		  String result = "" ;
	      int temp = Math.abs(rand.nextInt(899999)+100000) ;
	      result =temp + "" ;
	      return result  ;
	}
	
	/**
	 * 객체 NULL 검사 후 String형으로 반환
	 * @param o
	 * @return
	 */
	public static String objectIsNullByString(Object o) {
		return (o == null || o.toString().trim().equals("")) ? "" : o.toString().trim();
	}
		
	/**
	 * 객체 NULL 검사 후 int형으로 반환
	 * @param o 
	 * @param iniValue
	 * @return
	 */
	public static int objectIsNullByInt(Object o, int iniValue) {
		return (o == null || o.toString().trim().equals("")) ? iniValue : Integer.parseInt(o.toString().trim());
	}
	
	/**
	 * 객체 NULL 검사 후 long형으로 반환
	 * @param o 
	 * @param iniValue
	 * @return
	 */
	public static long objectIsNullByLong(Object o, long iniValue) {
		return (o == null || o.toString().trim().equals("")) ? iniValue :  Long.parseLong(o.toString().trim());
	}
	
	/**
	 * 객체 NULL 검사 후 byte형으로 반환
	 * @param o 
	 * @param iniValue
	 * @return
	 */
	public static byte objectIsNullByByte(Object o, byte iniValue) {
		return (o == null || o.toString().trim().equals("")) ? iniValue : Byte.parseByte(o.toString().trim());
	}	
	
	/**
	 * 객체 NULL 검사 후 boolean형으로 반환
	 * @param o
	 * @return
	 * Object가 Null이거나 공백이면 True 반환
	 */
	public static boolean objectIsNullByboolean(Object o) {
					
		if (o == null || o.toString().trim().equals(""))
			return true;
		else
			return false;		
	}
	
	/**
	 * 객체 NULL 검사 후 boolean형으로 반환
	 * @param o
	 * @return
	 * Object가 Null이거나 0이면 false 반환 그외 true
	 */
	public static boolean objectIsNullByBoolean(Object o) {
	
		if (o == null || o.toString().trim().equals("")){
			return false;
		}else if(o.toString().equals("1")){
			return true;
		}else if(o.toString().equals("true")){
			return true;
		}else{
			return false;
		}
	}
	
	/**
	 * 객체 NULL 검사 후 boolean형으로 반환
	 * @param
	 * @return
	 * 1.String 이 Null이거나 공백이면 false 반환  2.String 이 0 또는 false 이면 false, 1 또는 true 이면 true 반환
	 */
	public static boolean StringToboolean(String str) {
		
		if (str == null || str.trim().equals(""))
			return false;
		else{
			if(str.toString().toLowerCase().equals("true") || str.toLowerCase().equals("1")){
				return true;
			}else if(str.toString().toLowerCase().equals("false") || str.toLowerCase().equals("0")){
				return false;
			}	
			return false;
		}
	}
	
	public static String[] split(String str,char x){
		Vector<String> v		= new Vector<String>();
		String str1   = new String();
		for(int i = 0;i<str.length();i++){
			if(str.charAt(i) == x){
				v.add(str1);
				str1  = new String();
			}else{
				str1  += str.charAt(i);
			}
		}
		
		v.add(str1);
		String array[];
		array  = new String[v.size()];
		for(int i=0;i<array.length;i++){
			array[i]  = new String((String)v.elementAt(i));
		}
		return array;
	}
	
	public static String weekOfKorean (int dayOfWeek) {
		String result = "" ;
		switch (dayOfWeek) {
			case 1 :
				result = "<font color=red>일</font>";
				break;
			case 2 :
				result = "월";
				break;
			case 3 :
				result = "화";
				break;
			case 4 :
				result = "수";
				break;
			case 5 :
				result = "목";
				break;
			case 6 :
				result = "금";
				break;
			case 7 :
				result="<font color=blue>토</font>";
				break;
			default :
				result = "?";
							
		}
		return result ;
	}
	
	public static String getFileSize(int size) {
		String vcUnits = " B" ;
		int adjSize = 0 ;
		if( size >= 1024 ) {
			
			if( size < 1048576 ) {
				vcUnits = " KB" ;
				adjSize =   ( ( size/1024) * 10 ) /10  ; 
			}else {
				vcUnits = " MB" ;
				adjSize =   ( ( size/1048576) * 10 ) /10  ;
			}
		}
		
		return adjSize + vcUnits ;
	}

	/**
	 * <PRE>
	 * 1. MethodName	:	getServerIP
	 * 2. Comment		:	Server IP 
	 * </PRE>
	 *
	 *	@return
	 */
	public static String getServerIP(){
		String result = "";
		InetAddress inet;
		
		try {
			inet = InetAddress.getLocalHost();
			result = inet.getHostAddress();
		} catch (UnknownHostException e) {
			e.printStackTrace();
		}
		
		return result;
	}
	
	/**
	 * <PRE>
	 * 1. MethodName	:	getClientIP
	 * 2. Comment		:	Client IP
	 * </PRE>
	 *
	 *	@param request
	 *	@return
	 */
	public static String getClientIP(HttpServletRequest request) {
		String strClientIp = request.getHeader("HTTP_X_FORWARDED_FOR");

		if (strClientIp == null) {
			strClientIp = request.getRemoteAddr();
		}
		
		return strClientIp;
	}
	
	/**
	 * 텍스트 Replace
	 * @param s
	 * @return
	 */
	public static String getContentReplace(String s){
		return (s.length() > 0 ) ? s.replaceAll("(\r\n|\r|\n|\n\r)", "<br />") : "";
	}
	
	public static String  markupUnlockTagBizClub(String src) {
		if( !StringUtil.hasLength(src)) return "" ;
		src  = getContentReplace(src) ;
		
		src = src.replaceAll("&#38;", "&") ;
		src = src.replaceAll("&#34;", "\"") ; 
		src = src.replaceAll("&#39;", "'") ;
		src = src.replaceAll("&#60;", "<") ;
		src = src.replaceAll("&#62;", ">") ;
		src = src.replaceAll("&#40;", "(") ;
		src = src.replaceAll("&#41;", ")") ;
		src = src.replaceAll("<br />", "\r\n") ;
		
		return src ;
	}
	
	public static String  markupUnlockTagBizClubByContents(String src) {
		if( !StringUtil.hasLength(src)) return "" ;
		src  = getContentReplace(src) ;
		
		src = src.replaceAll("&#60;br /&#62;", "<BR>") ;
		src = src.replaceAll("\r\n", "<BR>") ;
		return src ;
	}	

	public static String  markupUnlockTagCharacterName(String src) {
		if( !StringUtil.hasLength(src)) return "" ;
		src  = getContentReplace(src) ;
		
		//src = src.replaceAll("&#34;", "&quot;") ; 
		//src = src.replaceAll("&#39;", "&apos;") ;
		
		return src ;
	}
	
	public static String  markuplockTag(String src) {
		if( !StringUtil.hasLength(src)) return "" ;
		src  = getContentReplace(src) ;
		
		src = src.replaceAll("&", "&#38;") ;
		src = src.replaceAll("\"", "&#34;") ; 
		src = src.replaceAll("'", "&#39;") ;
		src = src.replaceAll("<", "&#60;") ;
		src = src.replaceAll(">", "&#62;") ;
		
		return src ;
	}	

	public static String escapeBackSlash(String src) {
		return src.replace("\\", "/");
	}
	
	public static String  markupUnlockTag(String src) {
		if( !StringUtil.hasLength(src)) return "" ;
		src  = getContentReplace(src) ;
		
		return src ;
	}	
	
	private static final long K = 1024;
	private static final long M = K * K;
	private static final long G = M * K;
	private static final long T = G * K;

	public static String convertToStringRepresentation(final long value){
	    final long[] dividers = new long[] { T, G, M, K, 1 };
	    final String[] units = new String[] { "TB", "GB", "MB", "KB", "B" };
	    if(value < 1)
	        throw new IllegalArgumentException("Invalid file size: " + value);
	    String result = null;
	    for(int i = 0; i < dividers.length; i++){
	        final long divider = dividers[i];
	        if(value >= divider){
	            result = format(value, divider, units[i]);
	            break;
	        }
	    }
	    return result;
	}

	private static String format(final long value,
	    final long divider,
	    final String unit){
	    final double result =
	        divider > 1 ? (double) value / (double) divider : (double) value;
	    return String.format("%.0f %s", Double.valueOf(result), unit);
	}	
	
	
	/**
	 * <PRE>
	 * 1. MethodName	:	rtrim
	 * 2. Comment		:	오릉쪽 공백 제거 (게임시세xml 생성시게임명이후 공란제거)
	 * </PRE>
	 *
	 *	@param s
	 *	@return
	 */
	public static String rTrim(String s) {

		char[] val = s.toCharArray();
		int st = 0;
		int len = s.length();
		while (st < len && val[len-1] <= ' '){
			len--;
		}
		return s.substring(0, len);
	}
	/**
	 * <PRE>
	 * 1. MethodName	:	getRewardText
	 * 2. Comment		:	200% 보상 마크 text
	 * 3. 작성자			:	minjchoi
	 * 4. 작성일			:	2020. 11. 16.
	 * </PRE>
	 */
	public static String getRewardText(int intRewardLevel) {
		String strIconText = "";

		switch (intRewardLevel) {
			case 1 :
				strIconText = "우수인증 회원";
				break;
			case 2 :
				strIconText = "200%보상 회원";
				break;
			case 0 :
			default :
				strIconText = "미인증 회원";
				break;
		}

		return strIconText;
	}
	
	public static String encodeURIComponent(String data, String encoding) {
		try {
			return URLEncoder.encode(data, encoding)
					.replaceAll("\\+", "%20")
					.replaceAll("\\%21", "!")
					.replaceAll("\\%27", "'")
					.replaceAll("\\%28", "(")
					.replaceAll("\\%29", ")")
					.replaceAll("\\%7E", "~");			
		} catch(UnsupportedEncodingException e) {
			return data;
		}
	}	
	
	public static String tempMobile(String mobile) {
		
		String[] arrMobilePhone = mobile.split("-");
		
		String strMobilePhone1 = arrMobilePhone[0];
		String strMobilePhone2 = arrMobilePhone[1];
		String strMobilePhone3 = arrMobilePhone[2];
		
		String strTempMobilePhone3 = "";
		
		if(!strMobilePhone3.equals("") && strMobilePhone3.length() == 4){
			strTempMobilePhone3 = StringUtil.subStringLR(strMobilePhone3, strMobilePhone3.length(), 2, "R") + "**";
		}else{
			strTempMobilePhone3 = strMobilePhone3;
		}
		
		String strMobilePhone = strMobilePhone1 + "-" + strMobilePhone2 + "-" + strTempMobilePhone3;
		
		return strMobilePhone;
	}
	
	/**
	 * <PRE>
	 * 1. MethodName	:	maskingMidPhoneNum
	 * 2. Comment		:	휴대폰 번호 가운데 번호 마스킹 처리
	 * </PRE>
	 *
	 *	@param vcPhone
	 *	@return
	 */
	public static String maskingMidPhoneNum(String vcPhone) {
		
		String[] arrMobilePhone = vcPhone.split("-");
		
		String strMobilePhone1 = arrMobilePhone[0];
		String strMobilePhone2 = arrMobilePhone[1];
		String strMobilePhone3 = arrMobilePhone[2];
		
		String strTempMobilePhone2 = "";
		
		if(!strMobilePhone2.equals("") && (strMobilePhone2.length() == 3 || strMobilePhone2.length() == 4)){
			strTempMobilePhone2 = StringUtil.subStringLR(strMobilePhone2, strMobilePhone2.length(), 2, "R") + "**";
		}else{
			strTempMobilePhone2 = strMobilePhone2;
		}
		
		String strMobilePhone = strMobilePhone1 + "-" + strTempMobilePhone2 + "-" + strMobilePhone3;
		
		return strMobilePhone;
	}
	
	public static String getTelecom(String telecom) {
		
		String strTelecom = "";
		if ("SKT".equals(telecom))
			strTelecom = "SKT";
		else if ("KTF".equals(telecom))
			strTelecom = "KT";
		else if ("LGT".equals(telecom))
			strTelecom = "LG U+";
		else
			strTelecom = telecom;
		
		return strTelecom;
	}
	
	//오라클 CLob형을 스트링으로 변환
	public static String getClobTOString(Clob clob)
	{
		String strClob = "";
		  StringBuffer strBuffer = new StringBuffer();
		try
		{
			if (clob == null) { return ""; }

			  BufferedReader br = new BufferedReader(clob.getCharacterStream());

			  while ((strClob = br.readLine()) != null) {
				  strBuffer.append(strClob);
			  }
			  
		}
		catch(Exception e)
		{
		}
		
		return strBuffer.toString();
	}
	
	/**
	* @Method 	: maskingMemberId
	* @Date 	: 2018. 7. 13.
	* @Discript
	* 4~5자 계정 abc***, 6자 이상 계정 abcd****
	* @return String
	*/
	public static String maskingMemberId(String vcMemberID) {
		int idLength = vcMemberID.length();
		
		switch (idLength) {
			case 4 : 
			case 5 : return vcMemberID.substring(0, 3) + "***";
			default : return vcMemberID.substring(0, 4) + "****";
		}      
	}

	public static String strCut(String szText, String szKey, int nLength, int nPrev, boolean isNotag, boolean isAdddot){

		String r_val = szText;
		int oF = 0, oL = 0, rF = 0, rL = 0;
		int nLengthPrev = 0;
		Pattern p = Pattern.compile("<(/?)([^<>]*)?>", Pattern.CASE_INSENSITIVE);  // 태그제거 패턴

		if(isNotag) {r_val = p.matcher(r_val).replaceAll("");}  // 태그 제거
		r_val = r_val.replaceAll("&amp;", "&");
		r_val = r_val.replaceAll("(!/|\r|\n|&nbsp;)", "");  // 공백제거

		try {
			byte[] bytes = r_val.getBytes("UTF-8");     // 바이트로 보관
			if(szKey != null && !szKey.equals("")) {
				nLengthPrev = (r_val.indexOf(szKey) == -1)? 0: r_val.indexOf(szKey);
				nLengthPrev = r_val.substring(0, nLengthPrev).getBytes("MS949").length; // 위치까지길이를 byte로 다시 구한다
				nLengthPrev = (nLengthPrev-nPrev >= 0)? nLengthPrev-nPrev:0;    	// 앞부분부터 가져오도록한다.
			}

			// x부터 y길이만큼 잘라낸다. 한글안깨지게.
			int j = 0;

			if(nLengthPrev > 0) while(j < bytes.length) {
				if((bytes[j] & 0x80) != 0) {
					oF+=2; rF+=3; if(oF+2 > nLengthPrev) {break;} j+=3;
				} else {if(oF+1 > nLengthPrev) {break;} ++oF; ++rF; ++j;}
			}

			j = rF;

			while(j < bytes.length) {
				if((bytes[j] & 0x80) != 0) {
					if(oL+2 > nLength) {break;} oL+=2; rL+=3; j+=3;
				} else {if(oL+1 > nLength) {break;} ++oL; ++rL; ++j;}
			}

			if(bytes.length > rF && bytes.length > rL){
				r_val = new String(bytes, rF, rL, "UTF-8");
				if(isAdddot && rF+rL+3 <= bytes.length) {r_val+="..";}  // ...옵션
			}
			else{
				r_val = szText;
			}
		} catch(Exception e){ }

		return r_val;
	}
}
