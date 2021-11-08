package com.project.resignation.controller.commonController;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.project.resignation.service.StudyService;

@Controller
@RequestMapping(value="/study")
public class StudyController {

	@Autowired
	StudyService studyService;
	
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
	
}
