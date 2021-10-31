package com.project.resignation.controller.commonController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.project.resignation.service.StudyService;
import com.project.resignation.service.TestService;

@Controller
@RequestMapping(value="/study")
public class StudyController {

	@Autowired
	StudyService studyService;
	
	@RequestMapping(value="/eachStudy", method=RequestMethod.GET)
	public String goIndex(@RequestParam(value="iStudyNo") int iStudyNo,
									Model model) throws Exception {
	
		
		
		return "/navMenu/study/eachStudy";
	}
	
}
