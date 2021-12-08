package com.project.resignation.service;

import org.json.simple.JSONObject;

import com.project.resignation.vo.attachmentVO.AttachmentVO;
import com.project.resignation.vo.loginStepVO.LoginStep01VO;

public interface LoginService {

	// 회원인지 아닌지 확인
	public LoginStep01VO loginInfoCheck(LoginStep01VO loginStep01VO);
	
	// 이메일정보와 같은 프로필사진을 가져온다
	public AttachmentVO memberPhoto(String email);
		
	// 네이버이메일과 같은 아이디정보가 있는지 확인한다.
	//public LoginStep01VO selectNaver(LoginStep01VO loginStep01VO);
	public LoginStep01VO selectNaver(JSONObject response_obj);
	
	// 네이버 이메일과 같은 정보가 없으면 이메일, 닉네임을 삽입한다.
	public int insertNaverInfo(LoginStep01VO loginStep01VO);
	
	// 네이버 정보의 사진을 업데이트한다.
	public int updatePhoto(LoginStep01VO loginStep01VO);
	
	// 네이버 정보로 업데이트된 사진을 가져온다.
	public AttachmentVO getNaverPhoto(LoginStep01VO loginStep01VO);
	
}
