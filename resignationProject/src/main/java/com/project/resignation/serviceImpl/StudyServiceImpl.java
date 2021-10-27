package com.project.resignation.serviceImpl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.resignation.dao.StudyDao;
import com.project.resignation.service.StudyService;

@Service
public class StudyServiceImpl implements StudyService {
	
	@Autowired
	StudyDao studyDao;

	// 스터디 메인 페이지
	@Override
	public List<Map<String, Object>> goStudyMain() {
		return studyDao.goStudyMain();
	}
	

}
