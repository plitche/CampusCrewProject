package com.project.resignation.daoImpl;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.resignation.dao.JoinDao;
import com.project.resignation.vo.joinStepVO.JoinStep01VO;

@Service
public class JoinDaoImpl implements JoinDao {

	@Autowired
	private SqlSession sqlsession;
	
	@Override
	public JoinStep01VO checkMember(JoinStep01VO joinStep01VO) {
		return sqlsession.selectOne("Join.checkMember", joinStep01VO);
	}
	
	@Override
	public int insertMemberInfo(JoinStep01VO joinStep01VO) {
		return sqlsession.insert("Join.insertMemberInfo", joinStep01VO);
	}

}
