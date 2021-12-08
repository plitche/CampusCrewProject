package com.project.resignation.serviceImpl;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.resignation.dao.LoginDao;
import com.project.resignation.service.LoginService;
import com.project.resignation.vo.attachmentVO.AttachmentVO;
import com.project.resignation.vo.loginStepVO.LoginStep01VO;

@Service
public class LoginServiceImpl implements LoginService {
	
	@Autowired
	LoginDao loginDao;
	
	@Override
	public LoginStep01VO loginInfoCheck(LoginStep01VO loginStep01VO) {
		return loginDao.loginInfoCheck(loginStep01VO);
	}
	
	@Override
	public AttachmentVO memberPhoto(String email) {
		return loginDao.memberPhoto(email);
	}
	@Override
	public LoginStep01VO selectNaver(JSONObject response_obj) {
		return loginDao.selectNaver(response_obj);
	}
	
	@Override
	public int insertNaverInfo(LoginStep01VO loginStep01VO) {
		return loginDao.insertNaverInfo(loginStep01VO);
	}
	
	@Override
	public int updatePhoto(LoginStep01VO loginStep01VO) {
		return loginDao.updatePhoto(loginStep01VO);
	}
	
	@Override
	public AttachmentVO getNaverPhoto(LoginStep01VO loginStep01VO) {
		return loginDao.getNaverPhoto(loginStep01VO);
	}
	
	
	
	

}
