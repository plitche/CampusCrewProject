package com.project.resignation.controller.commonController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.project.resignation.service.TestService;

@Controller
@RequestMapping(value="/study")
public class studyController {

	@Autowired
	TestService testService; 
	
	@RequestMapping(value="/{studyNum}", method=RequestMethod.GET)
	public String goIndex(@PathVariable("studyNum") String studyNum,
									Model model) throws Exception {
		
		return "/navMenu/study/" + studyNum;
	}
	
}
