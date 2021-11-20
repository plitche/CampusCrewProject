package com.project.resignation.controller.commonController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.project.resignation.service.StudyService;

@Controller
@RequestMapping(value="/study")
public class StudyController {

	@Autowired
	StudyService studyService;
	
	// studyList 정보 조회
	@RequestMapping(value="/getStudyList", method=RequestMethod.GET, produces="application/json; charset=utf-8")
	public @ResponseBody Map<String, Object> getStudyLIst() {
		Map<String, Object> returnMap = new HashMap<>();
		List<Map<String, Object>> studyList = studyService.goStudyMain();
		returnMap.put("studyList", studyList);
		return returnMap;
	}
	
	// eachStudy 정보 조회
	@RequestMapping(value="/eachStudy", method=RequestMethod.GET)
	public String goIndex(@RequestParam(value="iStudyNo") int iStudyNo,
									Model model) throws Exception {
	
		// 각 Study 정보 조회
		try {
			Map<String, Object> studyInfo = studyService.getEachStudyInfo(iStudyNo);
			model.addAttribute("studyInfo" , studyInfo);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		// 각 Study 필요 참가자 / 참가 희망자 정보 조회
		try {
			List<Map<String, Object>> participantsInfoList = studyService.getStudyParticipants(iStudyNo);
			model.addAttribute("participantsInfoList" , participantsInfoList);
		} catch (Exception e) {
			e.printStackTrace();
		}

		return "/navMenu/study/eachStudy";
	}
	
	// Study상세 > 지원
	@RequestMapping(value="/applyPosition", method=RequestMethod.POST, produces="application/json; charset=utf-8")
	public @ResponseBody Map<String, Object> applyPosition(@RequestParam("iStudyNo") String iStudyNo,
																						@RequestParam("positionName") String positionName,
																						@RequestParam("applyID") String applyID) {
		Map<String, Object> sendData = new HashMap<>();
		sendData.put("iStudyNo", iStudyNo);
		sendData.put("positionName", positionName);
		sendData.put("applyID", applyID);
		Map<String, Object> resultMap = studyService.setApplyPostion(sendData);
		
		return resultMap;
	}
	
	@RequestMapping(value="/registStudy", method=RequestMethod.GET)
	public String registStudy(Model model) {
		return "/navMenu/study/registStudy";
	}
}
