package com.project.campusCrew.m.home.service;

import java.util.ArrayList;
import java.util.HashMap;
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
	
	/**
	 * @author 권용수 
	 * @describe 모바일 홈 리스트 가져오기 ajax
	 */
	@Override
	public List<Map<String, Object>> getHomeCrewList(String filterName) {
		List<Map<String, Object>> returnList = new ArrayList<Map<String,Object>>();
		Map<String, Object> tableData = new HashMap<String, Object>();
		tableData.put("filterName", filterName);
		
		switch(filterName) {
		case "투데이" : 
			// returnList = sqlsession.selectList("Home.GetTodayList", sendData);
			break;
		case "내주변" : 
			
			break;
		case "단기크루" :
			tableData.put("tableName", "tbOneDayCrew");
			returnList = sqlsession.selectList("Home.GetCrewList", tableData);
			break;
		case "장기크루" :
			tableData.put("tableName", "tbLongCrew");
			returnList = sqlsession.selectList("Home.GetCrewList", tableData);
			break;
		case "크루활동" : 
			returnList = sqlsession.selectList("Home.GetCrewActivityList", tableData);
			break;
		default :  
			returnList = sqlsession.selectList("Home.getListByFilterName", tableData);
			break;
		}
		
		return returnList;
	}
}
