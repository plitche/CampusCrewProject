package com.project.resignation.daoImpl;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
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
		List<Map<String, Object>> studyList = sqlsession.selectList("GetStudy.getStudyInfoList");
		
		for (Map<String, Object> studyItem : studyList) {
			// DB에서 조회한 date타입의 날짜를 2021. 10. 29 형태로 formatting
			SimpleDateFormat changeDate = new SimpleDateFormat("yyyy.mm.dd");
			String tempStartDate = changeDate.format(studyItem.get("DTSTARTDATE"));
			String tempEndDate = changeDate.format(studyItem.get("DTSTARTDATE"));
			studyItem.replace("DTSTARTDATE", tempStartDate);
			studyItem.replace("DTENDDATE", tempEndDate);
		}
		
		return studyList;
	}
	
	@Override
	public Map<String, Object> getStudyFilter() {
		Map<String, Object> returnMap = new HashMap<>();
		List<Map<String, Object>> subjectList = sqlsession.selectList("GetStudy.getSubjectList");
		List<Map<String, Object>> locationList = sqlsession.selectList("GetStudy.getLocationList");
		
		returnMap.put("subjectList", subjectList);
		returnMap.put("locationList", locationList);
		return returnMap;
	}
	
	@Override
	public Map<String, Object> getEachStudyInfo(int iStudyNo) throws Exception {
		Map<String, Object> eachStudyInfo = sqlsession.selectOne("GetStudy.getEachStudyInfo", iStudyNo);
		
		// todo 게시글 insert시 hit 0으로 insert 시키기
		
		try {
			SimpleDateFormat changeDate = new SimpleDateFormat("yyyy-mm-dd");
			
			// 자바 날짜 계산
	        // 두 날짜를 parse()를 통해 Date형으로 변환.
	        // Date로 변환된 두 날짜를 계산한 뒤 그 리턴값으로 long type 변수를 초기화 하고 있다.
	        // Date.getTime() 은 해당날짜를 기준으로1970년 00:00:00 부터 몇 초가 흘렀는지를 반환해준다.
			String tempStartDate = changeDate.format(eachStudyInfo.get("DTSTARTDATE"));
			String tempEndDate = changeDate.format(eachStudyInfo.get("DTENDDATE"));
			eachStudyInfo.replace("DTSTARTDATE", tempStartDate);
			eachStudyInfo.replace("DTENDDATE", tempEndDate);
			long duration = changeDate.parse(tempStartDate).getTime() - changeDate.parse(tempEndDate).getTime();
			
			eachStudyInfo.put("duration", duration);	
		} catch (Exception e) {
			e.printStackTrace();
			eachStudyInfo.put("duration", "-");
		}
		
		return eachStudyInfo;
	}
	
	@Override
	public List<Map<String, Object>> getStudyParticipants(int iStudyNo) {
		List<Map<String, Object>> returnMapList = new ArrayList<Map<String,Object>>();
		List<Map<String, Object>> needPosition = sqlsession.selectList("GetStudy.getStudyNeedPosition", iStudyNo);
		List<Map<String, Object>> applyPosition = sqlsession.selectList("GetStudy.getApplyStudyPosition", iStudyNo);
		
		if (needPosition.size() < applyPosition.size()) {
			// todo 에러 띄우기
		}

		boolean isApply = false;
		for (Map<String, Object> tempNeed : needPosition) {
			Map<String, Object> positionMap = new HashMap<>();
			String needPostionName = (String)tempNeed.get("VCPOSITION");
			
			for (Map<String, Object> tempApply : applyPosition) {
				String applyPositionName = (String)tempApply.get("VCPOSITION");
				
				// 참여 예정자가 있는/없는 경우
				if (needPostionName.equals(applyPositionName)) {
					positionMap.put("APPLYSTATUS", tempApply.get("APPLYCOUNT") + "/" + tempNeed.get("NEEDCOUNT"));
					isApply = true;
					break;
				} else {
					isApply = false;
				}
			}
			
			positionMap.put("VCPOSITION", needPostionName);
			// 참여 예정자가 없는경우 0으로 put
			if (!isApply) {
				positionMap.put("APPLYSTATUS", "0/" + tempNeed.get("NEEDCOUNT"));
			}
			
			returnMapList.add(positionMap);
		}

		return returnMapList;
	}
	
	@Override
	public Map<String, Object> setApplyPostion(Map<String, Object> sendData) {
		Map<String, Object> returnMap = new HashMap<>();
		int iReturn = -1;
		
		// 빈 자리가 있는지 확인
		Map<String, Object> isEmpty= sqlsession.selectOne("GetStudy.getCanPostionApply", sendData);
		if (Integer.parseInt(String.valueOf(isEmpty.get("APPLYCOUNT"))) <= 0) {
			iReturn = 1;
		}
		
		// 신청한 내역이 있는지 확인
		Map<String, Object> applyInfo = sqlsession.selectOne("GetStudy.getIsAlreadyApply", sendData);
		if (applyInfo != null) {
			returnMap.put("appliedPosition", applyInfo.get("VCPOSITION"));
			iReturn = 2;
		}	
		
		// 위 경우 다 통과했을 때에 스터디 참가 신청 update하기
		if (iReturn != 1 && iReturn != 2) {
			int successApply = sqlsession.insert("SetStudy.setStudyApply", sendData);
			if (successApply > 0) {
				iReturn = 0;
			} 
		}
		
		returnMap.put("iReturn", iReturn);
		return returnMap;
	}
}
