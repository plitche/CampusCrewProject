package com.project.resignation.service;

import java.util.List;
import java.util.Map;

public interface StudyService {

	// 스터디 메인 페이지, 스터디 목록 가져오기
	public List<Map<String, Object>> goStudyMain();
	
	// 스터디 메인 페이지 진입시 필터링 정보 가져오기
	public Map<String, Object> getStudyFilter();
	
	// 각 스터디 페이지 진입시 정보 조회
	public Map<String, Object> getEachStudyInfo(int iStudyNo) throws Exception;
	
	// 각 스터디 페이지 진입 시 필요 인원 정보 조회
	public List<Map<String, Object>> getStudyParticipants(int iStudyNo);
	
	// 스터디 상세에서 포지션 지원
	public Map<String, Object> setApplyPostion(Map<String, Object> sendData);
	
}
