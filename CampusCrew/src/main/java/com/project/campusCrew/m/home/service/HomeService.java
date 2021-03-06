package com.project.campusCrew.m.home.service;

import java.util.List;
import java.util.Map;

public interface HomeService {

	/**
	 * @author 권용수 
	 * @describe 모바일 홈 필터 탭 가져오기
	 */
	public List<Map<String, Object>> getFIlterTabList();
	
	
	/**
	 * @author 권용수 
	 * @describe 모바일 홈 리스트 가져오기 ajax
	 */
	public List<Map<String, Object>> getHomeCrewList(String filterName);
}
