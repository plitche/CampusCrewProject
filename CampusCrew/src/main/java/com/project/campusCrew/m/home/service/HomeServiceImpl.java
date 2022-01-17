package com.project.campusCrew.m.home.service;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HomeServiceImpl implements HomeService {

	@Autowired
	SqlSession sqlsession;
	
	/**
	 * @author 권용수 
	 * @describe 모바일 홈 필터 탭 가져오기
	 */
	@Override
	public List<Map<String, Object>> getFIlterTabList() {
		List<Map<String, Object>> returnMap = sqlsession.selectList("Home.GetFilterTabList"); 
		return returnMap;
	}
	
}
