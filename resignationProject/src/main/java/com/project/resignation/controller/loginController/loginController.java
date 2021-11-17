package com.project.resignation.controller.loginController;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.project.resignation.service.LoginService;
import com.project.resignation.vo.attachmentVO.AttachmentVO;
import com.project.resignation.vo.loginStepVO.LoginStep01VO;

@Controller
@RequestMapping(value="/login")
public class loginController {
	
	@Autowired
	LoginService loginService;
	
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
		
		String email = loginCheckResult.getVcMemberId();
		
		// 로그인 정보(이메일)와 같은 프로필사진을 가져온다.
		AttachmentVO attachmentInfo = loginService.memberPhoto(email);
		String vcFilename = attachmentInfo.getVcFilename();
		// 프로필사진이 존재한다면 세션에 저장할 변수에 프로필사진 파일명을 넣어준다.
		if (attachmentInfo.getVcFilename() != null) {
			loginCheckResult.setVcFilename(vcFilename);
		}
		
		System.out.println(loginCheckResult);
		// 같은 정보가 있다면
		if (loginCheckResult != null) {
			// 로그인 결과는 성공이다.
			session.setAttribute("loginUser", loginCheckResult);
			loginResultData.put("success", "Y");
		// 같은 정보가 없다면
		} else {
			// 로그인 할 수 없는 정보이니 로그인 실패이다.
			loginResultData.put("success", "N");
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
