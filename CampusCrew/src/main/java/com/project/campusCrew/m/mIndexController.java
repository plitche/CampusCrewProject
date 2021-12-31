package com.project.campusCrew.m;

import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

// 모바일 indexController
@Controller
@RequestMapping(value="/m")
public class mIndexController {

	private static final Logger logger = LoggerFactory.getLogger(mIndexController.class);
	
	@RequestMapping(value = "", method = RequestMethod.GET)
	public String home(Locale locale, Model model) throws Exception {
		
		String path = "/campusCrew";
		String developer = "나정호/권용수/이해림";
		
		model.addAttribute("path", path );
		model.addAttribute("developer", developer );
		
		return "m/index";
	}
	
	
}
