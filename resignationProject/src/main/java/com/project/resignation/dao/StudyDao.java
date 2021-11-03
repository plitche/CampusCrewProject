package com.project.resignation.dao;

import java.util.List;
import java.util.Map;

public interface StudyDao {

	// 스터디 메인 페이지
	public List<Map<String, Object>> goStudyMain();
	
	// 각 스터디 페이지 진입시 정보 조회
	public Map<String, Object> getEachStudyInfo(int iStudyNo);
	
	// 각 스터디 페이지 진입 시 필요 인원 정보 조회
	public Map<String, Object> getStudyParticipants(int iStudyNo);
}
