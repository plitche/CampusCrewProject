package com.project.campusCrew.daoImpl;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.campusCrew.dao.TestDao;

@Service
public class TestDaoImpl implements TestDao {
	
	@Autowired
	SqlSession sqlsession;
	
	@Override
	public int testServiceMethod1() throws Exception {
		
		// sqlsession.selectOne("Test.testDbProcedure2")
		
		return 3;
	}

}
