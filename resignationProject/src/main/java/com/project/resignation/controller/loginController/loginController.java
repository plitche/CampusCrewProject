package com.project.resignation.controller.loginController;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.github.scribejava.core.model.OAuth2AccessToken;
import com.project.resignation.commonUtil.JsonParser;
import com.project.resignation.service.LoginService;
import com.project.resignation.vo.attachmentVO.AttachmentVO;
import com.project.resignation.vo.loginStepVO.LoginStep01VO;

@Controller
@RequestMapping(value="/login")
public class loginController {
	
	/* naverLoginBO */
	private naverLoginBO naverloginbo;
	private String naverLoginResult = null;
	
	@Autowired
	private void setNaverLoginBO (naverLoginBO naverloginbo) {
		this.naverloginbo = naverloginbo;
	}
	
	@Autowired
	LoginService loginService;
	
	
	// 네이버 로그인 첫 화면 요청 메소드
	@RequestMapping(value="/naverLogin"
							   , method= {RequestMethod.GET, RequestMethod.POST}
							   , produces="application/json; charset=UTF-8")
	@ResponseBody
	public Map<String, Object> naverLogin(Model model, HttpSession session) {
		
		Map<String , Object> naverLoginUrlResult = new HashMap<String, Object>();
		
		/* 네이버 아이디로 인증 URL을 생성하기 위하여 naverLoginBO 클래스의 getAuthorizationUrl 메소드 호출 */
		String naverAuthUrl = naverloginbo.getAuthorizationUrl(session);
		
		//https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=*****************&
        //redirect_uri=http%3A%2F%2F211.63.89.90%3A8090%2Flogin_project%2Fcallback&state=e68c269c-5ba9-4c31-85da-54c16c658125
		System.out.println("네이버:" + naverAuthUrl);
		
		naverLoginUrlResult.put("url", naverAuthUrl);
		
		return naverLoginUrlResult;
	}
	
	// 네이버 로그인 성공 시 callback 호출 메소드
	@RequestMapping(value="/naverLogin/callback"
							   , method= {RequestMethod.GET, RequestMethod.POST})
	public String NaverLoginCallback(Model model
												, @RequestParam String code
												, @RequestParam String state
												, HttpSession session
												, LoginStep01VO loginStep01Vo) throws Exception {
		
		
		System.out.println("여기는 callback");
		JsonParser json = new JsonParser();
		
		
		OAuth2AccessToken oauthToken;
		oauthToken = naverloginbo.getAccessToken(session, code, state);
		// 로그인 사용자 정보를 읽어온다.
		naverLoginResult = naverloginbo.getUserProfile(session, oauthToken);
		JSONParser parser = new JSONParser();
		Object obj = parser.parse(naverLoginResult);
		JSONObject jsonObj = (JSONObject)obj;
		JSONObject response_obj = (JSONObject)jsonObj.get("response");
		
		
		//loginStep01Vo = json.changeJson(naverLoginResult); // loginStep01Vo에 naver에서 받아온 email, nickname, profile_image 저장
		//System.out.println("첫번째 loginStep01Vo:::::::::::::::" + loginStep01Vo);
		System.out.println("첫번째 :::::::::::::::: " + response_obj);
		
		

		// 네이버 정보의 이메일 정보와 같은 정보가 있으면 모든 정보가져오기 위해 선언
		LoginStep01VO getLoginInfo = loginService.selectNaver(response_obj);
		//LoginStep01VO getLoginInfo = loginService.selectNaver(loginStep01Vo);
		// 이메일로 기존에 회원가입된 정보가 있는 지 확인한다. 회원정보가 있으면 바로 session에 저장
		if (getLoginInfo != null) {
//			getLoginInfo.setVcFilename(response_obj.get("profile_image"));
			getLoginInfo.setLoginType("2");
			System.out.println("두번째 loginStep01Vo:::::::::::::::" + getLoginInfo);
			session.setAttribute("loginUser", getLoginInfo);
			
		// 회원정보가 없으면 이메일, 닉네임, 프로필사진명을 집어넣는다.
		} else {
			loginService.insertNaverInfo(loginStep01Vo);
			loginStep01Vo.setLoginType("2");
			System.out.println("회원정보가 없을때 :::::::::" + loginStep01Vo);
			session.setAttribute("loginUser", loginStep01Vo);
		}
		
		return "index";
	}
	
	
	// 이메일 비밀번호 입력 받은 후 존재하는지 체크 한 후 로그인
	@SuppressWarnings("unused")
	@RequestMapping(value="/step01"
							   , method=RequestMethod.POST
							   , produces="application/json; charset=UTF-8")
	@ResponseBody
	public Map<String, Object> login(@RequestBody LoginStep01VO loginStep01VO
												  , Model model
												  , RedirectAttributes redirect
												  , HttpSession session) throws Exception {
		
		Map<String, Object> loginResultData = new HashMap<String, Object>();
		
		// 로그인 정보와 같은 정보가 있는지 확인하고 있다면 회원정보를 다 가져온다.
		LoginStep01VO loginCheckResult = loginService.loginInfoCheck(loginStep01VO);
		
		if (loginCheckResult == null) {
			// 로그인 할 수 없는 정보이니 로그인 실패이다.
			loginResultData.put("success", "N");
			return loginResultData;
		}
		
		String email = loginCheckResult.getVcMemberId();
		
		// 로그인 정보(이메일)와 같은 프로필사진을 가져온다.
		AttachmentVO attachmentInfo = loginService.memberPhoto(email);
		String vcFilename = attachmentInfo.getVcFilename();
		// 프로필사진이 존재한다면 세션에 저장할 변수에 프로필사진 파일명을 넣어준다.
		if (attachmentInfo.getVcFilename() != null) {
			loginCheckResult.setVcFilename(vcFilename);
		}
		loginCheckResult.setLoginType("1"); // 일반회원가입으로 로그인한 것이라는 표시
		System.out.println(loginCheckResult);
		// 같은 정보가 있다면
		if (loginCheckResult != null) {
			// 로그인 결과는 성공이다.
			session.setAttribute("loginUser", loginCheckResult);
			loginResultData.put("success", "Y");
		// 같은 정보가 없다면
		} 
		
		return loginResultData;
		
	}
	
	
	
	
	// 로그아웃
	@RequestMapping(value="/logOut"
							  , method=RequestMethod.POST
							  , produces="application/json; charset=UTF-8")
	@ResponseBody
	public Map<String, Object> logOut(Model model
												    , HttpSession session	) throws Exception {
		
		Map<String, Object> logOutResultData = new HashMap<String, Object>();
		
		session.removeAttribute("loginUser");
		
		String UserInfo = (String) session.getAttribute("loginUser");
		
		if (UserInfo == null || "".equals(UserInfo)) {
			// 로그아웃 성공
			logOutResultData.put("success", "Y");
		} else {
			// 로그아웃 실패
			logOutResultData.put("success", "N");
		}
		
		return logOutResultData;
	}
	

}
