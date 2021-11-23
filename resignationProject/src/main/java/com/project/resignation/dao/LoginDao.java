package com.project.resignation.dao;

import com.project.resignation.vo.attachmentVO.AttachmentVO;
import com.project.resignation.vo.loginStepVO.LoginStep01VO;

public interface LoginDao {

	public LoginStep01VO loginInfoCheck(LoginStep01VO loginStep01VO);
	
	public AttachmentVO memberPhoto(String email);

	public LoginStep01VO selectNaver(LoginStep01VO loginStep01VO);
	
	public int insertNaverInfo(LoginStep01VO loginStep01VO);
	
	public int updatePhoto(LoginStep01VO loginStep01VO);
	
	public AttachmentVO getNaverPhoto(LoginStep01VO loginStep01VO);
	
	
}
