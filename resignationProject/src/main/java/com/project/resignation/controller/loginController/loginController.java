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

import com.project.resignation.service.LoginService;
import com.project.resignation.vo.loginStepVO.LoginStep01VO;

@Controller
@RequestMapping(value="/login")
public class loginController {
	
	@Autowired
	LoginService loginService;
	
	// 이메일 비밀번호 입력 받은 후 존재하는지 체크 한 후 로그인
	@RequestMapping(value="step01"
							   , method=RequestMethod.POST
							   , produces="application/json; charset=UTF-8")
	@ResponseBody
	public Map<String, Object> login(@RequestBody LoginStep01VO loginStep01VO
												  , Model model
												  , HttpSession session) throws Exception {
		
		Map<String, Object> loginResultData = new HashMap<String, Object>();
		
		return loginResultData;
		
	}
	
	

}
