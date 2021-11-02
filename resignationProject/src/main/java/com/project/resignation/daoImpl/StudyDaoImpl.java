package com.project.resignation.daoImpl;

import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.resignation.dao.StudyDao;

@Service
public class StudyDaoImpl implements StudyDao {
	
	@Autowired
	SqlSession sqlsession;
	
	@Override
	public List<Map<String, Object>> goStudyMain() {
		List<Map<String, Object>> studyList = sqlsession.selectList("Study.getStudyInfoList");
		
		for (Map<String, Object> studyItem : studyList) {
			// DB에서 조회한 date타입의 날짜를 2021. 10. 29 형태로 formatting
			SimpleDateFormat changeDate = new SimpleDateFormat("yyyy. MM. dd");
			String tempStartDate = changeDate.format(studyItem.get("DTSTARTDATE"));
			String tempEndDate = changeDate.format(studyItem.get("DTSTARTDATE"));
			studyItem.replace("DTSTARTDATE", tempStartDate);
			studyItem.replace("DTENDDATE", tempEndDate);
		}
		
		return studyList;
	}
	
	@Override
	public Map<String, Object> getEachStudyInfo(int iStudyNo) {
		Map<String, Object> eachStudyInfo = sqlsession.selectOne("Study.getEachStudyInfo", iStudyNo);
		System.out.println(eachStudyInfo);
		return eachStudyInfo;
	}
	
	@Override
	public Map<String, Object> getStudyParticipants(int iStudyNo) {
		Map<String, Object> returnMap = new HashMap<>();
		
		List<Map<String, Object>> needPosition = sqlsession.selectList("Study.getStudyNeedPosition", iStudyNo);
		List<Map<String, Object>> emptyPosition = sqlsession.selectList("Study.getEmptyStudyPosition", iStudyNo);
		
		if (needPosition.size() < emptyPosition.size()) {
			// todo 에러 띄우기
		}
		
		returnMap.put("needPosition", needPosition);
		returnMap.put("emptyPosition", emptyPosition);
		
		System.out.println(needPosition.get(0));
		System.out.println(emptyPosition.get(0));
		
		return returnMap;
	}
}
