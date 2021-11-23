package com.project.resignation.daoImpl;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.resignation.dao.LoginDao;
import com.project.resignation.vo.attachmentVO.AttachmentVO;
import com.project.resignation.vo.loginStepVO.LoginStep01VO;

@Service
public class LoginDaoImpl implements LoginDao {
	
	@Autowired
	private SqlSession sqlsession;
	
	@Override
	public LoginStep01VO loginInfoCheck(LoginStep01VO loginStep01VO) {
		return sqlsession.selectOne("Login.loginInfoCheck", loginStep01VO);
	}
	
	@Override
	public AttachmentVO memberPhoto(String email) {
		return sqlsession.selectOne("Login.memberPhoto", email);
	}
	
	@Override
	public LoginStep01VO selectNaver(LoginStep01VO loginStep01VO) {
		return sqlsession.selectOne("Login.selectNaver", loginStep01VO);
	}
	
	@Override
	public int insertNaverInfo(LoginStep01VO loginStep01VO) {
		return sqlsession.insert("Login.insertNaverInfo", loginStep01VO);
	}

	@Override
	public int updatePhoto(LoginStep01VO loginStep01VO) {
		return sqlsession.update("Login.updatePhoto", loginStep01VO);
	}
	
	@Override
	public AttachmentVO getNaverPhoto(LoginStep01VO loginStep01VO) {
		return sqlsession.selectOne("Login.getNaverPhoto", loginStep01VO);
	}

}
