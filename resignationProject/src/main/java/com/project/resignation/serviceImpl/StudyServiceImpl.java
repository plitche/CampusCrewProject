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
	
	// 각 스터디 페이지 진입시 정보 조회
	@Override
	public Map<String, Object> getEachStudyInfo(int iStudyNo) throws Exception {
		return studyDao.getEachStudyInfo(iStudyNo);
	}

	// 각 스터디 페이지 진입 시 필요 인원 정보 조회
	@Override
	public List<Map<String, Object>>  getStudyParticipants(int iStudyNo) {
		return studyDao.getStudyParticipants(iStudyNo);
	}
}
