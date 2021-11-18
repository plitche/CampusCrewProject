package com.project.resignation.commonUtil;

import java.io.IOException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

public class CookieBox {
	
	// 1차원 쿠키
	public static Cookie createCookie(String name, String value) throws IOException {
		return new Cookie(name, URLEncoder.encode(value, "euc-kr"));
	}

	public static Cookie createCookie(String name, String value, String path) throws IOException {
		Cookie cookie = new Cookie(name, URLEncoder.encode(value, "euc-kr"));
		cookie.setPath(path);
		return cookie;
	}

	public static Cookie createCookie(String name, String value, String path, int maxAge) throws IOException {
		Cookie cookie = new Cookie(name, URLEncoder.encode(value, "euc-kr"));
		cookie.setPath(path);
		cookie.setMaxAge(maxAge);
		return cookie;
	}

	public static Cookie createCookie(String name, String value, String domain, String path, int maxAge) throws IOException {
		Cookie cookie = new Cookie(name, URLEncoder.encode(value, "euc-kr"));
		cookie.setDomain(domain);
		cookie.setPath(path);
		cookie.setMaxAge(maxAge);
		return cookie;
	}

	public static Cookie createCookie(String name, String value, String domain, String path) throws IOException {
		Cookie cookie = new Cookie(name, URLEncoder.encode(value, "euc-kr"));
		cookie.setDomain(domain);
		cookie.setPath(path);
		return cookie;
	}

	// 2차원 쿠키 전용
	public static Cookie createCookie(String name, Map<String, Object> cookieMap) throws IOException {
		String value = makeCookieString(cookieMap);
		return new Cookie(name, URLEncoder.encode(value, "euc-kr"));
	}

	public static Cookie createCookie(String name, Map<String, Object> cookieMap, String path) throws IOException {
		String value = makeCookieString(cookieMap);
		Cookie cookie = new Cookie(name, URLEncoder.encode(value, "euc-kr"));
		cookie.setPath(path);
		return cookie;
	}

	public static Cookie createCookie(String name, Map<String, Object> cookieMap, String path, int maxAge) throws IOException {
		String value = makeCookieString(cookieMap);
		Cookie cookie = new Cookie(name, URLEncoder.encode(value, "euc-kr"));
		cookie.setPath(path);
		cookie.setMaxAge(maxAge);
		return cookie;
	}

	public static Cookie createCookie(String name, Map<String, Object> cookieMap, String domain, String path, int maxAge) throws IOException {
		String value = makeCookieString(cookieMap);
		Cookie cookie = new Cookie(name, URLEncoder.encode(value, "euc-kr"));
		cookie.setDomain(domain);
		cookie.setPath(path);
		cookie.setMaxAge(maxAge);
		return cookie;
	}

	public static Cookie createCookie(String name, Map<String, Object> cookieMap, String domain, String path) throws IOException {
		String value = makeCookieString(cookieMap);
		Cookie cookie = new Cookie(name, URLEncoder.encode(value, "euc-kr"));
		cookie.setDomain(domain);
		cookie.setPath(path);
		return cookie;
	}

	public static Map<String, Cookie> parseCookiesString(String cookieString) throws IOException {
		return parseCookiesString(cookieString, true);
	}

	public static Map<String, Cookie> parseCookiesString(String cookieString, boolean decode) throws IOException {
		if (cookieString == null) {
			return null;
		}
				
		Map<String, Cookie> result = new LinkedHashMap<String, Cookie>();
		String[] cookiesRaw = cookieString.split("&");
		
		for (int i = 0; i < cookiesRaw.length; i++) {
			String[] parts = cookiesRaw[i].split("=", 2);
			String value = parts.length > 1 ? parts[1] : "";
			if (value.length() >= 2 && value.startsWith("\"") && value.endsWith("\"")) {
				value = value.substring(1, value.length() - 1);
			}
			result.put(parts[0], new Cookie(parts[0], (decode) ? URLDecoder.decode(value, "euc-kr") : value));
		}

		return result;
	}
	
	
	public static String makeCookieString(Map<String, Object> cookieMap) throws IOException {
		return makeCookieString(cookieMap, true);
	}
	
	public static String makeCookieString(Map<String, Object> cookieMap, boolean encode) throws IOException {
		
		if (cookieMap == null) {
			return null;
		}
		
		String[] keys = (String[])cookieMap.keySet().toArray(new String[0]);
		int keyCount = keys.length;
		
		StringBuffer cookieString = new StringBuffer();
		
		for (int i = 0; i < keyCount; i++) {
			cookieString.append(keys[i]).append("=").append((encode) ? URLEncoder.encode((String)cookieMap.get(keys[i]), "euc-kr") : cookieMap.get(keys[i]));
			
			if (i != keyCount - 1) {
				cookieString.append("&");
			}
		}
		
		return cookieString.toString();
	}
	
	// cookie parse의 반환 값이 Map<String, String>
	public static Map<String, String> parseCookiesMapString(String cookieString) throws IOException {
		return parseCookiesMapString(cookieString, true);
	}
	
	// cookie parse의 반환 값이 Map<String, String>
	public static Map<String, String> parseCookiesMapString(String cookieString, boolean decode) throws IOException {
		if (cookieString == null) {
			return null;
		}
				
		Map<String, String> result = new LinkedHashMap<String, String>();
		String[] cookiesRaw = cookieString.split("&");
		
		for (int i = 0; i < cookiesRaw.length; i++) {
			String[] parts = cookiesRaw[i].split("=", 2);
			String value = parts.length > 1 ? parts[1] : "";
			if (value.length() >= 2 && value.startsWith("\"") && value.endsWith("\"")) {
				value = value.substring(1, value.length() - 1);
			}
			result.put(parts[0], (decode) ? URLDecoder.decode(value, "euc-kr") : value);
		}

		return result;
	}

	// Map<String, String> 타입인 데이터를 queryString 형태의 쿠키 값으로 만들어주는 메소드.
	public static String makeCookieMapString(Map<String, String> cookieMap) throws IOException {
		return makeCookieMapString(cookieMap, true);
	}

	// Map<String, String> 타입인 데이터를 queryString 형태의 쿠키 값으로 만들어주는 메소드.
	public static String makeCookieMapString(Map<String, String> cookieMap, boolean encode) throws IOException {
		
		if (cookieMap == null) {
			return null;
		}
		
		String[] keys = (String[])cookieMap.keySet().toArray(new String[0]);
		int keyCount = keys.length;
		
		StringBuffer cookieString = new StringBuffer();
		
		for (int i = 0; i < keyCount; i++) {			
			cookieString.append(keys[i]).append("=").append((encode) ? URLEncoder.encode((String)cookieMap.get(keys[i]), "euc-kr") : cookieMap.get(keys[i]));
			
			if (i != keyCount - 1) {
				cookieString.append("&");
			}
		}
		
		return cookieString.toString();
	}
	
	public static Cookie setCookie(String name, String value) throws IOException {
		return new Cookie(name, value);
	}

	public static Cookie setCookie(String name, String value, String path) throws IOException {
		Cookie cookie = new Cookie(name, value);
		cookie.setPath(path);
		return cookie;
	}

	public static Cookie setCookie(String name, String value, String path, int maxAge) throws IOException {
		Cookie cookie = new Cookie(name, value);
		cookie.setPath(path);
		cookie.setMaxAge(maxAge);
		return cookie;
	}

	public static Cookie setCookie(String name, String value, String domain, String path, int maxAge) throws IOException {
		Cookie cookie = new Cookie(name, value);
		cookie.setDomain(domain);
		cookie.setPath(path);
		cookie.setMaxAge(maxAge);
		return cookie;
	}

	public static Cookie setCookie(String name, String value, String domain, String path) throws IOException {
		Cookie cookie = new Cookie(name, value);
		cookie.setDomain(domain);
		cookie.setPath(path);
		return cookie;
	}	
	
	public static Cookie getCookie(HttpServletRequest request, String name) {
		Cookie[] cookies = request.getCookies();
		Cookie cookie = null;
		if (cookies != null) {
			for (int inx = 0; inx < cookies.length; inx++) {
				if (name.equals(cookies[inx].getName())) {
					cookie = cookies[inx];
					break;
				}
			}
		}
		return cookie;
	}
	
	public static String getValue(HttpServletRequest request, String name) throws IOException {
		Cookie cookie = getCookie(request, name);

		if (cookie == null) {
			return null;
		}

		return URLDecoder.decode(cookie.getValue(), "euc-kr");
	}
	
}