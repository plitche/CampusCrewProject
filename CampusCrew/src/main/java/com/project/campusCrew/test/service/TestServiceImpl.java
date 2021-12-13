package com.project.campusCrew.test.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.campusCrew.test.dao.TestDao;

@Service
public class TestServiceImpl implements TestService {
	
	@Autowired
	TestDao testDao;
	
	@Override
	public int testServiceMethod1() throws Exception {
		return testDao.testServiceMethod1();
	}

}
