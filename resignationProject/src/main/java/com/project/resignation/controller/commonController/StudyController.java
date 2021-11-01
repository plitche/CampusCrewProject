package com.project.resignation.controller.commonController;

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
		Map<String, Object> studyInfo = studyService.getEachStudyInfo(iStudyNo);
		
		// Study 모집 인원 및 참여자 정보 조회
		
		
		return "/navMenu/study/eachStudy";
	}
	
}
