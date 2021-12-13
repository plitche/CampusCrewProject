package com.project.campusCrew.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.campusCrew.dao.TestDao;
import com.project.campusCrew.service.TestService;

@Service
public class TestServiceImpl implements TestService {
	
	@Autowired
	TestDao testDao;
	
	@Override
	public int testServiceMethod1() throws Exception {
		return testDao.testServiceMethod1();
	}

}
