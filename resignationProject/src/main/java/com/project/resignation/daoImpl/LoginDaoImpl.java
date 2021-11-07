package com.project.resignation.daoImpl;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.resignation.dao.LoginDao;

@Service
public class LoginDaoImpl implements LoginDao {
	
	@Autowired
	private SqlSession sqlsession;
	
	

}
