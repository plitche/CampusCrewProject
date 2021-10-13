package com.project.resignation.controller.commonController;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.project.resignation.service.StudyService;

@Controller
@RequestMapping(value="/navigation")
public class navController {

	@Autowired
	StudyService studyService; 
	
	@RequestMapping(value="/{navigationBtn}", method=RequestMethod.GET)
	public String goIndex(@PathVariable("navigationBtn") String navigationBtn,
									Model model) throws Exception {
		
		List<Object> test = new ArrayList<>();
		
		switch(navigationBtn) {
		case "introduction" :
			
			break;
		case "project" :
			
			break;
		case "study" : 
			test = studyService.goStudyMain();
			model.addAttribute("studyTest", test.get(0));
			break;
		}

		return "/navMenu/"+ navigationBtn + "/" + navigationBtn + "Main";
	}
	
}
