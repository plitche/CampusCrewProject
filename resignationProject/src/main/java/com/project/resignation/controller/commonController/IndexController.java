package com.project.resignation.controller.commonController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.project.resignation.service.TestService;

@Controller
public class IndexController {

	@Autowired
	TestService testService; 
	
	@RequestMapping(value="/", method=RequestMethod.GET)
	public String goIndex(Model model) throws Exception {
		
		int test = testService.testServiceMethod1();
		System.out.println(test);;
		
		model.addAttribute("test", test);
		return "index";
	}
	
}
